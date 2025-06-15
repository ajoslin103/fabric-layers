# Fabric Layers v1.1.0

An interactive coordinate-plane, grid, and layer management library for [fabric.js](https://fabricjs.com/) canvases.

`fabric-layers` is based on the excellent original work of [ReactIndoorMapping](https://github.com/martinwairegi/ReactIndoorMapping) featured in this [blog post](https://blog.logrocket.com/build-indoor-maps-fabric-js-react/). The library has been refactored to be framework-agnostic while maintaining all the powerful features of the original.

## 🚀 What's New in 1.1.0

- **Enhanced Grid System**: Customizable grid line styles and colors
- **Improved Performance**: Better rendering for complex scenes
- **TypeScript Support**: Full type definitions included
- **Better Event System**: More consistent event handling
- **Bug Fixes**: Various stability improvements and bug fixes

Check out the [CHANGELOG](CHANGELOG.md) for the complete list of changes.

---

## ✨ Classes

src/paint/ArrowHead.js
src/paint/Arrow.js
src/paint/Canvas.js
src/paint/PaintManager.d.ts
src/types/index.d.ts
src/core/Base.js
src/measurement/Measurement.js
src/measurement/Measurer.js
src/map/ModesMixin.js
src/map/Map.js
src/layer/Layer.d.ts
src/layer/Tooltip.js
src/layer/marker/Icon.js
src/layer/marker/Marker.js
src/layer/marker/MarkerGroup.js
src/layer/vector/Line.js
src/layer/vector/Circle.js
src/layer/vector/Rect.js
src/layer/vector/Polyline.js
src/layer/Connector.js
src/layer/Group.js
src/layer/Layer.js
src/lib/MagicScroll.js
src/lib/mix.js
src/lib/impetus.js
src/geometry/Point.js
src/grid/Axis.js
src/grid/Grid.js
src/grid/Grid.d.ts

## 🤝 Contributing

PRs and issues are welcome!
1. Fork & `git clone`
2. `npm install`
3. `npm run dev` – watch/build
4. Add tests in `test/` and run `npm test`

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) spec; CI will lint commit messages.

---

## 📄 Licenses

MIT © 2022-2025 [Martin Wairegi](https://github.com/martinwairegi) (original author of ReactIndoorMapping)

MIT © 2022-2025 [Allen Joslin](https://github.com/ajoslin103) (current author of fabric-layers)
