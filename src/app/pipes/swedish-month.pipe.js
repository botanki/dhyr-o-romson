"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SwedishDatePipe = (function () {
    function SwedishDatePipe() {
    }
    SwedishDatePipe.prototype.transform = function (value) {
        if (!value) {
            return value;
        }
        if (value) {
            var sweNames = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
            var year = value.slice(0, 4);
            var monthNumber = value.slice(5, 7);
            monthNumber = monthNumber.replace('0', '');
            var getname = sweNames[monthNumber - 1];
            var day = value.slice(8, 10);
            var niceFormat = day + ' ' + getname + ' ' + year;
            // let month = value.slice(5,7);
            return niceFormat;
        }
    };
    return SwedishDatePipe;
}());
SwedishDatePipe = __decorate([
    core_1.Pipe({ name: 'swemonth' })
], SwedishDatePipe);
exports.SwedishDatePipe = SwedishDatePipe;
//# sourceMappingURL=swedish-month.pipe.js.map