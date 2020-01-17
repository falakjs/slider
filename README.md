# Slider

A simple slideshow for Falak Js.

# Installation

`flk i @flk/slider`

OR 

`npm install @flk/slider`

OR 

`yarn add @flk/slider`

# Usage

`home-page.component.html`

```html
<flk-slider [slides]=[this.slides]></flk-slider>
```


Where `this.slides` is an array of objects, each object contains: 

```
{
    "image": "image-path"
}
```

# Options

All Of the slider options relies under the `slider` key in the config.

It can also be passed to the component directly.

| Key  | Default  |  Available Options | Description   |
|---|---|---|---|
| `loop`  | **true**  | **true** / **false**  |  Display slides infinity. |
| `autoPlay`  | **true**  | **true** / **false**  |  Will auto play next slide after x amount of `delay` option. |
| `delay`  | **5000**  | Number  | Wait for time before playing next slide, works only when `autoPlay` enabled  |
| `pauseOnHover`  | **true**  | **true** / **false**  |  Pause auto play when hovering on the slider. |
| `animation`  | **fade**  | **fade**  |  Sliding animation. |
| `centered`  | **true**  | **true** / **false**  |  If set to true, slides will be centered in the slider block. |
| `height`  | **auto**  | **any css unit value**  | Set slider height. |
| `bullets`  | **true**  | **true** / **false**  |  Display bullets below the slider. |
| `navigation`  | **true**  | **true** / **false**  |  Enable Navigation buttons `prev` and `next`. |
| `navigationIcon.prev`  | **angle-left**  | **any Fontawesome icon**  | Previous Button icon. |
| `navigationIcon.next`  | **angle-right**  | **any Fontawesome icon**  | Next Button icon. |



