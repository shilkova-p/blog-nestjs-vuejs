import { Injectable, NotFoundException, HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './blog.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
import { sendEmail } from './sendEmail';


@Injectable()
export class BlogService {
  constructor(

    
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>,


  ) {}
  

  

async addPost(post: PostEntity): Promise<PostEntity> {
  return await this.postsRepository.save(post);
};
  

findAll(): Promise<PostEntity[]> {
  return this.postsRepository.find();
}



/*findPost(id: number): Promise<PostEntity> {
  return this.postsRepository.findOne({
      where: {
          id: id,
      }
});*/


update(post: PostEntity): Promise<UpdateResult> {
  return this.postsRepository.update(post.id, post);
}
/* async updatePost(post: PostEntity){
  this.postsRepository.save(post)
} */


async getCurrentPost(id){
  const result = await this.postsRepository.findOne(id);
  if (!result) {
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  return result;
}



/* async remove(id: string): Promise<void> {
  await this.postsRepository.delete(id);
} */
async delete(id): Promise<DeleteResult> {
  return await this.postsRepository.delete(id);
}



/* async sendMessage(sender: string, email: string, text: string){
  await sendEmail(sender, email, text);
  return (email+sender+text);
  

} */

async sendMessage(sender){
  await sendEmail(sender);
  return (sender);
}




}


// npm run start:debug
// GET localhost:3000/blog/post/6
// npm run start
