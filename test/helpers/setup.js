import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><div id="test-container"></div></body></html>', {
  url: 'http://localhost'
});

global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: 'node.js'
};

// Mock requestAnimationFrame
window.requestAnimationFrame = (callback) => {
  return setTimeout(callback, 0);
};

window.cancelAnimationFrame = (id) => {
  clearTimeout(id);
};

// Mock getContext for Canvas
window.HTMLCanvasElement.prototype.getContext = function() {
  return {
    fillRect: function() {},
    clearRect: function() {},
    getImageData: function(x, y, w, h) {
      return {
        data: new Array(w * h * 4)
      };
    },
    putImageData: function() {},
    createImageData: function() { return []; },
    setTransform: function() {},
    drawImage: function() {},
    save: function() {},
    fillText: function() {},
    restore: function() {},
    beginPath: function() {},
    moveTo: function() {},
    lineTo: function() {},
    closePath: function() {},
    stroke: function() {},
    translate: function() {},
    scale: function() {},
    rotate: function() {},
    arc: function() {},
    fill: function() {},
    measureText: function() {
      return { width: 0 };
    },
    transform: function() {},
    rect: function() {},
    clip: function() {}
  };
};

// Mock toDataURL
window.HTMLCanvasElement.prototype.toDataURL = () => '';

export function createTestContainer() {
  const container = document.createElement('div');
  container.id = 'test-container';
  document.body.appendChild(container);
  return container;
}

export function cleanupTestContainer(container) {
  if (container && container.parentNode) {
    container.parentNode.removeChild(container);
  }
}
