import { Component, OnInit } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-software',
  imports: [CarruselComponent, CommonModule],
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  // Imágenes de perfil
  profileImages = [
    { src: 'assets/images/juan-iram.jpg', alt: 'Juan Iram Gámez Aguilar' },
    { src: 'assets/images/juan-iram2.jpg', alt: 'Proyecto 1' },
    { src: 'assets/images/juan-iram3.jpg', alt: 'Proyecto 2' },
    { src: 'assets/images/juan-iram-4.jpg', alt: 'Proyecto 3' },
    { src: 'assets/images/juan-iram5.jpg', alt: 'Proyecto 4' }
  ];
  // Datos de habilidades
  skills = [
    {
      name: "TRABAJO EN EQUIPO",
      image: "https://cdn-icons-png.flaticon.com/512/1534/1534939.png",
      description: "engo una gran capacidad para colaborar efectivamente en equipos multidisciplinarios. Fomento un ambiente de respeto mutuo y cooperación, donde cada miembro puede contribuir con sus fortalezas para alcanzar objetivos comunes.",
    },
    {
      name: "PENSAMIENTO ANALÍTICO",
      image: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
      description: "Poseo habilidad para descomponer problemas complejos en componentes más pequeños, analizar información de manera crítica y llegar a conclusiones lógicas. Esto me permite tomar decisiones basadas en datos y evidencias."
    },
    {
      name: "COMUNICATIVO",
      image: "https://cdn-icons-png.flaticon.com/512/4310/4310169.png",
      description: "Soy una persona con excelentes habilidades de comunicación, tanto verbal como escrita. Tengo facilidad para expresar ideas claramente, escuchar activamente y adaptar mi mensaje según la audiencia."
    },
    {
      name: "ADAPTABILIDAD",
      image: "https://cdn-icons-png.flaticon.com/512/10285/10285079.png",
      description: "Me adapto rápidamente a nuevos entornos, tecnologías y metodologías de trabajo. Ante los cambios, mantengo una actitud positiva y me enfoco en encontrar la mejor manera de ajustarme a las nuevas circunstancias."
    },
    {
      name: "CREATIVIDAD",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      description: "Tengo una mente innovadora que me permite generar ideas originales y encontrar soluciones fuera de lo convencional. Combino perspectivas diversas para abordar problemas desde ángulos no explorados."
    }];

  // Datos de software
  software = [
    { name: "PYTHON", image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "REACT NATIVE", image: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { name: "HTML,CSS,JS", image: "https://cdn-icons-png.flaticon.com/512/174/174854.png" },
    { name: "JAVA", image: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { name: "KIBANA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKs-Pwifixb0Wnc2WArd2PU8izgiwZrR_d4Q&s" },
    { name: "ELASTICSEARCH", image: "https://img.icons8.com/color/600/elasticsearch.png" },
    { name: "TERA TERM", image: "https://teratermproject.github.io/images/teraterm.png" },
    { name: "MICROSOFT OFFICE", image: "https://cdn-icons-png.flaticon.com/512/732/732220.png" },
    { name: "SQL", image: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png" },
    { name: "NOSQL", image: "https://cdn-icons-png.flaticon.com/512/4492/4492317.png" }];

  expandedSkillIndex: number | null = null;

  ngOnInit() {

  }

toggleSkill(index: number) {
    this.expandedSkillIndex = this.expandedSkillIndex === index ? null : index;
  }
}