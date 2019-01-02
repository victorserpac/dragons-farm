import { TestBed } from '@angular/core/testing';

import { AuthService, LOCALSTORAGE_TOKEN_KEY, TOKEN } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthService] });

    service = TestBed.get(AuthService);
  });

  describe('initial service state', () => {
    it('should be created', () => {
      expect(service).toBeDefined();
    });

    it('should define public isAuthenticated()', () => {
      expect(service.isAuthenticated).toEqual(jasmine.any(Function));
    });

    it('should define public login()', () => {
      expect(service.login).toEqual(jasmine.any(Function));
    });

    it('should define public logout()', () => {
      expect(service.login).toEqual(jasmine.any(Function));
    });
  });

  describe('isAuthenticated()', () => {
    it('should call localStorage.getItem with LOCALSTORAGE_TOKEN_KEY key', () => {
      const spy = spyOn(localStorage, 'getItem').and.returnValue('');

      service.isAuthenticated();

      expect(spy).toHaveBeenCalledWith(LOCALSTORAGE_TOKEN_KEY);
    });

    it('should return true when there is token', () => {
      spyOn(localStorage, 'getItem').and.returnValue('MyToken');

      expect(service.isAuthenticated()).toBe(true);
    });

    it('should return false when there isn\'t token', () => {
      spyOn(localStorage, 'getItem').and.returnValue(undefined);

      expect(service.isAuthenticated()).toBe(false);
    });
  });

  describe('logout()', () => {
    it('should call localStorage.removeItem with LOCALSTORAGE_TOKEN_KEY key', () => {
      const spy = spyOn(localStorage, 'removeItem').and.returnValue('');

      service.logout();

      expect(spy).toHaveBeenCalledWith(LOCALSTORAGE_TOKEN_KEY);
    });
  });

  describe('login()', () => {
    it('should reject promise when login is incorret', (done) => {
      const user = { email: 'foo', password: 'foo' };

      service.login(user).catch(done);
    });

    it('should return success false when login is incorret', () => {
      const user = { email: 'foo', password: 'foo' };

      service.login(user)
        .catch((error) => {
          expect(error.success).toBe(false);
        });
    });

    it('should return message when login is incorret', () => {
      const user = { email: 'foo', password: 'foo' };

      service.login(user)
        .catch((error) => {
          expect(error.message).toBe('Ops =( parece que sua senha ou seu email estão incorretos');
        });
    });

    it('should return success true when login checks', () => {
      const user = { email: 'admin@dragons.com', password: '123456' };

      service.login(user)
        .then((response: any) => {          
          expect(response.success).toBe(true);
        });
    });

    it('should set token when login checks', () => {
      const user = { email: 'admin@dragons.com', password: '123456' };
      const spy = spyOn(localStorage, 'setItem').and.callThrough();

      service.login(user)
        .then((response: any) => {          
          expect(spy).toHaveBeenCalledWith(LOCALSTORAGE_TOKEN_KEY, TOKEN);
        });
    });
  });

});
