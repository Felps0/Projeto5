import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddPagamentoPage } from './add-pagamento.page';

import { PayPal } from '@ionic-native/paypal';

const routes: Routes = [
  {
    path: '',
    component: AddPagamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PayPal
  ],
  declarations: [AddPagamentoPage]
})

export class AddPagamentoPageModule {}
