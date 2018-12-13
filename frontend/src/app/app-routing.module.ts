import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent} from './about/about.component';
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



const routes: Routes = [
  {path:'', redirectTo:'user', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user', component:UserhomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path: 'invest', component:InvestComponent},
  {path:'faq', component:FaqComponent},
  {path:'rules', component:RulesComponent},
  {path:'support', component:SupportComponent},
  {path:'partner', component:PartnerComponent},
  {path:'account', component:AccountComponent},
  {path:'deposit', component:DepositComponent},
  {path:'funds', component:FundsComponent},
  {path:'history', component:HistoryComponent},
  {path:'referral', component:ReferralComponent},
  {path:'security', component:SecurityComponent},
  {path:'withdraw', component:WithdrawComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
