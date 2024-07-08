import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfograficoComponent } from './infografico.component';

describe('InfograficoComponent', () => {
  let component: InfograficoComponent;
  let fixture: ComponentFixture<InfograficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfograficoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfograficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
