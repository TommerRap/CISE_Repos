import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/articles')
  getArticles(): any[] {
    return ARTICLES;
  }
  @Get('/api/articles/search/:id')
  //Made changes from the code in worksheet for fun and
  //testing purposes.
  getArticlesById(@Param('id') id:string):any[]{
    return ARTICLES.find(article=>article._id===id);
  }
}
