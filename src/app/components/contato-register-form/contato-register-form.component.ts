import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormType } from '../../model/new-contact-form.type';
import { AgendaService } from '../../services/agenda.service';
import { catchError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contato-register-form',
  imports: [ReactiveFormsModule, ReactiveFormsModule],
  templateUrl: './contato-register-form.component.html',
  styleUrl: './contato-register-form.component.scss'
})
export class ContatoRegisterFormComponent implements OnInit {
  activeRoute = inject(ActivatedRoute);
  agendaService = inject(AgendaService);

  newContactForm: FormGroup<ContactFormType>;

  submitted = signal(false);
  isEdditing = signal(false);

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.newContactForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.email]],
      celular: [''],
      telefone: [''],
    })
  }

  ngOnInit(): void {
    const contatoId = this.activeRoute.snapshot.paramMap.get('contato-id')

    if (!!contatoId) {
      this.isEdditing.set(true);

      this.agendaService
        .fetchContato(contatoId)
        .pipe(
          catchError((error) => {
            console.error(error);
            throw error;
          })
        )
        .subscribe((contato) => {
          this.newContactForm.setValue({
            nome: contato.nome || '',
            email: contato.email || '',
            celular: contato.celular || '',
            telefone: contato.telefone || '',
          });
        });
    }

  }

  get f() {
    return this.newContactForm.controls;
  }

  onSubmit() {
    this.submitted.set(true);

    const { nome, email, celular, telefone } = this.newContactForm.value;

    if (this.isEdditing()) {
      const contatoId = this.activeRoute.snapshot.paramMap.get('contato-id')

      if (contatoId) {
        this.agendaService
          .editarContato(contatoId, {
            nome: nome || undefined,
            email: email || undefined,
            celular: celular || undefined,
            telefone: telefone || undefined,
          })
          .pipe(
            catchError((error) => {
              console.error(error);
              throw error;
            })
          )
          .subscribe((data) => {
            this.router.navigate(['/agenda']);
            this.newContactForm.reset();
          });
      }
    } else {
      this.agendaService
        .criarContato({
          nome: nome || undefined,
          email: email || undefined,
          celular: celular || undefined,
          telefone: telefone || undefined,
        })
        .pipe(
          catchError((error) => {
            console.error(error);
            throw error;
          })
        )
        .subscribe((data) => {
          this.router.navigate(['/agenda']);
          this.newContactForm.reset();
        });
    }

    this.submitted.set(false);
  }

}
