import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numero01 =0;
  numero02 =0;
  resp = 0;

  somar(){
    this.resp = Number(this.numero01) + Number(this.numero02);
  }

  subtrair(){
    this.resp = Number(this.numero01) - Number(this.numero02);
  }

  multiplicar(){
    this.resp = Number(this.numero01) * Number(this.numero02);
  }
  dividir(){
    this.resp = Number(this.numero01) / Number(this.numero02);
  }

}
