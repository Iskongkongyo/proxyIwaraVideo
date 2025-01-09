<!DOCTYPE HTML>
   <html>
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
       <title>在线Iwara视频播放网站</title>
       <meta name="description" content="一款免费在线Iwara视频播放网站" />
       <meta name="keyword" content="免费、在线视频、Iwara、视频" />
       <link rel="icon" href="https://files.catbox.moe/n8mogj.png"/>
       <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
       <style type="text/css">
/* 相比于ssPro.html，新增了随机视频R18和普通内容选择功能！ */
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
           padding-bottom: 60px;
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
           background-color: rgba(0, 0, 0, 1); 
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
           width: 220px;
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
           margin: 0 0 0 10px;
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
          margin: 0 0 0 10px;
          background: #3AB54A;
          border-radius: 5px;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: .2s opacity ease;
        }

        .wrap .link-area #save {
          width: 90px;
          height: 38px;
          margin: 0 0 0 10px;
          background: #CCCC00;
          border-radius: 5px;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: .2s opacity ease;
        }
        
        .wrap .link-area #share {
          width: 90px;
          height: 38px;
          margin: 0 0 0 10px;
          background: #33ccff;
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
          width:100%; 
          bottom: 40px;  
          left: 0;
          position: fixed;
          color: #7e7e7e;
          padding: 10px;
          text-align: center;  
        }
  
        .wrap .footer a {
          color: #ff4665;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          table-layout: fixed;
      }

      th:first-child, td:first-child {
        width: 65%;
        word-wrap: break-word;
    }
      
      th, td {
          padding: 15px;
          text-align: left; 
          border: 1px solid #ccc;
      }
      
      th {
          background-color: #f2f2f2;
      }
      
      tr:hover {
          background-color: #f1f1f1;
      }

        select{
           width: 85px;
           height: 37px;
           line-height: 37px;
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
         <button id="saveButton" style="position: absolute; top: 10px; right: 120px; z-index: 1001; background-color: #CCCC00; color: white; border: none; padding: 5px 10px; cursor: pointer;">收藏</button>
         <button id="downButton" style="position: absolute; top: 10px; right: 65px; z-index: 1001; background-color: #87ceeb; color: white; border: none; padding: 5px 10px; cursor: pointer;">下载</button>
         <button id="closeButton" style="position: absolute; top: 10px; right: 10px; z-index: 1001; background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">关闭</button>
         <video id="myVideo" controls autoplay>
           <source class="videoSource" src="" type="video/mp4" />
           <source class="videoSource" src="" type="video/webm">
           <source class="videoSource" src="" type="video/ogg">
           您的浏览器不支持视频播放。
         </video>
       </div>

       <div id="saveVideos" style="display:none">
       <table id="data-table">
        <thead>
            <tr>
                <th>视频名称</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
       </table>
       </div>
   
       <div class="wrap">
         <div class="meta">
           <h2 class="title">在线Iwara视频播放网站</h2>
           <h3 class="description">一款免费在线Iwara视频播放网站</h3>
         </div>
         <div class="link-area">
           <input id="video" class="form" type="text" placeholder="填写视频ID或粘贴视频链接！" />
           <select>
           <option value="Source">原视频</option>
           <option value="360">360P</option>
           <option value="540" selected>540P</option>
           </select>
           <input id="submit" type="button" value="播放视频" />
           <input id="hot" type="button" value="随机热门" />
           <input id="save" type="button" value="打开收藏" />
           <input id="share" type="button" value="分享视频" />
         </div>
         <div class="footer">
           Copyright &copy; 权限- All Rights Reserved
           <p>
             <a href="/" target="_self" style="text-decoration:none;">跳转链接</a>
           </p>
         </div>
       </div>
   
       <script type="text/javascript">
       let videoPlayUrl,videoName,videoQuality,idValue,playId;
       // 获取id参数值
        idValue = (new URLSearchParams(location.search)).get('id');
        // 获取视频质量, 默认540p
        videoQuality = (new URLSearchParams(location.search)).get('quality') || '540';

        // 获取关闭按钮和 iframeContainer
        const iframeContainer = document.querySelector('#iframeContainer');
        const videoElement = document.querySelector('#myVideo');

        let listener1 = setInterval(()=>{videoElement.pause();},300);

        swal({
            title:'温馨提示',
            text:'本网站免费提供I站(Iwara)视频播放和下载服务！使用前请遵守当地法律法规！如果您能访问I站，强烈建议到I站官网观看更多精彩视频！是否跳转I站官网？',
            buttons:{
              cancel: {
                text: "暂不跳转",
                value: false,
                visible: true
              },
              confirm: {
                text: "跳转I站",
                value: true,
                visible: true
              }
            }
          }).then((value) => {
             clearInterval(listener1);
              if (value) {
                  let shareId = (new URL(location.href)).searchParams.get('id');
                  shareId ? location.replace('https://www.iwara.tv/video/'+shareId) : location.replace('https://www.iwara.tv');
              }else{
              videoElement.play();
            }
            });

       document.addEventListener('DOMContentLoaded', () => {
        setTimeout(function() {
          var el = document.getElementsByTagName('html')[0];
          el.className = 'on';
        }, 100);
      
        if (idValue) {
          document.querySelector('#video').value = idValue;
          document.querySelector('select').value = videoQuality;
          skip();
        }
      });
      
      // 回车监听事件
      document.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          skip();
        }
      });
      
      document.querySelector('#submit').addEventListener('click', skip);

      document.querySelector('#hot').addEventListener('click', getHots);

      document.querySelector('#share').addEventListener('click', ()=>{copyLinkToClipboard(null)});

      document.querySelector('#save').addEventListener('click', ()=>{getSaveVideos(JSON.parse(localStorage.getItem('save')));});

      document.querySelector('#video').addEventListener('input', () => {
        let videoUrl = document.querySelector('#video').value;
        if (videoUrl.startsWith('https://www.iwara.tv/video/')) {
            let newVideoId = videoUrl.replace('https://www.iwara.tv/video/', '').split('/')[0];
            setTimeout(() => {
                document.querySelector('#video').value = newVideoId;
            }, 200);
        }
    });

      
      // 为关闭按钮添加事件监听
      document.querySelector('#closeButton').addEventListener('click', () => {
        videoElement.pause(); // 停止播放视频
        videoElement.currentTime = 0; // 重置播放时间
        iframeContainer.style.display = 'none'; // 隐藏父容器
      });

      // 为下载按钮添加事件监听
      document.querySelector('#downButton').addEventListener('click', () => {
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = videoPlayUrl;
        link.style = 'z-index:1002';
        link.download = videoName;
        document.body.appendChild(link);
        link.click();
        swal("准备下载，请稍等!", {
            icon: "success",
            buttons: false,
            timer: 1500,
          });
        document.body.removeChild(link);
      });

      document.querySelector('#saveButton').addEventListener('click', () => {
        let data = localStorage.getItem('save') ? JSON.parse(localStorage.getItem('save')) : {};
        data[playId] = videoName;
        localStorage.setItem('save',JSON.stringify(data));
        swal("收藏成功!", {
            icon: "success",
            buttons: false,
            timer: 1500,
          });
      });

      //判断两个时间戳之差是否超过一天
      function isMoreThanOneDay(timestamp2) {
        const date1 = new Date();
        const date2 = new Date(timestamp2);
        return Math.abs(date1 - date2) > 1000 * 60 * 60 * 24;
      }

      // 复制文本到剪切板
			async function copyLinkToClipboard(value) {
				try { 
          if(value){
            await navigator.clipboard.writeText(value);
          }else{
            let url = new URL(location.origin);
            url.searchParams.set('id',document.querySelector('#video').value || 'Hvfo6PVnB9mnsD');
            url.searchParams.set('quality',document.querySelector('select').value || '540');       
            await navigator.clipboard.writeText(url.href);
          } 
          swal("链接已复制到剪切板！快去分享吧！", {
            icon: "success",
            buttons: false,
            timer: 2000,
          });
				} catch (err) {
          swal({
              text: '复制失败，失败原因：'+err,
              icon:'error',
              button:'关闭'
            });
				}
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

     function getSaveVideos(data){
      // 获取表格的tbody元素
    const tbody = document.querySelector("#data-table tbody");
 
    // 清空表格内容
    tbody.innerHTML = "";
 
    // 动态创建表格行
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const row = document.createElement("tr");
 
            // 创建value单元格
            const valueCell = document.createElement("td");
            valueCell.dataset.id = key;
            valueCell.textContent = data[key];
            row.appendChild(valueCell);
 
            // 创建按钮单元格
            const buttonCell = document.createElement("td");
            let button = document.createElement("button");
            button.textContent = "播放";
            button.style.cssText = "width:40%;height:100%;background: #33ccff;border-radius: 5px;color: #fff;border: none;";
            button.addEventListener("click", (event) => {
              event.stopPropagation();
              document.querySelector('#video').value = key;
              swal.close();
              skip();
            });
            buttonCell.appendChild(button);

            button = document.createElement("button");
            button.textContent = "删除";
            button.style.cssText = "margin-left:6px;width:40%;height:100%;background: #ff4665;border-radius: 5px;color: #fff;border: none;";
            button.addEventListener("click", (event) => {
                event.stopPropagation();
                let isDelete = confirm('确认要删除'+data[key]+'吗？');
                if(!isDelete) return;
                delete data[key];
                localStorage.setItem('save',JSON.stringify(data));
                document.querySelector('#save').click();
            });
            buttonCell.appendChild(button);

            row.appendChild(buttonCell);
 
            // 将行添加到tbody中
            tbody.appendChild(row);
        }
    }
      
    const rows = document.querySelectorAll("#data-table tbody tr");

    rows.forEach(row => {
        row.addEventListener("click", () => {
            copyLinkToClipboard('https://www.iwara.tv/video/'+row.cells[0].dataset.id);
        });
    });

      swal({
        content: document.querySelector("#data-table"),
        buttons:{
          clear: {
                text: "清空收藏",
                value: true
            },
          close: {
                text: "关闭",
                value: false
          }
        }
      }).then((value)=>{
         if(value){
          swal({
            title:'温馨提示',
            text:'清空收藏操作不可逆，是否清空收藏内容？',
            icon:'info',
            buttons:['取消','清空内容']
            }).then((value)=>{
            value ? localStorage.removeItem('save') : swal.close();
           })
         }else{
           swal.close();
         }
      });

      document.querySelector("#saveVideos").innerHTML = '<table id="data-table"><thead><tr><th>视频名称</th><th>操作</th></tr></thead><tbody></tbody></table>';

     }

      //获取热门视频信息
      function getHots() {

        let info,ts,type;

        swal({
            text: '随机热门视频分为普通和R18内容，您要随机播放哪种内容？',
            icon:'info',
            buttons:{
                cancel: {
                  text: "关闭",
                  value: false,
                  visible: true
                },
                r18: {
                  text: "R18",
                  value: 'R18',
                  visible: true
                },
                general:{
                  text:"普通",
                  value:'General',
                  visible:true
                }
              }
          }).then((value)=>{
                if(value === 'R18'){
                    [info,ts,type] = ['hots','ts','ecchi'];
                }else if(value === 'General'){
                   [info,ts,type] = ['generalHots','generalTs','general'];
                }else{
                  return swal.close();
                }

                if(localStorage.getItem(info) && !isMoreThanOneDay(parseInt(localStorage.getItem(ts)))){
                  const results = JSON.parse(localStorage.getItem(info));
                  document.querySelector('#video').value = results[getRandomInt(0,results.length)]['id'];
                  skip();
                }else{
                    fetch('https://proxy.ixq.pp.ua/?url='+encodeURIComponent('https://api.iwara.tv/videos?rating='+type+'&sort=trending&limit=24'))
                  .then(response => {
                    if(!response.ok){
                    swal({
                        text: '热门视频信息获取失败，请再次尝试获取！',
                        icon:'error',
                        button:'关闭'
                      })
                  }else{
                     return response.json();
                  }
                }).then(data=>{
                    const results = data.results;
                    localStorage.setItem(info,JSON.stringify(results));
                    localStorage.setItem(ts,(new Date()).getTime());
                    document.querySelector('#video').value = results[getRandomInt(0,results.length)]['id'];
                    skip();
                  }).catch(err=>{
                    swal({
                        text: '出现错误：'+err,
                        icon:'error',
                        button:'关闭'
                      });
                  })
                }


          })

      }

      function skip() {
        const id = document.querySelector('#video').value || 'Hvfo6PVnB9mnsD';
        const patt = /^[0-9a-zA-Z]{9,}$/;

        if (!id) {
          document.querySelector('#video').value = '';
          return;
        }else if (!patt.test(id)) {
          swal({
              text: '视频ID格式不正确！',
              icon:'error',
              button:'关闭'
            });
          document.querySelector('#video').value = '';
          return;
        }

        videoQuality = document.querySelector('select').value;
        playId = id;
      
        fetch('https://这里填写反代域名/?url=https://api.iwara.tv/video/' + id)
          .then(response =>{
            if(!response.ok){
              swal({
                  text: '视频信息获取失败，请再次尝试获取！',
                  icon:'error',
                  button:'关闭'
                })
            }else{
               return response.json();
            }
          }).then(data => {
            console.log(data);
            const filename = data.file.id + '_Source.' + data.file.mime.replace('video/', '');
            const path = encodeURIComponent(data.file.path);
            const fileUrl = new URL(data.fileUrl);
            const id = data.file.id;
            const filehash = fileUrl.searchParams.get('hash');
            const fileExpires = fileUrl.searchParams.get('expires');
            videoName = data.title + '.' + data.file.mime.replace('video/', '');
            const download = encodeURIComponent('Iwara - ' + data.title + ' [' + data.id + '].' + data.file.mime.replace('video/', ''));
      
            //标题检查
            if(data.title.search(/(NTR)/i) != -1){
              let listener = setInterval(()=>{videoElement.pause();},300);
              swal({
                title:'温馨提示',
                text:'该视频标题为'+data.title+'。检测到该视频标题含有NTR关键字，是否继续播放该视频？',
                buttons:{
                  cancel: {
                    text: "播放",
                    value: false,
                    visible: true
                  },
                  confirm: {
                    text: "不播放",
                    value: true,
                    visible: true
                  }
                }
              }).then((value) => {
                  clearInterval(listener1);
                  clearInterval(listener);
                  if (value) {
                  document.querySelector('#closeButton').click();
                  return;
                  }else{
                  videoElement.play();
                }
                });
            }

            // 要哈希的字符串
            const inputString = id + "_" + fileExpires + "_5nFp9kmbNnHdAFhaqMvt";
      
            hashStringSHA1(inputString).then(hash => {
              console.log("SHA-1 Hash:", hash);
      
              fetch('https://这里填写反代域名/?url=https://files.iwara.tv'+fileUrl.pathname + '?expires=' + fileExpires + '&hash=' + filehash + '&download=' + download,
                { headers: { 'X-Version': hash } })
                .then(response => {
                  if(!response.ok){
                  swal({
                      text: '视频播放资源获取失败，请再次尝试获取！',
                      icon:'error',
                      button:'关闭'
                    })
                }else{
                   return response.json();
                }
              }).then(data => {
                  console.log(data);
                  const videoUrl = 'https:' + getVideoViewUrlByQuality(data, videoQuality);
                  console.log('获取视频链接：' + videoUrl);
                  const FinUrl = 'https://这里填写反代域名/?url=' + encodeURIComponent(videoUrl);
                  videoPlayUrl = FinUrl;
                  console.log('最终视频播放链接：' + FinUrl);
                  // 显示 iframeContainer 和 video 元素
                  iframeContainer.style.display = 'flex';  // 显示 video 元素
                  const videoSource = document.querySelector('.videoSource');
                  videoSource.src = FinUrl;  // 设置 video 源链接
                  videoElement.load();  // 加载视频
                  videoElement.play();  // 播放视频
                })
                .catch(err => swal({
                    text: '出现错误：'+err,
                    icon:'error',
                    button:'关闭'
                  }))
            });
          })
          .catch(error => swal({
              text: '出现错误：'+error,
              icon:'error',
              button:'关闭'
            }))
      }
       </script>
     </body>
   </html>  
