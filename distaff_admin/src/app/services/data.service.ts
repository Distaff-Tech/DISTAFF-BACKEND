import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, JsonpInterceptor,HttpParams} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxSpinnerService } from "ngx-spinner";






//const API_URL="http://3.21.18.92:8000/"; 
const API_URL="https://www.distaff.app/api/";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public authhttpOptions: any;
  public authhttpOptionsupload: any;
  public errors:any;
  public dashboarddata:any;
  public adminprofile:any;
  public totalItems:any;
  public currentuser:any;
  public currentadmin:any;
  public is_response:boolean = false;
  public registereduserslist:any;
  public activeuserslist:any;
  public userdetail:any;
  public transdetail:any;
  public orderdetail:any;
  public supportlist:any;
  public reportlist:any;
  public userposts:any;
  public postcount:any;
  public postdetail:any;
  public disablelist:any;
  public duepayment:any;
  public promohistory:any;
  public sharedlist:any;
  public userbank:any;
  public useraddresses:any;
  public primaryaddress:any;

  constructor(public http: HttpClient, public jwtHelper: JwtHelperService, public router: Router,private SpinnerService: NgxSpinnerService) {
    this.authhttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*', 'access-control-allow-origin': '*', 'AUTHORIZATION':  localStorage.getItem('token')})
    
    };

    this.authhttpOptionsupload = {
      headers: new HttpHeaders({'Access-Control-Allow-Origin': '*', 'AUTHORIZATION':  localStorage.getItem('token')})
    };
   }

  // Check whether the token is expired and return
  public isAuthenticated(): boolean {   
    const token = localStorage.getItem('jwt_token'); 
    return !this.jwtHelper.isTokenExpired(token);
  }
   
  public dashboard() {
    this.http.get(API_URL+'dashboard', this.authhttpOptions).subscribe(
      (dashdata: any)  => {
        this.dashboarddata = dashdata
      },
      (err:any)  => {
        console.log("errrrrrr----->"+err.error.message)
        this.errors = err.error.message;
        if(err.statusText == "Unauthorized"){
          alert("Session Expired!, Please login again.")
        }else{
          alert("Something Went Wrong, Please login again.")
        }
          localStorage.clear();
        this.router.navigate(['']);
      }
    );
  }



  public upload_file(image_data,redirect_url, operation){
    this.http.post(API_URL+'uploadfile',image_data, this.authhttpOptionsupload).subscribe(
      (data: any)  => {
        if(redirect_url == "myProfile"){ 
          alert("Profile Updated Successfully.")
          // window.location.href = '/'+redirect_url
          this.router.navigate(['/myProfile'])
        }
        else if(redirect_url == "post"){
          alert("post" + " "+ operation +" Successfully.")

          // this.router.navigate([redirect_url]);
          this.router.navigateByUrl("blank").then(() =>{
            this.router.navigateByUrl("/post");
          });
        }

        else{
          alert(redirect_url.charAt(0).toUpperCase() + " "+ operation +" Successfully")
          // window.location.href = '/'+redirect_url
          this.router.navigate(['/myProfile'])
        }
          
        
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );


  }

  public updateAdminProfile(editdata , formdata){
    var is_file = editdata["is_file"]
    this.http.post(API_URL+'editProfile',JSON.stringify(editdata), this.authhttpOptions).subscribe(
      (data: any)  => {
        formdata.append('id',data["user"]);
        if(is_file == true)
        {
          this.upload_file(formdata, "myProfile", "Edit")
        }
        else
        {
          alert("Profile Updated Sucessfully")
          this.router.navigate(['/myProfile']);
          // window.location.href = '/myProfile'
        }
       
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }
  

  
  public getAdminProfile(){
    this.http.get(API_URL+'get_admin_profile', this.authhttpOptions).subscribe(
      (data: any)  => {
        this.adminprofile = data.response;
        
        this.currentadmin = data.response[0];
        console.log(this.currentadmin)
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
       
        this.router.navigate(['']);
      }
    );
  }

  public changePassword(body:any){ 

    return this.http.post<any>(API_URL + 'changeAdminPassword',body,this.authhttpOptions);
  }

  public getregisteredusers(){

    this.http.get(API_URL+'registered_u',this.authhttpOptions).subscribe(
      (data: any)  => {
        this.registereduserslist = data.response;
        this.is_response = true;
        this.SpinnerService.hide();
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
      
        this.router.navigate(['']);
      }
    );
  }

  public getactiveusers(){

    this.http.get(API_URL+'active_u',this.authhttpOptions).subscribe(
      (data: any)  => {
        this.activeuserslist = data.response;
        this.is_response = true;
        this.SpinnerService.hide();
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }

  public getUserProfile(data){  
    this.http.post(API_URL+'show_profile',{"userId":data}, this.authhttpOptions).subscribe(
      (data: any)  => {
        this.userdetail = data.userr;
        this.userposts = data.user_post;
        this.postcount = data.total_post;
        this.is_response = true;
        this.SpinnerService.hide();
        console.log("hshhvdfhjfdhj",data.userr.image)
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }


  // public getTransOrderDetail(pageNo:any,maxRecords:any){  
  //   let httpParams = new HttpParams().set('pageNo', pageNo).set('maxRecords', maxRecords)
  //   this.http.get(API_URL+'transaction_detail', {headers: { 'Authorization':  localStorage.getItem('token')},params: httpParams}).subscribe(
  //     (data: any)  => {
  //       this.transdetail = data.response;
  //       this.is_response = true;
  //       this.SpinnerService.hide();
  //       console.log(data.response)
  //     },
  //     (err:any)  => {
  //       console.log("errrrrrr"+err.error.message)
  //       this.errors = err.error.message;
        
  //       this.router.navigate(['']);
  //     }
  //   );
  // }

  public getOrderDetail(){  
    this.http.get(API_URL+'ord_det', this.authhttpOptions).subscribe(
      (data: any)  => {
        this.orderdetail = data.response;
        this.is_response = true;
        this.SpinnerService.hide();
        console.log(data.response)
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }

  public notification_list(){  
    this.http.get(API_URL+'admin_notify', this.authhttpOptions).subscribe(
      (data: any)  => {
        this.supportlist = data.support;
        this.reportlist = data.report;
        this.disablelist = data.disable_post;
        this.sharedlist = data.shared_post_comment;
        this.is_response = true;
        this.SpinnerService.hide();
        console.log(data.report)
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }

  public getPostView(data){  
    this.http.post(API_URL+'showpost',{"postId":data}, this.authhttpOptions).subscribe(
      (data: any)  => {
        this.postdetail = data.reported_post;
        this.is_response = true;
        console.log(data.reportedp_post)

      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }

  public disablepost(data){
    this.http.post(API_URL+'disable_post',JSON.stringify(data), this.authhttpOptions).subscribe(
      (data: any)  => {
       alert("Post disabled Successfully")
       this.notification_list()
       this.router.navigate(['/disableposts']);
       
     },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }

  public enablepost(data){
    this.http.post(API_URL+'enable_post',JSON.stringify(data), this.authhttpOptions).subscribe(
      (data: any)  => {
       alert("Post enabled Successfully")
       this.notification_list()
       this.router.navigate(['/postreport']);
       
     },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }



  public filterCoupon(data,pageNo:any,maxRecords:any){
    let httpParams = new HttpParams().set('pageNo', pageNo).set('maxRecords', maxRecords)
    this.http.get(API_URL+'transaction_detail?search=true&data='+JSON.stringify(data), {headers: { 'Authorization':  localStorage.getItem('token')},params: httpParams}).subscribe(
      (data: any)  => {
        this.transdetail = data.response
        this.SpinnerService.hide();
        console.log(data.response)
      
        //  this.router.navigate(['']);
      },
      (err:any) => {
        this.router.navigate(['/payment']);
      }
    );     
  }

  public filterCoupon1(data,pageNo:any,maxRecords:any){
    let httpParams = new HttpParams().set('pageNo', pageNo).set('maxRecords', maxRecords)
    this.http.get(API_URL+'transaction_detail?search=true&data='+JSON.stringify(data), {headers: { 'Authorization':  localStorage.getItem('token')},params: httpParams}).subscribe(
      (data: any)  => {
        this.transdetail = data.response
        this.SpinnerService.hide();
        console.log(data.response)
      
        //  this.router.navigate(['']);
      },
      (err:any) => {
        this.router.navigate(['/payment']);
      }
    );     
  }

  public getduepayments(){  
    this.http.get(API_URL+'get_Due_Payment', this.authhttpOptions).subscribe(
      (data: any)  => {
        this.duepayment = data.response;
        this.is_response = true;
        this.SpinnerService.hide();
        console.log(data.response)
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }

  public addPost(post, formdata){
    var is_file=post["is_file"]
    this.http.post(API_URL+'add_promotonal_post', JSON.stringify(post), this.authhttpOptions).subscribe(
      (data: any)  => {
        formdata.append('id' ,data["post"]);
        if(is_file == true)
        {
          this.upload_file(formdata, "post", "Added")
        }else{
          alert("post Added Successfully");
          window.location.href = '/post'
          // this.router.navigate(['brands']);
        }
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;

        //  this.router.navigate(['']);

        
        this.router.navigate(['']);
      }
    );     
  }

  public gethistory(){  
    this.http.get(API_URL+'get_promo_history', this.authhttpOptions).subscribe(
      (data: any)  => {
        this.promohistory = data.response;
        this.is_response = true;
        this.SpinnerService.hide();
        console.log(data.response)
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        this.SpinnerService.hide();
        this.router.navigate(['/post']);
      }
    );
  }

  public deletepromo(data){
    this.http.post(API_URL+'delete_promotonal_post',JSON.stringify(data), this.authhttpOptions).subscribe(
      (data: any)  => {
       alert("Post deteted Successfully")
       this.gethistory()
       this.router.navigate(['/post']);
       
     },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }

  public clearPayment(data){
    this.http.post(API_URL+'clear_due_payment',JSON.stringify(data), this.authhttpOptions).subscribe(
      (data: any)  => {
       alert("Payment cleared Successfully")
       this.getduepayments()
       this.router.navigate(['/duepayment']);
       
     },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }

  public getpaymentshistory(){  
    this.http.get(API_URL+'payment_history', this.authhttpOptions).subscribe(
      (data: any)  => {
        this.duepayment = data.response;
        this.is_response = true;
        this.SpinnerService.hide();
        console.log(data.response)
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }

  public getorderpostuserProfile(data){  
    this.http.post(API_URL+'Show_user_info',{"orderId":data}, this.authhttpOptions).subscribe(
      (data: any)  => {
        this.userdetail = data.userr;
        this.userbank = data.user_bank;
        this.useraddresses = data.addresses;
        this.primaryaddress = data.primary;
        console.log(this.userbank)
        this.SpinnerService.hide();
        console.log("hshhvdfhjfdhj",data.userr.image)
      },
      (err:any)  => {
        console.log("errrrrrr"+err.error.message)
        this.errors = err.error.message;
        
        this.router.navigate(['']);
      }
    );
  }
  

}
