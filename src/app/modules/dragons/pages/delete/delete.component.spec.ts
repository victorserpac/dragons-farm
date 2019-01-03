import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { DeleteComponent } from './delete.component';
import { DragonService, EventService } from 'src/app/core/services';
import { of } from 'rxjs';

describe('DeleteComponent', () => {
  const slug = 'foobar';
  let component: DeleteComponent;
  let routerSpy: jasmine.SpyObj<Router>;
  let dragonServiceSpy: jasmine.SpyObj<DragonService>;
  let eventServiceSpy: jasmine.SpyObj<EventService>;
  let activatedRoute = {
    params: of({ slug })
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeleteComponent,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']) },
        { provide: DragonService, useValue: jasmine.createSpyObj('DragonService', ['delete']) },
        { provide: EventService, useValue: jasmine.createSpyObj('eventServiceSpy', ['BroadcastEvent']) },
        { provide: ActivatedRoute, useValue: activatedRoute }
      ],
    });

    component = TestBed.get(DeleteComponent);
    routerSpy = TestBed.get(Router);
    dragonServiceSpy = TestBed.get(DragonService);
    eventServiceSpy = TestBed.get(EventService);
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

    it('should define public cancel()', () => {
      expect(component.cancel).toEqual(jasmine.any(Function));
    });

    it('should define public back()', () => {
      expect(component.back).toEqual(jasmine.any(Function));
    });

    it('should define public confirm()', () => {
      expect(component.confirm).toEqual(jasmine.any(Function));
    });

    it('should define ngOnDestroy()', () => {
      expect(component.ngOnDestroy).toEqual(jasmine.any(Function));
    });
  });

  describe('ngOnInit()', () => {
    it('should define slug received as params', () => {
      component.ngOnInit();

      expect(component.slug).toBe(slug);
    });
  });

  describe('cancel()', () => {
    it('should redirect to edit action outlet router with slug', () => {
      component.slug = slug;
      component.cancel();

      expect(routerSpy.navigate).toHaveBeenCalledWith([{ outlets: { action: ['edit', slug] } }]);
    });
  });

  describe('back()', () => {
    it('should redirect to timeline', () => {
      component.back();

      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('timeline');
    });
  });

  describe('confirm()', () => {
    it('should define isLoading as true', () => {
      dragonServiceSpy.delete.and.returnValue(Promise.resolve());

      component.confirm();

      expect(component.isLoading).toBe(true);
    });

    it('should broadcast event LIST_DRAGONS after delete dragon', async () => {
      dragonServiceSpy.delete.and.returnValue(Promise.resolve());

      await component.confirm();

      expect(eventServiceSpy.BroadcastEvent).toHaveBeenCalledWith('LIST_DRAGONS');
    });

    it('should redirect to delete-success action outlet router after delete dragon', async () => {
      dragonServiceSpy.delete.and.returnValue(Promise.resolve());

      await component.confirm();

      expect(routerSpy.navigate).toHaveBeenCalledWith([{ outlets: { action: 'delete-success' } }]);
    });

    it('should define isLoading as false after delete dragon', async () => {
      dragonServiceSpy.delete.and.returnValue(Promise.resolve());

      await component.confirm();

      expect(component.isLoading).toBe(false);
    });
  });
});
