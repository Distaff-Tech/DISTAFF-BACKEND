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
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {

  current_location:any;
  image:any;
  submitted = false;

  dtOptions: DataTables.Settings = {};
  

  constructor(@Inject(DOCUMENT) public document: Document, public _dataService: DataService, public router: Router, public _location: Location,private SpinnerService: NgxSpinnerService) { 
    this.SpinnerService.show();
  }

  

  ngOnInit() {
    const that = this;
    this.current_location = "https://www.distaff.app/api";
    this._dataService.getregisteredusers();
    $('#users_sidebar').addClass('active');
    console.log(this.current_location)
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
  }
  
  


  public ViewProfile(id){
    this.router.navigate(['/user-profile/'+id]);
    //window.location.href='/user-profile/'+id;
  }

}
