import {PonModule} from "../../../../res/module/PonModule";
import {Clock, ClockEvent} from "../../../../res/clock/Clock";

export class Digital extends PonModule {
	clock: Clock;

	$milliseconds: JQuery;
	$seconds: JQuery;
	$minutes: JQuery;
	$hours: JQuery;
	$date: JQuery;
	$month: JQuery;
	$fullYear: JQuery;

	constructor(clock: Clock) {
		super(
			"./res/modules/digital/index.html"
			, "./res/modules/digital/index.css");

		this.$obj.addClass("digital");
		this.clock = clock;
	}

	protected createdView() {
		this.$milliseconds = this.$obj.find("[data-digital='milliseconds']");
		this.$seconds = this.$obj.find("[data-digital='seconds']");
		this.$minutes = this.$obj.find("[data-digital='minutes']");
		this.$hours = this.$obj.find("[data-digital='hours']");
		this.$date = this.$obj.find("[data-digital='date']");
		this.$month = this.$obj.find("[data-digital='month']");
		this.$fullYear = this.$obj.find("[data-digital='fullYear']");

		this.clock.allListenerSet(
			true
			, (e: ClockEvent) => {
				this.$milliseconds.html(e.value.getString());
			}
			, (e: ClockEvent) => {
				this.$seconds.html(e.value.getString());
			}
			, (e: ClockEvent) => {
				this.$minutes.html(e.value.getString());
			}
			, (e: ClockEvent) => {
				this.$hours.html(e.value.getString());
			}
			, (e: ClockEvent) => {
				this.$date.html(e.value.getString());
			}
			, (e: ClockEvent) => {
				this.$month.html(e.value.getString());
			}
			, (e: ClockEvent) => {
				this.$fullYear.html(e.value.getString());
			}
		);
		return super.createdView();
	}

	protected createdStyle() {
		return super.createdStyle();
	}
}
