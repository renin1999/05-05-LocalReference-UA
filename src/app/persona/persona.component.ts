import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../PersonasService.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonaService){

  }
  mostrarInfo(){
    this.personasService.informacion.emit(this.indice);
  }

}
