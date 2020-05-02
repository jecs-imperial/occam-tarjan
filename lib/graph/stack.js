"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWNrLmpzIl0sIm5hbWVzIjpbIlN0YWNrIiwidmVydGljZXMiLCJ2ZXJ0ZXgiLCJwb3AiLCJzdGFja2VkIiwic2V0U3RhY2tlZCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFFTUEsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNEOzs7OzBCQUVLO0FBQ0osVUFBTUMsTUFBTSxHQUFHLEtBQUtELFFBQUwsQ0FBY0UsR0FBZCxFQUFmO0FBQUEsVUFDTUMsT0FBTyxHQUFHLEtBRGhCO0FBR0FGLE1BQUFBLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQkQsT0FBbEI7QUFFQSxhQUFPRixNQUFQO0FBQ0Q7Ozt5QkFFSUEsTSxFQUFRO0FBQ1gsVUFBTUUsT0FBTyxHQUFHLElBQWhCO0FBRUFGLE1BQUFBLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQkQsT0FBbEI7QUFFQSxXQUFLSCxRQUFMLENBQWNLLElBQWQsQ0FBbUJKLE1BQW5CO0FBQ0Q7Ozs7OztBQUdISyxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLEtBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFN0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICB9XG4gIFxuICBwb3AoKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0aWNlcy5wb3AoKSxcbiAgICAgICAgICBzdGFja2VkID0gZmFsc2U7XG4gICAgXG4gICAgdmVydGV4LnNldFN0YWNrZWQoc3RhY2tlZCk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuICBcbiAgcHVzaCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdGFja2VkID0gdHJ1ZTtcbiAgICBcbiAgICB2ZXJ0ZXguc2V0U3RhY2tlZChzdGFja2VkKTtcbiAgICBcbiAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIl19