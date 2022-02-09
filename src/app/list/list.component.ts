import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  UserId: string | null = null;
  ngOnInit(): void {
    console.warn('User id:', this.route.snapshot.paramMap.get('id'))
    this.UserId = this.route.snapshot.paramMap.get('id');
  }

}
