import { Component, OnInit } from '@angular/core';
import { Home } from '../Home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  home: Home[];
  localItem: string | null;
  
  constructor() {
    this.localItem=localStorage.getItem("home");
    if(this.localItem==null){
    this.home=[];
  }
  
  else{
    
    this.home=JSON.parse(this.localItem);
  }      
    }
  ngOnInit(): void {
 
  }
deleteTodo(home:Home){
console.log(home);
const index=this.home.indexOf(home);
this.home.splice(index,1); 
localStorage.setItem("home",JSON.stringify(this.home));
}

addTodo(home:Home){
  console.log(home);
  this.home.push(home);
  localStorage.setItem("home",JSON.stringify(this.home)); 
  }
  toggleTodo(home:Home){
    const index=this.home.indexOf(home);
    this.home[index].active=!this.home[index].active;
    
    localStorage.setItem("home",JSON.stringify(this.home)); 
    }
}
