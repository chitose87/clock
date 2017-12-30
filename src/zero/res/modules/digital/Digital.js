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
define(["require", "exports", "../../../../res/module/PonModule"], function (require, exports, PonModule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Digital = /** @class */ (function (_super) {
        __extends(Digital, _super);
        function Digital(clock) {
            var _this = _super.call(this, "./res/modules/digital/index.html", "./res/modules/digital/index.css") || this;
            _this.$obj.addClass("digital");
            _this.clock = clock;
            return _this;
        }
        Digital.prototype.createdView = function () {
            var _this = this;
            this.$milliseconds = this.$obj.find("[data-digital='milliseconds']");
            this.$seconds = this.$obj.find("[data-digital='seconds']");
            this.$minutes = this.$obj.find("[data-digital='minutes']");
            this.$hours = this.$obj.find("[data-digital='hours']");
            this.$date = this.$obj.find("[data-digital='date']");
            this.$month = this.$obj.find("[data-digital='month']");
            this.$fullYear = this.$obj.find("[data-digital='fullYear']");
            this.clock.allListenerSet(true, function (e) {
                _this.$milliseconds.html("" + e.value);
            }, function (e) {
                _this.$seconds.html("" + e.value);
            }, function (e) {
                _this.$minutes.html("" + e.value);
            }, function (e) {
                _this.$hours.html("" + e.value);
            }, function (e) {
                _this.$date.html("" + e.value);
            }, function (e) {
                _this.$month.html("" + e.value);
            }, function (e) {
                _this.$fullYear.html("" + e.value);
            });
        };
        Digital.prototype.createdStyle = function () {
        };
        return Digital;
    }(PonModule_1.PonModule));
    exports.Digital = Digital;
});
//# sourceMappingURL=Digital.js.map