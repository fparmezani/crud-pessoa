import { Component, ViewChild } from '@angular/core';
import { EstadoService } from '../services/estado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Estado } from 'src/app/shared';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent {

  @ViewChild("formEstado") formEstado!: NgForm;
  estado!: Estado;

  constructor(private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit(): void {

    let id = +this.route.snapshot.params['id'];

    const res = this.estadoService.buscarPorId(id);

    if (res !== undefined) {
      this.estado = res;
    } else {
      throw new Error("estado nao encontrada: id" + id);
    }

  }

  atualizar(): void {

    if (this.formEstado.form.valid) {
      this.estadoService.atualizar(this.estado);
      this.router.navigate(['/estados']);
    }

  }

}
