import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards';
import { AlertService, AuthenticationService } from './services';
import { NgAlertModule } from '@theo4u/ng-alert';
import { appRoutes } from './app-routing.module';
import { RegisterComponent } from './register';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';  

import { UserprofileComponent } from './userprofile/userprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    ContactComponent,
    BookingComponent,
    UserprofileComponent,
    ForgotpasswordComponent,
    VerifyemailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgAlertModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
    SlickCarouselModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  exports: [RouterModule
  ],

  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
