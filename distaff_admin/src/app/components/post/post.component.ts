import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef ,Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as $ from 'jquery';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import {throwError} from 'rxjs';
import {NgForm} from '@angular/forms'; 
import { DOCUMENT } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public editObj:any;
  addFilterForm: FormGroup;
  submitted = false;
  customData:any;

  fileName: string;
  filePreview: string;
  myString: string;
  is_file:boolean = false;

  error_msg:boolean = false;
  touched:boolean;
  image_error:boolean = false;

  current_location:any;
  image:any;

  dtOptions: DataTables.Settings = {};



  constructor(@Inject(DOCUMENT) public document: Document,public formBuilder: FormBuilder,public _dataService:DataService,public http: HttpClient,public router: Router, public cd: ChangeDetectorRef,public _location: Location,private SpinnerService: NgxSpinnerService) { 
    this.SpinnerService.show();
  }

  ngOnInit() {
    this.current_location = "https://www.distaff.app/api";
    this.addFilterForm = this.formBuilder.group({
      post_description: ['',[Validators.required]],
      logo: ['']

    });

    this._dataService.gethistory();
    $('#post_sidebar').addClass('active');
    // $('#helpandsupport_tab').addClass('active');
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

  get f() { return this.addFilterForm.controls; }

  onFileChange(event:any) {

    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      this.filePreview = file;
      console.log(this.filePreview)
      this.is_file = true
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.addFilterForm.value.post_description.replace(/\s/g,"") == ""){
     
      this.addFilterForm.value.post_description= ""
      this.error_msg = true;
      this.touched = this.addFilterForm.controls.post_description.touched
      return
    }else{this.error_msg = false;}


    if (!this.filePreview){
      this.image_error = true;
      return
    }


    this.image_error = false;
  
    // stop here if form is invalid
    if (this.addFilterForm.invalid) {
        return;
    }

    let formData = new FormData();
    formData.append('file' ,  this.filePreview);
    formData.append('type' , "post");
    this.customData=this.addFilterForm.value;
    this.customData['is_file']= this.is_file;
    console.log(this.customData,formData,"jjjjjjjjjjjjjjjj")
    this._dataService.addPost(this.customData, formData);

  }

  public deletepromo(id){
    let a = confirm("Are you sure you want to delete this promotional post ?")
    if (a == true){
    this._dataService.deletepromo({"id": id})
    }
  }
  public ViewPost(id){
    this.router.navigate(['/viewpublishPost/'+id]);
    //window.location.href='/user-profile/'+id;
  }


}
