---
layout: post
category: lamp-lnmp
title: "nginx的try_file 使用"
date: 2015-08-29
---


今天有个需求，将一个html 页面挂载到网上。因为文件路径的后面是 `.html` 字符串的。想让这个`.html` 不用的情况就显示。所以使用了nginx 的rewrite 功能。

<code>
location / {
	rewrite ^/(.*)$ $1.html break;
}
</code>
这样就将URI 的路径指定到服务器文件路径上，并补充了一个 `.html`

但是，考虑到如果用户又多余的写了 `.html` 该怎么办呢，于是想到了使用 `try_files` 来进行路径的选择。替换 `if `

<code>
location @default {
	rewrite ^/(.*)$ $1.html break;
}

location / {
	try_files $uri @default;
}
</code>

这样就多了一个if，首先是指向路径的文件，如果该文件不存在，那么就使用 `@default` 这个`location` 这个方式来进行处理。这里就做了 .html 补充。

