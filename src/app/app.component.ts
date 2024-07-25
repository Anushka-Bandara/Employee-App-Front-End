import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewAllEmployeeComponent } from './page/view-all-employee/view-all-employee.component';
import { NavComponent } from './page/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ManageEmpComponent, ViewAllEmployeeComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-app';
}
