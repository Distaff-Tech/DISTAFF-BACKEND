import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { EditprofileComponent } from './components/myprofile/editprofile/editprofile.component';
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
import { ViewpostComponent } from './components/viewpost/viewpost.component';
import { DisablpostsComponent } from './components/disablposts/disablposts.component';
import { EnablepostComponent } from './components/disablposts/enablepost/enablepost.component';
import { DuepaymentsComponent } from './components/duepayments/duepayments.component';
import { BlankComponent } from './components/blank/blank.component';
import { PaymenthistoryComponent } from './components/duepayments/paymenthistory/paymenthistory.component';
import { UserorderdetailComponent } from './components/order/userorderdetail/userorderdetail.component';
 

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent
  },
  {
    path: 'blank',
    component:BlankComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch:'full'
    // canActivate: [AuthGuard] 
  },
  {
    path: 'myProfile',
    component: MyprofileComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'editProfile',
    component: EditprofileComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UserComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'activeUsers',
    component: ActiveUsersComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'registeredUsers',
    component: RegisterUsersComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'user-profile/:id',
    component: ViewUsersprofileComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'post',
    component: PostComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'getNotification',
    component: NotificationComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'postshared',
    component: PostsharednotificationComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'helpandsupport',
    component: HelpandsupportnotificationComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'postreport',
    component: PostreportnotificationComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'disableposts',
    component: DisablpostsComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'viewpublishPost/:id',
    component: HistoryComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'payment',
    component: PaymentComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'duepayment',
    component: DuepaymentsComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'orders',
    component: OrderComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
   },
   {
    path: 'orderuserdetail/:id',
    component: UserorderdetailComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
   },
   {
    path: 'viewpost/:id',
    component: ViewpostComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
   },
   {
    path: 'viewdisabledpost/:id',
    component: EnablepostComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
   },
   {
    path: 'paymenthistory',
    component: PaymenthistoryComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
   },
  
  {
    path: '**',
   redirectTo: '' 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent]


