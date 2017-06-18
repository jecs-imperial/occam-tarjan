'use strict';

const arrayUtil = require('../util/array');

class Component {
  constructor(vertices) {
    this.vertices = vertices;
  }
  
  getVertices() {
    return this.vertices;
  }

  getVertexNames() {
    const vertexNames = this.vertices.map(function(vertex) {
      const vertexName = vertex.getName();
      
      return vertexName;
    });
    
    return vertexNames;
  }

  getFirstVertexName() {
    const firstVertex = arrayUtil.first(this.vertices),
          firstVertexName = firstVertex.getName();

    return firstVertexName;
  }

  isCyclic() {
    const verticesLength = this.vertices.length,
          cyclic = (verticesLength > 1);  ///
    
    return cyclic;
  }

  isNonCyclic() {
    const cyclic = this.isCyclic(),
          nonCyclic = !cyclic;
    
    return nonCyclic;
  }
  
  mapVertexNames(callback) {
    const vertexNames = this.getVertexNames();
    
    return vertexNames.map(callback);
  }

  reduceVertexNames(callback, initialValue) {
    const vertexNames = this.getVertexNames();

    return vertexNames.reduce(callback, initialValue);
  }

  static fromStackAndVertex(stack, vertex) {
    const stackVertices = [];
    
    let stackVertex;

    do {
      stackVertex = stack.pop();

      stackVertices.push(stackVertex)
    } while (stackVertex !== vertex);
    
    const vertices = stackVertices, /// 
          component = new Component(vertices);

    return component;
  }
}

module.exports = Component;
