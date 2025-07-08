import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuActive = false;
  private menuTimeout: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
    
    // Limpiar timeout anterior si existe
    if (this.menuTimeout) {
      clearTimeout(this.menuTimeout);
    }
    
    // Configurar nuevo timeout solo si el menú se está abriendo
    if (this.menuActive) {
      this.menuTimeout = setTimeout(() => {
        this.menuActive = false;
      }, 2000); // 2000 milisegundos = 2 segundos
    }
  }

  // Opcional: Para cerrar manualmente si el usuario pasa el mouse
  closeMenu() {
    this.menuActive = false;
    if (this.menuTimeout) {
      clearTimeout(this.menuTimeout);
    }
  }
}