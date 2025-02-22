import { Component, input } from '@angular/core';

import { DatePipe } from '@angular/common';
import { FormatPhonePipe } from '../../pipes/format-phone.pipe';

import { Contato } from '../../model/contato.type';

@Component({
  selector: 'app-agenda-table',
  imports: [DatePipe, FormatPhonePipe],
  templateUrl: './agenda-table.component.html',
  styleUrl: './agenda-table.component.scss'
})
export class AgendaTableComponent {
  agenda = input<Contato[]>();

  constructor() {}
}
