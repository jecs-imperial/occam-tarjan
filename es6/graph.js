"use strict";

import { arrayUtilities } from "necessary";

import Cycle from "./graph/cycle";
import Stack from "./graph/stack";
import Vertex from "./graph/vertex";
import StronglyConnectedComponent from "./graph/stronglyConnectedComponent";

const { first, second } = arrayUtilities;

class Graph {
  constructor (stronglyConnectedComponents, vertices, cycles) {
    this.stronglyConnectedComponents = stronglyConnectedComponents;
    this.vertices = vertices;
    this.cycles = cycles;
  }

  getStronglyConnectedComponents() {
    return this.stronglyConnectedComponents;
  }

  getVertices() {
    return this.vertices;
  }

  getCycles() {
    return this.cycles;
  }
  
  isVertexPresent(name) {
    const vertexPresent = this.vertices.some((vertex) => {
      const vertexName = vertex.getName();
      
      if (vertexName === name) {
        return true;
      }
    });

    return vertexPresent;
  }

  static fromVertexLiterals(vertexLiterals) {
    const vertexMap = vertexLiterals.reduce((vertexMap, vertexLiteral) => {
            addVertexLiteral(vertexMap, vertexLiteral);         
            
            return vertexMap;
          }, {}),
          vertices = verticesFromVertexMap(vertexMap),
          stronglyConnectedComponents = stronglyConnectedComponentsFromVertices(vertices),
          cycles = cyclesFromStronglyConnectedComponents(stronglyConnectedComponents),
          graph = new Graph(stronglyConnectedComponents, vertices, cycles);
    
    return graph;
  }
}

module.exports = Graph;

function addVertexLiteral(vertexMap, vertexLiteral) {
  const firstVertexLiteralElement = first(vertexLiteral),
        secondVertexLiteralElement = second(vertexLiteral),
        vertexName = firstVertexLiteralElement, ///
        descendantVertexNames = secondVertexLiteralElement; ///

  let successorVertices = descendantVertexNames.map((descendantVertexName) => {
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
        vertices = vertexNames.map((vertexName) => {
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

    successorVertices.forEach((successorVertex) => {
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

  vertices.forEach((vertex) => {
    const vertexUnindexed = vertex.isUnindexed();

    if (vertexUnindexed) {
      stronglyConnectVertex(vertex);
    }
  });

  return stronglyConnectedComponents;
}

function cyclesFromStronglyConnectedComponents(stronglyConnectedComponents) {
  const cycles = stronglyConnectedComponents.reduce((cycles, stronglyConnectedComponent) => {
    const stronglyConnectedComponentCyclic = stronglyConnectedComponent.isCyclic();

    if (stronglyConnectedComponentCyclic) {
      const cycle = Cycle.fromStronglyConnectedComponent(stronglyConnectedComponent);

      cycles.push(cycle);
    }

    return cycles;
  }, []);

  return cycles;
}
