# Superhero Utils

## Installation

You can get it as npm package or from the unpkg.com.

### With npm
- run `$ npm install @aeternity/superhero-utils --save` in the root or your project
- import this package by `import superheroUtils from '@aeternity/superhero-utils';`

### With unpkg.com and `<script>` tag
Add this to your website's HTML:
```html
<script src="https://unpkg.com/@aeternity/superhero-utils@0.5.0/dist/index.js"></script>
```
This will define `superheroUtils` in the global scope.

### With custom styles
You can import and process styles manually by importing `dist/index.css` and
`dist/index-without-styles.js` separately. Or even you can don't import styles at
all, and write your own instead.

## Usage

- [Plain JavaScript](#button-superheroutilscreatebutton)
- [React.js](#reactjs-component)

### Button (`superheroUtils.createButton`)
This library exports a function that creates buttons. This function accepts arguments:
- class name of nodes that should become buttons, or the DOM node itself
  (this option simplifies integration into Frontend frameworks like Vue/React)
- options object

Option | Description
--- | ---
`size` | Default `icon`. Possible values `icon`, `large`, `medium`, `small`. See the screenshots section below.
`account` | Optional. When set you can easily claim your tips. Accepts account public key or name ending with .chain.
`url` | Optional. Url to be tipped. Default is set to the current page url.

#### Example

```html
<div class="my-button">Donate</div>
<script type="text/javascript">
  superheroUtils.createButton('.my-button', {
    size: 'large',
    account: 'example.chain',
    url: 'https://example.com',
  });
</script>
```
Select the button style you like the most and adopt this code to your website's HTML.
Additional examples can be found [here](./index.html).

#### Screenshots

Size value | Screenshot
--- | ---
`icon` | <img width="42" alt="icon" src="https://user-images.githubusercontent.com/13139371/96836940-57ebae00-144e-11eb-84f8-3a25e1e5da92.png">
`small` | <img width="142" alt="small" src="https://user-images.githubusercontent.com/13139371/81780933-01259400-9500-11ea-8d84-a2624b43edec.png">
`medium` | <img width="189" alt="medium" src="https://user-images.githubusercontent.com/13139371/96836937-56ba8100-144e-11eb-9e3b-4e4c92b9bbb4.png">
`large` | <img width="140" alt="large" src="https://user-images.githubusercontent.com/13139371/81780943-0387ee00-9500-11ea-8108-2e5939821a7b.png">

### Paywall (`superheroUtils.ensurePaid`)
This function asks the user to send a tip to the specified page. It won't ask to send a
tip if it was sent before using the current browser. The function accepts options object.

Option | Description
--- | ---
`url` | Optional. Url to be required to pay for. Default is set to the current page url.

#### Example

```html
<script type="text/javascript">
  superheroUtils.ensurePaid({ url: 'https://example.com' });
</script>
```
Additional examples can be found [here](./index.html).

#### Screenshots

<img width="607" alt="Paywall" src="https://user-images.githubusercontent.com/9007851/95088220-58d0d000-072b-11eb-8cd6-57052d40765c.png">

## React.js component

### Usage with ES6

Props the same with [plain js vesrion](##button-superheroutilscreatebutton).

#### Example: 
```js
import Button from '@aeternity/superhero-utils/button-react';

<Button size="icon" account="example.chain">
```

## Start the project for development

You need to install [Node.js](https://nodejs.org/) firstly.

```sh
$ npm install
$ npm start
```

## Build for production

```sh
$ npm run build
```
