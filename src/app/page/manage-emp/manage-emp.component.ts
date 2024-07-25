import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {

  public employee = {
    firstName: "",
    lastName: "",
    email: "",
    departmentId: "",
    roleId: ""
  }

  constructor(private http: HttpClient) { }

  addEmp() {
    console.log(this.employee);
    this.http.post("http://localhost:8080/emp/add", this.employee).subscribe(
      (data) => {
        Swal.fire({
          title: "Employee Add!",
          text: "That thing is still around?",
          icon: "question"
        });
      }
    )
  }
}