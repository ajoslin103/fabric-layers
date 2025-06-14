import { Canvas, IEvent, Object as FabricObject } from 'fabric';

export interface PaintManagerOptions {
  width?: number;
  height?: number;
  container?: HTMLElement | string;
  canvasOptions?: any;
}

export default class PaintManager {
  canvas: Canvas;
  
  constructor(options?: PaintManagerOptions);
  
  setDimensions(width: number, height: number): void;
  clear(): void;
  dispose(): void;
  
  // Event handling
  on(event: string, handler: (e: IEvent) => void): this;
  off(event: string, handler?: (e: IEvent) => void): this;
  trigger(event: string, e?: IEvent): boolean;
  
  // Drawing methods
  setDrawingMode(mode: string): void;
  setBrushColor(color: string): void;
  setBrushWidth(width: number): void;
  setBrushOpacity(opacity: number): void;
  
  // Layer management
  addLayer(layer: any): void;
  removeLayer(layer: any): void;
  getActiveLayer(): any;
  setActiveLayer(layer: any): void;
  
  // Selection
  getActiveObjects(): FabricObject[];
  removeActiveObjects(): void;
  
  // Undo/Redo
  undo(): void;
  redo(): void;
  canUndo(): boolean;
  canRedo(): boolean;
  
  // Import/Export
  toJSON(): any;
  loadFromJSON(json: any): Promise<void>;
  toDataURL(options?: any): string;
}
