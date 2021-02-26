import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = Array(1000).fill(0);


  constructor() { }

  ngOnInit(): void {

    // console.log(this.personas);
  }

  irFinal() { 
    this.viewport.scrollToIndex( this.personas.length )
  }

  irPrincipio() {
    this.viewport.scrollToIndex(0);
    // this.viewport.scrollToIndex( this.personas.length[0] )
  }

  irCentro() {
    this.viewport.scrollToIndex(this.personas.length/2);
    // this.viewport.scrollToIndex( this.personas.length[0] )
  }

}
