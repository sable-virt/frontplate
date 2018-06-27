# liginc/frontplate

`liginc/frontplate` is [frontainer/frontplate](https://github.com/frontainer/frontplate)'s fork project.


## Create New Project

`$ frp create {project name} -g liginc/frontplate`  
`$ cd {project name}`  
`$ npm i`

---

## Commands for development


### watch task

```
$ frp serve
```


### build task (for development)

```
$ frp build
```


### build task (for production)

The production build will compress the file

```
$ frp build -p
```

---

## Config File

Build of frontplate-cli can be configured by [frp.config.js](https://github.com/liginc/frontplate/blob/master/frp.config.js).

When customization is necessary, override the setting based on [the original file](https://github.com/frontainer/frontplate-cli/tree/master/config) and use it.

As an example, `liginc/frontplate` overrides the style setting.


[https://github.com/liginc/frontplate/blob/master/frp.config.js](https://github.com/liginc/frontplate/blob/master/frp.config.js)
```js
module.exports = function(production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = 'public';
  return {
    clean: {},
    html: {},
    style: production ? require('./config/style.config.production') : require('./config/style.config'),
    script: production ? {} : {},
    server: {},
    copy: {},
    sprite: [],
    test: {}
  }
};
```

[https://github.com/liginc/frontplate/blob/master/config/style.config.js](https://github.com/liginc/frontplate/blob/master/config/style.config.js)
```js
module.exports = {
  src: `${FRP_SRC}/sass/**/*.scss`,
  dest: `${FRP_DEST}/assets/css`,
  outputStyle: 'compact',
  sourceMap: true,
  plugins: [
    require('autoprefixer')({
      browsers: [ // Customized here
        'ie >= 10',
        'Android >= 4.4'
      ]
    })
  ],
  noGuide: false,
  styleguide: {
    title: 'StyleGuide',
    verbose: false,
    clean: true,
    params: {},
    css: `../${FRP_DEST}/assets/css/style.css`,
    // script: '../public/assets/js/app.js',
  }
};
```

---

## Customized according to project

Introduction of some frequently used customization examples.

### Global variables passed to ejs

Variables passed to ejs can be managed with external files.

#### Step1

frp.config.js
```js
module.exports = function(production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = 'public';
  return {
    clean: {},
    html: {
      params: {
        person: require('./ejs-data/person/seito')  // add
      }
    },
    style: production ? require('./config/style.config.production') : require('./config/style.config'),
    script: production ? {} : {},
    server: {},
    copy: {},
    sprite: [],
    test: {}
  }
};

```

#### Step2

Create a json file.

./ejs-data/person/seito.js

```js
module.exports = {
  name: '堀口 誠人',
  name_en: 'Seito Horiguchi',
  thumbnailURL: 'https://cdn.liginc.co.jp/wp-content/uploads/2014/10/profile_detail711.jpg',
  job: 'フロントエンドエンジニア',
  profile: `最近フロントエンドエンジニアになりました。 
第一回HTML5カルタ大会で優勝しました。
休日の過ごし方は、"Jazz Barでスコッチを片手に『世界の終りとハードボイルド・ワンダーランド』を読む"です。`,
  link: [
    {
      title: 'こうして僕はLIGで最初のフロントエンドエンジニアになった/株式会社LIG 堀口誠人氏・林優一氏',
      url: 'http://time.levtech.jp/article/a-lig-1/'
    },
    {
      title: 'SlideShare',
      url: 'http://www.slideshare.net/horiguchiseito'
    }
  ]
};
```

#### Step3

Mark up and build.

index.ejs
```ejs
<h1><%- person.name %><small><%- person.name_en %></small></h1>

<img src="<%= person.thumbnailURL %>" alt="">

<p><%- person.profile %></p>

<ul>
  <% for (var i = 0, len = person.link.length; i < len; i++) { %>
  <% var item = person.link[i]; %>
  <li>
    <a href="<%= item.url %>"><%= item.title %></a>
  </li>
  <% } %>
</ul>
```

### Generate a sprite image

Customize automatic generation of sprite images.
An example of generating icon.png and ribbon.png.

`Recently, there are many cases using SVG sprite, so it's not used much.`

* [svg-sprite](https://github.com/jkphl/svg-sprite)
* [IcoMoon App - Icon Font, SVG, PDF & PNG Generator](https://icomoon.io/app/)

#### Step1

frp.config.js
```js
module.exports = function(production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = 'public';
  return {
    clean: {},
    html: {
      params: {
        person: require('./ejs-data/person/seito')
      }
    },
    style: production ? require('./config/style.config.production') : require('./config/style.config'),
    script: production ? {} : {},
    server: {},
    copy: {},
    sprite: [ // add
      {
        src: `${FRP_SRC}/sprites/icon/*.{png,gif,jpg}`,
        destImage: `${FRP_SRC}/images/icon.png`,
        destCSS: `${FRP_SRC}/sass/sprites/_icon.scss`,
        imgPath: '../images/icon.png',
        padding: 2,
        scale: 1.0,
        mixin: true,
        selector: true
      },
      {
        src: `${FRP_SRC}/sprites/ribbon/*.{png,gif,jpg}`,
        destImage: `${FRP_SRC}/images/ribbon.png`,
        destCSS: `${FRP_SRC}/sass/sprites/_ribbon.scss`,
        imgPath: '../images/ribbon.png',
        padding: 2,
        scale: 1.0,
        mixin: true,
        selector: true
      }
    ],
    test: {}
  }
};
```

#### Step2

Add images to `sprites/icon` directory and `sprites/ribbon` directory.  
Execute the `$ frp build` command.

### Specify the file to be copied

By default, The files located under lib and images directory will be automatically copied to the destination.  
So, generally you don't have to modify the config, unless you need to copy the files outside of those directories.

```js
module.exports = {
    // 'path/from': '/path/to'
    [`${FRP_SRC}/lib/**/*`]: `${FRP_DEST}/assets/lib`,
    [`${FRP_SRC}/images/**/*`]: `${FRP_DEST}/assets/images`
};
```

### Multi Projects

When desktop site and mobile site are independent.


#### Step1

Edit frp.config.js.

```js
module.exports = function(production) {
  global.FRP_SRC = 'src/pc';
  global.FRP_DEST = 'public/pc';
  return {
    clean: {},
    html: {},
    style: production ? require('./config/style.config.production') : require('./config/style.config'),
    script: production ? {} : {},
    server: {},
    copy: {},
    sprite: [],
    test: {}
  }
};
```

Create frp.sp.config.js.

```js
module.exports = function(production) {
  global.FRP_SRC = 'src/sp';
  global.FRP_DEST = 'public/sp';
  return {
    clean: {},
    html: {},
    style: production ? require('./config/style.config.production') : require('./config/style.config'),
    script: production ? {} : {},
    server: {},
    copy: {},
    sprite: [],
    test: {}
  }
};
```

#### Step2

Duplicate src directly under `src/pc` and `src/sp`.

#### Step3

Build with frp.sp.config.js.

`$ frp build -c frp.sp.config.js`

Alternatively, you can execute commands interactively with the `frp` command.


```bash
$ frp
? choose execute command build
? choose config file (Use arrow keys)
❯ frp.config.js 
  frp.sp.config.js 
```


