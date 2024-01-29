import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('todos')
export class TodosController {
    constructor(private  todoService: TodosService) {}


    @Post() // POST 
    create(@Body() createUserDto: CreateUserDto) {
        return this.todoService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.todoService.findAll();
    }

    @Get(':id')  //  /todos/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.todoService.findOne(id);
    }


    @Patch(':id')  // PUT
    update(@Body() updateUserDto : UpdateUserDto, @Param('id', ParseIntPipe) id: number) {
        return this.todoService.update(updateUserDto, id);
    }

    @Delete(':id')  //  /users/:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.todoService.delete(id);
    }

}
