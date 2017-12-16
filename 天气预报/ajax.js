
// 以函数是的形式封装ajax请求
// 参数：method、url、data、successFn、errorFn
function ajaxFn(method,url,data,successFn,errorFn){
  var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
  method=method.toUpperCase();
  // 配置请求参数
  if (method=='GET') {
    xhr.open('GET',url+'?'+data,true);
    var a=url+'?'+data;
    console.log(a);
    xhr.send(null);
  }else if (method=='POST') {
    xhr.open('POST',url,true);
    xhr.send(data);
  }else {
    console.error('请求方法有误，请检查后调用');
  }
// 监听服务器状态
  xhr.onreadystatechange=function(){
    if (xhr.readyState==4&&xhr.status==200) {
      // successFn(xhr.responseText);
      // 根据responseXML属性是否为空，判断返回值类型
      var result=xhr.responseXML?xhr.responseXML: xhr.responseText;
      successFn(result);
    }else if(xhr.status==404){
      errorFn('页面找不到');
    }else if (xhr.status==500) {
      errorFn('服务器内部错误');
    }
  }



}
