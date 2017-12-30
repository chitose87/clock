define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     *
     */
    var AsEvent = /** @class */ (function () {
        function AsEvent(type) {
            this.type = type;
        }
        return AsEvent;
    }());
    exports.AsEvent = AsEvent;
    /**
     *
     */
    var AsEventDispatcher = /** @class */ (function () {
        function AsEventDispatcher() {
            this.hasListener = {};
        }
        AsEventDispatcher.prototype.listener = function (type, handler) {
            if (!this.hasListener[type])
                this.hasListener[type] = [];
            this.hasListener[type].push(handler);
            return this;
        };
        AsEventDispatcher.prototype.onceListener = function (type, handler) {
            var _this = this;
            var func = function (event) {
                _this.removeListener(type, func);
                handler(event);
            };
            return this.listener(type, func);
        };
        AsEventDispatcher.prototype.removeListener = function (type, handler) {
            var handlers = this.hasListener[type];
            if (handlers) {
                for (var i = handlers.length - 1; i >= 0; i--) {
                    if (handlers[i] == handler) {
                        handlers.splice(i, 1);
                    }
                }
            }
            else {
                handlers = [];
            }
            this.hasListener[type] = handlers;
            return this;
        };
        AsEventDispatcher.prototype.dispatchEvent = function (event) {
            if (!this.hasListener[event.type]) {
                return this;
            }
            if (event.type in this.hasListener == false)
                return this;
            var handlers = this.hasListener[event.type];
            event.current = this;
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                var handler = handlers_1[_i];
                handler(event);
            }
            return this;
        };
        return AsEventDispatcher;
    }());
    exports.AsEventDispatcher = AsEventDispatcher;
});
//# sourceMappingURL=AsEvent.js.map