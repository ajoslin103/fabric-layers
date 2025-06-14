# Plan to Convert Indoor Mapping to an npm Package

## 1. Project Assessment

### Current State
- [x] Repository is structured as an indoor mapping library that was refactored to be a generic image manipulation library
- [x] Current name: "fabric-layers" (in package.json)
- [x] Using fabric-pure-browser 3.4.0
- [x] Has webpack and rollup configurations for building
- [x] Main entry point: src/Indoor.js
- [x] Build system configured for CommonJS, ESM, and UMD formats
- [x] Basic test infrastructure with Karma and Mocha

## 2. Package Configuration Updates

### Package Identity
- [x] Rename package from "indoorjs" to "fabric-layers"
- [x] Update package description to reflect new purpose as a fabric.js coordinate-plane (grid) & layers library
- [x] Update keywords to match new functionality (fabric.js, canvas, grid, coordinate-plane, layers)
- [x] Update repository, bugs, and homepage URLs

### Package Structure
- [x] Review and update main entry point in package.json
- [x] Add module field for ES modules support
- [ ] Add types field if TypeScript definitions are added
- [x] Set appropriate "files" array to include only necessary files
- [x] Properly mark fabric.js as a peer dependency
- [x] Add eventemitter2 as a direct dependency

### Build Configuration
- [x] Update webpack/rollup configuration to generate:
  - [x] CommonJS build (for Node.js/npm)
  - [x] ES module build (for modern bundlers)
  - [x] UMD build (for direct browser usage)
- [x] Configure external dependencies correctly
- [x] Set up source maps generation
- [x] Ensure tree-shaking friendly exports
- [x] Configure build scripts for development and production

## 3. Code Refactoring

### Architecture Adjustments
- [x] Ensure proper module exports for all components
- [x] Review and restructure entry points if needed
- [x] Update imports/exports to support tree-shaking
- [x] Refactor Floor -> ImageLayer for better clarity
- [x] Clean up and standardize event handling

### API Improvements
- [ ] Document public API interface focusing on coordinate-plane and layers functionality
- [x] Ensure consistent naming conventions across the codebase
- [x] Remove any indoor-specific code that wasn't already refactored
  - [x] Removed floorplan-specific code from Map.js
  - [x] Updated canvas IDs to use consistent naming
  - [x] Removed the floorplan directory
  - [x] Updated Indoor.js to remove floorplan exports
- [ ] Enhance grid system and layer management APIs
- [ ] Add TypeScript type definitions (optional but recommended)
- [ ] Implement proper error handling and validation
- [ ] Add JSDoc comments for all public methods

## 4. Documentation

### Package Documentation
- [x] Create comprehensive README.md
  - [x] Project overview and features
  - [x] Installation instructions (npm + CDN)
  - [x] Basic usage examples (coordinate plane, layers, events)
  - [x] API reference (high-level overview)
  - [x] Contributing guidelines
  - [x] License information (dual MIT for both original and current authors)
- [x] Add basic usage examples for coordinate planes and layer management
- [ ] Document grid system API and coordinate transformation utilities (partially complete)
- [ ] Explain layer system configuration options (partially complete)
- [x] Provide examples of integrating with existing web applications (vanilla JS example added)

### Code Documentation
- [ ] Add/update JSDoc comments for public methods and components
  - [ ] Document all public classes and methods
  - [ ] Include parameter and return type documentation
  - [ ] Add usage examples in JSDoc comments
- [ ] Create example documentation
  - [ ] Basic setup and configuration
  - [ ] Common use cases
  - [ ] Advanced usage patterns

## 5. Testing

### Test Infrastructure
- [x] Set up/update testing framework
  - [x] Created test helpers
  - [x] Set up test environment with JSDOM
  - [x] Configured test runner (Karma + Mocha)
  - [x] Added code coverage reporting with nyc
- [ ] Write unit tests for core functionality
  - [x] Base class tests
  - [x] Map component tests
  - [ ] Grid system tests
  - [ ] Layer management tests
  - [ ] Event system tests
  - [ ] Utility function tests
- [ ] Add integration tests for components
  - [ ] Component interaction tests
  - [ ] Event propagation tests
  - [ ] Performance benchmarks

### Demo Application
- [ ] Create/update demo application
  - [ ] Basic setup with webpack-dev-server
  - [ ] Example components for different use cases
  - [ ] Interactive playground for testing features
- [ ] Include examples showing:
  - [ ] Basic coordinate plane setup
  - [ ] Layer management and interaction
  - [ ] Grid customization options
  - [ ] Event handling with layers
  - [ ] Custom shape rendering
  - [ ] Performance optimization techniques
- [ ] Ensure demo is buildable independently
- [ ] Create CodeSandbox examples for quick testing
  - [ ] Basic setup
  - [ ] Advanced usage
  - [ ] Custom component integration

## 6. Publishing

### Pre-publishing Checklist
- [ ] Verify package.json configuration
  - [ ] Check all required fields are present
  - [ ] Validate peerDependencies and dependencies
  - [ ] Ensure proper license and repository information
- [ ] Run all tests
  - [ ] Unit tests
  - [ ] Integration tests
  - [ ] Cross-browser testing
- [ ] Build production assets
  - [ ] Verify all builds complete successfully
  - [ ] Check bundle sizes
- [ ] Test package locally using npm link
  - [ ] Test in a sample web page
  - [ ] Verify all imports work as expected

### Publishing Process
- [ ] Set up npm account if needed
- [ ] Configure npm access (public/private)
- [ ] Create .npmrc configuration if needed
- [ ] Update version number following semantic versioning
- [ ] Publish with `npm publish`
- [ ] Verify package is available on npm

### Continuous Integration
- [ ] Set up GitHub Actions for:
  - [ ] Automated testing on push/pull requests
  - [ ] Automated builds on version tags
  - [ ] Code coverage reporting
- [ ] Configure automated publishing (optional)
  - [ ] Set up npm tokens
  - [ ] Configure release workflow

## 7. Dependency Upgrades

### Upgrade Strategy
- [ ] Create upgrade-plan.md document
- [ ] Upgrade Node.js version (from 14.x to latest LTS)
  - [ ] Update .nvmrc file
  - [ ] Update CI/CD pipelines
- [ ] Update fabric.js dependency
  - [ ] Test for breaking changes
  - [ ] Update documentation if needed
- [ ] Update build tools
  - [ ] webpack 4 -> 5
  - [ ] babel 7 -> 8
  - [ ] Rollup updates
- [ ] Update all other dependencies to compatible versions
- [ ] Test thoroughly after upgrades
  - [ ] Run all test suites
  - [ ] Manual testing of demo application
- [ ] Document breaking changes if any

## 8. Maintenance

### Version Control
- [ ] Create semantic versioning strategy
  - [ ] Document versioning policy
  - [ ] Set up release branches
- [ ] Set up change log process
  - [ ] Use conventional commits
  - [ ] Automate changelog generation
  - [ ] Document release process

### Future Development
- [ ] Outline roadmap for future features:
  - [ ] Additional grid types (polar, isometric)
  - [ ] Advanced layer management features
  - [ ] Performance optimizations for large canvases
  - [ ] Enhanced event handling system
  - [ ] Accessibility improvements
  - [ ] Server-side rendering support
- [ ] Consider module federation for larger applications
- [ ] Explore integration with other visualization libraries
  - [ ] D3.js integration
  - [ ] Three.js compatibility
  - [ ] Mapbox/Leaflet integration
- [ ] Community building
  - [ ] Create contribution guidelines
  - [ ] Set up issue templates
  - [ ] Create a community chat/discussion forum