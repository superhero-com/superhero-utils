# superhero-button

<img width="1092" alt="Screenshot 2020-05-04 at 19 19 59" src="https://user-images.githubusercontent.com/13139371/80988488-411fb380-8e3c-11ea-8889-2edaed95825e.png">


## How to start

```sh
$ npm install
$ npm start
```

## How to build

```sh
$ npm run build
```

## How to embed
Atribute | Description
--- | --- 
data-size | Default `icon`. Possible values `icon`, `large`, `medium`, `small`
data-account | Optional. When set you can easily claim your tips. Possible values `account public key` or `.chain name`
data-href | Optional. Url to be tipped. Default is set to current url - `window.location.href` 
```html
<a class="superhero-tip-button" data-size="large" data-account="ak_... or .chain name">
  Donate
</a>
<script src="https://superhero.com/buttons/widget.js"></script>
```
