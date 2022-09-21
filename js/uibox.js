"use strict";
exports.__esModule = true;
exports.UIBox = void 0;
var UIBox = /** @class */ (function () {
    function UIBox() {
        this.el = document.createElement("div");
        this.el.textContent = "I've been created!";
        this.el.style.backgroundColor = "salmon";
        this.el.style.border = "1px dotted black";
        this.el.style.textShadow = "1px 1px 1px black";
        document.body.append(this.el);
    }
    return UIBox;
}());
exports.UIBox = UIBox;
