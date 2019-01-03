import { TestBed } from '@angular/core/testing';
import MockDate from 'mockdate';

import { DragonScenarioComponent } from './dragon-scenario.component';

describe('DragonScenarioComponent', () => {
  let component: DragonScenarioComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DragonScenarioComponent,
      ],
    });

    MockDate.set('2019-01-02');

    component = TestBed.get(DragonScenarioComponent);
    component.createdAt = '2019-01-01T23:30:00.000Z';
  });

  describe('initial component state', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should define ngOnInit()', () => {
      expect(component.ngOnInit).toEqual(jasmine.any(Function));
    });
  });

  describe('ngOnInit()', () => {
    it('should define dragon level as "level-1"', () => {
      component.ngOnInit();

      expect(component.level).toBe('level-1');
    });

    it('should define dragon level as "level-2"', () => {
      component.createdAt = '2019-01-01T23:00:00.000Z'
      component.ngOnInit();

      expect(component.level).toBe('level-2');
    });

    it('should define dragon level as "level-3"', () => {
      component.createdAt = '2019-01-01T13:00:00.000Z'
      component.ngOnInit();

      expect(component.level).toBe('level-3');
    });

    it('should define dragon level as "level-4"', () => {
      component.createdAt = '2019-01-01T00:00:00.000Z'
      component.ngOnInit();

      expect(component.level).toBe('level-4');
    });
  });
});
