import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Completed } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private search = new Subject<string>();
  private completed = new Subject<Completed>();

  public getSearch(): Observable<string> {
    return this.search.asObservable();
  }

  public updateSearch(search: string): void {
    this.search.next(search);
  }

  public getCompleted(): Observable<Completed> {
    return this.completed.asObservable();
  }

  public updateCompleted(completed: Completed): void {
    this.completed.next(completed);
  }
}
