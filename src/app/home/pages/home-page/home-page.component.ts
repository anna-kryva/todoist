import { Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from 'src/app/shared/services/tasks/tasks.service';
import { Todo, Completed } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  public todos: Todo[] = [];
  private tasksSub: Subscription;
  private deleteSub: Subscription;
  private searchSub: Subscription;
  private filterSub: Subscription;
  public searchStr: string;
  public done: Completed;

  constructor(
    private tasksService: TasksService,
    private searchService: SearchService
  ) {
    this.searchSub = this.searchService.getSearch()
    .subscribe((search) => {
      this.searchStr = search;
    });
    this.filterSub = this.searchService.getCompleted()
    .subscribe((completed) => {
      this.done = completed;
    });
   }

  ngOnInit(): void {
    this.tasksSub = this.tasksService.getAll().subscribe((todos) => {
      this.todos = todos;
    });
  }

  public remove(id: number): void {
    this.deleteSub = this.tasksService.remove(id).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }

  ngOnDestroy(): void {
    if (this.tasksSub) {
      this.tasksSub.unsubscribe();
    }
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
    if (this.filterSub) {
      this.filterSub.unsubscribe();
    }
  }
}
