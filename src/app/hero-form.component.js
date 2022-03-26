"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var hero_1 = require('./hero');
var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this._submitMessage = '';
    }
    Object.defineProperty(HeroFormComponent.prototype, "submitMessage", {
        get: function () {
            if (!this.form.valid) {
                this._submitMessage = '';
            }
            return this._submitMessage;
        },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent.prototype.onSubmit = function (form) {
        this._submitMessage = 'Submitted. form value is ' + JSON.stringify(form.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroFormComponent.prototype, "hero", void 0);
    __decorate([
        core_1.ViewChild('heroForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], HeroFormComponent.prototype, "form", void 0);
    HeroFormComponent = __decorate([
        core_1.Component({
            selector: 'hero-form',
            templateUrl: './hero-form.component.html',
            styles: ["\n    button { margin: 6px 0; }\n    #heroForm { border: 1px solid black; margin: 20px 0; padding: 8px; max-width: 350px; }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map