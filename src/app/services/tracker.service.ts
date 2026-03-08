import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {

    track(eventName: string, eventData: any) {
        console.log(eventName, eventData);
    }

}