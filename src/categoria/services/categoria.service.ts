import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      order: { tipo: 'ASC' },
    });
  }

  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id },
    });

    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada!');
    }

    return categoria;
  }

  async findByTipo(tipo: string): Promise<Categoria[]> {
    const categorias = await this.categoriaRepository.find({
      where: { tipo: ILike(`%${tipo}%`) },
      order: { tipo: 'ASC' },
    });

    if (categorias.length === 0) {
      throw new NotFoundException('Nenhuma categoria encontrada.');
    }

    return categorias;
  }

  async create(categoria: Categoria): Promise<Categoria> {
    if (!categoria.tipo || categoria.tipo.trim() === '') {
      throw new HttpException(
        'O campo "tipo" é obrigatório.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.categoriaRepository.save(categoria);
  }

  async update(id: number, categoria: Categoria): Promise<Categoria> {
    const categoriaExistente = await this.findById(id);

    Object.assign(categoriaExistente, categoria);

    return this.categoriaRepository.save(categoriaExistente);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.categoriaRepository.delete(id);
  }
}
