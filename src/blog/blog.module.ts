import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { PostEntity } from './blog.entity';



@Module({
    imports: [
        TypeOrmModule.forFeature([PostEntity]),
       
        ],
   
    

    controllers: [BlogController],
    providers: [BlogService],
})
export class BlogModule {}