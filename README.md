<a href="https://github.com/William-Mba/ngx-twcss">
<div align="center">
    <h1>Ngx-twcss</h1>
</div>
</a>

<div align="center">

The best way to quickly integrate [Tailwind CSS components]("https://tailwindui.com/") in [Angular]("https://angular.dev/").
<br />
Ready-to-use and customizable components for your next project.
</div>

## Resources

- [Intro](docs/intro.md)
- [Roadmap](docs/roadmap.md)
- [Components docs](docs/components/)
<!-- TODO: complete docs
-   [Quick start](docs/quick-start.md)
-   [Browser support and FAQ](docs/support.md) -->


## Getting started

### Prerequisites

[Install Tailwind CSS](https://tailwindcss.com/docs/guides/angular) in your Angular project.

### Install ngx-twcss

```ts
npm install ngx-twcss
```

### Modify tailwind.config.js

```js
module.exports = {
  ...
  content: [
    ...
    // add the line bellow
    "./node_modules/ngx-twcss/**/*.{html,ts}"
  ]
```

### Will you use forms ?

Install the forms plugin

```ts
npm install -D @tailwindcss/forms
```

Modify tailwind.config.js

```js
module.exports = {
  ...
  plugins: [
    // add the line bellow
    require('@tailwindcss/forms')
  ]
}
```

### Import ngx-twcss components

A. Using standalone components?

Import components in your *.component.ts file

```ts
@Component({
  standalone: true,
  imports: [
    ...
    PrimaryButton,
    SecondaryButton,
    ButtonGroup
  ],
  ...
})
export class ExampleComponent {
  ...
}
```

B. Not using standalone components?

Import components in your *.module.ts file

```ts
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    // Imports example
    PrimaryButton,
    SecondaryButton,
    ButtonGroup
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

```html
<nxt-secondary-button>Back</nxt-secondary-button>
<nxt-primary-button>Complete</nxt-primary-button>
```

For more usage samples, see the [components docs](docs/components/).
