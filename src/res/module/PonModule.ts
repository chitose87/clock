import {AsEvent, AsEventDispatcher} from "../event/AsEvent";

export class PonModuleEvent extends AsEvent {
	static CREATED_VIEW: string = "createdView";
	static CREATED_STYLE: string = "createdStyle";
}

export class PonModule extends AsEventDispatcher {
	$obj: JQuery;

	constructor(htmlPath: string, cssPath: string) {
		super();
		// this._dir = htmlPath.match("^.*/")[0];

		$.ajax(<JQuery.AjaxSettings>{url: htmlPath, datatype: "html"})
			.then((data) => {
				let v = $($.parseHTML(data));
				this.$obj.replaceWith(v);
				this.$obj = v;

				// include modules
				this.$obj.find("module").each((i, ele) => {
					let $tar = $(ele);
					requirejs([$tar.html()], (data: any) => {
						for (let i in data) {
							try {
								let ponModule: PonModule = new data[i]();
								$tar.replaceWith(ponModule.$obj);
								break;
							} catch (e) {
							}
						}
					})
				});
				this.createdView();
			}, () => {

			});

		$.ajax(<JQuery.AjaxSettings>{
			url: cssPath
			, datatype: "text"
		})
			.then((data) => {
				data = data.replace(/\r?\n/g, '');
				let list = data.split(/; ?}/);

				let newStyle = document.createElement('style');
				newStyle.type = "text/css";
				document.getElementsByTagName('head').item(0).appendChild(newStyle);
				let css: any = document.styleSheets.item(0);
				let idx = css.cssRules.length;
				for (let ele of list) {
					try {
						css.insertRule(ele + ";}", idx);
						idx++;
					} catch (e) {
					}
				}
				this.createdStyle();
			}, () => {

			});

		this.$obj = $("<div>")
			.attr("data-pon", "PonModule")
		;
	}

	protected createdView(): PonModule {
		return this.dispatchEvent(new PonModuleEvent(PonModuleEvent.CREATED_VIEW));
	}

	protected createdStyle(): PonModule {
		return this.dispatchEvent(new PonModuleEvent(PonModuleEvent.CREATED_STYLE));
	}
}
