/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produtos.model'
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
    constructor(private produtosService: ProdutosService) {

    }
    
  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
      return this.produtosService.obterUm(params.id);
  }

  @Post()
  Criar(@Body() produto: Produto) {
      this.produtosService.criar(produto);
  }

  @Put()
  Alterar(@Body() produto: Produto): Produto {
      return this.produtosService.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() params) {
      this.produtosService.apagar(params.id);
  }
}
