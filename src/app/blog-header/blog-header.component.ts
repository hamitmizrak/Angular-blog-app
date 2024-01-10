import { Component } from '@angular/core';

// ngIf var
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [
    NgIf
  ],
  // 1.YOL
   templateUrl: './blog-header.component.html',

  // 2.YOL (Inline Tempplate)
 /* template: `
    <p>Merhaba {{isim}} {{soyisim}}</p>
  `,*/
  styleUrl: './blog-header.component.css'
})
export class BlogHeaderComponent {
/*isim:string="Hamit";
 soyisim:string="Mızrak"*/
  logo:string="Logo";
  home:any[]=["Anasayfa","Hakkımızda","İletişim"]
}
