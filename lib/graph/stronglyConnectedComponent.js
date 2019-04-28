'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

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
      var firstVertex = first(this.vertices),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9zdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50IiwidmVydGljZXMiLCJ2ZXJ0ZXhOYW1lcyIsIm1hcCIsInZlcnRleCIsInZlcnRleE5hbWUiLCJnZXROYW1lIiwiZmlyc3RWZXJ0ZXgiLCJmaXJzdFZlcnRleE5hbWUiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxlbmd0aCIsImN5Y2xpYyIsImlzQ3ljbGljIiwibm9uQ3ljbGljIiwiY2FsbGJhY2siLCJnZXRWZXJ0ZXhOYW1lcyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsInN0YWNrIiwic3RhY2tWZXJ0aWNlcyIsInN0YWNrVmVydGV4IiwicG9wIiwicHVzaCIsInN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLDBCO0FBQ0osc0NBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsY0FBYyxLQUFLRCxRQUFMLENBQWNFLEdBQWQsQ0FBa0IsVUFBU0MsTUFBVCxFQUFpQjtBQUNyRCxZQUFNQyxhQUFhRCxPQUFPRSxPQUFQLEVBQW5COztBQUVBLGVBQU9ELFVBQVA7QUFDRCxPQUptQixDQUFwQjs7QUFNQSxhQUFPSCxXQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUssY0FBY1IsTUFBTSxLQUFLRSxRQUFYLENBQXBCO0FBQUEsVUFDTU8sa0JBQWtCRCxZQUFZRCxPQUFaLEVBRHhCOztBQUdBLGFBQU9FLGVBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsaUJBQWlCLEtBQUtSLFFBQUwsQ0FBY1MsTUFBckM7QUFBQSxVQUNNQyxTQUFVRixpQkFBaUIsQ0FEakMsQ0FEUyxDQUU2Qjs7QUFFdEMsYUFBT0UsTUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQSxTQUFTLEtBQUtDLFFBQUwsRUFBZjtBQUFBLFVBQ01DLFlBQVksQ0FBQ0YsTUFEbkI7O0FBR0EsYUFBT0UsU0FBUDtBQUNEOzs7bUNBRWNDLFEsRUFBVTtBQUN2QixVQUFNWixjQUFjLEtBQUthLGNBQUwsRUFBcEI7O0FBRUEsYUFBT2IsWUFBWUMsR0FBWixDQUFnQlcsUUFBaEIsQ0FBUDtBQUNEOzs7c0NBRWlCQSxRLEVBQVVFLFksRUFBYztBQUN4QyxVQUFNZCxjQUFjLEtBQUthLGNBQUwsRUFBcEI7O0FBRUEsYUFBT2IsWUFBWWUsTUFBWixDQUFtQkgsUUFBbkIsRUFBNkJFLFlBQTdCLENBQVA7QUFDRDs7O3VDQUV5QkUsSyxFQUFPZCxNLEVBQVE7QUFDdkMsVUFBTWUsZ0JBQWdCLEVBQXRCOztBQUVBLFVBQUlDLG9CQUFKOztBQUVBLFNBQUc7QUFDREEsc0JBQWNGLE1BQU1HLEdBQU4sRUFBZDs7QUFFQUYsc0JBQWNHLElBQWQsQ0FBbUJGLFdBQW5CO0FBQ0QsT0FKRCxRQUlTQSxnQkFBZ0JoQixNQUp6Qjs7QUFNQSxVQUFNSCxXQUFXa0IsYUFBakI7QUFBQSxVQUFnQztBQUMxQkksbUNBQTZCLElBQUl2QiwwQkFBSixDQUErQkMsUUFBL0IsQ0FEbkM7O0FBR0EsYUFBT3NCLDBCQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCekIsMEJBQWpCIiwiZmlsZSI6InN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuICAgICAgXG4gICAgICByZXR1cm4gdmVydGV4TmFtZTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRGaXJzdFZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFZlcnRleE5hbWUgPSBmaXJzdFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gZmlyc3RWZXJ0ZXhOYW1lO1xuICB9XG5cbiAgaXNDeWNsaWMoKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsaWMgPSAodmVydGljZXNMZW5ndGggPiAxKTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBjeWNsaWM7XG4gIH1cblxuICBpc05vbkN5Y2xpYygpIHtcbiAgICBjb25zdCBjeWNsaWMgPSB0aGlzLmlzQ3ljbGljKCksXG4gICAgICAgICAgbm9uQ3ljbGljID0gIWN5Y2xpYztcbiAgICBcbiAgICByZXR1cm4gbm9uQ3ljbGljO1xuICB9XG4gIFxuICBtYXBWZXJ0ZXhOYW1lcyhjYWxsYmFjaykge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcy5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlVmVydGV4TmFtZXMoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzLnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhY2tBbmRWZXJ0ZXgoc3RhY2ssIHZlcnRleCkge1xuICAgIGNvbnN0IHN0YWNrVmVydGljZXMgPSBbXTtcbiAgICBcbiAgICBsZXQgc3RhY2tWZXJ0ZXg7XG5cbiAgICBkbyB7XG4gICAgICBzdGFja1ZlcnRleCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICBzdGFja1ZlcnRpY2VzLnB1c2goc3RhY2tWZXJ0ZXgpXG4gICAgfSB3aGlsZSAoc3RhY2tWZXJ0ZXggIT09IHZlcnRleCk7XG4gICAgXG4gICAgY29uc3QgdmVydGljZXMgPSBzdGFja1ZlcnRpY2VzLCAvLy8gXG4gICAgICAgICAgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQgPSBuZXcgU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQodmVydGljZXMpO1xuXG4gICAgcmV0dXJuIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQ7XG4iXX0=