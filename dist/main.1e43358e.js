// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    OPTIONS: "OPTIONS",
    PLAY: "PLAY"
  }
};
exports.CST = CST;
},{}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: _CST.CST.SCENES.LOAD
    }));
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      //load images,
      this.load.image("bg", "./assets/bg.jpg");
      this.load.image("map", "./assets/map.png");
      this.load.image("quit", "./assets/quit.png");
      this.load.image("title", "./assets/title.png");
      this.load.image("play", "./assets/play.png");
      this.load.image("options", "./assets/options.png");
      this.load.image("on", "./assets/on.png");
      this.load.image("off", "./assets/off.png");
      this.load.image("exit", "./assets/exit.png");
      this.load.image("loading", "./assets/loading.png");
      this.load.image("volume", "./assets/volume.png");
      this.load.image("back", "./assets/back.png");
      this.load.audio("title_music", "./assets/title_music.mp3");
      this.load.spritesheet("smorc", "./assets/smorc.png", {
        frameHeight: 64,
        frameWidth: 64
      }); // this.load.atlas("character", "./assets/smorc,png", "./assets/smorc,png")

      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0x5555ff
        }
      }); //large load

      for (var i = 0; i < 100; i++) {
        this.load.spritesheet("smorc" + i, "./assets/smorc.png", {
          frameHeight: 32,
          frameWidth: 32
        });
      }

      this.load.on("progress", function (percent) {
        var loadingText = _this.add.image(390, 290, "loading");

        loadingText.setScale(0.7);
        loadingBar.fillRoundedRect(230, 335, 320 * percent, 50, 5);
        loadingBar.lineStyle(10, 0x666666, 1);
        loadingBar.strokeRoundedRect(230, 335, 320, 50, 5);
      });
      this.load.on("complete", function () {
        console.log("done");
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU, "hello from loadscene");
      this.add.image(0, 0, "loading").setOrigin(0);
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: _CST.CST.SCENES.MENU
    }));
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init(data) {
      console.log(data);
      console.log("i got it");
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.add.image(0, 0, "bg").setOrigin(0);
      this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.25, "title");
      var playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.55, "play");
      var optionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.67, "options");
      var exitButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.79, "exit");
      var volumeButton = this.add.image(this.game.renderer.width * 0.90, this.game.renderer.height * 0.92, "volume"); // let onButton = this.add.image(this.game.renderer.width * 0.87, this.game.renderer.height * 0.88, "on");
      // let offButton = this.add.image(this.game.renderer.width * 0.92, this.game.renderer.height * 0.88, "off");

      var hoverSprite = this.add.sprite(this.x, this.y, "smorc");
      hoverSprite.setVisible(false); //menu music

      var bgMusic = this.sound.pauseOnBlur = false;
      var music = this.sound.play("title_music", {
        mute: false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
      });
      this.anims.create({
        key: "walk",
        frameRate: 8,
        repeat: -1,
        //
        frames: this.anims.generateFrameNumbers("smorc", {
          start: 131,
          end: 138
        })
      });
      playButton.setInteractive();
      playButton.on("pointerover", function () {
        console.log("hover");
        playButton.setScale(1.3);
        hoverSprite.setVisible(true);
        hoverSprite.play("walk");
        hoverSprite.x = hoverSprite.y - playButton.width / 2 + 30;
        hoverSprite.y = playButton.y;
      });
      playButton.on("pointerout", function () {
        console.log("get out");
        playButton.setScale(1);
        hoverSprite.setVisible(false);
      });
      playButton.on("pointerup", function () {
        console.log("START SMORCIN");

        _this.scene.start(_CST.CST.SCENES.PLAY);
      });
      optionsButton.setInteractive();
      optionsButton.on("pointerover", function () {
        optionsButton.setScale(1.3);
      });
      optionsButton.on("pointerout", function () {
        optionsButton.setScale(1);
        hoverSprite.setVisible(false);
      });
      optionsButton.on("pointerup", function () {
        _this.sound.stopAll("title_music");

        _this.scene.start(_CST.CST.SCENES.OPTIONS);
      });
      exitButton.setInteractive();
      exitButton.on("pointerover", function () {
        exitButton.setScale(1.3);
      });
      exitButton.on("pointerout", function () {
        exitButton.setScale(1);
        hoverSprite.setVisible(false);
      });
      exitButton.on("pointerup", function () {});
      volumeButton.setInteractive();
      volumeButton.on("pointerover", function () {
        volumeButton.setScale(1.3);
      });
      volumeButton.on("pointerout", function () {
        volumeButton.setScale(1);
        hoverSprite.setVisible(false);
      });
      volumeButton.on("pointerup", function () {
        _this.sound.stopAll("title_music");

        music.mute(true);
      });
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js"}],"src/scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PlayScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);

  // smorc!: Phaser.GameObjects.Sprite;
  // keyboard!: {[index: string] : Phaser.Input.Keyboard.Key};
  function PlayScene() {
    _classCallCheck(this, PlayScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlayScene).call(this, {
      key: _CST.CST.SCENES.PLAY
    }));
  }

  _createClass(PlayScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      this.anims.create({
        key: "down",
        frameRate: 8,
        frames: this.anims.generateFrameNumbers("smorc", {
          start: 131,
          end: 138
        })
      });
      this.anims.create({
        key: "up",
        frameRate: 8,
        frames: this.anims.generateFrameNumbers("smorc", {
          start: 105,
          end: 112
        })
      });
      this.anims.create({
        key: "right",
        frameRate: 8,
        frames: this.anims.generateFrameNumbers("smorc", {
          start: 144,
          end: 151
        })
      });
      this.anims.create({
        key: "left",
        frameRate: 8,
        frames: this.anims.generateFrameNumbers("smorc", {
          start: 117,
          end: 124
        })
      });
      this.anims.create({
        key: "swingDown",
        frameRate: 8,
        frames: this.anims.generateFrameNumbers("smorc", {
          frames: [195, 196, 197, 198, 199, 200, 198, 195]
        })
      });
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.add.image(0, 0, "map").setOrigin(0).setScale(1.5);
      this.smorc = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height * 0.5, "smorc");
      var quitButton = this.add.image(720, 50, "quit");
      quitButton.setInteractive();
      quitButton.on("pointerover", function () {
        quitButton.setScale(1.3);
      });
      quitButton.on("pointerout", function () {
        quitButton.setScale(1);
      });
      quitButton.on("pointerup", function () {
        _this.sound.stopAll("title_music");

        _this.scene.start(_CST.CST.SCENES.MENU);
      });
      window.smorc = this.smorc;
      this.keyboard = this.input.keyboard.addKeys("Z, Q, S, D, E");
      this.cameras.main.startFollow(this.smorc);
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      //down
      if (this.keyboard.S.isDown === true) {
        this.smorc.y = this.smorc.y + 128 * (delta / 1000);
        this.smorc.play("down", true);
      } //up


      if (this.keyboard.Z.isDown === true) {
        this.smorc.y = this.smorc.y - 128 * (delta / 1000);
        this.smorc.play("up", true);
      } //right


      if (this.keyboard.D.isDown === true) {
        this.smorc.x = this.smorc.x + 128 * (delta / 1000);
        this.smorc.play("right", true);
      } //left


      if (this.keyboard.Q.isDown === true) {
        this.smorc.x = this.smorc.x - 128 * (delta / 1000);
        this.smorc.play("left", true);
      }

      if (this.keyboard.E.isDown === true) {
        this.smorc.play("swingDown", true);
      }
    }
  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"../CST":"src/CST.js"}],"src/scenes/OptionScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OptionScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(OptionScene, _Phaser$Scene);

  function OptionScene() {
    _classCallCheck(this, OptionScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(OptionScene).call(this, {
      key: _CST.CST.SCENES.OPTIONS
    }));
  }

  _createClass(OptionScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      this.load.image("back", "./assets/back.png");
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.add.image(0, 0, "bg").setOrigin(0);
      this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.25, "title");
      var backButton = this.add.image(700, 50, "back"); // this.sound.pauseOnBlur = false;
      // this.sound.play("title_music", {
      //     loop: true
      // })

      backButton.setInteractive();
      backButton.on("pointerover", function () {
        backButton.setScale(1.3);
      });
      backButton.on("pointerout", function () {
        backButton.setScale(1);
      });
      backButton.on("pointerup", function () {
        _this.sound.stopAll("title_music");

        _this.scene.start(_CST.CST.SCENES.MENU);
      });
    }
  }]);

  return OptionScene;
}(Phaser.Scene);

exports.OptionScene = OptionScene;
},{"../CST":"src/CST.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _PlayScene = require("./scenes/PlayScene");

var _OptionScene = require("./scenes/OptionScene");

/** @type {import("../typings/phaser")} */
var game = new Phaser.Game({
  width: 800,
  height: 600,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _OptionScene.OptionScene, _PlayScene.PlayScene]
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/PlayScene":"src/scenes/PlayScene.js","./scenes/OptionScene":"src/scenes/OptionScene.js"}],"../../Users/senne/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59885" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../Users/senne/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map