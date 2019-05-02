import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import {CurrentTaskService} from '../current-task.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  task = new Task();

  constructor(private currentTaskService: CurrentTaskService) { }

  ngOnInit() {
    this.currentTaskService.getCurrentTask().subscribe(task => this.task = task);
  }

}
