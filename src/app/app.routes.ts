import { Routes } from '@angular/router';

import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { ContadorComponent } from './pages/contador/contador.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

export const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'contador', component: ContadorComponent },
  { path: 'produtos', component: ProdutosComponent },
];
