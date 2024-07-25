import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-employee',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-all-employee.component.html',
  styleUrl: './view-all-employee.component.css'
})
export class ViewAllEmployeeComponent {

  public employeeList: any;

  public selectedEmpl = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    departmentId: "",
    roleId: ""
  }

  constructor(private http: HttpClient) {
    this.loademployeeTable();
  }

  loademployeeTable() {
    this.http.get("http://localhost:8080/emp/get").subscribe(
      (data) => {
        console.log(data);
        this.employeeList = data;
      }
    )
  }

  deleteEmolyee(employee: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/emp/delete/${employee.id}`, { responseType: 'text' }).subscribe(
          (data) => {
            this.loademployeeTable();
          }
        )
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }

  updateEmolyee(employee: any) {
    this.selectedEmpl = employee;
  }

  saveUpdateEmp() {
    this.http.post("http://localhost:8080/emp/update", this.selectedEmpl).subscribe(
      (data) => {
      }
    )
  }
}
