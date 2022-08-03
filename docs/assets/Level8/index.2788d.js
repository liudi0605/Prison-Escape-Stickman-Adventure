window.__require=function e(t,n,i){function o(c,r){if(!n[c]){if(!t[c]){var a=c.split("/");if(a=a[a.length-1],!t[a]){var p="function"==typeof __require&&__require;if(!r&&p)return p(a,!0);if(l)return l(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var s=n[c]={exports:{}};t[c][0].call(s.exports,function(e){return o(t[c][1][e]||e)},s,s.exports,e,t,n,i)}return n[c].exports}for(var l="function"==typeof __require&&__require,c=0;c<i.length;c++)o(i[c]);return o}({Level8_1:[function(e,t,n){"use strict";cc._RF.push(t,"d3f7ae9tpZNUKYdcO4FGdMg","Level8_1");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=this&&this.__decorate||function(e,t,n,i){var o,l=arguments.length,c=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(l<3?o(c):l>3?o(t,n,c):o(t,n))||c);return l>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,r=e("../../../Scripts/LevelBase"),a=cc._decorator,p=a.ccclass,s=(a.property,cc.tween);(function(e){e[e.PULL=0]="PULL",e[e.CREAK=1]="CREAK",e[e.LOCK=2]="LOCK",e[e.UNLOCK=3]="UNLOCK",e[e.SAW=4]="SAW",e[e.DOOR_SLIDE=5]="DOOR_SLIDE",e[e.ALERT=6]="ALERT"})(c||(c={}));var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.onEnable=function(){e.prototype.onEnable.call(this),this._gameManager._levelCurrent.level=this.levelCurrent,this._gameManager._beginScene=this.node},t.prototype.onDisable=function(){e.prototype.onDisable.call(this)},t.prototype.initStage=function(){var t=this;e.prototype.initStage.call(this),this.lupin.node.scaleX=1,this.otherSprite[0].node.active=!0,this.otherSprite[1].node.active=!0,this.otherSprite[1].node.position=cc.v3(335,-108),this.otherSprite[2].node.active=!1,this.setLupin(cc.v2(370,-350),"emotion/nervous","general/stand_thinking"),this.setOtherSpine(this.otherSpine[1],cc.v2(-260,-545),"prisoner/level_8/help_ask","prisoner/level_8/help_ask"),this.setOtherSpine(this.otherSpine[0],cc.v2(-800,-350),null,"police/general/run"),this.otherSpine[1].node.scaleX=-1,this.otherSpine[0].node.scaleX=-1,s(this.node).delay(2).call(function(){t.showOptionContainer(!0)}).start()},t.prototype.runOption1=function(){var e=this,t=!0;this.otherSpine[1].setMix("prisoner/level_8/dance","prisoner/level_8/help_ask",.3),s(this.lupin.node).delay(1).call(function(){e.lupin.setAnimation(0,"emotion/excited",!1),e.lupin.setCompleteListener(function(n){if("emotion/excited"==n.animation.name&&t){t=!1;var i=!0;e.otherSprite[1].node.active=!1,e.otherSprite[2].node.active=!0,e.lupin.setAnimation(1,"level_8/bar_break",!1),e.playSound(c.PULL,!1,0),e.playSound(c.CREAK,!1,5),e.otherSpine[1].setAnimation(1,"prisoner/level_8/dance",!0),e.lupin.setCompleteListener(function(t){"level_8/bar_break"==t.animation.name&&i&&(i=!1,e.otherSpine[1].setAnimation(1,"prisoner/level_8/help_ask",!0),s(e.node).delay(1).call(function(){e.showFail(e.selected)}).start())})}})}).start()},t.prototype.runOption2=function(){var e=this,t=!0;this.otherSpine[1].setMix("prisoner/level_8/dance","prisoner/level_8/help_ask",.3),s(this.shadow).delay(1).to(.5,{opacity:255}).call(function(){e.otherSprite[0].node.active=!1,e.lupin.setAnimation(0,"emotion/excited",!1),e.lupin.setCompleteListener(function(n){"emotion/excited"==n.animation.name&&t&&(t=!1,e.playSound(c.LOCK,!1,.5),e.playSound(c.UNLOCK,!1,1.5),e.playSound(c.DOOR_SLIDE,!1,3),e.lupin.node.scaleX=-1,e.lupin.setAnimation(0,"emotion/angry",!0),e.lupin.setAnimation(1,"level_8/lock_open",!0),e.otherSpine[1].setAnimation(1,"prisoner/level_8/dance",!0),s(e.otherSprite[1].node).delay(3).by(1,{position:cc.v3(-520,0)},{easing:"cubicIn"}).call(function(){e.otherSpine[1].setAnimation(0,"prisoner/level_8/dance1",!0),e.otherSpine[1].setAnimation(1,"prisoner/level_8/dance1",!0),e.lupin.setAnimation(0,"emotion/excited",!1),e.lupin.setAnimation(1,"general/win_2.1",!0)}).delay(2).call(function(){e.onPass()}).start())})}).to(.5,{opacity:0}).start()},t.prototype.runOption3=function(){var e=this,t=!0;this.otherSpine[1].setMix("prisoner/level_8/dance","prisoner/level_8/help_ask",.3),s(this.lupin.node).delay(1).call(function(){e.lupin.setAnimation(0,"emotion/excited",!1),e.lupin.setCompleteListener(function(n){"emotion/excited"==n.animation.name&&t&&(t=!1,e.lupin.timeScale=1.5,e.playSound(c.SAW,!1,.3),e.playSound(c.ALERT,!1,2),e.lupin.setAnimation(1,"level_8/saw_doing",!0),e.otherSpine[1].setAnimation(1,"prisoner/level_8/dance",!0),s(e.otherSpine[0].node).by(2,{position:cc.v3(600,0)}).call(function(){e.otherSpine[0].setAnimation(0,"police/general/gun_raise",!1),e.otherSpine[0].setAnimation(1,"police/general/gun_raise",!1)}).delay(.5).call(function(){cc.audioEngine.stopAllEffects(),e.lupin.node.scaleX=-1,e.lupin.setAnimation(0,"emotion/fear_2",!1),e.lupin.setAnimation(1,"general/back",!1),e.otherSpine[1].setAnimation(1,"prisoner/level_8/help_ask",!0)}).delay(1).call(function(){e.showFail(e.selected)}).start())})}).start()},l([p],t)}(r.default);n.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level8_2:[function(e,t,n){"use strict";cc._RF.push(t,"ed936gsCyZHTpOXT+1LyPc8","Level8_2");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=this&&this.__decorate||function(e,t,n,i){var o,l=arguments.length,c=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(l<3?o(c):l>3?o(t,n,c):o(t,n))||c);return l>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,r=e("../../../Scripts/LevelBase"),a=cc._decorator,p=a.ccclass,s=(a.property,cc.tween);(function(e){e[e.THROW=0]="THROW",e[e.KNIFE=1]="KNIFE",e[e.TIPTOE=2]="TIPTOE",e[e.KICK=3]="KICK",e[e.HIT=4]="HIT",e[e.SPIN=5]="SPIN",e[e.SWOOSH=6]="SWOOSH",e[e.HEYA=7]="HEYA",e[e.SCREAM=8]="SCREAM"})(c||(c={}));var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.onEnable=function(){e.prototype.onEnable.call(this)},t.prototype.initStage=function(){var t=this;e.prototype.initStage.call(this),s(this.node).delay(2).call(function(){t.showOptionContainer(!0)}).start(),this.background.position=cc.v3(0,0),this.lupin.node.position=cc.v3(250,-625),this.lupin.node.scale=.9,this.lupin.node.zIndex=cc.macro.MAX_ZINDEX,this.otherSprite[1].node.zIndex=cc.macro.MAX_ZINDEX-1,this.otherSprite[0].node.position=cc.v3(140,-545),this.otherSprite[0].node.active=!1,this.otherSprite[0].node.scaleX=.2,this.otherSprite[0].node.angle=-20,this.otherSprite[2].node.position=cc.v3(-155,0),this.otherSprite[2].node.scale=1,this.lupin.setAnimation(1,"emotion/sinister",!0),this.lupin.setAnimation(0,"level_8/hide_after_cabinet",!0),this.setOtherSpine(this.otherSpine[0],cc.v2(-250,-55),null,"police/level_8/sit_decorate")},t.prototype.runOption1=function(){var e=this;this.otherSpine[0].setMix("police/level_8/sit_decorate","police/level_8/sit_surprised",.3),this.otherSpine[0].setMix("police/level_8/sit_surprised","police/level_8/nervous",.3),s(this.shadow).to(.5,{opacity:255}).call(function(){e.otherSprite[0].node.active=!1,e.otherSprite[2].node.scale=1.2,e.otherSprite[2].node.position=cc.v3(-200,-80),e.otherSpine[0].node.position=cc.v3(-280,-135),e.otherSpine[0].node.scaleX=-.8,e.otherSpine[0].node.scaleY=.8,e.lupin.clearTrack(1),e.lupin.setAnimation(0,"level_8/cockroach_throw",!1),e.lupin.setAnimation(1,"emotion/sinister",!0)}).to(.5,{opacity:0}).delay(1).call(function(){e.otherSprite[0].node.active=!0,e.playSound(c.THROW,!1,0),s(e.otherSprite[0].node).bezierTo(.8,cc.v2(80,-515),cc.v2(80,0),cc.v2(-20,-300)).call(function(){e.playSound(c.TIPTOE,!1,1),e.lupin.setAnimation(1,"emotion/excited",!0)}).delay(.5).to(.5,{angle:60}).to(2,{position:cc.v3(-10,-120)}).to(.2,{angle:90}).to(1,{position:cc.v3(-36,-50)}).call(function(){cc.audioEngine.stopAllEffects(),e.playSound(c.SCREAM,!1,0),e.otherSprite[0].node.angle=25,e.otherSprite[0].node.scaleX=-.2,e.otherSpine[0].setAnimation(1,"police/level_8/sit_surprised",!1),e.otherSpine[0].addAnimation(1,"police/level_8/nervous",!1),e.otherSpine[0].setCompleteListener(function(t){"police/level_8/nervous"==t.animation.name&&(e.lupin.node.scaleX=-.9,e.lupin.setAnimation(0,"general/win_2.1",!0),e.lupin.setAnimation(1,"emotion/sinister",!0),s(e.node).delay(2).call(function(){e.onPass()}).start())})}).by(1,{position:cc.v3(-100,0)}).start()}).start()},t.prototype.runOption2=function(){var e=this,t=!0;this.otherSpine[0].setMix("police/level_8/sit_decorate","police/level_8/sit_surprised",.3),this.otherSpine[0].setMix("police/level_8/sit_surprised","police/level_8/sit_nervous",.5),s(this.shadow).to(.5,{opacity:255}).call(function(){e.otherSprite[2].node.scale=1.2,e.otherSprite[2].node.position=cc.v3(-200,-80),e.lupin.node.zIndex=cc.macro.MAX_ZINDEX-1,e.otherSprite[1].node.zIndex=cc.macro.MAX_ZINDEX,e.otherSpine[0].node.zIndex=cc.macro.MAX_ZINDEX,e.otherSpine[0].node.position=cc.v3(-280,-135),e.otherSpine[0].node.scaleX=-.8,e.otherSpine[0].node.scaleY=.8,e.lupin.node.position=cc.v3(30,-525),e.lupin.clearTrack(1),e.lupin.setAnimation(0,"level_8/approach_cabinet",!0),e.playSound(c.TIPTOE,!1,0),s(e.lupin.node).parallel(s().to(5,{scaleX:.8}),s().to(5,{scaleY:.8}),s().by(5,{position:cc.v3(-40,325)})).call(function(){cc.audioEngine.stopAllEffects(),e.playSound(c.SWOOSH,!1,0),e.playSound(c.SPIN,!1,2),e.scheduleOnce(function(){cc.audioEngine.stopAllEffects(),e.playSound(c.HIT,!1,0)},6),e.lupin.timeScale=1.5,e.lupin.setAnimation(0,"level_8/nunchaku_",!1),e.lupin.addAnimation(0,"general/nunchaku2",!0),e.lupin.node.scaleX=-.8,e.otherSpine[0].setAnimation(1,"police/level_8/sit_surprised",!1),e.lupin.setStartListener(function(t){"general/nunchaku2"==t.animation.name&&e.otherSpine[0].setAnimation(1,"police/level_8/sit_nervous",!1)}),e.lupin.setCompleteListener(function(n){"general/nunchaku2"==n.animation.name&&t&&(t=!1,s(e.lupin.node).delay(3).call(function(){e.lupin.setAnimation(0,"level_8/nunchaku3",!1),e.otherSpine[0].setAnimation(1,"police/level_8/sit_decorate",!1)}).delay(2).call(function(){e.showContinue()}).start())})}).start()}).to(.5,{opacity:0}).start()},t.prototype.runOption3=function(){var e=this;this.otherSpine[0].setMix("police/level_8/sit_decorate","police/level_8/sit_surprised",.3),this.otherSpine[0].setMix("police/level_8/sit_surprised","police/level_8/sit_kick2",.3),s(this.shadow).to(.5,{opacity:255}).call(function(){e.otherSprite[2].node.scale=1.2,e.otherSprite[2].node.position=cc.v3(-200,-80),e.lupin.node.zIndex=cc.macro.MAX_ZINDEX-1,e.otherSprite[1].node.zIndex=cc.macro.MAX_ZINDEX,e.otherSpine[0].node.zIndex=cc.macro.MAX_ZINDEX,e.otherSpine[0].node.position=cc.v3(-280,-135),e.otherSpine[0].node.scaleX=-.8,e.otherSpine[0].node.scaleY=.8,e.lupin.node.position=cc.v3(50,-525),e.lupin.clearTrack(1),e.lupin.setAnimation(0,"level_8/approach_cabinet",!0),e.playSound(c.TIPTOE,!1,0),s(e.lupin.node).parallel(s().to(5,{scaleX:.82}),s().to(5,{scaleY:.82}),s().by(5,{position:cc.v3(0,325)})).call(function(){cc.audioEngine.stopAllEffects(),e.playSound(c.KNIFE,!1,0),e.playSound(c.HEYA,!1,.5),e.lupin.setAnimation(0,"general/knife_attach",!1),e.lupin.node.scaleX=-.82,e.otherSpine[0].setAnimation(1,"police/level_8/sit_surprised",!1)}).delay(1).call(function(){e.scheduleOnce(function(){cc.audioEngine.stopAllEffects(),e.playSound(c.KICK,!1,0)},.5),e.otherSpine[0].node.position=cc.v3(-280,-185),e.otherSpine[0].setAnimation(1,"police/level_8/sit_kick2",!1),s(e.lupin.node).delay(.6).call(function(){e.lupin.setAnimation(0,"general/back",!1),e.lupin.setAnimation(1,"emotion/fear_1",!1)}).delay(2).call(function(){e.showContinue()}).start()}).start()}).to(.5,{opacity:0}).start()},l([p],t)}(r.default);n.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level8_3:[function(e,t,n){"use strict";cc._RF.push(t,"b932ccOqZdKlrwf0k3Uy/7u","Level8_3");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=this&&this.__decorate||function(e,t,n,i){var o,l=arguments.length,c=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(l<3?o(c):l>3?o(t,n,c):o(t,n))||c);return l>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,r=e("../../../Scripts/LevelBase"),a=cc._decorator,p=a.ccclass,s=(a.property,cc.tween);(function(e){e[e.BEEP=0]="BEEP",e[e.ALARM=1]="ALARM",e[e.BUZZ_ERROR=2]="BUZZ_ERROR",e[e.CELL_DROP=3]="CELL_DROP",e[e.DOOR_SLIDE=4]="DOOR_SLIDE",e[e.ALERT=5]="ALERT"})(c||(c={}));var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.initStage=function(){e.prototype.initStage.call(this),this.setStatus(),this.setAction(),this.lupin.setMix("general/walk_slow","general/stand_thinking",.3),this.otherSpine[0].setMix("police/level_8/sleeping","police/general/gun_raise",.1)},t.prototype.setStatus=function(){this.background.position=cc.v3(540.5,0),this.camera2d[0].position=cc.v3(0,0),this.otherSprite[0].node.active=!0,this.otherSprite[1].node.active=!0,this.otherSprite[2].node.active=!0,this.otherSprite[3].node.position=cc.v3(845,-145),this.otherSprite[4].node.opacity=0,this.otherSprite[5].node.position=cc.v3(820,1500),this.otherSpine[0].node.zIndex=100,this.otherSprite[6].node.zIndex=99,this.otherSprite[3].node.position=cc.v3(845,-145),this.lupin.node.scaleX=1,this.setLupin(cc.v2(-750,-650),"general/walk_slow","emotion/fear_1"),this.otherSpine[0].node.scaleX=1,this.otherSpine[0].setAnimation(0,"police/level_8/sleeping",!0)},t.prototype.setAction=function(){var e=this;s(this.lupin.node).by(3,{position:cc.v3(350,0)}).call(function(){e.lupin.setAnimation(0,"general/stand_thinking",!1),e.lupin.setAnimation(1,"emotion/excited",!0)}).start(),s(this.camera2d[0]).by(2,{position:cc.v3(390,0)}).delay(2).by(1.5,{position:cc.v3(500,0)}).by(1.5,{position:cc.v3(-500,0)}).call(function(){s(e.node).delay(2).call(function(){e.showOptionContainer(!0)}).start()}).start()},t.prototype.runOption1=function(){var e=this;s(this.shadow).to(.5,{opacity:255}).call(function(){e.camera2d[0].position=cc.v3(1e3,0),e.lupin.node.position=cc.v3(800,-500),e.otherSprite[1].node.active=!1,e.lupin.clearTrack(1),e.playSound(c.BUZZ_ERROR,!1,1),e.lupin.setAnimation(0,"level_8/card_scan_red",!1),e.lupin.timeScale=.8,e.lupin.setCompleteListener(function(t){"level_8/card_scan_red"==t.animation.name&&(e.lupin.setCompleteListener(null),e.lupin.timeScale=1,e.lupin.node.scaleX=-1,e.playSound(c.CELL_DROP,!1,.5),s(e.otherSprite[5].node).delay(.2).by(1,{position:cc.v3(0,-1760)},{easing:"cubicIn"}).call(function(){e.playSound(c.ALERT,!1,0),e.otherSpine[0].node.scaleX=-1,e.otherSpine[0].setAnimation(0,"police/general/gun_raise",!0),e.otherSpine[0].node.zIndex=100,e.otherSprite[6].node.zIndex=101,e.lupin.node.scaleX=-1,e.lupin.setAnimation(0,"general/back",!1),e.lupin.setAnimation(1,"emotion/fear_1",!1),s(e.node).delay(1).call(function(){e.showContinue()}).start()}).start())})}).to(.5,{opacity:0}).start()},t.prototype.runOption2=function(){var e=this;s(this.shadow).to(.5,{opacity:255}).call(function(){e.camera2d[0].position=cc.v3(1e3,0),e.lupin.node.position=cc.v3(800,-500),e.otherSprite[2].node.active=!1,e.lupin.clearTrack(1),e.lupin.timeScale=.8,e.lupin.setAnimation(0,"level_8/card_scan_yellow",!1),e.playSound(c.BEEP,!1,1),e.lupin.setCompleteListener(function(t){"level_8/card_scan_yellow"==t.animation.name&&(e.lupin.setCompleteListener(null),e.lupin.timeScale=1,e.playSound(c.DOOR_SLIDE,!1,0),s(e.otherSprite[3].node).by(1,{position:cc.v3(350,0)}).call(function(){e.lupin.node.scaleX=-1,e.lupin.setAnimation(1,"emotion/whistle",!0),e.lupin.setAnimation(0,"emotion/whistle",!0),s(e.node).delay(1.5).call(function(){e.lupin.node.scaleX=1,e.lupin.setAnimation(0,"general/run",!0),s(e.lupin.node).by(1,{position:cc.v3(500,0)}).start(),s(e.node).delay(1).call(function(){e.showSuccess(e.selected)}).start()}).start()}).start())})}).to(.5,{opacity:0}).start()},t.prototype.runOption3=function(){var e=this;s(this.shadow).to(.5,{opacity:255}).call(function(){e.camera2d[0].position=cc.v3(1e3,0),e.lupin.node.position=cc.v3(800,-500),e.otherSprite[0].node.active=!1,e.lupin.clearTrack(1),e.playSound(c.BUZZ_ERROR,!1,1),e.lupin.timeScale=.8,e.lupin.setAnimation(0,"level_8/card_scan_green",!1),e.lupin.setCompleteListener(function(t){"level_8/card_scan_green"==t.animation.name&&(e.lupin.setCompleteListener(null),e.lupin.timeScale=1,s(e.node).call(function(){e.otherSprite[4].node.opacity=150,e.playSound(c.ALARM,!1,0),e.otherSprite[4].node.getChildByName("bg_alarm").x=-cc.view.getVisibleSize().width,s(e.otherSprite[4].node).call(function(){e.otherSpine[0].node.scaleX=-1,s(e.otherSpine[0]).delay(1).call(function(){e.playSound(c.ALERT,!1,0),e.otherSpine[0].setAnimation(0,"police/general/gun_raise",!0)}).start(),e.otherSpine[0].node.zIndex=100,e.otherSprite[6].node.zIndex=101,e.lupin.node.scaleX=-1,e.lupin.setAnimation(0,"general/back",!1),e.lupin.setAnimation(1,"emotion/fear_1",!0),s(e.node).delay(3).call(function(){e.showContinue()}).start()}).repeat(4,s().to(.5,{opacity:255},{easing:"cubicOut"}).to(.5,{opacity:50},{easing:"cubicIn"})).start()}).start())})}).to(.5,{opacity:0}).start()},l([p],t)}(r.default);n.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}]},{},["Level8_1","Level8_2","Level8_3"]);