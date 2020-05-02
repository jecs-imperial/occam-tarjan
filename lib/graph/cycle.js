"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cycle = /*#__PURE__*/function () {
  function Cycle(vertices) {
    _classCallCheck(this, Cycle);

    this.vertices = vertices;
  }

  _createClass(Cycle, null, [{
    key: "fromStronglyConnectedComponent",
    value: function fromStronglyConnectedComponent(stronglyConnectedComponent) {
      var vertices = stronglyConnectedComponent.getVertices(),
          cycle = new Cycle(vertices);
      return cycle;
    }
  }]);

  return Cycle;
}();

exports["default"] = Cycle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN5Y2xlLmpzIl0sIm5hbWVzIjpbIkN5Y2xlIiwidmVydGljZXMiLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsImdldFZlcnRpY2VzIiwiY3ljbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0lBRXFCQSxLO0FBQ25CLGlCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7bURBRXFDQywwQixFQUE0QjtBQUNoRSxVQUFNRCxRQUFRLEdBQUdDLDBCQUEwQixDQUFDQyxXQUEzQixFQUFqQjtBQUFBLFVBQ01DLEtBQUssR0FBRyxJQUFJSixLQUFKLENBQVVDLFFBQVYsQ0FEZDtBQUdBLGFBQU9HLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudChzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCkge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBjeWNsZSA9IG5ldyBDeWNsZSh2ZXJ0aWNlcyk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xlO1xuICB9XG59XG4iXX0=