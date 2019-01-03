import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SuccessComponent } from './success.component';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRoute = {
    data: of({
      isCreate: true,
      isDelete: true,
      isUpdate: true,
    })
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SuccessComponent,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigateByUrl']) },
        { provide: ActivatedRoute, useValue: activatedRoute }
      ],
    });

    component = TestBed.get(SuccessComponent);
    routerSpy = TestBed.get(Router);
  });

  describe('initial component state', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should define ngOnInit()', () => {
      expect(component.ngOnInit).toEqual(jasmine.any(Function));
    });

    it('should define public back()', () => {
      expect(component.back).toEqual(jasmine.any(Function));
    });
  });

  describe('ngOnInit()', () => {
    it('should define isCreate as true', () => {
      component.ngOnInit();

      expect(component.isCreate).toBe(true);
    });

    it('should define isDelete as true', () => {
      component.ngOnInit();

      expect(component.isDelete).toBe(true);
    });

    it('should define isUpdate as true', () => {
      component.ngOnInit();

      expect(component.isUpdate).toBe(true);
    });
  });

  describe('back()', () => {
    it('should redirect to timeline', () => {
      component.back();

      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('timeline');
    });
  });
});
