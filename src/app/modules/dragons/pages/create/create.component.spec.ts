import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CreateComponent } from './create.component';
import { DragonService, EventService } from 'src/app/core/services';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let routerSpy: jasmine.SpyObj<Router>;
  let dragonServiceSpy: jasmine.SpyObj<DragonService>;
  let eventServiceSpy: jasmine.SpyObj<EventService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CreateComponent,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: DragonService, useValue: jasmine.createSpyObj('DragonService', ['create']) },
        { provide: EventService, useValue: jasmine.createSpyObj('eventServiceSpy', ['BroadcastEvent']) },
      ],
    });

    component = TestBed.get(CreateComponent);
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

    it('should define public back()', () => {
      expect(component.back).toEqual(jasmine.any(Function));
    });

    it('should define public create()', () => {
      expect(component.create).toEqual(jasmine.any(Function));
    });
  });

  describe('back()', () => {
    it('should disable action outlet router', () => {
      component.back();

      expect(routerSpy.navigate).toHaveBeenCalledWith([{ outlets: { action: null } }]);
    });
  });

  describe('create()', () => {
    const form = { value: 'FOOBAR' };

    it('should define isLoading as true', () => {
      dragonServiceSpy.create.and.returnValue(Promise.resolve());

      component.create(form);

      expect(component.isLoading).toBe(true);
    });

    it('should broadcast event LIST_DRAGONS after create dragon', async () => {
      dragonServiceSpy.create.and.returnValue(Promise.resolve());

      await component.create(form);

      expect(eventServiceSpy.BroadcastEvent).toHaveBeenCalledWith('LIST_DRAGONS');
    });

    it('should redirect to create-success action outlet router after create dragon', async () => {
      dragonServiceSpy.create.and.returnValue(Promise.resolve());

      await component.create(form);

      expect(routerSpy.navigate).toHaveBeenCalledWith([{ outlets: { action: 'create-success' } }]);
    });

    it('should define isLoading as false after create dragon', async () => {
      dragonServiceSpy.create.and.returnValue(Promise.resolve());

      await component.create(form);

      expect(component.isLoading).toBe(false);
    });
  });
});
