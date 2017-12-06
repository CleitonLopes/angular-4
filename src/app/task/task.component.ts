import { Component } from '@angular/core';
import { Task } from '../task'
import {TaskService} from "../task.service";

@Component({

  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']

})

export class TaskComponent {

    task: Task = {

        name: "",
        value: 0,
        date_launch: '2017-12-06'

    };

    tasks:Array<Task>;

    constructor(private taskService:TaskService) {

      this.tasks = this.taskService.tasks;

    }

    add () {

        let task = Object.assign({}, this.task);

        this.tasks.push(task);

    }

}
