# Fabric Layers Monorepo

This is a monorepo containing the following packages:

## Packages

### `fabric-layers-core`
A fabric.js coordinate-plane (grid) & layers library.

### `fabric-layers-react`
React components and hooks for fabric-layers-core.

## Getting Started

### Prerequisites
- Node.js v22.16.0 (use nvm)
- npm (comes with Node.js)

### Installation

1. Install Node.js v22.16.0 using nvm:
   ```bash
   nvm install 22.16.0
   nvm use
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build all packages:
   ```bash
   npm run build
   ```

## Development

### Building Packages

Build all packages:
```bash
npm run build
```

Build a specific package:
```bash
nx build fabric-layers-core
# or
nx build fabric-layers-react
```

### Running Tests

Run tests for all packages:
```bash
npm test
```

Run tests for a specific package:
```bash
nx test fabric-layers-core
# or
nx test fabric-layers-react
```

### Linting

Lint all packages:
```bash
npm run lint
```

Lint a specific package:
```bash
nx lint fabric-layers-core
# or
nx lint fabric-layers-react
```

## Project Structure

```
fabric-layers/
├── packages/
│   ├── fabric-layers-core/     # Core library
│   └── fabric-layers-react/    # React bindings
├── examples/                   # Example applications
│   ├── fabric-layers-core/     # Core examples
│   └── fabric-layers-react/    # React examples
├── tools/                      # Shared tooling
├── .nvmrc                     # Node.js version
├── nx.json                    # Nx workspace configuration
├── package.json               # Root package.json
└── tsconfig.base.json         # Base TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
