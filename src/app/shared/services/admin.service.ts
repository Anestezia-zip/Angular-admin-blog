import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog, IBlogRequest, IBlogResponse } from 'src/app/components/admin-blog/admin-blog.component';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = environment.BACKEND_URL;
  private api = { blogs: `${this.url}/blogs` }

  constructor(private http: HttpClient){}

  getAll(): Observable<IBlogResponse[]> {
    return this.http.get<IBlogResponse[]>(this.api.blogs);
  }

  getOne(id: number): Observable<IBlogResponse> {
    return this.http.get<IBlogResponse>(`${this.api.blogs}/${id}`);
  }

  create(blog: IBlogRequest): Observable<IBlogResponse> {
    return this.http.post<IBlogResponse>(this.api.blogs, blog);
  }

  update(blog: IBlogRequest, id: number): Observable<IBlogResponse> {
    return this.http.patch<IBlogResponse>(`${this.api.blogs}/${id}`, blog);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.blogs}/${id}`);
  }
}





// {
//   "id": 1,
//   "imagePath": "https://scientific-publishing.webshop.elsevier.com/wp-content/uploads/2021/09/2021-01-1.jpg",
//   "postedBy": "admin",
//   "topic": "First post",
//   "message": "Sign up to create your account and start to use Angular blog"
// },