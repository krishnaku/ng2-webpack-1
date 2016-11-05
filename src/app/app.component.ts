import {Component, ElementRef, OnInit, Directive, AfterViewInit, ViewChild} from '@angular/core';
import '../../public/css/styles.css';

import * as Renderer from './chart-renderer';

@Directive({selector: 'chart'})
export class ChartDirective {
    root: HTMLElement;

    constructor(el: ElementRef){
        console.log("Constructing Directive");
        console.log(el.nativeElement);
        this.root = el.nativeElement;

    }
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild(ChartDirective) chart_root: ChartDirective;
    constructor(private el: ElementRef) {
        console.log("Constructing component");
        console.log(el.nativeElement);
    }

    ngOnInit(): void {
        console.log("building chart..");
    }


    ngAfterViewInit(): void {
        Renderer.basic_chart(this.chart_root.root);
    }
}

