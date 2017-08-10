import { Component, OnInit } from '@angular/core';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[];

  constructor(private studentService: StudentService) { }

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
}
