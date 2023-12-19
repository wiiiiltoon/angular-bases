import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //?Esto sirve para poder ser llamado por la clase prade y poder utilizarlo
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  deleteCharacterByID( id?:string ):void{
    if(!id){
      return;
    }
    this.onDelete.emit(id);
    //? Aqui es donde le digo que lo que va a emitir es la variable index
  }
}
