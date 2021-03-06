import * as $ from "jquery";
import {Clock, ClockEvent} from "../../res/clock/Clock";
import {Digital} from "./modules/digital/Digital";

class Zero {
    clock: Clock;
    digital: Digital;

    constructor() {
        console.log("Zero v0");

        this.clock = new Clock()
            .listener(ClockEvent.SEC, (e: ClockEvent) => {
            })
            .onceListener(ClockEvent.SEC, (e: ClockEvent) => {
            })
        ;

        this.digital = new Digital(this.clock);
        $("body").append(this.digital.$obj);
    }
}

new Zero();
