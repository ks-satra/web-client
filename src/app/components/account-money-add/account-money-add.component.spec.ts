import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMoneyAddComponent } from './account-money-add.component';

describe('AccountMoneyAddComponent', () => {
  let component: AccountMoneyAddComponent;
  let fixture: ComponentFixture<AccountMoneyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMoneyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMoneyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
