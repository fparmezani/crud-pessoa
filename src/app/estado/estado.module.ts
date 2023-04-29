import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoService } from './services/estado.service';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    ListarEstadoComponent,
    ModalEstadoComponent,
    InserirEstadoComponent,
    EditarEstadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
