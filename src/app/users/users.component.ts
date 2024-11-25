import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../servicios/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  private userService = inject(UsersService); // Forma de inyectar el servicio a partir de Angular 17 en adelante

  users: any;

  ngOnInit() {
    this.userService.getUsers().subscribe( (resp: any) => {
      this.users = resp.data;
      console.log('Usuarios -> ', this.users);
    } );

  }

}
