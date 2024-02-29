import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('')
  getAll() {
    return this.todoService.getAll();
  }

  @Post('')
  createTodo(@Body() todo: TodoDto) {
    return this.todoService.createTodo(todo);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.delete(id);
  }

  @Patch('/:id')
  changeCompletedStatus(
    @Param('id') id: string,
    @Body('isCompleted') isCompleted: boolean,
  ) {
    return this.todoService.updateCompletedStatus({ _id: id, isCompleted });
  }
}
