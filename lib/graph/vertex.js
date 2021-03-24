"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Vertex = function() {
    function Vertex(name, index, stacked, visited, lowestIndex, successorVertices) {
        _classCallCheck(this, Vertex);
        this.name = name;
        this.index = index;
        this.stacked = stacked;
        this.visited = visited;
        this.lowestIndex = lowestIndex;
        this.successorVertices = successorVertices;
    }
    _createClass(Vertex, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getIndex",
            value: function getIndex() {
                return this.index;
            }
        },
        {
            key: "isStacked",
            value: function isStacked() {
                return this.stacked;
            }
        },
        {
            key: "isVisited",
            value: function isVisited() {
                return this.visited;
            }
        },
        {
            key: "getLowestIndex",
            value: function getLowestIndex() {
                return this.lowestIndex;
            }
        },
        {
            key: "getSuccessorVertices",
            value: function getSuccessorVertices() {
                return this.successorVertices;
            }
        },
        {
            key: "isUnindexed",
            value: function isUnindexed() {
                var unindexed = this.index < 0; ///
                return unindexed;
            }
        },
        {
            key: "isLowest",
            value: function isLowest() {
                var lowest = this.index === this.lowestIndex; ///
                return lowest;
            }
        },
        {
            key: "setIndex",
            value: function setIndex(index) {
                this.index = index;
            }
        },
        {
            key: "setStacked",
            value: function setStacked(stacked) {
                this.stacked = stacked;
            }
        },
        {
            key: "setVisited",
            value: function setVisited(visited) {
                this.visited = visited;
            }
        },
        {
            key: "setLowestIndex",
            value: function setLowestIndex(lowestIndex) {
                this.lowestIndex = lowestIndex;
            }
        },
        {
            key: "setSuccessorVertices",
            value: function setSuccessorVertices(successorVertices) {
                this.successorVertices = successorVertices;
            }
        },
        {
            key: "updateLowestIndex",
            value: function updateLowestIndex(lowestIndex) {
                if (lowestIndex < this.lowestIndex) {
                    this.lowestIndex = lowestIndex;
                }
            }
        }
    ], [
        {
            key: "fromVertexName",
            value: function fromVertexName(vertexName) {
                var name = vertexName, index = -1, stacked = false, visited = false, lowestIndex = -1, successorVertices = [], vertex = new Vertex(name, index, stacked, visited, lowestIndex, successorVertices);
                return vertex;
            }
        }
    ]);
    return Vertex;
}();
exports.default = Vertex;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaC92ZXJ0ZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCBzdGFja2VkLCB2aXNpdGVkLCBsb3dlc3RJbmRleCwgc3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnN0YWNrZWQgPSBzdGFja2VkO1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gICAgdGhpcy5sb3dlc3RJbmRleCA9IGxvd2VzdEluZGV4O1xuICAgIHRoaXMuc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgaXNTdGFja2VkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YWNrZWQ7XG4gIH1cblxuICBpc1Zpc2l0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRlZDtcbiAgfVxuXG4gIGdldExvd2VzdEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxvd2VzdEluZGV4O1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cbiAgXG4gIGlzVW5pbmRleGVkKCkge1xuICAgIGNvbnN0IHVuaW5kZXhlZCA9ICh0aGlzLmluZGV4IDwgMCk7IC8vL1xuICAgIFxuICAgIHJldHVybiB1bmluZGV4ZWQ7XG4gIH1cbiAgXG4gIGlzTG93ZXN0KCkge1xuICAgIGNvbnN0IGxvd2VzdCA9ICh0aGlzLmluZGV4ID09PSB0aGlzLmxvd2VzdEluZGV4KTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIGxvd2VzdDtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0U3RhY2tlZChzdGFja2VkKSB7XG4gICAgdGhpcy5zdGFja2VkID0gc3RhY2tlZDtcbiAgfVxuXG4gIHNldFZpc2l0ZWQodmlzaXRlZCkge1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gIH1cbiAgXG4gIHNldExvd2VzdEluZGV4KGxvd2VzdEluZGV4KSB7XG4gICAgdGhpcy5sb3dlc3RJbmRleCA9IGxvd2VzdEluZGV4O1xuICB9XG5cbiAgc2V0U3VjY2Vzc29yVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLnN1Y2Nlc3NvclZlcnRpY2VzID0gIHN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG4gIFxuICB1cGRhdGVMb3dlc3RJbmRleChsb3dlc3RJbmRleCkge1xuICAgIGlmIChsb3dlc3RJbmRleCA8IHRoaXMubG93ZXN0SW5kZXgpIHtcbiAgICAgIHRoaXMubG93ZXN0SW5kZXggPSBsb3dlc3RJbmRleDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgICBzdGFja2VkID0gZmFsc2UsXG4gICAgICAgICAgdmlzaXRlZCA9IGZhbHNlLFxuICAgICAgICAgIGxvd2VzdEluZGV4ID0gLTEsXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCBzdGFja2VkLCB2aXNpdGVkLCBsb3dlc3RJbmRleCwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLE1BQUE7YUFBQSxNQUFBLENBQ0EsSUFBQSxFQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsT0FBQSxFQUFBLFdBQUEsRUFBQSxpQkFBQTs4QkFEQSxNQUFBO2FBRUEsSUFBQSxHQUFBLElBQUE7YUFDQSxLQUFBLEdBQUEsS0FBQTthQUNBLE9BQUEsR0FBQSxPQUFBO2FBQ0EsT0FBQSxHQUFBLE9BQUE7YUFDQSxXQUFBLEdBQUEsV0FBQTthQUNBLGlCQUFBLEdBQUEsaUJBQUE7O2lCQVBBLE1BQUE7O0FBVUEsZUFBQSxHQUFBLE9BQUE7NEJBQUEsT0FBQTs0QkFDQSxJQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQTs0QkFDQSxLQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFNBQUE7NEJBQUEsU0FBQTs0QkFDQSxPQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFNBQUE7NEJBQUEsU0FBQTs0QkFDQSxPQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGNBQUE7NEJBQUEsY0FBQTs0QkFDQSxXQUFBOzs7O0FBR0EsZUFBQSxHQUFBLG9CQUFBOzRCQUFBLG9CQUFBOzRCQUNBLGlCQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFdBQUE7NEJBQUEsV0FBQTtvQkFDQSxTQUFBLFFBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTt1QkFFQSxTQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQTtvQkFDQSxNQUFBLFFBQUEsS0FBQSxVQUFBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTt1QkFFQSxNQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQSxDQUFBLEtBQUE7cUJBQ0EsS0FBQSxHQUFBLEtBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsVUFBQTs0QkFBQSxVQUFBLENBQUEsT0FBQTtxQkFDQSxPQUFBLEdBQUEsT0FBQTs7OztBQUdBLGVBQUEsR0FBQSxVQUFBOzRCQUFBLFVBQUEsQ0FBQSxPQUFBO3FCQUNBLE9BQUEsR0FBQSxPQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGNBQUE7NEJBQUEsY0FBQSxDQUFBLFdBQUE7cUJBQ0EsV0FBQSxHQUFBLFdBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsb0JBQUE7NEJBQUEsb0JBQUEsQ0FBQSxpQkFBQTtxQkFDQSxpQkFBQSxHQUFBLGlCQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGlCQUFBOzRCQUFBLGlCQUFBLENBQUEsV0FBQTtvQkFDQSxXQUFBLFFBQUEsV0FBQTt5QkFDQSxXQUFBLEdBQUEsV0FBQTs7Ozs7O0FBSUEsZUFBQSxHQUFBLGNBQUE7NEJBQUEsY0FBQSxDQUFBLFVBQUE7b0JBQ0EsSUFBQSxHQUFBLFVBQUEsRUFDQSxLQUFBLElBQUEsQ0FBQSxFQUNBLE9BQUEsR0FBQSxLQUFBLEVBQ0EsT0FBQSxHQUFBLEtBQUEsRUFDQSxXQUFBLElBQUEsQ0FBQSxFQUNBLGlCQUFBLE9BQ0EsTUFBQSxPQUFBLE1BQUEsQ0FBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsV0FBQSxFQUFBLGlCQUFBO3VCQUVBLE1BQUE7Ozs7V0FqRkEsTUFBQTs7a0JBQUEsTUFBQSJ9