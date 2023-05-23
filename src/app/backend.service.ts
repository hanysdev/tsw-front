import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lecture } from './lecture';
import { OurBook } from './ourBook'
import { Observable, catchError, tap, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  private getAllBooksUrl = 'https://rest-backend-express.herokuapp.com/book-management/books/getAllBooks';

  private getOneByTitleUrl = 'https://rest-backend-express.herokuapp.com/book-management/books/getOneByTitle';

  private getOneByAuthorUrl = 'https://rest-backend-express.herokuapp.com/book-management/books/getOneByAuthor';

  private postUrl = 'https://rest-backend-express.herokuapp.com/book-management/books/post';

  private updateUrl = 'https://rest-backend-express.herokuapp.com/book-management/books/update';

  private deleteUrl = 'https://rest-backend-express.herokuapp.com/book-management/books/deleteById';


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    getAllBooks(): Observable<OurBook[]> {
      return this.http.get<OurBook[]>(this.getAllBooksUrl).pipe(
        catchError(this.handleError('getAllBooks', []))
      );
    }
    
    getOneByTitle(title: string): Observable<OurBook[]> {
      const url = `${this.getOneByTitleUrl}/${title}`;
      return this.http.get<OurBook[]>(url).pipe(
        catchError(this.handleError('getOneByTitle', []))
      );
    }
    
    getOneByAuthor(author: string): Observable<OurBook[]> {
      const url = `${this.getOneByAuthorUrl}/${author}`;
      return this.http.get<OurBook[]>(url).pipe(
        catchError(this.handleError('getOneByAuthor', []))
      );
    }
    
    postLecture(lecture: Lecture): Observable<Lecture | null> {
      return this.http.post<Lecture>(this.postUrl, lecture, this.httpOptions).pipe(
        catchError(this.handleError('postLecture', null))
      );
    }
    
    updateLecture(lecture: OurBook): Observable<OurBook | null> {
      const id = lecture._id;
      const url = `${this.updateUrl}/${id}`;
      return this.http.put<OurBook>(this.updateUrl, this.httpOptions).pipe(
        catchError(this.handleError('updateLecture', null))
      );
    }
    
    deleteLecture(lecture: OurBook): Observable<OurBook | null> {
      const id = lecture._id;
      const url = `${this.deleteUrl}/${id}`;
    
      return this.http.delete<OurBook>(url, this.httpOptions)
    }

    private handleError<T>(operation = 'operation', result?: T | null) {
      return (error: any): Observable<T> => {
        console.error(`${operation} failed:`, error);
        return throwError(result as T);
      };
    }

}
