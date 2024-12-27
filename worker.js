const html = `<!DOCTYPE HTML>
   <html>
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
       <title>在线Iwara视频播放网站</title>
       <meta name="description" content="一款免费在线Iwara视频播放网站" />
       <meta name="keyword" content="免费、在线视频、Iwara、视频" />
       <style type="text/css">
         * {
           margin: 0;
           padding: 0;
         }
   
         html,
         body,
         input{
           outline: none;
           font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
           font-size: 12px;
         }
   
         html,
         body {
           background: #fff;
         }
   
         #iframeContainer {
           display: none; 
           justify-content: center;
           align-items: center;
           position: fixed;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           background-color: rgba(0, 0, 0, 0.5); 
           z-index: 1000; 
         }
   
         #myVideo {
           width: 80%; 
           height: 80%; 
           border: none; 
         }
   
         a {
           text-decoration: none;
         }
   
         a:hover {
           text-decoration: underline;
         }
   
         .wrap {
           text-align: center;
           overflow: hidden;
         }
   
         .wrap .meta {
           margin: 160px 0 0 0;
           opacity: 0;
           transform: translateY(-150px);
           transition: .5s all ease;
         }
   
         .on .wrap .meta {
           opacity: 1;
           transform: translateY(0);
         }
   
         .wrap .meta .title {
           line-height: 1em;
           color: #ff4665;
           font-size: 42px;
           text-transform: uppercase;
         }
   
         .wrap .meta .description {
           margin: 10px 0 0 0;
           line-height: 1em;
           color: #7e7e7e;
           font-size: 16px;
           font-weight: normal;
         }
   
         .wrap .link-area {
           margin: 50px 0 0 0;
           opacity: 0;
           transition: .5s opacity ease;
         }
   
         .on .wrap .link-area {
           opacity: 1;
         }
   
         .wrap .link-area input {
           display: inline-block;
           vertical-align: middle;
         }
   
         .wrap .link-area .form {
           width: 320px;
           height: 32px;
           line-height: 32px;
           padding: 0 10px;
           border: 3px solid #bdc3c7;
           border-radius: 5px;
           color: #333;
         }
   
         .wrap .link-area .form.focus,
         .wrap .link-area .form:focus,select.focus,select:focus {
           border-color: #ff4665;
           transition: .2s border ease;
         }
   
         .wrap .link-area #submit {
           width: 90px;
           height: 38px;
           margin: 0 0 0 5px;
           background: #ff4665;
           border-radius: 5px;
           color: #fff;
           border: none;
           cursor: pointer;
           transition: .2s opacity ease;
         }

         .wrap .link-area #hot {
          width: 90px;
          height: 38px;
          margin: 0 0 0 5px;
          background: #3AB54A;
          border-radius: 5px;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: .2s opacity ease;
        }
   
         .wrap .link-area #submit:hover {
           opacity: .75;
         }
   
         .wrap .link-area #submit:active {
           opacity: .9;
         }

         .wrap .footer {
          width: 100%;
          bottom: 80px;
          left: 0;
          position: fixed;
          color: #7e7e7e;
        }
  
        .wrap .footer a {
          color: #ff4665;
        }

        select{
           width: 80px;
           height: 35px;
           line-height: 32px;
           padding: 0 10px;
           border: 3px solid #bdc3c7;
           border-radius: 5px;
           color: #333;
        }
       </style>
     </head>
   
     <body>
       <div id="iframeContainer">
         <!-- 使用 video 元素来加载视频 -->
         <button id="downButton" style="position: absolute; top: 10px; right: 65px; z-index: 1001; background-color: #87ceeb; color: white; border: none; padding: 5px 10px; cursor: pointer;">下载</button>
         <button id="closeButton" style="position: absolute; top: 10px; right: 10px; z-index: 1001; background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">关闭</button>
         <video id="myVideo" controls>
           <source class="videoSource" src="" type="video/mp4" />
           <source class="videoSource" src="" type="video/webm">
           <source class="videoSource" src="" type="video/ogg">
           您的浏览器不支持视频播放。
         </video>
       </div>
   
       <div class="wrap">
         <div class="meta">
           <h2 class="title">在线Iwara视频播放网站</h2>
           <h3 class="description">一款免费在线Iwara视频播放网站</h3>
         </div>
         <div class="link-area">
           <input id="video" class="form" type="text" placeholder="填写视频ID，如：Hvfo6PVnB9mnsD" />
           <select>
           <option value="Source">原视频</option>
           <option value="360">360P</option>
           <option value="540" selected>540P</option>
           </select>
           <input id="submit" type="button" value="播放视频" />
           <input id="hot" type="button" value="随机热门" />
         </div>
         <div class="footer">
           Copyright &copy; 权限- All Rights Reserved
           <p>
             <a href="/" target="_blank" style="text-decoration:none;">跳转链接</a>
           </p>
         </div>
       </div>
   
       <script type="text/javascript">
       let videoPlayUrl,videoName,videoQuality,idValue;
       // 获取id参数值
        idValue = (new URLSearchParams(location.search)).get('id');
        // 获取视频质量, 默认540p
        videoQuality = (new URLSearchParams(location.search)).get('quality') || '540';

       document.addEventListener('DOMContentLoaded', () => {
        setTimeout(function() {
          var el = document.getElementsByTagName('html')[0];
          el.className = 'on';
        }, 100);
      
        if (idValue) {
          document.querySelector('#video').value = idValue;
          skip(0);
        }
      });
      
      // 回车监听事件
      document.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          skip(1);
        }
      });
      
      document.querySelector('#submit').addEventListener('click', ()=>{skip(1);});

      document.querySelector('#hot').addEventListener('click', getHots);
      
      // 获取关闭按钮和 iframeContainer
      const closeButton = document.querySelector('#closeButton');
      const downButton = document.querySelector('#downButton');
      const iframeContainer = document.querySelector('#iframeContainer');
      const videoElement = document.querySelector('#myVideo');
      
      // 为关闭按钮添加事件监听
      closeButton.addEventListener('click', () => {
        videoElement.pause(); // 停止播放视频
        videoElement.currentTime = 0; // 重置播放时间
        iframeContainer.style.display = 'none'; // 隐藏父容器
      });

      // 为下载按钮添加事件监听
      downButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = videoPlayUrl;
        link.style = 'z-index:1002';
        link.download = videoName;
        link.click();
      });

      //判断两个时间戳之差是否超过一天
      function isMoreThanOneDay(timestamp2) {
        const date1 = new Date();
        const date2 = new Date(timestamp2);
        return Math.abs(date1 - date2) > 1000 * 60 * 60 * 24;
      }

      //获取从a到b的随机数
      function getRandomInt(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
      }

      //SHA-1进行Hash
      async function hashStringSHA1(input) {
        // 使用TextEncoder将字符串编码为UTF-8字节序列
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
     
        // 使用Web Crypto API的crypto.subtle.digest方法进行SHA-1哈希计算
        const hashBuffer = await crypto.subtle.digest('SHA-1', data);
     
        // 将ArrayBuffer转换为Uint8Array，然后转换为十六进制字符串
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
     
        return hashHex;
    }

    //获取指定清晰度视频
    function getVideoViewUrlByQuality(objectArray, quality) {
      for (let i = 0; i < objectArray.length; i++) {
          const obj = objectArray[i];
          // 检查当前对象的name属性是否与给定的quality匹配
          if (obj.name === quality) {
              // 如果匹配，返回该对象的src.view属性值
              return obj.src.view;
          }
      }
      // 如果没有找到匹配项，返回第一个对象的src.view属性值
      return objectArray[0].src.view;
  }

      //获取热门视频信息
      function getHots() {
        if(localStorage.getItem('hots') && !isMoreThanOneDay(parseInt(localStorage.getItem('ts')))){
          const results = JSON.parse(localStorage.getItem('hots'));
          document.querySelector('#video').value = results[getRandomInt(0,results.length)]['id'];
          skip(1);
        }else{
            fetch('/view?url='+encodeURIComponent('https://api.iwara.tv/videos?rating=ecchi&sort=trending&limit=24'))
          .then(response => response.json())
          .then(data=>{
            const results = data.results;
            localStorage.setItem('hots',JSON.stringify(results));
            localStorage.setItem('ts',(new Date()).getTime());
            document.querySelector('#video').value = results[getRandomInt(0,results.length)]['id'];
            skip(1);
          }).catch(err=>{
            alert('出现错误：'+err);
          })
        }
      }

      function skip(type) {
        const id = document.querySelector('#video').value || 'Hvfo6PVnB9mnsD';
        const patt = /^[0-9a-zA-Z]{9,}$/;
      
        if (!id) {
          document.querySelector('#video').value = '';
          return;
        } else if (!patt.test(id)) {
          alert('视频ID格式不正确！');
          document.querySelector('#video').value = '';
          return;
        }

        if(type === 1){
           //非直接跳转
           videoQuality = document.querySelector('select').value;
        }
      
        fetch('/video/' + id)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            const filename = data.file.id + '_Source.' + data.file.mime.replace('video/', '');
            const path = encodeURIComponent(data.file.path);
            const fileUrl = new URL(data.fileUrl);
            const id = data.file.id;
            const filehash = fileUrl.searchParams.get('hash');
            const fileExpires = fileUrl.searchParams.get('expires');
            videoName = data.title + '.' + data.file.mime.replace('video/', '');
            const download = encodeURIComponent('Iwara - ' + data.title + ' [' + data.id + '].' + data.file.mime.replace('video/', ''));
      
            // 要哈希的字符串
            const inputString = id + "_" + fileExpires + "_5nFp9kmbNnHdAFhaqMvt";
      
            hashStringSHA1(inputString).then(hash => {
              console.log("SHA-1 Hash:", hash);
      
              fetch(fileUrl.pathname + '?expires=' + fileExpires + '&hash=' + filehash + '&download=' + download,
                { headers: { 'X-Version': hash } })
                .then(response => response.json())
                .then(data => {
                  console.log(data);
                  const videoUrl = 'https:' + getVideoViewUrlByQuality(data, videoQuality);
                  console.log('获取视频链接：' + videoUrl);
                  const FinUrl = '/view?url=' + encodeURIComponent(videoUrl);
                  videoPlayUrl = FinUrl;
                  console.log('最终视频播放链接：' + FinUrl);
                  // 显示 iframeContainer 和 video 元素
                  iframeContainer.style.display = 'flex';  // 显示 video 元素
                  const videoSource = document.querySelector('.videoSource');
                  videoSource.src = FinUrl;  // 设置 video 源链接
                  videoElement.load();  // 加载视频
                  videoElement.play();  // 播放视频
                })
                .catch(err => alert('出现错误：' + err))
            });
          })
          .catch(error => alert('出现错误：' + error))
      }
       </script>
     </body>
   </html>   
   `;

   export default {
      async fetch(request,env) {
        let url = new URL(request.url);
    if (url.pathname === '/') {
          return new Response(html, {
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      });
        }else if (url.pathname.startsWith('/video/')) {
          url.hostname = 'api.iwara.tv'
          let new_request = new Request(url, request);
          return fetch(new_request);
        }else if (url.pathname.startsWith('/view')) {
            let Finurl  = url.searchParams.get('url');
            let new_request = new Request(Finurl, request);
            return fetch(new_request);
          }else if (url.pathname.startsWith('/file/')) {
              url.hostname = 'files.iwara.tv'
              let new_request = new Request(url, request);
              return fetch(new_request);
            }
        return env.ASSETS.fetch(request);
      }
    };