import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoWordComponent } from './bingo-word.component';

describe('BingoWordComponent', () => {
  let component: BingoWordComponent;
  let fixture: ComponentFixture<BingoWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingoWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
