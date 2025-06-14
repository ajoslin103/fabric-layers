import { Canvas, Object as FabricObject } from 'fabric';
import { EventEmitter2 } from 'eventemitter2';

export interface LayerOptions {
  id?: string;
  name?: string;
  visible?: boolean;
  opacity?: number;
  zIndex?: number;
  selectable?: boolean;
  evented?: boolean;
  hasControls?: boolean;
  hasBorders?: boolean;
  lockMovementX?: boolean;
  lockMovementY?: boolean;
  lockRotation?: boolean;
  lockScalingX?: boolean;
  lockScalingY?: boolean;
  lockUniScaling?: boolean;
  lockSkewingX?: boolean;
  lockSkewingY?: boolean;
  lockScalingFlip?: boolean;
  [key: string]: any;
}

export default class Layer extends EventEmitter2 {
  id: string;
  name: string;
  shape: FabricObject;
  canvas: Canvas;
  visible: boolean;
  opacity: number;
  zIndex: number;

  constructor(options?: LayerOptions);
  
  setOptions(options: LayerOptions): void;
  set(key: string, value: any): this;
  get(key: string): any;
  setOpacity(opacity: number): void;
  setZIndex(zIndex: number): void;
  bringToFront(): void;
  sendToBack(): void;
  moveUp(): void;
  moveDown(): void;
  remove(): void;
  render(): void;
  
  // EventEmitter2 methods
  on(event: string | string[], listener: (...args: any[]) => void): this;
  off(event: string | string[], listener?: (...args: any[]) => void): this;
  emit(event: string | string[], ...values: any[]): boolean;
}
