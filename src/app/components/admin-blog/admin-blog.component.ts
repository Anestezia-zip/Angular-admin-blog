import { Component } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent {
  public blogs!: IBlog[];

  public topic!: string;
  public message!: string;
  public postedBy!: string;
  public imagePath = 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg'

  editStatus = false
  editIndex!: number
  editID!: number
  
  constructor(
    private adminService: AdminService,
  ) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.adminService.getAll().subscribe(data => {
      this.blogs = data;
    })
  }

  addBlog(): void {
    const newBlog = {
      imagePath: this.imagePath,
      postedBy: this.postedBy,
      topic: this.topic,
      message: this.message,
    };
    if (this.topic && this.message && this.postedBy) {
      this.adminService.create(newBlog).subscribe(() => {
        this.getBlogs();
        this.resetForm()
      })
    }
  }

  editBlog(index: number): void {
    this.topic = this.blogs[index].topic
    this.message = this.blogs[index].message
    this.postedBy = this.blogs[index].postedBy
    this.editIndex = index;
    this.editStatus = true
  }

  saveBlog():void {
    const updateBlog = {
      imagePath: this.imagePath,
      postedBy: this.postedBy,
      topic: this.topic,
      message: this.message,
    };
    const id = this.blogs[this.editIndex].id;
    this.adminService.update(updateBlog, id).subscribe(() => {
      this.getBlogs()   
      this.resetForm()
      this.editStatus = false   
    })
  }

  deleteBlog(index: number): void {
    const blog = this.blogs[index];
    const id = blog.id;
    this.adminService.delete(id).subscribe(() => {
      this.getBlogs()      
    })
  }

  resetForm(): void {
    this.topic = ''
    this.message = ''
    this.postedBy = ''
  }

}

export interface IBlog {
  id: number,
  imagePath: string,
  postedBy: string,
  topic: string,
  message: string,
}

export interface IBlogRequest {
  imagePath: string,
  postedBy: string,
  topic: string,
  message: string,
}

export interface IBlogResponse extends IBlogRequest{
  id: number
}