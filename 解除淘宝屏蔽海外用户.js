// ==UserScript==
// @name         解除淘宝屏蔽海外用户
// @description  当访问禁止出口的淘宝商品时，取消自动跳转
// @icon         https://img.alicdn.com/img/bao/uploaded/i4/i4/TB1R3agGVXXXXaVXFXXXXXXXXXX_!!2-item_pic.png_196x196Q50s50.jpg
// @version      1.0
// @author       hlc1134
// @include      *item.taobao.com/*
// @grant        none
// @namespace https://greasyfork.org/users/363186
// ==/UserScript==


(function() {
    'use strict';
    var bPreventOverseasRedirection = false
    window.document.onmousedown = function(){mouseDown()};
    function mouseDown()
    {
        console.log("!!!")
        bPreventOverseasRedirection = true;
    }
    window.onbeforeunload = function(event){
        var url = window.location.href
        var urlArr = url.split('/');
        if(window.document.readyState!=='complete' && urlArr[2]=="item.taobao.com" && bPreventOverseasRedirection == false) {
            bPreventOverseasRedirection = true
            return true
        }
        return null
    };
})();