import {
  Controller,
  Bind,
  Res,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Put,
  HttpStatus,
  Query,
  NotFoundException
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { PostEntity} from './blog.entity';
import { Sender } from '../entities/sender';



@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}


@Get('posts')
findAll(): Promise<PostEntity[]> {
  return this.blogService.findAll();
}

/*@Get(':id')
findPost(@Param('id') id): Promise<PostEntity> { //what is @Res?
  return this.blogService.findPost(id);
}*/



@Put('/edit/:id')
update(@Param('id') id, @Body() postData: PostEntity): Promise<any> {
  postData.id = Number(id);
   return this.blogService.update(postData);
}

/* @Put(':id')
updatePost(@Body() post: PostEntity): Promise<any> {
    console.log("Update post", post);
    return this.blogService.updatePost(post);
} */

@Post('/post')
addPost(@Body() post: PostEntity): Promise<PostEntity>{
 return this.blogService.addPost(post);

}






@Get('/post/:id')
  async getCurrentPost(@Res() res, @Param() param) {
    const result = await this.blogService.getCurrentPost(param.id);
    
    return res.send(result).status(200);
  }
  




 
 /*  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.blogService.remove(id);
  } */

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> { //We extract and inject the id using the @Param() decorator and we call the delete() method of ContactsService.
    return this.blogService.delete(id);
  }  



 /* @Post('/sendMessage')
  async sendMessage(
  @Body('sender') sender: string,
  @Body('email') email: string,
  @Body('text') text: string,
  ){
    return this.blogService.sendMessage(sender, email, text);
  
  } */

  @Post('/sendMessage')
  async sendMessage(@Body() sender: Sender) {
    this.blogService.sendMessage(sender);
  }



}
  
