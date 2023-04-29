import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Endereco } from 'src/app/shared';
import { EnderecoService } from '../services/endereco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrls: ['./inserir-endereco.component.css']
})
export class InserirEnderecoComponent implements OnInit {

  @ViewChild('formEndereco') formEndereco!: NgForm;

  endereco!: Endereco;

  constructor(private enderecoService: EnderecoService, private router: Router) { }

  ngOnInit(): void {
    this.endereco = new Endereco(0, "", "", "", "", "", "", "");
  }

  inserir(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.inserir(this.endereco);
      this.router.navigate(["/enderecos"]);
    }
  }
}
