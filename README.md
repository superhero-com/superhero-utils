# Superhero Utils

## Installation

You can get it as npm package or from the unpkg.com.

### With npm

- run `$ npm install @aeternity/superhero-utils --save` in the root or your project
- import this package by `import superheroUtils from '@aeternity/superhero-utils';`

### With unpkg.com and `<script>` tag

Add this to your website's HTML:

```html
<script src="https://unpkg.com/@aeternity/superhero-utils@0.6.0/dist/index.js"></script>
```

This will define `superheroUtils` in the global scope.

### With custom styles

You can import and process styles manually by importing `dist/index.css` and
`dist/index-without-styles.js` separately. Or even you can don't import styles at
all, and write your own instead.

### React and Vue versions

By default `dist/index.js` is imported, instead of it, you can import a specific
version for React or Vue by importing `dist/react-without-styles.js` or
`dist/vue-without-styles.js` accordingly. The framework-specific version contains
all features available in the default one plus specific for particular framework wrappers.

## Usage

### Button

#### `superheroUtils.createButton`

This library exports a function that creates buttons. This function accepts arguments:

- class name of nodes that should become buttons, or the DOM node itself
- a target: account public key, name ending with .chain, or an ID of the post on [superhero.com](https://superhero.com/)
- options object

| Option | Description                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------ |
| `size` | Default `icon`. Possible values `icon`, `large`, `medium`, `small`. See the screenshots section below. |

#### Example

```html
<div class="my-button">Donate</div>
<script type="text/javascript">
  superheroUtils.createButton('.my-button', 'example.chain', {
    size: 'large',
  });
</script>
```

Select the button style you like the most and adopt this code to your website's HTML.
Additional examples can be found [here](examples/index.html).

#### Screenshots

| Size value | Screenshot                                                                                                                                |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `icon`     | <img width="40" alt="icon" src="https://user-images.githubusercontent.com/9007851/100574757-c3495b00-32eb-11eb-8625-c10c20d26b46.png">    |
| `small`    | <img width="143" alt="small" src="https://user-images.githubusercontent.com/9007851/100574756-c2b0c480-32eb-11eb-8f33-c648ac2f5d53.png">  |
| `medium`   | <img width="216" alt="medium" src="https://user-images.githubusercontent.com/9007851/100574755-c2b0c480-32eb-11eb-9c1e-258d9282112e.png"> |
| `large`    | <img width="148" alt="large" src="https://user-images.githubusercontent.com/9007851/100574754-c2182e00-32eb-11eb-8fb0-281d73d9a75a.png">  |

#### `superheroUtils.createButtonByDiv`

The same function as the previous one except that the first argument should be an
instance of `HTMLDivElement`. The button content will be added to that node instead of
the DOM node replacing. The function with this interface simplifies integration into
Frontend frameworks like Vue and React.

#### `superheroUtils.Button` (only in React and Vue versions)

The component that is compatible with the corresponding framework. Accepts the same
properties as [`superheroUtils.createButton`](#superheroutilscreatebutton)'s options.

#### Example

```html
<button size="large" account="example.chain" />
```

### Paywall (`superheroUtils.ensurePaid`)

This function asks the user to send a tip to the specified target. It won't ask to send a
tip if it was sent before using the current browser. This function accepts arguments:

- a target: account public key, name ending with .chain, or an ID of the post on [superhero.com](https://superhero.com/)

#### Example

```html
<script type="text/javascript">
  superheroUtils.ensurePaid('example.chain');
</script>
```

Additional examples can be found [here](examples/index.html).

#### Screenshots

<img width="607" alt="Paywall" src="https://user-images.githubusercontent.com/9007851/100574723-b2004e80-32eb-11eb-99b7-765869e665b9.png">

## Start the project for development

You need to install [Node.js](https://nodejs.org/) firstly.

```sh
$ npm install
$ npm install --prefix examples/react-vite
$ npm install --prefix examples/vue-vite
$ npm start
```

## Build for production

```sh
$ npm run build
```
