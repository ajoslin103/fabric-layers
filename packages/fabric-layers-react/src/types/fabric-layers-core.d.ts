declare module 'fabric-layers-core' {
  export interface MapOptions {
    width?: number;
    height?: number;
    showGrid?: boolean;
    mode?: string;
  }

  export class Map {
    constructor(container: HTMLElement, options?: MapOptions);
    dispose(): void;
    getCanvas(): any;
  }

  export const Modes: {
    SELECT: string;
    GRAB: string;
    MEASURE: string;
    DRAW: string;
  };

  export const OriginPin: {
    NONE: string;
    TOP_LEFT: string;
    TOP_RIGHT: string;
    BOTTOM_LEFT: string;
    BOTTOM_RIGHT: string;
  };

  export const MAP: {
    center: any;
    zoom: number;
    minZoom: number;
    maxZoom: number;
    gridEnabled: boolean;
    zoomEnabled: boolean;
    selectEnabled: boolean;
    mode: string;
    showGrid: boolean;
    originPin: string;
    enablePan: boolean;
  };

  export const version: string;
}
