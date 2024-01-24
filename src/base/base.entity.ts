import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  constructor(entity:Partial<BaseEntity>){
    Object.assign(this,entity)
  }
}