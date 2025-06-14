import { Canvas } from 'fabric';
import { Axis } from './Axis';

export interface GridOptions {
  axisX?: Axis;
  axisY?: Axis;
  color?: string;
  lineWidth?: number;
  lineColor?: string | number | ((state: any) => (string | number)[]);
  padding?: number | number[] | ((state: any) => number[]);
  fontSize?: number | string;
  fontFamily?: string;
  ticks?: boolean | number[] | { [key: string]: number } | ((state: any) => number[]);
  labels?: boolean | string[] | { [key: string]: string } | ((state: any) => string[]);
  lines?: any[] | ((state: any) => any[]);
  axisColor?: string | number;
  axisWidth?: number;
  tickAlign?: 'left' | 'right' | 'center';
  min?: number;
  max?: number;
  offset?: number;
  zoom?: number;
}

export interface GridState {
  coordinate: any;
  shape: [number, number];
  grid: Grid;
  range?: number;
  offset?: number;
  zoom?: number;
  axisColor?: string;
  axisWidth?: number;
  lineWidth?: number;
  tickAlign?: string;
  labelColor?: string;
  padding: number[];
  fontSize?: number;
  fontFamily?: string;
  lines: any[];
  lineColors: (string | null)[];
  ticks: (number | null)[];
  labels: (string | null)[];
  opposite?: GridState;
}

export default class Grid {
  constructor(canvas: HTMLCanvasElement, options?: GridOptions);
  
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  state: {
    x: GridState;
    y: GridState;
  };
  axisX: Axis;
  axisY: Axis;
  center: { x: number; y: number; zoom: number };

  render(): this;
  getCenterCoords(): { x: number; y: number };
  setSize(width: number, height: number): void;
  setWidth(width: number): void;
  setHeight(height: number): void;
  update(options?: GridOptions): this;
  update2(center: { x: number; y: number; zoom: number }): void;
  calcCoordinate(coord: any, shape: [number, number]): GridState;
  draw(): void;
  drawAxis(state: GridState): void;
  drawGrid(state: GridState): void;
  drawTicks(state: GridState): void;
  drawLabels(state: GridState): void;
  setDefaults(): void;
  dispose(): void;
  on(event: string, callback: (...args: any[]) => void): this;
  off(event: string, callback?: (...args: any[]) => void): this;
  emit(event: string, ...args: any[]): boolean;
}
