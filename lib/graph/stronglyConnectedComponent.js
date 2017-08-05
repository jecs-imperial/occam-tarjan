'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var array = necessary.array,
    first = array.first;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9zdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXkiLCJmaXJzdCIsIlN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50IiwidmVydGljZXMiLCJ2ZXJ0ZXhOYW1lcyIsIm1hcCIsInZlcnRleCIsInZlcnRleE5hbWUiLCJnZXROYW1lIiwiZmlyc3RWZXJ0ZXgiLCJmaXJzdFZlcnRleE5hbWUiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxlbmd0aCIsImN5Y2xpYyIsImlzQ3ljbGljIiwibm9uQ3ljbGljIiwiY2FsbGJhY2siLCJnZXRWZXJ0ZXhOYW1lcyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsInN0YWNrIiwic3RhY2tWZXJ0aWNlcyIsInN0YWNrVmVydGV4IiwicG9wIiwicHVzaCIsInN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxLQUFGLEdBQVlGLFNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsS0FEWixDQUNFQyxLQURGOztJQUdBQywwQjtBQUNKLHNDQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLGNBQWMsS0FBS0QsUUFBTCxDQUFjRSxHQUFkLENBQWtCLFVBQVNDLE1BQVQsRUFBaUI7QUFDckQsWUFBTUMsYUFBYUQsT0FBT0UsT0FBUCxFQUFuQjs7QUFFQSxlQUFPRCxVQUFQO0FBQ0QsT0FKbUIsQ0FBcEI7O0FBTUEsYUFBT0gsV0FBUDtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQU1LLGNBQWNSLE1BQU0sS0FBS0UsUUFBWCxDQUFwQjtBQUFBLFVBQ01PLGtCQUFrQkQsWUFBWUQsT0FBWixFQUR4Qjs7QUFHQSxhQUFPRSxlQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLGlCQUFpQixLQUFLUixRQUFMLENBQWNTLE1BQXJDO0FBQUEsVUFDTUMsU0FBVUYsaUJBQWlCLENBRGpDLENBRFMsQ0FFNkI7O0FBRXRDLGFBQU9FLE1BQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUEsU0FBUyxLQUFLQyxRQUFMLEVBQWY7QUFBQSxVQUNNQyxZQUFZLENBQUNGLE1BRG5COztBQUdBLGFBQU9FLFNBQVA7QUFDRDs7O21DQUVjQyxRLEVBQVU7QUFDdkIsVUFBTVosY0FBYyxLQUFLYSxjQUFMLEVBQXBCOztBQUVBLGFBQU9iLFlBQVlDLEdBQVosQ0FBZ0JXLFFBQWhCLENBQVA7QUFDRDs7O3NDQUVpQkEsUSxFQUFVRSxZLEVBQWM7QUFDeEMsVUFBTWQsY0FBYyxLQUFLYSxjQUFMLEVBQXBCOztBQUVBLGFBQU9iLFlBQVllLE1BQVosQ0FBbUJILFFBQW5CLEVBQTZCRSxZQUE3QixDQUFQO0FBQ0Q7Ozt1Q0FFeUJFLEssRUFBT2QsTSxFQUFRO0FBQ3ZDLFVBQU1lLGdCQUFnQixFQUF0Qjs7QUFFQSxVQUFJQyxvQkFBSjs7QUFFQSxTQUFHO0FBQ0RBLHNCQUFjRixNQUFNRyxHQUFOLEVBQWQ7O0FBRUFGLHNCQUFjRyxJQUFkLENBQW1CRixXQUFuQjtBQUNELE9BSkQsUUFJU0EsZ0JBQWdCaEIsTUFKekI7O0FBTUEsVUFBTUgsV0FBV2tCLGFBQWpCO0FBQUEsVUFBZ0M7QUFDMUJJLG1DQUE2QixJQUFJdkIsMEJBQUosQ0FBK0JDLFFBQS9CLENBRG5DOztBQUdBLGFBQU9zQiwwQkFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnpCLDBCQUFqQiIsImZpbGUiOiJzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5O1xuXG5jbGFzcyBTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0Rmlyc3RWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RWZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIGZpcnN0VmVydGV4TmFtZTtcbiAgfVxuXG4gIGlzQ3ljbGljKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGljID0gKHZlcnRpY2VzTGVuZ3RoID4gMSk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY3ljbGljO1xuICB9XG5cbiAgaXNOb25DeWNsaWMoKSB7XG4gICAgY29uc3QgY3ljbGljID0gdGhpcy5pc0N5Y2xpYygpLFxuICAgICAgICAgIG5vbkN5Y2xpYyA9ICFjeWNsaWM7XG4gICAgXG4gICAgcmV0dXJuIG5vbkN5Y2xpYztcbiAgfVxuICBcbiAgbWFwVmVydGV4TmFtZXMoY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4TmFtZXMubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZVZlcnRleE5hbWVzKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcy5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YWNrQW5kVmVydGV4KHN0YWNrLCB2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdGFja1ZlcnRpY2VzID0gW107XG4gICAgXG4gICAgbGV0IHN0YWNrVmVydGV4O1xuXG4gICAgZG8ge1xuICAgICAgc3RhY2tWZXJ0ZXggPSBzdGFjay5wb3AoKTtcblxuICAgICAgc3RhY2tWZXJ0aWNlcy5wdXNoKHN0YWNrVmVydGV4KVxuICAgIH0gd2hpbGUgKHN0YWNrVmVydGV4ICE9PSB2ZXJ0ZXgpO1xuICAgIFxuICAgIGNvbnN0IHZlcnRpY2VzID0gc3RhY2tWZXJ0aWNlcywgLy8vIFxuICAgICAgICAgIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50ID0gbmV3IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50KHZlcnRpY2VzKTtcblxuICAgIHJldHVybiBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50O1xuIl19