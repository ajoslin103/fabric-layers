import { fabric } from 'fabric-pure-browser';
import { EventEmitter2 } from 'eventemitter2';

export interface LayerOptions {
  id: string;
  visible?: boolean;
  selectable?: boolean;
  zIndex?: number;
}

export class Layer extends EventEmitter2 {
  private canvas: fabric.Canvas;
  private objects: fabric.Object[] = [];
  private options: Required<LayerOptions>;

  constructor(canvas: fabric.Canvas, options: LayerOptions) {
    super();
    this.canvas = canvas;
    this.options = {
      id: options.id,
      visible: options.visible ?? true,
      selectable: options.selectable ?? true,
      zIndex: options.zIndex ?? 1
    };
  }

  public add(object: fabric.Object) {
    object.set({
      selectable: this.options.selectable,
      visible: this.options.visible
    });

    this.objects.push(object);
    this.canvas.add(object);
    this.updateZIndices();
    
    this.emit('object:added', { object });
    return this;
  }

  public remove(object: fabric.Object) {
    const index = this.objects.indexOf(object);
    if (index > -1) {
      this.objects.splice(index, 1);
      this.canvas.remove(object);
      this.emit('object:removed', { object });
    }
    return this;
  }

  public clear() {
    [...this.objects].forEach(obj => this.remove(obj));
    this.emit('cleared');
    return this;
  }

  public setVisible(visible: boolean) {
    this.options.visible = visible;
    this.objects.forEach(obj => {
      obj.set('visible', visible);
    });
    this.canvas.renderAll();
    this.emit('visibility:changed', { visible });
    return this;
  }

  public setSelectable(selectable: boolean) {
    this.options.selectable = selectable;
    this.objects.forEach(obj => {
      obj.set('selectable', selectable);
    });
    this.canvas.renderAll();
    return this;
  }

  public setZIndex(zIndex: number) {
    this.options.zIndex = zIndex;
    this.updateZIndices();
    return this;
  }

  private updateZIndices() {
    this.objects.forEach((obj, index) => {
      obj.moveTo(this.options.zIndex + index);
    });
    this.canvas.renderAll();
  }

  public getObjects(): fabric.Object[] {
    return [...this.objects];
  }

  public getId(): string {
    return this.options.id;
  }

  public isVisible(): boolean {
    return this.options.visible;
  }

  public destroy() {
    this.clear();
    this.removeAllListeners();
  }
}
