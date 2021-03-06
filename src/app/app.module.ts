import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards';
import { AlertService, AuthenticationService } from './services';
import { NgAlertModule } from '@theo4u/ng-alert';
import { appRoutes } from './app-routing.module';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { RegisterComponent } from './register';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactComponent } from './contact/contact.component';

import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { UserprofileComponent } from './userprofile/userprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { DoubleroomComponent } from './doubleroom/doubleroom.component';
import { PremiereroomComponent } from './premiereroom/premiereroom.component';
import { DeluxeroomComponent } from './deluxeroom/deluxeroom.component';
import { ProfileGuard } from './guards/profile.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    ContactComponent,
    UserprofileComponent,
    ForgotpasswordComponent,
    VerifyemailComponent,
    RoomDetailsComponent,
    DoubleroomComponent,
    PremiereroomComponent,
    DeluxeroomComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgAlertModule,
    MatDialogModule,

    HttpClientModule,
    NgxUsefulSwiperModule,
    SlickCarouselModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    DatepickerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BsDatepickerModule.forRoot(),
  ],
  exports: [RouterModule],

  providers: [
    AuthGuard,
    ProfileGuard,
    AlertService,
    AuthenticationService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
