import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'Insertar',
    power: 0
  }

  emitCharacter(): void{

    console.log(this.character);
    //? En caso de estar vacio no hacer nada
    if(this.character.name.length === 0 ) return;
    //? Recoge el valor del character introducido en el put y lo emite
    this.onNewCharacter.emit(this.character);

    // this.character.name = "";
    // this.character.power = 0;
    this.character = { name: '', power: 0 }
  }
}
