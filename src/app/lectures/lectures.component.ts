import { Component } from '@angular/core';
import { Lecture } from '../lecture';
import { LectureService } from '../lecture.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent {
  lectures: Lecture[] | undefined;

  constructor(private lectureService: LectureService){ }

  getLectures(): void {
    this.lectureService.getLectures().subscribe(lectures => this.lectures = lectures)
  }

  ngOnInit(): void {
    this.getLectures()
  }

  selectedLecture: Lecture | undefined;

  selectLecture(book: Lecture): void {
    this.selectedLecture = book;
  }

  updateBook() {

    console.log('Zapisano zmiany:', this.selectedLecture);
  }
}
