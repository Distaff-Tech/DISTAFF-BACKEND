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
  selector: 'app-duepayments',
  templateUrl: './duepayments.component.html',
  styleUrls: ['./duepayments.component.css']
})
export class DuepaymentsComponent implements OnInit {

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
    this._dataService.getduepayments();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.loadscript();

    $('#payment_sidebar').addClass('active');
  }

  public loadscript()
  {
    
  $(document).ready(function(){

  });

  }
  public clearPayment(id){
    let a = confirm("Kindly clear the due payment only when you have paid the users from your bank account. Are you sure you want to clear this payment ?")
    if (a == true){
    this._dataService.clearPayment({"id": id})
    }
  }

}
