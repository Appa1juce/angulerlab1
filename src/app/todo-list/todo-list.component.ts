import { Component, OnInit } from '@angular/core';
import { Todolist } from '../interface/todolist';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todolists: Todolist[] = [
    {
      task: 'Wash Clothes',
      completed: false,
    },
    {
      task: 'Run Dishwasher',
      completed: false,
    },
    {
      task: 'Clean Bathroom',
      completed: false,
    },
  ];

  searchTerm: string = '';
  constructor() {}

  ngOnInit(): void {}

  deleteTask = (index: number): void => {
    this.todolists.splice(index, 1);
  };

  setSearchTerm = (form: NgForm) => {
    console.log(form.form.value.filter);
    this.searchTerm = form.form.value.filter;
  };

  filterTasks = (term: string): Todolist[] => {
    return this.todolists.filter((item) => {
      let currentItem = item.task.toLowerCase().trim();
      return currentItem.includes(term.toLowerCase().trim());
    });
  };

  addTask = (form: NgForm, anArray: Todolist[]): void => {
    console.log(form);
    let newtask: Todolist = {
      task: form.form.value.addToDo,
      completed: false,
    };
    anArray.push(newtask);
    form.reset();
  };

  completeTask = (task: Todolist): void => {
    task.completed = !task.completed;
  };
}
