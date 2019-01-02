import { TestBed } from '@angular/core/testing';
import MockDate from 'mockdate';

import { DragonComponent } from './dragon.component';
import { Dragon } from 'src/app/core/models';

describe('DragonComponent', () => {
  let component: DragonComponent;
  let dragon: Dragon;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DragonComponent,
      ],
    });

    MockDate.set('2019-01-02');

    dragon = {
      _id: '12321',
      created_at: '2019-01-01T23:30:00.000Z',
      histories: [],
      name: 'Foobar Test',
      slug: 'foobar-test',
      type: 'Rex',
    }

    component = TestBed.get(DragonComponent);
    component.dragon = dragon;
  });

  describe('initial component state', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should define ngOnInit()', () => {
      expect(component.ngOnInit).toEqual(jasmine.any(Function));
    });

    it('should define public view()', () => {
      expect(component.view).toEqual(jasmine.any(Function));
    });

    it('should define public edit()', () => {
      expect(component.edit).toEqual(jasmine.any(Function));
    });
  });

  describe('ngOnInit()', () => {
    it('should define dragon level as "level-1"', () => {
      component.ngOnInit();
      
      expect(component.level).toBe('level-1');
    });

    it('should define dragon level as "level-2"', () => {
      component.dragon.created_at = '2019-01-01T23:00:00.000Z'
      component.ngOnInit();
      
      expect(component.level).toBe('level-2');
    });

    it('should define dragon level as "level-3"', () => {
      component.dragon.created_at = '2019-01-01T13:00:00.000Z'
      component.ngOnInit();
      
      expect(component.level).toBe('level-3');
    });

    it('should define dragon level as "level-4"', () => {
      component.dragon.created_at = '2019-01-01T00:00:00.000Z'
      component.ngOnInit();
      
      expect(component.level).toBe('level-4');
    });
  });

  describe('view()', () => {
    it('should emit event onView with dragon slug', () => {
      component.onView.subscribe((slug: string) => expect(slug).toBe(dragon.slug));
      component.view();
    });
  });

  describe('edit()', () => {
    it('should emit event onEdit with dragon slug', () => {
      component.onEdit.subscribe((slug: string) => expect(slug).toBe(dragon.slug));
      component.edit();
    });
  });
});
