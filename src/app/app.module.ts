import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password-form/change-password-form.component';
import { PostComponent } from './posts/posts.component';
import { PostService } from './posts/post.service';
import { MyErrorHandler } from './common/error-handler';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  providers: [PostService, {provide: ErrorHandler, useClass: MyErrorHandler}],
  declarations: [ AppComponent, HelloComponent, FavoriteComponent, PanelComponent, LikeComponent, ContactFormComponent, CourseFormComponent, SignupFormComponent, ChangePasswordComponent, PostComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
