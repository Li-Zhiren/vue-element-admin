(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dec0"],{87:function(n,t){},88:function(n,t){},zd34:function(n,t,e){"use strict";e.r(t),e.d(t,"export_txt_to_zip",function(){return c});var i=e("B/3w"),o=e.n(i);function c(n,t,e,i){var c=new o.a,r=e||"file",u=i||"file",f=n+"\r\n";t.forEach(function(n){var t;t=n.toString(),f+=t+"\r\n"}),c.file(r+".txt",f),c.generateAsync({type:"blob"}).then(function(n){saveAs(n,u+".zip")},function(n){alert("导出失败")})}e("usd7")}}]);