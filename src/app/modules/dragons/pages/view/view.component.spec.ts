import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ViewComponent } from './view.component';
import { DragonService } from 'src/app/core/services';
import { Dragon } from 'src/app/core/models';

describe('ViewComponent', () => {
  const slug = 'foobar';
  let component: ViewComponent;
  let routerSpy: jasmine.SpyObj<Router>;
  let dragonServiceSpy: jasmine.SpyObj<DragonService>;
  let activatedRoute = {
    params: of({ slug })
  }
  const dragon: Dragon = {
    _id: '12321',
    created_at: '2019-01-01T23:30:00.000Z',
    histories: [],
    name: 'Foobar Test',
    slug: 'foobar-test',
    type: 'Rex',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewComponent,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']) },
        { provide: DragonService, useValue: jasmine.createSpyObj('DragonService', ['get', 'update']) },
        { provide: ActivatedRoute, useValue: activatedRoute }
      ],
    });

    component = TestBed.get(ViewComponent);
    routerSpy = TestBed.get(Router);
    dragonServiceSpy = TestBed.get(DragonService);
  });

  describe('initial component state', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should define isLoading as false', () => {
      expect(component.isLoading).toBe(false);
    });

    it('should define ngOnInit()', () => {
      expect(component.ngOnInit).toEqual(jasmine.any(Function));
    });

    it('should define public getDragon()', () => {
      expect(component.getDragon).toEqual(jasmine.any(Function));
    });

    it('should define public back()', () => {
      expect(component.back).toEqual(jasmine.any(Function));
    });

    it('should define ngOnDestroy()', () => {
      expect(component.ngOnDestroy).toEqual(jasmine.any(Function));
    });
  });

  describe('ngOnInit()', () => {
    it('should define slug received as params', () => {
      const spy = spyOn(component, 'getDragon').and.returnValue('');

      component.ngOnInit();

      expect(spy).toHaveBeenCalledWith(slug);
    });
  });

  describe('getDragon()', () => {
    it('should define isLoading as true', () => {
      dragonServiceSpy.get.and.returnValue(Promise.resolve());

      component.getDragon(slug);

      expect(component.isLoading).toBe(true);
    });

    it('should define dragon after get', async () => {
      dragonServiceSpy.get.and.returnValue(Promise.resolve(dragon));

      await component.getDragon(slug);

      expect(component.dragon).toEqual(dragon);
    });

    it('should define isLoading as false after get dragon', async () => {
      dragonServiceSpy.get.and.returnValue(Promise.resolve());

      await component.getDragon(slug);

      expect(component.isLoading).toBe(false);
    });
  });

  describe('back()', () => {
    it('should redirect to timeline', () => {
      component.back();

      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('timeline');
    });
  });
});
