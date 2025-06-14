/**
 * fabric-layers - A fabric.js coordinate-plane (grid) & layers library
 * Main entry point that re-exports all functionality
 */

import fabric from 'fabric-pure-browser';
import { version } from '../package.json';

// Export version info
export { version };

// Log version info if in browser environment
if (typeof window !== 'undefined') {
  console.log('fabricJS ', fabric.version);
  console.log('fabric-layers ', version);
}

// Core components
export * from './core/index';

// Geometry utilities
export * from './geometry/index';

// Map components
export * from './map/index';

// Layer system
export * from './layer/index';

// Grid system
export * from './grid/index';

// Measurement utilities
export * from './measurement/index';

// Paint tools
export * from './paint/index';

// If we're in a browser environment, add to global scope
// But provide a noConflict method
if (typeof window !== 'undefined') {
  const oldFabricLayers = window.FabricLayers;
  
  // Create namespace if using UMD build
  window.FabricLayers = window.FabricLayers || exports;
  
  // Provide noConflict method
  window.FabricLayers.noConflict = function() {
    window.FabricLayers = oldFabricLayers;
    return this;
  };
}
