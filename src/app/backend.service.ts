import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lecture } from './lecture';
import { Observable, tap} from 'rxjs';

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

  private deleteUrl = 'https://rest-backend-express.herokuapp.com/book-management/books/delete';


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
  getAllBooks(): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(this.getAllBooksUrl)
  }

  getOneByTitle(title: String): Observable<Lecture[]> {
    const url = '${this.getOneByTitleUrl}/${title}';
    return this.http.get<Lecture[]>(url)
  }

  getOneByAuthor(author: String): Observable<Lecture[]> {
    const url = '${this.getOneByAuthorUrl}/${author}';
    return this.http.get<Lecture[]>(url)
  }

  postLecture (lecture: Lecture): Observable<Lecture> {
    return this.http.post<Lecture>(this.postUrl, lecture, this.httpOptions)
  }

  updateLecture (lecture: Lecture): Observable<Lecture> {
    return this.http.put<Lecture>(this.updateUrl, lecture, this.httpOptions)
  }

  deleteLecture (lecture: Lecture | string): Observable<Lecture> {
    const title = typeof lecture === 'string' ? lecture : lecture.title;
    const url = '${this.deleteUrl}/${title}';
    return this.http.delete<Lecture>(this.updateUrl, this.httpOptions)
  }


}
