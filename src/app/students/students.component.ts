import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[];
  form: FormGroup;

  constructor(private studentService: StudentService, fb: FormBuilder) {
    this.form = fb.group({
      first_name: [null, Validators.compose([ Validators.required, Validators.minLength(2) ])],
      last_name: [null, Validators.compose([ Validators.required, Validators.minLength(2) ])],
      age: [null, Validators.required],
      gender: ['m', Validators.required],
      address: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(data => {
      if (data.status === 'success') {
        this.students = data.data;
      } else {
        this.students = [];
      }
    }, err => {
      console.error(err);
      this.students = [];
    });
  }

  formSubmit(formData: any): void {
    console.log('form submitted data:::', formData);
  }
}
