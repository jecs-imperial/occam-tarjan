'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack = /*#__PURE__*/function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.vertices = [];
  }

  _createClass(Stack, [{
    key: "pop",
    value: function pop() {
      var vertex = this.vertices.pop(),
          stacked = false;
      vertex.setStacked(stacked);
      return vertex;
    }
  }, {
    key: "push",
    value: function push(vertex) {
      var stacked = true;
      vertex.setStacked(stacked);
      this.vertices.push(vertex);
    }
  }]);

  return Stack;
}();

module.exports = Stack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWNrLmpzIl0sIm5hbWVzIjpbIlN0YWNrIiwidmVydGljZXMiLCJ2ZXJ0ZXgiLCJwb3AiLCJzdGFja2VkIiwic2V0U3RhY2tlZCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFFTUEsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNEOzs7OzBCQUVLO0FBQ0osVUFBTUMsTUFBTSxHQUFHLEtBQUtELFFBQUwsQ0FBY0UsR0FBZCxFQUFmO0FBQUEsVUFDTUMsT0FBTyxHQUFHLEtBRGhCO0FBR0FGLE1BQUFBLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQkQsT0FBbEI7QUFFQSxhQUFPRixNQUFQO0FBQ0Q7Ozt5QkFFSUEsTSxFQUFRO0FBQ1gsVUFBTUUsT0FBTyxHQUFHLElBQWhCO0FBRUFGLE1BQUFBLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQkQsT0FBbEI7QUFFQSxXQUFLSCxRQUFMLENBQWNLLElBQWQsQ0FBbUJKLE1BQW5CO0FBQ0Q7Ozs7OztBQUdISyxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLEtBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgfVxuICBcbiAgcG9wKCkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGljZXMucG9wKCksXG4gICAgICAgICAgc3RhY2tlZCA9IGZhbHNlO1xuICAgIFxuICAgIHZlcnRleC5zZXRTdGFja2VkKHN0YWNrZWQpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHB1c2godmVydGV4KSB7XG4gICAgY29uc3Qgc3RhY2tlZCA9IHRydWU7XG4gICAgXG4gICAgdmVydGV4LnNldFN0YWNrZWQoc3RhY2tlZCk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiJdfQ==