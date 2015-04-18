---
layout: post
title: "PHP执行过程"
date: 2015-03-12
comments: true
---

### PHP 执行过程
PHP 缓存分两种：
+ 编译缓存：就是对PHP编译后的OPCODE 进行缓存，比如：APC, Accelerator, xcache 等
+ 数据缓存：memcached，memcache，redis（这些是对数据库的数句缓存）。针对PHP 模板数据进行缓存的工具主要有smarty 等。

PHP 是解释型语言，在PHP 语言执行代码的时候，需要下面两步：
1. 编译过程
	+ PHP 读取文件，并编译该文件，然后生成能够在Zend
	+ Engine 虚拟机上执行的中间码
2. 执行过程
	+ PHP 直接执行中间码
	+ 以下两种情况，会导致PHP 运行程序代码效率低下：
		- 即使PHP 代码文件没有发生改变，也会被PHP 重新编译
		- 如有引用文件，PHP也要花费时间重新编译这些被引用的文件。因此，需要PHP 编译缓存工具对PHP程序的编译结果做缓存处理。这样，PHP 程序只需要编译一次，就不要重新再做无意义的编译了。
	
