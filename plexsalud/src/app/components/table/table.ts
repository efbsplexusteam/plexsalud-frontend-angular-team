import { Component } from '@angular/core';
import { BtnCanc } from '../btn-canc/btn-canc';
import { BtnConf } from '../btn-conf/btn-conf';

@Component({
  selector: 'app-table',
  imports: [ BtnCanc, BtnConf ],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {

}
