import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './My Components/login/login.component';
import { SignUpComponentComponent } from './My Components/sign-up-component/sign-up-component.component';
import { MainComponent } from './My Components/main/main.component';

const routes: Routes = [
  {path:'' , redirectTo:'login', pathMatch:'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignUpComponentComponent},
  {path: 'main' , component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

