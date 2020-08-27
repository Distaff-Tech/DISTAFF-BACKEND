import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as $ from 'jquery';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  public editObj:any;
  addFilterForm: FormGroup;

  changePasswordForm: FormGroup;

  submitted = false;
  customData:any;

  fileName: string;
  filePreview: string;
  myString: string;
  selectedElement:any;
  is_file:boolean = false;

  error_msg:boolean = false;
  touched:boolean;
  error_msg2:boolean = false;
  error_msg3:boolean = false;
  

  field_error:boolean = false;
  wrong_field_error:boolean = false;
  passtouched:boolean;
  passerror_msg2:boolean = false;
  passerror_msg3:boolean = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  Blob:any ='';

  constructor(public formBuilder: FormBuilder,public _dataService:DataService,public http: HttpClient,public router: Router, public cd: ChangeDetectorRef,public _location: Location) { 
     }

  ngOnInit() {

    this.addFilterForm = this.formBuilder.group({
      first_name: ['',[Validators.required]],
      last_name: [''],
      email: ['',[Validators.required]],
      image:['']
    });

    this.changePasswordForm = this.formBuilder.group({
      
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required,Validators.compose([
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
     ])]],                 
     confirmPassword: ['', [Validators.required]],

  });

    this._dataService.getAdminProfile();
    console.log("hello")
    console.log(this._dataService.currentadmin)
  }

  get f() { return this.addFilterForm.controls; }


  get passf() { return this.changePasswordForm.controls; }

  backClicked() {
    this._location.back();
  }


  onFileChange(event:any) {
    this.imageChangedEvent = event;

    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      this.filePreview = file;
      this.is_file = true
      reader.readAsDataURL(file);
    }
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.Blob =  this.dataURItoBlob(event.base64);
    //this.dataURItoBlob(this.croppedImage);
  
     var fd=new FormData();
     fd.append('image','profile.png');
     console.log(fd,"kkkkkk");
  }
  dataURItoBlob(dataURI) {
   console.log(dataURI,"llllll");
  
   const binary = atob(dataURI.split(',')[1]);
   const array = [];
   for (let i = 0; i < binary.length; i++) {
     array.push(binary.charCodeAt(i));
   }
   return new Blob([new Uint8Array(array)], {
     type: 'png'
   });
  }
  imageLoaded() {
    
      // show cropper
  }
  cropperReady() {
    
      // cropper ready
  }
  loadImageFailed() {
    
      // show message
  }


  onSubmit() {
    this.submitted = true;
    
    if (this.addFilterForm.value.first_name.replace(/\s/g,"") == ""){
     
      this.addFilterForm.value.first_name= ""
      this.error_msg = true;
      this.touched = this.addFilterForm.controls.first_name.touched
      return
    }else{this.error_msg = false;}


    // if (this.addFilterForm.value.last_name.replace(/\s/g,"") == ""){
     
    //   this.addFilterForm.value.last_name= ""
    //   this.error_msg2 = true
    //   this.touched = this.addFilterForm.controls.last_name.touched
    //   return
    // }else{this.error_msg2 = false;}

    if (this.addFilterForm.value.email.replace(/\s/g,"") == ""){
     
      this.addFilterForm.value.email= ""
      this.error_msg2 = true
      this.touched = this.addFilterForm.controls.email.touched
      return
    }else{this.error_msg2 = false;}
  
    // stop here if form is invalid
    if (this.addFilterForm.invalid) {
        return;
    }
    if (this.addFilterForm.value.email != ""){
     
      //const a = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;
      const a = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
      let is_match = this.addFilterForm.value.email.match(a);
 
     if (is_match == null){
       alert("Enter valid email")
       return
     }
 
    }

    let formData = new FormData();
    formData.append('file' ,  this.Blob);
    formData.append('type' , "userprofile");
    this.customData=this.addFilterForm.value;
    this.customData['is_file']= this.is_file;
  
    this._dataService.updateAdminProfile(this.customData, formData);

  }

  onPassSubmit() {
    
    
    if(this.changePasswordForm.value['newPassword']!= this.changePasswordForm.value['confirmPassword']){
      // this.passtouched = this.changePasswordForm.controls.last_name.touched
      this.wrong_field_error = true
      
      // $('#idError').text("New password & confirm password didn't match.")
      return;
    }
    // stop here if form is invalid
    if (this.changePasswordForm.invalid) {
      this.field_error = true
        return;

    }
    this._dataService.changePassword(this.changePasswordForm.value).subscribe(
      (res:any)=>{
      alert(res['message']);
      localStorage.clear();
      this.router.navigate(['']);
    },
    (error:any)=>{
      if(error.status==401){
        this.router.navigate(['']);
      };
      alert(error.error.message);    
    }
  
  );


  }

}
