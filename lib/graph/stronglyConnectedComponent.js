"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
var StronglyConnectedComponent = function() {
    function StronglyConnectedComponent(vertices) {
        _classCallCheck(this, StronglyConnectedComponent);
        this.vertices = vertices;
    }
    _createClass(StronglyConnectedComponent, [
        {
            key: "getVertices",
            value: function getVertices() {
                return this.vertices;
            }
        },
        {
            key: "getVertexNames",
            value: function getVertexNames() {
                var vertexNames = this.vertices.map(function(vertex) {
                    var vertexName = vertex.getName();
                    return vertexName;
                });
                return vertexNames;
            }
        },
        {
            key: "getFirstVertexName",
            value: function getFirstVertexName() {
                var firstVertex = first(this.vertices), firstVertexName = firstVertex.getName();
                return firstVertexName;
            }
        },
        {
            key: "isCyclic",
            value: function isCyclic() {
                var verticesLength = this.vertices.length, cyclic = verticesLength > 1; ///
                return cyclic;
            }
        },
        {
            key: "isNonCyclic",
            value: function isNonCyclic() {
                var cyclic = this.isCyclic(), nonCyclic = !cyclic;
                return nonCyclic;
            }
        },
        {
            key: "mapVertexNames",
            value: function mapVertexNames(callback) {
                var vertexNames = this.getVertexNames();
                return vertexNames.map(callback);
            }
        },
        {
            key: "reduceVertexNames",
            value: function reduceVertexNames(callback, initialValue) {
                var vertexNames = this.getVertexNames();
                return vertexNames.reduce(callback, initialValue);
            }
        }
    ], [
        {
            key: "fromStackAndVertex",
            value: function fromStackAndVertex(stack, vertex) {
                var stackVertices = [];
                var stackVertex;
                do {
                    stackVertex = stack.pop();
                    stackVertices.push(stackVertex);
                }while (stackVertex !== vertex)
                var vertices = stackVertices, stronglyConnectedComponent = new StronglyConnectedComponent(vertices);
                return stronglyConnectedComponent;
            }
        }
    ]);
    return StronglyConnectedComponent;
}();
exports.default = StronglyConnectedComponent;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaC9zdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy52ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdmVydGV4TmFtZSA9IHZlcnRleC5nZXROYW1lKCk7XG4gICAgICBcbiAgICAgIHJldHVybiB2ZXJ0ZXhOYW1lO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEZpcnN0VmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0VmVydGV4TmFtZSA9IGZpcnN0VmVydGV4LmdldE5hbWUoKTtcblxuICAgIHJldHVybiBmaXJzdFZlcnRleE5hbWU7XG4gIH1cblxuICBpc0N5Y2xpYygpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IHRoaXMudmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xpYyA9ICh2ZXJ0aWNlc0xlbmd0aCA+IDEpOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGN5Y2xpYztcbiAgfVxuXG4gIGlzTm9uQ3ljbGljKCkge1xuICAgIGNvbnN0IGN5Y2xpYyA9IHRoaXMuaXNDeWNsaWMoKSxcbiAgICAgICAgICBub25DeWNsaWMgPSAhY3ljbGljO1xuICAgIFxuICAgIHJldHVybiBub25DeWNsaWM7XG4gIH1cbiAgXG4gIG1hcFZlcnRleE5hbWVzKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzLm1hcChjYWxsYmFjayk7XG4gIH1cblxuICByZWR1Y2VWZXJ0ZXhOYW1lcyhjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXMucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGFja0FuZFZlcnRleChzdGFjaywgdmVydGV4KSB7XG4gICAgY29uc3Qgc3RhY2tWZXJ0aWNlcyA9IFtdO1xuICAgIFxuICAgIGxldCBzdGFja1ZlcnRleDtcblxuICAgIGRvIHtcbiAgICAgIHN0YWNrVmVydGV4ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgIHN0YWNrVmVydGljZXMucHVzaChzdGFja1ZlcnRleClcbiAgICB9IHdoaWxlIChzdGFja1ZlcnRleCAhPT0gdmVydGV4KTtcbiAgICBcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHN0YWNrVmVydGljZXMsIC8vLyBcbiAgICAgICAgICBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCA9IG5ldyBTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCh2ZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsS0FBQSxHQUZBLFVBQUEsZ0JBRUEsS0FBQTtJQUVBLDBCQUFBO2FBQUEsMEJBQUEsQ0FDQSxRQUFBOzhCQURBLDBCQUFBO2FBRUEsUUFBQSxHQUFBLFFBQUE7O2lCQUZBLDBCQUFBOztBQUtBLGVBQUEsR0FBQSxXQUFBOzRCQUFBLFdBQUE7NEJBQ0EsUUFBQTs7OztBQUdBLGVBQUEsR0FBQSxjQUFBOzRCQUFBLGNBQUE7b0JBQ0EsV0FBQSxRQUFBLFFBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQTt3QkFDQSxVQUFBLEdBQUEsTUFBQSxDQUFBLE9BQUE7MkJBRUEsVUFBQTs7dUJBR0EsV0FBQTs7OztBQUdBLGVBQUEsR0FBQSxrQkFBQTs0QkFBQSxrQkFBQTtvQkFDQSxXQUFBLEdBQUEsS0FBQSxNQUFBLFFBQUEsR0FDQSxlQUFBLEdBQUEsV0FBQSxDQUFBLE9BQUE7dUJBRUEsZUFBQTs7OztBQUdBLGVBQUEsR0FBQSxRQUFBOzRCQUFBLFFBQUE7b0JBQ0EsY0FBQSxRQUFBLFFBQUEsQ0FBQSxNQUFBLEVBQ0EsTUFBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7dUJBRUEsTUFBQTs7OztBQUdBLGVBQUEsR0FBQSxXQUFBOzRCQUFBLFdBQUE7b0JBQ0EsTUFBQSxRQUFBLFFBQUEsSUFDQSxTQUFBLElBQUEsTUFBQTt1QkFFQSxTQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGNBQUE7NEJBQUEsY0FBQSxDQUFBLFFBQUE7b0JBQ0EsV0FBQSxRQUFBLGNBQUE7dUJBRUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxRQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGlCQUFBOzRCQUFBLGlCQUFBLENBQUEsUUFBQSxFQUFBLFlBQUE7b0JBQ0EsV0FBQSxRQUFBLGNBQUE7dUJBRUEsV0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLEVBQUEsWUFBQTs7Ozs7QUFHQSxlQUFBLEdBQUEsa0JBQUE7NEJBQUEsa0JBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtvQkFDQSxhQUFBO29CQUVBLFdBQUE7O0FBR0EsK0JBQUEsR0FBQSxLQUFBLENBQUEsR0FBQTtBQUVBLGlDQUFBLENBQUEsSUFBQSxDQUFBLFdBQUE7d0JBQ0EsV0FBQSxLQUFBLE1BQUE7b0JBRUEsUUFBQSxHQUFBLGFBQUEsRUFDQSwwQkFBQSxPQUFBLDBCQUFBLENBQUEsUUFBQTt1QkFFQSwwQkFBQTs7OztXQWxFQSwwQkFBQTs7a0JBQUEsMEJBQUEifQ==