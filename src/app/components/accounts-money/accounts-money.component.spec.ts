import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsMoneyComponent } from './accounts-money.component';

describe('AccountsMoneyComponent', () => {
  let component: AccountsMoneyComponent;
  let fixture: ComponentFixture<AccountsMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
