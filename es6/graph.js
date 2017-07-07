'use strict';

const Cycle = require('./graph/cycle'),
      Stack = require('./graph/stack'),
      Vertex = require('./graph/vertex'),
      Component = require('./graph/component'),
      arrayUtil = require('./util/array');

class Graph {
  constructor (vertices, components, cycles) {
    this.vertices = vertices;
    this.components = components;
    this.cycles = cycles;
  }

  getVertices() {
    return this.vertices;
  }

  getComponents() {
    return this.components;
  }
  
  getCycles() {
    return this.cycles;
  }
  
  isVertexPresent(name) {
    const vertexPresent = this.vertices.some(function(vertex) {
      const vertexName = vertex.getName();
      
      if (vertexName === name) {
        return true;
      }
    });

    return vertexPresent;
  }

  static fromVertexLiterals(vertexLiterals) {
    const vertexMap = vertexLiterals.reduce(function(vertexMap, vertexLiteral) {
            addVertexLiteral(vertexMap, vertexLiteral);         
            
            return vertexMap;
          }, {}),
          vertices = verticesFromVertexMap(vertexMap),
          components = componentsFromVertices(vertices),
          cycles = cyclesFromComponents(components),
          graph = new Graph(vertices, components, cycles);
    
    return graph;
  }
}

module.exports = Graph;

function addVertexLiteral(vertexMap, vertexLiteral) {
  const firstVertexLiteralElement = arrayUtil.first(vertexLiteral),
        secondVertexLiteralElement = arrayUtil.second(vertexLiteral),
        name = firstVertexLiteralElement, ///
        descendantVertexNames = secondVertexLiteralElement; ///

  let successorVertices = descendantVertexNames.map(function(descendantVertexName) {
    let successorVertex;

    const successorVertexName = descendantVertexName,  ///
          successorVertexExists = vertexMap.hasOwnProperty(successorVertexName);

    if (successorVertexExists) {
      successorVertex = vertexMap[successorVertexName];
    } else {
      successorVertex = Vertex.fromName(successorVertexName);

      vertexMap[successorVertexName] = successorVertex;
    }

    return successorVertex;
  });

  let vertex;

  const vertexExists = vertexMap.hasOwnProperty(name);

  if (vertexExists) {
    vertex = vertexMap[name];
  } else {
    vertex = Vertex.fromName(name);

    vertexMap[name] = vertex;
  }

  successorVertices = successorVertices.concat([]).reverse(); ///

  vertex.setSuccessorVertices(successorVertices);
}

function verticesFromVertexMap(vertexMap) {
  const names = Object.keys(vertexMap),
        vertices = names.map(function(name) {
          const vertex = vertexMap[name];
  
          return vertex;
        });

  return vertices;
}

function componentsFromVertices(vertices) {
  const stack = new Stack(),
        components = [];

  let index = 0;

  function stronglyConnectVertex(vertex) {
    const lowestIndex = index;  ///

    vertex.setIndex(index);

    vertex.setLowestIndex(lowestIndex);

    index++;

    stack.push(vertex);

    const successorVertices = vertex.getSuccessorVertices();

    successorVertices.forEach(function(successorVertex) {
      const successorVertexUnindexed = successorVertex.isUnindexed(),
            successorVertexNotStronglyConnected = successorVertexUnindexed;  ///

      if (successorVertexNotStronglyConnected) {
        stronglyConnectVertex(successorVertex);

        const successorVertexLowestIndex = successorVertex.getLowestIndex();

        vertex.updateLowestIndex(successorVertexLowestIndex);
      } else {
        const successorVertexStacked = successorVertex.isStacked();

        if (successorVertexStacked) {
          const successorVertexIndex = successorVertex.getIndex();

          vertex.updateLowestIndex(successorVertexIndex);
        }
      }
    });

    const vertexLowest = vertex.isLowest();

    if (vertexLowest) {
      const component = Component.fromStackAndVertex(stack, vertex);

      components.push(component);
    }
  }

  vertices.forEach(function(vertex) {
    const vertexUnindexed = vertex.isUnindexed();

    if (vertexUnindexed) {
      stronglyConnectVertex(vertex);
    }
  });

  return components;
}

function cyclesFromComponents(components) {
  const cycles = components.reduce(function(cycles, component) {
    const componentCyclic = component.isCyclic();

    if (componentCyclic) {
      const cycle = Cycle.fromComponent(component);

      cycles.push(cycle);
    }

    return cycles;
  }, []);

  return cycles;
}
