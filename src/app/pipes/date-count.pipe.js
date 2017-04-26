"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DateCountPipe = (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value) {
        if (!value) {
            return value;
        }
        if (value) {
            var oneDayInMilliSeconds = 86400000;
            var addY = value.slice(0, 4);
            var addM = value.slice(5, 7);
            var addD = value.slice(8, 10);
            // Got a TS2362 error on Angular Start, 
            // but found a workaround by adding the + to new date()
            var addedDate = +new Date(addY, addM - 1, addD);
            var today = +new Date();
            var diffDays = Math.floor((today - addedDate) / oneDayInMilliSeconds);
            return diffDays;
        }
    };
    return DateCountPipe;
}());
DateCountPipe = __decorate([
    core_1.Pipe({ name: 'dateCount' })
], DateCountPipe);
exports.DateCountPipe = DateCountPipe;
//# sourceMappingURL=date-count.pipe.js.map