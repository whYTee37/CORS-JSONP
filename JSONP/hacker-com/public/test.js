let req = new XMLHttpRequest();
req.open("GET", "http://qq.com/friends.js");
req.onreadystatechange = () => {
  if (req.readyState === 4 && req.status === 200) {
    console.log(req.response);
  }
};
req.send();
