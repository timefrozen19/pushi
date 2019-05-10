# Flexbox 布局

Flexbox 布局是一个一维的弹性布局模型。之所以说是一维的是 flexbox 要么是水平布局，要么是垂直布局。而 Grid Layout 可以同时设定那些元素是水平的那些事垂直的。我们将在下节介绍 Grid Layout。说是弹性是因为它可以很好的适应不同的浏览器屏幕。尽管在一些情况下浮动元素布局可以实现类似的效果，但是实现方式却麻烦别扭。因此大部分情况下推荐使用 flexbox 布局，除非需要文字环绕元素布局，或者需要兼容老旧的浏览器。

## 基本用法
flexbox 中我们需要关注两类元素的 css，一是“容器元素（flex container）”，二是“内容元素（flex item）”。假设我们有如下的 HTML
```html
<div class="fcontainer">
  <div>永和九年，歲在癸丑，暮春之初，會於會稽山陰之蘭亭，脩稧事也。羣賢畢至，少長咸集。此地有崇山峻領，茂林脩竹；又有清流激湍，映帶左右，引以為流觴曲水，列坐其次。雖無絲竹管弦之盛，一觴一詠，亦足以暢敘幽情。</div>
  <div>是日也，天朗氣清，惠風和暢。仰觀宇宙之大，俯察品類之盛。所以遊目騁懷，足以極視聽之娛，信可樂也。</div>
  <div>夫人之相與，俯仰一世，或取諸懷抱，悟言一室之內；或因寄所託，放浪形骸之外。雖趣舍萬殊，靜躁不同，當其欣於所遇，蹔得於己，怏然自足，不知老之將至；及其所之既倦，情隨事遷，感慨係之矣。向之所欣，俯仰之間，已為陳跡，猶不能不以之興懷；況脩短隨化，終期於盡。古人云：「死生亦大矣。」豈不痛哉！</div>
</div>
```
我们希望这三段水平排列只需
```css
.fcontainer {
  display: flex;
}
/* 增加背景色区分 */
.fcontainer > div:nth-child(1) {
  background: #4286f4;
}
.fcontainer > div:nth-child(2) {
  background: #7fc67f;
}
.fcontainer > div:nth-child(3) {
  background: #c67fb3;
}
```
效果如下


<div class="fcontainer" style="display: flex">
  <div>永和九年，歲在癸丑，暮春之初，會於會稽山陰之蘭亭，脩稧事也。羣賢畢至，少長咸集。此地有崇山峻領，茂林脩竹；又有清流激湍，映帶左右，引以為流觴曲水，列坐其次。雖無絲竹管弦之盛，一觴一詠，亦足以暢敘幽情。</div>
  <div>是日也，天朗氣清，惠風和暢。仰觀宇宙之大，俯察品類之盛。所以遊目騁懷，足以極視聽之娛，信可樂也。</div>
  <div>夫人之相與，俯仰一世，或取諸懷抱，悟言一室之內；或因寄所託，放浪形骸之外。雖趣舍萬殊，靜躁不同，當其欣於所遇，蹔得於己，怏然自足，不知老之將至；及其所之既倦，情隨事遷，感慨係之矣。向之所欣，俯仰之間，已為陳跡，猶不能不以之興懷；況脩短隨化，終期於盡。古人云：「死生亦大矣。」豈不痛哉！</div>
</div>

`display: flex;` 这个属性设置了元素本身成为 flex container，同时其子元素成为了 flex item。此时元素本身对外的行为还是块级元素(block level element)。

上面的例子看到，flex item 水平排列了，如果希望垂直排列可以在 flex container 元素上设置 `flex-direction` 属性。还可以看到，内容较多的元素占用的空间较大，flexbox 自动分配了空间，这也是为什么叫做 flex(弹性) 布局的原因。我们设置每个元素 25% 宽。

