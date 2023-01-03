import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Home } from '../Home';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
      title!: string;
      desc!: string;
      @Output() todoAdd: EventEmitter<Home>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
  const home={
    sno:8,
    title:this.title,
    desc:this.desc,
    active:true
  }
 this.todoAdd.emit(home); 
}
}
