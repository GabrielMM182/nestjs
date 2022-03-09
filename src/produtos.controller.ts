/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
    
  @Get()
  obterTodos(): string {
    return 'lista todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() params): string {
      return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  Criar(@Body() produto): string {
      console.log(produto);
      return 'Produto Criado';
  }

  @Put()
  Alterar(@Body() produto): string {
      console.log(produto);
      return 'Produto Alterado';
  }

  @Delete(':id')
  apagar(@Param() params): string {
      return `Apaga o produto ${params.id}`
  }
}
