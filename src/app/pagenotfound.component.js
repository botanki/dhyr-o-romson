"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
        this.title = 'OOOPS...';
        this.body = "The page your're looking for can't be found";
        this.img = './images/404.jpg';
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    core_1.Component({
        template: "\n       <div class=\"centered-container\">\n        <img src=\"{{img}}\">\n        <h2>{{title}}</h2>\n        <h5>{{body}}</h5>\n       </div>\n    ",
        styles: ["\n        .centered-container {\n            text-align:  center;\n            height: 72vh;\n            width: 100%;\n            margin-top: 70px;\n        }\n\n        .centered-container > img { width: 50vh; }\n\n    "]
    })
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=pagenotfound.component.js.map