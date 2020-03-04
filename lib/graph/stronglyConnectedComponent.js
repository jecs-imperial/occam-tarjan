'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQiLCJ2ZXJ0aWNlcyIsInZlcnRleE5hbWVzIiwibWFwIiwidmVydGV4IiwidmVydGV4TmFtZSIsImdldE5hbWUiLCJmaXJzdFZlcnRleCIsImZpcnN0VmVydGV4TmFtZSIsInZlcnRpY2VzTGVuZ3RoIiwibGVuZ3RoIiwiY3ljbGljIiwiaXNDeWNsaWMiLCJub25DeWNsaWMiLCJjYWxsYmFjayIsImdldFZlcnRleE5hbWVzIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwic3RhY2siLCJzdGFja1ZlcnRpY2VzIiwic3RhY2tWZXJ0ZXgiLCJwb3AiLCJwdXNoIiwic3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXpCOztBQUVNLElBQUVDLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsMEI7QUFDSixzQ0FBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxXQUFXLEdBQUcsS0FBS0QsUUFBTCxDQUFjRSxHQUFkLENBQWtCLFVBQVNDLE1BQVQsRUFBaUI7QUFDckQsWUFBTUMsVUFBVSxHQUFHRCxNQUFNLENBQUNFLE9BQVAsRUFBbkI7QUFFQSxlQUFPRCxVQUFQO0FBQ0QsT0FKbUIsQ0FBcEI7QUFNQSxhQUFPSCxXQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUssV0FBVyxHQUFHUixLQUFLLENBQUMsS0FBS0UsUUFBTixDQUF6QjtBQUFBLFVBQ01PLGVBQWUsR0FBR0QsV0FBVyxDQUFDRCxPQUFaLEVBRHhCO0FBR0EsYUFBT0UsZUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxjQUFjLEdBQUcsS0FBS1IsUUFBTCxDQUFjUyxNQUFyQztBQUFBLFVBQ01DLE1BQU0sR0FBSUYsY0FBYyxHQUFHLENBRGpDLENBRFMsQ0FFNkI7O0FBRXRDLGFBQU9FLE1BQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUEsTUFBTSxHQUFHLEtBQUtDLFFBQUwsRUFBZjtBQUFBLFVBQ01DLFNBQVMsR0FBRyxDQUFDRixNQURuQjtBQUdBLGFBQU9FLFNBQVA7QUFDRDs7O21DQUVjQyxRLEVBQVU7QUFDdkIsVUFBTVosV0FBVyxHQUFHLEtBQUthLGNBQUwsRUFBcEI7QUFFQSxhQUFPYixXQUFXLENBQUNDLEdBQVosQ0FBZ0JXLFFBQWhCLENBQVA7QUFDRDs7O3NDQUVpQkEsUSxFQUFVRSxZLEVBQWM7QUFDeEMsVUFBTWQsV0FBVyxHQUFHLEtBQUthLGNBQUwsRUFBcEI7QUFFQSxhQUFPYixXQUFXLENBQUNlLE1BQVosQ0FBbUJILFFBQW5CLEVBQTZCRSxZQUE3QixDQUFQO0FBQ0Q7Ozt1Q0FFeUJFLEssRUFBT2QsTSxFQUFRO0FBQ3ZDLFVBQU1lLGFBQWEsR0FBRyxFQUF0QjtBQUVBLFVBQUlDLFdBQUo7O0FBRUEsU0FBRztBQUNEQSxRQUFBQSxXQUFXLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixFQUFkO0FBRUFGLFFBQUFBLGFBQWEsQ0FBQ0csSUFBZCxDQUFtQkYsV0FBbkI7QUFDRCxPQUpELFFBSVNBLFdBQVcsS0FBS2hCLE1BSnpCOztBQU1BLFVBQU1ILFFBQVEsR0FBR2tCLGFBQWpCO0FBQUEsVUFBZ0M7QUFDMUJJLE1BQUFBLDBCQUEwQixHQUFHLElBQUl2QiwwQkFBSixDQUErQkMsUUFBL0IsQ0FEbkM7QUFHQSxhQUFPc0IsMEJBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLDBCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0Rmlyc3RWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RWZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIGZpcnN0VmVydGV4TmFtZTtcbiAgfVxuXG4gIGlzQ3ljbGljKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGljID0gKHZlcnRpY2VzTGVuZ3RoID4gMSk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY3ljbGljO1xuICB9XG5cbiAgaXNOb25DeWNsaWMoKSB7XG4gICAgY29uc3QgY3ljbGljID0gdGhpcy5pc0N5Y2xpYygpLFxuICAgICAgICAgIG5vbkN5Y2xpYyA9ICFjeWNsaWM7XG4gICAgXG4gICAgcmV0dXJuIG5vbkN5Y2xpYztcbiAgfVxuICBcbiAgbWFwVmVydGV4TmFtZXMoY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4TmFtZXMubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZVZlcnRleE5hbWVzKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcy5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YWNrQW5kVmVydGV4KHN0YWNrLCB2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdGFja1ZlcnRpY2VzID0gW107XG4gICAgXG4gICAgbGV0IHN0YWNrVmVydGV4O1xuXG4gICAgZG8ge1xuICAgICAgc3RhY2tWZXJ0ZXggPSBzdGFjay5wb3AoKTtcblxuICAgICAgc3RhY2tWZXJ0aWNlcy5wdXNoKHN0YWNrVmVydGV4KVxuICAgIH0gd2hpbGUgKHN0YWNrVmVydGV4ICE9PSB2ZXJ0ZXgpO1xuICAgIFxuICAgIGNvbnN0IHZlcnRpY2VzID0gc3RhY2tWZXJ0aWNlcywgLy8vIFxuICAgICAgICAgIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50ID0gbmV3IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50KHZlcnRpY2VzKTtcblxuICAgIHJldHVybiBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50O1xuIl19