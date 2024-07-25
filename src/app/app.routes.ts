import { Routes } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewAllEmployeeComponent } from './page/view-all-employee/view-all-employee.component';
import { NavComponent } from './page/nav/nav.component';

export const routes: Routes = [
    {
        path :"manage-emp",
        component: ManageEmpComponent
    },
    {
        path :"view-all-employee",
        component: ViewAllEmployeeComponent
    }
];
