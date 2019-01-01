import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonScenarioComponent } from './dragon-scenario.component';

describe('DragonScenarioComponent', () => {
  let component: DragonScenarioComponent;
  let fixture: ComponentFixture<DragonScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonScenarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
