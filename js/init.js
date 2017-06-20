/**
 * Created by Anastasia on 15.06.2017.
 */

'use strict';
function myFunction() {
    document.getElementById("myP").style.cssText = "transition-duration:1s;transform: translate(0,-170px);";
    document.getElementById("myP1").style.cssText = "transition-duration:1s;transform: translate(0,-170px);";
    document.getElementById("myP2").style.cssText = "transition-duration:1s;transform: translate(0,-170px);";

    function disappear() {
        var  subBarBig = document.getElementsByClassName("bar");
        var xyz;
        for (xyz = 0; xyz < subBarBig.length; xyz++) {
            subBarBig[xyz].style.cssText = "transition-duration:3s; opacity:0;";
        }
    }
    function func() {

        function smallIconsAppear() {
            var  subBarSmall = document.getElementsByClassName("subBar");
            var xy;
            for (xy = 0; xy < subBarSmall.length; xy++) {
                subBarSmall[xy].style.cssText = "opacity: 1; transition-duration:1s;";
            }
        }

        document.getElementById("new").innerHTML=` <div class="subBar">
                <img src="img/cat-advertising.svg" class="iconsForm">
                <p class="textInfo">Реклама и соцсети</p>
            </div>

            <div class="subBar" onclick="help()">
                <img src="img/cat-simple-help.svg" class="iconsForm">
                <p class="textInfo">Простая помощь</p>
            </div>
            <div class="subBar design">
                <img src="img/cat-design.svg" class="iconsForm" id="paint_img">
                <p class="textInfo infoWhite">Дизайн <span class="invisibleText span">______</span></p>
            </div>

            <div class="subBar">
                <img src="img/cat-text.svg" class="iconsForm">
                <p class="textInfo">Тексты <span class="invisibleText">______</span></p>
            </div>

            <div class="subBar">
                <img src="img/cat-web-help.svg" class="iconsForm">
                <p class="textInfo">Помощь по сайту</p>
            </div>

            <div class="subBar">
                <img src="img/cat-other.svg" class="iconsForm">
                <p class="textInfo">Другое <span class="invisibleText">______</span></p>
            </div>`;


        setTimeout(disappear, 10);
        setTimeout(smallIconsAppear, 1);

    }

    setTimeout(func, 1000);

    var y = document.getElementsByClassName("barsPosition");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.cssText = "transition-duration:1s; margin-left:105px;";
    }

    function droper() {

        document.getElementById("subTabs").innerHTML = `<div class="subBars">
            <div class="subBarsCategories">
                <p class="subText">Дизайн сайта, лендинг</p>
            </div>

            <div class="subBarsCategories">
                <p class="subText">Баннеры, иконки</p>
            </div>

            <div class="subBarsCategories">
                <p class="subText">Логотип, фирменный стиль</p>
            </div>

            <div class="subBarsCategories">
                <p class="subText">Дизайн полиграфии</p>
            </div>

            <div class="subBarsCategories">
                <p class="subText">Обработка фотографии</p>
            </div>

            <div class="subBarsCategories">
                <p class="subText">Презентация, маркетинг</p>
            </div>

            <div class="subBarsCategories">
                <p class="subText">Презентация, маркетинг</p>
            </div>

            <div class="subBarsCategories">
                <p class="subText">Оформление аккаунта</p>
            </div>

            <div class="subBarsCategories">
                <p class="subText">Другое</p>
            </div>
        </div>`


        function  down() {

            var z = document.getElementsByClassName("subBars");
            var ij;
            for (ij = 0; ij < z.length; ij++) {
                z[ij].style.cssText = "transform: translate(0,50px); transition-duration:1s;";
            }

            var subItem = document.getElementsByClassName("subBarsCategories");
            var jj;
            for (jj = 0; jj < subItem.length; jj++) {
                subItem[jj].style.cssText = "opacity: 1; transition-duration:1s;";
            }

            var subItemText = document.getElementsByClassName("subText");
            var jij;
            for (jij = 0; jij < subItemText.length; jij++) {
                subItemText[jij].style.cssText = "opacity: 1; transition-duration:1s;";
            }

        }

        var x = document.getElementsByClassName("bg");
        var j;
        for (j = 0; j < x.length; j++) {
            x[j].style.cssText = "height: 635px; transition-duration:1s;";
        }

        setTimeout(down, 500);

    }

    setTimeout(droper, 1000);

}