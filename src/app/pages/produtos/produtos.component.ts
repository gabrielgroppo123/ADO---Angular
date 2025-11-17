import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [FormsModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: any[] = [];
  novoProduto = {nome: '', preco: 0, estoque: 1};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.http.get<any[]>('http://localhost:3000/produtos').subscribe({
      next: (data) => {
        this.produtos = data;
      }
    })
  }

  cadastrar() {
    this.http.post('http://localhost:3000/produtos', this.novoProduto).subscribe({
      next: () => {
        alert('Produto cadastrado com sucesso!');
        this.novoProduto = {nome: '', preco: 0, estoque: 1};
        this.listar();
      }
    });
  }
}
