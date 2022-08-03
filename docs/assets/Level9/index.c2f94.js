window.__require=function e(t,n,i){function o(r,c){if(!n[r]){if(!t[r]){var l=r.split("/");if(l=l[l.length-1],!t[l]){var p="function"==typeof __require&&__require;if(!c&&p)return p(l,!0);if(a)return a(l,!0);throw new Error("Cannot find module '"+r+"'")}r=l}var s=n[r]={exports:{}};t[r][0].call(s.exports,function(e){return o(t[r][1][e]||e)},s,s.exports,e,t,n,i)}return n[r].exports}for(var a="function"==typeof __require&&__require,r=0;r<i.length;r++)o(i[r]);return o}({Level9_1:[function(e,t,n){"use strict";cc._RF.push(t,"976d8Le+5BCjZOIFNqNP+aF","Level9_1");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};Object.defineProperty(n,"__esModule",{value:!0});var r,c=e("../../../Scripts/LevelBase"),l=cc._decorator,p=l.ccclass,s=(l.property,cc.tween);(function(e){e[e.SWOOSH=0]="SWOOSH",e[e.THROW=1]="THROW",e[e.SIGH=2]="SIGH",e[e.TORCH=3]="TORCH",e[e.WORD_BREAK=4]="WORD_BREAK"})(r||(r={}));var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.onEnable=function(){e.prototype.onEnable.call(this),this._gameManager._levelCurrent.level=this.levelCurrent,this._gameManager._beginScene=this.node},t.prototype.initStage=function(){var t=this;e.prototype.initStage.call(this),this._gameManager.mainCamera.active=!1,this.camera2d[0].position=cc.v3(0,0),this.camera2d[0].active=!0,this.camera2d[1].active=!0,this.setLupin(cc.v2(-231,-580),"emotion/sad","general/stand_thinking"),this.lupin.timeScale=1,this.lupin.setCompleteListener(null),this.otherSprite[0].node.position=cc.v3(387,516),this.otherSprite[1].node.active=!0,this.otherSprite[2].node.active=!1,this.otherSprite[3].node.active=!1,s(this.node).delay(2).call(function(){t.showOptionContainer(!0)}).start()},t.prototype.runOption1=function(){var e=this;this.setLupin(cc.v2(this.lupin.node.position),"emotion/excited","general/walk"),s(this.lupin.node).by(3,{position:cc.v3(500)}).call(function(){e.lupin.setAnimation(0,"level_9/door_creep2",!0),e.lupin.clearTrack(1),e.playSound(r.THROW,!1,1),s(e.otherSprite[0].node).delay(1).by(.5,{position:cc.v3(0,-265)}).start()}).by(2,{position:cc.v3(50,280)}).call(function(){e.lupin.setAnimation(1,"emotion/fear_1",!1),e.lupin.timeScale=0}).delay(2).by(0,{position:cc.v3(-50,-280)}).call(function(){e.lupin.timeScale=.5,e.lupin.setAnimation(0,"general/stand_thinking",!0),e.lupin.setAnimation(1,"emotion/fear_2",!1)}).delay(2).call(function(){e.lupin.timeScale=0,e.showFail(e.selected)}).start()},t.prototype.runOption2=function(){var e=this;this.setLupin(cc.v2(this.lupin.node.position),"emotion/excited","general/walk");var t=0;this.lupin.setCompleteListener(function(n){"level_9/weld_tired"===n.animation.name&&3==++t&&(e.lupin.timeScale=0,e.showFail(e.selected))}),s(this.lupin.node).by(2,{position:cc.v3(340,50)}).call(function(){e.playSound(r.TORCH,!1,0),e.setLupin(cc.v2(e.lupin.node.position),"emotion/excited","level_9/weld")}).delay(4).call(function(){e.playSound(r.SIGH,!1,0),e.setLupin(cc.v2(e.lupin.node.position),"emotion/tired","level_9/weld_tired")}).start()},t.prototype.runOption3=function(){var e=this,t=0;this.lupin.setCompleteListener(function(n){"general/kick1"===n.animation.name&&e.setLupin(cc.v2(e.lupin.node.position),"emotion/sinister","general/win_1.1"),"general/win_1.1"===n.animation.name&&2==++t&&e.onPass()}),s(this.lupin.node).delay(1).call(function(){e.setLupin(cc.v2(e.lupin.node.position),"emotion/angry","general/run")}).by(1,{position:cc.v3(370)}).call(function(){e.playSound(r.SWOOSH,!1,.4),e.playSound(r.WORD_BREAK,!1,.7),e.lupin.setAnimation(1,"general/kick1",!1)}).delay(.6).call(function(){e.otherSprite[1].node.active=!1,e.otherSprite[2].node.active=!0,e.otherSprite[3].node.active=!0}).start()},a([p],t)}(c.default);n.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level9_2:[function(e,t,n){"use strict";cc._RF.push(t,"3b0c1rMqexIFYgeekCavJiU","Level9_2");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};Object.defineProperty(n,"__esModule",{value:!0});var r,c=e("../../../Scripts/EffectManager"),l=e("../../../Scripts/LevelBase"),p=cc._decorator,s=p.ccclass,u=(p.property,cc.tween);(function(e){e[e.BLEH_BLEH=0]="BLEH_BLEH",e[e.BANG=1]="BANG",e[e.FIRE=2]="FIRE",e[e.LIGHTER=3]="LIGHTER",e[e.SCREAM=4]="SCREAM",e[e.SPIDER=5]="SPIDER"})(r||(r={}));var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.spidersIndex=[1,2,3,4,5],t.firesIndex=[6,7,8,9,10,11,12],t}return o(t,e),t.prototype.initStage=function(){var t=this;e.prototype.initStage.call(this),this._gameManager.mainCamera.active=!1,this.camera2d[0].position=cc.v3(0,0),this.camera2d[0].active=!0,this.camera2d[1].active=!0,this.setLupin(cc.v2(-379,-510),"emotion/fear_2","general/stand_nervous"),this.lupin.timeScale=1,this.lupin.setCompleteListener(null),this.otherSprite.forEach(function(e){e.node.active=!0}),this.setOtherSpine(this.otherSpine[0],cc.v2(288,-603),"spider_creep_angry",""),this.otherSpine[0].timeScale=1,this.otherSpine[0].node.scaleX=1,this.spidersIndex.forEach(function(e){var n=t.otherSpine[e];n.setAnimation(0,"spider_creep_angry",!0),n.timeScale=1}),this.background.getChildByName("SpiderArmy").position=cc.v3(0,0);for(var n=0,i=this.firesIndex;n<i.length;n++){var o=i[n],a=this.otherSpine[o];a.node.active=!1,a.timeScale=1}u(this.node).delay(2).call(function(){t.showOptionContainer(!0)}).start()},t.prototype.runOption1=function(){var e=this;this.setLupin(cc.v2(this.lupin.node.position),"emotion/excited","general/stand_thinking"),u(this.lupin.node).delay(2).call(function(){e.lupin.clearTrack(1),e.playSound(r.BLEH_BLEH,!1,.2),e.lupin.setAnimation(0,"general/tougue_show",!0)}).delay(1).call(function(){e.otherSpine[0].setAnimation(0,"spider_creep_nervous",!0),u(e.otherSpine[0].node).flipX().by(2.5,{position:cc.v3(400)}).delay(.5).call(function(){e.setLupin(cc.v2(e.lupin.node.position),"emotion/happy_1","general/win_2.1")}).delay(2).call(function(){e.onPass()}).start()}).start()},t.prototype.runOption2=function(){var e=this;c.default.hideScene(function(){e.setLupin(cc.v2(-175,-578),"emotion/excited","general/stand_thinking"),c.default.showScene(),u(e.lupin.node).delay(1).call(function(){e.playSound(r.BANG,!0,0),e.setLupin(cc.v2(e.lupin.node.position),"emotion/angry","general/stick_fight")}).delay(1).call(function(){e.otherSprite[0].node.active=!1,e.otherSprite[1].node.active=!1,e.otherSpine[0].setAnimation(0,"spider_creep_nervous",!0),u(e.otherSpine[0].node).flipX().by(2.5,{position:cc.v3(387)}).delay(1).flipX().call(function(){e.scheduleOnce(function(){cc.audioEngine.stopAllEffects(),e.playSound(r.SPIDER,!1,0),e.playSound(r.SCREAM,!1,2)},1),e.otherSpine[0].setAnimation(0,"spider_creep_angry",!0)}).call(function(){var t=e.background.getChildByName("SpiderArmy");u(t).delay(.8).by(3,{position:cc.v3(-960)}).call(function(){e.lupin.timeScale=0,e.otherSpine[0].timeScale=0,e.spidersIndex.forEach(function(t){e.otherSpine[t].timeScale=0}),e.showContinue()}).start()}).by(2.5,{position:cc.v3(-780)}).start()}).delay(1).call(function(){e.otherSprite[2].node.active=!1}).delay(3.5).call(function(){e.lupin.setAnimation(0,"emotion/fear_2",!0),e.lupin.setAnimation(1,"general/back",!1)}).delay(4).start()},this.node)},t.prototype.runOption3=function(){var e=this;this.lupin.setMix("level_9/fire_burn","general/back",.3),this.setLupin(cc.v2(this.lupin.node.position),"emotion/excited","general/stand_thinking"),u(this.lupin.node).delay(2).call(function(){e.lupin.setAnimation(1,"general/walk",!0)}).by(1,{position:cc.v3(120,-100)}).call(function(){e.playSound(r.LIGHTER,!1,.2),e.playSound(r.FIRE,!1,.5),e.playSound(r.SCREAM,!1,5),e.lupin.setAnimation(1,"level_9/fire_burn",!0)}).delay(1).call(function(){e.firesIndex.forEach(function(t,n){var i=e.otherSpine[t],o=n>4?4:.5*(n+1);u(i.node).delay(o).set({active:!0}).start()})}).delay(4).call(function(){e.setLupin(cc.v2(e.lupin.node.position),"emotion/fear_2","general/back")}).delay(2).call(function(){e.lupin.timeScale=0,e.firesIndex.forEach(function(t){e.otherSpine[t].timeScale=0}),e.showContinue()}).start()},a([s],t)}(l.default);n.default=d,cc._RF.pop()},{"../../../Scripts/EffectManager":void 0,"../../../Scripts/LevelBase":void 0}],Level9_3:[function(e,t,n){"use strict";cc._RF.push(t,"7b46cwN9VpEUoJaKcyXskp4","Level9_3");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};Object.defineProperty(n,"__esModule",{value:!0});var r,c=e("../../../Scripts/EffectManager"),l=e("../../../Scripts/LevelBase"),p=cc._decorator,s=p.ccclass,u=(p.property,cc.tween);(function(e){e[e.DIG=0]="DIG",e[e.FREEZE=1]="FREEZE",e[e.PEEK=2]="PEEK",e[e.PUNCH=3]="PUNCH",e[e.SIGH=4]="SIGH",e[e.WOOD_BREAK=5]="WOOD_BREAK"})(r||(r={}));var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.initStage=function(){var t=this;e.prototype.initStage.call(this),this._gameManager.mainCamera.active=!1,this.camera2d[0].position=cc.v3(0,0),this.camera2d[0].active=!0,this.camera2d[1].active=!0,this.setLupin(cc.v2(-273,-633),"emotion/idle","general/stand_thinking"),this.lupin.timeScale=1,this.lupin.setCompleteListener(null),this.otherSprite[0].node.position=cc.v3(-348,16),this.otherSprite[0].node.angle=0,this.otherSprite[0].node.active=!0,this.otherSprite[1].node.active=!0,this.otherSprite[2].node.active=!1,this.otherSprite[3].node.active=!1,this.background.getChildByName("ManySand").active=!1,this.otherSpine[0].node.active=!1,u(this.node).delay(2).call(function(){t.showOptionContainer(!0)}).start()},t.prototype.runOption1=function(){var e=this;c.default.hideScene(function(){var t=0;e.setLupin(cc.v2(125,-455),"emotion/abc","general/stand_thinking"),e.lupin.setMix("general/hammer_break","level_9/hammer_tired",.3),e.lupin.setCompleteListener(function(n){"general/hammer_break"===n.animation.name&&(5==++t?(e.lupin.setAnimation(0,"level_9/hammer_tired",!1),e.lupin.setAnimation(1,"emotion/tired",!1),e.playSound(r.SIGH,!1,0),u(e.node).delay(2).call(function(){e.showContinue()}).start()):t<5&&e.playSound(r.PUNCH,!1,.7))}),c.default.showScene(),u(e.lupin.node).delay(2).call(function(){e.lupin.setAnimation(0,"general/stand_ready",!0),e.playSound(r.PUNCH,!1,.7),e.lupin.setAnimation(0,"general/hammer_break",!0),e.lupin.setAnimation(1,"emotion/angry",!0)}).start()},this.node)},t.prototype.runOption2=function(){var e=this;c.default.hideScene(function(){e.lupin.setMix("general/stand_thinking","level_9/climb_ladder",.3),e.setLupin(cc.v2(-40,-750),"emotion/happy_1","general/stand_thinking"),e.lupin.setCompleteListener(function(t){"level_9/climb_ladder"===t.animation.name&&(e.otherSprite[0].node.active=!1,e.otherSpine[0].node.active=!0,e.playSound(r.FREEZE,!1,0),e.playSound(r.WOOD_BREAK,!1,1),e.otherSpine[0].setAnimation(0,"level_9/ladder_break",!1),u(e.lupin.node).delay(1).call(function(){e.setLupin(cc.v2(200,-195),"emotion/fear_1","general/fall_high")}).delay(2).call(function(){e.showContinue()}).start())}),e.otherSprite[0].node.position=cc.v3(190,-220),e.otherSprite[0].node.angle=-5,c.default.showScene(),u(e.lupin.node).delay(2).call(function(){e.lupin.setAnimation(0,"emotion/idle",!0),e.lupin.setAnimation(1,"level_9/climb_ladder",!1)}).start()},this.node)},t.prototype.runOption3=function(){var e=this;c.default.hideScene(function(){var t=0;e.setLupin(cc.v2(105,-503),"emotion/abc","general/stand_thinking"),e.lupin.setCompleteListener(function(n){"general/shove_dig"===n.animation.name&&(2==++t?e.otherSprite[2].node.active=!0:4===t&&(e.background.getChildByName("ManySand").active=!0,e.playSound(r.PEEK,!1,0),e.otherSprite[1].node.active=!1,e.otherSprite[2].node.active=!1,e.otherSprite[3].node.active=!0,u(e.lupin.node).by(0,{position:cc.v3(-100)}).delay(.5).call(function(){e.lupin.setAnimation(0,"level_9/surprised_hole",!0),e.lupin.setAnimation(1,"level_9/surprised_hole",!0)}).delay(1).call(function(){e.setLupin(cc.v2(e.lupin.node.position),"general/win_1.1","emotion/laugh")}).delay(.5).call(function(){e.showSuccess(e.selected)}).start()),t<4&&e.playSound(r.DIG,!1,.7))}),c.default.showScene(),u(e.lupin.node).delay(2).call(function(){e.playSound(r.DIG,!1,.7),e.setLupin(cc.v2(e.lupin.node.position),"emotion/angry","general/shove_dig")}).start()},this.node)},a([s],t)}(l.default);n.default=d,cc._RF.pop()},{"../../../Scripts/EffectManager":void 0,"../../../Scripts/LevelBase":void 0}]},{},["Level9_1","Level9_2","Level9_3"]);