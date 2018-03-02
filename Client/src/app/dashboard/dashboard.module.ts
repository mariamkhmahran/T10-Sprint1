import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CompanyComponent } from './company/company.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from '../cart/cart.component';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule, FormsModule , Ng2SmartTableModule],
  declarations: [DashboardComponent, CompanyComponent, CartComponent, StoreComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule { }
