import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @ApiProperty({
    example: 1,
    description: 'Identificador único da categoria',
  })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({
    example: 'Medicamentos',
    description: 'Tipo ou nome da categoria',
  })
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  tipo!: string;
}
