import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Reports } from '../../entity/reports';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss']
})
export class AllReportsComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  reports: Reports[];
  reportsList: Reports[] = [];
  config: any;

  constructor(
        private reportService: ReportsService,
        private router: Router,
        private toaster: ToastrService,) { }

  ngOnInit() {
    this.reportService.allReports()
      .pipe(takeUntil(this.destroy$)).subscribe(
        (reportsResponse: any) => {
          if (reportsResponse) {
            // console.log('reportsResponse', reportsResponse);
            this.reports = reportsResponse.Data
            this.reportsList = reportsResponse.Data.reverse();
            this.config = {
              itemsPerPage: 5,
              currentPage: 1,
              totalItems: this.reportsList.length
            };
          }
        },
        error => this.handleError(error)          
      );
  }

  // Handle Response Error
  handleError(error) {
    this.reports = [];
    console.log(error);
    if (error.error.error) {
      this.toaster.error(error.error.error);
    } else if (error.error.msg) {
      this.toaster.error(error.error.msg);
    }
  }

  updateMessageStatus(id, messageStatus: boolean) {
    if (messageStatus) {    
      console.log('update Message Status sending ', messageStatus);
      this.reportService.updateNewMessageStatus(id).subscribe(data => console.log('Update Message Status : ', data));
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Fetch The Page Number On Page Change
  pageChanged(event) {
    this.config.currentPage = event;
  }

}
