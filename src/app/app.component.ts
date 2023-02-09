import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  throttle = 0;
  distance = 2;
  page = 1;
  commentaries: Comment[] | any[] = [];
  name = 'Angular';

  constructor(private commentService: AppService) {}
ngOnInit(): void {
  this.commentService
  .getCommentaries(this.page)
  .subscribe((commentaries: Comment[]) => {
    this.commentaries = commentaries;
  });
}
onScroll(): void {
  this.commentService
    .getCommentaries(++this.page)
    .subscribe((commentaries: Comment[]) => {
      this.commentaries.push(...commentaries);
    });
}

}
