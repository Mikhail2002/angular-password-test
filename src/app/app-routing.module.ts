import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordTestComponent } from './password-test/password-test.component';

const routes: Routes = [
  {path: '', component: PasswordTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
