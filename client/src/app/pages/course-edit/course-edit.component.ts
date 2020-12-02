// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { ExamService } from '../../services/exam.service';
// Import Models
import { Course } from '../../domain/payesh2_db/course';
import { Exam } from '../../domain/payesh2_db/exam';
import { Student } from '../../domain/payesh2_db/student';

// START - USED SERVICES
/**
* courseService.create
*	@description CRUD ACTION create
*
* courseService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* courseService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* studentService.findBy_course
*	@description CRUD ACTION findBy_course
*	@param Objectid key Id of model to search for
*
* examService.list
*	@description CRUD ACTION list
*
* studentService.list
*	@description CRUD ACTION list
*
* examService.findBy_course
*	@description CRUD ACTION findBy_course
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Course
 */
@Component({
    selector: 'app-course-edit',
    templateUrl: 'course-edit.component.html',
    styleUrls: ['course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
    item: Course;
    
    list_exam: Exam[];
    
    list_student: Student[];
    
    externalExam__course: Exam[];
    externalStudent__course: Student[];
    model: Course;
    formValid: Boolean;

    constructor(
    private courseService: CourseService,
    private studentService: StudentService,
    private examService: ExamService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Course();
        this.externalExam__course = [];
        this.externalStudent__course = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.courseService.get(id).subscribe(item => this.item = item);
                this.examService.findBy_course(id).subscribe(list => this.externalExam__course = list);
                this.studentService.findBy_course(id).subscribe(list => this.externalStudent__course = list);
            }
            // Get relations
            this.examService.list().subscribe(list => this.list_exam = list);
            this.studentService.list().subscribe(list => this.list_student = list);
        });
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
     * Add Exam from Course
     *
     * @param {string} id Id of Exam to add in this.item._exam array
     */
    addExam(id: string) {
        if (!this.item._exam)
            this.item._exam = [];
        this.item._exam.push(id);
    }

    /**
     * Remove an Exam from a Course
     *
     * @param {number} index Index of Exam in this.item._exam array
     */
    removeExam(index: number) {
        this.item._exam.splice(index, 1);
    }
    /**
     * Check if an Student is in  _student
     *
     * @param {string} id Id of Student to search
     * @returns {boolean} True if it is found
     */
    containStudent(id: string): boolean {
        if (!this.item._student) return false;
        return this.item._student.indexOf(id) !== -1;
    }

    /**
     * Add Student from Course
     *
     * @param {string} id Id of Student to add in this.item._student array
     */
    addStudent(id: string) {
        if (!this.item._student)
            this.item._student = [];
        this.item._student.push(id);
    }

    /**
     * Remove an Student from a Course
     *
     * @param {number} index Index of Student in this.item._student array
     */
    removeStudent(index: number) {
        this.item._student.splice(index, 1);
    }

    /**
     * Save Course
     *
     * @param {boolean} formValid Form validity check
     * @param Course item Course to save
     */
    save(formValid: boolean, item: Course): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.courseService.update(item).subscribe(data => this.goBack());
            } else {
                this.courseService.create(item).subscribe(data => this.goBack());
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



