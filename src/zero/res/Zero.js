define(["require", "exports", "jquery", "../../res/clock/Clock", "./modules/digital/Digital"], function (require, exports, $, Clock_1, Digital_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Zero = /** @class */ (function () {
        function Zero() {
            console.log("Zero v0");
            this.clock = new Clock_1.Clock()
                .listener(Clock_1.ClockEvent.SEC, function (e) {
            })
                .onceListener(Clock_1.ClockEvent.SEC, function (e) {
            });
            this.digital = new Digital_1.Digital(this.clock);
            $("body").append(this.digital.$obj);
        }
        return Zero;
    }());
    new Zero();
});
//# sourceMappingURL=Zero.js.map