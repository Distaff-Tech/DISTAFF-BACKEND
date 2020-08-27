import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { XyzService } from './xyz.service';
import { HttpClientModule } from '@angular/common/http';    // add this
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { SidebarComponent } from './components/commons/sidebar/sidebar.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { JwtHelperService, JwtModuleOptions, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditprofileComponent } from './components/myprofile/editprofile/editprofile.component';
import { DatePipe } from '@angular/common'
import { DataTablesModule } from 'angular-datatables';
import { OwlDateTimeModule, OwlNativeDateTimeModule  } from 'ng-pick-datetime';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HistoryComponent } from './components/history/history.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderComponent } from './components/order/order.component';
import { ActiveUsersComponent } from './components/user/active-users/active-users.component';
import { RegisterUsersComponent } from './components/user/register-users/register-users.component';
import { ViewUsersprofileComponent } from './components/user/view-usersprofile/view-usersprofile.component';
import { PostsharednotificationComponent } from './components/notification/postsharednotification/postsharednotification.component';
import { HelpandsupportnotificationComponent } from './components/notification/helpandsupportnotification/helpandsupportnotification.component';
import { PostreportnotificationComponent } from './components/notification/postreportnotification/postreportnotification.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { ViewpostComponent } from './components/viewpost/viewpost.component';
import { DisablpostsComponent } from './components/disablposts/disablposts.component';
import { EnablepostComponent } from './components/disablposts/enablepost/enablepost.component';
import {MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

import { DuepaymentsComponent } from './components/duepayments/duepayments.component';
import { BlankComponent } from './components/blank/blank.component';
import { PaymenthistoryComponent } from './components/duepayments/paymenthistory/paymenthistory.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UserorderdetailComponent } from './components/order/userorderdetail/userorderdetail.component';


// import { FileUploadModule } from 'ng2-file-upload';

const yourTokenGetter: any = localStorage.getItem('token');
const yourWhitelistedDomains: any = "localhost:4200";

const material =[MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatTableModule];
const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: yourTokenGetter,
      whitelistedDomains: yourWhitelistedDomains
  }
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MyprofileComponent,
    EditprofileComponent,
    UserComponent,
    PostComponent,
    NotificationComponent,
    HistoryComponent,
    PaymentComponent,
    OrderComponent,
    ActiveUsersComponent,
    RegisterUsersComponent,
    ViewUsersprofileComponent,
    PostsharednotificationComponent,
    HelpandsupportnotificationComponent,
    PostreportnotificationComponent,
    LandingpageComponent,
    ViewpostComponent,
    DisablpostsComponent,
    EnablepostComponent,
    DuepaymentsComponent,
    BlankComponent,
    PaymenthistoryComponent,
    UserorderdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    DataTablesModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AngularMultiSelectModule,
    NgxSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ImageCropperModule,

    // FileUploadModule
  ],
  providers: [ { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService, DatePipe,NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
