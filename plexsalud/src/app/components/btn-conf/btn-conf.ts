import { Component, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'app-btn-conf',
  templateUrl: './btn-conf.html',
  styleUrls: ['./btn-conf.css']
})
export class BtnConf {
  @Output() accion = new EventEmitter<void>();
 
  ejecutar() {
    this.accion.emit();
  }
}