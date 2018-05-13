import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class DataService {

  private globalUrl = 'https://api.royaleapi.com/';
  private apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQyLCJpZGVuIjoiMzMyMDUzMzI0MzEwNTExNjI3IiwibWQiOnt9fQ.5hDSlOSrnAMvIED8aQhxekMuWXqvF4A5NZfdEyzlX0s';

  constructor(private http: Http) { }

  public getClan(tag: string): Observable<any> {
    const endPoint = 'clan/' + tag;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getPlayer(tag: string): Observable<any> {
    const endPoint = 'player/' + tag;
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }

  public getChestCycle(tag: string): Observable<any> {
    const endPoint = 'player/' + tag + "/chests";
    const url = this.globalUrl + endPoint;
    return this.getRequest(url);
  }



  private getRequest(url: string): any {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'auth':  this.apiKey
    });
    return this.http.get(url.replace(/['"]+/g, ''), { headers: headers })
      .pipe(map((res: Response) => res.json()))

  }

}
