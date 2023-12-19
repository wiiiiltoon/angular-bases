import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServiceTsService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  //? Esta es la forma en al que inyectamos el servicio (inyeccion de dependencias)
  //? Ahora en el mainPage.html podemos acceder a los metodos y constantes de este servicio
  constructor( private dbzService: DbzServiceTsService ){}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string):void {
    this.dbzService.deleteCharacterByID(id);
  }

  onNewCharacter( character:Character):void {
    this.dbzService.addCharacter(character);
  }
}
