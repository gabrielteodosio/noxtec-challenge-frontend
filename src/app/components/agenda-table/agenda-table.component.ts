import { Component, input } from '@angular/core';

import { FormatPhonePipe } from '../../pipes/format-phone.pipe';

import { FormatDatePipe } from '../../format-date.pipe';
import { Contato } from '../../model/contato.type';

@Component({
  selector: 'app-agenda-table',
  imports: [FormatDatePipe, FormatPhonePipe],
  templateUrl: './agenda-table.component.html',
  styleUrl: './agenda-table.component.scss'
})
export class AgendaTableComponent {
  agenda = input<Contato[]>();

  constructor() {}
}
