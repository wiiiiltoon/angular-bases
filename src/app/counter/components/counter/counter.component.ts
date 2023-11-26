import { Component } from '@angular/core';

//! NO SUPE RESOLVER EL EJERCICIO
// @Component({
//   selector: 'app-counter',
//   template: `
//   <h1>Counter: {{ counter }}</h1>

//   <button (click)="increaseBy(+1)">+1</button>
//   <button (click)="restore()">reset</button>
//   <button (click)="increaseBy(-1)">-1</button>

//   `,
// })
// export class CounterComponent {

// }

//*Esto es posible creardo de manera automatica escribiendo 'a-component + enter'

//? Vamos a configurar el component
//? Esta clase component se utiliza para implementar esta logica en el html tantas veces como queramos
@Component({
  //? El selector es para saber como referenciarlo en el html
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="restore()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;
  increaseBy(value: number):void {
    if(value)
      this.counter += value;
    else
      this.counter -= value;
  }
  restore():void {
    this.counter = 10;
  }
}
