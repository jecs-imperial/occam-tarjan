'use strict';

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

module.exports = Cycle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN5Y2xlLmpzIl0sIm5hbWVzIjpbIkN5Y2xlIiwidmVydGljZXMiLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsImdldFZlcnRpY2VzIiwiY3ljbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7bURBRXFDQywwQixFQUE0QjtBQUNoRSxVQUFNRCxRQUFRLEdBQUdDLDBCQUEwQixDQUFDQyxXQUEzQixFQUFqQjtBQUFBLFVBQ01DLEtBQUssR0FBRyxJQUFJSixLQUFKLENBQVVDLFFBQVYsQ0FEZDtBQUdBLGFBQU9HLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sS0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEN5Y2xlIHtcbiAgY29uc3RydWN0b3IodmVydGljZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50KHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50KSB7XG4gICAgY29uc3QgdmVydGljZXMgPSBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIGN5Y2xlID0gbmV3IEN5Y2xlKHZlcnRpY2VzKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDeWNsZTtcbiJdfQ==