import { Component } from '@angular/core';
import { Lecture } from '../lecture';
import { LectureService } from '../lecture.service';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent {
  lectures: Lecture[] | undefined;

  constructor(private lectureService: LectureService, private backenService: BackendService){ }

  getLectures(): void {
    this.lectureService.getLectures().subscribe(lectures => this.lectures = lectures)
  }

  ngOnInit(): void {
    this.getLectures()
  }

  selectedLecture: Lecture = new Lecture;

  selectLecture(book: Lecture): void {
    this.selectedLecture = book;
  }

  updateBook() {
    console.log('Zapisano zmiany:', this.selectedLecture);
  }

  addToOurLibrary() {
    console.log('Dodwania ksiązki do biblioteki:', this.selectedLecture);
    this.backenService.postLecture(this.selectedLecture).subscribe(
      response => {
        console.log('Książka została zapisana na serwerze:', response);
      },
      error => {
        console.error('Błąd podczas zapisywania książki:', error);
      }
    );
  }
}
