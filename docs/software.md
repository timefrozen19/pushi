# 相关软件

作者使用的操作系统是 Windows，读者也可以用 Mac，操作使用不会有明显差异，如果有差别会额外注明。本教程使用的软件主要是 [VS Code](https://code.visualstudio.com/) 用于代码编辑，[Chrome](https://www.google.com/chrome/) 作为浏览器，以及调试工具。另外版本控制软件 (version control software) 例如 Git 是软件开发中必不可少的工具，本教程作为入门教程暂时不介绍，有兴趣的读者可以自学。在部署章节中，我们还会使用 Nginx 作例子，这里不做介绍。

## VS Code 说明

Visual Studio Code 简称 VS Code 是微软推出的一款代码编辑器，他是开源（源代码公开），免费并且跨平台（Windows/Mac/Linux 都可以安装使用）的。有趣的是他自己也是基于前端技术的，他使用了 Electron 框架，这个框架让你可以使用网页技术和 NodeJS 开发跨平台应用。所以我们会在一个基于前端技术的软件中，写前端代码。

编程语言源代码代码都是纯文本，因为需要从键盘输入。所谓纯文本文件，一般指只有字符原生编码构成的二进制计算机文件。可以理解为除了文字之外，文件不含任何其他数据。一般的 Windows 电脑的 .txt 即是纯文本文件，但是文件的后缀，属于文件名的一部分，和文件的内容没有必然关系，只是暗示操作系统或者使用者文件的内容而已。常见的文档比如 Word 并不是纯文本文件，因为他含有很多额外的信息，比如格式排版等，而这些信息并不是用纯文本表示的，而是文档处理软件比如 Word 生成的，所以如果您用纯文档编辑器，比如 Windows 中的记事本或者 VS Code 打开会 Word 文档会看到乱码。

理解了纯文本文件，那为什么要用 VS Code 而不用记事本呢？你可以选择用记事本，或者其他文本编辑器，比如 Atom, Notepad++, Sublime，但是本教程选择 VS Code。各软件功能都有差异，建议初学者读者使用 VS Code：

- VS Code 官网：https://code.visualstudio.com
- 简体中文语言包：https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans

## Chrome 说明

Chrome 目前是全球最流行的浏览器，并且提供的开发者工具 (developer tools) 非常方便。

如果用其他浏览器可以吗，比如 Firefox, Safari, Edge？当然是可以的，但是本教程选择 Chrome。各浏览器功能都有差异，建议初学者读者使用 Chrome。

Chrome 基本的使用方法不会介绍，Chrome 开发者工具的使用会在教程中包含。

