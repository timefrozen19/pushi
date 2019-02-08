# CSS (层叠样式表 Cascading Style Sheets) 概述

怎样允许为一个固定的 HTML 设置无限种可能的样式？所谓样式，即视觉效果。肉眼能分辨的事物基本包含3种：大小，距离，色彩，形状：

- 大小：可以设置元素的长度，宽度，文字的字号，行高等。
- 距离：元素之间的距离，文字之间的距离
- 色彩：可以设置元素的背景色，背景图片，边框颜色，文字颜色
- 形状：可以设置矩形边框，圆角边框，文字的字体

上面的几点可能能够满足平面设计的需求，但是无法满足网页设计的需求，原因是：

- 浏览器的大小不一。例如分辨率是 1920x1080 和分辨率 1024x768，对于前者，我们让宽度为 20 的元素的左边距为 950 即可达到居中的效果，而同样的设置，显然无法在后者的分辨率下显示居中。例如，在较宽的屏幕我们希望一行显示4列，而在较窄的屏幕，比如手机等移动设备，我们希望一行显示1列。
- 网页有交互。例如多数网页都可以向下滚动，而我们希望导航栏在滚动时依然保持在最上面的位置。例如当鼠标在某个链接上方时，我们希望改变链接的样式。（复杂的交互可以通过 JavaScript 实现，本章不讨论）
- 需要动画特效。比如我们希望元素有淡入淡出等效果。

而 CSS 可以满足以上绝大部分的需求。如果能配合 JavaScript （在下一章介绍）更有无限种可能。

## CSS 基本语法

CSS 语法的思路是：

1. 选中元素
2. 设置属性和值

### 内联样式 (inline style)

使用 style 属性设置 CSS 的方式叫**内联样式 (inline style)**。

一个例子，代码和效果如下：

```html
<p style="color: yellow; text-align: center">内联样式</p>
```

<div style="margin: 0, padding: 0; border: 1px dashed">
<p style="color: yellow; margin: 0; text-align: center">内联样式</p>
</div>

在上面的例子中，我们通过给元素添加`style`属性选中元素，设置了*属性(property)*`color`和`text-align`，*值(value)*分别为`yellow`和`center`。属性和值连起来叫*声明(declaration)*，多个声明用分号`;`隔开，格式为：

```
<属性>:<值>;<属性2>:<值2>;...
```

在需要设置很多元素为相同的样式时，内联样式这样做显然比较冗长，混合了内容与样式的代码，在修改时也不方便，还不支持所有 css 功能，比如不支持**伪类(pseudo-class)**和**媒体查询(media query)**（这两个特性将在后面介绍）。所以一般不推荐这种做法。

### 内部样式

所谓内部样式是指通过`<style>`标签以及其内容来设置样式，如下可以实现上文例子的同样效果：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>css intro</title>
    </head>
    <style>
    p {
        color: yellow; 
        text-align: center
    }
    </style>
    <body>
        <p>内部样式</p>
    </body>
</html>
```

<div style="margin: 0, padding: 0; border: 1px dashed">
<p style="color: yellow; margin: 0; text-align: center">内联样式</p>
</div>

通过内部样式，将样式与 HTML 分离开来了，这样 html 就看起来更加清晰，特别是在复杂的网页的情况下。但是这样需要选中元素，选中元素使用**CSS 选择器(CSS Selector)**，上看的例子中`<style>`标签中的`p`就是选择器，这里的意思是给当前页面中的所有`<p>`元素，应用后面`{}`中定义的样式。除了用选择某一种元素之外，CSS 选择器还有很多种方式，可以按照元素的`class`属性选，按照 id 属性选，按照某种其他属性选，另外还有很多组合方式，例如选择某个元素的子元素等。将在 CSS 选择器小节详细介绍。

### 外部样式表

将 CSS 写到独立的文件中，然后通过`<link>`标签引入到页面，这种方式成为外部样式表。这样也可以将样式与 HTML 分离。是一般情况下推荐使用的方式。例如：

文件：index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>css intro</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <p>外部样式</p>
    </body>
</html>
```

文件：style.css

```css
p {
    color: yellow; 
    text-align: center
}
```

效果：

<div style="margin: 0, padding: 0; border: 1px dashed">
<p style="color: yellow; margin: 0; text-align: center">外部样式</p>
</div>
在上面的例子中，我们在`<head>`标签中添加了子元素`<link rel="stylesheet" href="style.css">`其中 rel 指定资源的类型，href 指定了资源的 URL（在这里是**相对 URL**）。可以参考[资源定位和 URL]() 章节了解如何写 URL。

### CSS 注释

CSS 注释即在 CSS 中的一段用“`/*`”和“`*/`”包含起来的文字，这段文字对页面没有任何效果，例如：

```css
p { color: yellow } /* 让段落中的颜色为 yellow */
/*
多行注释
p { color: red }
*/
```

本章将先后介绍 CSS 选择器，CSS 盒模型 (Box Model)，文档流 (Normal Flow)，CSS 常见属性，FlexBox 布局。随后会有一些应用作为例子，帮助大家理解。

## 默认的 CSS

如果不添加任何 CSS 会怎样呢？浏览器有默认的 css，不同的浏览器还会有区别，以至于同样的 HTML 用不同的浏览器打开会不一样，不过通常区别不大。如果希望各个浏览器效果一样，可以事先用 CSS 将所有默认值设置好，这个方式也称为 CSS Reset，万维网上可以搜索出很多例子。

## 属性的继承 (Inheritance)

有些属性我们不希望所有元素都设置一遍，例如字体(font)，颜色(color)。这两个属性有继承的效果，即如果本身没有设置，那么使用父元素的值，如果父元素没有，使用父元素的父元素的值，直到根元素，即 html 元素。

另外一些属性通常希望分别设置，比如大小，边框，背景图片等。查阅 MDN 文档可以知道一个 CSS 属性是否默认会继承。

可以设置某个元素的一个属性为继承，例如 box-sizing 属性默认不继承，我们设置为继承：
```css
p { box-sizing: inherit; }
```