# Tarjan

An implementation of the Tarjan algorithm for use with Occam's parsers.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Building](#building)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This algorithm divides up a graph into its strongly connected components. 
It is used to detect cyclic productions in BNF grammars so that they can be eliminated as a preliminary step to removing left recursive productions.

A graph can be constructed as follows:

    const graph = new Graph();
    
    graph.addVertex('a', ['b', 'c']);
    graph.addVertex('b', ['b', 'd']);
    graph.addVertex('c', ['a']);
    graph.addVertex('d');

The two methods `generateCycles()` and `generateComponents()` can then be called, and will return cycles and components, respectively.
Note that the graph is not stateless. Once either of these methods has been called, it must be thrown away.

A cycle is nothing more than a component with more than one vertex and the components form a disjoint partition.
The [Wikipedia page](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm) has a very good explanation of the algorithm itself.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-tarjan

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Tarjan.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.
        
## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Acknowledgements

This implementation was closely based on the following:

https://github.com/tmont/tarjan-graph

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
