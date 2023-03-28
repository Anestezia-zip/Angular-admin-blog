import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AdminBlogComponent, IBlogResponse } from '../admin-blog/admin-blog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  public userBlogs: IBlogResponse[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.adminService.getAll().subscribe(data => {
      this.userBlogs = data;
    })
  }
}

