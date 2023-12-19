import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
//? Importamos para la necesidad de meter id unicos
import { v4 as uuid } from "uuid";

//? Al hacerlo asi ya se establece como un singleton en toda la app
@Injectable({
  providedIn: 'root'
})
export class DbzServiceTsService {

  public characters: Character[] = [
    {
      //? Le asignamos el id a cada valor
      id: uuid(),
      name: 'Krillin',
      power: 100
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 1000
    }
  ];

  //? De esta manera estamos diciendo, coge todas las propiedades y metelas
  addCharacter( character: Character ): void {
    const newCharacter: Character = { id: uuid(), ...character}

    this.characters.push(newCharacter);

  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }

  deleteCharacterByID(id:string){
    this.characters = this.characters.filter( character => character.id !== id );
  }
}
