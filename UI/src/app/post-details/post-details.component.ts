import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post_id: any;
  private subscription: any;
  post_details: any;

  constructor(private route: ActivatedRoute,
    private api: BlogService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.post_id = params['id'];
    });
    this.getPostDetails();
  }

  getPostDetails()
  {
    debugger;
    this.api.getPostDetails(this.post_id).subscribe((data) => {
      debugger;
      this.post_details = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
