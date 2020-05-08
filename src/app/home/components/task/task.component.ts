import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TasksService } from 'src/app/shared/services/tasks/tasks.service';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
  @Input() id: number;
  @Input() title: string;
  @Input() completed: boolean;

  public newTitle: FormControl;
  public submitted: boolean;
  public isChanging: boolean;
  public deleted: boolean;
  public checked: boolean;

  public editSub: Subscription;
  public checkSub: Subscription;

  constructor(
    private tasksService: TasksService,
    private homePage: HomePageComponent
    ) { }

  ngOnInit(): void {
    this.isChanging = false;
    this.submitted = false;
    this.deleted = false;
    this.checked = false;
    this.newTitle = new FormControl('', [
      Validators.required,
      Validators.maxLength(512),
    ]);
  }

  ngOnDestroy(): void {
    if(this.editSub) {
      this.editSub.unsubscribe();
    }
    if(this.checkSub) {
      this.checkSub.unsubscribe();
    }
  }

  public onSave(): void {
    if (this.newTitle.invalid) {
      return;
    }
    this.submitted = true;

    this.editSub = this.tasksService.edit(this.id, this.newTitle.value).subscribe(
      () => {
        this.title = this.newTitle.value;
        this.newTitle.reset();
        this.submitted = false;
        this.isChanging = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }

  public onCancel(): void {
    this.newTitle.reset();
    this.submitted = false;
    this.isChanging = false;
  }

  public remove(): void {
    this.deleted = true;
    this.homePage.remove(this.id);
  }

  public edit(): void {
    this.isChanging = true;
  }
  
  public check(): void {
    this.checked = true;
    this.editSub = this.tasksService.check(this.id, !this.completed).subscribe(
      () => {
        this.completed = !this.completed;
        this.checked = false;
      },
      () => {
        this.checked = false;
      }
    );
  }

}
