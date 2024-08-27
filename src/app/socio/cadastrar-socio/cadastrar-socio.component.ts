import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-cadastrar-socio',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastrar-socio.component.html',
  styleUrl: './cadastrar-socio.component.css'
})
export class CadastrarSocioComponent {

}
