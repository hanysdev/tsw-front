import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lecture } from './lecture';
import { Observable, catchError, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  private lectureUrl = 'https://wolnelektury.pl/api/books';

  constructor(private http: HttpClient) { }

  getLectures(): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(this.lectureUrl).pipe(
      catchError(this.handleError('getAllBooks', []))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T | null) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return throwError(result as T);
    };
  }

}
