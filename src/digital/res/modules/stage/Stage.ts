import {PonModule} from "../../../../res/module/PonModule";

export class Stage extends PonModule {
	$milliseconds: JQuery;
	$seconds: JQuery;
	$minutes: JQuery;
	$hours: JQuery;
	$date: JQuery;
	$month: JQuery;
	$fullYear: JQuery;

	constructor() {
		super(
			"./res/modules/stage/index.html"
			, "./res/modules/stage/index.css");

		this.$obj.addClass("stage");
	}

	protected createdView() {
		this.$milliseconds = this.$obj.find("[data-digital='milliseconds']");
		this.$seconds = this.$obj.find("[data-digital='seconds']");
		this.$minutes = this.$obj.find("[data-digital='minutes']");
		this.$hours = this.$obj.find("[data-digital='hours']");
		this.$date = this.$obj.find("[data-digital='date']");
		this.$month = this.$obj.find("[data-digital='month']");
		this.$fullYear = this.$obj.find("[data-digital='fullYear']");

		return super.createdView();
	}

	protected createdStyle() {
		return super.createdStyle();
	}
}
