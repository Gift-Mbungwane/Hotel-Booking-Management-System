import { Injectable, NgZone } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: any; // Save logged in user data

  constructor(
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public angularFireAuthenticantion: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    private route: ActivatedRoute,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.angularFireAuthenticantion.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user'));
        console.log(user, " this is the token given by on authState ")
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  // Sign in with email/password
  async SignIn(email: string, password: string) {
    try {
      return await this.angularFireAuthenticantion
        .signInWithEmailAndPassword(email, password)
        .then((result) => {

          this.userData = result.user;
          localStorage.setItem('user', JSON.stringify(result));
            console.log(result, " this is the provider uid")
            this.router.navigate(['/home']);
         // this.isLoggedIn();
          // this.ngZone.run(() => {
          //   //  this.router.navigate(['userprofile']);
          //   return this.router.navigateByUrl("/home");
          //   if (result.user.email.toString() === email.toString()) {
          //     return this.router.navigate(['home']);
          //   } else {
              // this.router.navigate(['home']);
          //   }
          // });
          // console.log(result.user.email + 'this is the id');

          // console.log('this is the id' + email);
        // })
        // .catch((error) => {
        //   const errorMess = error.message;
        //   alert('unable to locate the uid' + errorMess);
        }).catch((error) => alert(error))
      //alert('you now logged in');
      //this.router.navigate(['room-details']);
      // this.SetUserData(result);
    } catch (error) {
      alert('unable to log you in ');
    }
  }

  // Sign up with email/password
  async SignUp(email: string, password: string) {
    try {
        await this.angularFireAuthenticantion.createUserWithEmailAndPassword(
          email,
          password
        ).then((userCredential) => {

          const user = userCredential.user;

          this.angularFirestore.collection('users').doc(user.uid).set({
            uid: user.uid,
            address: user.email,
            password: password,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--YojU5VvzMydwxBwuroHtFGUPi9by51TbQ&usqp=CAU",
          }).then(() => {
            alert('you have been successfully registered');
            localStorage.setItem('user', JSON.stringify(userCredential));
          }).catch((error) => alert(error));
          
         return this.router.navigate(['/home']);
        })
     
    } catch (error_1) {
      alert(error_1.message);
    }
  }

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    return (await this.angularFireAuthenticantion.currentUser)
      .sendEmailVerification()
      .then(() => {
        this.router.navigate(['verifyemail']);
      });
  }

  // Reset Forggot password
  async ForgotPassword(passwordResetEmail: string) {
    try {
      await this.angularFireAuthenticantion.sendPasswordResetEmail(
        passwordResetEmail
      );
      window.alert('Password reset email sent, check your inbox.');
    } catch (error) {
      window.alert(error);
    }
  }

  // Returns true when user is looged in and email is verified
   isLoggedIn() {
    this.angularFireAuthenticantion.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.getItem('user');
        console.log(localStorage.getItem("user"), " this is the token given by on authState ")
       this.router.navigate(['/room-details']);
       
      } else {
        
        // localStorage.setItem('user', null);
        return this.router.navigate(['/login']);
      }
    });
    
 
    // const user = JSON.parse(localStorage.getItem('user'));
    // return user !== null && user.emailVerified !== false ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  async AuthLogin(provider) {
    try {
      const result = await this.angularFireAuthenticantion.signInWithPopup(
        provider
      );
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
    } catch (error) {
      window.alert(error);
    }
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      displayName: undefined,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  isProfile() {
    this.angularFireAuthenticantion.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.getItem('user');
        console.log(localStorage.getItem("user"), " this is the token given by on authState ");
         this.router.navigate(['/userprofile']);
        
      } else {
        alert("PLease Sign In");        
        // localStorage.setItem('user', null);
         this.router.navigate(['/login']);
      }
    });
    
  }

  // Sign out
  async SignOut() {
    await this.angularFireAuthenticantion.signOut().then(() => {
      localStorage.removeItem('user');
      alert("you're now logged out")
      this.router.navigate(['/login']);
    }).catch((error) => alert(error));
  
    
  }
}
