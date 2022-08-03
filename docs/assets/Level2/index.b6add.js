window.__require=function t(n,e,i){function o(a,r){if(!e[a]){if(!n[a]){var s=a.split("/");if(s=s[s.length-1],!n[s]){var p="function"==typeof __require&&__require;if(!r&&p)return p(s,!0);if(l)return l(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var c=e[a]={exports:{}};n[a][0].call(c.exports,function(t){return o(n[a][1][t]||t)},c,c.exports,t,n,e,i)}return e[a].exports}for(var l="function"==typeof __require&&__require,a=0;a<i.length;a++)o(i[a]);return o}({Level2:[function(t,n,e){"use strict";cc._RF.push(n,"b4f78d8sUhDiLM5Fg1lalZi","Level2");var i,o=this&&this.__extends||(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),l=this&&this.__decorate||function(t,n,e,i){var o,l=arguments.length,a=l<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(l<3?o(a):l>3?o(n,e,a):o(n,e))||a);return l>3&&a&&Object.defineProperty(n,e,a),a};Object.defineProperty(e,"__esModule",{value:!0});var a,r=t("../../../Scripts/LevelBase"),s=cc._decorator,p=s.ccclass;s.property,function(t){t[t.BARK=0]="BARK",t[t.BARK_RUN=1]="BARK_RUN",t[t.GROWL=2]="GROWL",t[t.THROW=3]="THROW",t[t.WHISLE=4]="WHISLE",t[t.ALERT=5]="ALERT"}(a||(a={}));var c=cc.tween,u=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),n.prototype.onLoad=function(){t.prototype.onLoad.call(this)},n.prototype.onEnable=function(){t.prototype.onEnable.call(this),this._gameManager._levelCurrent.level=this.levelCurrent,this._gameManager._beginScene=this.node},n.prototype.initStage=function(){var n=this;t.prototype.initStage.call(this),t.prototype.setLupin.call(this,cc.v2(-240,-510),"emotion/idle","general/stand_thinking"),t.prototype.setOtherSpine.call(this,this.otherSpine[1],cc.v2(700,-550),"run",null),t.prototype.setOtherSpine.call(this,this.otherSpine[0],cc.v2(750,-510),null,null),this.background.position=cc.v3(540,-30),this.lupin.node.active=!0,this.otherSpine[0].node.active=!0,this.otherSpine[1].node.active=!0,this.playSound(a.GROWL,!1,2),c(this.otherSpine[1].node).to(2.5,{position:cc.v3(270,-510)}).call(function(){n.lupin.setAnimation(0,"emotion/idle",!0),n.lupin.setAnimation(1,"emotion/worry",!0),n.otherSpine[1].setAnimation(0,"stand_angry",!0),n.showOptionContainer(!0)}).start(),this.showOptionContainer(!1)},n.prototype.runOption1=function(){var t=this;this.lupin.setMix("level_2/lv2_stg1_bone","emotion/idle",.3),c(this.node).delay(1).call(function(){t.lupin.setAnimation(0,"level_2/lv2_stg1_bone",!1),t.lupin.setAnimation(1,"emotion/sinister",!0),t.playSound(a.THROW,!1,2.8),t.lupin.setCompleteListener(function(n){"level_2/lv2_stg1_bone"==n.animation.name&&(t.otherSpine[1].setAnimation(0,"run_1",!0),t.playSound(a.BARK_RUN,!1,0),t.playSound(a.BARK_RUN,!1,1),t.playSound(a.WHISLE,!1,2),t.lupin.addAnimation(0,"emotion/idle",!0),c(t.lupin).delay(2).call(function(){t.lupin.setAnimation(1,"emotion/whistle",!0)}).start(),c(t.otherSpine[1].node).to(1.5,{position:cc.v3(-750,-550)}).start(),c(t.node).call(function(){}).delay(5).call(function(){t.lupin.setAnimation(0,"general/walk",!0),c(t.background).to(4,{position:cc.v3(-525,-30)}).start(),c(t.lupin.node).to(4,{position:cc.v3(70,-510)}).call(function(){t.lupin.setAnimation(0,"general/walk_upstairs",!0)}).by(1,{position:cc.v3(100,75)}).call(function(){t.showSuccess(t.selected)}).by(1,{position:cc.v3(100,75)}).start()}).start())})}).start()},n.prototype.runOption2=function(){var t=this;c(this.node).delay(1).call(function(){t.lupin.setAnimation(0,"level_2/lv2_stg1_meat",!1),t.lupin.setAnimation(1,"emotion/fear_1",!0),t.playSound(a.THROW,!1,1.3),t.lupin.setCompleteListener(function(n){"level_2/lv2_stg1_meat"==n.animation.name&&(t.playSound(a.GROWL,!1,0),t.lupin.setAnimation(0,"general/stand_nervous",!0),t.lupin.setAnimation(1,"emotion/excited",!0),t.otherSpine[1].setAnimation(0,"catch_eat",!1))}),t.otherSpine[1].setCompleteListener(function(n){"catch_eat"==n.animation.name&&(t.lupin.setAnimation(1,"emotion/fear_2",!1),t.lupin.setAnimation(0,"general/walk",!1),t.otherSpine[1].setAnimation(0,"stand_angry",!0),c(t.lupin.node).by(.1,{position:cc.v3(-40,0)}).call(function(){t.lupin.setAnimation(0,"general/stand_nervous",!0)}).delay(1).call(function(){t.showFail(t.selected)}).start())})}).start()},n.prototype.runOption3=function(){var t=this;c(this.node).delay(1).call(function(){t.playSound(a.THROW,!1,2.5),t.lupin.setAnimation(0,"level_2/lv2_stg1_potato",!1),t.lupin.setCompleteListener(function(n){"level_2/lv2_stg1_potato"==n.animation.name&&(t.playSound(a.BARK,!1,.3),t.playSound(a.BARK,!1,1.3),t.lupin.setAnimation(1,"emotion/fear_2",!0),t.lupin.setAnimation(0,"general/stand_nervous",!0),t.otherSpine[1].setAnimation(0,"shout",!0),t.playSound(a.ALERT,!1,2.3),c(t.otherSpine[0].node).delay(2).call(function(){t.otherSpine[0].setAnimation(0,"police/general/run",!0),c(t.otherSpine[0].node).to(1,{position:cc.v3(385,-510)}).call(function(){t.otherSpine[0].setAnimation(0,"police/general/gun_raise",!1),t.otherSpine[0].setCompleteListener(function(n){"police/general/gun_raise"==n.animation.name&&t.showFail(t.selected)})}).start()}).start())})}).start()},l([p],n)}(r.default);e.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}]},{},["Level2"]);