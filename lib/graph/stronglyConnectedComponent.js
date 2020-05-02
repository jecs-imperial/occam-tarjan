"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = StronglyConnectedComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsInZlcnRpY2VzIiwidmVydGV4TmFtZXMiLCJtYXAiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsImZpcnN0VmVydGV4IiwiZmlyc3RWZXJ0ZXhOYW1lIiwidmVydGljZXNMZW5ndGgiLCJsZW5ndGgiLCJjeWNsaWMiLCJpc0N5Y2xpYyIsIm5vbkN5Y2xpYyIsImNhbGxiYWNrIiwiZ2V0VmVydGV4TmFtZXMiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJzdGFjayIsInN0YWNrVmVydGljZXMiLCJzdGFja1ZlcnRleCIsInBvcCIsInB1c2giLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFUUEsSyxHQUFVQyx5QixDQUFWRCxLOztJQUVhRSwwQjtBQUNuQixzQ0FBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxXQUFXLEdBQUcsS0FBS0QsUUFBTCxDQUFjRSxHQUFkLENBQWtCLFVBQUNDLE1BQUQsRUFBWTtBQUNoRCxZQUFNQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxFQUFuQjtBQUVBLGVBQU9ELFVBQVA7QUFDRCxPQUptQixDQUFwQjtBQU1BLGFBQU9ILFdBQVA7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNSyxXQUFXLEdBQUdULEtBQUssQ0FBQyxLQUFLRyxRQUFOLENBQXpCO0FBQUEsVUFDTU8sZUFBZSxHQUFHRCxXQUFXLENBQUNELE9BQVosRUFEeEI7QUFHQSxhQUFPRSxlQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLGNBQWMsR0FBRyxLQUFLUixRQUFMLENBQWNTLE1BQXJDO0FBQUEsVUFDTUMsTUFBTSxHQUFJRixjQUFjLEdBQUcsQ0FEakMsQ0FEUyxDQUU2Qjs7QUFFdEMsYUFBT0UsTUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQSxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmO0FBQUEsVUFDTUMsU0FBUyxHQUFHLENBQUNGLE1BRG5CO0FBR0EsYUFBT0UsU0FBUDtBQUNEOzs7bUNBRWNDLFEsRUFBVTtBQUN2QixVQUFNWixXQUFXLEdBQUcsS0FBS2EsY0FBTCxFQUFwQjtBQUVBLGFBQU9iLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQlcsUUFBaEIsQ0FBUDtBQUNEOzs7c0NBRWlCQSxRLEVBQVVFLFksRUFBYztBQUN4QyxVQUFNZCxXQUFXLEdBQUcsS0FBS2EsY0FBTCxFQUFwQjtBQUVBLGFBQU9iLFdBQVcsQ0FBQ2UsTUFBWixDQUFtQkgsUUFBbkIsRUFBNkJFLFlBQTdCLENBQVA7QUFDRDs7O3VDQUV5QkUsSyxFQUFPZCxNLEVBQVE7QUFDdkMsVUFBTWUsYUFBYSxHQUFHLEVBQXRCO0FBRUEsVUFBSUMsV0FBSjs7QUFFQSxTQUFHO0FBQ0RBLFFBQUFBLFdBQVcsR0FBR0YsS0FBSyxDQUFDRyxHQUFOLEVBQWQ7QUFFQUYsUUFBQUEsYUFBYSxDQUFDRyxJQUFkLENBQW1CRixXQUFuQjtBQUNELE9BSkQsUUFJU0EsV0FBVyxLQUFLaEIsTUFKekI7O0FBTUEsVUFBTUgsUUFBUSxHQUFHa0IsYUFBakI7QUFBQSxVQUFnQztBQUMxQkksTUFBQUEsMEJBQTBCLEdBQUcsSUFBSXZCLDBCQUFKLENBQStCQyxRQUEvQixDQURuQztBQUdBLGFBQU9zQiwwQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuICBcbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuICAgICAgXG4gICAgICByZXR1cm4gdmVydGV4TmFtZTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRGaXJzdFZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFZlcnRleE5hbWUgPSBmaXJzdFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gZmlyc3RWZXJ0ZXhOYW1lO1xuICB9XG5cbiAgaXNDeWNsaWMoKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsaWMgPSAodmVydGljZXNMZW5ndGggPiAxKTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBjeWNsaWM7XG4gIH1cblxuICBpc05vbkN5Y2xpYygpIHtcbiAgICBjb25zdCBjeWNsaWMgPSB0aGlzLmlzQ3ljbGljKCksXG4gICAgICAgICAgbm9uQ3ljbGljID0gIWN5Y2xpYztcbiAgICBcbiAgICByZXR1cm4gbm9uQ3ljbGljO1xuICB9XG4gIFxuICBtYXBWZXJ0ZXhOYW1lcyhjYWxsYmFjaykge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcy5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlVmVydGV4TmFtZXMoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzLnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhY2tBbmRWZXJ0ZXgoc3RhY2ssIHZlcnRleCkge1xuICAgIGNvbnN0IHN0YWNrVmVydGljZXMgPSBbXTtcbiAgICBcbiAgICBsZXQgc3RhY2tWZXJ0ZXg7XG5cbiAgICBkbyB7XG4gICAgICBzdGFja1ZlcnRleCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICBzdGFja1ZlcnRpY2VzLnB1c2goc3RhY2tWZXJ0ZXgpXG4gICAgfSB3aGlsZSAoc3RhY2tWZXJ0ZXggIT09IHZlcnRleCk7XG4gICAgXG4gICAgY29uc3QgdmVydGljZXMgPSBzdGFja1ZlcnRpY2VzLCAvLy8gXG4gICAgICAgICAgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQgPSBuZXcgU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQodmVydGljZXMpO1xuXG4gICAgcmV0dXJuIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50O1xuICB9XG59XG4iXX0=