import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';

@Component({
  selector: 'app-root',
  imports: [JobListComponent, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'remotekenya';
}
