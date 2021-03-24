"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _cycle = _interopRequireDefault(require("./graph/cycle"));
var _stack = _interopRequireDefault(require("./graph/stack"));
var _vertex = _interopRequireDefault(require("./graph/vertex"));
var _stronglyConnectedComponent = _interopRequireDefault(require("./graph/stronglyConnectedComponent"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var Graph = function() {
    function Graph(stronglyConnectedComponents, vertices, cycles) {
        _classCallCheck(this, Graph);
        this.stronglyConnectedComponents = stronglyConnectedComponents;
        this.vertices = vertices;
        this.cycles = cycles;
    }
    _createClass(Graph, [
        {
            key: "getStronglyConnectedComponents",
            value: function getStronglyConnectedComponents() {
                return this.stronglyConnectedComponents;
            }
        },
        {
            key: "getVertices",
            value: function getVertices() {
                return this.vertices;
            }
        },
        {
            key: "getCycles",
            value: function getCycles() {
                return this.cycles;
            }
        },
        {
            key: "isVertexPresent",
            value: function isVertexPresent(name) {
                var vertexPresent = this.vertices.some(function(vertex) {
                    var vertexName = vertex.getName();
                    if (vertexName === name) {
                        return true;
                    }
                });
                return vertexPresent;
            }
        }
    ], [
        {
            key: "fromVertexLiterals",
            value: function fromVertexLiterals(vertexLiterals) {
                var vertexMap = vertexLiterals.reduce(function(vertexMap1, vertexLiteral) {
                    addVertexLiteral(vertexMap1, vertexLiteral);
                    return vertexMap1;
                }, {
                }), vertices = verticesFromVertexMap(vertexMap), stronglyConnectedComponents = stronglyConnectedComponentsFromVertices(vertices), cycles = cyclesFromStronglyConnectedComponents(stronglyConnectedComponents), graph = new Graph(stronglyConnectedComponents, vertices, cycles);
                return graph;
            }
        }
    ]);
    return Graph;
}();
exports.default = Graph;
function addVertexLiteral(vertexMap, vertexLiteral) {
    var firstVertexLiteralElement = first(vertexLiteral), secondVertexLiteralElement = second(vertexLiteral), vertexName = firstVertexLiteralElement, descendantVertexNames = secondVertexLiteralElement; ///
    var successorVertices = descendantVertexNames.map(function(descendantVertexName) {
        var successorVertex;
        var successorVertexName = descendantVertexName, successorVertexExists = vertexMap.hasOwnProperty(successorVertexName);
        if (successorVertexExists) {
            successorVertex = vertexMap[successorVertexName];
        } else {
            successorVertex = _vertex.default.fromVertexName(successorVertexName);
            vertexMap[successorVertexName] = successorVertex;
        }
        return successorVertex;
    });
    var vertex;
    var vertexExists = vertexMap.hasOwnProperty(vertexName);
    if (vertexExists) {
        vertex = vertexMap[vertexName];
    } else {
        vertex = _vertex.default.fromVertexName(vertexName);
        vertexMap[vertexName] = vertex;
    }
    successorVertices = successorVertices.concat([]).reverse(); ///
    vertex.setSuccessorVertices(successorVertices);
}
function verticesFromVertexMap(vertexMap) {
    var vertexNames = Object.keys(vertexMap), vertices = vertexNames.map(function(vertexName) {
        var vertex = vertexMap[vertexName];
        return vertex;
    });
    return vertices;
}
function stronglyConnectedComponentsFromVertices(vertices) {
    var stack = new _stack.default(), stronglyConnectedComponents = [];
    var index = 0;
    function stronglyConnectVertex(vertex) {
        var lowestIndex = index; ///
        vertex.setIndex(index);
        vertex.setLowestIndex(lowestIndex);
        index++;
        stack.push(vertex);
        var successorVertices = vertex.getSuccessorVertices();
        successorVertices.forEach(function(successorVertex) {
            var successorVertexUnindexed = successorVertex.isUnindexed(), successorVertexNotStronglyConnected = successorVertexUnindexed; ///
            if (successorVertexNotStronglyConnected) {
                stronglyConnectVertex(successorVertex);
                var successorVertexLowestIndex = successorVertex.getLowestIndex();
                vertex.updateLowestIndex(successorVertexLowestIndex);
            } else {
                var successorVertexStacked = successorVertex.isStacked();
                if (successorVertexStacked) {
                    var successorVertexIndex = successorVertex.getIndex();
                    vertex.updateLowestIndex(successorVertexIndex);
                }
            }
        });
        var vertexLowest = vertex.isLowest();
        if (vertexLowest) {
            var stronglyConnectedComponent = _stronglyConnectedComponent.default.fromStackAndVertex(stack, vertex);
            stronglyConnectedComponents.push(stronglyConnectedComponent);
        }
    }
    vertices.forEach(function(vertex) {
        var vertexUnindexed = vertex.isUnindexed();
        if (vertexUnindexed) {
            stronglyConnectVertex(vertex);
        }
    });
    return stronglyConnectedComponents;
}
function cyclesFromStronglyConnectedComponents(stronglyConnectedComponents) {
    var cycles = stronglyConnectedComponents.reduce(function(cycles1, stronglyConnectedComponent) {
        var stronglyConnectedComponentCyclic = stronglyConnectedComponent.isCyclic();
        if (stronglyConnectedComponentCyclic) {
            var cycle = _cycle.default.fromStronglyConnectedComponent(stronglyConnectedComponent);
            cycles1.push(cycle);
        }
        return cycles1;
    }, []);
    return cycles;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDeWNsZSBmcm9tIFwiLi9ncmFwaC9jeWNsZVwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCIuL2dyYXBoL3N0YWNrXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL2dyYXBoL3ZlcnRleFwiO1xuaW1wb3J0IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50IGZyb20gXCIuL2dyYXBoL3N0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50XCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIHtcbiAgY29uc3RydWN0b3IgKHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cywgdmVydGljZXMsIGN5Y2xlcykge1xuICAgIHRoaXMuc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzID0gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzO1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLmN5Y2xlcyA9IGN5Y2xlcztcbiAgfVxuXG4gIGdldFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldEN5Y2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jeWNsZXM7XG4gIH1cbiAgXG4gIGlzVmVydGV4UHJlc2VudChuYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMudmVydGljZXMuc29tZSgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKTtcbiAgICAgIFxuICAgICAgaWYgKHZlcnRleE5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVydGV4UHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB2ZXJ0ZXhMaXRlcmFscy5yZWR1Y2UoKHZlcnRleE1hcCwgdmVydGV4TGl0ZXJhbCkgPT4ge1xuICAgICAgICAgICAgYWRkVmVydGV4TGl0ZXJhbCh2ZXJ0ZXhNYXAsIHZlcnRleExpdGVyYWwpOyAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4TWFwO1xuICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbVZlcnRleE1hcCh2ZXJ0ZXhNYXApLFxuICAgICAgICAgIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cyA9IHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50c0Zyb21WZXJ0aWNlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgY3ljbGVzID0gY3ljbGVzRnJvbVN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cyhzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMpLFxuICAgICAgICAgIGdyYXBoID0gbmV3IEdyYXBoKHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cywgdmVydGljZXMsIGN5Y2xlcyk7XG4gICAgXG4gICAgcmV0dXJuIGdyYXBoO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFZlcnRleExpdGVyYWwodmVydGV4TWFwLCB2ZXJ0ZXhMaXRlcmFsKSB7XG4gIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBzZWNvbmQodmVydGV4TGl0ZXJhbCksXG4gICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50LCAvLy9cbiAgICAgICAgZGVzY2VuZGFudFZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gIGxldCBzdWNjZXNzb3JWZXJ0aWNlcyA9IGRlc2NlbmRhbnRWZXJ0ZXhOYW1lcy5tYXAoKGRlc2NlbmRhbnRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgbGV0IHN1Y2Nlc3NvclZlcnRleDtcblxuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleE5hbWUgPSBkZXNjZW5kYW50VmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eShzdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIHN1Y2Nlc3NvclZlcnRleCA9IHZlcnRleE1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2Vzc29yVmVydGV4ID0gVmVydGV4LmZyb21WZXJ0ZXhOYW1lKHN1Y2Nlc3NvclZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXhNYXBbc3VjY2Vzc29yVmVydGV4TmFtZV0gPSBzdWNjZXNzb3JWZXJ0ZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgfSk7XG5cbiAgbGV0IHZlcnRleDtcblxuICBjb25zdCB2ZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhNYXAuaGFzT3duUHJvcGVydHkodmVydGV4TmFtZSk7XG5cbiAgaWYgKHZlcnRleEV4aXN0cykge1xuICAgIHZlcnRleCA9IHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXTtcbiAgfSBlbHNlIHtcbiAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB2ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gIH1cblxuICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRpY2VzLmNvbmNhdChbXSkucmV2ZXJzZSgpOyAvLy9cblxuICB2ZXJ0ZXguc2V0U3VjY2Vzc29yVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpO1xufVxuXG5mdW5jdGlvbiB2ZXJ0aWNlc0Zyb21WZXJ0ZXhNYXAodmVydGV4TWFwKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gT2JqZWN0LmtleXModmVydGV4TWFwKSxcbiAgICAgICAgdmVydGljZXMgPSB2ZXJ0ZXhOYW1lcy5tYXAoKHZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIFxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cblxuZnVuY3Rpb24gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzRnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IHN0YWNrID0gbmV3IFN0YWNrKCksXG4gICAgICAgIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cyA9IFtdO1xuXG4gIGxldCBpbmRleCA9IDA7XG5cbiAgZnVuY3Rpb24gc3Ryb25nbHlDb25uZWN0VmVydGV4KHZlcnRleCkge1xuICAgIGNvbnN0IGxvd2VzdEluZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHZlcnRleC5zZXRJbmRleChpbmRleCk7XG5cbiAgICB2ZXJ0ZXguc2V0TG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpO1xuXG4gICAgaW5kZXgrKztcblxuICAgIHN0YWNrLnB1c2godmVydGV4KTtcblxuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzID0gdmVydGV4LmdldFN1Y2Nlc3NvclZlcnRpY2VzKCk7XG5cbiAgICBzdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKChzdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZCA9IHN1Y2Nlc3NvclZlcnRleC5pc1VuaW5kZXhlZCgpLFxuICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQgPSBzdWNjZXNzb3JWZXJ0ZXhVbmluZGV4ZWQ7ICAvLy9cblxuICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleE5vdFN0cm9uZ2x5Q29ubmVjdGVkKSB7XG4gICAgICAgIHN0cm9uZ2x5Q29ubmVjdFZlcnRleChzdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldExvd2VzdEluZGV4KCk7XG5cbiAgICAgICAgdmVydGV4LnVwZGF0ZUxvd2VzdEluZGV4KHN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleFN0YWNrZWQgPSBzdWNjZXNzb3JWZXJ0ZXguaXNTdGFja2VkKCk7XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleFN0YWNrZWQpIHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgdmVydGV4LnVwZGF0ZUxvd2VzdEluZGV4KHN1Y2Nlc3NvclZlcnRleEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdmVydGV4TG93ZXN0ID0gdmVydGV4LmlzTG93ZXN0KCk7XG5cbiAgICBpZiAodmVydGV4TG93ZXN0KSB7XG4gICAgICBjb25zdCBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCA9IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50LmZyb21TdGFja0FuZFZlcnRleChzdGFjaywgdmVydGV4KTtcblxuICAgICAgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzLnB1c2goc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleFVuaW5kZXhlZCA9IHZlcnRleC5pc1VuaW5kZXhlZCgpO1xuXG4gICAgaWYgKHZlcnRleFVuaW5kZXhlZCkge1xuICAgICAgc3Ryb25nbHlDb25uZWN0VmVydGV4KHZlcnRleCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzO1xufVxuXG5mdW5jdGlvbiBjeWNsZXNGcm9tU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzKHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50cykge1xuICBjb25zdCBjeWNsZXMgPSBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHMucmVkdWNlKChjeWNsZXMsIHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRDeWNsaWMgPSBzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudC5pc0N5Y2xpYygpO1xuXG4gICAgaWYgKHN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50Q3ljbGljKSB7XG4gICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21TdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudChzdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudCk7XG5cbiAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGN5Y2xlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFVBQUE7SUFFQSxNQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSwyQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLEtBQUEsR0FQQSxVQUFBLGdCQU9BLEtBQUEsRUFBQSxNQUFBLEdBUEEsVUFBQSxn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