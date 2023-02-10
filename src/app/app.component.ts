import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from './PersonasService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) {
  };

  ngOnInit():void {
    this.personas=this.personaService.personas;
  };

}
