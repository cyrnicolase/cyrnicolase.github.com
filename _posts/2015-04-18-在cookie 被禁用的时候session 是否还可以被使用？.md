---
layout: post
title: "在Cookie被禁用的时候Session是否还可以被使用"
date: 2015-04-18
comments: false
---


在cookie被禁用的时候session是否还可以被使用？
===
+ 对于这个问题，其实就PHP 而言答案不是绝对的。首先需要明确两个概念，session 是记录在服务器端的，而cookie 是记录在客户端（即浏览器中的）所以，session是比cookie 更加安全的一种保存文件信息的。

+ 那么在cookie 被禁用的情况下，session 是否还可以被使用呢？理论上session 是不能正常被使用的。因为session的使用必须有一个唯一的`sessionid` 的存在。而，这个sessionid 就是被浏览器存放在cookie中的，所以如果cookie 被禁用了，那么sessionid 将没办法保存，所以服务器端就无法找到对应的session 文件保存地址了。

+ 针对这个问题，其实我们就可以考虑不将sessionid 保存在cookie 中就可以解决了。我们可以将sessionid 作为querystring的一部分，这样浏览器除了从cookie 中获取sessionid 外，还可以从querystring 中获取。达到没有cookie 的情况下，依然能够正常的使用session的目的。
