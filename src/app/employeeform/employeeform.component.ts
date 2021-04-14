import { Component, OnInit,Output,Input ,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/Employee';


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
    employeeForm: FormGroup;
    submitted = false;
    @Output() saveEmployee:EventEmitter<any>= new EventEmitter()
    @Output()  closeForm:EventEmitter<any>= new EventEmitter()
    @Input() employee:Employee;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.employeeForm = this.formBuilder.group({
          id:[this.employee && this.employee.id? this.employee.id:Date.now()],
            firstName: [this.employee && this.employee.firstName? this.employee.firstName:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            lastName: [this.employee? this.employee.lastName:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            email: [this.employee ? this.employee.email:'', [Validators.required, Validators.email]],
            jobTitle: [this.employee? this.employee.jobTitle:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            office: [this.employee? this.employee.office:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            department: [this.employee? this.employee.department:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            phone: [this.employee? this.employee.phone:'', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            skype: [this.employee? this.employee.skype:'', [Validators.required, Validators.email]]
        }, {
        });
    }

    get f() { return this.employeeForm.controls; }

    onSave() {
        this.submitted = true;

        if (this.employeeForm.invalid) {
            return;
        }
        this.saveEmployee.emit(this.employeeForm.value as Employee);
    }

    onReset() {
        this.submitted = false;
        this.employeeForm.reset();
        this.closeForm.emit();
        }
      
    }
