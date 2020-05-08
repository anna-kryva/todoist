import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Todo } from 'src/app/shared/interfaces';
import { TasksService } from 'src/app/shared/services/tasks/tasks.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  public title: FormControl;
  public submitted: boolean;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.submitted = false;
    this.title = new FormControl('', [
      Validators.required,
      Validators.maxLength(512),
    ]);
  }

  public onSave(): void {
    if (this.title.invalid) {
      return;
    }

    this.submitted = true;
    const todo: Todo = {
      userId: 1,
      title: this.title.value,
      completed: false,
    };

    this.tasksService.create(todo).subscribe(
      () => {
        this.title.reset();
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }

  public onCancel(): void {
    this.title.reset();
    this.submitted = false;
  }
}
