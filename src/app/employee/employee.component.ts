import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { EmployeeLetters } from '../constants/constant';
import { Employee } from '../models/Employee';
import { EmployeeFilter, Filter } from '../models/EmployeeFilter';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  employees: Array<Employee> = [];
  filters:EmployeeFilter = new EmployeeFilter({});
  filteredEmployees=[];
  letters = EmployeeLetters;
  formShow: boolean = false;
  activeEmployeeData:Employee;
  selectedDropdownFilter: string;
  selectedLeftFilter:string;
  searchedInput: string = '';

  constructor() { }

openEForm(){
  this.activeEmployeeData=new Employee({});
  this.formShow=true;
}

closeForm(){
  this.formShow=false;
}

formSubmit(employeeData:Employee) { 
  employeeData.preferredName=employeeData.firstName+" "+employeeData.lastName;
  let index=this.employees.findIndex(emp=>emp.id==employeeData.id);
  if(index > -1){
    this.employees[index]=employeeData;
  }
  else{
    this.employees.push(employeeData);
  }
  this.employeeSelected();
    this.getFilters();
    this.closeForm();
 }

 getFilters(){
  this.filters.departments=this.employees.map(employee => new Filter({ value: employee.department, count:this.employees.filter(cnt => cnt.department == employee.department).length}));
  this.filters.departments=this.displayUniqueFilters(this.filters.departments);
  this.filters.offices=this.employees.map(employee => new Filter({ value: employee.office, count:this.employees.filter(cnt => cnt.office == employee.office).length}));
  this.filters.offices=this.displayUniqueFilters(this.filters.offices);
  this.filters.jobTitles=this.employees.map(employee => new Filter({ value: employee.jobTitle, count:this.employees.filter(cnt => cnt.jobTitle == employee.jobTitle).length}));
  this.filters.jobTitles=this.displayUniqueFilters(this.filters.jobTitles);
 }

 displayUniqueFilters(array){
  var flags = {};
  var newFilter = array.filter((filterPresent) =>  {
      if (flags[filterPresent.value]) {
          return false;
      }
      flags[filterPresent.value] = true;

      return true;
  });

  return newFilter;
 }

searchByletter(input){
  input=input.toLowerCase();
  this.filteredEmployees = this.employees.filter(employee => {      if ((employee.firstName.toLowerCase().charAt(0) == input && this.selectedDropdownFilter=='First Name')||(employee.lastName.toLowerCase().charAt(0) == input && this.selectedDropdownFilter=='Last Name')||(employee.email.toLowerCase().charAt(0) == input && this.selectedDropdownFilter=='Email')||(employee.jobTitle.toLowerCase().charAt(0) == input && this.selectedDropdownFilter=='Job Title')||(employee.office.toLowerCase().charAt(0) == input && this.selectedDropdownFilter=='Office')||(employee.department.toLowerCase().charAt(0) == input && this.selectedDropdownFilter=='Department')||(employee.preferredName.toLowerCase().charAt(0) == input && this.selectedDropdownFilter=='Preferred Name')) {        return employee;      }     }); 
}

employeeSelected(){
  this.filteredEmployees=this.employees.filter(employee => {      if (((employee.department == this.selectedLeftFilter)||(employee.office == this.selectedLeftFilter)||(employee.jobTitle == this.selectedLeftFilter))||(employee.firstName.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedDropdownFilter=='First Name')||(employee.lastName.toLowerCase().includes(this.searchedInput.toLowerCase())&& this.selectedDropdownFilter=='Last Name')||(employee.email.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedDropdownFilter=='Email')||(employee.jobTitle.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedDropdownFilter=='Job Title')||(employee.office.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedDropdownFilter=='Office')||(employee.department.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedDropdownFilter=='Department')||(employee.preferredName.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedDropdownFilter=='Preferred Name')) {   return employee;      }     })
}


clearData(){
  this.selectedLeftFilter='';
  this.searchedInput='';
  this.selectedDropdownFilter='';
  this.filteredEmployees=this.employees;
}

openEmployeeCard(employee){
  this.activeEmployeeData=employee;
  console.log(this.activeEmployeeData.firstName);
  this.formShow=true;
}

noEmployeePresent(){
  if(this.employees.length==0){
    return true;
  }
}

  ngOnInit(): void {
  }
}
