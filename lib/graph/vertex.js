"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vertex = /*#__PURE__*/function () {
  function Vertex(name, index, stacked, visited, lowestIndex, successorVertices) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.index = index;
    this.stacked = stacked;
    this.visited = visited;
    this.lowestIndex = lowestIndex;
    this.successorVertices = successorVertices;
  }

  _createClass(Vertex, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: "isStacked",
    value: function isStacked() {
      return this.stacked;
    }
  }, {
    key: "isVisited",
    value: function isVisited() {
      return this.visited;
    }
  }, {
    key: "getLowestIndex",
    value: function getLowestIndex() {
      return this.lowestIndex;
    }
  }, {
    key: "getSuccessorVertices",
    value: function getSuccessorVertices() {
      return this.successorVertices;
    }
  }, {
    key: "isUnindexed",
    value: function isUnindexed() {
      var unindexed = this.index < 0; ///

      return unindexed;
    }
  }, {
    key: "isLowest",
    value: function isLowest() {
      var lowest = this.index === this.lowestIndex; ///

      return lowest;
    }
  }, {
    key: "setIndex",
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: "setStacked",
    value: function setStacked(stacked) {
      this.stacked = stacked;
    }
  }, {
    key: "setVisited",
    value: function setVisited(visited) {
      this.visited = visited;
    }
  }, {
    key: "setLowestIndex",
    value: function setLowestIndex(lowestIndex) {
      this.lowestIndex = lowestIndex;
    }
  }, {
    key: "setSuccessorVertices",
    value: function setSuccessorVertices(successorVertices) {
      this.successorVertices = successorVertices;
    }
  }, {
    key: "updateLowestIndex",
    value: function updateLowestIndex(lowestIndex) {
      if (lowestIndex < this.lowestIndex) {
        this.lowestIndex = lowestIndex;
      }
    }
  }], [{
    key: "fromVertexName",
    value: function fromVertexName(vertexName) {
      var name = vertexName,
          ///
      index = -1,
          stacked = false,
          visited = false,
          lowestIndex = -1,
          successorVertices = [],
          vertex = new Vertex(name, index, stacked, visited, lowestIndex, successorVertices);
      return vertex;
    }
  }]);

  return Vertex;
}();

exports["default"] = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRleC5qcyJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJuYW1lIiwiaW5kZXgiLCJzdGFja2VkIiwidmlzaXRlZCIsImxvd2VzdEluZGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJ1bmluZGV4ZWQiLCJsb3dlc3QiLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQUVxQkEsTTtBQUNuQixrQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLE9BQXpCLEVBQWtDQyxPQUFsQyxFQUEyQ0MsV0FBM0MsRUFBd0RDLGlCQUF4RCxFQUEyRTtBQUFBOztBQUN6RSxTQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0wsSUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQyxpQkFBWjtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQyxTQUFTLEdBQUksS0FBS0wsS0FBTCxHQUFhLENBQWhDLENBRFksQ0FDd0I7O0FBRXBDLGFBQU9LLFNBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsTUFBTSxHQUFJLEtBQUtOLEtBQUwsS0FBZSxLQUFLRyxXQUFwQyxDQURTLENBQ3lDOztBQUVsRCxhQUFPRyxNQUFQO0FBQ0Q7Ozs2QkFFUU4sSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OzsrQkFFVUMsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7K0JBRVVDLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7O21DQUVjQyxXLEVBQWE7QUFDMUIsV0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7O3lDQUVvQkMsaUIsRUFBbUI7QUFDdEMsV0FBS0EsaUJBQUwsR0FBMEJBLGlCQUExQjtBQUNEOzs7c0NBRWlCRCxXLEVBQWE7QUFDN0IsVUFBSUEsV0FBVyxHQUFHLEtBQUtBLFdBQXZCLEVBQW9DO0FBQ2xDLGFBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7QUFDRjs7O21DQUVxQkksVSxFQUFZO0FBQ2hDLFVBQU1SLElBQUksR0FBR1EsVUFBYjtBQUFBLFVBQTBCO0FBQ3BCUCxNQUFBQSxLQUFLLEdBQUcsQ0FBQyxDQURmO0FBQUEsVUFFTUMsT0FBTyxHQUFHLEtBRmhCO0FBQUEsVUFHTUMsT0FBTyxHQUFHLEtBSGhCO0FBQUEsVUFJTUMsV0FBVyxHQUFHLENBQUMsQ0FKckI7QUFBQSxVQUtNQyxpQkFBaUIsR0FBRyxFQUwxQjtBQUFBLFVBTU1JLE1BQU0sR0FBRyxJQUFJVixNQUFKLENBQVdDLElBQVgsRUFBaUJDLEtBQWpCLEVBQXdCQyxPQUF4QixFQUFpQ0MsT0FBakMsRUFBMENDLFdBQTFDLEVBQXVEQyxpQkFBdkQsQ0FOZjtBQVFBLGFBQU9JLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgc3RhY2tlZCwgdmlzaXRlZCwgbG93ZXN0SW5kZXgsIHN1Y2Nlc3NvclZlcnRpY2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5zdGFja2VkID0gc3RhY2tlZDtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICAgIHRoaXMubG93ZXN0SW5kZXggPSBsb3dlc3RJbmRleDtcbiAgICB0aGlzLnN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGlzU3RhY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFja2VkO1xuICB9XG5cbiAgaXNWaXNpdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0ZWQ7XG4gIH1cblxuICBnZXRMb3dlc3RJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb3dlc3RJbmRleDtcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG4gIFxuICBpc1VuaW5kZXhlZCgpIHtcbiAgICBjb25zdCB1bmluZGV4ZWQgPSAodGhpcy5pbmRleCA8IDApOyAvLy9cbiAgICBcbiAgICByZXR1cm4gdW5pbmRleGVkO1xuICB9XG4gIFxuICBpc0xvd2VzdCgpIHtcbiAgICBjb25zdCBsb3dlc3QgPSAodGhpcy5pbmRleCA9PT0gdGhpcy5sb3dlc3RJbmRleCk7IC8vL1xuICAgIFxuICAgIHJldHVybiBsb3dlc3Q7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldFN0YWNrZWQoc3RhY2tlZCkge1xuICAgIHRoaXMuc3RhY2tlZCA9IHN0YWNrZWQ7XG4gIH1cblxuICBzZXRWaXNpdGVkKHZpc2l0ZWQpIHtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICB9XG4gIFxuICBzZXRMb3dlc3RJbmRleChsb3dlc3RJbmRleCkge1xuICAgIHRoaXMubG93ZXN0SW5kZXggPSBsb3dlc3RJbmRleDtcbiAgfVxuXG4gIHNldFN1Y2Nlc3NvclZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKSB7XG4gICAgdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcyA9ICBzdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuICBcbiAgdXBkYXRlTG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpIHtcbiAgICBpZiAobG93ZXN0SW5kZXggPCB0aGlzLmxvd2VzdEluZGV4KSB7XG4gICAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgICAgc3RhY2tlZCA9IGZhbHNlLFxuICAgICAgICAgIHZpc2l0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBsb3dlc3RJbmRleCA9IC0xLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmRleCwgc3RhY2tlZCwgdmlzaXRlZCwgbG93ZXN0SW5kZXgsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cbiJdfQ==