import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from '../../../services/data.service';
import {throwError} from 'rxjs';
import {NgForm} from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { DOCUMENT } from '@angular/common';
import {Location} from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  current_location:any;
  image:any;
  dtOptions: DataTables.Settings = {};

  constructor(@Inject(DOCUMENT) public document: Document, public _dataService: DataService, public router: Router, public _location: Location,private SpinnerService: NgxSpinnerService) { 
    this.SpinnerService.show();
  }

  

  ngOnInit() {
    this.current_location = "https://www.distaff.app/api";
    this._dataService.getactiveusers();
    $('#users_sidebar').addClass('active');
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

  public ViewProfile(id){
    this.router.navigate(['/user-profile/'+id]);
  }

}
