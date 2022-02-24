function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = "jackJSONPCallbackName" + Math.random();
    window[random] = (data) => {
      resolve(data);
    };
    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
  });
}

jsonp("http://qq.com:8888/friends.js").then((data) => {
  console.log(
    "我是hack网页的js，如果你看到这句话说明以下数据成功从QQ.com的friends.json里跨域访问到：\n"
  );
  console.log(data);
});
