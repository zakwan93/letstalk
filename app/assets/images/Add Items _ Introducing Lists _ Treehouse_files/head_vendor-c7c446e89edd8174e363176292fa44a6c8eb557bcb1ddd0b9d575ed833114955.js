!function(e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
    var t;
    t = "undefined" != typeof window ? window :"undefined" != typeof global ? global :"undefined" != typeof self ? self :this, 
    t.bugsnag = e();
  }
}(function() {
  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function n() {
    return Z((Math.random() * ce << 0).toString(ue), se);
  }
  function r() {
    return ae = ae < ce ? ae :0, ++ae - 1;
  }
  function i() {
    return "c" + new Date().getTime().toString(ue) + Z(r().toString(ue), se) + oe() + (n() + n());
  }
  function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function a(e) {
    switch (Object.prototype.toString.call(e)) {
     case "[object Error]":
     case "[object Exception]":
     case "[object DOMException]":
      return !0;

     default:
      return e instanceof Error;
    }
  }
  function s(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function u(e) {
    var t = [ e.tagName ];
    if (e.id && t.push("#" + e.id), e.className && e.className.length && t.push("." + e.className.split(" ").join(".")), 
    !document.querySelectorAll || !Array.prototype.indexOf) return t.join("");
    try {
      if (1 === document.querySelectorAll(t.join("")).length) return t.join("");
    } catch (e) {
      return t.join("");
    }
    if (e.parentNode.childNodes.length > 1) {
      var n = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
      t.push(":nth-child(" + n + ")");
    }
    return 1 === document.querySelectorAll(t.join("")).length ? t.join("") :e.parentNode ? u(e.parentNode) + " > " + t.join("") :t.join("");
  }
  function c(e, t) {
    var n = "(...)";
    return e && e.length <= t ? e :e.slice(0, t - n.length) + n;
  }
  function l() {
    if (this[rt] !== ot.config.endpoint && this[rt] !== ot.config.sessionEndpoint) {
      var e = {
        status:this.status,
        request:this[it] + " " + this[rt]
      };
      this.status >= 400 ? ot.leaveBreadcrumb("XMLHttpRequest failed", e, tt) :ot.leaveBreadcrumb("XMLHttpRequest succeeded", e, tt);
    }
  }
  function f() {
    this[rt] !== ot.config.endpoint && this[rt] !== ot.config.sessionEndpoint && ot.leaveBreadcrumb("XMLHttpRequest error", {
      request:this[it] + " " + this[rt]
    }, tt);
  }
  function d(e) {
    return "[Throws: " + (e ? e.message :"?") + "]";
  }
  function p(e, t) {
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
    return !1;
  }
  function h(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  }
  function g(e, t) {
    try {
      return e[t];
    } catch (e) {
      return d(e);
    }
  }
  function m(e) {
    function t(e, i) {
      function o() {
        return i > Ot && r > At;
      }
      if (r++, i === undefined && (i = 0), i > Lt) return qt;
      if (o()) return qt;
      if (null === e || "object" != typeof e) return e;
      if (p(n, e)) return "[Circular]";
      if (n.push(e), "function" == typeof e.toJSON) try {
        r--;
        var a = t(e.toJSON(), i);
        return n.pop(), a;
      } catch (e) {
        return d(e);
      }
      if (h(e)) {
        for (var s = [], u = 0, c = e.length; u < c; u++) {
          if (o()) {
            s.push(qt);
            break;
          }
          s.push(t(e[u], i + 1));
        }
        return n.pop(), s;
      }
      var l = {};
      try {
        for (var f in e) if (Object.prototype.hasOwnProperty.call(e, f)) {
          if (o()) {
            l[f] = qt;
            break;
          }
          l[f] = t(g(e, f), i + 1);
        }
      } catch (e) {}
      return n.pop(), l;
    }
    var n = [], r = 0;
    return t(e);
  }
  var y, v = function(e, t, n) {
    for (var r = n, i = 0, o = e.length; i < o; i++) r = t(r, e[i], i, e);
    return r;
  }, b = function(e, t) {
    return v(e, function(e, n, r, i) {
      return t(n, r, i) ? e.concat(n) :e;
    }, []);
  }, w = function(e, t) {
    return v(e, function(e, n, r, i) {
      return e.concat(t(n, r, i));
    }, []);
  }, x = function(e, t) {
    return v(e, function(e, n) {
      return !0 === e || n === t;
    }, !1);
  }, S = !{
    toString:null
  }.propertyIsEnumerable("toString"), T = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], E = function(e) {
    var t = [], n = void 0;
    for (n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
    if (!S) return t;
    for (var r = 0, i = T.length; r < i; r++) Object.prototype.hasOwnProperty.call(e, T[r]) && t.push(T[r]);
    return t;
  }, C = function(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  }, N = function(e) {
    return e < 10 ? "0" + e :e;
  }, k = function() {
    var e = new Date();
    return e.getUTCFullYear() + "-" + N(e.getUTCMonth() + 1) + "-" + N(e.getUTCDate()) + "T" + N(e.getUTCHours()) + ":" + N(e.getUTCMinutes()) + ":" + N(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
  }, j = {
    map:w,
    reduce:v,
    filter:b,
    includes:x,
    keys:E,
    isArray:C,
    isoDate:k
  }, D = j.isoDate, L = function() {
    function t() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :"[anonymous]", r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :{}, i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] :"manual", o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] :D();
      e(this, t), this.type = i, this.name = n, this.metaData = r, this.timestamp = o;
    }
    return t.prototype.toJSON = function() {
      return {
        type:this.type,
        name:this.name,
        timestamp:this.timestamp,
        metaData:this.metaData
      };
    }, t;
  }(), A = L, O = j.includes, q = function(e) {
    return O([ "undefined", "number" ], typeof e) && parseInt("" + e, 10) === e && e > 0;
  }, R = {}, H = j.filter, _ = j.reduce, B = j.keys, M = j.isArray;
  R.schema = {
    apiKey:{
      defaultValue:function() {
        return null;
      },
      message:"is required",
      validate:function(e) {
        return "string" == typeof e && e.length;
      }
    },
    appVersion:{
      defaultValue:function() {
        return null;
      },
      message:"should be a string",
      validate:function(e) {
        return null === e || "string" == typeof e && e.length;
      }
    },
    autoNotify:{
      defaultValue:function() {
        return !0;
      },
      message:"should be true|false",
      validate:function(e) {
        return !0 === e || !1 === e;
      }
    },
    beforeSend:{
      defaultValue:function() {
        return [];
      },
      message:"should be a function or array of functions",
      validate:function(e) {
        return "function" == typeof e || M(e) && H(e, function(e) {
          return "function" == typeof e;
        }).length === e.length;
      }
    },
    endpoint:{
      defaultValue:function() {
        return "https://notify.bugsnag.com";
      },
      message:"should be a URL",
      validate:function() {
        return !0;
      }
    },
    sessionEndpoint:{
      defaultValue:function() {
        return "https://sessions.bugsnag.com";
      },
      message:"should be a URL",
      validate:function() {
        return !0;
      }
    },
    autoCaptureSessions:{
      defaultValue:function() {
        return !1;
      },
      message:"should be true|false",
      validate:function(e) {
        return !0 === e || !1 === e;
      }
    },
    notifyReleaseStages:{
      defaultValue:function() {
        return null;
      },
      message:"should be an array of strings",
      validate:function(e) {
        return null === e || M(e) && H(e, function(e) {
          return "string" == typeof e;
        }).length === e.length;
      }
    },
    releaseStage:{
      defaultValue:function() {
        return "production";
      },
      message:"should be a string",
      validate:function(e) {
        return "string" == typeof e && e.length;
      }
    },
    maxBreadcrumbs:{
      defaultValue:function() {
        return 20;
      },
      message:"should be a number \u226440",
      validate:function(e) {
        return 0 === e || q(e) && (e === undefined || e <= 40);
      }
    },
    autoBreadcrumbs:{
      defaultValue:function() {
        return !0;
      },
      message:"should be true|false",
      validate:function(e) {
        return "boolean" == typeof e;
      }
    },
    user:{
      defaultValue:function() {
        return null;
      },
      message:"(object) user should be an object",
      validate:function(e) {
        return "object" == typeof e;
      }
    },
    metaData:{
      defaultValue:function() {
        return null;
      },
      message:"should be an object",
      validate:function(e) {
        return "object" == typeof e;
      }
    },
    logger:{
      defaultValue:function() {
        return undefined;
      },
      message:"should be null or an object with methods { debug, info, warn, error }",
      validate:function(e) {
        return !e || e && _([ "debug", "info", "warn", "error" ], function(t, n) {
          return t && "function" == typeof e[n];
        }, !0);
      }
    }
  }, R.mergeDefaults = function(e, t) {
    if (!e || !t) throw new Error("schema.mergeDefaults(opts, schema): opts and schema objects are required");
    return _(B(t), function(n, r) {
      return n[r] = e[r] !== undefined ? e[r] :t[r].defaultValue(), n;
    }, {});
  }, R.validate = function(e, t) {
    if (!e || !t) throw new Error("schema.mergeDefaults(opts, schema): opts and schema objects are required");
    var n = _(B(t), function(n, r) {
      return t[r].validate(e[r]) ? n :n.concat({
        key:r,
        message:t[r].message,
        value:e[r]
      });
    }, []);
    return {
      valid:!n.length,
      errors:n
    };
  };
  var P = function(e) {
    return e.app && "string" == typeof e.app.releaseStage ? e.app.releaseStage :e.config.releaseStage;
  }, F = function(e) {
    return !(!e || !e.stack && !e.stacktrace && !e["opera#sourceloc"] || "string" != typeof (e.stack || e.stacktrace || e["opera#sourceloc"]));
  }, I = {};
  !function(e, t) {
    "use strict";
    "function" == typeof y && y.amd ? y("stackframe", [], t) :"object" == typeof I ? I = t() :e.StackFrame = t();
  }(this, function() {
    "use strict";
    function e(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function t(e) {
      return e.charAt(0).toUpperCase() + e.substring(1);
    }
    function n(e) {
      return function() {
        return this[e];
      };
    }
    function r(e) {
      if (e instanceof Object) for (var n = 0; n < u.length; n++) e.hasOwnProperty(u[n]) && e[u[n]] !== undefined && this["set" + t(u[n])](e[u[n]]);
    }
    var i = [ "isConstructor", "isEval", "isNative", "isToplevel" ], o = [ "columnNumber", "lineNumber" ], a = [ "fileName", "functionName", "source" ], s = [ "args" ], u = i.concat(o, a, s);
    r.prototype = {
      getArgs:function() {
        return this.args;
      },
      setArgs:function(e) {
        if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
        this.args = e;
      },
      getEvalOrigin:function() {
        return this.evalOrigin;
      },
      setEvalOrigin:function(e) {
        if (e instanceof r) this.evalOrigin = e; else {
          if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
          this.evalOrigin = new r(e);
        }
      },
      toString:function() {
        return (this.getFunctionName() || "{anonymous}") + "(" + (this.getArgs() || []).join(",") + ")" + (this.getFileName() ? "@" + this.getFileName() :"") + (e(this.getLineNumber()) ? ":" + this.getLineNumber() :"") + (e(this.getColumnNumber()) ? ":" + this.getColumnNumber() :"");
      }
    };
    for (var c = 0; c < i.length; c++) r.prototype["get" + t(i[c])] = n(i[c]), r.prototype["set" + t(i[c])] = function(e) {
      return function(t) {
        this[e] = Boolean(t);
      };
    }(i[c]);
    for (var l = 0; l < o.length; l++) r.prototype["get" + t(o[l])] = n(o[l]), r.prototype["set" + t(o[l])] = function(t) {
      return function(n) {
        if (!e(n)) throw new TypeError(t + " must be a Number");
        this[t] = Number(n);
      };
    }(o[l]);
    for (var f = 0; f < a.length; f++) r.prototype["get" + t(a[f])] = n(a[f]), r.prototype["set" + t(a[f])] = function(e) {
      return function(t) {
        this[e] = String(t);
      };
    }(a[f]);
    return r;
  });
  var $ = {};
  !function(e, t) {
    "use strict";
    "function" == typeof y && y.amd ? y("error-stack-parser", [ "stackframe" ], t) :"object" == typeof $ ? $ = t(I) :e.ErrorStackParser = t(e.StackFrame);
  }(this, function(e) {
    "use strict";
    var t = /(^|@)\S+\:\d+/, n = /^\s*at .*(\S+\:\d+|\(native\))/m, r = /^(eval@)?(\[native code\])?$/;
    return {
      parse:function(e) {
        if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"]) return this.parseOpera(e);
        if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
        if (e.stack) return this.parseFFOrSafari(e);
        throw new Error("Cannot parse given Error object");
      },
      extractLocation:function(e) {
        if (-1 === e.indexOf(":")) return [ e ];
        var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/, n = t.exec(e.replace(/[\(\)]/g, ""));
        return [ n[1], n[2] || undefined, n[3] || undefined ];
      },
      parseV8OrIE:function(t) {
        return t.stack.split("\n").filter(function(e) {
          return !!e.match(n);
        }, this).map(function(t) {
          t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
          var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1), r = this.extractLocation(n.pop()), i = n.join(" ") || undefined, o = [ "eval", "<anonymous>" ].indexOf(r[0]) > -1 ? undefined :r[0];
          return new e({
            functionName:i,
            fileName:o,
            lineNumber:r[1],
            columnNumber:r[2],
            source:t
          });
        }, this);
      },
      parseFFOrSafari:function(t) {
        return t.stack.split("\n").filter(function(e) {
          return !e.match(r);
        }, this).map(function(t) {
          if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), 
          -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
            functionName:t
          });
          var n = t.split("@"), r = this.extractLocation(n.pop()), i = n.join("@") || undefined;
          return new e({
            functionName:i,
            fileName:r[0],
            lineNumber:r[1],
            columnNumber:r[2],
            source:t
          });
        }, this);
      },
      parseOpera:function(e) {
        return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) :e.stack ? this.parseOpera11(e) :this.parseOpera10(e);
      },
      parseOpera9:function(t) {
        for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), i = [], o = 2, a = r.length; o < a; o += 2) {
          var s = n.exec(r[o]);
          s && i.push(new e({
            fileName:s[2],
            lineNumber:s[1],
            source:r[o]
          }));
        }
        return i;
      },
      parseOpera10:function(t) {
        for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), i = [], o = 0, a = r.length; o < a; o += 2) {
          var s = n.exec(r[o]);
          s && i.push(new e({
            functionName:s[3] || undefined,
            fileName:s[2],
            lineNumber:s[1],
            source:r[o]
          }));
        }
        return i;
      },
      parseOpera11:function(n) {
        return n.stack.split("\n").filter(function(e) {
          return !!e.match(t) && !e.match(/^Error created at/);
        }, this).map(function(t) {
          var n, r = t.split("@"), i = this.extractLocation(r.pop()), o = r.shift() || "", a = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
          o.match(/\(([^\)]*)\)/) && (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
          var s = n === undefined || "[arguments not available]" === n ? undefined :n.split(",");
          return new e({
            functionName:a,
            args:s,
            fileName:i[0],
            lineNumber:i[1],
            columnNumber:i[2],
            source:t
          });
        }, this);
      }
    };
  });
  var W = {};
  !function(e, t) {
    "use strict";
    "function" == typeof y && y.amd ? y("stack-generator", [ "stackframe" ], t) :"object" == typeof W ? W = t(I) :e.StackGenerator = t(e.StackFrame);
  }(this, function(e) {
    return {
      backtrace:function(t) {
        var n = [], r = 10;
        "object" == typeof t && "number" == typeof t.maxStackSize && (r = t.maxStackSize);
        for (var i = arguments.callee; i && n.length < r && i.arguments; ) {
          for (var o = new Array(i.arguments.length), a = 0; a < o.length; ++a) o[a] = i.arguments[a];
          /function(?:\s+([\w$]+))+\s*\(/.test(i.toString()) ? n.push(new e({
            functionName:RegExp.$1 || undefined,
            args:o
          })) :n.push(new e({
            args:o
          }));
          try {
            i = i.caller;
          } catch (e) {
            break;
          }
        }
        return n;
      }
    };
  });
  var z = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, U = j.reduce, X = j.filter, V = function() {
    function e(n, r) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] :[], o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] :J();
      t(this, e), this.__isBugsnagReport = !0, this._ignored = !1, this._handledState = o, 
      this.app = undefined, this.apiKey = undefined, this.breadcrumbs = [], this.context = undefined, 
      this.device = undefined, this.errorClass = Y(n, "[no error class]"), this.errorMessage = Y(r, "[no error message]"), 
      this.groupingHash = undefined, this.metaData = {}, this.request = undefined, this.severity = this._handledState.severity, 
      this.stacktrace = U(i, function(e, t) {
        var n = K(t);
        try {
          return "{}" === JSON.stringify(n) ? e :e.concat(n);
        } catch (t) {
          return e;
        }
      }, []), this.user = undefined, this.session = undefined;
    }
    return e.prototype.ignore = function() {
      this._ignored = !0;
    }, e.prototype.isIgnored = function() {
      return this._ignored;
    }, e.prototype.updateMetaData = function(e) {
      var t;
      if (!e) return this;
      var n = void 0;
      return null === (arguments.length <= 1 ? undefined :arguments[1]) ? this.removeMetaData(e) :null === (arguments.length <= 2 ? undefined :arguments[2]) ? this.removeMetaData(e, arguments.length <= 1 ? undefined :arguments[1], arguments.length <= 2 ? undefined :arguments[2]) :("object" == typeof (arguments.length <= 1 ? undefined :arguments[1]) && (n = arguments.length <= 1 ? undefined :arguments[1]), 
      "string" == typeof (arguments.length <= 1 ? undefined :arguments[1]) && (t = {}, 
      t[arguments.length <= 1 ? undefined :arguments[1]] = arguments.length <= 2 ? undefined :arguments[2], 
      n = t), n ? (this.metaData[e] || (this.metaData[e] = {}), this.metaData[e] = z({}, this.metaData[e], n), 
      this) :this);
    }, e.prototype.removeMetaData = function(e, t) {
      return "string" != typeof e ? this :t ? this.metaData[e] ? (delete this.metaData[e][t], 
      this) :this :(delete this.metaData[e], this);
    }, e.prototype.toJSON = function() {
      return {
        payloadVersion:"4",
        exceptions:[ {
          errorClass:this.errorClass,
          message:this.errorMessage,
          stacktrace:this.stacktrace,
          type:"browserjs"
        } ],
        severity:this.severity,
        unhandled:this._handledState.unhandled,
        severityReason:this._handledState.severityReason,
        app:this.app,
        device:this.device,
        breadcrumbs:this.breadcrumbs,
        context:this.context,
        user:this.user,
        metaData:this.metaData,
        groupingHash:this.groupingHash,
        request:this.request,
        session:this.session
      };
    }, e;
  }(), K = function(e) {
    var t = {
      file:e.fileName,
      method:G(e.functionName),
      lineNumber:e.lineNumber,
      columnNumber:e.columnNumber,
      code:undefined,
      inProject:undefined
    };
    return t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"), t;
  }, G = function(e) {
    return /^global code$/i.test(e) ? "global code" :e;
  }, J = function() {
    return {
      unhandled:!1,
      severity:"warning",
      severityReason:{
        type:"handledException"
      }
    };
  }, Y = function(e, t) {
    return "string" == typeof e && e ? e :t;
  };
  V.getStacktrace = function(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :0, n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] :0;
    return F(e) ? $.parse(e).slice(t) :X(W.backtrace(), function(e) {
      return -1 === (e.functionName || "").indexOf("StackGenerator$$");
    }).slice(1 + n);
  }, V.ensureReport = function(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :0, n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] :0;
    if (e.__isBugsnagReport) return e;
    try {
      var r = V.getStacktrace(e, t, 1 + n);
      return new V(e.name, e.message, r);
    } catch (t) {
      return new V(e.name, e.message, []);
    }
  };
  var Q = V, Z = function(e, t) {
    var n = "000000000" + e;
    return n.substr(n.length - t);
  }, ee = "object" == typeof window ? window :self, te = 0;
  for (var ne in ee) Object.hasOwnProperty.call(ee, ne) && te++;
  var re = navigator.mimeTypes ? navigator.mimeTypes.length :0, ie = Z((re + navigator.userAgent.length).toString(36) + te.toString(36), 4), oe = function() {
    return ie;
  }, ae = 0, se = 4, ue = 36, ce = Math.pow(ue, se);
  i.fingerprint = oe;
  var le = i, fe = j.isoDate, de = function() {
    function e() {
      o(this, e), this.id = le(), this.startedAt = fe(), this._handled = 0, this._unhandled = 0;
    }
    return e.prototype.toJSON = function() {
      return {
        id:this.id,
        startedAt:this.startedAt,
        events:{
          handled:this._handled,
          unhandled:this._unhandled
        }
      };
    }, e.prototype.trackError = function(e) {
      this[e._handledState.unhandled ? "_unhandled" :"_handled"] += 1;
    }, e;
  }(), pe = de, he = a, ge = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, me = j.map, ye = j.reduce, ve = j.includes, be = j.isArray, we = function() {}, xe = function() {
    function e(t) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :R.schema, r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] :null;
      if (s(this, e), !t) throw new Error("new BugsnagClient(notifier, configSchema) requires `notifier` argument");
      if (!t.name || !t.version || !t.url) throw new Error("new BugsnagClient(notifier, configSchema) - `notifier` requires: `{ name, version, url }`");
      this.notifier = t, this.configSchema = n, this._configured = !1, this._transport = {
        name:"NULL_TRANSPORT",
        sendSession:we,
        sendReport:we
      }, this._logger = {
        debug:we,
        info:we,
        warn:we,
        error:we
      }, this.plugins = [], this.session = r, this.beforeSession = [], this.breadcrumbs = [], 
      this.app = {}, this.context = undefined, this.device = undefined, this.metaData = undefined, 
      this.request = undefined, this.user = {}, this.BugsnagReport = Q, this.BugsnagBreadcrumb = A, 
      this.BugsnagSession = pe;
    }
    return e.prototype.configure = function() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :{};
      this.config = R.mergeDefaults(ge({}, this.config, e), this.configSchema);
      var t = R.validate(this.config, this.configSchema);
      if (!0 == !t.valid) {
        var n = new Error("Bugsnag configuration error");
        throw n.errors = me(t.errors, function(e) {
          return e.key + " " + e.message + " \n  " + e.value;
        }), n;
      }
      return "function" == typeof this.config.beforeSend && (this.config.beforeSend = [ this.config.beforeSend ]), 
      null !== this.config.appVersion && (this.app.version = this.config.appVersion), 
      this.config.metaData && (this.metaData = this.config.metaData), this.config.user && (this.user = this.config.user), 
      this.config.logger && this.logger(this.config.logger), this._configured = !0, this._logger.debug("Loaded!"), 
      this;
    }, e.prototype.use = function(e) {
      return this.plugins.push(e), e.init(this);
    }, e.prototype.transport = function(e) {
      return this._transport = e, this;
    }, e.prototype.logger = function(e) {
      return this._logger = e, this;
    }, e.prototype.sessionDelegate = function(e) {
      return this._sessionDelegate = e, this;
    }, e.prototype.startSession = function() {
      return this._sessionDelegate ? this._sessionDelegate.startSession(this) :(this._logger.warn("No session implementation is installed"), 
      this);
    }, e.prototype.leaveBreadcrumb = function(e, t, n, r) {
      if (!this._configured) throw new Error("Bugsnag must be configured before calling leaveBreadcrumb()");
      if (e = e || undefined, n = "string" == typeof n ? n :undefined, r = "string" == typeof r ? r :undefined, 
      t = "object" == typeof t && null !== t ? t :undefined, "string" == typeof e || t) {
        var i = new A(e, t, n, r);
        return this.breadcrumbs.push(i), this.breadcrumbs.length > this.config.maxBreadcrumbs && (this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs)), 
        this;
      }
    }, e.prototype.notify = function(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :{};
      if (!this._configured) throw new Error("Bugsnag must be configured before calling report()");
      var n = P(this), r = Se(e, t, this._logger), i = r.err, o = r.errorFramesToSkip, a = r._opts;
      a && (t = a), i || (this._logger.warn('Usage error. notify() called with no "error" parameter'), 
      i = new Error('Bugsnag usage error. notify() called with no "error" parameter')), 
      "object" == typeof t && null !== t || (t = {});
      var s = Q.ensureReport(i, o, 1);
      if (s.app = ge({
        releaseStage:n
      }, s.app, this.app), s.context = s.context || t.context || this.context || undefined, 
      s.device = ge({}, s.device, this.device, t.device), s.request = ge({}, s.request, this.request, t.request), 
      s.user = ge({}, s.user, this.user, t.user), s.metaData = ge({}, s.metaData, this.metaData, t.metaData), 
      s.breadcrumbs = this.breadcrumbs.slice(0), this.session && (this.session.trackError(s), 
      s.session = this.session), t.severity !== undefined && (s.severity = t.severity, 
      s._handledState.severityReason = {
        type:"userSpecifiedSeverity"
      }), be(this.config.notifyReleaseStages) && !ve(this.config.notifyReleaseStages, n)) return this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration"), 
      !1;
      var u = s.severity, c = [].concat(t.beforeSend).concat(this.config.beforeSend);
      return ye(c, function(e, t) {
        return !0 === e || ("function" == typeof t && !1 === t(s) || !!s.isIgnored());
      }, !1) ? (this._logger.debug("Report not sent due to beforeSend callback"), !1) :(this.config.autoBreadcrumbs && this.leaveBreadcrumb(s.errorClass, {
        errorClass:s.errorClass,
        errorMessage:s.errorMessage,
        severity:s.severity,
        stacktrace:s.stacktrace
      }, "error"), u !== s.severity && (s._handledState.severityReason = {
        type:"userCallbackSetSeverity"
      }), this._transport.sendReport(this._logger, this.config, {
        apiKey:s.apiKey || this.config.apiKey,
        notifier:this.notifier,
        events:[ s ]
      }), !0);
    }, e;
  }(), Se = function(e, t, n) {
    var r = void 0, i = 0, o = void 0;
    switch (typeof e) {
     case "string":
      "string" == typeof t ? (n.warn("Usage error. notify() called with (string, string) but expected (error, object)"), 
      r = new Error("Bugsnag usage error. notify() called with (string, string) but expected (error, object)"), 
      o = {
        metaData:{
          notifier:{
            notifyArgs:[ e, t ]
          }
        }
      }) :(r = new Error(String(e)), i += 2);
      break;

     case "number":
     case "boolean":
      r = new Error(String(e));
      break;

     case "function":
      n.warn('Usage error. notify() called with a function as "error" parameter'), r = new Error('Bugsnag usage error. notify() called with a function as "error" parameter');
      break;

     case "object":
      null !== e && (he(e) || e.__isBugsnagReport) ? r = e :null !== e && Te(e) ? (r = new Error(e.message || e.errorMessage), 
      r.name = e.name || e.errorClass, i += 2) :(n.warn('Usage error. notify() called with an unsupported object as "error" parameter. Supply an Error or { name, message } object.'), 
      r = new Error('Bugsnag usage error. notify() called with an unsupported object as "error" parameter. Supply an Error or { name, message } object.'));
    }
    return {
      err:r,
      errorFramesToSkip:i,
      _opts:o
    };
  }, Te = function(e) {
    return !("string" != typeof e.name && "string" != typeof e.errorClass || "string" != typeof e.message && "string" != typeof e.errorMessage);
  }, Ee = xe, Ce = {
    init:function(e) {
      var t = 0;
      e.config.beforeSend.push(function(n) {
        if (t >= e.config.maxEvents) return n.ignore();
        t++;
      }), e.refresh = function() {
        t = 0;
      };
    },
    configSchema:{
      maxEvents:{
        defaultValue:function() {
          return 10;
        },
        message:"should be a positive integer \u2264100",
        validate:function(e) {
          return q(e) && e < 100;
        }
      }
    }
  }, Ne = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ke = R.schema, je = j.map, De = {
    releaseStage:{
      defaultValue:function() {
        return /^localhost(:\d+)?$/.test(window.location.host) ? "development" :"production";
      },
      message:"(string) releaseStage should be set",
      validate:function(e) {
        return "string" == typeof e && e.length;
      }
    },
    collectUserIp:{
      defaultValue:function() {
        return !0;
      },
      message:"(boolean) collectUserIp should true/false",
      validate:function(e) {
        return !0 === e || !1 === e;
      }
    },
    logger:Ne({}, ke.logger, {
      defaultValue:function() {
        return "undefined" != typeof console && "function" == typeof console.debug ? Le() :undefined;
      }
    })
  }, Le = function() {
    var e = {}, t = console.log;
    return je([ "debug", "info", "warn", "error" ], function(n) {
      var r = console[n];
      e[n] = "function" == typeof r ? r.bind(console, "[bugsnag]") :t.bind(console, "[bugsnag]");
    }), e;
  }, Ae = {}, Oe = j.map, qe = j.reduce, Re = j.filter;
  Ae.init = function(e) {
    Oe(He, function(t) {
      var n = console[t];
      console[t] = function() {
        for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        e.leaveBreadcrumb("Console output", qe(i, function(e, t, n) {
          var r = String(t);
          if ("[object Object]" === r) try {
            r = JSON.stringify(t);
          } catch (e) {}
          return e["[" + n + "]"] = r, e;
        }, {
          severity:0 === t.indexOf("group") ? "log" :t
        }), "log"), n.apply(console, i);
      }, console[t]._restore = function() {
        console[t] = n;
      };
    });
  }, Ae.configSchema = {
    consoleBreadcrumbsEnabled:{
      defaultValue:function() {
        return undefined;
      },
      validate:function(e) {
        return !0 === e || !1 === e || e === undefined;
      },
      message:"should be true|false"
    }
  };
  var He = Re([ "log", "debug", "info", "warn", "error" ], function(e) {
    return "undefined" != typeof console && "function" == typeof console[e];
  }), _e = {
    init:function(e) {
      e.config.beforeSend.unshift(function(e) {
        e.context || (e.context = window.location.pathname);
      });
    }
  }, Be = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Me = j.isoDate, Pe = {
    init:function(e) {
      e.config.beforeSend.unshift(function(e) {
        e.device = Be({
          time:Me(),
          locale:navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || navigator.language,
          userAgent:navigator.userAgent
        }, e.device);
      }), e.beforeSession.push(function(e) {
        e.device = {
          userAgent:navigator.userAgent
        };
      });
    }
  }, Fe = {}, Ie = j.reduce;
  Fe = {
    init:function(e) {
      var t = "", n = !1, r = function() {
        return document.documentElement.outerHTML;
      }, i = window.location.href, o = function(e) {
        var o = e.stacktrace[0];
        if (!o || !o.file || !o.lineNumber) return o;
        if (o.file.replace(/#.*$/, "") !== i.replace(/#.*$/, "")) return o;
        n && t || (t = r());
        var a = [ "<!-- DOCUMENT START -->" ].concat(t.split("\n")), s = ze(a, o.lineNumber - 1), u = s.script, c = s.start, l = Ie(u, function(e, t, n) {
          return Math.abs(c + n + 1 - o.lineNumber) > 10 ? e :(e["" + (c + n + 1)] = t, e);
        }, {});
        o.code = l, e.updateMetaData("script", {
          content:u.join("\n")
        });
      };
      t = r(), document.onreadystatechange = function() {
        "interactive" === document.readyState && (t = r(), n = !0);
      }, e.config.beforeSend.unshift(o);
    }
  };
  var $e = /^.*<script.*?>/, We = /<\/script>.*$/, ze = Fe.extractScriptContent = function(e, t) {
    for (var n = t; n < e.length && !We.test(e[n]); ) n++;
    for (var r = n; n > 0 && !$e.test(e[n]); ) n--;
    var i = n, o = e.slice(i, r + 1);
    return o[0] = o[0].replace($e, ""), o[o.length - 1] = o[o.length - 1].replace(We, ""), 
    {
      script:o,
      start:i
    };
  }, Ue = {
    init:function(e) {
      "addEventListener" in window && window.addEventListener("click", function(t) {
        var n = void 0, r = void 0;
        try {
          n = Xe(t.target), r = u(t.target);
        } catch (t) {
          n = "[hidden]", r = "[hidden]", e._logger.error("Cross domain error when tracking click event. See https://docs.bugsnag.com/platforms/browsers/faq/#3-cross-origin-script-errors");
        }
        e.leaveBreadcrumb("UI click", {
          targetText:n,
          targetSelector:r
        }, "user");
      }, !0);
    },
    configSchema:{
      interactionBreadcrumbsEnabled:{
        defaultValue:function() {
          return undefined;
        },
        validate:function(e) {
          return !0 === e || !1 === e || e === undefined;
        },
        message:"should be true|false"
      }
    }
  }, Xe = function(e) {
    var t = e.textContent || e.innerText || "";
    return t || "submit" !== e.type && "button" !== e.type || (t = e.value), t = t.replace(/^\s+|\s+$/g, ""), 
    c(t, 140);
  }, Ve = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ke = {
    init:function(e) {
      e.config.collectUserIp || e.config.beforeSend.push(function(e) {
        e.user = Ve({
          id:"[NOT COLLECTED]"
        }, e.user), e.request = Ve({
          clientIp:"[NOT COLLECTED]"
        }, e.request);
      });
    }
  }, Ge = {};
  Ge.init = function(e) {
    if ("addEventListener" in window) {
      var t = function(t) {
        return function() {
          return e.leaveBreadcrumb(t, {}, "navigation");
        };
      };
      window.addEventListener("pagehide", t("Page hidden"), !0), window.addEventListener("pageshow", t("Page shown"), !0), 
      window.addEventListener("load", t("Page loaded"), !0), window.document.addEventListener("DOMContentLoaded", t("DOMContentLoaded"), !0), 
      window.addEventListener("load", function() {
        return window.addEventListener("popstate", t("Navigated back"), !0);
      }), window.addEventListener("hashchange", function(t) {
        var n = t.oldURL ? {
          from:Je(t.oldURL),
          to:Je(t.newURL),
          state:Ze()
        } :{
          to:Je(window.location.href)
        };
        e.leaveBreadcrumb("Hash changed", n, "navigation");
      }, !0), window.history.replaceState && Qe(e, window.history, "replaceState"), window.history.pushState && Qe(e, window.history, "pushState"), 
      e.leaveBreadcrumb("Bugsnag loaded", {}, "navigation");
    }
  }, Ge.configSchema = {
    navigationBreadcrumbsEnabled:{
      defaultValue:function() {
        return undefined;
      },
      validate:function(e) {
        return !0 === e || !1 === e || e === undefined;
      },
      message:"should be true|false"
    }
  };
  var Je = function(e) {
    var t = document.createElement("A");
    return t.href = e, "" + t.pathname + t.search + t.hash;
  }, Ye = function(e, t, n) {
    var r = Je(window.location.href);
    return {
      title:t,
      state:e,
      prevState:Ze(),
      to:n || r,
      from:r
    };
  }, Qe = function(e, t, n) {
    var r = t[n];
    t[n] = function(i, o, a) {
      e.leaveBreadcrumb("History " + n, Ye(i, o, a), "navigation"), "function" == typeof e.refresh && e.refresh(), 
      e.session && e.startSession(), r.apply(t, [ i, o ].concat(a !== undefined ? a :[]));
    }, t[n]._restore = function() {
      t[n] = r;
    };
  }, Ze = function() {
    try {
      return window.history.state;
    } catch (e) {}
  }, et = {}, tt = "request", nt = "BUGSNAG:SETUP", rt = "BUGSNAG:REQUEST_URL", it = "BUGSNAG:REQUEST_METHOD", ot = void 0;
  et.init = function(e) {
    ot = e, at(), st();
  }, et.configSchema = {
    networkBreadcrumbsEnabled:{
      defaultValue:function() {
        return undefined;
      },
      validate:function(e) {
        return !0 === e || !1 === e || e === undefined;
      },
      message:"should be true|false"
    }
  };
  var at = function() {
    if ("addEventListener" in window.XMLHttpRequest.prototype) {
      var e = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function(t, n) {
        this[rt] = n, this[it] = t, this[nt] && (this.removeEventListener("load", l), this.removeEventListener("error", f)), 
        this.addEventListener("load", l), this.addEventListener("error", f), this[nt] = !0, 
        e.apply(this, arguments);
      };
    }
  }, st = function() {
    if ("fetch" in window) {
      var e = window.fetch;
      window.fetch = function() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        var i = n[0], o = n[1], a = "GET";
        return o && o.method && (a = o.method), new Promise(function(t, r) {
          e.apply(undefined, n).then(function(e) {
            ut(e, a, i), t(e);
          })["catch"](function(e) {
            ct(a, i), r(e);
          });
        });
      };
    }
  }, ut = function(e, t, n) {
    var r = {
      status:e.status,
      request:t + " " + n
    };
    e.status >= 400 ? ot.leaveBreadcrumb("fetch() failed", r, tt) :ot.leaveBreadcrumb("fetch() succeeded", r, tt);
  }, ct = function(e, t) {
    ot.leaveBreadcrumb("fetch() error", {
      request:e + " " + t
    }, tt);
  }, lt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ft = {
    init:function(e) {
      e.config.beforeSend.unshift(function(e) {
        e.request && e.request.url || (e.request = lt({}, e.request, {
          url:window.location.href
        }));
      });
    }
  }, dt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pt = j.map, ht = j.isArray, gt = j.includes, mt = {
    init:function(e) {
      return e.sessionDelegate(yt);
    }
  }, yt = {
    startSession:function(e) {
      var t = e;
      t.session = new e.BugsnagSession(), pt(t.beforeSession, function(e) {
        return e(t);
      });
      var n = P(t);
      return ht(t.config.notifyReleaseStages) && !gt(t.config.notifyReleaseStages, n) ? (t._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration"), 
      t) :(t._transport.sendSession(t._logger, t.config, {
        notifier:t.notifier,
        device:t.device,
        app:dt({
          releaseStage:n
        }, t.app),
        sessions:[ {
          id:t.session.id,
          startedAt:t.session.startedAt,
          user:t.user
        } ]
      }), t);
    }
  }, vt = {}, bt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wt = j.map;
  vt = {
    init:function(e) {
      e.config.beforeSend.push(function(e) {
        e.stacktrace = wt(e.stacktrace, function(e) {
          return bt({}, e, {
            file:xt(e.file)
          });
        });
      });
    }
  };
  var xt = vt._strip = function(e) {
    return "string" == typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") :e;
  }, St = {}, Tt = j.reduce, Et = void 0;
  St.init = function(e) {
    var t = function(t) {
      var n = t.reason, r = !1;
      t.detail && t.detail.reason && (n = t.detail.reason, r = !0);
      var i = {
        severity:"error",
        unhandled:!0,
        severityReason:{
          type:"unhandledPromiseRejection"
        }
      }, o = void 0;
      if (n && F(n)) o = new e.BugsnagReport(n.name, n.message, $.parse(n), i), r && (o.stacktrace = Tt(o.stacktrace, Nt(n), [])); else {
        o = new e.BugsnagReport(n && n.name ? n.name :"UnhandledRejection", n && n.message ? n.message :'Rejection reason was not an Error. See "Promise" tab for more detail.', [], i), 
        o.updateMetaData("promise", "rejection reason", Ct(n));
      }
      e.notify(o);
    };
    "addEventListener" in window ? window.addEventListener("unhandledrejection", t) :window.onunhandledrejection = function(e, n) {
      t({
        detail:{
          reason:e,
          promise:n
        }
      });
    }, Et = t;
  };
  var Ct = function(e) {
    if (null === e || e === undefined) return "undefined (or null)";
    if (he(e)) {
      var t;
      return t = {}, t[Object.prototype.toString.call(e)] = {
        name:e.name,
        message:e.message,
        code:e.code,
        stack:e.stack
      }, t;
    }
    return e;
  }, Nt = function(e) {
    return function(t, n) {
      return n.file === e.toString() ? t :(n.method && (n.method = n.method.replace(/^\s+/, "")), 
      t.concat(n));
    };
  }, kt = {
    init:function(e) {
      var t = function(t, r, i, o, a) {
        if (0 === i && /Script error\.?/.test(t)) return void e._logger.warn("Ignoring cross-domain or eval script error. See https://docs.bugsnag.com/platforms/browsers/faq/#3-cross-origin-script-errors");
        var s = {
          severity:"error",
          unhandled:!0,
          severityReason:{
            type:"unhandledException"
          }
        }, u = void 0;
        if (a) a.name && a.message ? u = new e.BugsnagReport(a.name, a.message, jt(e.BugsnagReport.getStacktrace(a), r, i, o), s) :(u = new e.BugsnagReport("window.onerror", String(a), jt(e.BugsnagReport.getStacktrace(a, 1), r, i, o), s), 
        u.updateMetaData("window onerror", {
          error:a
        })); else if ("object" != typeof t || null === t || r || i || o || a) u = new e.BugsnagReport("window.onerror", String(t), jt(e.BugsnagReport.getStacktrace(a, 1), r, i, o), s), 
        u.updateMetaData("window onerror", {
          event:t
        }); else {
          var c = t.type ? "Event: " + t.type :"window.onerror", l = t.message || t.detail || "";
          u = new e.BugsnagReport(c, l, e.BugsnagReport.getStacktrace(new Error(), 1).slice(1), s), 
          u.updateMetaData("window onerror", {
            event:t
          });
        }
        e.notify(u), "function" == typeof n && n(t, r, i, o, a);
      }, n = window.onerror;
      window.onerror = t;
    }
  }, jt = function(e, t, n, r) {
    var i = e[0];
    return i ? (i.fileName || i.setFileName(t), i.lineNumber || i.setLineNumber(n), 
    i.columnNumber || (r !== undefined ? i.setColumnNumber(r) :window.event && window.event.errorCharacter && i.setColumnNumber(window.event && window.event.errorCharacter)), 
    e) :e;
  }, Dt = function(e, t, n) {
    return JSON.stringify(m(e), t, n);
  }, Lt = 20, At = 25e3, Ot = 8, qt = "...", Rt = function(e) {
    var t = Dt(e);
    if (t.length > 1e6 && (delete e.events[0].metaData, e.events[0].metaData = {
      notifier:"WARNING!\nThe serialized payload was " + t.length / 1e6 + "MB. The limit is 1MB.\nreport.metaData was stripped to make the payload of a deliverable size."
    }, t = Dt(e), t.length > 1e6)) throw new Error("payload exceeded 1MB limit");
    return t;
  }, Ht = {}, _t = j.isoDate;
  Ht = {
    name:"XDomainRequest",
    sendReport:function(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] :function() {}, i = Bt(t.endpoint, window.location.protocol) + "?apiKey=" + encodeURIComponent(t.apiKey) + "&payloadVersion=4.0&sentAt=" + encodeURIComponent(_t()), o = new window.XDomainRequest();
      o.onload = function() {
        r(null, o.responseText);
      }, o.open("POST", i), setTimeout(function() {
        try {
          o.send(Rt(n));
        } catch (t) {
          e.error(t);
        }
      }, 0);
    },
    sendSession:function(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] :function() {}, i = Bt(t.sessionEndpoint, window.location.protocol) + "?apiKey=" + encodeURIComponent(t.apiKey) + "&payloadVersion=1.0&sentAt=" + encodeURIComponent(_t()), o = new window.XDomainRequest();
      o.onload = function() {
        r(null, o.responseText);
      }, o.open("POST", i), setTimeout(function() {
        try {
          o.send(Dt(n));
        } catch (t) {
          e.error(t);
        }
      }, 0);
    }
  };
  var Bt = Ht._matchPageProtocol = function(e, t) {
    return "http:" === t ? e.replace(/^https:/, "http:") :e;
  }, Mt = j.isoDate, Pt = {
    name:"XMLHttpRequest",
    sendReport:function(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] :function() {}, i = t.endpoint, o = new window.XMLHttpRequest();
      o.onreadystatechange = function() {
        o.readyState === window.XMLHttpRequest.DONE && r(null, o.responseText);
      }, o.open("POST", i), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Bugsnag-Api-Key", n.apiKey || t.apiKey), 
      o.setRequestHeader("Bugsnag-Payload-Version", "4.0"), o.setRequestHeader("Bugsnag-Sent-At", Mt());
      try {
        o.send(Rt(n));
      } catch (t) {
        e.error(t);
      }
    },
    sendSession:function(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] :function() {}, i = t.sessionEndpoint, o = new window.XMLHttpRequest();
      o.onreadystatechange = function() {
        o.readyState === window.XMLHttpRequest.DONE && r(null, o.responseText);
      }, o.open("POST", i), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Bugsnag-Api-Key", t.apiKey), 
      o.setRequestHeader("Bugsnag-Payload-Version", "1.0"), o.setRequestHeader("Bugsnag-Sent-At", Mt());
      try {
        o.send(Dt(n));
      } catch (t) {
        e.error(t);
      }
    }
  }, Ft = {}, It = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $t = j.map, Wt = j.reduce, zt = It({}, R.schema, De), Ut = [ kt, St, Pe, _e, ft, Ce, Ae, et, Ge, Ue, Fe, mt, Ke, vt ], Xt = {
    XDomainRequest:Ht,
    XMLHttpRequest:Pt
  };
  Ft = function(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :[];
    "string" == typeof e && (e = {
      apiKey:e
    }), e.sessionTrackingEnabled && (e.autoCaptureSessions = e.sessionTrackingEnabled);
    var n = Wt([].concat(Ut).concat(t), function(e, t) {
      return t.configSchema ? It({}, e, t.configSchema) :e;
    }, zt), r = new Ee({
      name:"Bugsnag JavaScript",
      version:"4.6.3",
      url:"https://github.com/bugsnag/bugsnag-js"
    }, n);
    r.transport(window.XDomainRequest ? Xt.XDomainRequest :Xt.XMLHttpRequest);
    try {
      r.configure(e);
    } catch (e) {
      throw r._logger.warn(e), e.errors && $t(e.errors, r._logger.warn), e;
    }
    return r.use(Pe), r.use(_e), r.use(ft), r.use(Fe), r.use(Ce), r.use(mt), r.use(Ke), 
    r.use(vt), !1 !== r.config.autoNotify && (r.use(kt), r.use(St)), Vt(r.config, "navigationBreadcrumbsEnabled") && r.use(Ge), 
    Vt(r.config, "interactionBreadcrumbsEnabled") && r.use(Ue), Vt(r.config, "networkBreadcrumbsEnabled") && r.use(et), 
    Vt(r.config, "consoleBreadcrumbsEnabled", !1) && r.use(Ae), $t(t, function(e) {
      return r.use(e);
    }), r.config.autoCaptureSessions ? r.startSession() :r;
  };
  var Vt = function(e, t) {
    var n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    return "boolean" == typeof e[t] ? e[t] :e.autoBreadcrumbs && (n || !/^dev(elopment)?$/.test(e.releaseStage));
  };
  return Ft.Bugsnag = {
    Client:Ee,
    Report:Q,
    Session:pe,
    Breadcrumb:A
  }, Ft["default"] = Ft, Ft;
}), function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) :function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } :t(e);
}("undefined" != typeof window ? window :this, function(e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length, n = pe.type(e);
    return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  function r(e, t, n) {
    if (pe.isFunction(t)) return pe.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return pe.grep(e, function(e) {
      return e === t !== n;
    });
    if ("string" == typeof t) {
      if (Te.test(t)) return pe.filter(t, e, n);
      t = pe.filter(t, e);
    }
    return pe.grep(e, function(e) {
      return pe.inArray(e, t) > -1 !== n;
    });
  }
  function i(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  function o(e) {
    var t = {};
    return pe.each(e.match(je) || [], function(e, n) {
      t[n] = !0;
    }), t;
  }
  function a() {
    re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) :(re.detachEvent("onreadystatechange", s), 
    e.detachEvent("onload", s));
  }
  function s() {
    (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), 
    pe.ready());
  }
  function u(e, t, n) {
    if (n === undefined && 1 === e.nodeType) {
      var r = "data-" + t.replace(qe, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(r))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null :+n + "" === n ? +n :Oe.test(n) ? pe.parseJSON(n) :n);
        } catch (e) {}
        pe.data(e, t, n);
      } else n = undefined;
    }
    return n;
  }
  function c(e) {
    var t;
    for (t in e) if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function l(e, t, n, r) {
    if (Ae(e)) {
      var i, o, a = pe.expando, s = e.nodeType, u = s ? pe.cache :e, c = s ? e[a] :e[a] && a;
      if (c && u[c] && (r || u[c].data) || n !== undefined || "string" != typeof t) return c || (c = s ? e[a] = ne.pop() || pe.guid++ :a), 
      u[c] || (u[c] = s ? {} :{
        toJSON:pe.noop
      }), "object" != typeof t && "function" != typeof t || (r ? u[c] = pe.extend(u[c], t) :u[c].data = pe.extend(u[c].data, t)), 
      o = u[c], r || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[pe.camelCase(t)] = n), 
      "string" == typeof t ? null == (i = o[t]) && (i = o[pe.camelCase(t)]) :i = o, i;
    }
  }
  function f(e, t, n) {
    if (Ae(e)) {
      var r, i, o = e.nodeType, a = o ? pe.cache :e, s = o ? e[pe.expando] :pe.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] :a[s].data)) {
          pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) :t in r ? t = [ t ] :(t = pe.camelCase(t), 
          t = t in r ? [ t ] :t.split(" ")), i = t.length;
          for (;i--; ) delete r[t[i]];
          if (n ? !c(r) :!pe.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, c(a[s]))) && (o ? pe.cleanData([ e ], !0) :fe.deleteExpando || a != a.window ? delete a[s] :a[s] = undefined);
      }
    }
  }
  function d(e, t, n, r) {
    var i, o = 1, a = 20, s = r ? function() {
      return r.cur();
    } :function() {
      return pe.css(e, t, "");
    }, u = s(), c = n && n[3] || (pe.cssNumber[t] ? "" :"px"), l = (pe.cssNumber[t] || "px" !== c && +u) && He.exec(pe.css(e, t));
    if (l && l[3] !== c) {
      c = c || l[3], n = n || [], l = +u || 1;
      do {
        o = o || ".5", l /= o, pe.style(e, t, l + c);
      } while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] :+n[2], r && (r.unit = c, 
    r.start = l, r.end = i)), i;
  }
  function p(e) {
    var t = We.split("|"), n = e.createDocumentFragment();
    if (n.createElement) for (;t.length; ) n.createElement(t.pop());
    return n;
  }
  function h(e, t) {
    var n, r, i = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") :"undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") :undefined;
    if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || pe.nodeName(r, t) ? o.push(r) :pe.merge(o, h(r, t));
    return t === undefined || t && pe.nodeName(e, t) ? pe.merge([ e ], o) :o;
  }
  function g(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++) pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"));
  }
  function m(e) {
    Pe.test(e.type) && (e.defaultChecked = e.checked);
  }
  function y(e, t, n, r, i) {
    for (var o, a, s, u, c, l, f, d = e.length, y = p(t), v = [], b = 0; b < d; b++) if ((a = e[b]) || 0 === a) if ("object" === pe.type(a)) pe.merge(v, a.nodeType ? [ a ] :a); else if (Ue.test(a)) {
      for (u = u || y.appendChild(t.createElement("div")), c = (Fe.exec(a) || [ "", "" ])[1].toLowerCase(), 
      f = ze[c] || ze._default, u.innerHTML = f[1] + pe.htmlPrefilter(a) + f[2], o = f[0]; o--; ) u = u.lastChild;
      if (!fe.leadingWhitespace && $e.test(a) && v.push(t.createTextNode($e.exec(a)[0])), 
      !fe.tbody) for (a = "table" !== c || Xe.test(a) ? "<table>" !== f[1] || Xe.test(a) ? 0 :u :u.firstChild, 
      o = a && a.childNodes.length; o--; ) pe.nodeName(l = a.childNodes[o], "tbody") && !l.childNodes.length && a.removeChild(l);
      for (pe.merge(v, u.childNodes), u.textContent = ""; u.firstChild; ) u.removeChild(u.firstChild);
      u = y.lastChild;
    } else v.push(t.createTextNode(a));
    for (u && y.removeChild(u), fe.appendChecked || pe.grep(h(v, "input"), m), b = 0; a = v[b++]; ) if (r && pe.inArray(a, r) > -1) i && i.push(a); else if (s = pe.contains(a.ownerDocument, a), 
    u = h(y.appendChild(a), "script"), s && g(u), n) for (o = 0; a = u[o++]; ) Ie.test(a.type || "") && n.push(a);
    return u = null, y;
  }
  function v() {
    return !0;
  }
  function b() {
    return !1;
  }
  function w() {
    try {
      return re.activeElement;
    } catch (e) {}
  }
  function x(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && (r = r || n, n = undefined);
      for (s in t) x(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = undefined) :null == i && ("string" == typeof n ? (i = r, 
    r = undefined) :(i = r, r = n, n = undefined)), !1 === i) i = b; else if (!i) return e;
    return 1 === o && (a = i, i = function(e) {
      return pe().off(e), a.apply(this, arguments);
    }, i.guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
      pe.event.add(this, t, i, r, n);
    });
  }
  function S(e, t) {
    return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t :t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) :e;
  }
  function T(e) {
    return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e;
  }
  function E(e) {
    var t = rt.exec(e.type);
    return t ? e.type = t[1] :e.removeAttribute("type"), e;
  }
  function C(e, t) {
    if (1 === t.nodeType && pe.hasData(e)) {
      var n, r, i, o = pe._data(e), a = pe._data(t, o), s = o.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s) for (r = 0, i = s[n].length; r < i; r++) pe.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = pe.extend({}, a.data));
    }
  }
  function N(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !fe.noCloneEvent && t[pe.expando]) {
        i = pe._data(t);
        for (r in i.events) pe.removeEvent(t, r, i.handle);
        t.removeAttribute(pe.expando);
      }
      "script" === n && t.text !== e.text ? (T(t).text = e.text, E(t)) :"object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
      fe.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) :"input" === n && Pe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
      t.value !== e.value && (t.value = e.value)) :"option" === n ? t.defaultSelected = t.selected = e.defaultSelected :"input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
  }
  function k(e, t, n, r) {
    t = oe.apply([], t);
    var i, o, a, s, u, c, l = 0, f = e.length, d = f - 1, p = t[0], g = pe.isFunction(p);
    if (g || f > 1 && "string" == typeof p && !fe.checkClone && nt.test(p)) return e.each(function(i) {
      var o = e.eq(i);
      g && (t[0] = p.call(this, i, o.html())), k(o, t, n, r);
    });
    if (f && (c = y(t, e[0].ownerDocument, !1, e, r), i = c.firstChild, 1 === c.childNodes.length && (c = i), 
    i || r)) {
      for (s = pe.map(h(c, "script"), T), a = s.length; l < f; l++) o = c, l !== d && (o = pe.clone(o, !0, !0), 
      a && pe.merge(s, h(o, "script"))), n.call(e[l], o, l);
      if (a) for (u = s[s.length - 1].ownerDocument, pe.map(s, E), l = 0; l < a; l++) o = s[l], 
      Ie.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(u, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) :pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(it, "")));
      c = i = null;
    }
    return e;
  }
  function j(e, t, n) {
    for (var r, i = t ? pe.filter(t, e) :e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || pe.cleanData(h(r)), 
    r.parentNode && (n && pe.contains(r.ownerDocument, r) && g(h(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  function D(e, t) {
    var n = pe(t.createElement(e)).appendTo(t.body), r = pe.css(n[0], "display");
    return n.detach(), r;
  }
  function L(e) {
    var t = re, n = ut[e];
    return n || (n = D(e, t), "none" !== n && n || (st = (st || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), 
    t = (st[0].contentWindow || st[0].contentDocument).document, t.write(), t.close(), 
    n = D(e, t), st.detach()), ut[e] = n), n;
  }
  function A(e, t) {
    return {
      get:function() {
        return e() ? void delete this.get :(this.get = t).apply(this, arguments);
      }
    };
  }
  function O(e) {
    if (e in Tt) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--; ) if ((e = St[n] + t) in Tt) return e;
  }
  function q(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = pe._data(r, "olddisplay"), 
    n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Be(r) && (o[a] = pe._data(r, "olddisplay", L(r.nodeName)))) :(i = Be(r), 
    (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n :pe.css(r, "display"))));
    for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" :"none"));
    return e;
  }
  function R(e, t, n) {
    var r = bt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") :t;
  }
  function H(e, t, n, r, i) {
    for (var o = n === (r ? "border" :"content") ? 4 :"width" === t ? 1 :0, a = 0; o < 4; o += 2) "margin" === n && (a += pe.css(e, n + _e[o], !0, i)), 
    r ? ("content" === n && (a -= pe.css(e, "padding" + _e[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + _e[o] + "Width", !0, i))) :(a += pe.css(e, "padding" + _e[o], !0, i), 
    "padding" !== n && (a += pe.css(e, "border" + _e[o] + "Width", !0, i)));
    return a;
  }
  function _(t, n, r) {
    var i = !0, o = "width" === n ? t.offsetWidth :t.offsetHeight, a = pt(t), s = fe.boxSizing && "border-box" === pe.css(t, "boxSizing", !1, a);
    if (re.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 
    o <= 0 || null == o) {
      if (o = ht(t, n, a), (o < 0 || null == o) && (o = t.style[n]), lt.test(o)) return o;
      i = s && (fe.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0;
    }
    return o + H(t, n, r || (s ? "border" :"content"), i, a) + "px";
  }
  function B(e, t, n, r, i) {
    return new B.prototype.init(e, t, n, r, i);
  }
  function M() {
    return e.setTimeout(function() {
      Et = undefined;
    }), Et = pe.now();
  }
  function P(e, t) {
    var n, r = {
      height:e
    }, i = 0;
    for (t = t ? 1 :0; i < 4; i += 2 - t) n = _e[i], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function F(e, t, n) {
    for (var r, i = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }
  function I(e, t, n) {
    var r, i, o, a, s, u, c, l = this, f = {}, d = e.style, p = e.nodeType && Be(e), h = pe._data(e, "fxshow");
    n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, 
    u = s.empty.fire, s.empty.fire = function() {
      s.unqueued || u();
    }), s.unqueued++, l.always(function() {
      l.always(function() {
        s.unqueued--, pe.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
    c = pe.css(e, "display"), "inline" === ("none" === c ? pe._data(e, "olddisplay") || L(e.nodeName) :c) && "none" === pe.css(e, "float") && (fe.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? d.zoom = 1 :d.display = "inline-block")), 
    n.overflow && (d.overflow = "hidden", fe.shrinkWrapBlocks() || l.always(function() {
      d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
    }));
    for (r in t) if (i = t[r], Nt.exec(i)) {
      if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" :"show")) {
        if ("show" !== i || !h || h[r] === undefined) continue;
        p = !0;
      }
      f[r] = h && h[r] || pe.style(e, r);
    } else c = undefined;
    if (pe.isEmptyObject(f)) "inline" === ("none" === c ? L(e.nodeName) :c) && (d.display = c); else {
      h ? "hidden" in h && (p = h.hidden) :h = pe._data(e, "fxshow", {}), o && (h.hidden = !p), 
      p ? pe(e).show() :l.done(function() {
        pe(e).hide();
      }), l.done(function() {
        var t;
        pe._removeData(e, "fxshow");
        for (t in f) pe.style(e, t, f[t]);
      });
      for (r in f) a = F(p ? h[r] :0, r, l), r in h || (h[r] = a.start, p && (a.end = a.start, 
      a.start = "width" === r || "height" === r ? 1 :0));
    }
  }
  function $(e, t) {
    var n, r, i, o, a;
    for (n in e) if (r = pe.camelCase(n), i = t[r], o = e[n], pe.isArray(o) && (i = o[1], 
    o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = pe.cssHooks[r]) && "expand" in a) {
      o = a.expand(o), delete e[r];
      for (n in o) n in e || (e[n] = o[n], t[n] = i);
    } else t[r] = i;
  }
  function W(e, t, n) {
    var r, i, o = 0, a = W.prefilters.length, s = pe.Deferred().always(function() {
      delete u.elem;
    }), u = function() {
      if (i) return !1;
      for (var t = Et || M(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; a < u; a++) c.tweens[a].run(o);
      return s.notifyWith(e, [ c, o, n ]), o < 1 && u ? n :(s.resolveWith(e, [ c ]), !1);
    }, c = s.promise({
      elem:e,
      props:pe.extend({}, t),
      opts:pe.extend(!0, {
        specialEasing:{},
        easing:pe.easing._default
      }, n),
      originalProperties:t,
      originalOptions:n,
      startTime:Et || M(),
      duration:n.duration,
      tweens:[],
      createTween:function(t, n) {
        var r = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(r), r;
      },
      stop:function(t) {
        var n = 0, r = t ? c.tweens.length :0;
        if (i) return this;
        for (i = !0; n < r; n++) c.tweens[n].run(1);
        return t ? (s.notifyWith(e, [ c, 1, 0 ]), s.resolveWith(e, [ c, t ])) :s.rejectWith(e, [ c, t ]), 
        this;
      }
    }), l = c.props;
    for ($(l, c.opts.specialEasing); o < a; o++) if (r = W.prefilters[o].call(c, e, l, c.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(r.stop, r)), 
    r;
    return pe.map(l, F, c), pe.isFunction(c.opts.start) && c.opts.start.call(e, c), 
    pe.fx.timer(pe.extend(u, {
      elem:e,
      anim:c,
      queue:c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
  }
  function z(e) {
    return pe.attr(e, "class") || "";
  }
  function U(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0, o = t.toLowerCase().match(je) || [];
      if (pe.isFunction(n)) for (;r = o[i++]; ) "+" === r.charAt(0) ? (r = r.slice(1) || "*", 
      (e[r] = e[r] || []).unshift(n)) :(e[r] = e[r] || []).push(n);
    };
  }
  function X(e, t, n, r) {
    function i(s) {
      var u;
      return o[s] = !0, pe.each(e[s] || [], function(e, s) {
        var c = s(t, n, r);
        return "string" != typeof c || a || o[c] ? a ? !(u = c) :void 0 :(t.dataTypes.unshift(c), 
        i(c), !1);
      }), u;
    }
    var o = {}, a = e === Jt;
    return i(t.dataTypes[0]) || !o["*"] && i("*");
  }
  function V(e, t) {
    var n, r, i = pe.ajaxSettings.flatOptions || {};
    for (r in t) t[r] !== undefined && ((i[r] ? e :n || (n = {}))[r] = t[r]);
    return n && pe.extend(!0, e, n), e;
  }
  function K(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
    i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i) for (a in s) if (s[a] && s[a].test(i)) {
      u.unshift(a);
      break;
    }
    if (u[0] in n) o = u[0]; else {
      for (a in n) {
        if (!u[0] || e.converters[a + " " + u[0]]) {
          o = a;
          break;
        }
        r || (r = a);
      }
      o = o || r;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function G(e, t, n, r) {
    var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
    if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (o = l.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
      if (!(a = c[u + " " + o] || c["* " + o])) for (i in c) if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
        !0 === a ? a = c[i] :!0 !== c[i] && (o = s[0], l.unshift(s[1]));
        break;
      }
      if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
        t = a(t);
      } catch (e) {
        return {
          state:"parsererror",
          error:a ? e :"No conversion from " + u + " to " + o
        };
      }
    }
    return {
      state:"success",
      data:t
    };
  }
  function J(e) {
    return e.style && e.style.display || pe.css(e, "display");
  }
  function Y(e) {
    for (;e && 1 === e.nodeType; ) {
      if ("none" === J(e) || "hidden" === e.type) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  function Q(e, t, n, r) {
    var i;
    if (pe.isArray(t)) pe.each(t, function(t, i) {
      n || tn.test(e) ? r(e, i) :Q(e + "[" + ("object" == typeof i && null != i ? t :"") + "]", i, n, r);
    }); else if (n || "object" !== pe.type(t)) r(e, t); else for (i in t) Q(e + "[" + i + "]", t[i], n, r);
  }
  function Z() {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }
  function ee() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function te(e) {
    return pe.isWindow(e) ? e :9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var ne = [], re = e.document, ie = ne.slice, oe = ne.concat, ae = ne.push, se = ne.indexOf, ue = {}, ce = ue.toString, le = ue.hasOwnProperty, fe = {}, de = "1.12.1", pe = function(e, t) {
    return new pe.fn.init(e, t);
  }, he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, me = /-([\da-z])/gi, ye = function(e, t) {
    return t.toUpperCase();
  };
  pe.fn = pe.prototype = {
    jquery:de,
    constructor:pe,
    selector:"",
    length:0,
    toArray:function() {
      return ie.call(this);
    },
    get:function(e) {
      return null != e ? e < 0 ? this[e + this.length] :this[e] :ie.call(this);
    },
    pushStack:function(e) {
      var t = pe.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each:function(e) {
      return pe.each(this, e);
    },
    map:function(e) {
      return this.pushStack(pe.map(this, function(t, n) {
        return e.call(t, n, t);
      }));
    },
    slice:function() {
      return this.pushStack(ie.apply(this, arguments));
    },
    first:function() {
      return this.eq(0);
    },
    last:function() {
      return this.eq(-1);
    },
    eq:function(e) {
      var t = this.length, n = +e + (e < 0 ? t :0);
      return this.pushStack(n >= 0 && n < t ? [ this[n] ] :[]);
    },
    end:function() {
      return this.prevObject || this.constructor();
    },
    push:ae,
    sort:ne.sort,
    splice:ne.splice
  }, pe.extend = pe.fn.extend = function() {
    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
    for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), 
    s === u && (a = this, s--); s < u; s++) if (null != (i = arguments[s])) for (r in i) e = a[r], 
    n = i[r], a !== n && (c && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, 
    o = e && pe.isArray(e) ? e :[]) :o = e && pe.isPlainObject(e) ? e :{}, a[r] = pe.extend(c, o, n)) :n !== undefined && (a[r] = n));
    return a;
  }, pe.extend({
    expando:"jQuery" + (de + Math.random()).replace(/\D/g, ""),
    isReady:!0,
    error:function(e) {
      throw new Error(e);
    },
    noop:function() {},
    isFunction:function(e) {
      return "function" === pe.type(e);
    },
    isArray:Array.isArray || function(e) {
      return "array" === pe.type(e);
    },
    isWindow:function(e) {
      return null != e && e == e.window;
    },
    isNumeric:function(e) {
      var t = e && e.toString();
      return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0;
    },
    isEmptyObject:function(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    isPlainObject:function(e) {
      var t;
      if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
      try {
        if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (e) {
        return !1;
      }
      if (!fe.ownFirst) for (t in e) return le.call(e, t);
      for (t in e) ;
      return t === undefined || le.call(e, t);
    },
    type:function(e) {
      return null == e ? e + "" :"object" == typeof e || "function" == typeof e ? ue[ce.call(e)] || "object" :typeof e;
    },
    globalEval:function(t) {
      t && pe.trim(t) && (e.execScript || function(t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase:function(e) {
      return e.replace(ge, "ms-").replace(me, ye);
    },
    nodeName:function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each:function(e, t) {
      var r, i = 0;
      if (n(e)) for (r = e.length; i < r && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
      return e;
    },
    trim:function(e) {
      return null == e ? "" :(e + "").replace(he, "");
    },
    makeArray:function(e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [ e ] :e) :ae.call(r, e)), 
      r;
    },
    inArray:function(e, t, n) {
      var r;
      if (t) {
        if (se) return se.call(t, e, n);
        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) :n :0; n < r; n++) if (n in t && t[n] === e) return n;
      }
      return -1;
    },
    merge:function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; ) e[i++] = t[r++];
      if (n !== n) for (;t[r] !== undefined; ) e[i++] = t[r++];
      return e.length = i, e;
    },
    grep:function(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map:function(e, t, r) {
      var i, o, a = 0, s = [];
      if (n(e)) for (i = e.length; a < i; a++) null != (o = t(e[a], a, r)) && s.push(o); else for (a in e) null != (o = t(e[a], a, r)) && s.push(o);
      return oe.apply([], s);
    },
    guid:1,
    proxy:function(e, t) {
      var n, r, i;
      return "string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e) ? (n = ie.call(arguments, 2), 
      r = function() {
        return e.apply(t || this, n.concat(ie.call(arguments)));
      }, r.guid = e.guid = e.guid || pe.guid++, r) :undefined;
    },
    now:function() {
      return +new Date();
    },
    support:fe
  }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), 
  pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    ue["[object " + t + "]"] = t.toLowerCase();
  });
  var ve = function(e) {
    function t(e, t, n, r) {
      var i, o, a, s, u, c, f, p, h = t && t.ownerDocument, g = t ? t.nodeType :9;
      if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
      if (!r && ((t ? t.ownerDocument || t :F) !== O && A(t), t = t || O, R)) {
        if (11 !== g && (c = ye.exec(e))) if (i = c[1]) {
          if (9 === g) {
            if (!(a = t.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (h && (a = h.getElementById(i)) && M(t, a) && a.id === i) return n.push(a), 
          n;
        } else {
          if (c[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
          if ((i = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), 
          n;
        }
        if (x.qsa && !U[e + " "] && (!H || !H.test(e))) {
          if (1 !== g) h = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") :t.setAttribute("id", s = P), 
            f = C(e), o = f.length, u = de.test(s) ? "#" + s :"[id='" + s + "']"; o--; ) f[o] = u + " " + d(f[o]);
            p = f.join(","), h = ve.test(e) && l(t.parentNode) || t;
          }
          if (p) try {
            return Q.apply(n, h.querySelectorAll(p)), n;
          } catch (e) {} finally {
            s === P && t.removeAttribute("id");
          }
        }
      }
      return k(e.replace(se, "$1"), t, n, r);
    }
    function n() {
      function e(n, r) {
        return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = r;
      }
      var t = [];
      return e;
    }
    function r(e) {
      return e[P] = !0, e;
    }
    function i(e) {
      var t = O.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) S.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r) return r;
      if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
      return e ? 1 :-1;
    }
    function s(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function u(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function c(e) {
      return r(function(t) {
        return t = +t, r(function(n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    function l(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function f() {}
    function d(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function p(e, t, n) {
      var r = t.dir, i = n && "parentNode" === r, o = $++;
      return t.first ? function(t, n, o) {
        for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
      } :function(t, n, a) {
        var s, u, c, l = [ I, o ];
        if (a) {
          for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
        } else for (;t = t[r]; ) if (1 === t.nodeType || i) {
          if (c = t[P] || (t[P] = {}), u = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = u[r]) && s[0] === I && s[1] === o) return l[2] = s[2];
          if (u[r] = l, l[2] = e(t, n, a)) return !0;
        }
      };
    }
    function h(e) {
      return e.length > 1 ? function(t, n, r) {
        for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
        return !0;
      } :e[0];
    }
    function g(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
      return r;
    }
    function m(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
      c && t.push(s)));
      return a;
    }
    function y(e, t, n, i, o, a) {
      return i && !i[P] && (i = y(i)), o && !o[P] && (o = y(o, a)), r(function(r, a, s, u) {
        var c, l, f, d = [], p = [], h = a.length, y = r || g(t || "*", s.nodeType ? [ s ] :s, []), v = !e || !r && t ? y :m(y, d, e, s, u), b = n ? o || (r ? e :h || i) ? [] :a :v;
        if (n && n(v, b, s, u), i) for (c = m(b, p), i(c, [], s, u), l = c.length; l--; ) (f = c[l]) && (b[p[l]] = !(v[p[l]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (c = [], l = b.length; l--; ) (f = b[l]) && c.push(v[l] = f);
              o(null, b = [], c, u);
            }
            for (l = b.length; l--; ) (f = b[l]) && (c = o ? ee(r, f) :d[l]) > -1 && (r[c] = !(a[c] = f));
          }
        } else b = m(b === a ? b.splice(h, b.length) :b), o ? o(null, a, b, u) :Q.apply(a, b);
      });
    }
    function v(e) {
      for (var t, n, r, i = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], s = o ? 1 :0, u = p(function(e) {
        return e === t;
      }, a, !0), c = p(function(e) {
        return ee(t, e) > -1;
      }, a, !0), l = [ function(e, n, r) {
        var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) :c(e, n, r));
        return t = null, i;
      } ]; s < i; s++) if (n = S.relative[e[s].type]) l = [ p(h(l), n) ]; else {
        if (n = S.filter[e[s].type].apply(null, e[s].matches), n[P]) {
          for (r = ++s; r < i && !S.relative[e[r].type]; r++) ;
          return y(s > 1 && h(l), s > 1 && d(e.slice(0, s - 1).concat({
            value:" " === e[s - 2].type ? "*" :""
          })).replace(se, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && d(e));
        }
        l.push(n);
      }
      return h(l);
    }
    function b(e, n) {
      var i = n.length > 0, o = e.length > 0, a = function(r, a, s, u, c) {
        var l, f, d, p = 0, h = "0", g = r && [], y = [], v = j, b = r || o && S.find.TAG("*", c), w = I += null == v ? 1 :Math.random() || .1, x = b.length;
        for (c && (j = a === O || a || c); h !== x && null != (l = b[h]); h++) {
          if (o && l) {
            for (f = 0, a || l.ownerDocument === O || (A(l), s = !R); d = e[f++]; ) if (d(l, a || O, s)) {
              u.push(l);
              break;
            }
            c && (I = w);
          }
          i && ((l = !d && l) && p--, r && g.push(l));
        }
        if (p += h, i && h !== p) {
          for (f = 0; d = n[f++]; ) d(g, y, a, s);
          if (r) {
            if (p > 0) for (;h--; ) g[h] || y[h] || (y[h] = J.call(u));
            y = m(y);
          }
          Q.apply(u, y), c && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(u);
        }
        return c && (I = w, j = v), g;
      };
      return i ? r(a) :a;
    }
    var w, x, S, T, E, C, N, k, j, D, L, A, O, q, R, H, _, B, M, P = "sizzle" + 1 * new Date(), F = e.document, I = 0, $ = 0, W = n(), z = n(), U = n(), X = function(e, t) {
      return e === t && (L = !0), 0;
    }, V = 1 << 31, K = {}.hasOwnProperty, G = [], J = G.pop, Y = G.push, Q = G.push, Z = G.slice, ee = function(e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
      return -1;
    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe), de = new RegExp("^" + re + "$"), pe = {
      ID:new RegExp("^#(" + re + ")"),
      CLASS:new RegExp("^\\.(" + re + ")"),
      TAG:new RegExp("^(" + re + "|[*])"),
      ATTR:new RegExp("^" + ie),
      PSEUDO:new RegExp("^" + oe),
      CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
      bool:new RegExp("^(?:" + te + ")$", "i"),
      needsContext:new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
    }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), xe = function(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t :r < 0 ? String.fromCharCode(r + 65536) :String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    }, Se = function() {
      A();
    };
    try {
      Q.apply(G = Z.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType;
    } catch (e) {
      Q = {
        apply:G.length ? function(e, t) {
          Y.apply(e, Z.call(t));
        } :function(e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
          e.length = n - 1;
        }
      };
    }
    x = t.support = {}, E = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, A = t.setDocument = function(e) {
      var t, n, r = e ? e.ownerDocument || e :F;
      return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, q = O.documentElement, 
      R = !E(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) :n.attachEvent && n.attachEvent("onunload", Se)), 
      x.attributes = i(function(e) {
        return e.className = "i", !e.getAttribute("className");
      }), x.getElementsByTagName = i(function(e) {
        return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length;
      }), x.getElementsByClassName = me.test(O.getElementsByClassName), x.getById = i(function(e) {
        return q.appendChild(e).id = P, !O.getElementsByName || !O.getElementsByName(P).length;
      }), x.getById ? (S.find.ID = function(e, t) {
        if ("undefined" != typeof t.getElementById && R) {
          var n = t.getElementById(e);
          return n ? [ n ] :[];
        }
      }, S.filter.ID = function(e) {
        var t = e.replace(we, xe);
        return function(e) {
          return e.getAttribute("id") === t;
        };
      }) :(delete S.find.ID, S.filter.ID = function(e) {
        var t = e.replace(we, xe);
        return function(e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), S.find.TAG = x.getElementsByTagName ? function(e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) :x.qsa ? t.querySelectorAll(e) :void 0;
      } :function(e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, S.find.CLASS = x.getElementsByClassName && function(e, t) {
        if ("undefined" != typeof t.getElementsByClassName && R) return t.getElementsByClassName(e);
      }, _ = [], H = [], (x.qsa = me.test(O.querySelectorAll)) && (i(function(e) {
        q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
        e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"), 
        e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"), 
        e.querySelectorAll("[id~=" + P + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), 
        e.querySelectorAll("a#" + P + "+*").length || H.push(".#.+[+~]");
      }), i(function(e) {
        var t = O.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="), 
        e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
        H.push(",.*:");
      })), (x.matchesSelector = me.test(B = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
        x.disconnectedMatch = B.call(e, "div"), B.call(e, "[s!='']:x"), _.push("!=", oe);
      }), H = H.length && new RegExp(H.join("|")), _ = _.length && new RegExp(_.join("|")), 
      t = me.test(q.compareDocumentPosition), M = t || me.test(q.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement :e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) :e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } :function(e, t) {
        if (t) for (;t = t.parentNode; ) if (t === e) return !0;
        return !1;
      }, X = t ? function(e, t) {
        if (e === t) return L = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) :1, 
        1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === F && M(F, e) ? -1 :t === O || t.ownerDocument === F && M(F, t) ? 1 :D ? ee(D, e) - ee(D, t) :0 :4 & n ? -1 :1);
      } :function(e, t) {
        if (e === t) return L = !0, 0;
        var n, r = 0, i = e.parentNode, o = t.parentNode, s = [ e ], u = [ t ];
        if (!i || !o) return e === O ? -1 :t === O ? 1 :i ? -1 :o ? 1 :D ? ee(D, e) - ee(D, t) :0;
        if (i === o) return a(e, t);
        for (n = e; n = n.parentNode; ) s.unshift(n);
        for (n = t; n = n.parentNode; ) u.unshift(n);
        for (;s[r] === u[r]; ) r++;
        return r ? a(s[r], u[r]) :s[r] === F ? -1 :u[r] === F ? 1 :0;
      }, O) :O;
    }, t.matches = function(e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== O && A(e), n = n.replace(le, "='$1']"), x.matchesSelector && R && !U[n + " "] && (!_ || !_.test(n)) && (!H || !H.test(n))) try {
        var r = B.call(e, n);
        if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}
      return t(n, O, null, [ e ]).length > 0;
    }, t.contains = function(e, t) {
      return (e.ownerDocument || e) !== O && A(e), M(e, t);
    }, t.attr = function(e, t) {
      (e.ownerDocument || e) !== O && A(e);
      var n = S.attrHandle[t.toLowerCase()], r = n && K.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !R) :undefined;
      return r !== undefined ? r :x.attributes || !R ? e.getAttribute(t) :(r = e.getAttributeNode(t)) && r.specified ? r.value :null;
    }, t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function(e) {
      var t, n = [], r = 0, i = 0;
      if (L = !x.detectDuplicates, D = !x.sortStable && e.slice(0), e.sort(X), L) {
        for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
        for (;r--; ) e.splice(n[r], 1);
      }
      return D = null, e;
    }, T = t.getText = function(e) {
      var t, n = "", r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (;t = e[r++]; ) n += T(t);
      return n;
    }, S = t.selectors = {
      cacheLength:50,
      createPseudo:r,
      match:pe,
      attrHandle:{},
      find:{},
      relative:{
        ">":{
          dir:"parentNode",
          first:!0
        },
        " ":{
          dir:"parentNode"
        },
        "+":{
          dir:"previousSibling",
          first:!0
        },
        "~":{
          dir:"previousSibling"
        }
      },
      preFilter:{
        ATTR:function(e) {
          return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), 
          "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD:function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
          e[4] = +(e[4] ? e[5] + (e[6] || 1) :2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) :e[3] && t.error(e[0]), 
          e;
        },
        PSEUDO:function(e) {
          var t, n = !e[6] && e[2];
          return pe.CHILD.test(e[0]) ? null :(e[3] ? e[2] = e[4] || e[5] || "" :n && fe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
          e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter:{
        TAG:function(e) {
          var t = e.replace(we, xe).toLowerCase();
          return "*" === e ? function() {
            return !0;
          } :function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS:function(e) {
          var t = W[e + " "];
          return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR:function(e, n, r) {
          return function(i) {
            var o = t.attr(i, e);
            return null == o ? "!=" === n :!n || (o += "", "=" === n ? o === r :"!=" === n ? o !== r :"^=" === n ? r && 0 === o.indexOf(r) :"*=" === n ? r && o.indexOf(r) > -1 :"$=" === n ? r && o.slice(-r.length) === r :"~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 :"|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
          };
        },
        CHILD:function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
          return 1 === r && 0 === i ? function(e) {
            return !!e.parentNode;
          } :function(t, n, u) {
            var c, l, f, d, p, h, g = o !== a ? "nextSibling" :"previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s, b = !1;
            if (m) {
              if (o) {
                for (;g; ) {
                  for (d = t; d = d[g]; ) if (s ? d.nodeName.toLowerCase() === y :1 === d.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling";
                }
                return !0;
              }
              if (h = [ a ? m.firstChild :m.lastChild ], a && v) {
                for (d = m, f = d[P] || (d[P] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), 
                c = l[e] || [], p = c[0] === I && c[1], b = p && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop(); ) if (1 === d.nodeType && ++b && d === t) {
                  l[e] = [ I, p, b ];
                  break;
                }
              } else if (v && (d = t, f = d[P] || (d[P] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), 
              c = l[e] || [], p = c[0] === I && c[1], b = p), !1 === b) for (;(d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y :1 !== d.nodeType) || !++b || (v && (f = d[P] || (d[P] = {}), 
              l = f[d.uniqueID] || (f[d.uniqueID] = {}), l[e] = [ I, b ]), d !== t)); ) ;
              return (b -= i) === r || b % r == 0 && b / r >= 0;
            }
          };
        },
        PSEUDO:function(e, n) {
          var i, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[P] ? o(n) :o.length > 1 ? (i = [ e, e, "", n ], S.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
            for (var r, i = o(e, n), a = i.length; a--; ) r = ee(e, i[a]), e[r] = !(t[r] = i[a]);
          }) :function(e) {
            return o(e, 0, i);
          }) :o;
        }
      },
      pseudos:{
        not:r(function(e) {
          var t = [], n = [], i = N(e.replace(se, "$1"));
          return i[P] ? r(function(e, t, n, r) {
            for (var o, a = i(e, null, r, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
          }) :function(e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has:r(function(e) {
          return function(n) {
            return t(e, n).length > 0;
          };
        }),
        contains:r(function(e) {
          return e = e.replace(we, xe), function(t) {
            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
          };
        }),
        lang:r(function(e) {
          return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(), 
          function(t) {
            var n;
            do {
              if (n = R ? t.lang :t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target:function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root:function(e) {
          return e === q;
        },
        focus:function(e) {
          return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled:function(e) {
          return !1 === e.disabled;
        },
        disabled:function(e) {
          return !0 === e.disabled;
        },
        checked:function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected:function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty:function(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent:function(e) {
          return !S.pseudos.empty(e);
        },
        header:function(e) {
          return ge.test(e.nodeName);
        },
        input:function(e) {
          return he.test(e.nodeName);
        },
        button:function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text:function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first:c(function() {
          return [ 0 ];
        }),
        last:c(function(e, t) {
          return [ t - 1 ];
        }),
        eq:c(function(e, t, n) {
          return [ n < 0 ? n + t :n ];
        }),
        even:c(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd:c(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt:c(function(e, t, n) {
          for (var r = n < 0 ? n + t :n; --r >= 0; ) e.push(r);
          return e;
        }),
        gt:c(function(e, t, n) {
          for (var r = n < 0 ? n + t :n; ++r < t; ) e.push(r);
          return e;
        })
      }
    }, S.pseudos.nth = S.pseudos.eq;
    for (w in {
      radio:!0,
      checkbox:!0,
      file:!0,
      password:!0,
      image:!0
    }) S.pseudos[w] = s(w);
    for (w in {
      submit:!0,
      reset:!0
    }) S.pseudos[w] = u(w);
    return f.prototype = S.filters = S.pseudos, S.setFilters = new f(), C = t.tokenize = function(e, n) {
      var r, i, o, a, s, u, c, l = z[e + " "];
      if (l) return n ? 0 :l.slice(0);
      for (s = e, u = [], c = S.preFilter; s; ) {
        r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
        r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
          value:r,
          type:i[0].replace(se, " ")
        }), s = s.slice(r.length));
        for (a in S.filter) !(i = pe[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), 
        o.push({
          value:r,
          type:a,
          matches:i
        }), s = s.slice(r.length));
        if (!r) break;
      }
      return n ? s.length :s ? t.error(e) :z(e, u).slice(0);
    }, N = t.compile = function(e, t) {
      var n, r = [], i = [], o = U[e + " "];
      if (!o) {
        for (t || (t = C(e)), n = t.length; n--; ) o = v(t[n]), o[P] ? r.push(o) :i.push(o);
        o = U(e, b(i, r)), o.selector = e;
      }
      return o;
    }, k = t.select = function(e, t, n, r) {
      var i, o, a, s, u, c = "function" == typeof e && e, f = !r && C(e = c.selector || e);
      if (n = n || [], 1 === f.length) {
        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && R && S.relative[o[1].type]) {
          if (!(t = (S.find.ID(a.matches[0].replace(we, xe), t) || [])[0])) return n;
          c && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        for (i = pe.needsContext.test(e) ? 0 :o.length; i-- && (a = o[i], !S.relative[s = a.type]); ) if ((u = S.find[s]) && (r = u(a.matches[0].replace(we, xe), ve.test(o[0].type) && l(t.parentNode) || t))) {
          if (o.splice(i, 1), !(e = r.length && d(o))) return Q.apply(n, r), n;
          break;
        }
      }
      return (c || N(e, f))(r, t, !R, n, !t || ve.test(e) && l(t.parentNode) || t), n;
    }, x.sortStable = P.split("").sort(X).join("") === P, x.detectDuplicates = !!L, 
    A(), x.sortDetached = i(function(e) {
      return 1 & e.compareDocumentPosition(O.createElement("div"));
    }), i(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || o("type|href|height|width", function(e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 :2);
    }), x.attributes && i(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || o("value", function(e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), i(function(e) {
      return null == e.getAttribute("disabled");
    }) || o(te, function(e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() :(r = e.getAttributeNode(t)) && r.specified ? r.value :null;
    }), t;
  }(e);
  pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, 
  pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains;
  var be = function(e, t, n) {
    for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
      if (i && pe(e).is(n)) break;
      r.push(e);
    }
    return r;
  }, we = function(e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n;
  }, xe = pe.expr.match.needsContext, Se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Te = /^.[^:#\[\.,]*$/;
  pe.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [ r ] :[] :pe.find.matches(e, pe.grep(t, function(e) {
      return 1 === e.nodeType;
    }));
  }, pe.fn.extend({
    find:function(e) {
      var t, n = [], r = this, i = r.length;
      if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
        for (t = 0; t < i; t++) if (pe.contains(r[t], this)) return !0;
      }));
      for (t = 0; t < i; t++) pe.find(e, r[t], n);
      return n = this.pushStack(i > 1 ? pe.unique(n) :n), n.selector = this.selector ? this.selector + " " + e :e, 
      n;
    },
    filter:function(e) {
      return this.pushStack(r(this, e || [], !1));
    },
    not:function(e) {
      return this.pushStack(r(this, e || [], !0));
    },
    is:function(e) {
      return !!r(this, "string" == typeof e && xe.test(e) ? pe(e) :e || [], !1).length;
    }
  });
  var Ee, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (pe.fn.init = function(e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || Ee, "string" == typeof e) {
      if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] :Ce.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) :this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof pe ? t[0] :t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t :re, !0)), 
        Se.test(r[1]) && pe.isPlainObject(t)) for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) :this.attr(r, t[r]);
        return this;
      }
      if ((i = re.getElementById(r[2])) && i.parentNode) {
        if (i.id !== r[2]) return Ee.find(e);
        this.length = 1, this[0] = i;
      }
      return this.context = re, this.selector = e, this;
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) :pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) :e(pe) :(e.selector !== undefined && (this.selector = e.selector, 
    this.context = e.context), pe.makeArray(e, this));
  }).prototype = pe.fn, Ee = pe(re);
  var Ne = /^(?:parents|prev(?:Until|All))/, ke = {
    children:!0,
    contents:!0,
    next:!0,
    prev:!0
  };
  pe.fn.extend({
    has:function(e) {
      var t, n = pe(e, this), r = n.length;
      return this.filter(function() {
        for (t = 0; t < r; t++) if (pe.contains(this, n[t])) return !0;
      });
    },
    closest:function(e, t) {
      for (var n, r = 0, i = this.length, o = [], a = xe.test(e) || "string" != typeof e ? pe(e, t || this.context) :0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 :1 === n.nodeType && pe.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(o.length > 1 ? pe.uniqueSort(o) :o);
    },
    index:function(e) {
      return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) :pe.inArray(e.jquery ? e[0] :e, this) :this[0] && this[0].parentNode ? this.first().prevAll().length :-1;
    },
    add:function(e, t) {
      return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
    },
    addBack:function(e) {
      return this.add(null == e ? this.prevObject :this.prevObject.filter(e));
    }
  }), pe.each({
    parent:function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t :null;
    },
    parents:function(e) {
      return be(e, "parentNode");
    },
    parentsUntil:function(e, t, n) {
      return be(e, "parentNode", n);
    },
    next:function(e) {
      return i(e, "nextSibling");
    },
    prev:function(e) {
      return i(e, "previousSibling");
    },
    nextAll:function(e) {
      return be(e, "nextSibling");
    },
    prevAll:function(e) {
      return be(e, "previousSibling");
    },
    nextUntil:function(e, t, n) {
      return be(e, "nextSibling", n);
    },
    prevUntil:function(e, t, n) {
      return be(e, "previousSibling", n);
    },
    siblings:function(e) {
      return we((e.parentNode || {}).firstChild, e);
    },
    children:function(e) {
      return we(e.firstChild);
    },
    contents:function(e) {
      return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document :pe.merge([], e.childNodes);
    }
  }, function(e, t) {
    pe.fn[e] = function(n, r) {
      var i = pe.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), 
      this.length > 1 && (ke[e] || (i = pe.uniqueSort(i)), Ne.test(e) && (i = i.reverse())), 
      this.pushStack(i);
    };
  });
  var je = /\S+/g;
  pe.Callbacks = function(e) {
    e = "string" == typeof e ? o(e) :pe.extend({}, e);
    var t, n, r, i, a = [], s = [], u = -1, c = function() {
      for (i = e.once, r = t = !0; s.length; u = -1) for (n = s.shift(); ++u < a.length; ) !1 === a[u].apply(n[0], n[1]) && e.stopOnFalse && (u = a.length, 
      n = !1);
      e.memory || (n = !1), t = !1, i && (a = n ? [] :"");
    }, l = {
      add:function() {
        return a && (n && !t && (u = a.length - 1, s.push(n)), function t(n) {
          pe.each(n, function(n, r) {
            pe.isFunction(r) ? e.unique && l.has(r) || a.push(r) :r && r.length && "string" !== pe.type(r) && t(r);
          });
        }(arguments), n && !t && c()), this;
      },
      remove:function() {
        return pe.each(arguments, function(e, t) {
          for (var n; (n = pe.inArray(t, a, n)) > -1; ) a.splice(n, 1), n <= u && u--;
        }), this;
      },
      has:function(e) {
        return e ? pe.inArray(e, a) > -1 :a.length > 0;
      },
      empty:function() {
        return a && (a = []), this;
      },
      disable:function() {
        return i = s = [], a = n = "", this;
      },
      disabled:function() {
        return !a;
      },
      lock:function() {
        return i = !0, n || l.disable(), this;
      },
      locked:function() {
        return !!i;
      },
      fireWith:function(e, n) {
        return i || (n = n || [], n = [ e, n.slice ? n.slice() :n ], s.push(n), t || c()), 
        this;
      },
      fire:function() {
        return l.fireWith(this, arguments), this;
      },
      fired:function() {
        return !!r;
      }
    };
    return l;
  }, pe.extend({
    Deferred:function(e) {
      var t = [ [ "resolve", "done", pe.Callbacks("once memory"), "resolved" ], [ "reject", "fail", pe.Callbacks("once memory"), "rejected" ], [ "notify", "progress", pe.Callbacks("memory") ] ], n = "pending", r = {
        state:function() {
          return n;
        },
        always:function() {
          return i.done(arguments).fail(arguments), this;
        },
        then:function() {
          var e = arguments;
          return pe.Deferred(function(n) {
            pe.each(t, function(t, o) {
              var a = pe.isFunction(e[t]) && e[t];
              i[o[1]](function() {
                var e = a && a.apply(this, arguments);
                e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) :n[o[0] + "With"](this === r ? n.promise() :this, a ? [ e ] :arguments);
              });
            }), e = null;
          }).promise();
        },
        promise:function(e) {
          return null != e ? pe.extend(e, r) :r;
        }
      }, i = {};
      return r.pipe = r.then, pe.each(t, function(e, o) {
        var a = o[2], s = o[3];
        r[o[1]] = a.add, s && a.add(function() {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
          return i[o[0] + "With"](this === i ? r :this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when:function(e) {
      var t, n, r, i = 0, o = ie.call(arguments), a = o.length, s = 1 !== a || e && pe.isFunction(e.promise) ? a :0, u = 1 === s ? e :pe.Deferred(), c = function(e, n, r) {
        return function(i) {
          n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) :i, r === t ? u.notifyWith(n, r) :--s || u.resolveWith(n, r);
        };
      };
      if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && pe.isFunction(o[i].promise) ? o[i].promise().progress(c(i, n, t)).done(c(i, r, o)).fail(u.reject) :--s;
      return s || u.resolveWith(r, o), u.promise();
    }
  });
  var De;
  pe.fn.ready = function(e) {
    return pe.ready.promise().done(e), this;
  }, pe.extend({
    isReady:!1,
    readyWait:1,
    holdReady:function(e) {
      e ? pe.readyWait++ :pe.ready(!0);
    },
    ready:function(e) {
      (!0 === e ? --pe.readyWait :pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (De.resolveWith(re, [ pe ]), 
      pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready"))));
    }
  }), pe.ready.promise = function(t) {
    if (!De) if (De = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) e.setTimeout(pe.ready); else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), 
    e.addEventListener("load", s); else {
      re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
      var n = !1;
      try {
        n = null == e.frameElement && re.documentElement;
      } catch (e) {}
      n && n.doScroll && function t() {
        if (!pe.isReady) {
          try {
            n.doScroll("left");
          } catch (n) {
            return e.setTimeout(t, 50);
          }
          a(), pe.ready();
        }
      }();
    }
    return De.promise(t);
  }, pe.ready.promise();
  var Le;
  for (Le in pe(fe)) break;
  fe.ownFirst = "0" === Le, fe.inlineBlockNeedsLayout = !1, pe(function() {
    var e, t, n, r;
    (n = re.getElementsByTagName("body")[0]) && n.style && (t = re.createElement("div"), 
    r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
    n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
    fe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r));
  }), function() {
    var e = re.createElement("div");
    fe.deleteExpando = !0;
    try {
      delete e.test;
    } catch (e) {
      fe.deleteExpando = !1;
    }
    e = null;
  }();
  var Ae = function(e) {
    var t = pe.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
    return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t);
  }, Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, qe = /([A-Z])/g;
  pe.extend({
    cache:{},
    noData:{
      "applet ":!0,
      "embed ":!0,
      "object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData:function(e) {
      return !!(e = e.nodeType ? pe.cache[e[pe.expando]] :e[pe.expando]) && !c(e);
    },
    data:function(e, t, n) {
      return l(e, t, n);
    },
    removeData:function(e, t) {
      return f(e, t);
    },
    _data:function(e, t, n) {
      return l(e, t, n, !0);
    },
    _removeData:function(e, t) {
      return f(e, t, !0);
    }
  }), pe.fn.extend({
    data:function(e, t) {
      var n, r, i, o = this[0], a = o && o.attributes;
      if (e === undefined) {
        if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
          for (n = a.length; n--; ) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)), 
          u(o, r, i[r])));
          pe._data(o, "parsedAttrs", !0);
        }
        return i;
      }
      return "object" == typeof e ? this.each(function() {
        pe.data(this, e);
      }) :arguments.length > 1 ? this.each(function() {
        pe.data(this, e, t);
      }) :o ? u(o, e, pe.data(o, e)) :undefined;
    },
    removeData:function(e) {
      return this.each(function() {
        pe.removeData(this, e);
      });
    }
  }), pe.extend({
    queue:function(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) :r.push(n)), 
      r || [];
    },
    dequeue:function(e, t) {
      t = t || "fx";
      var n = pe.queue(e, t), r = n.length, i = n.shift(), o = pe._queueHooks(e, t), a = function() {
        pe.dequeue(e, t);
      };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
      delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks:function(e, t) {
      var n = t + "queueHooks";
      return pe._data(e, n) || pe._data(e, n, {
        empty:pe.Callbacks("once memory").add(function() {
          pe._removeData(e, t + "queue"), pe._removeData(e, n);
        })
      });
    }
  }), pe.fn.extend({
    queue:function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) :t === undefined ? this :this.each(function() {
        var n = pe.queue(this, e, t);
        pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e);
      });
    },
    dequeue:function(e) {
      return this.each(function() {
        pe.dequeue(this, e);
      });
    },
    clearQueue:function(e) {
      return this.queue(e || "fx", []);
    },
    promise:function(e, t) {
      var n, r = 1, i = pe.Deferred(), o = this, a = this.length, s = function() {
        --r || i.resolveWith(o, [ o ]);
      };
      for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--; ) (n = pe._data(o[a], e + "queueHooks")) && n.empty && (r++, 
      n.empty.add(s));
      return s(), i.promise(t);
    }
  }), function() {
    var e;
    fe.shrinkWrapBlocks = function() {
      if (null != e) return e;
      e = !1;
      var t, n, r;
      return (n = re.getElementsByTagName("body")[0]) && n.style ? (t = re.createElement("div"), 
      r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
      n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
      t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), 
      n.removeChild(r), e) :void 0;
    };
  }();
  var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, He = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"), _e = [ "Top", "Right", "Bottom", "Left" ], Be = function(e, t) {
    return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e);
  }, Me = function(e, t, n, r, i, o, a) {
    var s = 0, u = e.length, c = null == n;
    if ("object" === pe.type(n)) {
      i = !0;
      for (s in n) Me(e, t, s, n[s], !0, o, a);
    } else if (r !== undefined && (i = !0, pe.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), 
    t = null) :(c = t, t = function(e, t, n) {
      return c.call(pe(e), n);
    })), t)) for (;s < u; s++) t(e[s], n, a ? r :r.call(e[s], s, t(e[s], n)));
    return i ? e :c ? t.call(e) :u ? t(e[0], n) :o;
  }, Pe = /^(?:checkbox|radio)$/i, Fe = /<([\w:-]+)/, Ie = /^$|\/(?:java|ecma)script/i, $e = /^\s+/, We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  !function() {
    var e = re.createElement("div"), t = re.createDocumentFragment(), n = re.createElement("input");
    e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
    fe.leadingWhitespace = 3 === e.firstChild.nodeType, fe.tbody = !e.getElementsByTagName("tbody").length, 
    fe.htmlSerialize = !!e.getElementsByTagName("link").length, fe.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, 
    n.type = "checkbox", n.checked = !0, t.appendChild(n), fe.appendChecked = n.checked, 
    e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, 
    t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), 
    n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), 
    fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.noCloneEvent = !!e.addEventListener, 
    e[pe.expando] = 1, fe.attributes = !e.getAttribute(pe.expando);
  }();
  var ze = {
    option:[ 1, "<select multiple='multiple'>", "</select>" ],
    legend:[ 1, "<fieldset>", "</fieldset>" ],
    area:[ 1, "<map>", "</map>" ],
    param:[ 1, "<object>", "</object>" ],
    thead:[ 1, "<table>", "</table>" ],
    tr:[ 2, "<table><tbody>", "</tbody></table>" ],
    col:[ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
    td:[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    _default:fe.htmlSerialize ? [ 0, "", "" ] :[ 1, "X<div>", "</div>" ]
  };
  ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, 
  ze.th = ze.td;
  var Ue = /<|&#?\w+;/, Xe = /<tbody/i;
  !function() {
    var t, n, r = re.createElement("div");
    for (t in {
      submit:!0,
      change:!0,
      focusin:!0
    }) n = "on" + t, (fe[t] = n in e) || (r.setAttribute(n, "t"), fe[t] = !1 === r.attributes[n].expando);
    r = null;
  }();
  var Ve = /^(?:input|select|textarea)$/i, Ke = /^key/, Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Je = /^(?:focusinfocus|focusoutblur)$/, Ye = /^([^.]*)(?:\.(.+)|)/;
  pe.event = {
    global:{},
    add:function(e, t, n, r, i) {
      var o, a, s, u, c, l, f, d, p, h, g, m = pe._data(e);
      if (m) {
        for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = pe.guid++), 
        (a = m.events) || (a = m.events = {}), (l = m.handle) || (l = m.handle = function(e) {
          return void 0 === pe || e && pe.event.triggered === e.type ? undefined :pe.event.dispatch.apply(l.elem, arguments);
        }, l.elem = e), t = (t || "").match(je) || [ "" ], s = t.length; s--; ) o = Ye.exec(t[s]) || [], 
        p = g = o[1], h = (o[2] || "").split(".").sort(), p && (c = pe.event.special[p] || {}, 
        p = (i ? c.delegateType :c.bindType) || p, c = pe.event.special[p] || {}, f = pe.extend({
          type:p,
          origType:g,
          data:r,
          handler:n,
          guid:n.guid,
          selector:i,
          needsContext:i && pe.expr.match.needsContext.test(i),
          namespace:h.join(".")
        }, u), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, h, l) || (e.addEventListener ? e.addEventListener(p, l, !1) :e.attachEvent && e.attachEvent("on" + p, l))), 
        c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) :d.push(f), 
        pe.event.global[p] = !0);
        e = null;
      }
    },
    remove:function(e, t, n, r, i) {
      var o, a, s, u, c, l, f, d, p, h, g, m = pe.hasData(e) && pe._data(e);
      if (m && (l = m.events)) {
        for (t = (t || "").match(je) || [ "" ], c = t.length; c--; ) if (s = Ye.exec(t[c]) || [], 
        p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
          for (f = pe.event.special[p] || {}, p = (r ? f.delegateType :f.bindType) || p, d = l[p] || [], 
          s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--; ) a = d[o], 
          !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), 
          a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
          u && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || pe.removeEvent(e, p, m.handle), 
          delete l[p]);
        } else for (p in l) pe.event.remove(e, p + t[c], n, r, !0);
        pe.isEmptyObject(l) && (delete m.handle, pe._removeData(e, "events"));
      }
    },
    trigger:function(t, n, r, i) {
      var o, a, s, u, c, l, f, d = [ r || re ], p = le.call(t, "type") ? t.type :t, h = le.call(t, "namespace") ? t.namespace.split(".") :[];
      if (s = l = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Je.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), 
      p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t :new pe.Event(p, "object" == typeof t && t), 
      t.isTrigger = i ? 2 :3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") :null, 
      t.result = undefined, t.target || (t.target = r), n = null == n ? [ t ] :pe.makeArray(n, [ t ]), 
      c = pe.event.special[p] || {}, i || !c.trigger || !1 !== c.trigger.apply(r, n))) {
        if (!i && !c.noBubble && !pe.isWindow(r)) {
          for (u = c.delegateType || p, Je.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), 
          l = s;
          l === (r.ownerDocument || re) && d.push(l.defaultView || l.parentWindow || e);
        }
        for (f = 0; (s = d[f++]) && !t.isPropagationStopped(); ) t.type = f > 1 ? u :c.bindType || p, 
        o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), 
        (o = a && s[a]) && o.apply && Ae(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
        if (t.type = p, !i && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(d.pop(), n)) && Ae(r) && a && r[p] && !pe.isWindow(r)) {
          l = r[a], l && (r[a] = null), pe.event.triggered = p;
          try {
            r[p]();
          } catch (e) {}
          pe.event.triggered = undefined, l && (r[a] = l);
        }
        return t.result;
      }
    },
    dispatch:function(e) {
      e = pe.event.fix(e);
      var t, n, r, i, o, a = [], s = ie.call(arguments), u = (pe._data(this, "events") || {})[e.type] || [], c = pe.event.special[e.type] || {};
      if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
        for (a = pe.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = i.elem, 
        n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); ) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, 
        e.data = o.data, (r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(), 
        e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers:function(e, t) {
      var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
      if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (;u != this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
        for (r = [], n = 0; n < s; n++) o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? pe(i, this).index(u) > -1 :pe.find(i, this, null, [ u ]).length), 
        r[i] && r.push(o);
        r.length && a.push({
          elem:u,
          handlers:r
        });
      }
      return s < t.length && a.push({
        elem:this,
        handlers:t.slice(s)
      }), a;
    },
    fix:function(e) {
      if (e[pe.expando]) return e;
      var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
      for (a || (this.fixHooks[i] = a = Ge.test(i) ? this.mouseHooks :Ke.test(i) ? this.keyHooks :{}), 
      r = a.props ? this.props.concat(a.props) :this.props, e = new pe.Event(o), t = r.length; t--; ) n = r[t], 
      e[n] = o[n];
      return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
      e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) :e;
    },
    props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks:{},
    keyHooks:{
      props:"char charCode key keyCode".split(" "),
      filter:function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode :t.keyCode), 
        e;
      }
    },
    mouseHooks:{
      props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter:function(e, t) {
        var n, r, i, o = t.button, a = t.fromElement;
        return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, 
        i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), 
        e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), 
        !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement :a), e.which || o === undefined || (e.which = 1 & o ? 1 :2 & o ? 3 :4 & o ? 2 :0), 
        e;
      }
    },
    special:{
      load:{
        noBubble:!0
      },
      focus:{
        trigger:function() {
          if (this !== w() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType:"focusin"
      },
      blur:{
        trigger:function() {
          if (this === w() && this.blur) return this.blur(), !1;
        },
        delegateType:"focusout"
      },
      click:{
        trigger:function() {
          if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), 
          !1;
        },
        _default:function(e) {
          return pe.nodeName(e.target, "a");
        }
      },
      beforeunload:{
        postDispatch:function(e) {
          e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate:function(e, t, n) {
      var r = pe.extend(new pe.Event(), n, {
        type:e,
        isSimulated:!0
      });
      pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault();
    }
  }, pe.removeEvent = re.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  } :function(e, t, n) {
    var r = "on" + t;
    e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n));
  }, pe.Event = function(e, t) {
    if (!(this instanceof pe.Event)) return new pe.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? v :b) :this.type = e, 
    t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0;
  }, pe.Event.prototype = {
    constructor:pe.Event,
    isDefaultPrevented:b,
    isPropagationStopped:b,
    isImmediatePropagationStopped:b,
    preventDefault:function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() :e.returnValue = !1);
    },
    stopPropagation:function() {
      var e = this.originalEvent;
      this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), 
      e.cancelBubble = !0);
    },
    stopImmediatePropagation:function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), 
      this.stopPropagation();
    }
  }, pe.each({
    mouseenter:"mouseover",
    mouseleave:"mouseout",
    pointerenter:"pointerover",
    pointerleave:"pointerout"
  }, function(e, t) {
    pe.event.special[e] = {
      delegateType:t,
      bindType:t,
      handle:function(e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return i && (i === r || pe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
        e.type = t), n;
      }
    };
  }), fe.submit || (pe.event.special.submit = {
    setup:function() {
      if (pe.nodeName(this, "form")) return !1;
      pe.event.add(this, "click._submit keypress._submit", function(e) {
        var t = e.target, n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") :undefined;
        n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
          e._submitBubble = !0;
        }), pe._data(n, "submit", !0));
      });
    },
    postDispatch:function(e) {
      e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e));
    },
    teardown:function() {
      if (pe.nodeName(this, "form")) return !1;
      pe.event.remove(this, "._submit");
    }
  }), fe.change || (pe.event.special.change = {
    setup:function() {
      if (Ve.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._justChanged = !0);
      }), pe.event.add(this, "click._change", function(e) {
        this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e);
      })), !1;
      pe.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        Ve.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e);
        }), pe._data(t, "change", !0));
      });
    },
    handle:function(e) {
      var t = e.target;
      if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments);
    },
    teardown:function() {
      return pe.event.remove(this, "._change"), !Ve.test(this.nodeName);
    }
  }), fe.focusin || pe.each({
    focus:"focusin",
    blur:"focusout"
  }, function(e, t) {
    var n = function(e) {
      pe.event.simulate(t, e.target, pe.event.fix(e));
    };
    pe.event.special[t] = {
      setup:function() {
        var r = this.ownerDocument || this, i = pe._data(r, t);
        i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1);
      },
      teardown:function() {
        var r = this.ownerDocument || this, i = pe._data(r, t) - 1;
        i ? pe._data(r, t, i) :(r.removeEventListener(e, n, !0), pe._removeData(r, t));
      }
    };
  }), pe.fn.extend({
    on:function(e, t, n, r) {
      return x(this, e, t, n, r);
    },
    one:function(e, t, n, r) {
      return x(this, e, t, n, r, 1);
    },
    off:function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace :r.origType, r.selector, r.handler), 
      this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = b), 
      this.each(function() {
        pe.event.remove(this, e, n, t);
      });
    },
    trigger:function(e, t) {
      return this.each(function() {
        pe.event.trigger(e, t, this);
      });
    },
    triggerHandler:function(e, t) {
      var n = this[0];
      if (n) return pe.event.trigger(e, t, n, !0);
    }
  });
  var Qe = / jQuery\d+="(?:null|\d+)"/g, Ze = new RegExp("<(?:" + We + ")[\\s/>]", "i"), et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, tt = /<script|<style|<link/i, nt = /checked\s*(?:[^=]|=\s*.checked.)/i, rt = /^true\/(.*)/, it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ot = p(re), at = ot.appendChild(re.createElement("div"));
  pe.extend({
    htmlPrefilter:function(e) {
      return e.replace(et, "<$1></$2>");
    },
    clone:function(e, t, n) {
      var r, i, o, a, s, u = pe.contains(e.ownerDocument, e);
      if (fe.html5Clone || pe.isXMLDoc(e) || !Ze.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) :(at.innerHTML = e.outerHTML, 
      at.removeChild(o = at.firstChild)), !(fe.noCloneEvent && fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (r = h(o), 
      s = h(e), a = 0; null != (i = s[a]); ++a) r[a] && N(i, r[a]);
      if (t) if (n) for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++) C(i, r[a]); else C(e, o);
      return r = h(o, "script"), r.length > 0 && g(r, !u && h(e, "script")), r = s = i = null, 
      o;
    },
    cleanData:function(e, t) {
      for (var n, r, i, o, a = 0, s = pe.expando, u = pe.cache, c = fe.attributes, l = pe.event.special; null != (n = e[a]); a++) if ((t || Ae(n)) && (i = n[s], 
      o = i && u[i])) {
        if (o.events) for (r in o.events) l[r] ? pe.event.remove(n, r) :pe.removeEvent(n, r, o.handle);
        u[i] && (delete u[i], c || "undefined" == typeof n.removeAttribute ? n[s] = undefined :n.removeAttribute(s), 
        ne.push(i));
      }
    }
  }), pe.fn.extend({
    domManip:k,
    detach:function(e) {
      return j(this, e, !0);
    },
    remove:function(e) {
      return j(this, e);
    },
    text:function(e) {
      return Me(this, function(e) {
        return e === undefined ? pe.text(this) :this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e));
      }, null, e, arguments.length);
    },
    append:function() {
      return k(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          S(this, e).appendChild(e);
        }
      });
    },
    prepend:function() {
      return k(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = S(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before:function() {
      return k(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after:function() {
      return k(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty:function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
        e.options && pe.nodeName(e, "select") && (e.options.length = 0);
      }
      return this;
    },
    clone:function(e, t) {
      return e = null != e && e, t = null == t ? e :t, this.map(function() {
        return pe.clone(this, e, t);
      });
    },
    html:function(e) {
      return Me(this, function(e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(Qe, "") :undefined;
        if ("string" == typeof e && !tt.test(e) && (fe.htmlSerialize || !Ze.test(e)) && (fe.leadingWhitespace || !$e.test(e)) && !ze[(Fe.exec(e) || [ "", "" ])[1].toLowerCase()]) {
          e = pe.htmlPrefilter(e);
          try {
            for (;n < r; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), 
            t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith:function() {
      var e = [];
      return k(this, arguments, function(t) {
        var n = this.parentNode;
        pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), pe.each({
    appendTo:"append",
    prependTo:"prepend",
    insertBefore:"before",
    insertAfter:"after",
    replaceAll:"replaceWith"
  }, function(e, t) {
    pe.fn[e] = function(e) {
      for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; r <= a; r++) n = r === a ? this :this.clone(!0), 
      pe(o[r])[t](n), ae.apply(i, n.get());
      return this.pushStack(i);
    };
  });
  var st, ut = {
    HTML:"block",
    BODY:"block"
  }, ct = /^margin/, lt = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"), ft = function(e, t, n, r) {
    var i, o, a = {};
    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
    i = n.apply(e, r || []);
    for (o in t) e.style[o] = a[o];
    return i;
  }, dt = re.documentElement;
  !function() {
    function t() {
      var t, l, f = re.documentElement;
      f.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
      n = i = s = !1, r = a = !0, e.getComputedStyle && (l = e.getComputedStyle(c), n = "1%" !== (l || {}).top, 
      s = "2px" === (l || {}).marginLeft, i = "4px" === (l || {
        width:"4px"
      }).width, c.style.marginRight = "50%", r = "4px" === (l || {
        marginRight:"4px"
      }).marginRight, t = c.appendChild(re.createElement("div")), t.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
      t.style.marginRight = t.style.width = "0", c.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), 
      c.removeChild(t)), c.style.display = "none", o = 0 === c.getClientRects().length, 
      o && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
      t = c.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
      (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", 
      o = 0 === t[0].offsetHeight)), f.removeChild(u);
    }
    var n, r, i, o, a, s, u = re.createElement("div"), c = re.createElement("div");
    c.style && (c.style.cssText = "float:left;opacity:.5", fe.opacity = "0.5" === c.style.opacity, 
    fe.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
    fe.clearCloneStyle = "content-box" === c.style.backgroundClip, u = re.createElement("div"), 
    u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
    c.innerHTML = "", u.appendChild(c), fe.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, 
    pe.extend(fe, {
      reliableHiddenOffsets:function() {
        return null == n && t(), o;
      },
      boxSizingReliable:function() {
        return null == n && t(), i;
      },
      pixelMarginRight:function() {
        return null == n && t(), r;
      },
      pixelPosition:function() {
        return null == n && t(), n;
      },
      reliableMarginRight:function() {
        return null == n && t(), a;
      },
      reliableMarginLeft:function() {
        return null == n && t(), s;
      }
    }));
  }();
  var pt, ht, gt = /^(top|right|bottom|left)$/;
  e.getComputedStyle ? (pt = function(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  }, ht = function(e, t, n) {
    var r, i, o, a, s = e.style;
    return n = n || pt(e), a = n ? n.getPropertyValue(t) || n[t] :undefined, "" !== a && a !== undefined || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), 
    n && !fe.pixelMarginRight() && lt.test(a) && ct.test(t) && (r = s.width, i = s.minWidth, 
    o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
    s.minWidth = i, s.maxWidth = o), a === undefined ? a :a + "";
  }) :dt.currentStyle && (pt = function(e) {
    return e.currentStyle;
  }, ht = function(e, t, n) {
    var r, i, o, a, s = e.style;
    return n = n || pt(e), a = n ? n[t] :undefined, null == a && s && s[t] && (a = s[t]), 
    lt.test(a) && !gt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), 
    s.left = "fontSize" === t ? "1em" :a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), 
    a === undefined ? a :a + "" || "auto";
  });
  var mt = /alpha\([^)]*\)/i, yt = /opacity\s*=\s*([^)]*)/i, vt = /^(none|table(?!-c[ea]).+)/, bt = new RegExp("^(" + Re + ")(.*)$", "i"), wt = {
    position:"absolute",
    visibility:"hidden",
    display:"block"
  }, xt = {
    letterSpacing:"0",
    fontWeight:"400"
  }, St = [ "Webkit", "O", "Moz", "ms" ], Tt = re.createElement("div").style;
  pe.extend({
    cssHooks:{
      opacity:{
        get:function(e, t) {
          if (t) {
            var n = ht(e, "opacity");
            return "" === n ? "1" :n;
          }
        }
      }
    },
    cssNumber:{
      animationIterationCount:!0,
      columnCount:!0,
      fillOpacity:!0,
      flexGrow:!0,
      flexShrink:!0,
      fontWeight:!0,
      lineHeight:!0,
      opacity:!0,
      order:!0,
      orphans:!0,
      widows:!0,
      zIndex:!0,
      zoom:!0
    },
    cssProps:{
      "float":fe.cssFloat ? "cssFloat" :"styleFloat"
    },
    style:function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = pe.camelCase(t), u = e.style;
        if (t = pe.cssProps[s] || (pe.cssProps[s] = O(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], 
        n === undefined) return a && "get" in a && (i = a.get(e, !1, r)) !== undefined ? i :u[t];
        if (o = typeof n, "string" === o && (i = He.exec(n)) && i[1] && (n = d(e, t, i), 
        o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" :"px")), 
        fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
        !(a && "set" in a && (n = a.set(e, n, r)) === undefined))) try {
          u[t] = n;
        } catch (e) {}
      }
    },
    css:function(e, t, n, r) {
      var i, o, a, s = pe.camelCase(t);
      return t = pe.cssProps[s] || (pe.cssProps[s] = O(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], 
      a && "get" in a && (o = a.get(e, !0, n)), o === undefined && (o = ht(e, t, r)), 
      "normal" === o && t in xt && (o = xt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 :o) :o;
    }
  }), pe.each([ "height", "width" ], function(e, t) {
    pe.cssHooks[t] = {
      get:function(e, n, r) {
        if (n) return vt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ft(e, wt, function() {
          return _(e, t, r);
        }) :_(e, t, r);
      },
      set:function(e, n, r) {
        var i = r && pt(e);
        return R(e, n, r ? H(e, t, r, fe.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) :0);
      }
    };
  }), fe.opacity || (pe.cssHooks.opacity = {
    get:function(e, t) {
      return yt.test((t && e.currentStyle ? e.currentStyle.filter :e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" :t ? "1" :"";
    },
    set:function(e, t) {
      var n = e.style, r = e.currentStyle, i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" :"", o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
      "" === t || r && !r.filter) || (n.filter = mt.test(o) ? o.replace(mt, i) :o + " " + i);
    }
  }), pe.cssHooks.marginRight = A(fe.reliableMarginRight, function(e, t) {
    if (t) return ft(e, {
      display:"inline-block"
    }, ht, [ e, "marginRight" ]);
  }), pe.cssHooks.marginLeft = A(fe.reliableMarginLeft, function(e, t) {
    if (t) return (parseFloat(ht(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, {
      marginLeft:0
    }, function() {
      return e.getBoundingClientRect().left;
    }) :0)) + "px";
  }), pe.each({
    margin:"",
    padding:"",
    border:"Width"
  }, function(e, t) {
    pe.cssHooks[e + t] = {
      expand:function(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") :[ n ]; r < 4; r++) i[e + _e[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }
    }, ct.test(e) || (pe.cssHooks[e + t].set = R);
  }), pe.fn.extend({
    css:function(e, t) {
      return Me(this, function(e, t, n) {
        var r, i, o = {}, a = 0;
        if (pe.isArray(t)) {
          for (r = pt(e), i = t.length; a < i; a++) o[t[a]] = pe.css(e, t[a], !1, r);
          return o;
        }
        return n !== undefined ? pe.style(e, t, n) :pe.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show:function() {
      return q(this, !0);
    },
    hide:function() {
      return q(this);
    },
    toggle:function(e) {
      return "boolean" == typeof e ? e ? this.show() :this.hide() :this.each(function() {
        Be(this) ? pe(this).show() :pe(this).hide();
      });
    }
  }), pe.Tween = B, B.prototype = {
    constructor:B,
    init:function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, 
      this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" :"px");
    },
    cur:function() {
      var e = B.propHooks[this.prop];
      return e && e.get ? e.get(this) :B.propHooks._default.get(this);
    },
    run:function(e) {
      var t, n = B.propHooks[this.prop];
      return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) :this.pos = t = e, 
      this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
      n && n.set ? n.set(this) :B.propHooks._default.set(this), this;
    }
  }, B.prototype.init.prototype = B.prototype, B.propHooks = {
    _default:{
      get:function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] :(t = pe.css(e.elem, e.prop, ""), 
        t && "auto" !== t ? t :0);
      },
      set:function(e) {
        pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) :1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now :pe.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
    set:function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, pe.easing = {
    linear:function(e) {
      return e;
    },
    swing:function(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default:"swing"
  }, pe.fx = B.prototype.init, pe.fx.step = {};
  var Et, Ct, Nt = /^(?:toggle|show|hide)$/, kt = /queueHooks$/;
  pe.Animation = pe.extend(W, {
    tweeners:{
      "*":[ function(e, t) {
        var n = this.createTween(e, t);
        return d(n.elem, e, He.exec(t), n), n;
      } ]
    },
    tweener:function(e, t) {
      pe.isFunction(e) ? (t = e, e = [ "*" ]) :e = e.match(je);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], W.tweeners[n] = W.tweeners[n] || [], 
      W.tweeners[n].unshift(t);
    },
    prefilters:[ I ],
    prefilter:function(e, t) {
      t ? W.prefilters.unshift(e) :W.prefilters.push(e);
    }
  }), pe.speed = function(e, t, n) {
    var r = e && "object" == typeof e ? pe.extend({}, e) :{
      complete:n || !n && t || pe.isFunction(e) && e,
      duration:e,
      easing:n && t || t && !pe.isFunction(t) && t
    };
    return r.duration = pe.fx.off ? 0 :"number" == typeof r.duration ? r.duration :r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] :pe.fx.speeds._default, 
    null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
      pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue);
    }, r;
  }, pe.fn.extend({
    fadeTo:function(e, t, n, r) {
      return this.filter(Be).css("opacity", 0).show().end().animate({
        opacity:t
      }, e, n, r);
    },
    animate:function(e, t, n, r) {
      var i = pe.isEmptyObject(e), o = pe.speed(t, n, r), a = function() {
        var t = W(this, pe.extend({}, e), o);
        (i || pe._data(this, "finish")) && t.stop(!0);
      };
      return a.finish = a, i || !1 === o.queue ? this.each(a) :this.queue(o.queue, a);
    },
    stop:function(e, t, n) {
      var r = function(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };
      return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), 
      this.each(function() {
        var t = !0, i = null != e && e + "queueHooks", o = pe.timers, a = pe._data(this);
        if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && kt.test(i) && r(a[i]);
        for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
        t = !1, o.splice(i, 1));
        !t && n || pe.dequeue(this, e);
      });
    },
    finish:function(e) {
      return !1 !== e && (e = e || "fx"), this.each(function() {
        var t, n = pe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = pe.timers, a = r ? r.length :0;
        for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
        t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
        o.splice(t, 1));
        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  }), pe.each([ "toggle", "show", "hide" ], function(e, t) {
    var n = pe.fn[t];
    pe.fn[t] = function(e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) :this.animate(P(t, !0), e, r, i);
    };
  }), pe.each({
    slideDown:P("show"),
    slideUp:P("hide"),
    slideToggle:P("toggle"),
    fadeIn:{
      opacity:"show"
    },
    fadeOut:{
      opacity:"hide"
    },
    fadeToggle:{
      opacity:"toggle"
    }
  }, function(e, t) {
    pe.fn[e] = function(e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), pe.timers = [], pe.fx.tick = function() {
    var e, t = pe.timers, n = 0;
    for (Et = pe.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
    t.length || pe.fx.stop(), Et = undefined;
  }, pe.fx.timer = function(e) {
    pe.timers.push(e), e() ? pe.fx.start() :pe.timers.pop();
  }, pe.fx.interval = 13, pe.fx.start = function() {
    Ct || (Ct = e.setInterval(pe.fx.tick, pe.fx.interval));
  }, pe.fx.stop = function() {
    e.clearInterval(Ct), Ct = null;
  }, pe.fx.speeds = {
    slow:600,
    fast:200,
    _default:400
  }, pe.fn.delay = function(t, n) {
    return t = pe.fx ? pe.fx.speeds[t] || t :t, n = n || "fx", this.queue(n, function(n, r) {
      var i = e.setTimeout(n, t);
      r.stop = function() {
        e.clearTimeout(i);
      };
    });
  }, function() {
    var e, t = re.createElement("input"), n = re.createElement("div"), r = re.createElement("select"), i = r.appendChild(re.createElement("option"));
    n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
    e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), 
    e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", fe.getSetAttribute = "t" !== n.className, 
    fe.style = /top/.test(e.getAttribute("style")), fe.hrefNormalized = "/a" === e.getAttribute("href"), 
    fe.checkOn = !!t.value, fe.optSelected = i.selected, fe.enctype = !!re.createElement("form").enctype, 
    r.disabled = !0, fe.optDisabled = !i.disabled, t = re.createElement("input"), t.setAttribute("value", ""), 
    fe.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), 
    fe.radioValue = "t" === t.value;
  }();
  var jt = /\r/g;
  pe.fn.extend({
    val:function(e) {
      var t, n, r, i = this[0];
      {
        if (arguments.length) return r = pe.isFunction(e), this.each(function(n) {
          var i;
          1 === this.nodeType && (i = r ? e.call(this, n, pe(this).val()) :e, null == i ? i = "" :"number" == typeof i ? i += "" :pe.isArray(i) && (i = pe.map(i, function(e) {
            return null == e ? "" :e + "";
          })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i));
        });
        if (i) return (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()]) && "get" in t && (n = t.get(i, "value")) !== undefined ? n :(n = i.value, 
        "string" == typeof n ? n.replace(jt, "") :null == n ? "" :n);
      }
    }
  }), pe.extend({
    valHooks:{
      option:{
        get:function(e) {
          var t = pe.find.attr(e, "value");
          return null != t ? t :pe.trim(pe.text(e));
        }
      },
      select:{
        get:function(e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null :[], s = o ? i + 1 :r.length, u = i < 0 ? s :o ? i :0; u < s; u++) if (n = r[u], 
          (n.selected || u === i) && (fe.optDisabled ? !n.disabled :null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
            if (t = pe(n).val(), o) return t;
            a.push(t);
          }
          return a;
        },
        set:function(e, t) {
          for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--; ) if (r = i[a], 
          pe.inArray(pe.valHooks.option.get(r), o) >= 0) try {
            r.selected = n = !0;
          } catch (e) {
            r.scrollHeight;
          } else r.selected = !1;
          return n || (e.selectedIndex = -1), i;
        }
      }
    }
  }), pe.each([ "radio", "checkbox" ], function() {
    pe.valHooks[this] = {
      set:function(e, t) {
        if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1;
      }
    }, fe.checkOn || (pe.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" :e.value;
    });
  });
  var Dt, Lt, At = pe.expr.attrHandle, Ot = /^(?:checked|selected)$/i, qt = fe.getSetAttribute, Rt = fe.input;
  pe.fn.extend({
    attr:function(e, t) {
      return Me(this, pe.attr, e, t, arguments.length > 1);
    },
    removeAttr:function(e) {
      return this.each(function() {
        pe.removeAttr(this, e);
      });
    }
  }), pe.extend({
    attr:function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) :(1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), 
      i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Lt :Dt)), n !== undefined ? null === n ? void pe.removeAttr(e, t) :i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r :(e.setAttribute(t, n + ""), 
      n) :i && "get" in i && null !== (r = i.get(e, t)) ? r :(r = pe.find.attr(e, t), 
      null == r ? undefined :r));
    },
    attrHooks:{
      type:{
        set:function(e, t) {
          if (!fe.radioValue && "radio" === t && pe.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr:function(e, t) {
      var n, r, i = 0, o = t && t.match(je);
      if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Rt && qt || !Ot.test(n) ? e[r] = !1 :e[pe.camelCase("default-" + n)] = e[r] = !1 :pe.attr(e, n, ""), 
      e.removeAttribute(qt ? n :r);
    }
  }), Lt = {
    set:function(e, t, n) {
      return !1 === t ? pe.removeAttr(e, n) :Rt && qt || !Ot.test(n) ? e.setAttribute(!qt && pe.propFix[n] || n, n) :e[pe.camelCase("default-" + n)] = e[n] = !0, 
      n;
    }
  }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = At[t] || pe.find.attr;
    Rt && qt || !Ot.test(t) ? At[t] = function(e, t, r) {
      var i, o;
      return r || (o = At[t], At[t] = i, i = null != n(e, t, r) ? t.toLowerCase() :null, 
      At[t] = o), i;
    } :At[t] = function(e, t, n) {
      if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() :null;
    };
  }), Rt && qt || (pe.attrHooks.value = {
    set:function(e, t, n) {
      if (!pe.nodeName(e, "input")) return Dt && Dt.set(e, t, n);
      e.defaultValue = t;
    }
  }), qt || (Dt = {
    set:function(e, t, n) {
      var r = e.getAttributeNode(n);
      if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", 
      "value" === n || t === e.getAttribute(n)) return t;
    }
  }, At.id = At.name = At.coords = function(e, t, n) {
    var r;
    if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value :null;
  }, pe.valHooks.button = {
    get:function(e, t) {
      var n = e.getAttributeNode(t);
      if (n && n.specified) return n.value;
    },
    set:Dt.set
  }, pe.attrHooks.contenteditable = {
    set:function(e, t, n) {
      Dt.set(e, "" !== t && t, n);
    }
  }, pe.each([ "width", "height" ], function(e, t) {
    pe.attrHooks[t] = {
      set:function(e, n) {
        if ("" === n) return e.setAttribute(t, "auto"), n;
      }
    };
  })), fe.style || (pe.attrHooks.style = {
    get:function(e) {
      return e.style.cssText || undefined;
    },
    set:function(e, t) {
      return e.style.cssText = t + "";
    }
  });
  var Ht = /^(?:input|select|textarea|button|object)$/i, _t = /^(?:a|area)$/i;
  pe.fn.extend({
    prop:function(e, t) {
      return Me(this, pe.prop, e, t, arguments.length > 1);
    },
    removeProp:function(e) {
      return e = pe.propFix[e] || e, this.each(function() {
        try {
          this[e] = undefined, delete this[e];
        } catch (e) {}
      });
    }
  }), pe.extend({
    prop:function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, 
      i = pe.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r :e[t] = n :i && "get" in i && null !== (r = i.get(e, t)) ? r :e[t];
    },
    propHooks:{
      tabIndex:{
        get:function(e) {
          var t = pe.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) :Ht.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 :-1;
        }
      }
    },
    propFix:{
      "for":"htmlFor",
      "class":"className"
    }
  }), fe.hrefNormalized || pe.each([ "href", "src" ], function(e, t) {
    pe.propHooks[t] = {
      get:function(e) {
        return e.getAttribute(t, 4);
      }
    };
  }), fe.optSelected || (pe.propHooks.selected = {
    get:function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  }), pe.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
    pe.propFix[this.toLowerCase()] = this;
  }), fe.enctype || (pe.propFix.enctype = "encoding");
  var Bt = /[\t\r\n\f]/g;
  pe.fn.extend({
    addClass:function(e) {
      var t, n, r, i, o, a, s, u = 0;
      if (pe.isFunction(e)) return this.each(function(t) {
        pe(this).addClass(e.call(this, t, z(this)));
      });
      if ("string" == typeof e && e) for (t = e.match(je) || []; n = this[u++]; ) if (i = z(n), 
      r = 1 === n.nodeType && (" " + i + " ").replace(Bt, " ")) {
        for (a = 0; o = t[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
        s = pe.trim(r), i !== s && pe.attr(n, "class", s);
      }
      return this;
    },
    removeClass:function(e) {
      var t, n, r, i, o, a, s, u = 0;
      if (pe.isFunction(e)) return this.each(function(t) {
        pe(this).removeClass(e.call(this, t, z(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e) for (t = e.match(je) || []; n = this[u++]; ) if (i = z(n), 
      r = 1 === n.nodeType && (" " + i + " ").replace(Bt, " ")) {
        for (a = 0; o = t[a++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
        s = pe.trim(r), i !== s && pe.attr(n, "class", s);
      }
      return this;
    },
    toggleClass:function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) :this.removeClass(e) :pe.isFunction(e) ? this.each(function(n) {
        pe(this).toggleClass(e.call(this, n, z(this), t), t);
      }) :this.each(function() {
        var t, r, i, o;
        if ("string" === n) for (r = 0, i = pe(this), o = e.match(je) || []; t = o[r++]; ) i.hasClass(t) ? i.removeClass(t) :i.addClass(t); else e !== undefined && "boolean" !== n || (t = z(this), 
        t && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" :pe._data(this, "__className__") || ""));
      });
    },
    hasClass:function(e) {
      var t, n, r = 0;
      for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + z(n) + " ").replace(Bt, " ").indexOf(t) > -1) return !0;
      return !1;
    }
  }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    pe.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) :this.trigger(t);
    };
  }), pe.fn.extend({
    hover:function(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  });
  var Mt = e.location, Pt = pe.now(), Ft = /\?/, It = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  pe.parseJSON = function(t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n, r = null, i = pe.trim(t + "");
    return i && !pe.trim(i.replace(It, function(e, t, i, o) {
      return n && t && (r = 0), 0 === r ? e :(n = i || t, r += !o - !i, "");
    })) ? Function("return " + i)() :pe.error("Invalid JSON: " + t);
  }, pe.parseXML = function(t) {
    var n, r;
    if (!t || "string" != typeof t) return null;
    try {
      e.DOMParser ? (r = new e.DOMParser(), n = r.parseFromString(t, "text/xml")) :(n = new e.ActiveXObject("Microsoft.XMLDOM"), 
      n.async = "false", n.loadXML(t));
    } catch (e) {
      n = undefined;
    }
    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), 
    n;
  };
  var $t = /#.*$/, Wt = /([?&])_=[^&]*/, zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Xt = /^(?:GET|HEAD)$/, Vt = /^\/\//, Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Gt = {}, Jt = {}, Yt = "*/".concat("*"), Qt = Mt.href, Zt = Kt.exec(Qt.toLowerCase()) || [];
  pe.extend({
    active:0,
    lastModified:{},
    etag:{},
    ajaxSettings:{
      url:Qt,
      type:"GET",
      isLocal:Ut.test(Zt[1]),
      global:!0,
      processData:!0,
      async:!0,
      contentType:"application/x-www-form-urlencoded; charset=UTF-8",
      accepts:{
        "*":Yt,
        text:"text/plain",
        html:"text/html",
        xml:"application/xml, text/xml",
        json:"application/json, text/javascript"
      },
      contents:{
        xml:/\bxml\b/,
        html:/\bhtml/,
        json:/\bjson\b/
      },
      responseFields:{
        xml:"responseXML",
        text:"responseText",
        json:"responseJSON"
      },
      converters:{
        "* text":String,
        "text html":!0,
        "text json":pe.parseJSON,
        "text xml":pe.parseXML
      },
      flatOptions:{
        url:!0,
        context:!0
      }
    },
    ajaxSetup:function(e, t) {
      return t ? V(V(e, pe.ajaxSettings), t) :V(pe.ajaxSettings, e);
    },
    ajaxPrefilter:U(Gt),
    ajaxTransport:U(Jt),
    ajax:function(t, n) {
      function r(t, n, r, i) {
        var o, f, v, b, x, T = n;
        2 !== w && (w = 2, u && e.clearTimeout(u), l = undefined, s = i || "", S.readyState = t > 0 ? 4 :0, 
        o = t >= 200 && t < 300 || 304 === t, r && (b = K(d, S, r)), b = G(d, b, S, o), 
        o ? (d.ifModified && (x = S.getResponseHeader("Last-Modified"), x && (pe.lastModified[a] = x), 
        (x = S.getResponseHeader("etag")) && (pe.etag[a] = x)), 204 === t || "HEAD" === d.type ? T = "nocontent" :304 === t ? T = "notmodified" :(T = b.state, 
        f = b.data, v = b.error, o = !v)) :(v = T, !t && T || (T = "error", t < 0 && (t = 0))), 
        S.status = t, S.statusText = (n || T) + "", o ? g.resolveWith(p, [ f, T, S ]) :g.rejectWith(p, [ S, T, v ]), 
        S.statusCode(y), y = undefined, c && h.trigger(o ? "ajaxSuccess" :"ajaxError", [ S, d, o ? f :v ]), 
        m.fireWith(p, [ S, T ]), c && (h.trigger("ajaxComplete", [ S, d ]), --pe.active || pe.event.trigger("ajaxStop")));
      }
      "object" == typeof t && (n = t, t = undefined), n = n || {};
      var i, o, a, s, u, c, l, f, d = pe.ajaxSetup({}, n), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? pe(p) :pe.event, g = pe.Deferred(), m = pe.Callbacks("once memory"), y = d.statusCode || {}, v = {}, b = {}, w = 0, x = "canceled", S = {
        readyState:0,
        getResponseHeader:function(e) {
          var t;
          if (2 === w) {
            if (!f) for (f = {}; t = zt.exec(s); ) f[t[1].toLowerCase()] = t[2];
            t = f[e.toLowerCase()];
          }
          return null == t ? null :t;
        },
        getAllResponseHeaders:function() {
          return 2 === w ? s :null;
        },
        setRequestHeader:function(e, t) {
          var n = e.toLowerCase();
          return w || (e = b[n] = b[n] || e, v[e] = t), this;
        },
        overrideMimeType:function(e) {
          return w || (d.mimeType = e), this;
        },
        statusCode:function(e) {
          var t;
          if (e) if (w < 2) for (t in e) y[t] = [ y[t], e[t] ]; else S.always(e[S.status]);
          return this;
        },
        abort:function(e) {
          var t = e || x;
          return l && l.abort(t), r(0, t), this;
        }
      };
      if (g.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, d.url = ((t || d.url || Qt) + "").replace($t, "").replace(Vt, Zt[1] + "//"), 
      d.type = n.method || n.type || d.method || d.type, d.dataTypes = pe.trim(d.dataType || "*").toLowerCase().match(je) || [ "" ], 
      null == d.crossDomain && (i = Kt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Zt[1] && i[2] === Zt[2] && (i[3] || ("http:" === i[1] ? "80" :"443")) === (Zt[3] || ("http:" === Zt[1] ? "80" :"443")))), 
      d.data && d.processData && "string" != typeof d.data && (d.data = pe.param(d.data, d.traditional)), 
      X(Gt, d, n, S), 2 === w) return S;
      c = pe.event && d.global, c && 0 == pe.active++ && pe.event.trigger("ajaxStart"), 
      d.type = d.type.toUpperCase(), d.hasContent = !Xt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Ft.test(a) ? "&" :"?") + d.data, 
      delete d.data), !1 === d.cache && (d.url = Wt.test(a) ? a.replace(Wt, "$1_=" + Pt++) :a + (Ft.test(a) ? "&" :"?") + "_=" + Pt++)), 
      d.ifModified && (pe.lastModified[a] && S.setRequestHeader("If-Modified-Since", pe.lastModified[a]), 
      pe.etag[a] && S.setRequestHeader("If-None-Match", pe.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && S.setRequestHeader("Content-Type", d.contentType), 
      S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Yt + "; q=0.01" :"") :d.accepts["*"]);
      for (o in d.headers) S.setRequestHeader(o, d.headers[o]);
      if (d.beforeSend && (!1 === d.beforeSend.call(p, S, d) || 2 === w)) return S.abort();
      x = "abort";
      for (o in {
        success:1,
        error:1,
        complete:1
      }) S[o](d[o]);
      if (l = X(Jt, d, n, S)) {
        if (S.readyState = 1, c && h.trigger("ajaxSend", [ S, d ]), 2 === w) return S;
        d.async && d.timeout > 0 && (u = e.setTimeout(function() {
          S.abort("timeout");
        }, d.timeout));
        try {
          w = 1, l.send(v, r);
        } catch (e) {
          if (!(w < 2)) throw e;
          r(-1, e);
        }
      } else r(-1, "No Transport");
      return S;
    },
    getJSON:function(e, t, n) {
      return pe.get(e, t, n, "json");
    },
    getScript:function(e, t) {
      return pe.get(e, undefined, t, "script");
    }
  }), pe.each([ "get", "post" ], function(e, t) {
    pe[t] = function(e, n, r, i) {
      return pe.isFunction(n) && (i = i || r, r = n, n = undefined), pe.ajax(pe.extend({
        url:e,
        type:t,
        dataType:i,
        data:n,
        success:r
      }, pe.isPlainObject(e) && e));
    };
  }), pe._evalUrl = function(e) {
    return pe.ajax({
      url:e,
      type:"GET",
      dataType:"script",
      cache:!0,
      async:!1,
      global:!1,
      "throws":!0
    });
  }, pe.fn.extend({
    wrapAll:function(e) {
      if (pe.isFunction(e)) return this.each(function(t) {
        pe(this).wrapAll(e.call(this, t));
      });
      if (this[0]) {
        var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
          return e;
        }).append(this);
      }
      return this;
    },
    wrapInner:function(e) {
      return pe.isFunction(e) ? this.each(function(t) {
        pe(this).wrapInner(e.call(this, t));
      }) :this.each(function() {
        var t = pe(this), n = t.contents();
        n.length ? n.wrapAll(e) :t.append(e);
      });
    },
    wrap:function(e) {
      var t = pe.isFunction(e);
      return this.each(function(n) {
        pe(this).wrapAll(t ? e.call(this, n) :e);
      });
    },
    unwrap:function() {
      return this.parent().each(function() {
        pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes);
      }).end();
    }
  }), pe.expr.filters.hidden = function(e) {
    return fe.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length :Y(e);
  }, pe.expr.filters.visible = function(e) {
    return !pe.expr.filters.hidden(e);
  };
  var en = /%20/g, tn = /\[\]$/, nn = /\r?\n/g, rn = /^(?:submit|button|image|reset|file)$/i, on = /^(?:input|select|textarea|keygen)/i;
  pe.param = function(e, t) {
    var n, r = [], i = function(e, t) {
      t = pe.isFunction(t) ? t() :null == t ? "" :t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };
    if (t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
      i(this.name, this.value);
    }); else for (n in e) Q(n, e[n], t, i);
    return r.join("&").replace(en, "+");
  }, pe.fn.extend({
    serialize:function() {
      return pe.param(this.serializeArray());
    },
    serializeArray:function() {
      return this.map(function() {
        var e = pe.prop(this, "elements");
        return e ? pe.makeArray(e) :this;
      }).filter(function() {
        var e = this.type;
        return this.name && !pe(this).is(":disabled") && on.test(this.nodeName) && !rn.test(e) && (this.checked || !Pe.test(e));
      }).map(function(e, t) {
        var n = pe(this).val();
        return null == n ? null :pe.isArray(n) ? pe.map(n, function(e) {
          return {
            name:t.name,
            value:e.replace(nn, "\r\n")
          };
        }) :{
          name:t.name,
          value:n.replace(nn, "\r\n")
        };
      }).get();
    }
  }), pe.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
    return this.isLocal ? ee() :re.documentMode > 8 ? Z() :/^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee();
  } :Z;
  var an = 0, sn = {}, un = pe.ajaxSettings.xhr();
  e.attachEvent && e.attachEvent("onunload", function() {
    for (var e in sn) sn[e](undefined, !0);
  }), fe.cors = !!un && "withCredentials" in un, un = fe.ajax = !!un, un && pe.ajaxTransport(function(t) {
    if (!t.crossDomain || fe.cors) {
      var n;
      return {
        send:function(r, i) {
          var o, a = t.xhr(), s = ++an;
          if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o];
          t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
          for (o in r) r[o] !== undefined && a.setRequestHeader(o, r[o] + "");
          a.send(t.hasContent && t.data || null), n = function(e, r) {
            var o, u, c;
            if (n && (r || 4 === a.readyState)) if (delete sn[s], n = undefined, a.onreadystatechange = pe.noop, 
            r) 4 !== a.readyState && a.abort(); else {
              c = {}, o = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
              try {
                u = a.statusText;
              } catch (e) {
                u = "";
              }
              o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) :o = c.text ? 200 :404;
            }
            c && i(o, u, c, a.getAllResponseHeaders());
          }, t.async ? 4 === a.readyState ? e.setTimeout(n) :a.onreadystatechange = sn[s] = n :n();
        },
        abort:function() {
          n && n(undefined, !0);
        }
      };
    }
  }), pe.ajaxPrefilter(function(e) {
    e.crossDomain && (e.contents.script = !1);
  }), pe.ajaxSetup({
    accepts:{
      script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents:{
      script:/\b(?:java|ecma)script\b/
    },
    converters:{
      "text script":function(e) {
        return pe.globalEval(e), e;
      }
    }
  }), pe.ajaxPrefilter("script", function(e) {
    e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), pe.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n = re.head || pe("head")[0] || re.documentElement;
      return {
        send:function(r, i) {
          t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), 
          t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, 
            t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"));
          }, n.insertBefore(t, n.firstChild);
        },
        abort:function() {
          t && t.onload(undefined, !0);
        }
      };
    }
  });
  var cn = [], ln = /(=)\?(?=&|$)|\?\?/;
  pe.ajaxSetup({
    jsonp:"callback",
    jsonpCallback:function() {
      var e = cn.pop() || pe.expando + "_" + Pt++;
      return this[e] = !0, e;
    }
  }), pe.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, o, a, s = !1 !== t.jsonp && (ln.test(t.url) ? "url" :"string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ln.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() :t.jsonpCallback, 
    s ? t[s] = t[s].replace(ln, "$1" + i) :!1 !== t.jsonp && (t.url += (Ft.test(t.url) ? "&" :"?") + t.jsonp + "=" + i), 
    t.converters["script json"] = function() {
      return a || pe.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
      a = arguments;
    }, r.always(function() {
      o === undefined ? pe(e).removeProp(i) :e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, 
      cn.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = undefined;
    }), "script";
  }), fe.createHTMLDocument = function() {
    if (!re.implementation.createHTMLDocument) return !1;
    var e = re.implementation.createHTMLDocument("");
    return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length;
  }(), pe.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || (fe.createHTMLDocument ? re.implementation.createHTMLDocument("") :re);
    var r = Se.exec(e), i = !n && [];
    return r ? [ t.createElement(r[1]) ] :(r = y([ e ], t, i), i && i.length && pe(i).remove(), 
    pe.merge([], r.childNodes));
  };
  var fn = pe.fn.load;
  pe.fn.load = function(e, t, n) {
    if ("string" != typeof e && fn) return fn.apply(this, arguments);
    var r, i, o, a = this, s = e.indexOf(" ");
    return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, 
    t = undefined) :t && "object" == typeof t && (i = "POST"), a.length > 0 && pe.ajax({
      url:e,
      type:i || "GET",
      dataType:"html",
      data:t
    }).done(function(e) {
      o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) :e);
    }).always(n && function(e, t) {
      a.each(function() {
        n.apply(a, o || [ e.responseText, t, e ]);
      });
    }), this;
  }, pe.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
    pe.fn[t] = function(e) {
      return this.on(t, e);
    };
  }), pe.expr.filters.animated = function(e) {
    return pe.grep(pe.timers, function(t) {
      return e === t.elem;
    }).length;
  }, pe.offset = {
    setOffset:function(e, t, n) {
      var r, i, o, a, s, u, c, l = pe.css(e, "position"), f = pe(e), d = {};
      "static" === l && (e.style.position = "relative"), s = f.offset(), o = pe.css(e, "top"), 
      u = pe.css(e, "left"), c = ("absolute" === l || "fixed" === l) && pe.inArray("auto", [ o, u ]) > -1, 
      c ? (r = f.position(), a = r.top, i = r.left) :(a = parseFloat(o) || 0, i = parseFloat(u) || 0), 
      pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), 
      null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) :f.css(d);
    }
  }, pe.fn.extend({
    offset:function(e) {
      if (arguments.length) return e === undefined ? this :this.each(function(t) {
        pe.offset.setOffset(this, e, t);
      });
      var t, n, r = {
        top:0,
        left:0
      }, i = this[0], o = i && i.ownerDocument;
      if (o) return t = o.documentElement, pe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), 
      n = te(o), {
        top:r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left:r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) :r;
    },
    position:function() {
      if (this[0]) {
        var e, t, n = {
          top:0,
          left:0
        }, r = this[0];
        return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() :(e = this.offsetParent(), 
        t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), 
        n.left += pe.css(e[0], "borderLeftWidth", !0)), {
          top:t.top - n.top - pe.css(r, "marginTop", !0),
          left:t.left - n.left - pe.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent:function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position"); ) e = e.offsetParent;
        return e || dt;
      });
    }
  }), pe.each({
    scrollLeft:"pageXOffset",
    scrollTop:"pageYOffset"
  }, function(e, t) {
    var n = /Y/.test(t);
    pe.fn[e] = function(r) {
      return Me(this, function(e, r, i) {
        var o = te(e);
        if (i === undefined) return o ? t in o ? o[t] :o.document.documentElement[r] :e[r];
        o ? o.scrollTo(n ? pe(o).scrollLeft() :i, n ? i :pe(o).scrollTop()) :e[r] = i;
      }, e, r, arguments.length, null);
    };
  }), pe.each([ "top", "left" ], function(e, t) {
    pe.cssHooks[t] = A(fe.pixelPosition, function(e, n) {
      if (n) return n = ht(e, t), lt.test(n) ? pe(e).position()[t] + "px" :n;
    });
  }), pe.each({
    Height:"height",
    Width:"width"
  }, function(e, t) {
    pe.each({
      padding:"inner" + e,
      content:t,
      "":"outer" + e
    }, function(n, r) {
      pe.fn[r] = function(r, i) {
        var o = arguments.length && (n || "boolean" != typeof r), a = n || (!0 === r || !0 === i ? "margin" :"border");
        return Me(this, function(t, n, r) {
          var i;
          return pe.isWindow(t) ? t.document.documentElement["client" + e] :9 === t.nodeType ? (i = t.documentElement, 
          Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) :r === undefined ? pe.css(t, n, a) :pe.style(t, n, r, a);
        }, t, o ? r :undefined, o, null);
      };
    });
  }), pe.fn.extend({
    bind:function(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind:function(e, t) {
      return this.off(e, null, t);
    },
    delegate:function(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate:function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") :this.off(t, e || "**", n);
    }
  }), pe.fn.size = function() {
    return this.length;
  }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return pe;
  });
  var dn = e.jQuery, pn = e.$;
  return pe.noConflict = function(t) {
    return e.$ === pe && (e.$ = pn), t && e.jQuery === pe && (e.jQuery = dn), pe;
  }, t || (e.jQuery = e.$ = pe), pe;
});
//# sourceMappingURL=/assets/maps/head_vendor-dd8e0ea32cfebebadfb5c0b144e5d4713d3a5b562bebc5d98a6d88b37390ebff.js.map
