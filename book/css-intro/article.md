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

## CSS 选择器 (CSS Selector)

在使用内部样式或者外部样式的时候，需要用到 CSS 选择器，指定一个或者多个元素。CSS 选择器分为以下 4 种：

- 基本选择器：包括类型选择器(Type Selector)，类选择器(Class Selector)，ID 选择器(ID Selector)，通用选择器(Universal Selector)，属性选择器(Attribute Selector)
- 组合选择器：包括紧邻兄弟选择器(Adjacent Sibling Selector)，一般兄弟选择器(General Sibling Selector)，子选择器(Child Selector)，后代选择器(Descendant Selector)。组合选择器可以认为是通过元素的相互关系来选择。
- 伪类(pseudo-class)
- 伪元素(pseudo-element)

这里介绍几例常用的，完整的 CSS 选择器说明可以阅读 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)。

### 类型选择器(Type Selector)

选择所有匹配给定元素名的元素，下面的例子中给页面中所有的`<p>`元素设定了样式：

```css
p { color: yellow; }
```

### 类选择器

根据元素的`class`属性选择相应的元素，用“`.`”加上类名表示。

```css
.yellow { color: yellow; } /* 下面 HTML 中第一个<p>元素和两个<div>元素被选中。*/
div.yellow { font-size: 20px; } /* 选择元素为 div 并且类为 yellow 的元素。下面 HTML 中两个 <div> 元素被选中 */
div.yellow.red { font-weight: bold; } /* 选择同时拥有 yellow 和 red 类的元素。下面 HTML 只有第二个 <div> 元素被选中 */

```

```html
<p class="yellow">选中的元素</p>
<div class="yellow ">选中的元素</div>
<div class="yellow red">选中的元素</div>
<p>未被选中</p>
```

### ID 选择器

根据元素的 `id` 属性选择相应的元素，用“`#`”加上 id 表示。在下面的例子中，第一个`<p>`元素被选中。

```css
#green { color: green; }
```

```html
<p id="green">选中的元素</p>
<p class="green">未被选中</p>
```

### 通用选择器

通用选择器匹配所有元素，用“`*`”表示，下面的例子为所有页面元素应用了样式：

```css
* { margin: 0; }
```

### 后代选择器

我们介绍过 HTML 文档是个树形结构，所谓后代即某个元素内的所有元素，包括其子元素，子元素的子元素等等。后代选择器属于**组合选择器**，需要组合两个或多个选择器，例如：

```css
div span { color: blue; } /* 只有作为 <div> 后代的 <span> 元素被选中 */
.center p { text-align: center; } /* 只有作为 center 类元素的后代的 <p> 元素被选中 */
```

```html
<span>默认文字颜色</span>
<div>
    <p>一段文字<span>显示蓝色</span>另一段文字</p>
</div>
<div class="center"><p>文字剧中</p></div>
```

<div class="example" style="margin: 0; border: 1px dashed">
    <span>默认文字颜色</span>
    <div style="margin: 0;">
        <p style="margin: 0;">一段文字<span style="color: blue;">显示蓝色</span>另一段文字</p>
    </div>
	<div style="margin: 0"><p style="text-align: center; margin: 0">文字剧中</p></div>
</div>
## 属性选择器

TODO

### 伪类选择器

伪类允许基于未包含在文档树中的状态信息来选择元素，例如，我们希望访问过的链接和未访问过的显示不同的样式；希望鼠标悬停在元素上展示特别的效果。具体的写法是在选择器后面加上伪类`<选择器>:<伪类>`，某些伪类也可以省略冒号前面的部分(例如`:not()`) 。下面的选择器`.shine:hover`，表示类为`shine`的元素，在鼠标悬停时应用样式。

```html
<style>.shine:hover { color: red; background-color: yellow; }</style>
<a class="shine">鼠标悬停效果</a>
```

<div style="margin: 0; border: 1px dashed">
<style>
    .shine:hover{ color: red; background-color: yellow; }
</style>
<a class="shine">鼠标悬停效果</a>
</div>

包括`:hover`，一共有几十种 css 伪类，常用的有以下：

- `:link`,`:visited`,`:hover`,`:active` 这几个伪类主要作用于`<a>`元素。分别作用于“未访问过的”，“访问过的”，“鼠标悬停中的”，“激活的(鼠标点下去后)”。当几个伪类同时存在一个元素的时候，优先级增。即如果符合的话，优先应用`:active`，其次`:visited`，再次`:hover`，最后`:link`。
- `:first-child`,`:last-child` 当前元素是其父元素的首个/最后一个子元素时生效
- `:not()`选择不符合条件的元素，在`()`中内容是选择器，例如`:not(p)`选中所有不是`<p>`的元素；`:not(.shine)`选择所有没有`shine`类的元素；例如`.icon:last-child:not(:first-child)`选择有`icon`类是其父元素的最后一个子元素，但不是第一个子元素的的元素。

更多的伪类可以查看 [MDN 文档：CSS 伪类](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)。

### 伪元素选择器

伪元素的写法与伪类相似，区别是伪元素用“`::`”分隔（旧的标准也是用“`:`”）。伪元素可以选择本身不是 HTML 标签定义的元素。

- `::first-letter`代表第一个字母，中文则是第一个汉字
- `::first-line`代表第一行
- `::before`会在当前元素内增加一个内部伪元素，并置于所有子元素之前。定义的样式将作用于增加的元素
- `::after`会在当前元素内增加一个内部伪元素，并置于所有子元素之后。定义的样式将作用于增加的元素
- `::selection`代表鼠标选中的文字的

新的 CSS 标准 [css-pseudo-4](https://drafts.csswg.org/css-pseudo-4/) 定义了更多的伪元素，浏览器实现程度不一，可以自行查阅。

下面是两个例子，说明请看注释：

```html
<style>
    .first-letter-bigger::first-letter { 
        font-size: 2rem; /* 让类为 first-letter-bigger 的元素的第一个字母大小为 2rem */
    }
    .a-after-arrow a::after {
        content: "→"; /* 让类为 a-after-arrow 元素的后代中的 a 元素后面加上右箭头 */
    }
    .selection-black-bg::selection {
        color: white; /* 类为 selection-black-bg 选中文字后文字变为白色 */
        background-color: black; /* 类为 selection-black-bg 选中文字后文字背景变为黑色 */
    }
</style>
<p class="first-letter-bigger">
    这是一个::first-letter的例子，这是一个::first-letter的例子，这是一个::first-letter的例子，这是一个::first-letter的例子，这是一个::first-letter的例子，这是一个::first-letter的例子
</p>
<p class="a-after-arrow"><a href="https://www.w3.org/" target="_blank">https://www.w3.org/</a></p>
<p class="selection-black-bg">选中后样式变化</p>
```

<div style="margin: 0; border: 1px dashed; width: 20rem;">
<style>
    .first-letter-bigger::first-letter { 
        font-size: 2rem; 
    }
    .first-letter-bigger {
        width: 20rem;
    }
    .a-after-arrow a::after {
        content: "→"
    }
    .selection-black-bg::selection {
        color: white;
        background-color: black;
    }
</style>
<p class="first-letter-bigger" style="">
    这是一个::first-letter的例子，这是一个::first-letter的例子，这是一个::first-letter的例子，这是一个::first-letter的例子，这是一个::first-letter的例子，这是一个::first-letter的例子
</p>
<p class="a-after-arrow"><a href="https://www.w3.org" target="_blank">https://www.w3.org</a></p>
<p class="selection-black-bg" style="margin: 0">选中后样式变化</p>
</div>


## 参考文档

- CSS 选择器：https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
- 伪类：https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes