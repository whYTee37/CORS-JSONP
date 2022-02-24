# CORS-JSONP
代码使用方法：
CORS文件夹和JSONP文件夹是独立的，互不影响。想测试哪个就进入哪个文件夹，以CORS为例：
> cd CORS/qq-com; node server.js 8888
> cd CORS/jack-com; node server.js 9990

然后在主机的host文件里添加两行：
 127.0.0.1 qq.com
 127.0.0.1 jack.com
 
 最后打开浏览器访问：http://jack.com:9990/index.html
 打开控制台观察跨域访问结果。
 
 注意测试完记得删除掉host文件里新增的这两句话，否则可能会导致你无法正常访问真正的qq.com网页。
 
 