```css
.fcontainer > div {
  width: 25%;
  padding: 10px; /* 增加内边距 */
  box-sizing: border-box; /* 设置 box-sizing 以包含 padding */
}
```
<div class="fcontainer" style="display: flex">
  <div style="width: 25%; box-sizing: border-box; padding: 10px;">永和九年，歲在癸丑，暮春之初，會於會稽山陰之蘭亭，脩稧事也。羣賢畢至，少長咸集。此地有崇山峻領，茂林脩竹；又有清流激湍，映帶左右，引以為流觴曲水，列坐其次。雖無絲竹管弦之盛，一觴一詠，亦足以暢敘幽情。</div>
  <div style="width: 25%; box-sizing: border-box; padding: 10px;">是日也，天朗氣清，惠風和暢。仰觀宇宙之大，俯察品類之盛。所以遊目騁懷，足以極視聽之娛，信可樂也。</div>
  <div style="width: 25%; box-sizing: border-box; padding: 10px;">夫人之相與，俯仰一世，或取諸懷抱，悟言一室之內；或因寄所託，放浪形骸之外。雖趣舍萬殊，靜躁不同，當其欣於所遇，蹔得於己，怏然自足，不知老之將至；及其所之既倦，情隨事遷，感慨係之矣。向之所欣，俯仰之間，已為陳跡，猶不能不以之興懷；況脩短隨化，終期於盡。古人云：「死生亦大矣。」豈不痛哉！</div>
</div>

现在 flex item 是一样宽了，我们希望他们能居中，同时保持间距：
```css
.fcontainer {
  display: flex;
  justify-content: center;
}
```

<div class="fcontainer" style="display: flex; justify-content: center">
  <div style="width: 25%; box-sizing: border-box; padding: 10px;">永和九年，歲在癸丑，暮春之初，會於會稽山陰之蘭亭，脩稧事也。羣賢畢至，少長咸集。此地有崇山峻領，茂林脩竹；又有清流激湍，映帶左右，引以為流觴曲水，列坐其次。雖無絲竹管弦之盛，一觴一詠，亦足以暢敘幽情。</div>
  <div style="width: 25%; box-sizing: border-box; padding: 10px;">是日也，天朗氣清，惠風和暢。仰觀宇宙之大，俯察品類之盛。所以遊目騁懷，足以極視聽之娛，信可樂也。</div>
  <div style="width: 25%; box-sizing: border-box; padding: 10px;">夫人之相與，俯仰一世，或取諸懷抱，悟言一室之內；或因寄所託，放浪形骸之外。雖趣舍萬殊，靜躁不同，當其欣於所遇，蹔得於己，怏然自足，不知老之將至；及其所之既倦，情隨事遷，感慨係之矣。向之所欣，俯仰之間，已為陳跡，猶不能不以之興懷；況脩短隨化，終期於盡。古人云：「死生亦大矣。」豈不痛哉！</div>
</div>

如果希望 flex item 之间能分配多余的空间而保持间距，我们可以：
```css
.fcontainer {
  display: flex;
  justify-content: space-evenly; /* 让 flex item 元素之间的距离相等 */
}

```
<div class="fcontainer" style="display: flex; justify-content: space-evenly">
  <div style="width: 25%; box-sizing: border-box; padding: 10px;">永和九年，歲在癸丑，暮春之初，會於會稽山陰之蘭亭，脩稧事也。羣賢畢至，少長咸集。此地有崇山峻領，茂林脩竹；又有清流激湍，映帶左右，引以為流觴曲水，列坐其次。雖無絲竹管弦之盛，一觴一詠，亦足以暢敘幽情。</div>
  <div style="width: 25%; box-sizing: border-box; padding: 10px;">是日也，天朗氣清，惠風和暢。仰觀宇宙之大，俯察品類之盛。所以遊目騁懷，足以極視聽之娛，信可樂也。</div>
  <div style="width: 25%; box-sizing: border-box; padding: 10px;">夫人之相與，俯仰一世，或取諸懷抱，悟言一室之內；或因寄所託，放浪形骸之外。雖趣舍萬殊，靜躁不同，當其欣於所遇，蹔得於己，怏然自足，不知老之將至；及其所之既倦，情隨事遷，感慨係之矣。向之所欣，俯仰之間，已為陳跡，猶不能不以之興懷；況脩短隨化，終期於盡。古人云：「死生亦大矣。」豈不痛哉！</div>
</div>

以上是 flexbox 的一个例子，flexbox 完整的用法及用例可以查看 https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 或者官方文档。

<style lang="scss">
.fcontainer > div:nth-child(1) {
  background: #4286f4;
}
.fcontainer > div:nth-child(2) {
  background: #7fc67f;
}
.fcontainer > div:nth-child(3) {
  background: #c67fb3;
}
</style>