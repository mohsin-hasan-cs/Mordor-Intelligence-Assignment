import { Component, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
	selector: 'app-data-analysis',
	templateUrl: './data-analysis.component.html',
	styleUrls: ['./data-analysis.component.scss']
})
export class DataAnalysisComponent {

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

	public doughnutChartLabels2: string[] = ['Mail Sales', 'Tele Sales', 'Corporate Sales', 'Download Sales', 'In-Store Sales'];
	public doughnutChartData2: number[] = [250, 400, 650, 100, 500];
	public doughnutChartType2 = 'doughnut';

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
