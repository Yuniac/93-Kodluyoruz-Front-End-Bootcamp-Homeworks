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
})({"assets/script/main.js":[function(require,module,exports) {
let data = [{
  "id": 1,
  "name": "Ahmed Bustani",
  "assistant": true,
  "group": "Orange"
}, {
  "id": 2,
  "name": "Baris Tunar",
  "assistant": true,
  "group": "Crimson"
}, {
  "id": 3,
  "name": "Burak Caglar",
  "assistant": true,
  "group": "Khaki"
}, {
  "id": 4,
  "name": "ah. fawad",
  "assistant": true,
  "group": "Pink"
}, {
  "id": 5,
  "name": "Furkan KILIÇER",
  "assistant": true,
  "group": "Aquamarine"
}, {
  "id": 6,
  "name": "Alperen Aslan",
  "assistant": true,
  "group": "Turquoise"
}, {
  "id": 7,
  "name": "joudi bitar",
  "assistant": true,
  "group": "Yellow"
}, {
  "id": 8,
  "name": "Kübra Özdem",
  "assistant": true,
  "group": "Goldenrod"
}, {
  "id": 9,
  "name": "Aycan",
  "assistant": true,
  "group": "Fuscia"
}, {
  "id": 10,
  "name": "Aykut Şahin",
  "assistant": true,
  "group": "Puce"
}, {
  "id": 11,
  "name": "S. Zahit ACAR",
  "assistant": true,
  "group": "Maroon"
}, {
  "id": 12,
  "name": "Tugay Türk",
  "assistant": true,
  "group": "Purple"
}, {
  "id": 13,
  "name": "Abdurrahman Seyidoğlu",
  "assistant": false,
  "group": "Aquamarine"
}, {
  "id": 14,
  "name": "Ahmed Tabşo",
  "assistant": false,
  "group": "Crimson"
}, {
  "id": 15,
  "name": "Alaa Alaff",
  "assistant": false,
  "group": "Fuscia"
}, {
  "id": 16,
  "name": "ASSKOUR Imane",
  "assistant": false,
  "group": "Goldenrod"
}, {
  "id": 17,
  "name": "Aydoğan Gökberk",
  "assistant": false,
  "group": "Khaki"
}, {
  "id": 18,
  "name": "BAHADDİN ALMUHAMMED",
  "assistant": false,
  "group": "Khaki"
}, {
  "id": 19,
  "name": "Büşra Bilgin",
  "assistant": false,
  "group": "Maroon"
}, {
  "id": 20,
  "name": "Chimnaz Vahabzade",
  "assistant": false,
  "group": "Orange"
}, {
  "id": 21,
  "name": "Çağatay Sarıoğlan",
  "assistant": false,
  "group": "Pink"
}, {
  "id": 22,
  "name": "dana alhameed",
  "assistant": false,
  "group": "Puce"
}, {
  "id": 23,
  "name": "Delfin Öztürk",
  "assistant": false,
  "group": "Purple"
}, {
  "id": 24,
  "name": "Ebubekir Karataş",
  "assistant": false,
  "group": "Yellow"
}, {
  "id": 25,
  "name": "Ela Yağmur ",
  "assistant": false,
  "group": "Turquoise"
}, {
  "id": 26,
  "name": "ELNAZ HAMEDIBAZAZ",
  "assistant": false,
  "group": "Pink"
}, {
  "id": 27,
  "name": "Fatma Şehitoğlu",
  "assistant": false,
  "group": "Goldenrod"
}, {
  "id": 28,
  "name": "Feras Alkilani",
  "assistant": false,
  "group": "Fuscia"
}, {
  "id": 29,
  "name": "Gizem Nur Korkmaz",
  "assistant": false,
  "group": "Crimson"
}, {
  "id": 30,
  "name": "Halil İbrahim Badem",
  "assistant": false,
  "group": "Aquamarine"
}, {
  "id": 31,
  "name": "Hasan ALKHALAF",
  "assistant": false,
  "group": "Aquamarine"
}, {
  "id": 32,
  "name": "Hatice Sürümlü",
  "assistant": false,
  "group": "Purple"
}, {
  "id": 33,
  "name": "IMAN ALABID",
  "assistant": false,
  "group": "Maroon"
}, {
  "id": 34,
  "name": "Işıl Özkaynak",
  "assistant": false,
  "group": "Goldenrod"
}, {
  "id": 35,
  "name": "İbrahim Halil DÖŞ",
  "assistant": false,
  "group": "Crimson"
}, {
  "id": 36,
  "name": "İlkay Çitak",
  "assistant": false,
  "group": "Aquamarine"
}, {
  "id": 37,
  "name": "Kenan Mirzeyev",
  "assistant": false,
  "group": "Yellow"
}, {
  "id": 38,
  "name": "Melisa Gürdal",
  "assistant": false,
  "group": "Goldenrod"
}, {
  "id": 39,
  "name": "Merve Şahin",
  "assistant": false,
  "group": "Orange"
}, {
  "id": 40,
  "name": "MHD NABIL ARAR",
  "assistant": false,
  "group": "Yellow"
}, {
  "id": 41,
  "name": "Muhammet BİLGİN",
  "assistant": false,
  "group": "Orange"
}, {
  "id": 42,
  "name": "Nurgeldi Atamyradov",
  "assistant": false,
  "group": "Khaki"
}, {
  "id": 43,
  "name": "Ozan Ali TÜRKYILMAZ",
  "assistant": false,
  "group": "Pink"
}, {
  "id": 44,
  "name": "Özge Yurdusev",
  "assistant": false,
  "group": "Goldenrod"
}, {
  "id": 45,
  "name": "Parahat Nepesov",
  "assistant": false,
  "group": "Puce"
}, {
  "id": 46,
  "name": "Rined haj osman",
  "assistant": false,
  "group": "Turquoise"
}, {
  "id": 47,
  "name": "Serkan Çelik",
  "assistant": false,
  "group": "Yellow"
}, {
  "id": 48,
  "name": "Sinem Nurioğlu",
  "assistant": false,
  "group": "Aquamarine"
}, {
  "id": 49,
  "name": "Şifa Hasani",
  "assistant": false,
  "group": "Turquoise"
}, {
  "id": 50,
  "name": "Yasemin Paşaoğlu",
  "assistant": false,
  "group": "Yellow"
}, {
  "id": 51,
  "name": "Yusuf sabbagh",
  "assistant": false,
  "group": "Crimson"
}, {
  "id": 52,
  "name": "Nurgeldi Atamyradov",
  "assistant": false,
  "group": "Yellow"
}];
console.log('👻', data);
},{}],"C:/Users/Sisth/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56584" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["C:/Users/Sisth/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/script/main.js"], null)
//# sourceMappingURL=/main.9b8a4dd2.js.map