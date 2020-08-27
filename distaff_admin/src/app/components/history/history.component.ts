import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public selectedId:any;
  current_location:any;
  dtOptions: DataTables.Settings = {};

  constructor(public httpClient: HttpClient,public router: Router,public _Activatedroute:ActivatedRoute,public _dataService:DataService,public _location: Location) { 
    this.selectedId=this._Activatedroute.snapshot.paramMap.get("id");
    this._dataService.getPostView(this.selectedId);
    this.current_location = "https://www.distaff.app/api";
  }
  backClicked(){
    this._location.back();
  }

  ngOnInit() {
    $('#history_sidebar').addClass('active');
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
  public deletepromo(id){
    let a = confirm("Are you sure you want to delete this promotional post ?")
    if (a == true){
    this._dataService.deletepromo({"id": id})
    }
  }

}
