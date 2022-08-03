window.__require=function e(t,i,n){function o(c,a){if(!i[c]){if(!t[c]){var s=c.split("/");if(s=s[s.length-1],!t[s]){var r="function"==typeof __require&&__require;if(!a&&r)return r(s,!0);if(l)return l(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var p=i[c]={exports:{}};t[c][0].call(p.exports,function(e){return o(t[c][1][e]||e)},p,p.exports,e,t,i,n)}return i[c].exports}for(var l="function"==typeof __require&&__require,c=0;c<n.length;c++)o(n[c]);return o}({Level13_1:[function(e,t,i){"use strict";cc._RF.push(t,"d513fLb2oVA+KHLk4dMONmW","Level13_1");var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),l=this&&this.__decorate||function(e,t,i,n){var o,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(l<3?o(c):l>3?o(t,i,c):o(t,i))||c);return l>3&&c&&Object.defineProperty(t,i,c),c};Object.defineProperty(i,"__esModule",{value:!0});var c,a=e("../../../Scripts/LevelBase"),s=cc._decorator,r=s.ccclass,p=s.property,u=cc.tween;(function(e){e[e.PEEK=0]="PEEK",e[e.SCREAM=1]="SCREAM",e[e.SNEAK=2]="SNEAK",e[e.WHISTLE=3]="WHISTLE",e[e.FAUCET=4]="FAUCET",e[e.FIRE=5]="FIRE",e[e.SLIP_2=6]="SLIP_2",e[e.VALVE=7]="VALVE",e[e.BRAWL=8]="BRAWL"})(c||(c={}));var _=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.waterSpawn=null,t._fire=[],t}return o(t,e),t.prototype.onEnable=function(){e.prototype.onEnable.call(this),this._gameManager._levelCurrent.level=this.levelCurrent,this._gameManager._beginScene=this.node},t.prototype.initStage=function(){var t=this;e.prototype.initStage.call(this),this.setStatus(),u(this.node).delay(1).call(function(){t.showOptionContainer(!0)}).start()},t.prototype.setStatus=function(){this._police=this.otherSpine[0],this._water=this.otherSprite[0];for(var e=1;e<this.otherSpine.length;++e)1!=e&&(this.otherSpine[e].node.active=!1),this._fire.push(this.otherSpine[e]);this._water.node.active=!1,this.setLupin(cc.v2(-400,-480),"general/stand_thinking","emotion/abc"),this.setOtherSpine(this._police,cc.v2(300,-480),"police/general/ready",null),this.lupin.setMix("general/stand_thinking","general/walk",.3),this._police.setMix("police/general/ready","police/general/surprised",.3),this._fire[0].node.active=!0,this._fire[0].node.scale=1,this._fire[0].node.position=cc.v3(-120,-30),this.waterSpawn.active=!1},t.prototype.runOption1=function(){var e=this;this.lupin.setAnimation(0,"general/walk",!0),this.lupin.setAnimation(1,"emotion/angry",!1),u(this.lupin.node).by(1.5,{position:cc.v3(390,180)}).call(function(){e.lupin.setAnimation(0,"general/gas_open",!1),e.playSound(c.VALVE,!1,0),e.lupin.setCompleteListener(function(t){if("general/gas_open"==t.animation.name){e.lupin.setCompleteListener(null),cc.audioEngine.stopAllEffects(),e._fire[0].node.scale=2,e._fire[0].timeScale=1.5,e._fire[0].node.position=cc.v3(-300,-25),e.playSound(c.FIRE,!0,0),e.playSound(c.FIRE,!0,1),e.playSound(c.FIRE,!0,2),e.playSound(c.FIRE,!0,3),e.lupin.setAnimation(0,"general/back",!1),e.lupin.setAnimation(1,"emotion/fear_2",!0);var i=2,n=function(){var e=this;this._fire[i].node.active=!0,++i==this._fire.length-1&&(this._police.setAnimation(0,"police/general/surprised",!0),this.playSound(c.SCREAM,!1,0),this.unschedule(n),this.scheduleOnce(function(){e.showFail(e.selected)},2))};e.schedule(n,.7)}})}).start()},t.prototype.runOption2=function(){var e=this;this.lupin.setAnimation(0,"general/walk",!0),this.lupin.setAnimation(1,"emotion/angry",!1),u(this.lupin.node).by(1.5,{position:cc.v3(160,180)}).call(function(){e.lupin.setAnimation(0,"general/water_open",!1),e.scheduleOnce(function(){e.waterSpawn.active=!0},.5),e.playSound(c.FAUCET,!1,.2),e.lupin.setCompleteListener(function(t){"general/water_open"==t.animation.name&&(e.lupin.setCompleteListener(null),cc.audioEngine.stopAllEffects(),u(e.shadow).to(.5,{opacity:255}).call(function(){e._water.node.active=!0,e.lupin.setAnimation(1,"emotion/excited",!1),e._fire[0].node.active=!1}).to(.5,{opacity:0}).delay(1).call(function(){e._police.setAnimation(0,"police/general/water_slide",!1),e.playSound(c.SLIP_2,!1,0)}).delay(1).call(function(){e.lupin.setAnimation(1,"emotion/excited",!1),e.lupin.setAnimation(0,"general/run",!0),u(e.lupin.node).by(.5,{position:cc.v3(200,-200)}).call(function(){e.lupin.setAnimation(0,"general/water_slide",!1),e.playSound(c.SLIP_2,!1,0)}).start()}).delay(1).call(function(){e.showFail(e.selected)}).start())})}).start()},t.prototype.runOption3=function(){var e=this;this.lupin.setAnimation(0,"general/run",!0),this.lupin.setAnimation(1,"emotion/angry",!0),u(this._police.node).delay(.5).call(function(){e._police.setAnimation(0,"police/general/run",!0)}).by(.5,{position:cc.v3(-200,0)}).start(),u(this.lupin.node).by(1,{position:cc.v3(300,0)}).call(function(){e.lupin.clearTrack(1),e.lupin.setAnimation(0,"fx/fightcloud",!0),e.playSound(c.BRAWL,!0,0),e._police.node.active=!1}).delay(2).call(function(){cc.audioEngine.stopAllEffects(),e.lupin.setAnimation(0,"general/stand_ready",!1),e._police.node.active=!0,e._police.setAnimation(0,"police/general/fall_hurt",!1)}).delay(1).call(function(){e.lupin.setAnimation(0,"general/run",!0),e.lupin.setAnimation(1,"emotion/sinister",!0),e.onPass()}).by(1,{position:cc.v3(400,0)}).start()},l([p(cc.Node)],t.prototype,"waterSpawn",void 0),l([r],t)}(a.default);i.default=_,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level13_2:[function(e,t,i){"use strict";cc._RF.push(t,"a51ffaYx1pDwbr3RQrHs9Ot","Level13_2");var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),l=this&&this.__decorate||function(e,t,i,n){var o,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(l<3?o(c):l>3?o(t,i,c):o(t,i))||c);return l>3&&c&&Object.defineProperty(t,i,c),c};Object.defineProperty(i,"__esModule",{value:!0});var c,a=e("../../../Scripts/LevelBase"),s=cc._decorator,r=s.ccclass,p=(s.property,cc.tween);(function(e){e[e.PEEK=0]="PEEK",e[e.SCREAM=1]="SCREAM",e[e.SNEAK=2]="SNEAK",e[e.WHISTLE=3]="WHISTLE",e[e.ALARM=4]="ALARM",e[e.ALERT=5]="ALERT",e[e.GIGGLE=6]="GIGGLE",e[e.HIT=7]="HIT",e[e.LIGHTER=8]="LIGHTER",e[e.SNEAK_FULL=9]="SNEAK_FULL",e[e.THROW=10]="THROW"})(c||(c={}));var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.initStage=function(){e.prototype.initStage.call(this),this.setStatus(),this.setAction()},t.prototype.setStatus=function(){this._police=this.otherSpine[0],this._police.node.position=cc.v3(480,-230),this._police2=this.otherSpine[1],this._police2.node.position=cc.v3(-520,-350),this._alarm=this.otherSprite[0],cc.Tween.stopAllByTarget(this._alarm.node),this._alarm.node.opacity=0,this.setLupin(cc.v2(-800,-400),"general/stand_thinking","emotion/sinister"),this.setOtherSpine(this._police,cc.v2(480,-230),"police/level_5/stand_watch",null),this._police2.setAnimation(0,"police/general/run",!0),this._police2.node.active=!1,this._police.node.scaleX=1,this._police2.node.scaleX=-1,this.background.position=cc.v3(540,0),this.lupin.node.scaleX=1,this._police.setMix("police/general/run","police/level_13/see_target",.3),this._police2.setMix("police/general/run","police/level_13/see_target",.3)},t.prototype.setAction=function(){var e=this;p(this.camera2d[0]).delay(1).by(3,{position:cc.v3(1050,0)}).delay(1).by(1,{position:cc.v3(-1050,0)}).call(function(){p(e.node).delay(1).call(function(){e.showOptionContainer(!0)}).start()}).start()},t.prototype.runOption1=function(){var e=this;p(this.lupin.node).call(function(){var t=!0;e.lupin.node.scaleX=-1,e.playSound(c.LIGHTER,!1,0),e.lupin.setAnimation(0,"level_13/fire_alarm",!1),e.lupin.setCompleteListener(function(i){"level_13/fire_alarm"==i.animation.name&&t&&(t=!1,e.playSound(c.ALARM,!1,0),p(e._alarm.node).repeatForever(p().to(.5,{opacity:255},{easing:"cubicOut"}).to(.5,{opacity:50},{easing:"cubicIn"})).start(),p(e.camera2d[0]).to(.5,{position:cc.v3(1050,0)}).call(function(){e.playSound(c.SCREAM,!1,0),e._police.setAnimation(0,"police/level_13/see_alarm",!0),e.lupin.node.scaleX=1,e.lupin.setAnimation(0,"general/stand_thinking",!1),e.lupin.setAnimation(1,"emotion/sinister",!0)}).delay(1).call(function(){e._police.node.scaleX=-1,p(e._police.node).delay(.1).call(function(){e._police.setAnimation(0,"police/level_13/run_fear",!0)}).start(),p(e._police.node).bezierTo(1.5,cc.v2(480,-230),cc.v2(480,-400),cc.v2(1200,-400)).start()}).delay(1.5).to(.5,{position:cc.v3(0,0)}).delay(1).call(function(){e.onPass()}).start())})}).start()},t.prototype.runOption2=function(){var e=this;this.lupin.setMix("general/stand_thinking","level_13/shoot_slice2",.3),p(this.lupin.node).call(function(){e.lupin.setAnimation(0,"level_13/shoot_slice2",!1),e.playSound(c.GIGGLE,!1,0),e.playSound(c.THROW,!1,1.5),e.lupin.setCompleteListener(function(t){"level_13/shoot_slice2"==t.animation.name&&p(e.camera2d[0]).by(.5,{position:cc.v3(900,0)}).call(function(){e.playSound(c.HIT,!1,.3),e._police.setAnimation(0,"police/level_13/under_hit2",!1)}).delay(1.5).by(.5,{position:cc.v3(-900,0)}).call(function(){e.lupin.setAnimation(0,"general/back",!1),e.lupin.setAnimation(1,"emotion/fear_2",!0),e._police.setAnimation(0,"police/general/run",!0),e._police.node.scaleX=1,p(e._police.node).to(3,{position:cc.v3(-320,-300)}).call(function(){e.playSound(c.ALERT,!1,0),e._police.setAnimation(0,"police/general/gun_raise",!0),e.scheduleOnce(function(){e.showContinue()},2)}).start()}).start()})}).start()},t.prototype.runOption3=function(){var e=this;this.playSound(c.SNEAK_FULL,!1,0),this.lupin.setAnimation(0,"general/walk_slow",!0),p(this.camera2d[0]).by(4,{position:cc.v3(600,100)}).start(),p(this.lupin.node).by(4,{position:cc.v3(600,100)}).call(function(){p(e.shadow).to(.5,{opacity:255}).call(function(){e.lupin.clearTrack(1),e.camera2d[0].position=cc.v3(1e3,0),e.lupin.node.position=cc.v3(830,-350),e._police.node.position=cc.v3(600,-350),e.lupin.setAnimation(0,"level_13/tied",!0),e.lupin.node.scaleX=-1,e._police.setAnimation(0,"police/level_13/tied",!0),e._police.node.scaleX=-1,p(e._police2.node).delay(2).call(function(){e._police2.setAnimation(0,"police/general/run",!0),e._police2.node.active=!0,e._police2.node.scaleX=-1}).by(2,{position:cc.v3(600,0)}).call(function(){e._police2.setAnimation(0,"police/level_13/see_target",!0),e._police2.node.scaleX=1,e.lupin.setAnimation(0,"level_13/tied2",!0),e.playSound(c.ALERT,!1,0)}).delay(1).call(function(){e.showContinue()}).start()}).to(.5,{opacity:0}).start()}).start()},l([r],t)}(a.default);i.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level13_3:[function(e,t,i){"use strict";cc._RF.push(t,"16d3d4vkxNCAZd02ytk9dhA","Level13_3");var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),l=this&&this.__decorate||function(e,t,i,n){var o,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(l<3?o(c):l>3?o(t,i,c):o(t,i))||c);return l>3&&c&&Object.defineProperty(t,i,c),c};Object.defineProperty(i,"__esModule",{value:!0});var c,a=e("../../../Scripts/LevelBase"),s=cc._decorator,r=s.ccclass,p=(s.property,cc.tween);(function(e){e[e.PEEK=0]="PEEK",e[e.SCREAM=1]="SCREAM",e[e.SNEAK=2]="SNEAK",e[e.WHISTLE=3]="WHISTLE",e[e.BRUSH=4]="BRUSH",e[e.FALL_BAG=5]="FALL_BAG",e[e.GUN=6]="GUN",e[e.HESITATE=7]="HESITATE"})(c||(c={}));var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.initStage=function(){e.prototype.initStage.call(this),this.setStatus(),this.setAction()},t.prototype.setStatus=function(){cc.audioEngine.stopAllEffects(),this._police=this.otherSpine[0],this._pot=this.otherSprite[0],this._cartonBox=this.otherSprite[1],this.lupin.node.scaleX=1,this._police.setMix("police/level_13/shoot_target","police/level_13/shoot_target1",.3),this._police.setMix("police/level_13/see_target","police/level_13/shoot_target1",.3),this.background.position=cc.v3(455,0),this.setLupin(cc.v2(-750,-500),"general/hide","emotion/fear_1"),this._police.setAnimation(0,"police/level_13/shoot_target",!0),this._police.timeScale=.84,this.playSound(c.GUN,!0,0),this._pot.node.active=!0,this._cartonBox.node.active=!0},t.prototype.setAction=function(){var e=this;p(this.camera2d[0]).delay(2).to(3,{position:cc.v3(980,0)}).delay(1).to(1,{position:cc.v3(0,0)}).call(function(){p(e.node).delay(1).call(function(){e.showOptionContainer(!0)}).start()}).start()},t.prototype.runOption1=function(){var e=this;p(this.shadow).to(.5,{opacity:255}).call(function(){e._pot.node.active=!1,e.lupin.node.position=cc.v3(-600,-330),e.playSound(c.HESITATE,!1,0),e.lupin.setAnimation(0,"level_13/use_pot",!0),p(e.lupin.node).by(1,{position:cc.v3(150,0)}).call(function(){e._pot.node.active=!1,e.lupin.clearTrack(1),e.playSound(c.FALL_BAG,!1,2),e.lupin.timeScale=1.5,e.lupin.setAnimation(0,"level_13/use_pot1",!1),e.lupin.setCompleteListener(function(t){"level_13/use_pot1"==t.animation.name&&(e.lupin.setCompleteListener(null),e.showContinue())})}).start()}).to(.5,{opacity:0}).start()},t.prototype.runOption2=function(){var e=this;p(this.shadow).to(.5,{opacity:255}).call(function(){e.lupin.node.position=cc.v3(-300,-330),e.playSound(c.WHISTLE,!0,0),e.lupin.setAnimation(0,"level_13/use_swob",!0),e.lupin.setAnimation(1,"emotion/whistle",!0),p(e.camera2d[0]).by(7,{position:cc.v3(980,0)}).start(),p(e.lupin.node).by(4,{position:cc.v3(800,0)}).call(function(){e.lupin.setAnimation(0,"level_13/use_swob1",!0),e._police.setAnimation(0,"police/level_13/shoot_target1",!1),e._police.setAnimation(0,"police/level_13/shoot_target",!0),e.lupin.node.scaleX=-1}).by(5,{position:cc.v3(800,0)}).call(function(){e.showSuccess(e.selected)}).start()}).to(.5,{opacity:0}).start()},t.prototype.runOption3=function(){var e=this;this.lupin.setMix("level_13/use_box","level_13/use_box2",.3),p(this.shadow).to(.5,{opacity:255}).call(function(){e._cartonBox.node.active=!1,e.lupin.node.position=cc.v3(-300,-330),e.playSound(c.SNEAK,!1,0),e.lupin.setAnimation(0,"level_13/use_box",!0),p(e.camera2d[0]).by(4.5,{position:cc.v3(500,0)}).start(),p(e.lupin.node).by(4.5,{position:cc.v3(500,0)}).call(function(){cc.audioEngine.stopAllEffects(),e._police.setAnimation(0,"police/level_13/see_target",!0)}).by(.9,{position:cc.v3(100,0)}).call(function(){e.playSound(c.GUN,!1,0),e._police.setAnimation(0,"police/level_13/shoot_target1",!1),e._police.setCompleteListener(function(t){if("police/level_13/shoot_target1"==t.animation.name){e.lupin.setCompleteListener(null),e.playSound(c.SCREAM,!1,0),e.lupin.setAnimation(0,"level_13/use_box2",!1);var i=!0;e.lupin.setCompleteListener(function(t){"level_13/use_box2"==t.animation.name&&i&&(i=!1,e.showContinue())})}})}).start()}).to(.5,{opacity:0}).start()},l([r],t)}(a.default);i.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}]},{},["Level13_1","Level13_2","Level13_3"]);