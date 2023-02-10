import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";
@Injectable()
export class PersonaService {

    constructor(private logginService: LogginService) {
    }

    personas: Persona[] = [
        new Persona('Juan','Perez'), 
        new Persona('Laura', 'Juarez'),
        new Persona('Karla', 'Lara')
      ];
		
      informacion= new EventEmitter<number>();

      personaAgregada(persona: Persona){
        this.logginService.enviaMensajeConsola("desde servicio");
        this.personas.push( persona );
      }



}