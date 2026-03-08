import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parentchild/parent.component';
import { Blog } from './blogs/blogs.components';
import { Comments } from './blogs/comments.components';
import { OptimizedImageDemo } from './blogs/optimizedimagedemo.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, Blog, OptimizedImageDemo, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
