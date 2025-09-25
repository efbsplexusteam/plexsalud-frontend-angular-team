import { Component, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'app-btn-canc',
  templateUrl: './btn-canc.html',
  styleUrls: ['./btn-canc.css']
})
export class BtnCanc {
  @Output() accion = new EventEmitter<void>();
 
  ejecutar() {
    this.accion.emit();
  }
}