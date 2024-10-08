import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ErrorMessageModule } from 'src/app/components/error-message/error-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Ensure ReactiveFormsModule is imported
    IonicModule,
    LoginPageRoutingModule,
    ErrorMessageModule
  ],
  declarations: [LoginPage
  ]
})
export class LoginPageModule {}