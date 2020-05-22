import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing/landing.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {CountdownModule} from '../countdown/countdown.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    LandingComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    CommonModule,
    CountdownModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [
    LandingComponent,
    PrivacyPolicyComponent,
  ],
})
export class LandingModule {
}
