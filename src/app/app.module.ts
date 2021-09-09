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

const appRoutes: Routes = [
  { path: "", component: UsersComponent },
  { path: "about", component: AboutComponent },
  { path: "user-add", component: UserAddComponent },
  { path: "user-edit/:id", component: UserEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    UserAddComponent,
    UserEditComponent
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
