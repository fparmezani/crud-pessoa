import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoService } from './services/endereco.service';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarEnderecoComponent,
    ModalEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
