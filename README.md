[![Netlify Status](https://api.netlify.com/api/v1/badges/e0ecca70-c0f5-41f1-8bb9-7461cae792f9/deploy-status)](https://app.netlify.com/sites/tinaba-static/deploys)

### How to proceed

1.  Prepare a coffee
1.  Run: `npm i` to install the dependencies
1.  Run: `npm run dev` to build and watch
1.  Start coding!


### Notes:
* To add a new page to the site, you must add the mapping to the `gulpfile.js` inside the `handlebars` gulp task, modify the `files` variable and add the mapping to URL.

The following is an example to adding a `contact-us` page:
```
var files = [
  ['source/index.html', 'public/index.html'],
  ['source/contact-us.html', 'public/contact-us/index.html']
];
```

### Deploy

1.  Run: `npm run deploy` to build 

You only need to deploy the server code and the public folder.

### [Changelog](CHANGELOG.md)
