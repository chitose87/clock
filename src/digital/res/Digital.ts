import * as $ from "jquery";
import {Clock, ClockEvent} from "../../res/clock/Clock";
import {Stage} from "./modules/stage/Stage";
import {PonModuleEvent} from "../../res/module/PonModule";
import {AsEvent} from "../../res/event/AsEvent";

class Digital {
	clock: Clock;
	stage: Stage;

	constructor() {
		console.log("Digital v0");

		this.clock = new Clock();
		this.stage = new Stage()
			.listener(PonModuleEvent.CREATED_VIEW, (_e: AsEvent) => {
				this.clock.allListenerSet(
					true
					, (e: ClockEvent) => {
						this.stage.$milliseconds.html(e.value.getString(3));
					}
					, (e: ClockEvent) => {
						this.stage.$seconds.html(e.value.getString(2));
					}
					, (e: ClockEvent) => {
						this.stage.$minutes.html(e.value.getString(2));
					}
					, (e: ClockEvent) => {
						this.stage.$hours.html(e.value.getString(2));
					}
					, (e: ClockEvent) => {
						this.stage.$date.html(e.value.getString(2));
					}
					, (e: ClockEvent) => {
						this.stage.$month.html(e.value.getString(2));
					}
					, (e: ClockEvent) => {
						this.stage.$fullYear.html(e.value.getString());
					}
				);
			});
		$("body").append(this.stage.$obj);
	}
}

new Digital();

