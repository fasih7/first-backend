import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.schema';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async createTodo(todo: TodoDto) {
    return await this.todoModel.create(todo);
  }

  async getAll() {
    return await this.todoModel.find();
  }

  async delete(_id: string) {
    return await this.todoModel.findOneAndDelete({ _id });
  }

  async updateCompletedStatus({ _id, isCompleted }) {
    return await this.todoModel.findOneAndUpdate({ _id }, { isCompleted });
  }
}
