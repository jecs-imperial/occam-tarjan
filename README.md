# Tarjan

An implementation of Tarjan's algorithm.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This algorithm partitions a graph into its strongly connected components. The [Wikipedia page](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm) has a good explanation of the algorithm itself.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-tarjan

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-tarjan.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

A graph can be constructed with the `fromVertexLiterals()` factory method as follows:

```js
const tarjan = require('occam-tarjan');

const { Graph } = tarjan;

const graph = Graph.fromVertexLiterals(

  ['a', ['b', 'c']],
  ['b', ['b', 'd']],
  ['c', ['a']],
  ['d', []]

);
```

Note that the array of names that is the second element of each literal gives the *descendants* of the vertex and not its ancestors.

The cycles, vertices and strongly connected components of the graph are then made available:

```js
const cycles = graph.getCycles(),
      vertices = graph.getVertices(),
      stronglyConnectedComponents = graph.getStronglyConnectedComponents();
```

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Acknowledgements

* This implementation was closely based on the [this](https://github.com/tmont/tarjan-graph) one.

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
