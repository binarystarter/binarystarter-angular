import { Injectable, NgZone } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SseService {
  constructor(private _zone: NgZone) {}

  observeMessages(sseUrl: string, id?: string) {
    return new Observable<any>((obs) => {
      const es = new EventSource(`${sseUrl}/${id}`, { withCredentials: true });

      es.onerror = (error) => {
        const event: MessageEvent = error as MessageEvent;
        console.log("onerror", error);
        // this._zone.run(() => {
        obs.error(new Error(event?.data ?? "Something went wrong"));
        // });
      };

      es.onmessage = ({ data }) => {
        console.log("onmessage data", data);
        // this._zone.run(() => {
        obs.next(JSON.parse(data));
        // });
      };

      return () => es.close();
    });
  }
}
