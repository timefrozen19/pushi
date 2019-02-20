# 正常布局流(normal flow)与定位
我们知道了盒模型，知道了如何表示长度，本节将介绍如何控制这些“盒子”即元素的定位。

<style>
.relative50 {
  position: relative;
  left: 5px;
  top: 5px;
  background-color: yellow;
  color: black;
}
.absolute5 {
  position: absolute;
  right: 5px;
  bottom: 5px;
}

.relative0 {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #555;
}
.absolute50 {
  position: absolute;
  width: 100px;
  height: 100px;
  right: 50px;
  bottom: 50px;
  background-color: yellow;
  color: #000;
}
.fixed50 {
  position: fixed;
  width: 100px;
  height: 100px;
  right: 5px;
  bottom: 5px;
  background-color: yellow;
  color: #000;
  border: 1px dashed;
}
.demo {
  border: 1px dashed;
}
</style>

## 正常布局流(normal flow)
在“盒模型”一节我们了解了通过设置 `margin`, `padding`, `border`, `width`, `height` 改变一个元素的行为，但是没有讨论多个元素该如何排列。

在我们自定义元素定位之前，先了解下浏览器默认的行为是怎样的。在**HTML 常用元素与属性**章节中，我们介绍了块级元素(Block-level elements)和行内元素(Inline elements)：

>块级元素默认会占满父元素的宽度，前后各新起一行，隔断(Block)其之前与之后的元素。而行内元素默认不会新起一行，大小取决于自己的内容。

体现在 CSS 上，块级元素拥有 `display: block` 的属性，行内元素有 `display: inline` 的属性。比如 `<span>` 元素默认为 `display: inline`，可以通过 CSS 改变这个默认属性。

