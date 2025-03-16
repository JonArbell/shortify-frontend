import { Routes } from '@angular/router';
import { DashboardComponent } from './components/authenticated/dashboard/dashboard.component';
import { HomeComponent } from './components/authenticated/home/home.component';
import { MyUrlsComponent } from './components/authenticated/my-urls/my-urls.component';
import { CanActivateAuthenticatedGuard } from './security/guard/canActivate/canActivateAuthenticated';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { CanActivateAuthenticationGuard } from './security/guard/canActivate/canActivateAuthentication';

export const routes: Routes = [
    
    {
        path : '',
        component : SigninComponent,
        canActivate : [CanActivateAuthenticationGuard]
    },
    {
        path : 'forgot-password',
        component : ForgotPasswordComponent,
        canActivate : [CanActivateAuthenticationGuard],
        data: { title: 'Forgot password?' }
    },
    {
        path : 'sign-up',
        component : SignupComponent,
        canActivate : [CanActivateAuthenticationGuard],
        data: { title: 'Sign Up for Shorty.fy' }
    },

    
    {
        path : 'home',
        component : HomeComponent,
        canActivate : [CanActivateAuthenticatedGuard],
        data: { title: 'Home' }
    },
    {
        path : 'dashboard',
        component : DashboardComponent,
        canActivate : [CanActivateAuthenticatedGuard],
        data: { title: 'Dashboard' }
    },
    {
        path : 'my-urls',
        component : MyUrlsComponent,
        canActivate : [CanActivateAuthenticatedGuard],
        data: { title: 'My URLs' }
    }

];
