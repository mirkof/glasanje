import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';
import { FormComponent } from './register/form/form.component';
import {PrivacyPolicyComponent} from "./landing/privacy-policy/privacy-policy.component";


const routes: Routes = [
	{
		path: '',
		component: LandingComponent,
	},
  {
    path: 'polisa-privatnosti',
    component: PrivacyPolicyComponent,
  },
	{
		path: 'registracija',
		component: FormComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
