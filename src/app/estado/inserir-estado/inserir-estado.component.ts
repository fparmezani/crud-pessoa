import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstadoService } from '../services/estado.service';
import { Estado } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.css']
})
export class InserirEstadoComponent {

  @ViewChild('formEstado') formEstado!: NgForm;

  estado!: Estado;

  constructor(private estadoService: EstadoService, private router: Router) { }

  ngOnInit(): void {
    this.estado = new Estado(0, "", "");
  }

  inserir(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.inserir(this.estado);
      this.router.navigate(["/estados"]);
    }
  }
}
