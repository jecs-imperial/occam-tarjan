"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Cycle = function() {
    function Cycle(vertices) {
        _classCallCheck(this, Cycle);
        this.vertices = vertices;
    }
    _createClass(Cycle, null, [
        {
            key: "fromStronglyConnectedComponent",
            value: function fromStronglyConnectedComponent(stronglyConnectedComponent) {
                var vertices = stronglyConnectedComponent.getVertices(), cycle = new Cycle(vertices);
                return cycle;
            }
        }
    ]);
    return Cycle;
}();
exports.default = Cycle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaC9jeWNsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ljbGUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQoc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUodmVydGljZXMpO1xuICAgIFxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLEtBQUE7YUFBQSxLQUFBLENBQ0EsUUFBQTs4QkFEQSxLQUFBO2FBRUEsUUFBQSxHQUFBLFFBQUE7O2lCQUZBLEtBQUE7O0FBS0EsZUFBQSxHQUFBLDhCQUFBOzRCQUFBLDhCQUFBLENBQUEsMEJBQUE7b0JBQ0EsUUFBQSxHQUFBLDBCQUFBLENBQUEsV0FBQSxJQUNBLEtBQUEsT0FBQSxLQUFBLENBQUEsUUFBQTt1QkFFQSxLQUFBOzs7O1dBVEEsS0FBQTs7a0JBQUEsS0FBQSJ9