import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TimelineComponent } from './timeline.component';
import { DragonService, EventService } from 'src/app/core/services';
import { Dragon } from 'src/app/core/models';

describe('TimelineComponent', () => {
  const slug = 'foobar';
  let component: TimelineComponent;
  let routerSpy: jasmine.SpyObj<Router>;
  let dragonServiceSpy: jasmine.SpyObj<DragonService>;
  let eventService: EventService;

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
        TimelineComponent,
        EventService,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate', 'navigate']) },
        { provide: DragonService, useValue: jasmine.createSpyObj('DragonService', ['list']) },
      ],
    });

    component = TestBed.get(TimelineComponent);
    routerSpy = TestBed.get(Router);
    dragonServiceSpy = TestBed.get(DragonService);
    eventService = TestBed.get(EventService);
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

    it('should define public listDragons()', () => {
      expect(component.listDragons).toEqual(jasmine.any(Function));
    });

    it('should define public newDragon()', () => {
      expect(component.newDragon).toEqual(jasmine.any(Function));
    });

    it('should define public view()', () => {
      expect(component.view).toEqual(jasmine.any(Function));
    });

    it('should define public edit()', () => {
      expect(component.edit).toEqual(jasmine.any(Function));
    });
  });

  describe('ngOnInit()', () => {
    it('should call listDragons', () => {
      const spy = spyOn(component, 'listDragons').and.returnValue('');

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
    });

    it('should call listDragons after dispatch event "LIST_DRAGONS"', () => {
      const spy = spyOn(component, 'listDragons').and.returnValue('');

      component.ngOnInit();

      eventService.BroadcastEvent('LIST_DRAGONS')

      expect(spy.calls.count()).toBe(2);
    });
  });

  describe('listDragons()', () => {
    const response = { items: [dragon] };
    it('should define isLoading as true', () => {
      dragonServiceSpy.list.and.returnValue(Promise.resolve(response));

      component.listDragons();

      expect(component.isLoading).toBe(true);
    });
    
    it('should call dragons service list without page', () => {
      dragonServiceSpy.list.and.returnValue(Promise.resolve(response));

      component.listDragons();

      expect(dragonServiceSpy.list).toHaveBeenCalledWith(undefined);
    });

    it('should call dragons service list with page', () => {
      dragonServiceSpy.list.and.returnValue(Promise.resolve(response));

      component.listDragons(2);

      expect(dragonServiceSpy.list).toHaveBeenCalledWith(2);
    });

    it('should define dragons after list', async () => {
      dragonServiceSpy.list.and.returnValue(Promise.resolve(response));

      await component.listDragons();

      expect(component.dragons).toEqual([dragon]);
    });

    it('should define isLoading as false after list dragons', async () => {
      dragonServiceSpy.list.and.returnValue(Promise.resolve(response));

      await component.listDragons();

      expect(component.isLoading).toBe(false);
    });
  });

  describe('newDragon()', () => {
    it('should redirect to create action outlet router', () => {
      component.newDragon();

      expect(routerSpy.navigate).toHaveBeenCalledWith([{ outlets: { action: 'create' } }]);
    });
  });

  describe('view()', () => {
    it('should redirect to view action outlet router with slug', () => {
      component.view(slug);

      expect(routerSpy.navigate).toHaveBeenCalledWith([{ outlets: { action: ['view', slug] } }]);
    });
  });

  describe('edit()', () => {
    it('should redirect to edit action outlet router with slug', () => {
      component.edit(slug);

      expect(routerSpy.navigate).toHaveBeenCalledWith([{ outlets: { action: ['edit', slug] } }]);
    });
  });
});
