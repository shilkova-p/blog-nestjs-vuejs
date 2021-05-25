import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import { PostEntity } from './blog/blog.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '****',
    database: 'blog_database',
    entities: [PostEntity],
    synchronize: true,
    }),
    BlogModule,
    
    

  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
