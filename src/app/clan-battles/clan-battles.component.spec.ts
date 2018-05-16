import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanBattlesComponent } from './clan-battles.component';

describe('ClanBattlesComponent', () => {
  let component: ClanBattlesComponent;
  let fixture: ComponentFixture<ClanBattlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanBattlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanBattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
