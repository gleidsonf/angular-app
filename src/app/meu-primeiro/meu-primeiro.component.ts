import { Component} from '@angular/core';

// Diz ao angular que isso eh um componente do angular > 2
@Component({
  selector: 'meu-primeiro-component',
  template: `
    <p>Meu primeiro component com Angular 2!</p>
  `
})
export class MeuPrimeiroComponent {}
