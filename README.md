# Superhero Button

## How to embed the button in your website 
Select the button style you like the most and copy the code to your website's HTML.
Edit the `data-account` attribute and put your address or .chain name in order to be able to receive tips.

### Icon

<img width="49" alt="Screenshot 2020-05-13 at 9 55 51" src="https://user-images.githubusercontent.com/13139371/81780948-04b91b00-9500-11ea-9a50-3f483613dca0.png">

```html
<a class="superhero-tip-button" data-size="icon" data-account="ak_... or .chain name">
  Donate
</a>
<script src="https://superhero.com/buttons/widget.js"></script>
```

### Small

<img width="142" alt="Screenshot 2020-05-13 at 9 55 59" src="https://user-images.githubusercontent.com/13139371/81780933-01259400-9500-11ea-8d84-a2624b43edec.png">

```html
<a class="superhero-tip-button" data-size="small" data-account="ak_... or .chain name">
  Donate
</a>
<script src="https://superhero.com/buttons/widget.js"></script>
```

### Medium

<img width="203" alt="Screenshot 2020-05-13 at 9 55 56" src="https://user-images.githubusercontent.com/13139371/81780936-0256c100-9500-11ea-960e-9256a941285d.png">

```html
<a class="superhero-tip-button" data-size="medium" data-account="ak_... or .chain name">
  Donate
</a>
<script src="https://superhero.com/buttons/widget.js"></script>
```

### Large

<img width="140" alt="Screenshot 2020-05-13 at 9 55 54" src="https://user-images.githubusercontent.com/13139371/81780943-0387ee00-9500-11ea-8108-2e5939821a7b.png">

```html
<a class="superhero-tip-button" data-size="large" data-account="ak_... or .chain name">
  Donate
</a>
<script src="https://superhero.com/buttons/widget.js"></script>
```


Atribute | Description
--- | --- 
data-size | Default `icon`. Possible values `icon`, `large`, `medium`, `small`
data-account | Optional. When set you can easily claim your tips. Possible values `account public key` or `.chain name`
data-href | Optional. Url to be tipped. Default is set to current url - `window.location.href` 



## How to start the project for development

Requirements:
- Node
- Npm

```sh
$ npm install
$ npm start
```

## How to build for deployment

```sh
$ npm run build
```
