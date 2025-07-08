// components/about/about.component.ts
import { Component } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  profileImages = [
    { src: 'assets/images/juan-iram.jpg', alt: 'Juan Iram Gámez Aguilar' },
    { src: 'assets/images/juan-iram2.jpg', alt: 'Proyecto 1' },
    { src: 'assets/images/juan-iram3.jpg', alt: 'Proyecto 2' },
    { src: 'assets/images/juan-iram-4.jpg', alt: 'Proyecto 3' },
    { src: 'assets/images/juan-iram5.jpg', alt: 'Proyecto 4' }
  ];
}