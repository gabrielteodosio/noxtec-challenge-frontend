import { Component, computed, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AgendaService } from '../../services/agenda.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AgendaTableComponent } from "../../components/agenda-table/agenda-table.component";

@Component({
  selector: 'app-agenda',
  imports: [AgendaTableComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent implements OnInit {
  authService = inject(AuthService);
  agendaService = inject(AgendaService);

  isUserLoggedIn = computed(() => this.authService.user() !== null);

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.isUserLoggedIn()) {
      this.router.navigate(['/'])
    }

    const currentUser = this.authService.user();

    this.agendaService.fetchAgenda(currentUser)
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
