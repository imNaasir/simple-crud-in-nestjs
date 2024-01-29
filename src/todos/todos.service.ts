import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entity/todo.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
      ) {}


    create(createUserDto: CreateUserDto){
        return this.todoRepository.save(createUserDto);
    }

    findAll(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    findOne(id: number) {
        return this.todoRepository.findOneBy({ id });
    }

    update(updateUserDto: UpdateUserDto, id: number) { 
        return  {body: updateUserDto, id: id}
     }
 
     async delete(id: number): Promise<void> {
         await this.todoRepository.delete(id);
       }


    
}
