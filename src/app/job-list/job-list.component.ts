import { Component,OnInit } from '@angular/core';
import {
  TuiAppearance,
  TuiButton,
  TuiDataList,
  TuiDropdown,
  TuiDropdownService,
  TuiIcon,
  TuiSurface,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgeNotification,
  TuiChevron,
  TuiDataListDropdownManager,
  TuiFade,
  TuiSwitch,
  TuiTabs,
} from '@taiga-ui/kit';

import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';
import { JobsServiceService } from '../services/jobs-service.service';
import { CommonModule } from '@angular/common';
import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';

@Component({
  selector: 'app-job-list',
  imports: [
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiTitle,
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiChevron,
    TuiDataListDropdownManager,
    TuiFade,
    TuiSwitch,
    TuiTabs,
    TuiCardLarge,
    TuiHeader,
    TuiNavigation,
    CommonModule,
    TuiSurface,
    TuiRepeatTimesPipe
  ],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.less'
})
export class JobListComponent implements OnInit{
  constructor(private jobService:JobsServiceService){}
  jobs:any
  jobcount:any
  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      (data:any)=>{
        console.log('running ')
        this.jobs=data
        this.jobcount=data['job_count']
      },
      (error)=>{
        console.log("An error occured",error)
      }
    )
  }
}
