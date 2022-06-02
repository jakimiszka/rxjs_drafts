import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, of, scan, Subject, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // split observable and observer

  ngOnInit(): void {
    // observalbe
    // observer
    // sub / unsub

    // operators in observables   =>  returns new Observable
    // pipe(
    //    [operator] e.g. map()
    //                    scan() ...
    // )
//     const subject = new Subject<number>();
 
// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`),
// });
// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });
 
// subject.next(1);
// subject.next(2);

    const subject = new Subject<number>();
    
    const observer1 = {
      next: (x: number) => console.log(`from observer 1, value: ${x}`),
      error: (err: number) => console.error('Observer 1 got an error: ' + err),
      complete: () => console.log('Observer 1 got a complete notification'),
    };

    const observer2 = {
      next: (x: number) => console.log(`from observer 2, value: ${x}`),
      error: (err: number) => console.error('Observer 2 got an error: ' + err),
      complete: () => console.log('Observer 2 got a complete notification'),
    };

    subject.subscribe(observer1);
    subject.subscribe(observer2);

    subject.next(1);

    // of(1, 2, 3)
    //   .pipe(map((x) => x * x))
    //   .subscribe(observer);
  }
}
