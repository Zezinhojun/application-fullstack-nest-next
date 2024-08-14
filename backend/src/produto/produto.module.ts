import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService],
  imports: [DbModule]
})
export class ProdutoModule {}
