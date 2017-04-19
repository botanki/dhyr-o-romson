"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SpacingCurrencyPipe = (function () {
    function SpacingCurrencyPipe() {
    }
    SpacingCurrencyPipe.prototype.transform = function (value, args) {
        // simple way: return value.toLocaleString('sv-SE');
        var valueAsString = "" + value;
        if (valueAsString.length < 4) {
            return valueAsString;
        }
        var reversedString = "";
        var iteration = 0;
        for (var i = valueAsString.length - 1; i >= 0; i--) {
            iteration++;
            if (iteration == 4) {
                reversedString += " ";
                iteration = 1;
            }
            reversedString += valueAsString.charAt(i);
        }
        var result = "";
        for (var i = reversedString.length - 1; i >= 0; i--) {
            result += reversedString.charAt(i);
        }
        return result;
    };
    return SpacingCurrencyPipe;
}());
SpacingCurrencyPipe = __decorate([
    core_1.Pipe({ name: 'spacingCurrency' })
], SpacingCurrencyPipe);
exports.SpacingCurrencyPipe = SpacingCurrencyPipe;
//# sourceMappingURL=spacing-currency.pipe.js.map