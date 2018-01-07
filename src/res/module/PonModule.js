var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../event/AsEvent"], function (require, exports, AsEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PonModuleEvent = /** @class */ (function (_super) {
        __extends(PonModuleEvent, _super);
        function PonModuleEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PonModuleEvent.CREATED_VIEW = "createdView";
        PonModuleEvent.CREATED_STYLE = "createdStyle";
        return PonModuleEvent;
    }(AsEvent_1.AsEvent));
    exports.PonModuleEvent = PonModuleEvent;
    var PonModule = /** @class */ (function (_super) {
        __extends(PonModule, _super);
        function PonModule(htmlPath, cssPath) {
            var _this = _super.call(this) || this;
            // this._dir = htmlPath.match("^.*/")[0];
            $.ajax({ url: htmlPath, datatype: "html" })
                .then(function (data) {
                var v = $($.parseHTML(data));
                _this.$obj.replaceWith(v);
                _this.$obj = v;
                // include modules
                _this.$obj.find("module").each(function (i, ele) {
                    var $tar = $(ele);
                    requirejs([$tar.html()], function (data) {
                        for (var i_1 in data) {
                            try {
                                var ponModule = new data[i_1]();
                                $tar.replaceWith(ponModule.$obj);
                                break;
                            }
                            catch (e) {
                            }
                        }
                    });
                });
                _this.createdView();
            }, function () {
            });
            $.ajax({
                url: cssPath,
                datatype: "text"
            })
                .then(function (data) {
                data = data.replace(/\r?\n/g, '');
                var list = data.split(/; ?}/);
                var newStyle = document.createElement('style');
                newStyle.type = "text/css";
                document.getElementsByTagName('head').item(0).appendChild(newStyle);
                var css = document.styleSheets.item(0);
                var idx = css.cssRules.length;
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var ele = list_1[_i];
                    try {
                        css.insertRule(ele + ";}", idx);
                        idx++;
                    }
                    catch (e) {
                    }
                }
                _this.createdStyle();
            }, function () {
            });
            _this.$obj = $("<div>")
                .attr("data-pon", "PonModule");
            return _this;
        }
        PonModule.prototype.createdView = function () {
            return this.dispatchEvent(new PonModuleEvent(PonModuleEvent.CREATED_VIEW));
        };
        PonModule.prototype.createdStyle = function () {
            return this.dispatchEvent(new PonModuleEvent(PonModuleEvent.CREATED_STYLE));
        };
        return PonModule;
    }(AsEvent_1.AsEventDispatcher));
    exports.PonModule = PonModule;
});
//# sourceMappingURL=PonModule.js.map