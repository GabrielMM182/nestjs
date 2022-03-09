/* eslint-disable prettier/prettier */

import {Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Produto extends Model<Produto>{

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    codigo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })   
    nome: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })   
    preco: number;

    // constructor(codigo: string, nome: string, preco: number) {
    //     super();
    //     this.codigo = codigo;
    //     this.nome = nome;
    //     this.preco = preco;
    // }

}

