// let req = new XMLHttpRequest();
// req.open("GET", "http://qq.com:8888/qqdata.json");
// req.onreadystatechange = () => {
//   if (req.readyState === 4 && req.status === 200) {
//     console.log(
//       "here is JACK-ZONE,下面的内容如果能看到则是从QQ-ZONE请求得来的:\n" +
//         req.response
//     );
//   }
// };
// req.send();

/*封装ajax后再调用*/
function ajax(method, url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(request);
        }
      }
    };
    request.send();
  });
}
ajax("get", "http://qq.com:8888/qqdata.json").then((response) => {
  console.log(
    "这是 jack网页里的js实现的AJAX,如果你看到这句话说明以下内容是从QQ.com跨域访问得到的数据：\n"
  );
  console.log(response);
});
