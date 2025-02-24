import { Component, computed, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { catchError } from 'rxjs';

import { AgendaTableComponent } from "../../components/agenda-table/agenda-table.component";

import { AgendaService } from '../../services/agenda.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-agenda',
  imports: [RouterLink, AgendaTableComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent implements OnInit {
  authService = inject(AuthService);
  agendaService = inject(AgendaService);

  isUserLoggedIn = computed(() => this.authService.token() !== null);

  ngOnInit(): void {
    this.fetchAgenda();
  }

  fetchAgenda() {
    this.agendaService.fetchAgenda()
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        })
      )
      .subscribe((agenda) => {
        this.agendaService.agenda.set(agenda)
      })
  }
}
