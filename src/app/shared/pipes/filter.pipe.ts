import { Pipe, PipeTransform } from '@angular/core';
import { Todo, Completed } from '../interfaces';

@Pipe({
  name: 'filterTodos',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], completed: Completed): Todo[] {
    return todos.filter((todo) => {
        if(completed.done && completed.notdone){
            return todo;
        }
        if(completed.done) {
            return todo.completed === true;
        } else {
            return todo.completed === false;
        }
    });
  }
}
