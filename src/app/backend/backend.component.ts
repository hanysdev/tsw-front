import { Component } from '@angular/core';
import { Lecture } from '../lecture';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent {

  lectures: Lecture[] | undefined;

  constructor(private backendService: BackendService){ }

  getAllBooks(): void {
    this.backendService.getAllBooks().subscribe(lectures => this.lectures = lectures)
  }

  postLecture(lecture: Lecture) {
    this.backendService.postLecture(lecture).subscribe(response => {console.log(response)})
  }

  ngOnInit(): void {
    this.getAllBooks()
  }

  selectedLecture: Lecture | undefined;

  selectLecture(book: Lecture): void {
    this.selectedLecture = book;
  }

  updateBook() {

    console.log('Zapisano zmiany:', this.selectedLecture);
  }
}
