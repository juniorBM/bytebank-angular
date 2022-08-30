import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from 'src/models/transferencia';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private service: TransferenciaService){
    this.transferencias = [];
  }


  ngOnInit(): void {
    this.transferencias = [];
    // this.transferencias = this.service.trasnferencias;
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

}
