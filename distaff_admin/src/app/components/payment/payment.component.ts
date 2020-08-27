import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from '../../services/data.service';
import {throwError} from 'rxjs';
import {NgForm} from '@angular/forms'; 
import { Router , NavigationEnd} from '@angular/router'; 
import { DOCUMENT } from '@angular/common';
import {Location} from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  

  current_location:any;
  image:any;
  submitted = false;
  public totalItems: any;
  public currentPage:any=1; // set current page to 1
  public itemsPerPage:any=10; // we are showing 10 items per page
  addFilterForm: FormGroup;
  //mySubscription: any;
  

  constructor(@Inject(DOCUMENT) public document: Document,public formBuilder: FormBuilder, public _dataService: DataService, public router: Router, public _location: Location,private SpinnerService: NgxSpinnerService) {
    this.SpinnerService.show();
  }
  
  backClicked(){
    this._location.back();
  }

  ngOnInit() {
  //   this.router.routeReuseStrategy.shouldReuseRoute = function(){
  //     return false;
  // };
  
  // this.mySubscription = this.router.events.subscribe((event) => {
  //   if (event instanceof NavigationEnd) {
  //     // Trick the Router into believing it's last link wasn't previously loaded
  //     this.router.navigated = false;
  //   }
  // });
    

    this.addFilterForm = this.formBuilder.group({
      user_name: '',
      start_date:'',
      end_date:''
    });
    

    this.getData(this.currentPage,this.itemsPerPage);
    
  
    this.loadscript();
    $('#payment_sidebar').addClass('active');
    
  }

  
  // ngOnDestroy() {
  //   if (this.mySubscription) {
  //     this.mySubscription.unsubscribe();
  //   }
  // }

  
  public setValue() { 
    this.currentPage=1;
    this.getData(this.currentPage,this.itemsPerPage)
    
  }

  public loadscript()
  {
    
  $(document).ready(function(){
    

  });

  }
  
  public getNext(page: any){
    this.currentPage = page;
    //this.getData(this.currentPage,this.itemsPerPage);
    this.filterCoupon(this.currentPage,this.itemsPerPage);
  }
  getData(pageNo: any,maxResults: any){
    
    // this._dataService.getTransOrderDetail(pageNo,maxResults);
    var data = this.addFilterForm.value;
    this._dataService.filterCoupon1(data,pageNo,maxResults);
}


public filterCoupon(pageNo: any,maxResults: any)
  {
    
    var data = this.addFilterForm.value;
    this._dataService.filterCoupon(data,pageNo,maxResults)
    console.log(data)

  }

}
