"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PhonePipe = (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (val, args) {
        val = val.charAt(0) != 0 ? '0' + val : '' + val;
        var newStr = '';
        for (var i = 0; i < (Math.floor(val.length / 2) - 1); i++) {
            newStr = newStr + val.substr(i * 2, 2) + '-';
        }
        // return newStr + val.substr(let i*2);
    };
    return PhonePipe;
}());
PhonePipe = __decorate([
    core_1.Pipe({
        name: 'phone'
    })
], PhonePipe);
exports.PhonePipe = PhonePipe;
//# sourceMappingURL=phone-format.pipe.js.map