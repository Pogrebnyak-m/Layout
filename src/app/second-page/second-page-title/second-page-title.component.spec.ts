import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageTitleComponent } from './second-page-title.component';

describe('SecondPageTitleComponent', () => {
  let component: SecondPageTitleComponent;
  let fixture: ComponentFixture<SecondPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPageTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
