# CSS 盒模型 (Box Model)

CSS 能控制大小和距离，有哪些地方的大小和距离可以控制呢？CSS 是通过一个叫做“盒模型 (Box Model)”的模型来描述页面上所有的元素，通过设置这个“盒子”的各种属性，就可以调整任意元素的大小，距离了。

这个盒模型如下

<div class="box-image">
    <style>
        div.box-image div{
            color: #222;
            text-align: center;
            border-radius: 4px;
        }
        span.des {
            display: block;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            text-align: center;
        }
        span.margin, span.padding {
            top: 1rem;
        }
        .margin-box {
            position: relative;
            border: 1px dashed;
            background-color: #d7e9fd;
            padding: 3rem;
        }
        .border-box {
            position: relative;
            background-color: #5c96d8;
            padding: 1.5rem;
        }
        .padding-box {
            position: relative;
            background-color: #d7e9fd;
            padding: 3rem;
        }
        .content-box {
            position: relative;
            background-color: #ff9;
            padding: 2rem;
        }
    </style>
    <div class="margin-box">
      <span class="des margin">外边距 margin</span>
      <div class="border-box">
        <span class="des">边框 border</span>
        <div class="padding-box">
          <span class="des padding">内边距 padding</span>
          <div class="content-box">
            <span>内容 content</span>
          </div>
        </div>
      </div>
    </div>
</div>

可以看到，在盒模型中，每个元素都有**外边距 (margin)**，**边框 (border)**，**内边距 (padding)**，**内容(content)**属性。这几个属性很常用，在 CSS 中是 margin, border, padding 属性，下文将直接使用英文。

设想一下，我们用一个盒子装东西。不同盒子之间有个距离，为 margin，盒子本身有个边框，为 border，盒子与里面的东西之间还有一定的距离，为 padding。最里面才是盒子里面装的东西。

## Margin
margin 定义了元素和其他元素之间的距离。即如果希望两个元素靠近，则设置较小 margin，如果希望距离大，设置较大 margin。margin 可以为负，这样两个元素可能会重叠。

margin 有个特殊的属性是他可以重叠(margin collapse)：相邻的元素的距离，以他们的 margin 比较大的那个决定，而不是他们的和。例如 a, b 两个元素，margin 分别是 10px, 20px 那么他们的距离是 20px。

margin 有4个方向，上右下左分别为 margin-top, margin-right, margin-bottom 和 margin-bottom。可以分别设置。

margin 的写法如下：
- 分别设置 4 个方向: `margin: 10px 20px 10px 20px`。顺序是“上右下左”的顺时针顺序。
- 缩写 `margin: 10px 20px` 效果是 maring-top 和 mrgin-bottom 为 10px，margin-right 和 margin-left 为 20px。缩写 `margin: 10px` 效果是 4 个方向的外边距都为 10px。
- 可以单独设置 1 个方向：`margin-top: 10px` 上外边距为 10px。
- 可以设置`margin: auto` 这时候浏览器会给一个适当的值，经常用来让块级元素水平居中。

## Border
Border 定义了元素的边框，除了可以设置边框的大小粗细，还可以设置边框的样式，颜色以及圆角。大部分元素默认没有边框。

border 写法如下：
- 设置粗细：`border-width: 2px`
- 设置样式：`border-style: dashed`。`border-style` 的值还可以为 `solid`，`dotted` 等。可以查看[完整文档](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)。
- 设置颜色：`border-color: red`
- 设置圆角：`border-radius: 5px`
- `border-width`, `border-style`, `border-color` 可以缩写为：`border: 2px dashed red`
- 可以单独设置某一边的 border: `border-right: 2px dashed red`

## Padding
Padding 定义了元素的内边距，即边框与内容间的距离。padding 的值也可以为负。

写法与 margin 类似，只是属性值没有`auto`：
- 分别设置 4 个方向: `padding: 10px 20px 10px 20px`。顺序是“上右下左”的顺时针顺序。
- 缩写 `padding: 10px 20px` 效果是 padding-top 和 padding-bottom 为 10px，padding-right 和 padding-left 为 20px。缩写 `padding: 10px` 效果是 4 个方向的内边距都为 10px。
- 可以单独设置 1 个方向：`padding-top: 10px` 上内边距为 10px。

## 内容大小
用 `width`, `height` 来设置内容大小，例如 `width: 100px` 设置了内容大小为 100px，如果与个元素有 20px 的 padding 以及 5px 的border，不算 margin, 元素的占用宽度为 100px + 20px × 2 + 5px × 2 即 150px。

在这个例子里，计算元素的宽度实在麻烦。例如我们希望设置 200px 宽的元素，需要计算 border 和 padding。而 border 和 padding 在调试外观样式的时候需要频繁修改，这样让布局变的困难。于是在 CSS3 中引入了 box-sizing 属性，让大小设置更为直观简单。

### box-sizing 属性
box-sizing 有 2 值可以设置：content-box 和 border-box。

- content-box: 默认设置，元素占用空间的大小需要 width 加上 border 和 padding。
- border-box: 元素占用空间的大小为 width 的值。如果设置了 border 和 padding，则会挤占内容的大小，而不会撑大元素的占用空间。

一个建议的做法是设置所有元素的 box-sizing 属性都为 border-box，例如：
```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit; /* box-sizing 默认不继承父元素的值 */
}
```

## 参考文档
- inheriting box sizing probably slightly better best practice: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/