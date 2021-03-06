import { Component, OnInit, Input } from '@angular/core';
import { AspNetCoreErrors } from './AspNetCoreErrors';

@Component({
  selector: 'failure-message',
  templateUrl: './failure-message.component.html',
  styleUrls: ['./failure-message.component.css']
})
export class FailureMessageComponent implements OnInit {

  @Input() description: string;
  @Input() validationErrors: AspNetCoreErrors;
  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.onHide();
  }

  onHide() {
    this.isHidden = true;
  }

  onShow(description: string, validationErrors?: Object) {
    this.description = description;
    this.validationErrors = null;
    
    if (validationErrors != undefined) { this.validationErrors = new AspNetCoreErrors(validationErrors); }
    this.isHidden = false;
  }

  showConnectivityError() {
    return this.onShow("Houve um problema na obtenção dos dados. Verifique sua conexão e tente novamente.");
  }

  showFormErrors(errors: any) {
    return this.onShow("Há erros de preenchimento deste formulário:", errors);
  }
}
