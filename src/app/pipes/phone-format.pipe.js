"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PhoneFormatPipe = (function () {
    function PhoneFormatPipe() {
    }
    PhoneFormatPipe.prototype.transform = function (value, args) {
        // simple way: return value.toLocaleString('sv-SE');
        var valueAsString = "" + value;
        if (valueAsString.length < 3) {
            return valueAsString;
        }
        var reversedString = "";
        for (var i = valueAsString.length - 1; i >= 0; i--) {
            if (i % 2 == 1 && i < valueAsString.length - 2 && i > 3) {
                reversedString += " ";
            }
            else if (i == 2) {
                reversedString += "-";
            }
            reversedString += valueAsString.charAt(i);
        }
        var result = "";
        for (var i = reversedString.length - 1; i >= 0; i--) {
            result += reversedString.charAt(i);
        }
        return result;
    };
    return PhoneFormatPipe;
}()); // import {Pipe} from '@angular/core';
PhoneFormatPipe = __decorate([
    core_1.Pipe({ name: 'phoneFormat' })
], PhoneFormatPipe);
exports.PhoneFormatPipe = PhoneFormatPipe;
// @Pipe({
//     name: 'phoneFormat'
// })
// export class PhonePipe{
//     transform(val:any, args:any) {
//         val = val.charAt(0) != 0 ? '0' + val : '' + val;
//         let newStr = '';
//         for(let i=0; i < (Math.floor(val.length/2) - 1); i++){
//            newStr = newStr+ val.substr(i*2, 2) + '-';
//         }
//         // return newStr + val.substr(let i*2);
//     }
// } 
//# sourceMappingURL=phone-format.pipe.js.map