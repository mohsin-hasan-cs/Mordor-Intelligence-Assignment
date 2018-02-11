import { Component, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
	selector: 'app-companies',
	templateUrl: './companies.component.html',
	styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {

	@ViewChild('sidebar') sidebar: ElementRef;

	constructor(
		private renderer: Renderer2,
		private el: ElementRef
	) { }

	// Doughnut
	public doughnutChartLabels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	public doughnutChartData1: number[] = [350, 450, 100];
	public doughnutChartType1 = 'doughnut';
	public doughnutChartOptions1: any = {
		responsive: true
	};

	public barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	public barChartType = 'bar';
	public barChartLegend = true;

	public barChartData: any[] = [
		{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
		{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
	];

	// lineChart
	public lineChartOptions: any = {
		responsive: true
	};

	public lineChartData: Array<any> = [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
	];
	public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChartType = 'line';

	@HostListener('window:resize') onresize() {
		const width = window.innerWidth;
		if (window.innerWidth > 768) {
			this.renderer.removeClass(this.sidebar.nativeElement, 'active');
		}
	}

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}

	toggleSidebar(event) {
		this.sidebar.nativeElement.classList.length > 0
			? this.renderer.removeClass(this.sidebar.nativeElement, 'active')
			: this.renderer.addClass(this.sidebar.nativeElement, 'active');
	}

}
