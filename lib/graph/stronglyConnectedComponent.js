"use strict";

var _necessary = require("necessary");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

var StronglyConnectedComponent = /*#__PURE__*/function () {
  function StronglyConnectedComponent(vertices) {
    _classCallCheck(this, StronglyConnectedComponent);

    this.vertices = vertices;
  }

  _createClass(StronglyConnectedComponent, [{
    key: "getVertices",
    value: function getVertices() {
      return this.vertices;
    }
  }, {
    key: "getVertexNames",
    value: function getVertexNames() {
      var vertexNames = this.vertices.map(function (vertex) {
        var vertexName = vertex.getName();
        return vertexName;
      });
      return vertexNames;
    }
  }, {
    key: "getFirstVertexName",
    value: function getFirstVertexName() {
      var firstVertex = first(this.vertices),
          firstVertexName = firstVertex.getName();
      return firstVertexName;
    }
  }, {
    key: "isCyclic",
    value: function isCyclic() {
      var verticesLength = this.vertices.length,
          cyclic = verticesLength > 1; ///

      return cyclic;
    }
  }, {
    key: "isNonCyclic",
    value: function isNonCyclic() {
      var cyclic = this.isCyclic(),
          nonCyclic = !cyclic;
      return nonCyclic;
    }
  }, {
    key: "mapVertexNames",
    value: function mapVertexNames(callback) {
      var vertexNames = this.getVertexNames();
      return vertexNames.map(callback);
    }
  }, {
    key: "reduceVertexNames",
    value: function reduceVertexNames(callback, initialValue) {
      var vertexNames = this.getVertexNames();
      return vertexNames.reduce(callback, initialValue);
    }
  }], [{
    key: "fromStackAndVertex",
    value: function fromStackAndVertex(stack, vertex) {
      var stackVertices = [];
      var stackVertex;

      do {
        stackVertex = stack.pop();
        stackVertices.push(stackVertex);
      } while (stackVertex !== vertex);

      var vertices = stackVertices,
          /// 
      stronglyConnectedComponent = new StronglyConnectedComponent(vertices);
      return stronglyConnectedComponent;
    }
  }]);

  return StronglyConnectedComponent;
}();

