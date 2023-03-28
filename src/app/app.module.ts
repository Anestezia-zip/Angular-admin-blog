import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminBlogComponent } from './components/admin-blog/admin-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogInfoComponent } from './components/blog/blog-info/blog-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminBlogComponent,
    BlogComponent,
    BlogInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
