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
        var successorVertex = void 0;

        var successorVertexName = descendantVertexName,
            ///
        successorVertexExists = this.vertexmap.hasOwnProperty(successorVertexName);

        if (successorVertexExists) {
          successorVertex = this.vertexmap[successorVertexName];
        } else {
          successorVertex = Vertex.fromName(successorVertexName);

          this.vertexmap[successorVertexName] = successorVertex;
        }

        return successorVertex;
      }.bind(this));

      var vertex = void 0;

      var vertexExists = this.vertexmap.hasOwnProperty(name);

      if (vertexExists) {
        vertex = this.vertexmap[name];
      } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ncmFwaC5qcyJdLCJuYW1lcyI6WyJDeWNsZSIsInJlcXVpcmUiLCJTdGFjayIsIlZlcnRleCIsIkNvbXBvbmVudCIsIkdyYXBoIiwidmVydGV4bWFwIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwidmVydGljZXMiLCJtYXAiLCJuYW1lIiwidmVydGV4IiwiYmluZCIsImNvbXBvbmVudHMiLCJnZW5lcmF0ZUNvbXBvbmVudHMiLCJjeWNsZXMiLCJyZWR1Y2UiLCJjb21wb25lbnQiLCJjb21wb25lbnRDeWNsaWMiLCJpc0N5Y2xpYyIsImN5Y2xlIiwiZnJvbUNvbXBvbmVudCIsInB1c2giLCJzdGFjayIsImdldFZlcnRpY2VzIiwiaW5kZXgiLCJzdHJvbmdseUNvbm5lY3RWZXJ0ZXgiLCJsb3dlc3RJbmRleCIsInNldEluZGV4Iiwic2V0TG93ZXN0SW5kZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImdldFN1Y2Nlc3NvclZlcnRpY2VzIiwiZm9yRWFjaCIsInN1Y2Nlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZCIsImlzVW5pbmRleGVkIiwic3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQiLCJzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCIsImdldExvd2VzdEluZGV4IiwidXBkYXRlTG93ZXN0SW5kZXgiLCJzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkIiwiaXNTdGFja2VkIiwic3VjY2Vzc29yVmVydGV4SW5kZXgiLCJnZXRJbmRleCIsInZlcnRleExvd2VzdCIsImlzTG93ZXN0IiwiZnJvbVN0YWNrQW5kVmVydGV4IiwidmVydGV4VW5pbmRleGVkIiwidmVydGV4TmFtZSIsInZlcnRleFByZXNlbnQiLCJ1bmRlZmluZWQiLCJkZXNjZW5kYW50VmVydGV4TmFtZXMiLCJkZXNjZW5kYW50VmVydGV4TmFtZSIsInN1Y2Nlc3NvclZlcnRleE5hbWUiLCJzdWNjZXNzb3JWZXJ0ZXhFeGlzdHMiLCJoYXNPd25Qcm9wZXJ0eSIsImZyb21OYW1lIiwidmVydGV4RXhpc3RzIiwiY29uY2F0IiwicmV2ZXJzZSIsInNldFN1Y2Nlc3NvclZlcnRpY2VzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsZUFBUixDQUFkO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxlQUFSLENBRGQ7QUFBQSxJQUVNRSxTQUFTRixRQUFRLGdCQUFSLENBRmY7QUFBQSxJQUdNRyxZQUFZSCxRQUFRLG1CQUFSLENBSGxCOztJQUtNSSxLO0FBQ0osbUJBQWU7QUFBQTs7QUFDYixTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixVQUFNQyxRQUFRQyxPQUFPQyxJQUFQLENBQVksS0FBS0gsU0FBakIsQ0FBZDtBQUFBLFVBQ01JLFdBQVdILE1BQU1JLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDbEMsWUFBTUMsU0FBUyxLQUFLUCxTQUFMLENBQWVNLElBQWYsQ0FBZjs7QUFFQSxlQUFPQyxNQUFQO0FBQ0QsT0FKb0IsQ0FJbkJDLElBSm1CLENBSWQsSUFKYyxDQUFWLENBRGpCOztBQU9BLGFBQU9KLFFBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1LLGFBQWEsS0FBS0Msa0JBQUwsRUFBbkI7QUFBQSxVQUNNQyxTQUFTRixXQUFXRyxNQUFYLENBQWtCLFVBQVNELE1BQVQsRUFBaUJFLFNBQWpCLEVBQTRCO0FBQ3JELFlBQU1DLGtCQUFrQkQsVUFBVUUsUUFBVixFQUF4Qjs7QUFFQSxZQUFJRCxlQUFKLEVBQXFCO0FBQ25CLGNBQU1FLFFBQVF0QixNQUFNdUIsYUFBTixDQUFvQkosU0FBcEIsQ0FBZDs7QUFFQUYsaUJBQU9PLElBQVAsQ0FBWUYsS0FBWjtBQUNEOztBQUVELGVBQU9MLE1BQVA7QUFDRCxPQVZRLEVBVU4sRUFWTSxDQURmOztBQWFBLGFBQU9BLE1BQVA7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNUSxRQUFRLElBQUl2QixLQUFKLEVBQWQ7QUFBQSxVQUNNUSxXQUFXLEtBQUtnQixXQUFMLEVBRGpCO0FBQUEsVUFFTVgsYUFBYSxFQUZuQjs7QUFJQSxVQUFJWSxRQUFRLENBQVo7O0FBRUEsZUFBU0MscUJBQVQsQ0FBK0JmLE1BQS9CLEVBQXVDO0FBQ3JDLFlBQU1nQixjQUFjRixLQUFwQixDQURxQyxDQUNUOztBQUU1QmQsZUFBT2lCLFFBQVAsQ0FBZ0JILEtBQWhCOztBQUVBZCxlQUFPa0IsY0FBUCxDQUFzQkYsV0FBdEI7O0FBRUFGOztBQUVBRixjQUFNRCxJQUFOLENBQVdYLE1BQVg7O0FBRUEsWUFBTW1CLG9CQUFvQm5CLE9BQU9vQixvQkFBUCxFQUExQjs7QUFFQUQsMEJBQWtCRSxPQUFsQixDQUEwQixVQUFTQyxlQUFULEVBQTBCO0FBQ2xELGNBQU1DLDJCQUEyQkQsZ0JBQWdCRSxXQUFoQixFQUFqQztBQUFBLGNBQ01DLHNDQUFzQ0Ysd0JBRDVDLENBRGtELENBRXFCOztBQUV2RSxjQUFJRSxtQ0FBSixFQUF5QztBQUN2Q1Ysa0NBQXNCTyxlQUF0Qjs7QUFFQSxnQkFBTUksNkJBQTZCSixnQkFBZ0JLLGNBQWhCLEVBQW5DOztBQUVBM0IsbUJBQU80QixpQkFBUCxDQUF5QkYsMEJBQXpCO0FBQ0QsV0FORCxNQU1PO0FBQ0wsZ0JBQU1HLHlCQUF5QlAsZ0JBQWdCUSxTQUFoQixFQUEvQjs7QUFFQSxnQkFBSUQsc0JBQUosRUFBNEI7QUFDMUIsa0JBQU1FLHVCQUF1QlQsZ0JBQWdCVSxRQUFoQixFQUE3Qjs7QUFFQWhDLHFCQUFPNEIsaUJBQVAsQ0FBeUJHLG9CQUF6QjtBQUNEO0FBQ0Y7QUFDRixTQW5CRDs7QUFxQkEsWUFBTUUsZUFBZWpDLE9BQU9rQyxRQUFQLEVBQXJCOztBQUVBLFlBQUlELFlBQUosRUFBa0I7QUFDaEIsY0FBTTNCLFlBQVlmLFVBQVU0QyxrQkFBVixDQUE2QnZCLEtBQTdCLEVBQW9DWixNQUFwQyxDQUFsQjs7QUFFQUUscUJBQVdTLElBQVgsQ0FBZ0JMLFNBQWhCO0FBQ0Q7QUFDRjs7QUFFRFQsZUFBU3dCLE9BQVQsQ0FBaUIsVUFBU3JCLE1BQVQsRUFBaUI7QUFDaEMsWUFBTW9DLGtCQUFrQnBDLE9BQU93QixXQUFQLEVBQXhCOztBQUVBLFlBQUlZLGVBQUosRUFBcUI7QUFDbkJyQixnQ0FBc0JmLE1BQXRCO0FBQ0Q7QUFDRixPQU5EOztBQVFBLGFBQU9FLFVBQVA7QUFDRDs7O29DQUVlbUMsVSxFQUFZO0FBQzFCLFVBQU1DLGdCQUFpQixLQUFLN0MsU0FBTCxDQUFlNEMsVUFBZixNQUErQkUsU0FBdEQ7O0FBRUEsYUFBT0QsYUFBUDtBQUNEOzs7OEJBRVN2QyxJLEVBQU15QyxxQixFQUF1QjtBQUNyQyxVQUFJckIsb0JBQW9CcUIsc0JBQXNCMUMsR0FBdEIsQ0FBMEIsVUFBUzJDLG9CQUFULEVBQStCO0FBQy9FLFlBQUluQix3QkFBSjs7QUFFQSxZQUFNb0Isc0JBQXNCRCxvQkFBNUI7QUFBQSxZQUFtRDtBQUM3Q0UsZ0NBQXdCLEtBQUtsRCxTQUFMLENBQWVtRCxjQUFmLENBQThCRixtQkFBOUIsQ0FEOUI7O0FBR0EsWUFBSUMscUJBQUosRUFBMkI7QUFDekJyQiw0QkFBa0IsS0FBSzdCLFNBQUwsQ0FBZWlELG1CQUFmLENBQWxCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xwQiw0QkFBa0JoQyxPQUFPdUQsUUFBUCxDQUFnQkgsbUJBQWhCLENBQWxCOztBQUVBLGVBQUtqRCxTQUFMLENBQWVpRCxtQkFBZixJQUFzQ3BCLGVBQXRDO0FBQ0Q7O0FBRUQsZUFBT0EsZUFBUDtBQUNELE9BZmlELENBZWhEckIsSUFmZ0QsQ0FlM0MsSUFmMkMsQ0FBMUIsQ0FBeEI7O0FBaUJBLFVBQUlELGVBQUo7O0FBRUEsVUFBTThDLGVBQWUsS0FBS3JELFNBQUwsQ0FBZW1ELGNBQWYsQ0FBOEI3QyxJQUE5QixDQUFyQjs7QUFFQSxVQUFJK0MsWUFBSixFQUFrQjtBQUNoQjlDLGlCQUFTLEtBQUtQLFNBQUwsQ0FBZU0sSUFBZixDQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xDLGlCQUFTVixPQUFPdUQsUUFBUCxDQUFnQjlDLElBQWhCLENBQVQ7O0FBRUEsYUFBS04sU0FBTCxDQUFlTSxJQUFmLElBQXVCQyxNQUF2QjtBQUNEOztBQUVEbUIsMEJBQW9CQSxrQkFBa0I0QixNQUFsQixDQUF5QixFQUF6QixFQUE2QkMsT0FBN0IsRUFBcEIsQ0E5QnFDLENBOEJ1Qjs7QUFFNURoRCxhQUFPaUQsb0JBQVAsQ0FBNEI5QixpQkFBNUI7QUFDRDs7Ozs7O0FBR0grQixPQUFPQyxPQUFQLEdBQWlCM0QsS0FBakIiLCJmaWxlIjoiZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN5Y2xlID0gcmVxdWlyZSgnLi9ncmFwaC9jeWNsZScpLFxuICAgICAgU3RhY2sgPSByZXF1aXJlKCcuL2dyYXBoL3N0YWNrJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuL2dyYXBoL3ZlcnRleCcpLFxuICAgICAgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9ncmFwaC9jb21wb25lbnQnKTtcblxuY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52ZXJ0ZXhtYXAgPSB7fTtcbiAgfVxuICBcbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleG1hcCksXG4gICAgICAgICAgdmVydGljZXMgPSBuYW1lcy5tYXAoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0ZXhtYXBbbmFtZV07XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0aWNlczsgICAgICAgIFxuICB9XG5cbiAgZ2VuZXJhdGVDeWNsZXMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuZ2VuZXJhdGVDb21wb25lbnRzKCksXG4gICAgICAgICAgY3ljbGVzID0gY29tcG9uZW50cy5yZWR1Y2UoZnVuY3Rpb24oY3ljbGVzLCBjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEN5Y2xpYyA9IGNvbXBvbmVudC5pc0N5Y2xpYygpO1xuICBcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRDeWNsaWMpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3ljbGUgPSBDeWNsZS5mcm9tQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIFxuICAgICAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGN5Y2xlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3ljbGVzO1xuICB9XG5cbiAgZ2VuZXJhdGVDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IHN0YWNrID0gbmV3IFN0YWNrKCksXG4gICAgICAgICAgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgY29tcG9uZW50cyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZ1bmN0aW9uIHN0cm9uZ2x5Q29ubmVjdFZlcnRleCh2ZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IGxvd2VzdEluZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgICAgdmVydGV4LnNldEluZGV4KGluZGV4KTtcblxuICAgICAgdmVydGV4LnNldExvd2VzdEluZGV4KGxvd2VzdEluZGV4KTtcblxuICAgICAgaW5kZXgrKztcblxuICAgICAgc3RhY2sucHVzaCh2ZXJ0ZXgpO1xuXG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0aWNlcyA9IHZlcnRleC5nZXRTdWNjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHN1Y2Nlc3NvclZlcnRleCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhVbmluZGV4ZWQgPSBzdWNjZXNzb3JWZXJ0ZXguaXNVbmluZGV4ZWQoKSxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQgPSBzdWNjZXNzb3JWZXJ0ZXhVbmluZGV4ZWQ7ICAvLy9cblxuICAgICAgICBpZiAoc3VjY2Vzc29yVmVydGV4Tm90U3Ryb25nbHlDb25uZWN0ZWQpIHtcbiAgICAgICAgICBzdHJvbmdseUNvbm5lY3RWZXJ0ZXgoc3VjY2Vzc29yVmVydGV4KTtcblxuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldExvd2VzdEluZGV4KCk7XG5cbiAgICAgICAgICB2ZXJ0ZXgudXBkYXRlTG93ZXN0SW5kZXgoc3VjY2Vzc29yVmVydGV4TG93ZXN0SW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleFN0YWNrZWQgPSBzdWNjZXNzb3JWZXJ0ZXguaXNTdGFja2VkKCk7XG5cbiAgICAgICAgICBpZiAoc3VjY2Vzc29yVmVydGV4U3RhY2tlZCkge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgdmVydGV4LnVwZGF0ZUxvd2VzdEluZGV4KHN1Y2Nlc3NvclZlcnRleEluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXhMb3dlc3QgPSB2ZXJ0ZXguaXNMb3dlc3QoKTtcblxuICAgICAgaWYgKHZlcnRleExvd2VzdCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBDb21wb25lbnQuZnJvbVN0YWNrQW5kVmVydGV4KHN0YWNrLCB2ZXJ0ZXgpO1xuXG4gICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZlcnRpY2VzLmZvckVhY2goZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhVbmluZGV4ZWQgPSB2ZXJ0ZXguaXNVbmluZGV4ZWQoKTtcblxuICAgICAgaWYgKHZlcnRleFVuaW5kZXhlZCkge1xuICAgICAgICBzdHJvbmdseUNvbm5lY3RWZXJ0ZXgodmVydGV4KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50KHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gKHRoaXMudmVydGV4bWFwW3ZlcnRleE5hbWVdICE9PSB1bmRlZmluZWQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBhZGRWZXJ0ZXgobmFtZSwgZGVzY2VuZGFudFZlcnRleE5hbWVzKSB7XG4gICAgbGV0IHN1Y2Nlc3NvclZlcnRpY2VzID0gZGVzY2VuZGFudFZlcnRleE5hbWVzLm1hcChmdW5jdGlvbihkZXNjZW5kYW50VmVydGV4TmFtZSkge1xuICAgICAgbGV0IHN1Y2Nlc3NvclZlcnRleDtcblxuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TmFtZSA9IGRlc2NlbmRhbnRWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhFeGlzdHMgPSB0aGlzLnZlcnRleG1hcC5oYXNPd25Qcm9wZXJ0eShzdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleEV4aXN0cykge1xuICAgICAgICBzdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShzdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgICB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXSA9IHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbGV0IHZlcnRleDtcblxuICAgIGNvbnN0IHZlcnRleEV4aXN0cyA9IHRoaXMudmVydGV4bWFwLmhhc093blByb3BlcnR5KG5hbWUpO1xuXG4gICAgaWYgKHZlcnRleEV4aXN0cykge1xuICAgICAgdmVydGV4ID0gdGhpcy52ZXJ0ZXhtYXBbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShuYW1lKTtcblxuICAgICAgdGhpcy52ZXJ0ZXhtYXBbbmFtZV0gPSB2ZXJ0ZXg7XG4gICAgfVxuXG4gICAgc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcy5jb25jYXQoW10pLnJldmVyc2UoKTsgLy8vXG5cbiAgICB2ZXJ0ZXguc2V0U3VjY2Vzc29yVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JhcGg7XG4iXX0=