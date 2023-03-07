import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacta-conmigo',
  templateUrl: './contacta-conmigo.component.html',
  styleUrls: ['./contacta-conmigo.component.css']
})
export class ContactaConmigoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  vueltaInicio(){
    this.router.navigate(['/inicio'])

  }

}
