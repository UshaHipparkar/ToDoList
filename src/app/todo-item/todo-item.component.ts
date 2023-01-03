import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Home } from '../Home';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()home!: Home;
  @Input()i!: number;
  @Output() todoDelete: EventEmitter<Home>= new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Home>= new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
 Onclick(home:Home){
  this.todoDelete.emit(home);
  window.alert("Do You Want to Delete Item?")
 }
 onCheckboxClick(home: Home | undefined){
  console.log(home)
  this.todoCheckbox.emit(home)
  
 }
}
