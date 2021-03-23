import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {

  validacion = true;

  constructor() { }

  ngOnInit(): void {
    
  }

  Submit(){
    return console.log('enviado corectamente');
  }
}
