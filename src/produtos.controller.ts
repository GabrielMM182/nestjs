/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Produto } from './produtos.model'

@Controller('produtos')
export class ProdutosController {
    produtos: Produto[] = [
        new Produto("LIV01", "Livro 1 TESTE", 10),
        new Produto("LIV02", "Livro 2 TESTE", 25.50),
        new Produto("LIV03", "Livro 3 TESTE", 70),
    ]
    
  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(): Produto {
      return this.produtos[0];
  }

  @Post()
  Criar(@Body() produto: Produto) {
      produto.id = 100;
      this.produtos.push(produto);
  }

  @Put()
  Alterar(@Body() produto: Produto): Produto {
      return produto;
  }

  @Delete(':id')
  apagar() {
      this.produtos.pop();
  }
}
