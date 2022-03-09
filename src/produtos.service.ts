/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Injectable } from '@nestjs/common';
import { Produto } from './produtos.model';

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        new Produto("LIV01", "Livro 1 TESTE", 10),
        new Produto("LIV02", "Livro 2 TESTE", 25.50),
        new Produto("LIV03", "Livro 3 TESTE", 70),
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }
    
    obterUm(id: number): Produto {
        return this.produtos[0];
    }    

    criar(produto: Produto) {
        this.produtos.push(produto);
    }
    
    alterar(produto: Produto): Produto {
        return produto;
    }
    
    apagar(id: number) {
        this.produtos.pop();
    }    
}