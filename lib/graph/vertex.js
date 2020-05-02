"use strict";

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

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRleC5qcyJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJuYW1lIiwiaW5kZXgiLCJzdGFja2VkIiwidmlzaXRlZCIsImxvd2VzdEluZGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJ1bmluZGV4ZWQiLCJsb3dlc3QiLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLE9BQXpCLEVBQWtDQyxPQUFsQyxFQUEyQ0MsV0FBM0MsRUFBd0RDLGlCQUF4RCxFQUEyRTtBQUFBOztBQUN6RSxTQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0wsSUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQyxpQkFBWjtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQyxTQUFTLEdBQUksS0FBS0wsS0FBTCxHQUFhLENBQWhDLENBRFksQ0FDd0I7O0FBRXBDLGFBQU9LLFNBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsTUFBTSxHQUFJLEtBQUtOLEtBQUwsS0FBZSxLQUFLRyxXQUFwQyxDQURTLENBQ3lDOztBQUVsRCxhQUFPRyxNQUFQO0FBQ0Q7Ozs2QkFFUU4sSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OzsrQkFFVUMsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7K0JBRVVDLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7O21DQUVjQyxXLEVBQWE7QUFDMUIsV0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7O3lDQUVvQkMsaUIsRUFBbUI7QUFDdEMsV0FBS0EsaUJBQUwsR0FBMEJBLGlCQUExQjtBQUNEOzs7c0NBRWlCRCxXLEVBQWE7QUFDN0IsVUFBSUEsV0FBVyxHQUFHLEtBQUtBLFdBQXZCLEVBQW9DO0FBQ2xDLGFBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7QUFDRjs7O21DQUVxQkksVSxFQUFZO0FBQ2hDLFVBQU1SLElBQUksR0FBR1EsVUFBYjtBQUFBLFVBQTBCO0FBQ3BCUCxNQUFBQSxLQUFLLEdBQUcsQ0FBQyxDQURmO0FBQUEsVUFFTUMsT0FBTyxHQUFHLEtBRmhCO0FBQUEsVUFHTUMsT0FBTyxHQUFHLEtBSGhCO0FBQUEsVUFJTUMsV0FBVyxHQUFHLENBQUMsQ0FKckI7QUFBQSxVQUtNQyxpQkFBaUIsR0FBRyxFQUwxQjtBQUFBLFVBTU1JLE1BQU0sR0FBRyxJQUFJVixNQUFKLENBQVdDLElBQVgsRUFBaUJDLEtBQWpCLEVBQXdCQyxPQUF4QixFQUFpQ0MsT0FBakMsRUFBMENDLFdBQTFDLEVBQXVEQyxpQkFBdkQsQ0FOZjtBQVFBLGFBQU9JLE1BQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlosTUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIHN0YWNrZWQsIHZpc2l0ZWQsIGxvd2VzdEluZGV4LCBzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuc3RhY2tlZCA9IHN0YWNrZWQ7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gICAgdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1N0YWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tlZDtcbiAgfVxuXG4gIGlzVmlzaXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpdGVkO1xuICB9XG5cbiAgZ2V0TG93ZXN0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubG93ZXN0SW5kZXg7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuICBcbiAgaXNVbmluZGV4ZWQoKSB7XG4gICAgY29uc3QgdW5pbmRleGVkID0gKHRoaXMuaW5kZXggPCAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHVuaW5kZXhlZDtcbiAgfVxuICBcbiAgaXNMb3dlc3QoKSB7XG4gICAgY29uc3QgbG93ZXN0ID0gKHRoaXMuaW5kZXggPT09IHRoaXMubG93ZXN0SW5kZXgpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gbG93ZXN0O1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBzZXRTdGFja2VkKHN0YWNrZWQpIHtcbiAgICB0aGlzLnN0YWNrZWQgPSBzdGFja2VkO1xuICB9XG5cbiAgc2V0VmlzaXRlZCh2aXNpdGVkKSB7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgfVxuICBcbiAgc2V0TG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpIHtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gIH1cblxuICBzZXRTdWNjZXNzb3JWZXJ0aWNlcyhzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHRoaXMuc3VjY2Vzc29yVmVydGljZXMgPSAgc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cbiAgXG4gIHVwZGF0ZUxvd2VzdEluZGV4KGxvd2VzdEluZGV4KSB7XG4gICAgaWYgKGxvd2VzdEluZGV4IDwgdGhpcy5sb3dlc3RJbmRleCkge1xuICAgICAgdGhpcy5sb3dlc3RJbmRleCA9IGxvd2VzdEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICAgIHN0YWNrZWQgPSBmYWxzZSxcbiAgICAgICAgICB2aXNpdGVkID0gZmFsc2UsXG4gICAgICAgICAgbG93ZXN0SW5kZXggPSAtMSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIHN0YWNrZWQsIHZpc2l0ZWQsIGxvd2VzdEluZGV4LCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuIl19