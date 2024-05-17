import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodunkAccountFormComponent } from './account-form.component';

describe('AccountFormComponent', () => {
  let component: PodunkAccountFormComponent;
  let fixture: ComponentFixture<PodunkAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodunkAccountFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PodunkAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
