import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PayPal, PayPalPayment, PayPalConfiguration , PayPalPaymentDetails } from '@ionic-native/paypal/';

@Component({
  selector: 'app-add-pagamento',
  templateUrl: './add-pagamento.page.html',
  styleUrls: ['./add-pagamento.page.scss'],
})
export class AddPagamentoPage implements OnInit {

  constructor(
    private payPal: PayPal,
    protected router: Router,
    protected activedRoute: ActivatedRoute,

  ) { }

  comprar(){
    this.payPal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'AS5hKCAlifZyN5zV8r44wUi0LAGMB6efmMArNBw0LJ6RP1XVeDuxefe7JvQ6zXXssHGJuzPblXq9JVlm'
    }).then(() => {
        this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
          acceptCreditCards: true,
          languageOrLocale: 'pt-BR',
          merchantName: 'BarbarShop Router',
          merchantPrivacyPolicyURL: '',
          merchantUserAgreementURL: '',
        })).then(() => {
            let detail = new PayPalPaymentDetails('0,00', '0,00', '0,00');
            let payment = new PayPalPayment ('0,00' , 'BRL' , 'BarbeShop Router' , 'Sale', detail);
            this.payPal.renderSinglePaymentUI(payment).then((response) => { 
              console.log('pagamento efetuado')
            }, () => { 
              console.log('Erro ao redenrizar o pagamento do paypal');
            })
        })
    })
  }

  ngOnInit() {
  }
}
