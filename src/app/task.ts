export enum TaskStatus {
  ToDo,
  Doing,
  Done,
}

export class Task {
  name: string;
  status: TaskStatus;
  deadLine: Date;
}

