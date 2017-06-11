'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cycle = require('./graph/cycle'),
    Stack = require('./graph/stack'),
    Vertex = require('./graph/vertex'),
    Component = require('./graph/component');

var Graph = function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.vertexmap = {};
  }

  _createClass(Graph, [{
    key: 'getVertices',
    value: function getVertices() {
      var names = Object.keys(this.vertexmap),
          vertices = names.map(function (name) {
        var vertex = this.vertexmap[name];

        return vertex;
      }.bind(this));

      return vertices;
    }
  }, {
    key: 'generateCycles',
    value: function generateCycles() {
      var components = this.generateComponents(),
          cycles = components.reduce(function (cycles, component) {
        var componentCyclic = component.isCyclic();

        if (componentCyclic) {
          var cycle = Cycle.fromComponent(component);

          cycles.push(cycle);
        }

        return cycles;
      }, []);

      return cycles;
    }
  }, {
    key: 'generateComponents',
    value: function generateComponents() {
      var stack = new Stack(),
          vertices = this.getVertices(),
          components = [];

      var index = 0;

      function stronglyConnectVertex(vertex) {
        var lowestIndex = index; ///

        vertex.setIndex(index);

        vertex.setLowestIndex(lowestIndex);

        index++;

        stack.push(vertex);

        var successorVertices = vertex.getSuccessorVertices();

        successorVertices.forEach(function (successorVertex) {
          var successorVertexUnindexed = successorVertex.isUnindexed(),
              successorVertexNotStronglyConnected = successorVertexUnindexed; ///

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
          var component = Component.fromStackAndVertex(stack, vertex);

          components.push(component);
        }
      }

      vertices.forEach(function (vertex) {
        var vertexUnindexed = vertex.isUnindexed();

        if (vertexUnindexed) {
          stronglyConnectVertex(vertex);
        }
      });

      return components;
    }
  }, {
    key: 'isVertexPresent',
    value: function isVertexPresent(vertexName) {
      var vertexPresent = this.vertexmap[vertexName] !== undefined;

      return vertexPresent;
    }
  }, {
    key: 'addVertex',
    value: function addVertex(name, descendantVertexNames) {
      var successorVertices = descendantVertexNames.map(function (descendantVertexName) {
        var successorVertexName = descendantVertexName; ///

        var successorVertex = this.vertexmap[successorVertexName];

        if (successorVertex === undefined) {
          successorVertex = Vertex.fromName(successorVertexName);

          this.vertexmap[successorVertexName] = successorVertex;
        }

        return successorVertex;
      }.bind(this));

      var vertex = this.vertexmap[name];

      if (vertex === undefined) {
        vertex = Vertex.fromName(name);

        this.vertexmap[name] = vertex;
      }

      successorVertices = successorVertices.concat([]).reverse(); ///

      vertex.setSuccessorVertices(successorVertices);
    }
  }]);

  return Graph;
}();

