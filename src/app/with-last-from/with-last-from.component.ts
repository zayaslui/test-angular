import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, timer } from "rxjs";
import { tap, withLatestFrom } from "rxjs/operators";
import { renderCount } from "./renderer";

@Component({
  selector: 'app-with-last-from',
  templateUrl: './with-last-from.component.html',
  styleUrls: ['./with-last-from.component.css']
})
export class WithLastFromComponent implements OnInit {

  constructor(private router:Router) { }

  count         = document.getElementById("count") as HTMLElement;
  captureBtn    = document.getElementById("capture-btn") as HTMLButtonElement;
  
  renderCount(current: number) {
    this.count.textContent = `${current}`;
  }

  captureClick$ = fromEvent(this.captureBtn, "click");
  counter$      = timer(0,1000).pipe(tap(renderCount));


  ngOnInit(): void {

  }
}
