import { fabric } from 'fabric-pure-browser';
import { EventEmitter2 } from 'eventemitter2';

export interface GridOptions {
  size?: number;
  color?: string;
  opacity?: number;
  visible?: boolean;
  showAxis?: boolean;
  axisColor?: string;
  subdivisions?: number;
}

export class Grid extends EventEmitter2 {
  private canvas: fabric.Canvas;
  private options: Required<GridOptions>;
  private lines: fabric.Line[] = [];
  private axisLines: fabric.Line[] = [];

  constructor(canvas: fabric.Canvas, options: GridOptions = {}) {
    super();
    this.canvas = canvas;
    this.options = {
      size: options.size || 50,
      color: options.color || '#cccccc',
      opacity: options.opacity || 0.5,
      visible: options.visible ?? true,
      showAxis: options.showAxis ?? true,
      axisColor: options.axisColor || '#666666',
      subdivisions: options.subdivisions || 0
    };

    this.create();
  }

  private create() {
    const width = this.canvas.getWidth();
    const height = this.canvas.getHeight();
    const { size, color, opacity, showAxis, axisColor } = this.options;

    // Create vertical lines
    for (let x = 0; x <= width; x += size) {
      const isAxis = x === 0 && showAxis;
      const line = new fabric.Line([x, 0, x, height], {
        stroke: isAxis ? axisColor : color,
        opacity: isAxis ? 1 : opacity,
        selectable: false,
        evented: false,
        excludeFromExport: true
      });
      
      if (isAxis) {
        this.axisLines.push(line);
      } else {
        this.lines.push(line);
      }
      this.canvas.add(line);
    }

    // Create horizontal lines
    for (let y = 0; y <= height; y += size) {
      const isAxis = y === 0 && showAxis;
      const line = new fabric.Line([0, y, width, y], {
        stroke: isAxis ? axisColor : color,
        opacity: isAxis ? 1 : opacity,
        selectable: false,
        evented: false,
        excludeFromExport: true
      });

      if (isAxis) {
        this.axisLines.push(line);
      } else {
        this.lines.push(line);
      }
      this.canvas.add(line);
    }

    if (this.options.subdivisions > 0) {
      this.createSubdivisions();
    }
  }

  private createSubdivisions() {
    const width = this.canvas.getWidth();
    const height = this.canvas.getHeight();
    const { size, color, opacity, subdivisions } = this.options;
    const subSize = size / subdivisions;

    // Create subdivision lines
    for (let x = 0; x <= width; x += subSize) {
      if (x % size !== 0) { // Skip main grid lines
        const line = new fabric.Line([x, 0, x, height], {
          stroke: color,
          opacity: opacity * 0.5, // Subdivisions are lighter
          selectable: false,
          evented: false,
          excludeFromExport: true
        });
        this.lines.push(line);
        this.canvas.add(line);
      }
    }

    for (let y = 0; y <= height; y += subSize) {
      if (y % size !== 0) { // Skip main grid lines
        const line = new fabric.Line([0, y, width, y], {
          stroke: color,
          opacity: opacity * 0.5, // Subdivisions are lighter
          selectable: false,
          evented: false,
          excludeFromExport: true
        });
        this.lines.push(line);
        this.canvas.add(line);
      }
    }
  }

  public setVisible(visible: boolean) {
    this.options.visible = visible;
    [...this.lines, ...this.axisLines].forEach(line => {
      line.set('visible', visible);
    });
    this.canvas.renderAll();
  }

  public setSize(size: number) {
    this.destroy();
    this.options.size = size;
    this.create();
  }

  public setColor(color: string) {
    this.lines.forEach(line => {
      line.set('stroke', color);
    });
    this.canvas.renderAll();
  }

  public setOpacity(opacity: number) {
    this.lines.forEach(line => {
      line.set('opacity', opacity);
    });
    this.canvas.renderAll();
  }

  public destroy() {
    [...this.lines, ...this.axisLines].forEach(line => {
      this.canvas.remove(line);
    });
    this.lines = [];
    this.axisLines = [];
  }
}
