// components/carrusel/carrusel.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})

export class CarruselComponent implements OnInit, OnDestroy {
  @Input() images: {src: string, alt: string}[] = [];
  @Input() interval: number = 0; // Tiempo en ms (0 para desactivar auto-play)
  
  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.clearAutoPlay();
  }

  showSlide(index: number) {
    this.currentIndex = (index + this.images.length) % this.images.length;
  }

  changeSlide(direction: number) {
    this.showSlide(this.currentIndex + direction);
    this.restartAutoPlay();
  }

  private startAutoPlay() {
    if (this.interval > 0) {
      this.intervalId = setInterval(() => {
        this.showSlide(this.currentIndex + 1);
      }, this.interval);
    }
  }

  private clearAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private restartAutoPlay() {
    this.clearAutoPlay();
    this.startAutoPlay();
  }
}