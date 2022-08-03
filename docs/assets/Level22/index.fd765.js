window.__require=function e(t,n,i){function o(l,r){if(!n[l]){if(!t[l]){var s=l.split("/");if(s=s[s.length-1],!t[s]){var a="function"==typeof __require&&__require;if(!r&&a)return a(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+l+"'")}l=s}var p=n[l]={exports:{}};t[l][0].call(p.exports,function(e){return o(t[l][1][e]||e)},p,p.exports,e,t,n,i)}return n[l].exports}for(var c="function"==typeof __require&&__require,l=0;l<i.length;l++)o(i[l]);return o}({Level22_1:[function(e,t,n){"use strict";cc._RF.push(t,"c6199aMmjtAbqz+MSl4iHQL","Level22_1");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=this&&this.__decorate||function(e,t,n,i){var o,c=arguments.length,l=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(c<3?o(l):c>3?o(t,n,l):o(t,n))||l);return c>3&&l&&Object.defineProperty(t,n,l),l};Object.defineProperty(n,"__esModule",{value:!0});var l=e("../../../Scripts/LevelBase"),r=cc._decorator,s=r.ccclass,a=(r.property,cc.tween),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.onEnable=function(){e.prototype.onEnable.call(this),this._gameManager._levelCurrent.level=this.levelCurrent,this._gameManager._beginScene=this.node},t.prototype.initStage=function(){e.prototype.initStage.call(this),this.setStatus(),this.setAction()},t.prototype.setStatus=function(){this.lupin.setToSetupPose(),this.lupin.clearTracks(),this.lupin.node.active=!0,this.setLupin(cc.v2(-910,-650),"level_22_1/mc_walking_cold",null),this.lupin.setCompleteListener(null),this.background.position=cc.v3(538,0),this.otherSpine[0].setAnimation(0,"bear_male/bear_idle",!0),this.otherSpine[0].node.position=cc.v3(-872,-340),this.otherSpine[0].setCompleteListener(null),this.otherSpine[1].node.active=!1,this.otherSpine[1].setCompleteListener(null),this.otherSpine[2].node.active=!1,this.otherSprite[0].node.scale=.8,this.otherSprite[0].node.position=cc.v3(626,960)},t.prototype.setAction=function(){var e=this;a(this.lupin.node).to(4,{position:cc.v3(-69,-650)}).call(function(){e.setLupin(cc.v2(e.lupin.node.position),"general/stand_nervous","emotion/fear_1")}).delay(1).call(function(){e.showOptionContainer(!0)}).start(),a(this.background).to(4,{position:cc.v3(-290,0)}).start()},t.prototype.runOption1=function(){var e=this;this.scheduleOnce(function(){e.lupin.clearTracks(),e.lupin.setToSetupPose(),e.lupin.setAnimation(0,"level_22_1/mc_werewolf_1",!1)},1),this.lupin.setCompleteListener(function(t){"level_22_1/mc_werewolf_1"===t.animation.name&&(e.lupin.setAnimation(0,"level_22_1/mc_werewolf_idle",!0),e.scheduleOnce(function(){e.lupin.setAnimation(0,"level_22_1/mc_werewolf_attack",!1),e.scheduleOnce(function(){a(e.otherSpine[0].node).to(.3,{position:cc.v3(-1040,-542)}).start(),a(e.lupin.node).to(.3,{position:cc.v3(198,-555)}).call(function(){e.otherSpine[2].node.active=!0}).delay(2).call(function(){e.otherSpine[2].node.active=!1,e.lupin.setAnimation(0,"level_22_1/mc_werewolf_die",!1),e.otherSpine[0].setAnimation(0,"bear_male/bear_die",!1)}).delay(2).call(function(){e.showFail(e.selected)}).start()},1.5),e.scheduleOnce(function(){e.otherSpine[0].setAnimation(0,"bear_male/bear_attack",!1)},1)},2))}),a(this.otherSprite[0].node).to(3,{position:cc.v3(264,844),scale:1.5}).start()},t.prototype.runOption2=function(){var e=this;this.lupin.setCompleteListener(function(t){"fx/explosion"===t.animation.name&&(e.lupin.setCompleteListener(null),e.lupin.node.active=!1,e.otherSpine[1].node.active=!0,e.otherSpine[1].setAnimation(0,"bear_female/f_bear_idle",!0),e.scheduleOnce(function(){e.otherSpine[1].setAnimation(0,"bear_female/f_bear_charm",!1)},1))}),this.otherSpine[0].setCompleteListener(function(t){"bear_male/bear_suprise"===t.animation.name&&(e.otherSpine[0].setCompleteListener(null),e.otherSpine[0].setAnimation(0,"bear_male/bear_waving_flag",!1),e.scheduleOnce(function(){e.showFail(e.selected)},2))}),this.otherSpine[1].setCompleteListener(function(t){"bear_female/f_bear_charm"===t.animation.name&&(e.otherSpine[1].setCompleteListener(null),e.otherSpine[0].setAnimation(0,"bear_male/bear_suprise",!1),e.otherSpine[1].setAnimation(0,"bear_female/f_bear_idle",!0))}),this.scheduleOnce(function(){e.lupin.clearTracks(),e.lupin.findSlot("head_status").attachment=null,e.lupin.setAnimation(0,"fx/explosion",!1)},1)},t.prototype.runOption3=function(){var e=this;this.lupin.clearTrack(1),this.lupin.setMix("general/stand_nervous","level_22_1/mc_walk_vodkar",.3),this.lupin.setAnimation(0,"level_22_1/mc_walk_vodkar",!0),this.otherSpine[0].setCompleteListener(function(t){"bear_male/bear_drink"===t.animation.name&&a(e.lupin.node).delay(1).call(function(){e.lupin.setAnimation(1,"emotion/whistle",!0)}).delay(2).call(function(){e.lupin.setAnimation(0,"general/walk",!0)}).to(2,{position:cc.v3(982,-266)}).call(function(){e.onPass()}).start()}),a(this.lupin.node).to(2,{position:cc.v3(283,-364)}).call(function(){e.lupin.setAnimation(0,"level_22_1/mc_give_vodkar",!1)}).delay(.2).call(function(){e.otherSpine[0].setAnimation(0,"bear_male/bear_drink",!1),e.lupin.timeScale=0}).delay(.2).call(function(){e.lupin.timeScale=1,e.setLupin(cc.v2(e.lupin.node.position),"general/stand_nervous","emotion/fear_1")}).start()},c([s],t)}(l.default);n.default=p,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level22_2:[function(e,t,n){"use strict";cc._RF.push(t,"267a9DAerFEpK7Bln8xr60X","Level22_2");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=this&&this.__decorate||function(e,t,n,i){var o,c=arguments.length,l=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(c<3?o(l):c>3?o(t,n,l):o(t,n))||l);return c>3&&l&&Object.defineProperty(t,n,l),l};Object.defineProperty(n,"__esModule",{value:!0});var l=e("../../../Scripts/EffectManager"),r=e("../../../Scripts/LevelBase"),s=cc._decorator,a=s.ccclass,p=(s.property,cc.tween),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.initStage=function(){e.prototype.initStage.call(this),this.setStatus(),this.setAction()},t.prototype.setStatus=function(){this.setLupin(cc.v2(-919,-285),"general/walk","emotion/happy_1"),this.lupin.setCompleteListener(null),this.lupin.node.scale=1,this.lupin.timeScale=1,this.background.position=cc.v3(542,0),this.otherSpine[0].setAnimation(0,"chim_bay",!0),this.otherSpine[0].node.position=cc.v3(-44,-21),this.otherSpine[0].node.active=!1,this.otherSprite[0].node.position=cc.v3(305,617),this.otherSprite[0].node.angle=0,this.otherSprite[1].node.position=cc.v3(799,413),this.otherSprite[1].node.angle=0,this.otherSprite[2].node.active=!1},t.prototype.setAction=function(){var e=this;cc.Tween.stopAllByTag(201);var t=p().to(.1,{angle:.5}).to(.2,{angle:-.5});t.clone(this.otherSprite[0].node).tag(201).repeatForever().start(),t.clone(this.otherSprite[1].node).tag(201).repeatForever().start(),p(this.lupin.node).to(3,{position:cc.v3(-239,-285)}).call(function(){e.setLupin(cc.v2(e.lupin.node.position),"general/stand_thinking","emotion/thinking")}).start(),p(this.background).to(3,{position:cc.v3(-74,0)}).to(1,{position:cc.v3(-534,0)},{easing:"cubicOut"}).delay(2).to(1,{position:cc.v3(-74,0)},{easing:"cubicIn"}).delay(1).call(function(){e.showOptionContainer(!0)}).start()},t.prototype.runOption1=function(){var e=this;this.lupin.setAnimation(1,"emotion/idle",!0),this.lupin.setCompleteListener(function(t){"level_22_2/mc_woodpecker"===t.animation.name&&(e.setLupin(cc.v2(e.lupin.node.position),"general/stand_nervous","emotion/excited"),e.otherSpine[0].node.active=!0,p(e.otherSpine[0].node).delay(1).to(3,{position:cc.v3(472,542)}).call(function(){e.otherSpine[0].setAnimation(0,"chim_go_kien",!0)}).delay(2).call(function(){cc.Tween.stopAllByTag(201),e.otherSpine[0].setAnimation(0,"chim_bay",!0),p(e.otherSprite[0].node).to(.2,{angle:-42,position:cc.v3(327,435)}).to(.3,{angle:-62,position:cc.v3(367,135)}).start(),p(e.otherSprite[1].node).to(.2,{angle:72,position:cc.v3(686,217)}).call(function(){e.lupin.setAnimation(0,"general/win_1.1",!0)}).to(.3,{angle:95,position:cc.v3(730,-54)}).call(function(){e.onPass()}).start()}).start())}),this.scheduleOnce(function(){e.lupin.setAnimation(0,"level_22_2/mc_woodpecker",!1)})},t.prototype.runOption2=function(){var e=this;this.lupin.setAnimation(1,"emotion/idle",!0),this.lupin.clearTracks(),this.lupin.setCompleteListener(function(t){"level_22_2/mc_throw_rope"===t.animation.name&&(cc.Tween.stopAllByTag(201),e.showContinue())}),this.scheduleOnce(function(){e.lupin.setAnimation(0,"level_22_2/mc_throw_rope",!1)},1)},t.prototype.runOption3=function(){var e=this;this.lupin.setCompleteListener(function(t){"level_1/concrete_drilling"===t.animation.name&&e.lupin.setAnimation(0,"level_1/concrete_drilling2",!1),"level_1/concrete_drilling2"===t.animation.name&&(e.lupin.setCompleteListener(null),l.default.hideScene(function(){e.otherSprite[2].node.active=!0,e.lupin.setAnimation(0,"level_1/concrete_drilling",!1),e.lupin.node.scale=.1,e.lupin.timeScale=0,e.lupin.node.position=cc.v3(61,1160),l.default.showScene(),p(e.lupin.node).to(4,{position:cc.v3(61,-488)}).call(function(){e.showContinue()}).start()},e.node))}),this.scheduleOnce(function(){e.lupin.setAnimation(0,"level_1/concrete_drilling",!1),e.lupin.setAnimation(1,"emotion/sinister",!0)},1)},c([a],t)}(r.default);n.default=u,cc._RF.pop()},{"../../../Scripts/EffectManager":void 0,"../../../Scripts/LevelBase":void 0}],Level22_3:[function(e,t,n){"use strict";cc._RF.push(t,"ec34dbXVeZP65yDeBP8HOrH","Level22_3");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=this&&this.__decorate||function(e,t,n,i){var o,c=arguments.length,l=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(c<3?o(l):c>3?o(t,n,l):o(t,n))||l);return c>3&&l&&Object.defineProperty(t,n,l),l};Object.defineProperty(n,"__esModule",{value:!0});var l=e("../../../Scripts/LevelBase"),r=cc._decorator,s=r.ccclass,a=(r.property,cc.tween),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.initStage=function(){e.prototype.initStage.call(this),this.setStatus(),this.setAction()},t.prototype.setStatus=function(){this.setLupin(cc.v2(-675,-366),"general/walk","emotion/happy_1"),this.lupin.node.scale=1,this.lupin.setCompleteListener(null),this.otherSpine[0].node.position=cc.v3(671,-445),this.otherSpine[1].node.position=cc.v3(785,-360),this.otherSpine[2].node.position=cc.v3(671,-265)},t.prototype.setAction=function(){var e=this;a(this.lupin.node).to(2,{position:cc.v3(-287,-366)}).call(function(){e.setLupin(cc.v2(e.lupin.node.position),"general/stand_nervous","emotion/fear_1")}).delay(1).call(function(){e.showOptionContainer(!0)}).start(),a(this.otherSpine[0].node).to(2,{position:cc.v3(294,-445)}).start()},t.prototype.runOption1=function(){var e=this;this.lupin.setMix("level_22_3/mc_cuoi","general/walk",.3),this.lupin.setCompleteListener(function(t){"level_22_3/gia_chet"===t.animation.name&&a(e.otherSpine[0].node).to(3,{position:cc.v3(-740,-456)}).call(function(){e.lupin.setAnimation(0,"level_22_3/mc_cuoi",!1)}).start(),"level_22_3/mc_cuoi"===t.animation.name&&(e.lupin.setCompleteListener(null),e.setLupin(cc.v2(e.lupin.node.position),"general/walk","emotion/whistle"),a(e.lupin.node).to(4,{position:cc.v3(671,-456)}).call(function(){e.showSuccess(e.selected)}).start())}),this.scheduleOnce(function(){e.lupin.clearTrack(1),e.lupin.setToSetupPose(),e.lupin.setAnimation(0,"level_22_3/gia_chet",!1)},1)},t.prototype.runOption2=function(){var e=this;this.scheduleOnce(function(){e.lupin.clearTrack(1),e.lupin.setToSetupPose(),e.lupin.setAnimation(0,"level_22_3/thoi_sao",!0)},1),this.scheduleOnce(function(){var t=a().by(2,{position:cc.v3(-204)}),n=t.clone(e.otherSpine[0].node),i=t.clone(e.otherSpine[1].node),o=t.clone(e.otherSpine[2].node);a(e.otherSpine[1].node).by(2,{position:cc.v3(-404)}).then(i).start(),a(e.otherSpine[2].node).by(2,{position:cc.v3(-404)}).then(o).start(),a(e.otherSpine[0].node).delay(2).call(function(){e.setLupin(cc.v2(e.lupin.node.position),"level_22_3/funk","emotion/fear_2")}).then(n).delay(1).call(function(){e.showContinue()}).start()},4)},t.prototype.runOption3=function(){var e=this;this.lupin.setCompleteListener(function(t){"level_22_3/treo_1"===t.animation.name&&(e.lupin.setAnimation(0,"level_22_3/treo_2",!0),a(e.lupin.node).to(5,{position:cc.v3(-361,354)}).call(function(){e.lupin.setToSetupPose(),e.lupin.clearTrack(1),e.lupin.setAnimation(0,"level_22_3/fall",!1)}).to(1.8,{position:cc.v3(-341,-319)},{easing:"quadIn"}).call(function(){e.lupin.setAnimation(0,"level_22_3/faint",!1)}).delay(2).call(function(){e.showContinue()}).start(),a(e.otherSpine[0].node).delay(2).to(2,{position:cc.v3(16,-318)}).start())}),this.scheduleOnce(function(){e.setLupin(cc.v2(e.lupin.node.position),"general/walk","emotion/fear_2"),a(e.lupin.node).to(.8,{scale:.8,position:cc.v3(-401,-214)}).call(function(){e.lupin.setAnimation(0,"level_22_3/treo_1",!1),e.lupin.setAnimation(1,"emotion/fear_1",!0)}).start()},1)},c([s],t)}(l.default);n.default=p,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}]},{},["Level22_1","Level22_2","Level22_3"]);