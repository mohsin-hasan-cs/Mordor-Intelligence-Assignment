import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [
	AppComponent,
	DataAnalysisComponent,
	CompaniesComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
