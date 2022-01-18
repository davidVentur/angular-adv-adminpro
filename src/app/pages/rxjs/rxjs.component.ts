import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {
    // *******Observable dimple*********
    // this.retornaObservable()
    //   .pipe(retry(2))
    //   .subscribe(
    //     (valor) => {
    //       console.log('Subs', valor); // emision de valor
    //     },
    //     (err) => {
    //       console.warn('Error', err); // si es que llega al error se cancela todo
    //     },
    //     () => {
    //       console.info('Obs terminado '); // este es el complete
    //     }
    //   );

    // *******Observable con metodo map, take************
    // this.retornaIntervalo().subscribe((valor) => {
    //   console.log(valor);
    // });

    // *******Obsevable con metodo, map, take, filter*********
    // this.retornaIntervaloFilter().subscribe((valor) => {
    //   console.log(valor);
    // });

    // ****** Unsubscribe Interval ********
    this.intervalSubs =  this.retornaIntervaloUnsbscribe().subscribe((valor) =>{
      console.log(valor);
    })
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  /// ****** Observable llamando a unsubscribe *******
  retornaIntervaloUnsbscribe(): Observable<number> {
    return interval(100).pipe(
      // take(10),
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
  }

  //Observable con oprador map, taka y filter
  retornaIntervaloFilter(): Observable<number> {
    const interval$ = interval(200).pipe(
      take(10), // => llega hasta el 10
      map((valor) => {
        return valor + 1;
      }),
      filter((valor: number) => {
        return valor % 2 === 0 ? true : false;
      })
      // take(10) => llega hasta el 20
    );
    return interval$;
  }

  //Observable con oprador map y take
  retornaIntervalo(): Observable<number> {
    const interval$ = interval(500).pipe(
      take(10),
      map((valor) => {
        return valor + 1;
      })
    );
    return interval$;
  }

  //Observable simple
  retornaObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
    return obs$;
  }
}
