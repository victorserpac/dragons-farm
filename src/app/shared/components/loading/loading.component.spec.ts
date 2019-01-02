import { TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadingComponent,
      ],
    });

    component = TestBed.get(LoadingComponent);
  });

  describe('initial component state', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });
  });
});
