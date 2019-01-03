import { TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModalComponent,
      ],
    });    

    component = TestBed.get(ModalComponent);
  });

  describe('initial component state', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should define public close()', () => {
      expect(component.close).toEqual(jasmine.any(Function));
    });
  });  

  describe('close()', () => {
    it('should emit event onClose', () => {
      let emitted = false;
      
      component.onClose.subscribe(() => (emitted = true));
      component.close();
      
      expect(emitted).toBe(true);
    });
  });  
});
