import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cont',
  imports: [],
  templateUrl: './cont.component.html',
  styleUrl: './cont.component.css'
})
export class ContComponent {
  titulo = input('');
  cont = 0;

  incrementar() {
    this.cont++;
  }

  decrementar() {
    this.cont--;
  }
}
