"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BreakRowPipe = (function () {
    function BreakRowPipe() {
    }
    BreakRowPipe.prototype.transform = function (value, args) {
        //find every word and make sure the first
        //letter is capitalized
        if (!value) {
            return value;
        }
        return '<p>' + value.split('\n').join('</p><p>') + '</p>';
    };
    return BreakRowPipe;
}());
BreakRowPipe = __decorate([
    core_1.Pipe({ name: 'breakrow' })
], BreakRowPipe);
exports.BreakRowPipe = BreakRowPipe;
//# sourceMappingURL=break-row.pipe.js.map