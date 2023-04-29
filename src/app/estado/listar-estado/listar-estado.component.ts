import { Component } from '@angular/core';
import { Estado } from 'src/app/shared';
import { EstadoService } from '../services/estado.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEstadoComponent } from '../modal-estado/modal-estado.component';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent {
  estados: Estado[] = [];

  constructor(private estadoService: EstadoService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
  }

  remover($event: any, estado: Estado): void {

    $event.preventDefault();
    if (confirm(`Deseja ealmente remover a estado ${estado.nome}>
    ?`)) {

      this.estadoService.remover(estado.id!);
      this.estados = this.listarTodos();
    }

  }

  abrirModalEstado(estado: Estado) {
    const modalRef = this.modalService.open(ModalEstadoComponent);
    modalRef.componentInstance.estado = estado;

  }
}
