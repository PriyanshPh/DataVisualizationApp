import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitativeResearchComponent } from './qualitative-research.component';

describe('QualitativeResearchComponent', () => {
  let component: QualitativeResearchComponent;
  let fixture: ComponentFixture<QualitativeResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualitativeResearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualitativeResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
