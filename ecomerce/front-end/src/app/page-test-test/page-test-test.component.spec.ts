import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTestTestComponent } from './page-test-test.component';

describe('PageTestTestComponent', () => {
  let component: PageTestTestComponent;
  let fixture: ComponentFixture<PageTestTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTestTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTestTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
