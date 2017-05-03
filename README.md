# Summary

A Node.js package that gets a npm package total downloads

## Usage

```js
npm install npm.getstats -S
```

Then,

```js
var npmGetStats = require('npm.getstats');
npmGetStats.getNpmStats('jquery')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(data) {
        console.log(data);
    });
```

## Project Site
<a href="https://harip.github.io/site/npmhome">Project Site</a>

## License

Apache 2.0