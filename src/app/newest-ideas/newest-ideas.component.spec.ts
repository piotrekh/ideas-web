import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestIdeasComponent } from './newest-ideas.component';

describe('NewestIdeasComponent', () => {
  let component: NewestIdeasComponent;
  let fixture: ComponentFixture<NewestIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
