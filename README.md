# Superhero Button

You can get it as npm package or from the unpkg.com.

## With npm
```
npm i @aeternity/superhero-button --save
```

## With unpkg.com and <script> tag
Select the button style you like the most and copy the code to your website's HTML.
Edit the `account` option and put your address or .chain name in order to be able to receive tips.

To create instance of superheroButton with styles import
```html
<script src="https://unpkg.com/@aeternity/superhero-button/dist/superhero-button.styles.js"></script>
```
To deal with styles by your own import
```html
<link rel="stylesheet" href="https://unpkg.com/@aeternity/superhero-button/dist/style.css">
<script src="https://unpkg.com/@aeternity/superhero-button/dist/superhero-button.js"></script>
```

### Icon

<img width="49" alt="Screenshot 2020-05-13 at 9 55 51" src="https://user-images.githubusercontent.com/13139371/81780948-04b91b00-9500-11ea-9a50-3f483613dca0.png">

```html
<div class="icon">Donate</div>
<script src="https://unpkg.com/@aeternity/superhero-button/dist/superhero-button.styles.js"></script>
<script type="text/javascript">
  superheroButton('.icon', { size: 'icon', account: 'ak_... or .chain name' });
</script>
```

### Small

<img width="142" alt="Screenshot 2020-05-13 at 9 55 59" src="https://user-images.githubusercontent.com/13139371/81780933-01259400-9500-11ea-8d84-a2624b43edec.png">

```html
<div class="small">Donate</div>
<script src="https://unpkg.com/@aeternity/superhero-button/dist/superhero-button.styles.js"></script>
<script type="text/javascript">
  superheroButton('.small', { size: 'small', account: 'ak_... or .chain name' });
</script>
```

### Medium

<img width="203" alt="Screenshot 2020-05-13 at 9 55 56" src="https://user-images.githubusercontent.com/13139371/81780936-0256c100-9500-11ea-960e-9256a941285d.png">

```html
<div class="medium">Donate</div>
<script src="https://unpkg.com/@aeternity/superhero-button/dist/superhero-button.styles.js"></script>
<script type="text/javascript">
  superheroButton('.medium', { size: 'medium', account: 'ak_... or .chain name' });
</script>
```

### Large

<img width="140" alt="Screenshot 2020-05-13 at 9 55 54" src="https://user-images.githubusercontent.com/13139371/81780943-0387ee00-9500-11ea-8108-2e5939821a7b.png">

```html
<div class="large">Donate</div>
<script src="https://unpkg.com/@aeternity/superhero-button/dist/superhero-button.styles.js"></script>
<script type="text/javascript">
  superheroButton('.large', { size: 'large', account: 'ak_... or .chain name' });
</script>
```


Optios | Description
--- | --- 
size | Default `icon`. Possible values `icon`, `large`, `medium`, `small`
account | Optional. When set you can easily claim your tips. Possible values `account public key` or `.chain name`
url | Optional. Url to be tipped. Default is set to current url - `window.location.href` 


## Usage example
```html
<div class="icon">Donate</div>
<div class="small">Donate</div>
<div class="medium">Donate</div>
<div class="large">Donate</div>

<script src="https://unpkg.com/@aeternity/superhero-button/dist/superhero-button.styles.js"></script>
<script type="text/javascript">
/* 
* Create superhero button instance by pointing element with its selector
*/
superheroButton('.icon', { size: 'icon', account: 'ak_... or .chain name' });
superheroButton('.small', { size: 'small', account: 'ak_... or .chain name' });
superheroButton('.medium', { size: 'medium', account: 'ak_... or .chain name' });

/*
* Create superhero button instance by passing DOM element instance
*/
superheroButton(document.querySelector('.large'), { size: 'large', account: 'ak_... or .chain name' });
</script>
```

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