module.exports = StronglyConnectedComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsInZlcnRpY2VzIiwidmVydGV4TmFtZXMiLCJtYXAiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsImZpcnN0VmVydGV4IiwiZmlyc3RWZXJ0ZXhOYW1lIiwidmVydGljZXNMZW5ndGgiLCJsZW5ndGgiLCJjeWNsaWMiLCJpc0N5Y2xpYyIsIm5vbkN5Y2xpYyIsImNhbGxiYWNrIiwiZ2V0VmVydGV4TmFtZXMiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJzdGFjayIsInN0YWNrVmVydGljZXMiLCJzdGFja1ZlcnRleCIsInBvcCIsInB1c2giLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0lBRUZFLDBCO0FBQ0osc0NBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsV0FBVyxHQUFHLEtBQUtELFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixVQUFTQyxNQUFULEVBQWlCO0FBQ3JELFlBQU1DLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxPQUFQLEVBQW5CO0FBRUEsZUFBT0QsVUFBUDtBQUNELE9BSm1CLENBQXBCO0FBTUEsYUFBT0gsV0FBUDtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQU1LLFdBQVcsR0FBR1QsS0FBSyxDQUFDLEtBQUtHLFFBQU4sQ0FBekI7QUFBQSxVQUNNTyxlQUFlLEdBQUdELFdBQVcsQ0FBQ0QsT0FBWixFQUR4QjtBQUdBLGFBQU9FLGVBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsY0FBYyxHQUFHLEtBQUtSLFFBQUwsQ0FBY1MsTUFBckM7QUFBQSxVQUNNQyxNQUFNLEdBQUlGLGNBQWMsR0FBRyxDQURqQyxDQURTLENBRTZCOztBQUV0QyxhQUFPRSxNQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1BLE1BQU0sR0FBRyxLQUFLQyxRQUFMLEVBQWY7QUFBQSxVQUNNQyxTQUFTLEdBQUcsQ0FBQ0YsTUFEbkI7QUFHQSxhQUFPRSxTQUFQO0FBQ0Q7OzttQ0FFY0MsUSxFQUFVO0FBQ3ZCLFVBQU1aLFdBQVcsR0FBRyxLQUFLYSxjQUFMLEVBQXBCO0FBRUEsYUFBT2IsV0FBVyxDQUFDQyxHQUFaLENBQWdCVyxRQUFoQixDQUFQO0FBQ0Q7OztzQ0FFaUJBLFEsRUFBVUUsWSxFQUFjO0FBQ3hDLFVBQU1kLFdBQVcsR0FBRyxLQUFLYSxjQUFMLEVBQXBCO0FBRUEsYUFBT2IsV0FBVyxDQUFDZSxNQUFaLENBQW1CSCxRQUFuQixFQUE2QkUsWUFBN0IsQ0FBUDtBQUNEOzs7dUNBRXlCRSxLLEVBQU9kLE0sRUFBUTtBQUN2QyxVQUFNZSxhQUFhLEdBQUcsRUFBdEI7QUFFQSxVQUFJQyxXQUFKOztBQUVBLFNBQUc7QUFDREEsUUFBQUEsV0FBVyxHQUFHRixLQUFLLENBQUNHLEdBQU4sRUFBZDtBQUVBRixRQUFBQSxhQUFhLENBQUNHLElBQWQsQ0FBbUJGLFdBQW5CO0FBQ0QsT0FKRCxRQUlTQSxXQUFXLEtBQUtoQixNQUp6Qjs7QUFNQSxVQUFNSCxRQUFRLEdBQUdrQixhQUFqQjtBQUFBLFVBQWdDO0FBQzFCSSxNQUFBQSwwQkFBMEIsR0FBRyxJQUFJdkIsMEJBQUosQ0FBK0JDLFFBQS9CLENBRG5DO0FBR0EsYUFBT3NCLDBCQUFQO0FBQ0Q7Ozs7OztBQUdIQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QiwwQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0Rmlyc3RWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RWZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIGZpcnN0VmVydGV4TmFtZTtcbiAgfVxuXG4gIGlzQ3ljbGljKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGljID0gKHZlcnRpY2VzTGVuZ3RoID4gMSk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY3ljbGljO1xuICB9XG5cbiAgaXNOb25DeWNsaWMoKSB7XG4gICAgY29uc3QgY3ljbGljID0gdGhpcy5pc0N5Y2xpYygpLFxuICAgICAgICAgIG5vbkN5Y2xpYyA9ICFjeWNsaWM7XG4gICAgXG4gICAgcmV0dXJuIG5vbkN5Y2xpYztcbiAgfVxuICBcbiAgbWFwVmVydGV4TmFtZXMoY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4TmFtZXMubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZVZlcnRleE5hbWVzKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcy5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YWNrQW5kVmVydGV4KHN0YWNrLCB2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdGFja1ZlcnRpY2VzID0gW107XG4gICAgXG4gICAgbGV0IHN0YWNrVmVydGV4O1xuXG4gICAgZG8ge1xuICAgICAgc3RhY2tWZXJ0ZXggPSBzdGFjay5wb3AoKTtcblxuICAgICAgc3RhY2tWZXJ0aWNlcy5wdXNoKHN0YWNrVmVydGV4KVxuICAgIH0gd2hpbGUgKHN0YWNrVmVydGV4ICE9PSB2ZXJ0ZXgpO1xuICAgIFxuICAgIGNvbnN0IHZlcnRpY2VzID0gc3RhY2tWZXJ0aWNlcywgLy8vIFxuICAgICAgICAgIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50ID0gbmV3IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50KHZlcnRpY2VzKTtcblxuICAgIHJldHVybiBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50O1xuIl19