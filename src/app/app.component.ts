import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  valor: number | undefined;
  destino: number | undefined;

  transferencias: any[] = [];

  constructor(private service: TransferenciaService){}
}
