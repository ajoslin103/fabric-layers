import { fabric } from 'fabric-pure-browser';
import { EventEmitter2 } from 'eventemitter2';

export interface CanvasOptions extends fabric.ICanvasOptions {
  width?: number;
  height?: number;
  backgroundColor?: string;
}

export class Canvas extends EventEmitter2 {
  private canvas: fabric.Canvas;
  private layers: Map<string, fabric.Object[]>;

  constructor(element: string | HTMLCanvasElement, options: CanvasOptions = {}) {
    super();
    
    // Initialize fabric canvas
    this.canvas = new fabric.Canvas(element, {
      preserveObjectStacking: true,
      ...options
    });

    // Initialize layers
    this.layers = new Map();

    // Setup default event handlers
    this.setupEvents();
  }

  private setupEvents() {
    this.canvas.on('object:moving', (e) => this.emit('object:moving', e));
    this.canvas.on('object:scaling', (e) => this.emit('object:scaling', e));
    this.canvas.on('object:rotating', (e) => this.emit('object:rotating', e));
    this.canvas.on('selection:created', (e) => this.emit('selection:created', e));
    this.canvas.on('selection:cleared', (e) => this.emit('selection:cleared', e));
  }

  public createLayer(id: string) {
    if (!this.layers.has(id)) {
      this.layers.set(id, []);
    }
    return this;
  }

  public addToLayer(id: string, object: fabric.Object) {
    if (!this.layers.has(id)) {
      this.createLayer(id);
    }
    
    const layer = this.layers.get(id);
    layer?.push(object);
    this.canvas.add(object);
    
    return this;
  }

  public removeFromLayer(id: string, object: fabric.Object) {
    const layer = this.layers.get(id);
    if (layer) {
      const index = layer.indexOf(object);
      if (index > -1) {
        layer.splice(index, 1);
        this.canvas.remove(object);
      }
    }
    return this;
  }

  public clearLayer(id: string) {
    const layer = this.layers.get(id);
    if (layer) {
      layer.forEach(obj => this.canvas.remove(obj));
      layer.length = 0;
    }
    return this;
  }

  public setLayerVisibility(id: string, visible: boolean) {
    const layer = this.layers.get(id);
    if (layer) {
      layer.forEach(obj => obj.set('visible', visible));
      this.canvas.renderAll();
    }
    return this;
  }

  public getFabricCanvas(): fabric.Canvas {
    return this.canvas;
  }

  public destroy() {
    this.canvas.dispose();
    this.removeAllListeners();
  }
}
