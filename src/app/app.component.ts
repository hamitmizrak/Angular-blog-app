// app.module.ts yerinde ==> app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Blog Header Ekledim
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import {BlogMainComponent} from "./blog-main/blog-main.component";
import {BlogFooterComponent} from "./blog-footer/blog-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BlogHeaderComponent,BlogMainComponent,BlogFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
}
