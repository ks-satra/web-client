import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountsMoneyComponent } from './components/accounts-money/accounts-money.component';
import { AccountMoneyAddComponent } from './components/account-money-add/account-money-add.component';

const appRoutes: Routes = [
  { path: "", component: UsersComponent },
  { path: "about", component: AboutComponent },
  { path: "user-add", component: UserAddComponent },
  { path: "user-edit/:id", component: UserEditComponent },
  { path: "accounts", component: AccountsComponent },
  { path: "account-add", component: AccountAddComponent },
  { path: "account-edit/:id", component: AccountEditComponent },
  { path: "accounts-money", component: AccountsMoneyComponent },
  { path: "account-money-add", component: AccountMoneyAddComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    UserAddComponent,
    UserEditComponent,
    AccountsComponent,
    AccountAddComponent,
    AccountEditComponent,
    AccountsMoneyComponent,
    AccountMoneyAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
