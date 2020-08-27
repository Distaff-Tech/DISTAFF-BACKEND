import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from '../../services/data.service';
import {throwError} from 'rxjs';
import {NgForm} from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { DOCUMENT } from '@angular/common';
import {Location} from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  current_location:any;
  image:any;
  submitted = false;

  dtOptions: DataTables.Settings = {};

  constructor(@Inject(DOCUMENT) public document: Document, public _dataService: DataService, public router: Router, public _location: Location,private SpinnerService: NgxSpinnerService) { 
    this.SpinnerService.show();
  }

  ngOnInit() {
    this._dataService.notification_list();
    $('#getNotification_sidebar').addClass('active');
    $('#helpandsupport_tab').addClass('active');
    
    console.log(this.current_location)
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.loadscript();
  }

  public loadscript()
  {
    
  $(document).ready(function(){

  });

  }

}
