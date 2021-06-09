# _S - [Demo](https://demo.vitathemes.com/demo/) | [Download](https://wordpress.org/themes/demo/)
Just another WordPress theme

![Home Page](screenshot.png)

## Features
* Feature
* …and much more

See a working example at [https://demo.vitathemes.com/demo/](https://demo.vitathemes.com/demo/).

## Theme installation

1. Simply install as a normal WordPress theme and activate.
2. Install recommended plugins
3. In your admin panel, navigate to `Appearance > Customize`.
4. Put the finishing touches on your website by adding a logo, typography settings, custom colors and etc.

## Theme structure

```shell
themes/_S/          # → Root of your theme
│── assets/               # → All assets goes here
│   │── css               # → Compiled css
│   │── fonts             # → Fonts
│   │── js                # → Js files
│   └── src               # → source files
├── languages/            # → Theme Language files
├── template-parts/       # → Theme Part files (Include)
├── node_modules/         # → Node.js packages
├── package.json          # → Node.js dependencies and scripts
│── classes/              # → Custom PHP classes
├── inc/                  # → Theme functions
│   ├── TGMPA/            # → TGMPA library
│   ├── customizer.php    # → All codes related to WordPress Customizer (We use Kirki Framework)
│   ├── template-functions.php    # → Custom template tweaks
│   └── template-tags.php         # → Custom template tags
│   └── hooks.php         # → Theme custom hooks
│   └── tgmpa-config.php         # → Configuration file for TGMPA
└── page-templates/       # → Page Templates
```

## Theme setup

Edit `functions.php` to enable or disable theme features, setup navigation menus, post thumbnail sizes, and sidebars.

## Theme development

* Run `npm install` from the theme directory to install dependencies
* Run `gulp` from the root of theme directory and it's starting to watch any changes in scss files from the `assets/src/sass` folder
* Run `gulp rtlcss` to generate a rtl-css file from your styles
* Run `gulp editor` to create a css file to add to your editor to make it like your front-end

## License

_S is licensed under [GNU GPL](LICENSE).
