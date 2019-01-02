import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { AuthService } from '../services';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy: jasmine.SpyObj<Router>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigateByUrl']) },
        { provide: AuthService, useValue: jasmine.createSpyObj('AuthService', ['isAuthenticated']) },
      ],
    });

    guard = TestBed.get(AuthGuard);
    routerSpy = TestBed.get(Router);
    authServiceSpy = TestBed.get(AuthService);
  });

  describe('initial service state', () => {
    it('should be created', () => {
      expect(guard).toBeDefined();
    });

    it('should define public canActivate()', () => {
      expect(guard.canActivate).toEqual(jasmine.any(Function));
    });
  });

  describe('canActive()', () => {
    it('should return true when user is authenticated', () => {
      authServiceSpy.isAuthenticated.and.returnValue(true);

      expect(guard.canActivate()).toBe(true);
    });

    it('should return true when user isn\'t authenticated', () => {
      authServiceSpy.isAuthenticated.and.returnValue(false);

      expect(guard.canActivate()).toBe(false);
    });

    it('should redirect to "/" when user isn\'t authenticated', () => {
      authServiceSpy.isAuthenticated.and.returnValue(false);

      guard.canActivate();

      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/');
    });

    it('should not redirect when user is authenticated', () => {
      authServiceSpy.isAuthenticated.and.returnValue(true);

      guard.canActivate();

      expect(routerSpy.navigateByUrl).not.toHaveBeenCalled();
    });
  });
});