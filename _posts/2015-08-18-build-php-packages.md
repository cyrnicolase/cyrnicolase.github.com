---
layout: post
category: php
title: "PHP 安装过程中缺少包"
date: 2015-08-18
comments: true
---

### PHP 安装过程中缺少包

#debian/ubuntu
```
sudo apt-get install -y build-essential
sudo apt-get install -y autoconf
sudo apt-get install -y libxml2-dev
sudo apt-get install -y libcurl4-openssl-dev
sudo apt-get install -y libc-client2007e-dev
sudo apt-get install -y libpng++-dev
sudo apt-get install -y libjpeg-dev
sudo apt-get install -y libfreetype6-dev
sudo apt-get install -y libmcrypt-dev
```
 
 
#centos
```
yum install libxml2-devel libcurl-devel libmcrypt-devel libc-client-devel libpng-devel libjpeg-turbo-devel freetype-devel
```