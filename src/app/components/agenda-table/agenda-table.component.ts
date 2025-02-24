import { Component, inject } from '@angular/core';

import { FormatPhonePipe } from '../../pipes/format-phone.pipe';

import { FormatDatePipe } from '../../format-date.pipe';
import { Contato } from '../../model/contato.type';
import { AgendaService } from '../../services/agenda.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-table',
  imports: [FormatDatePipe, FormatPhonePipe],
  templateUrl: './agenda-table.component.html',
  styleUrl: './agenda-table.component.scss'
})
export class AgendaTableComponent {
  agendaService = inject(AgendaService);

  constructor(private router: Router) { }

  onDeleteContato(contato: Contato) {
    if (!contato.id) return;

    this.agendaService
      .excluirContato(contato.id)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      )
      .subscribe((_contato) => {
        this.refreshAgenda()
      })
  }

  onEditContato(contato: Contato) {
    if (!contato.id) return;
    
    this.router.navigate([`/agenda/editar-contato/${contato.id}`])
  }

  refreshAgenda() {
    this.agendaService
      .fetchAgenda()
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      )
      .subscribe((agenda) => {
        this.agendaService.agenda.set(agenda);
      });
  }
}
