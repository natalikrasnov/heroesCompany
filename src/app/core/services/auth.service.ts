import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Trainer } from 'src/app/heroes/models/trainer/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  url = ''
  private _token$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)
  trainer$: BehaviorSubject<Trainer | null> = new BehaviorSubject<Trainer | null>({_id: "1"})

  token: Observable<null | string> = this._token$.asObservable()

  constructor(private http: HttpClient, private router: Router) { }
  
  login(userName: string, password: string): Observable<any> {
    return this.http.get(this.url, {
      params: new HttpParams().appendAll({userName, password}),
      responseType: 'json'
    }).pipe(tap(this.getTokenAndNavigate))
  }

  signup( userName: string, password: string) {
    return this.http.post(this.url, {userName, password})
      .pipe(tap(this.getTokenAndNavigate))
  }

  private getTokenAndNavigate(pipeRes: any) {
    const token = pipeRes.token
    const trainerId = pipeRes.trainer?.id
    this._token$.next(token)
    this.trainer$.next({_id: trainerId})
    this.router.navigate(['/heroes'])
  }
}
