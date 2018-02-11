import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
	{ path: '', component: DataAnalysisComponent },
	// { path: 'home', component: AppComponent },
	{ path: 'data-analysis', component: DataAnalysisComponent },
	{ path: 'companies', component: CompaniesComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
