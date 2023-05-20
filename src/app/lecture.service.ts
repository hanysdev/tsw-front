import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lecture } from './lecture';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  private lectureUrl = 'https://wolnelektury.pl/api/books';

  constructor(private http: HttpClient) { }

  getLectures(): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(this.lectureUrl)
  }
}
