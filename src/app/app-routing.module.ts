import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DeluxeroomComponent } from './deluxeroom/deluxeroom.component';
import { DoubleroomComponent } from './doubleroom/doubleroom.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthGuard} from './guards';
import { ProfileGuard } from './guards/profile.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PremiereroomComponent } from './premiereroom/premiereroom.component';
import { RegisterComponent } from './register';
import { RoomDetailsComponent } from './room-details/room-details.component';
// import { RoomsComponent } from './rooms/rooms.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { requiresLogin: true } },
  { path: 'register', component: RegisterComponent },
  { path: 'app', component: AppComponent },
  { path: 'userprofile', component: UserprofileComponent,
    canActivate: [ProfileGuard]
  },
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'room-details',
    component: RoomDetailsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'double-room', component: DoubleroomComponent },
  { path: 'premiere-room', component: PremiereroomComponent },
  { path: 'deluxe-room', component: DeluxeroomComponent },
  // { path: 'rooms', component: RoomsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'verifyemail', component: VerifyemailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    useHash: true,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
