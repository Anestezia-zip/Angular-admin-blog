import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminBlogComponent } from './components/admin-blog/admin-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogInfoComponent } from './components/blog/blog-info/blog-info.component';

const routes: Routes = [
  { path: 'admin/blog', component: AdminBlogComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
