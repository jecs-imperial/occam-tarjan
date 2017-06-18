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
      component = new Component(vertices);

      return component;
    }
  }]);

  return Component;
}();

module.exports = Component;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9jb21wb25lbnQuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIkNvbXBvbmVudCIsInZlcnRpY2VzIiwidmVydGV4TmFtZXMiLCJtYXAiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsImZpcnN0VmVydGV4IiwiZmlyc3QiLCJmaXJzdFZlcnRleE5hbWUiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxlbmd0aCIsImN5Y2xpYyIsImlzQ3ljbGljIiwibm9uQ3ljbGljIiwiY2FsbGJhY2siLCJnZXRWZXJ0ZXhOYW1lcyIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsInN0YWNrIiwic3RhY2tWZXJ0aWNlcyIsInN0YWNrVmVydGV4IiwicG9wIiwicHVzaCIsImNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGVBQVIsQ0FBbEI7O0lBRU1DLFM7QUFDSixxQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxjQUFjLEtBQUtELFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixVQUFTQyxNQUFULEVBQWlCO0FBQ3JELFlBQU1DLGFBQWFELE9BQU9FLE9BQVAsRUFBbkI7O0FBRUEsZUFBT0QsVUFBUDtBQUNELE9BSm1CLENBQXBCOztBQU1BLGFBQU9ILFdBQVA7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNSyxjQUFjVCxVQUFVVSxLQUFWLENBQWdCLEtBQUtQLFFBQXJCLENBQXBCO0FBQUEsVUFDTVEsa0JBQWtCRixZQUFZRCxPQUFaLEVBRHhCOztBQUdBLGFBQU9HLGVBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsaUJBQWlCLEtBQUtULFFBQUwsQ0FBY1UsTUFBckM7QUFBQSxVQUNNQyxTQUFVRixpQkFBaUIsQ0FEakMsQ0FEUyxDQUU2Qjs7QUFFdEMsYUFBT0UsTUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQSxTQUFTLEtBQUtDLFFBQUwsRUFBZjtBQUFBLFVBQ01DLFlBQVksQ0FBQ0YsTUFEbkI7O0FBR0EsYUFBT0UsU0FBUDtBQUNEOzs7bUNBRWNDLFEsRUFBVTtBQUN2QixVQUFNYixjQUFjLEtBQUtjLGNBQUwsRUFBcEI7O0FBRUEsYUFBT2QsWUFBWUMsR0FBWixDQUFnQlksUUFBaEIsQ0FBUDtBQUNEOzs7c0NBRWlCQSxRLEVBQVVFLFksRUFBYztBQUN4QyxVQUFNZixjQUFjLEtBQUtjLGNBQUwsRUFBcEI7O0FBRUEsYUFBT2QsWUFBWWdCLE1BQVosQ0FBbUJILFFBQW5CLEVBQTZCRSxZQUE3QixDQUFQO0FBQ0Q7Ozt1Q0FFeUJFLEssRUFBT2YsTSxFQUFRO0FBQ3ZDLFVBQU1nQixnQkFBZ0IsRUFBdEI7O0FBRUEsVUFBSUMsb0JBQUo7O0FBRUEsU0FBRztBQUNEQSxzQkFBY0YsTUFBTUcsR0FBTixFQUFkOztBQUVBRixzQkFBY0csSUFBZCxDQUFtQkYsV0FBbkI7QUFDRCxPQUpELFFBSVNBLGdCQUFnQmpCLE1BSnpCOztBQU1BLFVBQU1ILFdBQVdtQixhQUFqQjtBQUFBLFVBQWdDO0FBQzFCSSxrQkFBWSxJQUFJeEIsU0FBSixDQUFjQyxRQUFkLENBRGxCOztBQUdBLGFBQU91QixTQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCMUIsU0FBakIiLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5Jyk7XG5cbmNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0Rmlyc3RWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gYXJyYXlVdGlsLmZpcnN0KHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0VmVydGV4TmFtZSA9IGZpcnN0VmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiBmaXJzdFZlcnRleE5hbWU7XG4gIH1cblxuICBpc0N5Y2xpYygpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IHRoaXMudmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xpYyA9ICh2ZXJ0aWNlc0xlbmd0aCA+IDEpOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGN5Y2xpYztcbiAgfVxuXG4gIGlzTm9uQ3ljbGljKCkge1xuICAgIGNvbnN0IGN5Y2xpYyA9IHRoaXMuaXNDeWNsaWMoKSxcbiAgICAgICAgICBub25DeWNsaWMgPSAhY3ljbGljO1xuICAgIFxuICAgIHJldHVybiBub25DeWNsaWM7XG4gIH1cbiAgXG4gIG1hcFZlcnRleE5hbWVzKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzLm1hcChjYWxsYmFjayk7XG4gIH1cblxuICByZWR1Y2VWZXJ0ZXhOYW1lcyhjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXMucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGFja0FuZFZlcnRleChzdGFjaywgdmVydGV4KSB7XG4gICAgY29uc3Qgc3RhY2tWZXJ0aWNlcyA9IFtdO1xuICAgIFxuICAgIGxldCBzdGFja1ZlcnRleDtcblxuICAgIGRvIHtcbiAgICAgIHN0YWNrVmVydGV4ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgIHN0YWNrVmVydGljZXMucHVzaChzdGFja1ZlcnRleClcbiAgICB9IHdoaWxlIChzdGFja1ZlcnRleCAhPT0gdmVydGV4KTtcbiAgICBcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHN0YWNrVmVydGljZXMsIC8vLyBcbiAgICAgICAgICBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHZlcnRpY2VzKTtcblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7XG4iXX0=