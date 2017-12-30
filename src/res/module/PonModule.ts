import {AsEventDispatcher} from "../event/AsEvent";

export class PonModule extends AsEventDispatcher {
    $obj: JQuery;

    constructor(htmlPath: string, cssPath: string) {
        super();

        $.ajax(<JQuery.AjaxSettings>{url: htmlPath, datatype: "html"})
            .then((data) => {
                let v = $($.parseHTML(data));
                this.$obj.replaceWith(v);
                this.$obj = v;
                // this.$obj.find("*").each((i, ele) => {
                // let str, s = 0, e;
                // while (true) {
                //     str = $(ele).html();
                //     s = str.indexOf("%{", s);
                //     if (s == -1) break;
                //     e = str.indexOf("}", s += 2);
                //     let param = str.substring(s, e);
                //     Object.defineProperty(this, param, {
                //         set: (v) => {
                //             console.log(this[param], v);
                //         }
                //     });
                //
                //     s += e;
                // }
                // })
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

    protected createdView() {

    }

    protected createdStyle() {

    }
}