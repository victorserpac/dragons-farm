import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';
import { AuthService } from 'src/app/core/services';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let routerSpy: jasmine.SpyObj<Router>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeaderComponent,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigateByUrl']) },
        { provide: AuthService, useValue: jasmine.createSpyObj('AuthService', ['logout']) },
      ],
    });

    component = TestBed.get(HeaderComponent);
    routerSpy = TestBed.get(Router);
    authServiceSpy = TestBed.get(AuthService);
  });

  describe('initial component state', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should define public logout()', () => {
      expect(component.logout).toEqual(jasmine.any(Function));
    });

    it('should define public create()', () => {
      expect(component.create).toEqual(jasmine.any(Function));
    });
  });
  
  describe('logout()', () => {
    it('should call auth service logout', () => {
      component.logout();
      
      expect(authServiceSpy.logout).toHaveBeenCalled();
    });

    it('should redirect to "/"', () => {
      component.logout();
      
      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('');
    });
  });  

  describe('create()', () => {
    it('should emit event onCreate', () => {
      let emitted = false;

      component.onCreate.subscribe(() => (emitted = true));
      component.create();

      expect(emitted).toBe(true);
    });
  });
});
