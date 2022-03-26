"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable use-input-property-decorator use-output-property-decorator */
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
        this.hero = new hero_1.Hero(-1, '', 'Zzzzzzzz'); // default sleeping hero
        // heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
        // Public Domain terms of use: http://www.wpclipart.com/terms.html
        this.heroImageUrl = 'images/hero.png';
        this.lineThrough = '';
        this.prefix = '';
        // This component make a request but it can't actually delete a hero.
        this.deleteRequest = new core_1.EventEmitter();
    }
    HeroDetailComponent.prototype.delete = function () {
        this.deleteRequest.emit(this.hero);
        this.lineThrough = this.lineThrough ? '' : 'line-through';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "prefix", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'hero-detail',
            inputs: ['hero'],
            outputs: ['deleteRequest'],
            styles: ['button {margin-left: 8px} div {margin: 8px 0} img {height:24px}'],
            template: "\n  <div>\n    <img src=\"{{heroImageUrl}}\">\n    <span [style.text-decoration]=\"lineThrough\">\n      {{prefix}} {{hero?.name}}\n    </span>\n    <button (click)=\"delete()\">Delete</button>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
var BigHeroDetailComponent = (function (_super) {
    __extends(BigHeroDetailComponent, _super);
    function BigHeroDetailComponent() {
        _super.apply(this, arguments);
        this.deleteRequest = new core_1.EventEmitter();
    }
    BigHeroDetailComponent.prototype.delete = function () {
        this.deleteRequest.emit(this.hero);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], BigHeroDetailComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BigHeroDetailComponent.prototype, "deleteRequest", void 0);
    BigHeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'big-hero-detail',
            template: "\n  <div class=\"detail\">\n    <img src=\"{{heroImageUrl}}\">\n    <div><b>{{hero?.name}}</b></div>\n    <div>Name: {{hero?.name}}</div>\n    <div>Emotion: {{hero?.emotion}}</div>\n    <div>Birthdate: {{hero?.birthdate | date:'longDate'}}</div>\n    <div>Web: <a href=\"{{hero?.url}}\" target=\"_blank\">{{hero?.url}}</a></div>\n    <div>Rate/hr: {{hero?.rate | currency:'EUR'}}</div>\n    <br clear=\"all\">\n    <button (click)=\"delete()\">Delete</button>\n  </div>\n  ",
            styles: ["\n    .detail { border: 1px solid black; padding: 4px; max-width: 450px; }\n    img     { float: left; margin-right: 8px; height: 100px; }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], BigHeroDetailComponent);
    return BigHeroDetailComponent;
}(HeroDetailComponent));
exports.BigHeroDetailComponent = BigHeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map