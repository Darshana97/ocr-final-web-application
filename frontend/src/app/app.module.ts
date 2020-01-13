import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MatToolbarModule ,MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ShowResultComponent } from './pages/show-result/show-result.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthInterceptor } from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundComponent,
    ShowResultComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
