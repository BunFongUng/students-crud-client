import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService,
    { provide: 'API_URL', useValue: 'http://localhost:3000/api/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
