# fabric-layers

A powerful layer management and grid system built on Fabric.js, providing an intuitive way to organize canvas objects and implement grid-based layouts.

## Features

### Layer Management
- Organize canvas objects into logical groups
- Show/hide layers independently
- Lock/unlock layers for editing
- Layer opacity control
- Z-index management

### Grid System
- Customizable grid size and appearance
- Snap-to-grid functionality
- Grid visibility toggle
- Custom grid styling (color, opacity, line weight)
- Major/minor grid lines support

### Canvas Extensions
- Enhanced pan and zoom support
- Improved object selection
- Extended shape system
- Comprehensive event handling

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
  color: '#cccccc',
  opacity: 0.5,
  snap: true
});

// Create and manage layers
const backgroundLayer = new Layer({ name: 'background' });
const foregroundLayer = new Layer({ name: 'foreground' });

canvas.addLayer(backgroundLayer);
canvas.addLayer(foregroundLayer);

// Add shapes to specific layers
backgroundLayer.add(new fabric.Rect({
  width: 100,
  height: 100,
  fill: '#e0e0e0'
}));

foregroundLayer.add(new fabric.Circle({
  radius: 30,
  fill: 'red',
  left: 50,
  top: 50
}));

// Layer operations
foregroundLayer.hide(); // Hide layer
foregroundLayer.show(); // Show layer
foregroundLayer.lock(); // Prevent editing
foregroundLayer.unlock(); // Allow editing
```

## API Reference

### Canvas
```typescript
new Canvas(elementId: string, options?: CanvasOptions)
```

### Grid
```typescript
new Grid(canvas: Canvas, options?: GridOptions)

interface GridOptions {
  size?: number;          // Grid cell size
  color?: string;         // Grid line color
  opacity?: number;       // Grid opacity (0-1)
  snap?: boolean;         // Enable snap to grid
  majorLines?: boolean;   // Show major grid lines
  majorLineFrequency?: number; // Major line frequency
}
```

### Layer
```typescript
new Layer(options?: LayerOptions)

interface LayerOptions {
  name?: string;          // Layer name
  visible?: boolean;      // Initial visibility
  locked?: boolean;       // Initial locked state
  opacity?: number;       // Layer opacity (0-1)
}
```

## React Support

For React applications, check out [react-fabric-layers](https://github.com/yourusername/react-fabric-layers) which provides React components and hooks for this library.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
