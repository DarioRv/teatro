import { Component } from '@angular/core';
import { Ticket } from '../../models/Ticket.class';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  precioTicket: number = 5000;
  ticket: Ticket = new Ticket();

  constructor(private ticketService: TicketService) {
    this.ticket.precioReal = this.precioTicket;
  }

  agregarTicket(): void {
    console.log(this.ticket);
    this.calcularPrecioCobrado();
    this.ticketService.agregarTicket(this.ticket);
    this.ticket = new Ticket();
  }

  calcularPrecioCobrado(): void {
    if (this.ticket.tipoEspectador !== 'l') {
      this.ticket.precioCobrado = this.ticket.precioReal;
      return;
    }

    this.ticket.precioCobrado =
      this.ticket.precioReal - this.ticket.precioReal * 0.2;
  }
}
