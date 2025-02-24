import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { ContatoRegisterFormComponent } from "../../components/contato-register-form/contato-register-form.component";

@Component({
  selector: 'app-novo-contato',
  imports: [ContatoRegisterFormComponent],
  templateUrl: './novo-contato.component.html',
  styleUrl: './novo-contato.component.scss'
})
export class NovoContatoComponent implements OnInit {
  activeRoute = inject(ActivatedRoute);

  isEdditing = signal(false);

  constructor(private router: Router) { }

  navigateBack() {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    const contatoId = this.activeRoute.snapshot.paramMap.get('contato-id')
    
    if (contatoId) 
      this.isEdditing.set(true);
  }
}
