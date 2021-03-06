import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Array<any>;
  constructor(private studentService: StudentService) { }
  ngOnInit() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
    });
  }
}


  
