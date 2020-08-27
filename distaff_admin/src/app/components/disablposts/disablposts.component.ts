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
  selector: 'app-disablposts',
  templateUrl: './disablposts.component.html',
  styleUrls: ['./disablposts.component.css']
})
export class DisablpostsComponent implements OnInit {
  current_location:any;
  image:any;
  submitted = false;

  dtOptions: DataTables.Settings = {};

  constructor(@Inject(DOCUMENT) public document: Document, public _dataService: DataService, public router: Router, public _location: Location,private SpinnerService: NgxSpinnerService) {
    this.SpinnerService.show();
   }

   backClicked() {
    this._location.back();
  }

  ngOnInit() {
    this._dataService.notification_list();
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

  public ViewPost(id){
    this.router.navigate(['/viewdisabledpost/'+id]);
    //window.location.href='/user-profile/'+id;
  }

}
