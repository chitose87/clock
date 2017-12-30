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
define(["require", "exports", "../../res/event/AsEvent"], function (require, exports, AsEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClockEvent = /** @class */ (function (_super) {
        __extends(ClockEvent, _super);
        function ClockEvent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = NaN;
            return _this;
        }
        return ClockEvent;
    }(AsEvent_1.AsEvent));
    exports.ClockEvent = ClockEvent;
    var Clock = /** @class */ (function (_super) {
        __extends(Clock, _super);
        /**
         *
         */
        function Clock() {
            var _this = _super.call(this) || this;
            _this.millEvent = new ClockEvent(Clock.MILL);
            _this.secEvent = new ClockEvent(Clock.SEC);
            _this.minEvent = new ClockEvent(Clock.MIN);
            _this.hourEvent = new ClockEvent(Clock.HOUR);
            _this.dateEvent = new ClockEvent(Clock.DATE);
            _this.monEvent = new ClockEvent(Clock.MON);
            _this.yearEvent = new ClockEvent(Clock.YEAR);
            _this.run();
            return _this;
        }
        Object.defineProperty(Clock.prototype, "milliseconds", {
            get: function () {
                return this.millEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "seconds", {
            get: function () {
                return this.secEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "minutes", {
            get: function () {
                return this.minEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "hours", {
            get: function () {
                return this.hourEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "date", {
            get: function () {
                return this.dateEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "month", {
            get: function () {
                return this.monEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "fullYear", {
            get: function () {
                return this.yearEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Clock.prototype.run = function () {
            var _this = this;
            requestAnimationFrame(function () { return _this.run(); });
            var after = new Date();
            var v;
            this.millEvent.value = after.getMilliseconds();
            this.dispatchEvent(this.millEvent);
            v = after.getSeconds();
            if (this.secEvent.value != v) {
                this.secEvent.value = v;
                this.dispatchEvent(this.secEvent);
                v = after.getMinutes();
                if (this.minEvent.value != v) {
                    this.minEvent.value = v;
                    this.dispatchEvent(this.minEvent);
                    v = after.getHours();
                    if (this.hourEvent.value != v) {
                        this.hourEvent.value = v;
                        this.dispatchEvent(this.hourEvent);
                        v = after.getDate();
                        if (this.dateEvent.value != v) {
                            this.dateEvent.value = v;
                            this.dispatchEvent(this.dateEvent);
                            v = after.getMonth() + 1;
                            if (this.monEvent.value != v) {
                                this.monEvent.value = v;
                                this.dispatchEvent(this.monEvent);
                                v = after.getFullYear();
                                if (this.yearEvent.value != v) {
                                    this.yearEvent.value = v;
                                    this.dispatchEvent(this.yearEvent);
                                }
                            }
                        }
                    }
                }
            }
        };
        Clock.prototype.allListenerSet = function (initialRun, milliseconds, seconds, minutes, hours, date, month, fullYear) {
            this.listener(Clock.MILL, milliseconds);
            this.listener(Clock.SEC, seconds);
            this.listener(Clock.MIN, minutes);
            this.listener(Clock.HOUR, hours);
            this.listener(Clock.DATE, date);
            this.listener(Clock.MON, month);
            this.listener(Clock.YEAR, fullYear);
            if (initialRun) {
                milliseconds(this.millEvent);
                seconds(this.secEvent);
                minutes(this.minEvent);
                hours(this.hourEvent);
                date(this.dateEvent);
                month(this.monEvent);
                fullYear(this.yearEvent);
            }
            return this;
        };
        Clock.MILL = "mill";
        Clock.SEC = "sec";
        Clock.MIN = "min";
        Clock.HOUR = "hour";
        Clock.DATE = "date";
        Clock.MON = "mon";
        Clock.YEAR = "year";
        return Clock;
    }(AsEvent_1.AsEventDispatcher));
    exports.Clock = Clock;
});
//# sourceMappingURL=Clock.js.map