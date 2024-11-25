import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [],
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.css'
})
export class SimuladorComponent implements OnInit {

  datosPromesa: string = '';
  datosObservable: string[] = [];


  ngOnInit(): void {
    // Llamadas al inicializar el componente
    this.obtenerDatosConPromesa();
    this.obtenerDatosConObservable().subscribe({
      next: (dato) => this.datosObservable.push(dato),
      complete: () => console.log('Observable completado'),
    });
  }

  // simulación de la promesa
  obtenerDatosConPromesa() {
    const promesa = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Datos recibidos de la promesa');
      }, 2000);
    });

    promesa
      .then((dato) => {
        this.datosPromesa = dato;
        console.log(dato);
      })
      .catch((error) => console.log(error));

  }

  // Simulación con observable
  obtenerDatosConObservable(): Observable<string> {
    return new Observable<string>((subscriber) => {
      subscriber.next('Primer dato del observable');
      setTimeout(() => subscriber.next('Segundo dato del observable'), 1000);
      setTimeout(() => subscriber.next('Tercer dato del observable'), 2000);
      setTimeout(() => subscriber.complete(), 3000);
    });
  }


}
