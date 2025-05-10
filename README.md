# fabric-layers

A powerful layer management and grid system built on Fabric.js

## Features

- Layer management system for Fabric.js
- Grid system with customizable appearance
- Pan and zoom support
- Extended shape system
- Event handling

## Installation

```bash
npm install fabric-layers fabric-pure-browser
# or
yarn add fabric-layers fabric-pure-browser
```

## Basic Usage

```javascript
import { Canvas, Grid, Layer } from 'fabric-layers';

// Initialize canvas with grid
const canvas = new Canvas('my-canvas');
const grid = new Grid(canvas, {
  size: 50,
  color: '#cccccc'
});

// Create a layer
const layer = new Layer();
canvas.addLayer(layer);

// Add shapes to layer
layer.add(new fabric.Rect({
  width: 100,
  height: 100,
  fill: 'red'
}));
```

## React Support

For React applications, check out [react-fabric-layers](https://github.com/yourusername/react-fabric-layers).
