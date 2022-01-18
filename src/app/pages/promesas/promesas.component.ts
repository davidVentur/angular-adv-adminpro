import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsers().then(usuarios => {
      console.log(usuarios);
      
    });
    //   const promesa = new Promise((resolve, reject) => {
    //     if (false) {
    //       resolve('Hola mundo');
    //     } else {
    //       reject('Algo salio aml!!!');
    //     }
    //   });
    //   promesa
    //     .then((mensaje) => {
    //       console.log(mensaje);
    //     })
    //     .catch((err) => console.warn('Error en mi promesa', err));
    //   console.log('Fin de init');
    // }
  }

  getUsers() {
    const promesa = new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });

    return promesa;
  }
}
