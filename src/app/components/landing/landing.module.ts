import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { NewComponent } from './new/new.component';
import { OpinionComponent } from './opinion/opinion.component';
import { BreakComponent } from './common/break/break.component';
import { SlideComponent } from './common/slide/slide.component';
import { AppRoutingModule } from './../../app-routing.module';

@NgModule({
  declarations: [LandingComponent, DashboardComponent, IntroduceComponent, ProductComponent, ContactComponent, NewComponent, OpinionComponent, BreakComponent, SlideComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class LandingModule { }
