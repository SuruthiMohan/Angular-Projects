import { Component } from '@angular/core';
import { Userdetails } from './userdetails';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formCreation';

  genders = ["Male","Female"];

  userData = new Userdetails("","","","","");

}
