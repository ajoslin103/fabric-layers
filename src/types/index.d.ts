// Type definitions for fabric-layers

import { EventEmitter2 } from 'eventemitter2';
import { Canvas, IEvent, Object as FabricObject } from 'fabric';

declare module 'fabric-layers' {
  export interface BaseOptions {
    [key: string]: any;
  }

  export class Base extends EventEmitter2 {
    constructor(options?: BaseOptions);
    set(key: string, value: any): this;
    get(key: string): any;
    on(event: string, handler: Function): this;
    off(event: string, handler?: Function): this;
    trigger(event: string, ...args: any[]): boolean;
  }

  export interface Point {
    x: number;
    y: number;
  }

  export interface GridOptions extends BaseOptions {
    size?: number;
    majorLineColor?: string;
    minorLineColor?: string;
    lineWidth?: number;
    snapToGrid?: boolean;
    visible?: boolean;
  }

  export class Grid extends Base {
    constructor(options?: GridOptions);
    setOptions(options: GridOptions): void;
    draw(ctx: CanvasRenderingContext2D, canvas: Canvas): void;
    dispose(): void;
  }

  export interface LayerOptions extends BaseOptions {
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
  }

  export class Layer extends Base {
    id: string;
    name: string;
    shape: FabricObject;
    canvas: Canvas;
    
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
  }

  export interface PaintManagerOptions {
    width?: number;
    height?: number;
    container?: HTMLElement | string;
    canvasOptions?: any;
  }

  export class PaintManager extends Base {
    canvas: Canvas;
    
    constructor(options?: PaintManagerOptions);
    setDimensions(width: number, height: number): void;
    clear(): void;
    dispose(): void;
  }

  // Export utility functions
  export function createCanvas(element: HTMLCanvasElement | string, options?: any): Canvas;
  export function clearCanvas(canvas: Canvas): void;
  export function resizeCanvas(canvas: Canvas, width: number, height: number): void;
  export function canvasToImage(canvas: Canvas, format?: string, quality?: number): string;
  export function loadImage(url: string): Promise<HTMLImageElement>;
  export function applyFilter(image: HTMLImageElement, filter: any): Promise<HTMLImageElement>;
}
