import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'my-first-app';
  topics = [
    'angular','css', 'js', 'html'
  ]

  userModel = new User('', 'jon@gmail.com', 234324234, 'angular', 'morning', true)
  
  onSubmit() {
    console.log('userModel', this.userModel)
  }
}
