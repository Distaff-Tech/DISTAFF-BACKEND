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
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  current_location:any;
  image:any;
  submitted = false;

  dtOptions: DataTables.Settings = {};

  constructor(@Inject(DOCUMENT) public document: Document, public _dataService: DataService, public router: Router, public _location: Location,private SpinnerService: NgxSpinnerService) {
    this.SpinnerService.show();
  }

  backClicked(){
    this._location.back();
  }

  ngOnInit() {
    this.current_location = "http://157.245.218.104:8000";
    this._dataService.getOrderDetail();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.loadscript();

    $('#orders_sidebar').addClass('active');
  }

  public loadscript()
  {
    
  $(document).ready(function(){

  });

  }
  public ViewProfile(id){
    this.router.navigate(['/orderuserdetail/'+id]);
    //window.location.href='/user-profile/'+id;
  }

}
