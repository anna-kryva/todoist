import { Injectable } from '@angular/core';
import { Todo } from '../../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private URL_JPH = 'https://jsonplaceholder.typicode.com/todos';
  public todo: Todo;
  constructor(private http: HttpClient) {}

  public create(todo: Todo): Observable<Todo> {
    const httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Todo>(
        this.URL_JPH,
        JSON.stringify(todo),
        { headers: httpHeader }
      ).pipe(map((response) => {return response;}));
  }

  public getAll(): Observable<Todo[]> {
    return this.http.get(this.URL_JPH)
      .pipe(map((response: Todo[]) => response));
  }

  public remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL_JPH}/${id}`);
  } 

  public edit(id: number, title: string): Observable<Todo> {
    const httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<Todo>(
      `${this.URL_JPH}/${id}`, 
      JSON.stringify({title}), 
      { headers: httpHeader } )
      .pipe(map((response) => {return response;}));
  }

  public check(id: number, completed: boolean): Observable<Todo> {
    const httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<Todo>(
      `${this.URL_JPH}/${id}`, 
      JSON.stringify({completed}), 
      { headers: httpHeader } )
      .pipe(map((response) => {return response;}));
  }
}
