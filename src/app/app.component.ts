import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  courses = ['Javascript', 'HTML', 'CSS'];
  viewMode = 'list';

  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: "Here is the body of a tweet...",
    isLiked: false,
    likesCount: 0
  }
  onFavoriteChanged(isFavorite) {
    isFavorite = 
    console.log(isFavorite);
  }

  // onLikeClicked(isLiked) {
  //   if(isLiked) {
  //     this.tweet.likesCount++;
  //   }else {
  //     this.tweet.likesCount--;

  //   }
  // }
}
