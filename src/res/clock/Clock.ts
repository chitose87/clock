/**
 *
 */
import {AsEvent, AsEventDispatcher} from "../../res/event/AsEvent";

export class ClockEvent extends AsEvent {
    current: Clock;
    value: number = NaN;
}

export class Clock extends AsEventDispatcher {

    static MILL: string = "mill";
    static SEC: string = "sec";
    static MIN: string = "min";
    static HOUR: string = "hour";
    static DATE: string = "date";
    static MON: string = "mon";
    static YEAR: string = "year";

    private millEvent: ClockEvent = new ClockEvent(Clock.MILL);
    private secEvent: ClockEvent = new ClockEvent(Clock.SEC);
    private minEvent: ClockEvent = new ClockEvent(Clock.MIN);
    private hourEvent: ClockEvent = new ClockEvent(Clock.HOUR);
    private dateEvent: ClockEvent = new ClockEvent(Clock.DATE);
    private monEvent: ClockEvent = new ClockEvent(Clock.MON);
    private yearEvent: ClockEvent = new ClockEvent(Clock.YEAR);

    get milliseconds(): number {
        return this.millEvent.value;
    }

    get seconds(): number {
        return this.secEvent.value;
    }

    get minutes(): number {
        return this.minEvent.value;
    }

    get hours(): number {
        return this.hourEvent.value;
    }

    get date(): number {
        return this.dateEvent.value;
    }

    get month(): number {
        return this.monEvent.value;
    }

    get fullYear(): number {
        return this.yearEvent.value;
    }

    /**
     *
     */
    constructor() {
        super();
        this.run();
    }

    private run() {
        requestAnimationFrame(() => this.run());

        let after: Date = new Date();
        let v;

        this.millEvent.value = after.getMilliseconds();
        this.dispatchEvent(this.millEvent);

        v = after.getSeconds();
        if (this.secEvent.value != v) {
            this.secEvent.value = v;
            this.dispatchEvent(this.secEvent);

            v = after.getMinutes();
            if (this.minEvent.value != v) {
                this.minEvent.value = v;
                this.dispatchEvent(this.minEvent);

                v = after.getHours();
                if (this.hourEvent.value != v) {
                    this.hourEvent.value = v;
                    this.dispatchEvent(this.hourEvent);

                    v = after.getDate();
                    if (this.dateEvent.value != v) {
                        this.dateEvent.value = v;
                        this.dispatchEvent(this.dateEvent);

                        v = after.getMonth() + 1;
                        if (this.monEvent.value != v) {
                            this.monEvent.value = v;
                            this.dispatchEvent(this.monEvent);

                            v = after.getFullYear();
                            if (this.yearEvent.value != v) {
                                this.yearEvent.value = v;
                                this.dispatchEvent(this.yearEvent);

                            }
                        }
                    }
                }
            }
        }
    }

    allListenerSet(initialRun: boolean,
                   milliseconds: (e: ClockEvent) => void,
                   seconds: (e: ClockEvent) => void,
                   minutes: (e: ClockEvent) => void,
                   hours: (e: ClockEvent) => void,
                   date: (e: ClockEvent) => void,
                   month: (e: ClockEvent) => void,
                   fullYear: (e: ClockEvent) => void): Clock {

        this.listener(Clock.MILL, milliseconds);
        this.listener(Clock.SEC, seconds);
        this.listener(Clock.MIN, minutes);
        this.listener(Clock.HOUR, hours);
        this.listener(Clock.DATE, date);
        this.listener(Clock.MON, month);
        this.listener(Clock.YEAR, fullYear);

        if (initialRun) {
            milliseconds(this.millEvent);
            seconds(this.secEvent);
            minutes(this.minEvent);
            hours(this.hourEvent);
            date(this.dateEvent);
            month(this.monEvent);
            fullYear(this.yearEvent);
        }

        return this;
    }
}
