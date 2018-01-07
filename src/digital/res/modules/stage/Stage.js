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
    var Stage = /** @class */ (function (_super) {
        __extends(Stage, _super);
        function Stage() {
            var _this = _super.call(this, "./res/modules/stage/index.html", "./res/modules/stage/index.css") || this;
            _this.$obj.addClass("stage");
            return _this;
        }
        Stage.prototype.createdView = function () {
            this.$milliseconds = this.$obj.find("[data-digital='milliseconds']");
            this.$seconds = this.$obj.find("[data-digital='seconds']");
            this.$minutes = this.$obj.find("[data-digital='minutes']");
            this.$hours = this.$obj.find("[data-digital='hours']");
            this.$date = this.$obj.find("[data-digital='date']");
            this.$month = this.$obj.find("[data-digital='month']");
            this.$fullYear = this.$obj.find("[data-digital='fullYear']");
            return _super.prototype.createdView.call(this);
        };
        Stage.prototype.createdStyle = function () {
            return _super.prototype.createdStyle.call(this);
        };
        return Stage;
    }(PonModule_1.PonModule));
    exports.Stage = Stage;
});
//# sourceMappingURL=Stage.js.map