# HTML 常用元素与属性

上一节我们介绍了 HTML 文档的基本结构，他是有数个**元素(Element)**组成的，元素的表示方式，是**标签(tag)**，并介绍了HTML, HEAD, BODY 这几个基本的元素。HTML 标准中定义了很多元素，这一节，我们介绍一些常用的元素作为例子。

## 常用的元素

### 标题元素 &lt;h1&gt;-&lt;h6&gt;

标题元素用来表示标题，HTML 一共定义了6个级别的标题，即&lt;h1&gt;-&lt;h6&gt;，例如

```html
<h1>Petter Parker</h1>
```

效果：
<div style="border: 1px dotted;">
    <h1 style="margin: 0;">Petter Parker</h1>
</div>


### P 元素

P 元素表示段落(paragraph)，P 可以包含文字，或者很多元素，比如A元素，IMG 元素，H1-H6 元素等

```html
<p>我是蜘蛛侠，我做一些很酷的事情，比如拯救世界<p>
```

效果：
<div style="border: 1px dotted">
    <p>我是蜘蛛侠，我做一些很酷的事情，比如拯救世界<p>
</div>

### IMG 元素

IMG 元素表示图片(image)，img 元素不需要结束标签。需要 src 属性指定图片的 url。alt 属性的作用是给图片一个描述文字，屏幕阅读器会使用到这个描述，另外在图片无法再入的时候，浏览器也会显示这个文字，alt 属性不是必须的。

```html
<img src="http://ku.simon1987.com/spiderman.jpg" alt="spider man" >
```

效果：
<div style="border: 1px dotted">
    <img src="http://ku.simon1987.com/spiderman.jpg" alt="spider man" >
</div>
### A 元素 &lt;a&gt;

A 元素(anchor element)表示超链接(hyperlink)。href 属性指定了超链接的 URL，也可以是 URL 片段或相对路径。关于相对路径，在下一章介绍。URL 片段是以井号开头的文字，例如`<a href="#top">顶部</a>`，其中 top 是页面中某个元素的 ID，ID 在以后的章节会介绍。另外 A 元素还有 target 属性，表示链接打开的目标。属性值默认是 _self 指定在当前页面打开链接，还可以设置为 _blank 指定浏览器在新窗口打开链接。

```html
<a href="https://www.marvel.com/characters/spider-man-peter-parker">漫威蜘蛛侠</a>
```

效果：
<div style="border: 1px dotted">
    <a href="https://www.marvel.com/characters/spider-man-peter-parker">漫威蜘蛛侠</a>
</div>


### UL, OL 以及 LI 元素

UL 元素表示**无序列表** (Unordered List)，无序指没有先后顺序。OL 元素表示**有序列表**(Ordered List)。列表中的内容 (List Item)，用 LI 元素表示，例如：

```html
组织：
<ul>
    <li>复仇者联盟</li>
    <li>号角日报</li>
    <li>未来基金会</li>
    <li>新复仇者</li>
    <li>帕克工业</li>
</ul>
敌人：
<ol>
    <li>绿恶魔</li>
    <li>章鱼博士</li>
    <li>灭霸</li>
</ol>
```

效果：

<div style="border: 1px dotted">
    组织：
    <ul>
        <li>复仇者联盟</li>
        <li>号角日报</li>
        <li>未来基金会</li>
        <li>新复仇者</li>
        <li>帕克工业</li>
    </ul>
    敌人：
    <ol>
        <li>绿恶魔</li>
        <li>章鱼博士</li>
        <li>灭霸</li>
    </ol>
</div>



### HEADER, MAIN, SECTION, ARTICLE, FOOTER, DIV元素

HEADER, MAIN, SECTION, ARTICLE, FOOTER 属于**内容分区元素**(Content sectioning elements)，用来把整个文档分为多个逻辑分区，比如 HEADER 元素可以用来表示介绍性内容，MAIN 元素可以用来表示文档的主要内容，SECTION 元素可以用来表示单独的一节内容，ARTICLE 可以用来表示帖子，文章，博客，评论等，FOOTER 表示页脚，经常用来放作者，版权，联系方式等信息。这几个元素都是 HTML5 标准新加入的，可以更准确的表达文档的逻辑结构，也属于**语义元素**(semantic element) 在 HTML5 之前，通常是用 DIV 元素来分隔。

DIV 元素，即**文档分区元素**(**Content Division element**)，是一个通用的容器，可以包含各种子元素，比如 UL, H1, P, IMG, DIV 等。在 HTML5 之前，只能用 DIV 来组织文档的逻辑结构，在 HTML5 之后，建议在不同的场景下使用不同的更加准确的语义元素，比如 HEADER, FOOTER, ARTICLE 等，虽然浏览器展示没有分别。

语义元素的好处，请参考 https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML

```html
<footer>
	this website is made by Simon1987
</footer>
```

效果：
<div style="border: 1px dotted">
<footer>
	this website is made by Simon1987
</footer>
</div>

### STRONG, SPAN 元素

STRONG 元素 (`<strong>`)表示文本十分重要，浏览器通常会用粗体显示。`<span>`元素是一个文字容器，没有任何特殊语义，经常用来配合 CSS 显示不同的样式。与 DIV 同样是通用的容器，区别是 DIV 是块级元素的容器，可以包含块级元素和行内元素，而 SPAN 只能包含行内元素。

