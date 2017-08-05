'use strict';

const necessary = require('necessary');

const Cycle = require('./graph/cycle'),
      Stack = require('./graph/stack'),
      Vertex = require('./graph/vertex'),
      StronglyConnectedComponent = require('./graph/stronglyConnectedComponent');

const { array } = necessary;

class Graph {
  constructor (vertices, stronglyConnectedComponents, cycles) {
    this.vertices = vertices;
    this.stronglyConnectedComponents = stronglyConnectedComponents;
    this.cycles = cycles;
  }

  getVertices() {
    return this.vertices;
  }

  getStronglyConnectedComponents() {
    return this.stronglyConnectedComponents;
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
          stronglyConnectedComponents = stronglyConnectedComponentsFromVertices(vertices),
          cycles = cyclesFromStronglyConnectedComponents(stronglyConnectedComponents),
          graph = new Graph(vertices, stronglyConnectedComponents, cycles);
    
    return graph;
  }
}

module.exports = Graph;

function addVertexLiteral(vertexMap, vertexLiteral) {
  const firstVertexLiteralElement = array.first(vertexLiteral),
        secondVertexLiteralElement = array.second(vertexLiteral),
        vertexName = firstVertexLiteralElement, ///
        descendantVertexNames = secondVertexLiteralElement; ///

  let successorVertices = descendantVertexNames.map(function(descendantVertexName) {
    let successorVertex;

    const successorVertexName = descendantVertexName,  ///
          successorVertexExists = vertexMap.hasOwnProperty(successorVertexName);

    if (successorVertexExists) {
      successorVertex = vertexMap[successorVertexName];
    } else {
      successorVertex = Vertex.fromVertexName(successorVertexName);

      vertexMap[successorVertexName] = successorVertex;
    }

    return successorVertex;
  });

  let vertex;

  const vertexExists = vertexMap.hasOwnProperty(vertexName);

  if (vertexExists) {
    vertex = vertexMap[vertexName];
  } else {
    vertex = Vertex.fromVertexName(vertexName);

    vertexMap[vertexName] = vertex;
  }

  successorVertices = successorVertices.concat([]).reverse(); ///

  vertex.setSuccessorVertices(successorVertices);
}

function verticesFromVertexMap(vertexMap) {
  const vertexNames = Object.keys(vertexMap),
        vertices = vertexNames.map(function(vertexName) {
          const vertex = vertexMap[vertexName];
  
          return vertex;
        });

  return vertices;
}

function stronglyConnectedComponentsFromVertices(vertices) {
  const stack = new Stack(),
        stronglyConnectedComponents = [];

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
      const stronglyConnectedComponent = StronglyConnectedComponent.fromStackAndVertex(stack, vertex);

      stronglyConnectedComponents.push(stronglyConnectedComponent);
    }
  }

  vertices.forEach(function(vertex) {
    const vertexUnindexed = vertex.isUnindexed();

    if (vertexUnindexed) {
      stronglyConnectVertex(vertex);
    }
  });

  return stronglyConnectedComponents;
}

function cyclesFromStronglyConnectedComponents(stronglyConnectedComponents) {
  const cycles = stronglyConnectedComponents.reduce(function(cycles, stronglyConnectedComponent) {
    const stronglyConnectedComponentCyclic = stronglyConnectedComponent.isCyclic();

    if (stronglyConnectedComponentCyclic) {
      const cycle = Cycle.fromStronglyConnectedComponent(stronglyConnectedComponent);

      cycles.push(cycle);
    }

    return cycles;
  }, []);

  return cycles;
}
