import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(
		private renderer: Renderer2,
		private el: ElementRef,
		private router: Router
	) { }

	// Doughnut
	public doughnutChartLabels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	public doughnutChartData1: number[] = [350, 450, 100];
	public doughnutChartType1 = 'doughnut';
	public doughnutChartOptions1: any = {
		responsive: true
	};

	public doughnutChartLabels2: string[] = ['Mail Sales', 'Tele Sales', 'Corporate Sales', 'Download Sales', 'In-Store Sales'];
	public doughnutChartData2: number[] = [250, 400, 650, 100, 500];
	public doughnutChartType2 = 'doughnut';

	ngOnInit() {
		this.router.navigate(['/data-analysis']);
	}

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}
}