module.exports = Graph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDeWNsZSIsInJlcXVpcmUiLCJTdGFjayIsIlZlcnRleCIsIkNvbXBvbmVudCIsIkdyYXBoIiwidmVydGV4bWFwIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwidmVydGljZXMiLCJtYXAiLCJuYW1lIiwidmVydGV4IiwiYmluZCIsImNvbXBvbmVudHMiLCJnZW5lcmF0ZUNvbXBvbmVudHMiLCJjeWNsZXMiLCJyZWR1Y2UiLCJjb21wb25lbnQiLCJjb21wb25lbnRDeWNsaWMiLCJpc0N5Y2xpYyIsImN5Y2xlIiwiZnJvbUNvbXBvbmVudCIsInB1c2giLCJzdGFjayIsImdldFZlcnRpY2VzIiwiaW5kZXgiLCJzdHJvbmdseUNvbm5lY3RWZXJ0ZXgiLCJsb3dlc3RJbmRleCIsInNldEluZGV4Iiwic2V0TG93ZXN0SW5kZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImdldFN1Y2Nlc3NvclZlcnRpY2VzIiwiZm9yRWFjaCIsInN1Y2Nlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZCIsImlzVW5pbmRleGVkIiwic3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQiLCJzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCIsImdldExvd2VzdEluZGV4IiwidXBkYXRlTG93ZXN0SW5kZXgiLCJzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkIiwiaXNTdGFja2VkIiwic3VjY2Vzc29yVmVydGV4SW5kZXgiLCJnZXRJbmRleCIsInZlcnRleExvd2VzdCIsImlzTG93ZXN0IiwiZnJvbVN0YWNrQW5kVmVydGV4IiwidmVydGV4VW5pbmRleGVkIiwidmVydGV4TmFtZSIsInZlcnRleFByZXNlbnQiLCJ1bmRlZmluZWQiLCJkZXNjZW5kYW50VmVydGV4TmFtZXMiLCJkZXNjZW5kYW50VmVydGV4TmFtZSIsInN1Y2Nlc3NvclZlcnRleE5hbWUiLCJmcm9tTmFtZSIsImNvbmNhdCIsInJldmVyc2UiLCJzZXRT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YXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDeWNsZSA9IHJlcXVpcmUoJy4vZ3JhcGgvY3ljbGUnKSxcbiAgICAgIFN0YWNrID0gcmVxdWlyZSgnLi9ncmFwaC9zdGFjaycpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZSgnLi9ncmFwaC92ZXJ0ZXgnKSxcbiAgICAgIENvbXBvbmVudCA9IHJlcXVpcmUoJy4vZ3JhcGgvY29tcG9uZW50Jyk7XG5cbmNsYXNzIEdyYXBoIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMudmVydGV4bWFwID0ge307XG4gIH1cbiAgXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhtYXApLFxuICAgICAgICAgIHZlcnRpY2VzID0gbmFtZXMubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGljZXM7ICAgICAgICBcbiAgfVxuXG4gIGdlbmVyYXRlQ3ljbGVzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50cygpLFxuICAgICAgICAgIGN5Y2xlcyA9IGNvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uKGN5Y2xlcywgY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRDeWNsaWMgPSBjb21wb25lbnQuaXNDeWNsaWMoKTtcbiAgXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Q3ljbGljKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN5Y2xlID0gQ3ljbGUuZnJvbUNvbXBvbmVudChjb21wb25lbnQpO1xuICBcbiAgICAgICAgICAgICAgY3ljbGVzLnB1c2goY3ljbGUpO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBjeWNsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGN5Y2xlcztcbiAgfVxuXG4gIGdlbmVyYXRlQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBzdGFjayA9IG5ldyBTdGFjaygpLFxuICAgICAgICAgIHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIGNvbXBvbmVudHMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBmdW5jdGlvbiBzdHJvbmdseUNvbm5lY3RWZXJ0ZXgodmVydGV4KSB7XG4gICAgICBjb25zdCBsb3dlc3RJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICAgIHZlcnRleC5zZXRJbmRleChpbmRleCk7XG5cbiAgICAgIHZlcnRleC5zZXRMb3dlc3RJbmRleChsb3dlc3RJbmRleCk7XG5cbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIHN0YWNrLnB1c2godmVydGV4KTtcblxuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGljZXMgPSB2ZXJ0ZXguZ2V0U3VjY2Vzc29yVmVydGljZXMoKTtcblxuICAgICAgc3VjY2Vzc29yVmVydGljZXMuZm9yRWFjaChmdW5jdGlvbihzdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4VW5pbmRleGVkID0gc3VjY2Vzc29yVmVydGV4LmlzVW5pbmRleGVkKCksXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5vdFN0cm9uZ2x5Q29ubmVjdGVkID0gc3VjY2Vzc29yVmVydGV4VW5pbmRleGVkOyAgLy8vXG5cbiAgICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleE5vdFN0cm9uZ2x5Q29ubmVjdGVkKSB7XG4gICAgICAgICAgc3Ryb25nbHlDb25uZWN0VmVydGV4KHN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRMb3dlc3RJbmRleCgpO1xuXG4gICAgICAgICAgdmVydGV4LnVwZGF0ZUxvd2VzdEluZGV4KHN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkID0gc3VjY2Vzc29yVmVydGV4LmlzU3RhY2tlZCgpO1xuXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleFN0YWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgICAgIHZlcnRleC51cGRhdGVMb3dlc3RJbmRleChzdWNjZXNzb3JWZXJ0ZXhJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdmVydGV4TG93ZXN0ID0gdmVydGV4LmlzTG93ZXN0KCk7XG5cbiAgICAgIGlmICh2ZXJ0ZXhMb3dlc3QpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50LmZyb21TdGFja0FuZFZlcnRleChzdGFjaywgdmVydGV4KTtcblxuICAgICAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgY29uc3QgdmVydGV4VW5pbmRleGVkID0gdmVydGV4LmlzVW5pbmRleGVkKCk7XG5cbiAgICAgIGlmICh2ZXJ0ZXhVbmluZGV4ZWQpIHtcbiAgICAgICAgc3Ryb25nbHlDb25uZWN0VmVydGV4KHZlcnRleCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudCh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9ICh0aGlzLnZlcnRleG1hcFt2ZXJ0ZXhOYW1lXSAhPT0gdW5kZWZpbmVkKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4KG5hbWUsIGRlc2NlbmRhbnRWZXJ0ZXhOYW1lcykge1xuICAgIGxldCBzdWNjZXNzb3JWZXJ0aWNlcyA9IGRlc2NlbmRhbnRWZXJ0ZXhOYW1lcy5tYXAoZnVuY3Rpb24oZGVzY2VuZGFudFZlcnRleE5hbWUpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleE5hbWUgPSBkZXNjZW5kYW50VmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICBsZXQgc3VjY2Vzc29yVmVydGV4ID0gdGhpcy52ZXJ0ZXhtYXBbc3VjY2Vzc29yVmVydGV4TmFtZV07XG5cbiAgICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdWNjZXNzb3JWZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWUoc3VjY2Vzc29yVmVydGV4TmFtZSk7XG5cbiAgICAgICAgdGhpcy52ZXJ0ZXhtYXBbc3VjY2Vzc29yVmVydGV4TmFtZV0gPSBzdWNjZXNzb3JWZXJ0ZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXg7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIGxldCB2ZXJ0ZXggPSB0aGlzLnZlcnRleG1hcFtuYW1lXTtcblxuICAgIGlmICh2ZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lKG5hbWUpO1xuXG4gICAgICB0aGlzLnZlcnRleG1hcFtuYW1lXSA9IHZlcnRleDtcbiAgICB9XG5cbiAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRpY2VzLmNvbmNhdChbXSkucmV2ZXJzZSgpOyAvLy9cblxuICAgIHZlcnRleC5zZXRTdWNjZXNzb3JWZXJ0aWNlcyhzdWNjZXNzb3JWZXJ0aWNlcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcmFwaDtcbiJdfQ==