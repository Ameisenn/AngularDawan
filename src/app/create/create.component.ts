import {Component} from '@angular/core';
import { Task } from '../task';
import { TaskProviderService } from '../task-provider.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  newTask = new Task();
  constructor(private provider: TaskProviderService) { }

  addTask() {
    this.provider.add(this.newTask);
    this.newTask = new Task();
  }
}
