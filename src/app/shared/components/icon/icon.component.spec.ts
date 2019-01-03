import { TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IconComponent,
      ],
    });

    component = TestBed.get(IconComponent);
  });

  describe('initial component state', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });
  });
});
