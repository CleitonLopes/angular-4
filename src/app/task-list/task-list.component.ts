import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list', // tag para chamar no html
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

    tasks = [];
    task = "";

    add () {

        this.tasks.push(this.task);

    }

}