大部分元素 `display` 属性的默认值是 `inline` 或 `block`。`display` 还有更多值可以设置，查看 [MDN 文档：display 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 了解更多。
默认情况下，`block` 元素从上而下排列，而 `inline` 元素从前往后排列，这个排列方式叫“正常布局流(normal flow)”

## 定位
可以通过定位来让元素**脱离**正常布局流，让他有其他的定位属性。通过设置 `position` 属性来改变定位，这个属性的值有 5 种：

### 未定位的元素 `position: static`
元素根据正常布局流定位，即浏览器默认属性。

### 相对定位元素 `position: relative`
元素根据正常布局流定位，加上`top`,`right`,`bottom`,`left` 的偏移。偏移后不会影响其他元素的布局，仅仅影响自身。

下面代码使用了相对定位：
```css
.relative50 {
  position: relative;
  left: 5px;
  top: 5px;
  background-color: yellow;
  color: black;
}
```
```html
<p>如果给元素设置了 relative 属性，<span class="relative50">该元素</span>可以相对原先位置偏移</p>
```
<p class="demo">如果给元素设置了 relative 属性，<span class="relative50">该元素</span>可以相对原先位置偏移</p>

### 绝对定位元素 `position: absolute`
元素**脱离**正常布局流。后面的元素会当作其不存在而占用其原本的空间。元素的位置根据离他最近的，**定位过的**祖先元素决定，此时 `top`,`right`,`bottom`,`left` 属性即离这个祖先元素的顶端，右边，地步，左边的距离。**定位过的**元素表示 `position` 的值不是默认值 `static` 的元素。

下面的代码使用了 `position: absolute`
```css
.relative0 {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #555;
}
.absolute50 {
  position: absolute;
  width: 100px;
  height: 100px;
  right: 50px;
  bottom: 50px;
  background-color: yellow;
  color: #000;
}
```
```html
<div class="relative0">
  <div class="absolute50">
    该元素相对于父元素绝对定位
  </div>
</div>
```
<div class="relative0 demo">
  正常定位流，在这里。
  <div class="absolute50">
    该元素相对于父元素绝对定位，脱离了正常定位流
  </div>
  正常定位流，也在这里。
</div>

### 绝对定位元素 `position: fixed`
元素**脱离**正常布局流。后面的元素会当作其不存在而占用其原本的空间。与 `absolute` 不一样的是，此时元素不相对于某个其他元素定位，而是与 viewport 相对，`top`,`right`,`bottom`,`left` 属性即离 viewport 顶端，右边，地步，左边的距离。

下面的代码使用了 `position: fixed`
```css
.fixed5 {
  position: fixed;
  width: 100px;
  height: 100px;
  right: 5px;
  bottom: 5px;
  background-color: yellow;
  color: #000;
}
```
```html
<div class="fixed50">
position: fixed 例子：保持在浏览器窗口的右下角
</div>
```
<div class="fixed50">
position: fixed 例子：保持在浏览器窗口的右下角
</div>

### 粘性定位元素 `position: sticky`
此时元素可以认为是 `static` 和 `absolute` 的结合。当元素在最近的有滚动机制的(`overflow` 属性不为默认值 `visible`)祖先元素一定范围之内时，行为与`static`一样，当超过了范围，行为与`absolute`一样，根据 `top`,`right`,`bottom`,`left` 和这个祖先元素决定位置。

这个属性是相对比较新的，在实际使用的时候注意浏览器兼容性。

下面例子种的 *I'm sticly* 元素是粘性定位，可以试着滚动后的效果。

```html
<div style="height: 200px; overflow: scroll; margin: 0; padding: 0;">
  <div style="height: 70px; background-color: #1587cc"></div>
  <div style="height: 70px; background-color: #158766"></div>
  <div style="position: sticky; top: 0; background-color: #153366; text-align: center">I'm sticky</div>
  <div style="height: 70px; background-color: #155566"></div>
  <div style="height: 70px; background-color: #558766"></div>
  <div style="height: 70px; background-color: #998766"></div>
  <div style="height: 70px; background-color: #1587cc"></div>
  <div style="height: 70px; background-color: #158766"></div>
  <div style="height: 70px; background-color: #558766"></div>
</div>
```

<div style="height: 200px; overflow: scroll; margin: 0; padding: 0; border: 1px dashed;">
  <div style="height: 70px; background-color: #1587cc"></div>
  <div style="height: 70px; background-color: #158766"></div>
  <div style="position: sticky; top: 0; background-color: #153366; text-align: center">I'm sticky</div>
  <div style="height: 70px; background-color: #155566"></div>
  <div style="height: 70px; background-color: #558766"></div>
  <div style="height: 70px; background-color: #998766"></div>
  <div style="height: 70px; background-color: #1587cc"></div>
  <div style="height: 70px; background-color: #158766"></div>
  <div style="height: 70px; background-color: #558766"></div>
</div>

## 浮动元素
浮动元素是 `float` 不为默认值 `none` 元素。浮动元素也会使元素**脱离**正常布局流，然后让该元素处于其父元素的左边或者右边，或者紧挨着另外一个浮动元素。与绝对定位不同的是，浮动元素会让文字环绕自己，而不是重叠。`float` 的值可以为 `left`, `right` 或 `none`。

例如：
```html
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. <div style="float: left; background: yellow; width: 50px; height: 50px;"></div>Donec id iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
```
<div style="border: 1px dashed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. <div style="float: left; background: yellow; width: 50px; height: 50px;"></div>Donec id iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

### 清除浮动 Clearing floats
在浮动元素后面的元素，可能会与之重叠。有的时候不是想要的效果，例如：
```html
<div>
  <div style="float: left; height: 50px; width: 40%; background: yellow"></div>
  <div style="float: right; height: 80px; width: 40%; background: yellow"></div>
</div>
<p style="background: #1587cc; margin: 0">
新起一个块级元素，这个元素没有排列为新的段落。
</p>
```
<div style="border: 1px dashed">
  <div>
    <div style="float: left; height: 50px; width: 40%; background: yellow"></div>
    <div style="float: right; height: 80px; width: 40%; background: yellow"></div>
  </div>
  <p style="background: #1587cc; margin: 0">
  新起一个块级元素，这个元素没有排列为新的段落。
  </p>
</div>

上面例子初看起来有点反直觉。为什么新的 `<div>` 不是新起一行呢？原因是，由于第一个 `<div>` 元素的子元素都是浮动元素，脱离了正常布局流，因此这个 div 高度为 0。而下面的 `<p>` 元素就顶到最上面了。

所以解决这个问题的1方法是给第一个 `<div>` 设置高度：
```html
<div style="height: 300px">
  <div style="float: left; height: 50px; width: 40%; background: yellow"></div>
  <div style="float: right; height: 80px; width: 40%; background: yellow"></div>
</div>
<p style="background: #1587cc; margin: 0">
新起一个块级元素，这个元素没有排列为新的段落。
</p>
```
<div style="height: 80px">
  <div style="float: left; height: 50px; width: 40%; background: yellow"></div>
  <div style="float: right; height: 80px; width: 40%; background: yellow"></div>
</div>
<p style="background: #1587cc; margin: 0">
新起一个块级元素，设置前面元素的高度使这个元素成为新的段落。
</p>

但是如果浮动的元素高度不确定，就不起效果了。解决这类问题最好的方法是：**清除浮动**。我们给 `<p>` 元素加上 `clear: both;`后：
```html
<div>
  <div style="float: left; height: 50px; width: 40%; background: yellow"></div>
  <div style="float: right; height: 80px; width: 40%; background: yellow"></div>
</div>
<p style="background: #1587cc; margin: 0; clear: both;">
新起一个块级元素，clear: both 使这个元素成为新的段落。
</p>
```

<div>
  <div style="float: left; height: 50px; width: 40%; background: yellow"></div>
  <div style="float: right; height: 80px; width: 40%; background: yellow"></div>
</div>
<p style="background: #1587cc; margin: 0; clear: both;">
新起一个块级元素，clear: both 使这个元素成为新的段落。
</p>

`clear` 属性可以为 `left`, `right`, `both`, `none`。`left`/`right` 设置后面的元素比左/右浮动的元素低，`both` 设置元素比左右浮动的元素都低。`none` 为默认值，没有清楚浮动的效果。

`clear` 属性也可以作用于非浮动元素，可以通过 [MDN 文档：clear 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear) 查看详情。

浮动元素曾经常用作页面布局，例如左侧菜单，右侧内容的两列布局。现代 HTML 有更好的方式：Flexbox 和 Grid(将在后面章节介绍)，因而浮动元素的使用也变少了。

## 参考
- All about float: https://css-tricks.com/all-about-floats/