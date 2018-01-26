import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';

import { NgForm } from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './post.service';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostEditComponent } from './post-edit/post-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserViewComponent,
    UserCreateComponent,
    UserEditComponent,
    PostsComponent,
    PostCreateComponent,
    PostViewComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
