import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from '../services/categoria.service';

@ApiTags('Categoria')
@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as categorias' })
  @ApiResponse({
    status: 200,
    description: 'Lista de categorias retornada com sucesso',
  })
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get('id/:id')
  @ApiOperation({ summary: 'Buscar categoria por ID' })
  @ApiResponse({ status: 200, description: 'Categoria encontrada' })
  @ApiResponse({ status: 404, description: 'Categoria não encontrada' })
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriaService.findById(id);
  }

  @Get('tipo/:tipo')
  @ApiOperation({ summary: 'Buscar categoria por tipo' })
  findByTipo(@Param('tipo') tipo: string): Promise<Categoria[]> {
    return this.categoriaService.findByTipo(tipo);
  }

  @Post()
  @ApiOperation({ summary: 'Cadastrar nova categoria' })
  @ApiResponse({ status: 201, description: 'Categoria criada com sucesso' })
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }

  @Put('id/:id')
  @ApiOperation({ summary: 'Atualizar categoria' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoria: Categoria,
  ): Promise<Categoria> {
    return this.categoriaService.update(id, categoria);
  }

  @Delete('id/:id')
  @ApiOperation({ summary: 'Deletar categoria' })
  @ApiResponse({ status: 204, description: 'Categoria removida com sucesso' })
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.categoriaService.delete(id);
  }
}