```html
<p>
    <strong>蜘蛛侠</strong>（英语：Spider-Man）是漫威漫画的超级英雄。本名为彼得·班杰明·帕克（Peter Benjamin Parker）他是由作家／编辑史丹·李及作家／画家史蒂夫·迪特科所创造。
</p>
```

效果：
<div style="border: 1px dotted">
<p style="margin: 0">
    <strong>蜘蛛侠</strong>（英语：Spider-Man）是漫威漫画的超级英雄。本名为彼得·班杰明·帕克（Peter Benjamin Parker）他是由作家／编辑史丹·李及作家／画家史蒂夫·迪特科所创造。
</p>
</div>



## 块级元素(Block-level elements)和行内元素(Inline elements)

有些元素属于块级元素，有些属于行内元素。上文中的 `<h1>`-`<h6>`,`<p>`,`<ul>`, `<ol>`, `<header>`,`<main>`,`<section>`,`<footer>`,`<p>`,`<div>`属于块级元素，`<a>`, `<strong>`, `<span>`, `<img>` 属于行内元素。

块级元素默认会占满父元素的宽度，前后各新起一行，隔断(Block)其之前与之后的元素。而行内元素默认不会新起一行，大小取决于自己的内容。看下面2个例子：

行内元素，代码如下：

```html
<div>下面的元素是行内元素，<span style="color: yellow">行内元素</span>，行内元素不会换行，大小取决于自身的内容。</div>
```

效果：

<div style="border: 1px dotted">下面的元素是行内元素，<span style="color: yellow">行内元素</span>，行内元素不会换行，大小取决于自身的内容。</div>

块级元素，代码如下：

```html
<div>下面的元素是块级元素，<p style="color: yellow;">块级元素，</p>块级元素默认会占满父元素的宽度，前后各新起一行，隔断(Block)其之前与之后的元素。</div>
```

效果：

<div style="border: 1px dotted">下面的元素是块级元素，<p style="color: yellow; margin: 0">块级元素，</p>块级元素默认会占满父元素的宽度，前后各新起一行，隔断(Block)其之前与之后的元素。</div>

其中 style 属性在 CSS 章节会详细解释，在这里只要知道它让文字变色就好了。在 CSS 章节中我们会看到可以通过 CSS 改变元素是否块级元素或者行内元素。

## 一些全局属性（Global attributes）

**全局属性**是所有 HTML 元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用。

### id 属性

id 属性给标签定义唯一标识，例如`<div id="container">一篇文章</div>`，这时候这个 DIV 元素就有了自己的唯一标识 id 为 container。页面中不允许出现另外的 id 为 container 的元素了。如果当前页面有个超链接 `<a href="#container">一篇文章</a>`，点击这个超链接浏览器便会跳转到上文的 DIV 标签处。另外 id 还可以配合 CSS 选择器，作用于 CSS 和 JavaScript。分别在 CSS 章节和 JavaScript 章节会介绍。

### class 属性

一个以空格分隔的元素的类名（classes ）列表，例如`<div class="container important">`，这里我们给 DIV 元素设置了 2 个不同的类，分别是 container 和 important。有了这个类，我们就可以在 CSS 或者 JavaScript 中通过这个类名，找到这个元素。分别在 CSS 章节和 JavaScript 章节会介绍。

### style 属性

style 属性可以给元素设置 CSS 样式，例如`<span style="color: yellow">行内元素</span>`，这里 span 中的内容会显示黄色。在 CSS 章节会详细介绍。

### onclick，oncontextmenu，onfocus，onscroll，onblur 等事件相关的属性

这些属性表示在当前元素发生某种事件时应该作出的反应。标签的值是一段 JavaScript 脚本。例如`<a onclick="alert('hello')">hello</a>`表示这个 A 元素在点击时会执行`alert('hello')`这个脚本。关于这个脚本的含义在 JavaScript 章节会介绍。

## 如果 HTML 文档不符合规则了？

规则有很多，例如上文中介绍的：

1. 很多 HTML 的元素只可以包含一部分 HTML 元素，不是任何内容都可以成为元素的内容。比如`<ul>` 元素只可以包含 `<li>` 元素作为子元素，`<html>` 元素只可以包含 `<head>`和`<body>` 等。
2. 属性有限制。例如 id 属性必须是唯一的。
3. 是否可以省略结束标签。例如 `<br>`, `<meta>`元素没有结束标签。

这些都是在编码时需要注意的规则。如果不符合规则，会发生**未定义的行为**，所谓未定义意思是 W3C 标准中没有规定发生这种情况浏览器应该如何处理，于是浏览器会自行处理。很多情况的小错误，浏览器会自动纠正，比如 `<br>` 写成了 `<br />` 浏览器通常不会显示错误，能够正常显示。再比如给多个元素设置同样的 id 属性，浏览器仍然可以正常显示内容，但是这个可能引起相关 CSS 样式和 JavaScript 的错误。

## 总结

本章介绍了一些常用的 HTML 元素，有了这些元素，就已经可以做出基本的网页了。到这个时候，HTML 的任务已经完成了：定义内容和定义内容的逻辑结构。但是这个网页视觉效果十分基础，可以说是极简主义设计了，下一步就是进入 CSS 的学习，给网页添加样式。

当然 HTML 元素比本章介绍的这些多很多，大家可以自行查阅文档学习剩下的部分，也可以在实际使用中根据场景再进行针对性学习。

## 参考文档

- 完整的元素列表及文档：https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- HTML中的语义元素：https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML

