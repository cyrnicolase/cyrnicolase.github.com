---
layout: post
tag: php
title: "Smarty判断数组是否为空"
date: 2015-04-03
comments: false
---


### smarty判断数组是否为空
> 在smarty 模板引擎中市场会用到判断数组是否为空，然后非空的时候进行操作。其方法有如下两种

#### 方法一：用count 来取得数组的下标个数
下面的列子中，如果$array 为空则不输出任何数据

``` SMARTY
{if $array | @count neq 0}
    ... ...
{/if}
```

#### 方法二：直接判断
使用如下方案

``` SMARTY
{if $array neq ""}
    ... ...
{/if}
```

#### 方法三：
``` SMARTY
{if count($array) neq 0}
    ... ...
{/if}
```

#### 方法四：
直接使用PHP 的函数来进行判断
```
{if count($array) neq 0 }
    ... ...
{/if}
```
