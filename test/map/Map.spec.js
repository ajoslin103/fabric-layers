import { expect } from 'chai';
import { createTestContainer, cleanupTestContainer } from '../helpers/setup';
import { Map } from '../../src/map/Map';

describe('Map', () => {
  let container;
  let map;

  beforeEach(() => {
    container = createTestContainer();
    map = new Map(container, {
      width: 800,
      height: 600,
      showGrid: false
    });
  });

  afterEach(() => {
    if (map) {
      map.canvas.dispose();
    }
    cleanupTestContainer(container);
  });

  describe('Initialization', () => {
    it('should create a map instance', () => {
      expect(map).to.be.an.instanceOf(Map);
    });

    it('should create a canvas element', () => {
      const canvas = container.querySelector('canvas');
      expect(canvas).to.exist;
      expect(canvas.id).to.equal('fabric-layers-canvas');
    });

    it('should initialize with default options', () => {
      expect(map.width).to.equal(800);
      expect(map.height).to.equal(600);
      expect(map.showGrid).to.be.false;
    });
  });

  describe('Grid', () => {
    it('should add grid when showGrid is true', () => {
      const mapWithGrid = new Map(container, { showGrid: true });
      const gridCanvas = container.querySelector('#fabric-layers-grid-canvas');
      expect(gridCanvas).to.exist;
      mapWithGrid.canvas.dispose();
    });
  });

  describe('Layers', () => {
    it('should add a layer', () => {
      const layer = {
        shape: new fabric.Rect({
          left: 100,
          top: 100,
          width: 50,
          height: 50,
          fill: 'red'
        }),
        class: 'test'
      };
      
      return new Promise((resolve) => {
        map.on('test:added', (addedLayer) => {
          expect(addedLayer).to.equal(layer);
          expect(map.canvas.getObjects()).to.include(layer.shape);
          resolve();
        });
        
        map.addLayer(layer);
      });
    });

    it('should remove a layer', () => {
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        width: 50,
        height: 50,
        fill: 'blue'
      });
      
      const layer = { shape: rect, class: 'test' };
      
      return new Promise((resolve) => {
        map.addLayer(layer);
        
        map.on('test:removed', (removedLayer) => {
          expect(removedLayer).to.equal(layer);
          expect(map.canvas.getObjects()).to.not.include(rect);
          resolve();
        });
        
        map.removeLayer(layer);
      });
    });
  });
});
