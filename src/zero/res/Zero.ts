import * as $ from "jquery";
import {Clock} from "../../res/clock/Clock";

class Zero {
    clock: Clock;

    constructor() {
        console.log("Zero v0 3");
        this.clock = new Clock();
    }
}

new Zero();
