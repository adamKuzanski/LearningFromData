import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private allertService: AlertService) { }

  ngOnInit(): void {
    this.subscription = this.allertService.getAlert()
            .subscribe(message => {
                switch (message && message.type) {
                    case 'success':
                        message.scss = 'alert alert-success';
                        break;
                    case 'error':
                        message.scss = 'alert alert-danger';
                        break;
                }

                this.message = message;
            });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
