import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoRegisterFormComponent } from "../../components/contato-register-form/contato-register-form.component";

@Component({
  selector: 'app-novo-contato',
  imports: [ContatoRegisterFormComponent],
  templateUrl: './novo-contato.component.html',
  styleUrl: './novo-contato.component.scss'
})
export class NovoContatoComponent {
  constructor(private router: Router) { }

  navigateBack() {
    this.router.navigate(['/'])
  }
}
