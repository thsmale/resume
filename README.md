# Resume

This is an example resume created using [react-pdf](https://react-pdf.org/).
See the [example resume](./example/resume.pdf) that was created with this code.
One can modify the values in the resume by using the [example data](./example/data/).

## Running locally
```sh
npm i
cp -r example/data/ src
npm run dev
```

## Viewing in the browser
Navigate to the URL http://localhost:5173/.

## Building a local PDF
```sh
npx tsx generate-pdf.tsx
```
This will create a file in this directory called resume.pdf.
Ensure `import React from 'react';` is included at the top of all React files, otherwise this script may fail to run.

## Viewing in VSCode
I recommend [vscode-pdf](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf) because the pdf will automatically update when making hot changes.

## Notes
Every time a change is made in the src directory, a new copy of the resume will be created.
To undo this behavior, modify the [vite.config.ts](./vite.config.ts).