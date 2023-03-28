import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { IBlogResponse } from '../../admin-blog/admin-blog.component';

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.scss']
})
export class BlogInfoComponent implements OnInit {

  public blog!: IBlogResponse;

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getOneBlogInfo()
  }

  getOneBlogInfo(): void {
    const BLOG_ID = Number(this.activatedRoute.snapshot.paramMap.get('id'))    
    this.adminService.getOne(BLOG_ID).subscribe(data => {
      this.blog = data;      
    })
  }
}
