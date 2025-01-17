import { Component } from '@angular/core';
import { Categories, categoriesImg } from '../categories';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.css'
})
export class StartpageComponent {
  categories: Categories = categoriesImg;
}
