// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StudentService } from '../../services/student.service';
import { CourseService } from '../../services/course.service';
import { ExamService } from '../../services/exam.service';
// Import Models
import { Student } from '../../domain/payesh2_db/student';
import { Course } from '../../domain/payesh2_db/course';
import { Exam } from '../../domain/payesh2_db/exam';

// START - USED SERVICES
/**
* studentService.create
*	@description CRUD ACTION create
*
* studentService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* studentService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* courseService.list
*	@description CRUD ACTION list
*
* examService.list
*	@description CRUD ACTION list
*
* courseService.findBy_student
*	@description CRUD ACTION findBy_student
*	@param Objectid key Id of model to search for
*
* examService.findBy_student
*	@description CRUD ACTION findBy_student
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Student
 */
@Component({
    selector: 'app-student-edit',
    templateUrl: 'student-edit.component.html',
    styleUrls: ['student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
    item: Student;
    
    list_course: Course[];
    
    list_exam: Exam[];
    
    externalCourse__student: Course[];
    externalExam__student: Exam[];
    model: Student;
    formValid: Boolean;

    constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private examService: ExamService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Student();
        this.externalCourse__student = [];
        this.externalExam__student = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentService.get(id).subscribe(item => this.item = item);
                this.courseService.findBy_student(id).subscribe(list => this.externalCourse__student = list);
                this.examService.findBy_student(id).subscribe(list => this.externalExam__student = list);
            }
            // Get relations
            this.courseService.list().subscribe(list => this.list_course = list);
            this.examService.list().subscribe(list => this.list_exam = list);
        });
    }

    /**
     * Check if an Course is in  _course
     *
     * @param {string} id Id of Course to search
     * @returns {boolean} True if it is found
     */
    containCourse(id: string): boolean {
        if (!this.item._course) return false;
        return this.item._course.indexOf(id) !== -1;
    }

    /**
     * Add Course from Student
     *
     * @param {string} id Id of Course to add in this.item._course array
     */
    addCourse(id: string) {
        if (!this.item._course)
            this.item._course = [];
        this.item._course.push(id);
    }

    /**
     * Remove an Course from a Student
     *
     * @param {number} index Index of Course in this.item._course array
     */
    removeCourse(index: number) {
        this.item._course.splice(index, 1);
    }
    /**
     * Check if an Exam is in  _exam
     *
     * @param {string} id Id of Exam to search
     * @returns {boolean} True if it is found
     */
    containExam(id: string): boolean {
        if (!this.item._exam) return false;
        return this.item._exam.indexOf(id) !== -1;
    }

    /**
     * Add Exam from Student
     *
     * @param {string} id Id of Exam to add in this.item._exam array
     */
    addExam(id: string) {
        if (!this.item._exam)
            this.item._exam = [];
        this.item._exam.push(id);
    }

    /**
     * Remove an Exam from a Student
     *
     * @param {number} index Index of Exam in this.item._exam array
     */
    removeExam(index: number) {
        this.item._exam.splice(index, 1);
    }

    /**
     * Save Student
     *
     * @param {boolean} formValid Form validity check
     * @param Student item Student to save
     */
    save(formValid: boolean, item: Student): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



