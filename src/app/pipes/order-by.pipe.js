"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, args) {
        if (!value) {
            return value;
        }
        return value.slice().sort(function (a, b) {
            for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
                var arg = args_1[_i];
                var descending = false;
                if (arg[0] == '-') {
                    descending = true;
                    arg = arg.substr(1);
                }
                if (a[arg] > b[arg]) {
                    return descending ? -1 : 1;
                }
                else if (a[arg] < b[arg]) {
                    return descending ? 1 : -1;
                }
            }
        });
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    core_1.Pipe({ name: 'orderBy' })
], OrderByPipe);
exports.OrderByPipe = OrderByPipe;
//# sourceMappingURL=order-by.pipe.js.map