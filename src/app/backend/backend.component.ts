import { Component } from '@angular/core';
import { OurBook } from '../ourBook'
import { BackendService } from '../backend.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent {

  lectures: OurBook[] = []

  editMode: boolean | undefined

  book: OurBook | undefined

  constructor(private backendService: BackendService){ }

  getAllBooks(): Observable<OurBook[]> {
    return this.backendService.getAllBooks();
  }

  postLecture(lecture: OurBook) {
    this.backendService.postLecture(lecture).subscribe(response => {console.log(response)})
  }

  ngOnInit(): void {
    this.getAllBooks().subscribe((lectures: OurBook[]) => {
      this.lectures = lectures;
    });
  }

  selectedLecture: OurBook | undefined;

  selectLecture(book: OurBook): void {
    this.selectedLecture = book;
  }


  deleteBook(lecture: OurBook): void {
    this.backendService.deleteLecture(lecture)
      .pipe(
        tap(() => {
          this.getAllBooks().subscribe((lectures: OurBook[]) => {
            this.lectures = lectures;
          });
        })
      )
      .subscribe(() => {
        console.log('Książka została usunięta');
      });
  }

  editBook(book: OurBook) {
    this.editMode = true;
  }
  
  saveBook(book: OurBook) {
    this.editMode = false;
    this.backendService.updateLecture(book)
    .pipe(
      tap(() => {
        this.getAllBooks().subscribe((lectures: OurBook[]) => {
          this.lectures = lectures;
        });
      })
    )
    .subscribe(() => {
      console.log('Książka została usunięta');
    });
  }
}
