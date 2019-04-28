'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
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
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'isStacked',
    value: function isStacked() {
      return this.stacked;
    }
  }, {
    key: 'isVisited',
    value: function isVisited() {
      return this.visited;
    }
  }, {
    key: 'getLowestIndex',
    value: function getLowestIndex() {
      return this.lowestIndex;
    }
  }, {
    key: 'getSuccessorVertices',
    value: function getSuccessorVertices() {
      return this.successorVertices;
    }
  }, {
    key: 'isUnindexed',
    value: function isUnindexed() {
      var unindexed = this.index < 0; ///

      return unindexed;
    }
  }, {
    key: 'isLowest',
    value: function isLowest() {
      var lowest = this.index === this.lowestIndex; ///

      return lowest;
    }
  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'setStacked',
    value: function setStacked(stacked) {
      this.stacked = stacked;
    }
  }, {
    key: 'setVisited',
    value: function setVisited(visited) {
      this.visited = visited;
    }
  }, {
    key: 'setLowestIndex',
    value: function setLowestIndex(lowestIndex) {
      this.lowestIndex = lowestIndex;
    }
  }, {
    key: 'setSuccessorVertices',
    value: function setSuccessorVertices(successorVertices) {
      this.successorVertices = successorVertices;
    }
  }, {
    key: 'updateLowestIndex',
    value: function updateLowestIndex(lowestIndex) {
      if (lowestIndex < this.lowestIndex) {
        this.lowestIndex = lowestIndex;
      }
    }
  }], [{
    key: 'fromVertexName',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsImluZGV4Iiwic3RhY2tlZCIsInZpc2l0ZWQiLCJsb3dlc3RJbmRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwidW5pbmRleGVkIiwibG93ZXN0IiwidmVydGV4TmFtZSIsInZlcnRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsT0FBekIsRUFBa0NDLE9BQWxDLEVBQTJDQyxXQUEzQyxFQUF3REMsaUJBQXhELEVBQTJFO0FBQUE7O0FBQ3pFLFNBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLTCxJQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtDLFdBQVo7QUFDRDs7OzJDQUVzQjtBQUNyQixhQUFPLEtBQUtDLGlCQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1DLFlBQWEsS0FBS0wsS0FBTCxHQUFhLENBQWhDLENBRFksQ0FDd0I7O0FBRXBDLGFBQU9LLFNBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsU0FBVSxLQUFLTixLQUFMLEtBQWUsS0FBS0csV0FBcEMsQ0FEUyxDQUN5Qzs7QUFFbEQsYUFBT0csTUFBUDtBQUNEOzs7NkJBRVFOLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7K0JBRVVDLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OytCQUVVQyxPLEVBQVM7QUFDbEIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7OzttQ0FFY0MsVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozt5Q0FFb0JDLGlCLEVBQW1CO0FBQ3RDLFdBQUtBLGlCQUFMLEdBQTBCQSxpQkFBMUI7QUFDRDs7O3NDQUVpQkQsVyxFQUFhO0FBQzdCLFVBQUlBLGNBQWMsS0FBS0EsV0FBdkIsRUFBb0M7QUFDbEMsYUFBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDtBQUNGOzs7bUNBRXFCSSxVLEVBQVk7QUFDaEMsVUFBTVIsT0FBT1EsVUFBYjtBQUFBLFVBQTBCO0FBQ3BCUCxjQUFRLENBQUMsQ0FEZjtBQUFBLFVBRU1DLFVBQVUsS0FGaEI7QUFBQSxVQUdNQyxVQUFVLEtBSGhCO0FBQUEsVUFJTUMsY0FBYyxDQUFDLENBSnJCO0FBQUEsVUFLTUMsb0JBQW9CLEVBTDFCO0FBQUEsVUFNTUksU0FBUyxJQUFJVixNQUFKLENBQVdDLElBQVgsRUFBaUJDLEtBQWpCLEVBQXdCQyxPQUF4QixFQUFpQ0MsT0FBakMsRUFBMENDLFdBQTFDLEVBQXVEQyxpQkFBdkQsQ0FOZjs7QUFRQSxhQUFPSSxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCWixNQUFqQiIsImZpbGUiOiJ2ZXJ0ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCBzdGFja2VkLCB2aXNpdGVkLCBsb3dlc3RJbmRleCwgc3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnN0YWNrZWQgPSBzdGFja2VkO1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gICAgdGhpcy5sb3dlc3RJbmRleCA9IGxvd2VzdEluZGV4O1xuICAgIHRoaXMuc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgaXNTdGFja2VkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YWNrZWQ7XG4gIH1cblxuICBpc1Zpc2l0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRlZDtcbiAgfVxuXG4gIGdldExvd2VzdEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxvd2VzdEluZGV4O1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cbiAgXG4gIGlzVW5pbmRleGVkKCkge1xuICAgIGNvbnN0IHVuaW5kZXhlZCA9ICh0aGlzLmluZGV4IDwgMCk7IC8vL1xuICAgIFxuICAgIHJldHVybiB1bmluZGV4ZWQ7XG4gIH1cbiAgXG4gIGlzTG93ZXN0KCkge1xuICAgIGNvbnN0IGxvd2VzdCA9ICh0aGlzLmluZGV4ID09PSB0aGlzLmxvd2VzdEluZGV4KTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIGxvd2VzdDtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0U3RhY2tlZChzdGFja2VkKSB7XG4gICAgdGhpcy5zdGFja2VkID0gc3RhY2tlZDtcbiAgfVxuXG4gIHNldFZpc2l0ZWQodmlzaXRlZCkge1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gIH1cbiAgXG4gIHNldExvd2VzdEluZGV4KGxvd2VzdEluZGV4KSB7XG4gICAgdGhpcy5sb3dlc3RJbmRleCA9IGxvd2VzdEluZGV4O1xuICB9XG5cbiAgc2V0U3VjY2Vzc29yVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLnN1Y2Nlc3NvclZlcnRpY2VzID0gIHN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG4gIFxuICB1cGRhdGVMb3dlc3RJbmRleChsb3dlc3RJbmRleCkge1xuICAgIGlmIChsb3dlc3RJbmRleCA8IHRoaXMubG93ZXN0SW5kZXgpIHtcbiAgICAgIHRoaXMubG93ZXN0SW5kZXggPSBsb3dlc3RJbmRleDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgICBzdGFja2VkID0gZmFsc2UsXG4gICAgICAgICAgdmlzaXRlZCA9IGZhbHNlLFxuICAgICAgICAgIGxvd2VzdEluZGV4ID0gLTEsXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCBzdGFja2VkLCB2aXNpdGVkLCBsb3dlc3RJbmRleCwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcbiJdfQ==