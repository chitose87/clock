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
    var Test = /** @class */ (function (_super) {
        __extends(Test, _super);
        function Test() {
            return _super.call(this, "./res/modules/test/index.html", "./res/modules/test/index.css") || this;
        }
        return Test;
    }(PonModule_1.PonModule));
    exports.Test = Test;
});
//# sourceMappingURL=Test.js.map