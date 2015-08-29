---
layout: default
category: lamp-lnmp
title: "Redis 集群搭建步骤"
date: 2015-04-20
comments: false
---

Redis 集群搭建
===
#### 搭建工具
+ redis
+ twemproxy 也叫 nutcracker，是一个twtter 开源的一个redis和memcached 的代理服务器。


#### twemproxy 搭建过程
1. 安装autoreconf ，目的是编译出configure 脚本
2. 安装automake 
3. 安装libtool，这个内容挺重要的，没有他就没办法通过 autoreconf 生成 configure 文件进行编译的。
4. 获取twemproxy ，简单的方式是从github 上面clone 一个下来 `git clone git://github.com/twitter/twemproxy.git`
5. 安装sudo apt-get install build-essential libtool autoconf automake

<pre><code>
$ cd twemproxy && autoreconf  -fvi
$ ./configure  --prefix=/home/work/local/nucracker  --enable-debug=log
$ make
$ make install
</code></pre>

检验是否安装成功：

<pre><code>
$ cd /home/work/local/nucracker/sbin && ./nucracker -h
This is nutcracker-0.4.0

Usage: nutcracker [-?hVdDt] [-v verbosity level] [-o output file]
                  [-c conf file] [-s stats port] [-a stats addr]
                  [-i stats interval] [-p pid file] [-m mbuf size]

Options:
  -h, --help             : this help
  -V, --version          : show version and exit
  -t, --test-conf        : test configuration for syntax errors and exit
  -d, --daemonize        : run as a daemon
  -D, --describe-stats   : print stats description and exit
  -v, --verbose=N        : set logging level (default: 5, min: 0, max: 11)
  -o, --output=S         : set logging file (default: stderr)
  -c, --conf-file=S      : set configuration file (default: conf/nutcracker.yml)
  -s, --stats-port=N     : set stats monitoring port (default: 22222)
  -a, --stats-addr=S     : set stats monitoring ip (default: 0.0.0.0)
  -i, --stats-interval=N : set stats aggregation interval in msec (default: 30000 msec)
  -p, --pid-file=S       : set pid file (default: off)
  -m, --mbuf-size=N      : set size of mbuf chunk in bytes (default: 16384 bytes)
</code></pre>

#### twemproxy (nutcracker) 的配置
这个配置文件是在安装文件中存在的，在那装目录的 conf/ 目录里面，可以根据实际的需要获取其中的某一些内容。

<pre><code>
alpha:
    listen: 127.0.0.1:22121
    hash:   fnv1a_64
    distribution:   ketama  # 这里就是一致性hash 的选择
    auto_eject_hosts:   true
    redis:  true
    server_retry_timeout:   200
    server_failure_limit:   1
    servers:
        - 127.0.0.1:6380:1
        - 127.0.0.1:6381:1
</code></pre>

从这个配置里面我们可以看到，这里通过暴露`22121` 端口作为redis 集群对外的统一端口。他的作用是将 6380,6381 这些端口合并在一起，达到分布式的目的。访问redis 的方式跟以前的逻辑是一样的，一样的使用set   get 函数。


所以这样就行了一层代理封装。


#### 启动
这里需要注意的是，在启动nutcracker 的时候，需要考虑启动文件的执行路径。因为nutcracker 会有一个默认的配置文件路径，所以需要考虑这个问题。或者，可以通过 nutcracker 的参数来强制指定配置文件

<pre><code>
$ ./sbin/nutcracker   # 这个会默认到当前目录下的 ./conf/nutcracker.yml 作为配置
$ ./sbin/nutcracker -c ./conf/nutcracker.yml  # 
</code></pre>

#### 参考文档：
http://mdba.cn/?p=157 <br />
http://antirez.com/news/44 <br />
http://antirez.com/news/36 <br />
