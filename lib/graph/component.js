'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array');

var Component = function () {
  function Component(vertices) {
    _classCallCheck(this, Component);

    this.vertices = vertices;
  }

  _createClass(Component, [{
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
      component = new Component(vertices);

      return component;
    }
  }]);

  return Component;
}();

module.exports = Component;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9jb21wb25lbnQuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIkNvbXBvbmVudCIsInZlcnRpY2VzIiwidmVydGV4TmFtZXMiLCJtYXAiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsImZpcnN0VmVydGV4IiwiZmlyc3QiLCJmaXJzdFZlcnRleE5hbWUiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxlbmd0aCIsImN5Y2xpYyIsImlzQ3ljbGljIiwibm9uQ3ljbGljIiwiY2FsbGJhY2siLCJnZXRWZXJ0ZXhOYW1lcyIsInN0YWNrIiwic3RhY2tWZXJ0aWNlcyIsInN0YWNrVmVydGV4IiwicG9wIiwicHVzaCIsImNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGVBQVIsQ0FBbEI7O0lBRU1DLFM7QUFDSixxQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxjQUFjLEtBQUtELFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixVQUFTQyxNQUFULEVBQWlCO0FBQ3JELFlBQU1DLGFBQWFELE9BQU9FLE9BQVAsRUFBbkI7O0FBRUEsZUFBT0QsVUFBUDtBQUNELE9BSm1CLENBQXBCOztBQU1BLGFBQU9ILFdBQVA7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNSyxjQUFjVCxVQUFVVSxLQUFWLENBQWdCLEtBQUtQLFFBQXJCLENBQXBCO0FBQUEsVUFDTVEsa0JBQWtCRixZQUFZRCxPQUFaLEVBRHhCOztBQUdBLGFBQU9HLGVBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsaUJBQWlCLEtBQUtULFFBQUwsQ0FBY1UsTUFBckM7QUFBQSxVQUNNQyxTQUFVRixpQkFBaUIsQ0FEakMsQ0FEUyxDQUU2Qjs7QUFFdEMsYUFBT0UsTUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQSxTQUFTLEtBQUtDLFFBQUwsRUFBZjtBQUFBLFVBQ01DLFlBQVksQ0FBQ0YsTUFEbkI7O0FBR0EsYUFBT0UsU0FBUDtBQUNEOzs7bUNBRWNDLFEsRUFBVTtBQUN2QixVQUFNYixjQUFjLEtBQUtjLGNBQUwsRUFBcEI7O0FBRUEsYUFBT2QsWUFBWUMsR0FBWixDQUFnQlksUUFBaEIsQ0FBUDtBQUNEOzs7dUNBRXlCRSxLLEVBQU9iLE0sRUFBUTtBQUN2QyxVQUFNYyxnQkFBZ0IsRUFBdEI7O0FBRUEsVUFBSUMsb0JBQUo7O0FBRUEsU0FBRztBQUNEQSxzQkFBY0YsTUFBTUcsR0FBTixFQUFkOztBQUVBRixzQkFBY0csSUFBZCxDQUFtQkYsV0FBbkI7QUFDRCxPQUpELFFBSVNBLGdCQUFnQmYsTUFKekI7O0FBTUEsVUFBTUgsV0FBV2lCLGFBQWpCO0FBQUEsVUFBZ0M7QUFDMUJJLGtCQUFZLElBQUl0QixTQUFKLENBQWNDLFFBQWQsQ0FEbEI7O0FBR0EsYUFBT3FCLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ4QixTQUFqQiIsImZpbGUiOiJjb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuICAgICAgXG4gICAgICByZXR1cm4gdmVydGV4TmFtZTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRGaXJzdFZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBhcnJheVV0aWwuZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RWZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIGZpcnN0VmVydGV4TmFtZTtcbiAgfVxuXG4gIGlzQ3ljbGljKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGljID0gKHZlcnRpY2VzTGVuZ3RoID4gMSk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY3ljbGljO1xuICB9XG5cbiAgaXNOb25DeWNsaWMoKSB7XG4gICAgY29uc3QgY3ljbGljID0gdGhpcy5pc0N5Y2xpYygpLFxuICAgICAgICAgIG5vbkN5Y2xpYyA9ICFjeWNsaWM7XG4gICAgXG4gICAgcmV0dXJuIG5vbkN5Y2xpYztcbiAgfVxuICBcbiAgbWFwVmVydGV4TmFtZXMoY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4TmFtZXMubWFwKGNhbGxiYWNrKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFja0FuZFZlcnRleChzdGFjaywgdmVydGV4KSB7XG4gICAgY29uc3Qgc3RhY2tWZXJ0aWNlcyA9IFtdO1xuICAgIFxuICAgIGxldCBzdGFja1ZlcnRleDtcblxuICAgIGRvIHtcbiAgICAgIHN0YWNrVmVydGV4ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgIHN0YWNrVmVydGljZXMucHVzaChzdGFja1ZlcnRleClcbiAgICB9IHdoaWxlIChzdGFja1ZlcnRleCAhPT0gdmVydGV4KTtcbiAgICBcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHN0YWNrVmVydGljZXMsIC8vLyBcbiAgICAgICAgICBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHZlcnRpY2VzKTtcblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7XG4iXX0=