import { 
  Component, OnInit, DoCheck, OnChanges, SimpleChanges, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
  OnDestroy, Input, ElementRef, ViewChild 
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-constructor',
  imports: [CommonModule],
  templateUrl: './constructor.html',
  styleUrls: ['./constructor.css']
})
export class Constructor implements
  OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy {

  mensaje: string = 'Se inicia el constructor';
  cambio: string = '';
  datos: any[] = [];
  lastValor: number = 0;
  cambioActual: number = 0;
  ancho = 100

  @Input() data: any;
  @ViewChild('layout') layoutElement!: ElementRef;
  @ViewChild('content') contentElement!: ElementRef;
  @ViewChild('canvas') canvasElement!: ElementRef;

  content: string = '';
  isScrolling: boolean = false;
  intervalo: any;

  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
    this.datos = this.getData();
    this.intervalo = setInterval(() => {}, 3000);
  }

  private getData(): any[] {
    return [
      { id: 1, name: 'Carlos'},
      { id: 2, name: 'Juana'},
      { id: 3, name: 'Maria'}
    ];
  }

  ngDoCheck() {
    if (this.layoutElement) {
      const ancho = this.layoutElement.nativeElement.clientWidth;
      if (this.lastValor !== ancho) {
        this.lastValor = ancho;
        this.cambioActual = ancho;
        this.cambio = `Cambio ancho = ${this.cambioActual}`;
      }
    }
  }

  cambiarAncho() {
    this.ancho = this.ancho === 100 ? 200 : 100;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      console.log('Cambio data a', changes['data'].currentValue);
    }
  }

  ngAfterContentInit() {
    if (this.contentElement) {
      this.content = this.contentElement.nativeElement.textContent;
      console.log('Contiene =', this.content);
    }
  }

  ngAfterContentChecked() {
    if (this.content) {
      console.log('Contenido check');
    }
  }

  ngAfterViewInit() {
    if (this.canvasElement) {
      console.log('Canvas');
    }
  }

  ngAfterViewChecked() {
    if (this.isScrolling) {
      console.log('Scroll verificado');
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}