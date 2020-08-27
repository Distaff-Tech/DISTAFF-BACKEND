import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-userorderdetail',
  templateUrl: './userorderdetail.component.html',
  styleUrls: ['./userorderdetail.component.css']
})
export class UserorderdetailComponent implements OnInit {

  public selectedId:any;
  current_location:any;
  dtOptions: DataTables.Settings = {};

  constructor(public httpClient: HttpClient,public router: Router,public _Activatedroute:ActivatedRoute,public _dataService:DataService,public _location: Location,private SpinnerService: NgxSpinnerService) {
    this.SpinnerService.show();
    this.selectedId=this._Activatedroute.snapshot.paramMap.get("id");
    this._dataService.getorderpostuserProfile(this.selectedId);
    this.current_location = "http://157.245.218.104:8000";
   }

   backClicked(){
    this._location.back();
  }

  ngOnInit() {
    $('#users_sidebar').addClass('active');
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
