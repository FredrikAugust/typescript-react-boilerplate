# Typescript and react practise program

This is just a simple progrma to teach myself the basics of using typescript and
react.

## Rough step-by-step guide

_Mostly just rewritten content from [this
website](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html).

### 1. Install deps
```bash
yarn add react react-dom @types/react @types/react-dom
```

### 2. Install dev tools
```bash
yarn add -D typescript awesome-typescript-loader source-map-loader
```

### 3. Create `tsconfig`
```javascript
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ]
}
```

### 4. Add initial React component
```typescript
import * as React from 'react';

export interface AppProps {
  compiler: string;
  framework: string;
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <h1>Hello, World.</h1>
        <p>This website is made with { this.props.framework } and compiled with { this.props.compiler }.</p>
      </div>
    );
  }
}
```

## License

Copyright 2018 Fredrik August Madsen-Malmo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
