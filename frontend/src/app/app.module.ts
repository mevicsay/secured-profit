import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './about/about.component';
import { InvestComponent } from './invest/invest.component';
import { FaqComponent } from './faq/faq.component';
import { RulesComponent } from './rules/rules.component';
import { SupportComponent } from './support/support.component';
import { PartnerComponent } from './partner/partner.component';
import { AccountComponent } from './dashboard/account/account.component';
import { DepositComponent } from './dashboard/deposit/deposit.component';
import { FundsComponent } from './dashboard/funds/funds.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { ReferralComponent } from './dashboard/referral/referral.component';
import { SecurityComponent } from './dashboard/security/security.component';
import { WithdrawComponent } from './dashboard/withdraw/withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    HomeComponent,
    AboutComponent,
    InvestComponent,
    FaqComponent,
    RulesComponent,
    SupportComponent,
    PartnerComponent,
    AccountComponent,
    DepositComponent,
    FundsComponent,
    HistoryComponent,
    ReferralComponent,
    SecurityComponent,
    WithdrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
