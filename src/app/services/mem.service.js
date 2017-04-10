"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// A shared memory between components
// and between initalizations of components
var MemService = MemService_1 = (function () {
    function MemService() {
    }
    MemService.prototype.get = function (that) {
        // call from any component using this service with this as argument
        // to get a components specific memory that survives
        // between route changes
        var className = that.constructor.name;
        MemService_1.localMem[className] = MemService_1.localMem[className] || {};
        return MemService_1.localMem[className];
    };
    MemService.prototype.global = function () {
        // call from any component using this service
        // to get a global memory shared between all components 
        return MemService_1.globalMem;
    };
    return MemService;
}());
MemService.globalMem = {}; // global for everyone
MemService.localMem = {}; // local per class/component
MemService = MemService_1 = __decorate([
    core_1.Injectable()
], MemService);
exports.MemService = MemService;
var MemService_1;
//# sourceMappingURL=mem.service.js.map