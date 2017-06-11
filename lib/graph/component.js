'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    key: 'getFirstVertex',
    value: function getFirstVertex() {
      var firstVertex = first(this.vertices);

      return firstVertex;
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
    key: 'mapVertices',
    value: function mapVertices(callback) {
      return this.vertices.map(callback);
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

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9jb21wb25lbnQuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwidmVydGljZXMiLCJmaXJzdFZlcnRleCIsImZpcnN0IiwidmVydGljZXNMZW5ndGgiLCJsZW5ndGgiLCJjeWNsaWMiLCJpc0N5Y2xpYyIsIm5vbkN5Y2xpYyIsImNhbGxiYWNrIiwibWFwIiwic3RhY2siLCJ2ZXJ0ZXgiLCJzdGFja1ZlcnRpY2VzIiwic3RhY2tWZXJ0ZXgiLCJwb3AiLCJwdXNoIiwiY29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFM7QUFDSixxQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxjQUFjQyxNQUFNLEtBQUtGLFFBQVgsQ0FBcEI7O0FBRUEsYUFBT0MsV0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNRSxpQkFBaUIsS0FBS0gsUUFBTCxDQUFjSSxNQUFyQztBQUFBLFVBQ01DLFNBQVVGLGlCQUFpQixDQURqQyxDQURTLENBRTZCOztBQUV0QyxhQUFPRSxNQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1BLFNBQVMsS0FBS0MsUUFBTCxFQUFmO0FBQUEsVUFDTUMsWUFBWSxDQUFDRixNQURuQjs7QUFHQSxhQUFPRSxTQUFQO0FBQ0Q7OztnQ0FFV0MsUSxFQUFVO0FBQUUsYUFBTyxLQUFLUixRQUFMLENBQWNTLEdBQWQsQ0FBa0JELFFBQWxCLENBQVA7QUFBcUM7Ozt1Q0FFbkNFLEssRUFBT0MsTSxFQUFRO0FBQ3ZDLFVBQU1DLGdCQUFnQixFQUF0Qjs7QUFFQSxVQUFJQyxvQkFBSjs7QUFFQSxTQUFHO0FBQ0RBLHNCQUFjSCxNQUFNSSxHQUFOLEVBQWQ7O0FBRUFGLHNCQUFjRyxJQUFkLENBQW1CRixXQUFuQjtBQUNELE9BSkQsUUFJU0EsZ0JBQWdCRixNQUp6Qjs7QUFNQSxVQUFNWCxXQUFXWSxhQUFqQjtBQUFBLFVBQWdDO0FBQzFCSSxrQkFBWSxJQUFJakIsU0FBSixDQUFjQyxRQUFkLENBRGxCOztBQUdBLGFBQU9nQixTQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkIsU0FBakI7O0FBRUEsU0FBU0csS0FBVCxDQUFlaUIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RWZXJ0ZXgoKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh0aGlzLnZlcnRpY2VzKTtcbiAgICBcbiAgICByZXR1cm4gZmlyc3RWZXJ0ZXg7XG4gIH1cbiAgXG4gIGlzQ3ljbGljKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGljID0gKHZlcnRpY2VzTGVuZ3RoID4gMSk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY3ljbGljO1xuICB9XG5cbiAgaXNOb25DeWNsaWMoKSB7XG4gICAgY29uc3QgY3ljbGljID0gdGhpcy5pc0N5Y2xpYygpLFxuICAgICAgICAgIG5vbkN5Y2xpYyA9ICFjeWNsaWM7XG4gICAgXG4gICAgcmV0dXJuIG5vbkN5Y2xpYztcbiAgfVxuICBcbiAgbWFwVmVydGljZXMoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMudmVydGljZXMubWFwKGNhbGxiYWNrKTsgfVxuICBcbiAgc3RhdGljIGZyb21TdGFja0FuZFZlcnRleChzdGFjaywgdmVydGV4KSB7XG4gICAgY29uc3Qgc3RhY2tWZXJ0aWNlcyA9IFtdO1xuICAgIFxuICAgIGxldCBzdGFja1ZlcnRleDtcblxuICAgIGRvIHtcbiAgICAgIHN0YWNrVmVydGV4ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgIHN0YWNrVmVydGljZXMucHVzaChzdGFja1ZlcnRleClcbiAgICB9IHdoaWxlIChzdGFja1ZlcnRleCAhPT0gdmVydGV4KTtcbiAgICBcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHN0YWNrVmVydGljZXMsIC8vLyBcbiAgICAgICAgICBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHZlcnRpY2VzKTtcblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19