import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/core/services';

fdescribe('AppComponent', () => {
  let component: LoginComponent;
  let routerSpy: jasmine.SpyObj<Router>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginComponent,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigateByUrl']) },
        { provide: AuthService, useValue: jasmine.createSpyObj('AuthService', ['isAuthenticated', 'login']) },
      ],
    });

    component = TestBed.get(LoginComponent);
    routerSpy = TestBed.get(Router);
    authServiceSpy = TestBed.get(AuthService);
  });

  describe('initial component state', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should define hasError as false', () => {
      expect(component.hasError).toBe(false);
    });

    it('should define public submit()', () => {
      expect(component.submit).toEqual(jasmine.any(Function));
    });

    it('should define ngOnInit()', () => {
      expect(component.ngOnInit).toEqual(jasmine.any(Function));
    });
  });

  describe('ngOnInit()', () => {
    it('should not redirect when user is not authenticated', () => {
      authServiceSpy.isAuthenticated.and.returnValue(false);

      component.ngOnInit();

      expect(routerSpy.navigateByUrl).not.toHaveBeenCalled();
    });

    it('should redirect to timeline when user is authenticated', () => {
      authServiceSpy.isAuthenticated.and.returnValue(true);

      component.ngOnInit();

      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/timeline');
    });
  });

  describe('submit()', () => {
    const form = { value: 'FOOBAR', submitted: false };

    it('should call login from auth service with form value', () => {
      authServiceSpy.login.and.returnValue(Promise.resolve());

      component.submit(form);

      expect(authServiceSpy.login).toHaveBeenCalledWith(form.value);
    });

    it('should redirect to timeline when login succeeded', async () => {
      authServiceSpy.login.and.returnValue(Promise.resolve({ success: true }));

      await component.submit(form);

      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('timeline');
    });

    it('should define hasError as true when login fail', async () => {
      authServiceSpy.login.and.returnValue(Promise.reject({ success: false }));

      await component.submit(form);

      expect(component.hasError).toBe(true);
    });

    it('should define errorMessage when login fail', async () => {
      const message = 'Sorry :(';
      authServiceSpy.login.and.returnValue(Promise.reject({ success: false, message }));

      await component.submit(form);

      expect(component.errorMessage).toBe(message);
    });
  })
});
