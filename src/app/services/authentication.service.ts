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
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Sign in with email/password
  async SignIn(email: string, password: string) {
    try {
      return await this.angularFireAuthenticantion
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
            //  this.router.navigate(['userprofile']);

            if (result.user.email.toString() === email.toString()) {
              return this.router.navigate(['home']);
            } else {
              this.router.navigate(['home']);
            }
          });
          console.log(result.user.email + 'this is the id');

          console.log('this is the id' + email);
        })
        .catch((error) => {
          const errorMess = error.message;
          alert('unable to locate the uid' + errorMess);
        });
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
      const userCredential =
        await this.angularFireAuthenticantion.createUserWithEmailAndPassword(
          email,
          password
        );
      const user = userCredential.user;
      try {
        await this.angularFirestore.collection('users').doc(user.uid).set({
          uid: user.uid,
          address: user.email,
          password: password,
        });
        alert('you have been successfully registered');
        this.router.navigate(['home']);
      } catch (error) {
        const errorMessage = error.message;
        alert(errorMessage);
      }
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
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
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

  // Sign out
  async SignOut() {
    await this.angularFireAuthenticantion.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['signin']);
  }
}
