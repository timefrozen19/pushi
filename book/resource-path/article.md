# 资源定位和 URL

浏览器在工作的时候，需要下载网页 HTML，CSS，JavaScript，图片声音视频等等各种资源。另外，超链接元素`<a>`也需要指定 href 属性确定指向。资源定位错误是初学者常遇到的问题，本章将详细介绍资源的定位。

## URL 简介

**统一资源定位符**(下文简称 URL) 即 URL，由万维网的发明人 Tim Berners-Lee 于 1994 年定义在 [RFC1738](https://tools.ietf.org/html/rfc1738)，要获得完整精确的描述可以查看该 RFC 文档链接。

我们在*网站概述*章节中介绍了 **URL (Uniform Resource Locator)** 即统一资源定位符，浏览器就是根据 URL 来获取不同的资源的：

> 万维网上有 HTML 网页，有图片等无数资源 (Resource)，这些资源的位置需要有个地址定位，就像每户人家都有自己的门牌号。有了 URL 就可以访问相应的资源了。我们经常说的网址就是 URL。例如 https://en.wikipedia.org/wiki/URL。浏览器就是根据 URL 来访问服务器下载网页的。

URL 的基本形式如下：

```
<scheme>:<scheme-specific-part>
```

```
<协议>:<协议专属部分>
```

下面是几个合法的 URL：

```
https://en.wikipedia.org/wiki/URL
http://google.com
file:///Users/lishi/html-example/url-demo/index.html
ftp://myname@host.dom/etc/motd
mailto:shirh.lee@gmail.com
```

我们这里主要关心 HTTP/HTTPS 的 URL，格式及说明如下：

<div style="display: flex; justify-content: flex-start">
  <span style="display: flex; flex-direction: column; align-items: center; color: #cf2015"><span>①</span><span>https</span></span>
  <span style="display: flex; flex-direction: column; align-items: center;"><span>&nbsp;</span><span>:</span></span>
  <span style="display: flex; flex-direction: column; align-items: center; color: #f17b21"><span>②</span>//</span>
  <span style="display: flex; flex-direction: column; align-items: center; color: #38a41b"><span>③</span>www.example.com</span>
  <span style="display: flex; flex-direction: column; align-items: center; color: #1587cc"><span>④</span>:3000</span>
  <span style="display: flex; flex-direction: column; align-items: center; color: #0b3ecc"><span>⑤</span>/path/resource</span>
  <span style="display: flex; flex-direction: column; align-items: center; color: #9e37cc"><span>⑥</span>?id=123&amp;name=test</span>
  <span style="display: flex; flex-direction: column; align-items: center; color: #f242d4"><span>⑦</span>#section-id</span>
</div>
<ol>
<li style="color: #cf2015">协议 - 定义了如何获取资源</li>
<li style="color: #f17b21">层级URL标记符号 - (为 // ,固定不变)</li>
<li style="color: #38a41b">域名 - 也可以是 IP 地址，例子中是一个二级域名</li>
<li style="color: #1587cc">端口 - 可以省略。如果省略了，HTTP 是 80 端口，HTTPS 是 443 端口。</li>
<li style="color: #0b3ecc">路径 - 希望访问资源的路径</li>
<li style="color: #9e37cc">查询参数 - 以?开始，&amp;分隔，=连接键值(key value)</li>
<li style="color: #f242d4">片段ID - 以 # 开始的字符，一般对应页面中某个元素的 id 属性</li>
</ol>

下面是一个真实的例子，可以访问 http://example.simon1987.com/url-demo/index.html 查看页面：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>URL 资源举例</title>
        <script src="//code.jquery.com/jquery-3.3.1.js" ></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css">
        <link rel="stylesheet" href="make-h1-yellow.css">
        <link rel="stylesheet" href="bg/add-background-image.css">
        <link rel="stylesheet" href="../css/make-h2-pink.css">
        <link rel="stylesheet" href="/make-h3-green.css">
    </head>
    <body>
        <h1>黄色标题</h1>
        <h2>粉红标题</h2>
        <h3>绿色标题</h3>
        <img src="../images/spiderman.jpg">
        <p>
            <a href="//code.jquery.com/jquery-3.3.1.js">jquery-3.3.1.js</a><br>
            <a href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css">bulma.css</a><br>
            <a href="make-h1-yellow.css">make-h1-yellow.css</a><br>
            <a href="bg/add-background-image.css">add-background-image.css</a><br>
            <a href="../css/make-h2-pink.css">make-h2-pink.css</a><br>
            <a href="/make-h3-green.css">make-h3-green.css</a><br>
            <a href="mailto:shirh.lee@gmail.com">mailto 链接</a><br>
        </p>
    </body>
</html>
```

在上面的 HTML 中，在`<head>`标签里引用到了多个资源，有的通过绝对 URL，有的通过相对 URL。浏览器在打开这个页面的时候，会根据`<script>`标签的 src 属性值，`<link>`标签的 `href`属性值获取相应资源，包括 CSS, JavaScript。下面会对其中的 URL 一一解释。

## 绝对 URL (absolute URLs)

绝对 URL 地址，即符合完整 URL 定义的地址，例如：

- 该页面的网址：http://example.simon1987.com/url-demo/index.html
- 上文例子中的 `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css">`
- 上文例子中的 `<a href="mailto:shirh.lee@gmail.com">mailto 链接</a>`

## 相对 URL (absolute URLs)

所谓相对 URL 是不指定完整目标的 URL，而根据当前页面的 URL (即 Base URL，`<base>`标签可以改变 Base URL，见下文) 和相对路径，来访问目标资源。相对 URL 有 4 个规则：

- 不同层级的路径，用“/”隔开。
- 当前页面同一层的资源。直接写资源的名称。
- 当前页面上一层的资源。用“../”来表示上一层，可以同时有多个“../”。
- 可以相对**根路径**访问资源。用“/”开始，表示相对根路径。根路径指紧接着域名的路径，比如 http://example.simon1987.com/ 是根路径。

例如当前页面为 `http://example.simon1987.com/url-demo/index.html`，值得注意的是这个url 与 `http://example.simon1987.com/url-demo/`属于同一层，但是与`http://example.simon1987.com/url-demo`不同，虽然在这个例子中，访问后者的时候，会跳转至`http://example.simon1987.com/url-demo/`，这个跳转是 Web Server 控制的 (通过返回浏览器 HTTP 301 重定向)：

- 上文例子中的`<link rel="stylesheet" href="make-h1-yellow.css">`和`<a href="make-h1-yellow.css">make-h1-yellow.css</a>`是同一层的资源。根据当前页面路径，确定目标 URL 为 `http://example.simon1987.com/url-demo/make-h1-yellow.css`
- 上文例子中的 `<link rel="stylesheet" href="bg/add-background-image.css">` 和 `<a href="bg/add-background-image.css">add-background-image.css</a>` 是同一层路径 bg 的下一层。根据当前页面路径确定目标 URL 为 `http://example.simon1987.com/url-demo/bg/add-background-image.css`
- 上文例子中的 `<link rel="stylesheet" href="../css/make-h2-pink.css">`和`<a href="../css/make-h2-pink.css">make-h2-pink.css</a>`因为以“../”开头，所以是当前页面的上一层的资源。根据单前页面的路径，确定目标 URL 为`http://example.simon1987.com/make-h2-pink.css` 。同样的`<img src="../images/spiderman.jpg">`的目标路径为`http://example.simon1987.com/images/spiderman.jpg`
- 上文例子中的`<link rel="stylesheet" href="/make-h3-green.css">`和`<a href="/make-h3-green.css">make-h3-green.css</a>`因为以“/”开头，所以是相对于根目录的路径，根据根目录 http://example.simon1987.com/ ，确定目标 URL 为 `http://example.simon1987.com/make-h3-green.css`

下面的表格有更多例子：

<table>
  <tr>
    <th>当前页面 URL (Base URL)</th>
    <th>相对路径</th>
    <th>完整 URL</th>
  </tr>
  <tr>
    <td rowspan="6" style="vertical-align:middle">http://example.com/a/b/c.html <br>或<br>http://example.com/a/b/<br>或<br>http://example.com/a/b/d.html</td>
    <td>photo.jpg</td>
    <td>http://example.com/a/b/photo.jpg</td>
  </tr>
  <tr>
    <td>css/reset.css</td>
    <td>http://example.com/a/b/css/reset.css</td>
  </tr>
  <tr>
    <td>../x.html</td>
    <td>http://example.com/a/x.html</td>
  </tr>
  <tr>
    <td>../../y.html</td>
    <td>http://example.com/y.html</td>
  </tr>
  <tr>
    <td>/y.html</td>
    <td>http://example.com/y.html</td>
  </tr>
  <tr>
    <td>/a/b/c.html</td>
    <td>http://example.com/a/b/c.html</td>
  </tr>
</table>

另外，可以在 HTML 中使用`<base>`标签改变所有相对路径的基本路径，可以参考[这个 MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/base)。

## 协议相关 URL (Protocol-relative URLs)

协议相关 URL 是省略掉协议部分以及协议后面的分号的 URL，浏览器在访问时，会根据当前页面的协议解析目标资源。即如果当前页面是 HTTP 目标也用 HTTP，如果当前页面是 HTTPS 的，目标也用 HTTPS。例如：

- 上文例子中的`<script src="//code.jquery.com/jquery-3.3.1.js" ></script>`
- 上文例子中的`<a href="//code.jquery.com/jquery-3.3.1.js">jquery-3.3.1.js</a>`

## CSS 中的 URL 资源

CSS 中也可以引用资源，例如设置图片背景，设置 font-face。这个时候相对路径的参照是 css 文件的 URL 而**不是**相关页面的 URL。例如，上文例子中的 `<link rel="stylesheet" href="bg/add-background-image.css">`，这个 css 的内容如下：

```css
body {
  background-image: url('../../images/shanghai-unsplash.jpg');
  height: 100vh;
}
```

浏览器首先根据当前页面的 URL 确定 CSS 的 URL 为：`http://example.simon1987.com/url-demo/bg/add-background-image.css`，再根据这个路径，和图片相对路径`'../../images/shanghai-unsplash.jpg'`确定图片的 URL 为 `http://example.simon1987.com/images/shanghai-unsplash.jpg`

## 注意事项

- 在开发时通常是在本地（自己的电脑）上进行的，文件的相对路径与部署到服务器的相对路径可能不一样（比如相对于根路径；比如用`../`访问上一层的资源，在服务器上不一定有权限），尽管大部分情况是一致的。
- 本地文件的 URL 是 file 协议的，而部署到服务器以后，在HTTP(S)协议的网页中，是无法访问 file 协议的资源的。如果网页的 URL 是 HTTPS 的，引入的资源是 HTTP 的，这个资源也大概率会被浏览器阻止访问。都是因为安全上的考量。
- 在本地开发中可以在本地部署服务器访问，而不是通过浏览器直接打开文件，这样可以避免很多开发与部署不一致的问题。服务器的部署在第x章有介绍。

## 参考文档

- RFC 1738: https://tools.ietf.org/html/rfc1738
- `<base>`标签：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/base