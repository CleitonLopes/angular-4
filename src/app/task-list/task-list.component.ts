import { Component } from '@angular/core';
import { Task } from '../task'
import {TaskService} from "../task.service";

@Component({

  selector: 'app-task-list', // tag para chamar no html
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']

})

export class TaskListComponent {

    tasks:Array<Task>;

    // cria uma variavel private já recebendo o service criado
    constructor(private taskService:TaskService) {

        this.taskService.tasks.push(

            { name: 'teste', value: 10, date_launch: '2017-12-06' }
        )

        this.tasks = this.taskService.tasks;

    }

}
