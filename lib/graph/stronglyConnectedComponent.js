'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array');

var StronglyConnectedComponent = function () {
  function StronglyConnectedComponent(vertices) {
    _classCallCheck(this, StronglyConnectedComponent);

    this.vertices = vertices;
  }

  _createClass(StronglyConnectedComponent, [{
    key: 'getVertices',
    value: function getVertices() {
      return this.vertices;
    }
  }, {
    key: 'getVertexNames',
    value: function getVertexNames() {
      var vertexNames = this.vertices.map(function (vertex) {
        var vertexName = vertex.getName();

        return vertexName;
      });

      return vertexNames;
    }
  }, {
    key: 'getFirstVertexName',
    value: function getFirstVertexName() {
      var firstVertex = arrayUtil.first(this.vertices),
          firstVertexName = firstVertex.getName();

      return firstVertexName;
    }
  }, {
    key: 'isCyclic',
    value: function isCyclic() {
      var verticesLength = this.vertices.length,
          cyclic = verticesLength > 1; ///

      return cyclic;
    }
  }, {
    key: 'isNonCyclic',
    value: function isNonCyclic() {
      var cyclic = this.isCyclic(),
          nonCyclic = !cyclic;

      return nonCyclic;
    }
  }, {
    key: 'mapVertexNames',
    value: function mapVertexNames(callback) {
      var vertexNames = this.getVertexNames();

      return vertexNames.map(callback);
    }
  }, {
    key: 'reduceVertexNames',
    value: function reduceVertexNames(callback, initialValue) {
      var vertexNames = this.getVertexNames();

      return vertexNames.reduce(callback, initialValue);
    }
  }], [{
    key: 'fromStackAndVertex',
    value: function fromStackAndVertex(stack, vertex) {
      var stackVertices = [];

      var stackVertex = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9zdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQiLCJ2ZXJ0aWNlcyIsInZlcnRleE5hbWVzIiwibWFwIiwidmVydGV4IiwidmVydGV4TmFtZSIsImdldE5hbWUiLCJmaXJzdFZlcnRleCIsImZpcnN0IiwiZmlyc3RWZXJ0ZXhOYW1lIiwidmVydGljZXNMZW5ndGgiLCJsZW5ndGgiLCJjeWNsaWMiLCJpc0N5Y2xpYyIsIm5vbkN5Y2xpYyIsImNhbGxiYWNrIiwiZ2V0VmVydGV4TmFtZXMiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJzdGFjayIsInN0YWNrVmVydGljZXMiLCJzdGFja1ZlcnRleCIsInBvcCIsInB1c2giLCJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGVBQVIsQ0FBbEI7O0lBRU1DLDBCO0FBQ0osc0NBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsY0FBYyxLQUFLRCxRQUFMLENBQWNFLEdBQWQsQ0FBa0IsVUFBU0MsTUFBVCxFQUFpQjtBQUNyRCxZQUFNQyxhQUFhRCxPQUFPRSxPQUFQLEVBQW5COztBQUVBLGVBQU9ELFVBQVA7QUFDRCxPQUptQixDQUFwQjs7QUFNQSxhQUFPSCxXQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUssY0FBY1QsVUFBVVUsS0FBVixDQUFnQixLQUFLUCxRQUFyQixDQUFwQjtBQUFBLFVBQ01RLGtCQUFrQkYsWUFBWUQsT0FBWixFQUR4Qjs7QUFHQSxhQUFPRyxlQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLGlCQUFpQixLQUFLVCxRQUFMLENBQWNVLE1BQXJDO0FBQUEsVUFDTUMsU0FBVUYsaUJBQWlCLENBRGpDLENBRFMsQ0FFNkI7O0FBRXRDLGFBQU9FLE1BQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUEsU0FBUyxLQUFLQyxRQUFMLEVBQWY7QUFBQSxVQUNNQyxZQUFZLENBQUNGLE1BRG5COztBQUdBLGFBQU9FLFNBQVA7QUFDRDs7O21DQUVjQyxRLEVBQVU7QUFDdkIsVUFBTWIsY0FBYyxLQUFLYyxjQUFMLEVBQXBCOztBQUVBLGFBQU9kLFlBQVlDLEdBQVosQ0FBZ0JZLFFBQWhCLENBQVA7QUFDRDs7O3NDQUVpQkEsUSxFQUFVRSxZLEVBQWM7QUFDeEMsVUFBTWYsY0FBYyxLQUFLYyxjQUFMLEVBQXBCOztBQUVBLGFBQU9kLFlBQVlnQixNQUFaLENBQW1CSCxRQUFuQixFQUE2QkUsWUFBN0IsQ0FBUDtBQUNEOzs7dUNBRXlCRSxLLEVBQU9mLE0sRUFBUTtBQUN2QyxVQUFNZ0IsZ0JBQWdCLEVBQXRCOztBQUVBLFVBQUlDLG9CQUFKOztBQUVBLFNBQUc7QUFDREEsc0JBQWNGLE1BQU1HLEdBQU4sRUFBZDs7QUFFQUYsc0JBQWNHLElBQWQsQ0FBbUJGLFdBQW5CO0FBQ0QsT0FKRCxRQUlTQSxnQkFBZ0JqQixNQUp6Qjs7QUFNQSxVQUFNSCxXQUFXbUIsYUFBakI7QUFBQSxVQUFnQztBQUMxQkksbUNBQTZCLElBQUl4QiwwQkFBSixDQUErQkMsUUFBL0IsQ0FEbkM7O0FBR0EsYUFBT3VCLDBCQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCMUIsMEJBQWpCIiwiZmlsZSI6InN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5Jyk7XG5cbmNsYXNzIFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuICAgICAgXG4gICAgICByZXR1cm4gdmVydGV4TmFtZTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRGaXJzdFZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBhcnJheVV0aWwuZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RWZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIGZpcnN0VmVydGV4TmFtZTtcbiAgfVxuXG4gIGlzQ3ljbGljKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGljID0gKHZlcnRpY2VzTGVuZ3RoID4gMSk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY3ljbGljO1xuICB9XG5cbiAgaXNOb25DeWNsaWMoKSB7XG4gICAgY29uc3QgY3ljbGljID0gdGhpcy5pc0N5Y2xpYygpLFxuICAgICAgICAgIG5vbkN5Y2xpYyA9ICFjeWNsaWM7XG4gICAgXG4gICAgcmV0dXJuIG5vbkN5Y2xpYztcbiAgfVxuICBcbiAgbWFwVmVydGV4TmFtZXMoY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4TmFtZXMubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZVZlcnRleE5hbWVzKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcy5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YWNrQW5kVmVydGV4KHN0YWNrLCB2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdGFja1ZlcnRpY2VzID0gW107XG4gICAgXG4gICAgbGV0IHN0YWNrVmVydGV4O1xuXG4gICAgZG8ge1xuICAgICAgc3RhY2tWZXJ0ZXggPSBzdGFjay5wb3AoKTtcblxuICAgICAgc3RhY2tWZXJ0aWNlcy5wdXNoKHN0YWNrVmVydGV4KVxuICAgIH0gd2hpbGUgKHN0YWNrVmVydGV4ICE9PSB2ZXJ0ZXgpO1xuICAgIFxuICAgIGNvbnN0IHZlcnRpY2VzID0gc3RhY2tWZXJ0aWNlcywgLy8vIFxuICAgICAgICAgIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50ID0gbmV3IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50KHZlcnRpY2VzKTtcblxuICAgIHJldHVybiBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50O1xuIl19