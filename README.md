# 简单反代Iwara(I站)视频

## 项目内容：

index.html是反代Iwara的前端页面，使用前端三件套（HTML+CSS+JS）简单编写。

worker.js是项目的入口js文件，其中包含index.html内容和反代I站视频的内容。

## 部署方法：

方法一：使用邮箱注册Cloudflare账号，然后新建一个Worker项目。最后将worker.js文件内容拷贝粘贴到新创建的Worker项目后保存即可使用！注意：强烈建议添加自定义域。因为部署好的worker项目默认提供的域名在大陆被DNS污染，无法直接访问。所以强烈建议添加一个托管在Cloudflare网站上面的域名！！！

方法二：如果你使用Nginx/Apache/Caddy等Web服务器实现类似woker.js里面对Iwara的反向代理，那么你可以使用这种方法来私有化部署。将index.html里面跟反代Iwara相关的接口替换成你实现的接口。然后为index.html创建虚拟主机提供Web访问服务（注意解决访问反代接口可能出现的CORS问题）。

## 示例网站：

https://ss.iys.pp.ua

https://ss.ixq.pp.ua
