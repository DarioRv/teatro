import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/Ticket.class';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';
import { EspectadorPipe } from '../../pipes/espectador.pipe';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, EspectadorPipe],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.tickets = this.ticketService.tickets;
  }

  llenarBaseDeDatos(): void {
    this.ticketService.llenarBaseDeDatos();
    this.tickets = this.ticketService.tickets;
  }
}
