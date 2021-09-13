import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageContentComponent } from './second-page-content.component';

describe('SecondPageContentComponent', () => {
  let component: SecondPageContentComponent;
  let fixture: ComponentFixture<SecondPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPageContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
