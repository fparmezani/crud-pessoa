import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadeService } from './services/cidade.service';
import { ListarCidadeComponent } from '../cidade/listar-cidade/listar-cidade.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component'


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    ListarCidadeComponent,
    ModalCidadeComponent,
    InserirCidadeComponent,
    EditarCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
