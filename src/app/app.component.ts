import {Component, OnInit} from '@angular/core';
import { Task } from './task';
import {TaskProviderService} from './task-provider.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    TaskProviderService,
  ]
})
export class AppComponent implements OnInit {
  tasks: Array<Task> = [];
  currentTask: Task = new Task();

  constructor(public manager: TaskProviderService) {}

  ngOnInit(): void {
    this.manager.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.currentTask = this.tasks[0];
    });
  }
  setCurrentTask(task: Task): void {
    this.currentTask = task;
  }
  addTaskToList(task: Task): void {
  this.tasks.unshift(task);
  this.currentTask = task;
  }
}
