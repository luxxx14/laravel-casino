/*! netent_gcc-netent_game_adapter : 1.1.7 - Tue, 09 Jul 2019 12:23:41 GMT | (c) 2019  NetEnt AB (publ) | ISC | https://www.netent.com/ */
! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("netent_gcc_shared"));
    else if ("function" == typeof define && define.amd) define(["netent_gcc_shared"], t);
    else {
        var n = "object" == typeof exports ? t(require("netent_gcc_shared")) : t(e.netent_gcc_shared);
        for (var r in n)("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(window, function(f) {
    return function(n) {
        var r = {};

        function o(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
        }
        return o.m = n, o.c = r, o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) o.d(n, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return n
        }, o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 3)
    }([function(e, t) {
        e.exports = f
    }, function(C, D, E) {
        window,
        C.exports = function(n) {
            var r = {};

            function o(e) {
                if (r[e]) return r[e].exports;
                var t = r[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
            }
            return o.m = n, o.c = r, o.d = function(e, t, n) {
                o.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }, o.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, o.t = function(t, e) {
                if (1 & e && (t = o(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) o.d(n, r, function(e) {
                        return t[e]
                    }.bind(null, r));
                return n
            }, o.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return o.d(t, "a", t), t
            }, o.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, o.p = "", o(o.s = 2)
        }([function(_, aa, ba) {
            /*! netent_gcc_shared - Fri, 14 Jun 2019 13:01:40 GMT | (c) 2019  NetEnt AB (publ) | ISC | https://www.netent.com/ */
            window,
            _.exports = function(n) {
                var r = {};

                function o(e) {
                    if (r[e]) return r[e].exports;
                    var t = r[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
                }
                return o.m = n, o.c = r, o.d = function(e, t, n) {
                    o.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, o.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, o.t = function(t, e) {
                    if (1 & e && (t = o(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var n = Object.create(null);
                    if (o.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var r in t) o.d(n, r, function(e) {
                            return t[e]
                        }.bind(null, r));
                    return n
                }, o.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return o.d(t, "a", t), t
                }, o.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, o.p = "", o(o.s = 12)
            }([function(ua, va) {
                var wa;
                wa = function() {
                    return this
                }();
                try {
                    wa = wa || Function("return this")() || eval("this")
                } catch (ua) {
                    "object" == typeof window && (wa = window)
                }
                ua.exports = wa
            }, function(e, t, n) {
                "use strict";
                t.a = function(t) {
                    var n = this.constructor;
                    return this.then(function(e) {
                        return n.resolve(t()).then(function() {
                            return e
                        })
                    }, function(e) {
                        return n.resolve(t()).then(function() {
                            return n.reject(e)
                        })
                    })
                }
            }, function(e, t) {
                ! function() {
                    function e(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var n = document.createEvent("CustomEvent");
                        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                    }
                    e.prototype = Event.prototype, window.CustomEvent = e
                }()
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e() {
                        var e = this;
                        this.loggingEnabled = !1, this.logger = Function.prototype.bind.call(console.log, console), document.body.addEventListener("GCC.enableLogging", function() {
                            e.loggingEnabled = !0, e.log("logging enabled!")
                        }), document.body.addEventListener("GCC.disableLogging", function() {
                            e.loggingEnabled = !1, e.log("logging disabled!")
                        })
                    }
                    return e.prototype.log = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.loggingEnabled && this.logger.apply(console, e)
                    }, e
                }();
                t.Logger = r
            }, function(e, t, n) {
                "use strict";
                var r, o;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r = t.Enums || (t.Enums = {}), (o = r.MessageType || (r.MessageType = {}))[o.Toast = 0] = "Toast", o[o.Dialog = 1] = "Dialog"
            }, function(e, t, n) {
                "use strict";
                var r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), (r = t.Constants || (t.Constants = {})).GCC = {
                    CONNECT_PNS: "GCC.connectPNS",
                    DISABLE_LOGGING: "GCC.disableLogging",
                    DISABLE_STATISTICS: "GCC.disableStatistics",
                    DISCONNECT_PNS: "GCC.disconnectPNS",
                    ENABLE_LOGGING: "GCC.enableLogging",
                    ENABLE_STATISTICS: "GCC.enableStatistics"
                }, r.Game = {
                    AUTOPLAY_STARTED: "Game.autoPlayStarted",
                    AUTOPLAY_STOPPED: "Game.autoPlayStopped",
                    GAME_RESOURCES_REQUEST: "Game.gameResourcesRequest",
                    GAME_RESOURCES_RESPONSE: "Game.gameResourcesResponse",
                    IDLE: "Game.idle",
                    NOT_IDLE: "Game.notIdle",
                    POPUP_HIDDEN: "Game.popupHidden",
                    POPUP_SHOWN: "Game.popupShown",
                    ROUND_ENDED: "Game.roundEnded",
                    USER_INPUT_END: "Game.userInputEnd"
                }, r.Notification = {
                    HIDE_MESSAGE: "Notification.hideMessage",
                    RENDER_MESSAGE: "Notification.renderMessage",
                    SEND_MESSAGE: "Notification.addMessageToQueue",
                    SET_DIALOG_VIEW: "Notification.setDialogView",
                    SET_FULLSCREEN_VIEW: "Notification.setFullscreenView",
                    SET_TOAST_VIEW: "Notification.setToastView",
                    SHOW_MESSAGE: "Notification.showMessage",
                    SHOW_NEXT_TOAST: "Notification.showNextToastMessage"
                }, r.STATISTICS = {
                    LOAD_STATISTICS: "Statistics.sendLoadStatistics",
                    PLAYER_STATISTICS: "Statistics.sendPlayerStatistics"
                }
            }, function(e, t) {
                ! function(e) {
                    "use strict";
                    if (!e.fetch) {
                        var a = {
                            searchParams: "URLSearchParams" in e,
                            iterable: "Symbol" in e && "iterator" in Symbol,
                            blob: "FileReader" in e && "Blob" in e && function() {
                                try {
                                    return new Blob, !0
                                } catch (e) {
                                    return !1
                                }
                            }(),
                            formData: "FormData" in e,
                            arrayBuffer: "ArrayBuffer" in e
                        };
                        if (a.arrayBuffer) var t = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                            n = function(e) {
                                return e && DataView.prototype.isPrototypeOf(e)
                            },
                            r = ArrayBuffer.isView || function(e) {
                                return e && -1 < t.indexOf(Object.prototype.toString.call(e))
                            };
                        l.prototype.append = function(e, t) {
                            e = s(e), t = u(t);
                            var n = this.map[e];
                            this.map[e] = n ? n + "," + t : t
                        }, l.prototype.delete = function(e) {
                            delete this.map[s(e)]
                        }, l.prototype.get = function(e) {
                            return e = s(e), this.has(e) ? this.map[e] : null
                        }, l.prototype.has = function(e) {
                            return this.map.hasOwnProperty(s(e))
                        }, l.prototype.set = function(e, t) {
                            this.map[s(e)] = u(t)
                        }, l.prototype.forEach = function(e, t) {
                            for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                        }, l.prototype.keys = function() {
                            var n = [];
                            return this.forEach(function(e, t) {
                                n.push(t)
                            }), c(n)
                        }, l.prototype.values = function() {
                            var t = [];
                            return this.forEach(function(e) {
                                t.push(e)
                            }), c(t)
                        }, l.prototype.entries = function() {
                            var n = [];
                            return this.forEach(function(e, t) {
                                n.push([t, e])
                            }), c(n)
                        }, a.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
                        var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                        v.prototype.clone = function() {
                            return new v(this, {
                                body: this._bodyInit
                            })
                        }, y.call(v.prototype), y.call(g.prototype), g.prototype.clone = function() {
                            return new g(this._bodyInit, {
                                status: this.status,
                                statusText: this.statusText,
                                headers: new l(this.headers),
                                url: this.url
                            })
                        }, g.error = function() {
                            var e = new g(null, {
                                status: 0,
                                statusText: ""
                            });
                            return e.type = "error", e
                        };
                        var o = [301, 302, 303, 307, 308];
                        g.redirect = function(e, t) {
                            if (-1 == o.indexOf(t)) throw new RangeError("Invalid status code");
                            return new g(null, {
                                status: t,
                                headers: {
                                    location: e
                                }
                            })
                        }, e.Headers = l, e.Request = v, e.Response = g, e.fetch = function(n, o) {
                            return new Promise(function(r, e) {
                                var t = new v(n, o),
                                    i = new XMLHttpRequest;
                                i.onload = function() {
                                    var e, o, t = {
                                        status: i.status,
                                        statusText: i.statusText,
                                        headers: (e = i.getAllResponseHeaders() || "", o = new l, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                            var t = e.split(":"),
                                                n = t.shift().trim();
                                            if (n) {
                                                var r = t.join(":").trim();
                                                o.append(n, r)
                                            }
                                        }), o)
                                    };
                                    t.url = "responseURL" in i ? i.responseURL : t.headers.get("X-Request-URL");
                                    var n = "response" in i ? i.response : i.responseText;
                                    r(new g(n, t))
                                }, i.onerror = function() {
                                    e(new TypeError("Network request failed"))
                                }, i.ontimeout = function() {
                                    e(new TypeError("Network request failed"))
                                }, i.open(t.method, t.url, !0), "include" === t.credentials ? i.withCredentials = !0 : "omit" === t.credentials && (i.withCredentials = !1), "responseType" in i && a.blob && (i.responseType = "blob"), t.headers.forEach(function(e, t) {
                                    i.setRequestHeader(t, e)
                                }), i.send(void 0 === t._bodyInit ? null : t._bodyInit)
                            })
                        }, e.fetch.polyfill = !0
                    }

                    function s(e) {
                        if ("string" != typeof e && (e += ""), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                        return e.toLowerCase()
                    }

                    function u(e) {
                        return "string" != typeof e && (e += ""), e
                    }

                    function c(t) {
                        var e = {
                            next: function() {
                                var e = t.shift();
                                return {
                                    done: void 0 === e,
                                    value: e
                                }
                            }
                        };
                        return a.iterable && (e[Symbol.iterator] = function() {
                            return e
                        }), e
                    }

                    function l(t) {
                        this.map = {}, t instanceof l ? t.forEach(function(e, t) {
                            this.append(t, e)
                        }, this) : Array.isArray(t) ? t.forEach(function(e) {
                            this.append(e[0], e[1])
                        }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                            this.append(e, t[e])
                        }, this)
                    }

                    function f(e) {
                        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        e.bodyUsed = !0
                    }

                    function d(n) {
                        return new Promise(function(e, t) {
                            n.onload = function() {
                                e(n.result)
                            }, n.onerror = function() {
                                t(n.error)
                            }
                        })
                    }

                    function p(e) {
                        var t = new FileReader,
                            n = d(t);
                        return t.readAsArrayBuffer(e), n
                    }

                    function h(e) {
                        if (e.slice) return e.slice(0);
                        var t = new Uint8Array(e.byteLength);
                        return t.set(new Uint8Array(e)), t.buffer
                    }

                    function y() {
                        return this.bodyUsed = !1, this._initBody = function(e) {
                            if (this._bodyInit = e)
                                if ("string" == typeof e) this._bodyText = e;
                                else if (a.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                            else if (a.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                            else if (a.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                            else if (a.arrayBuffer && a.blob && n(e)) this._bodyArrayBuffer = h(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                            else {
                                if (!a.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !r(e)) throw Error("unsupported BodyInit type");
                                this._bodyArrayBuffer = h(e)
                            } else this._bodyText = "";
                            this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, a.blob && (this.blob = function() {
                            var e = f(this);
                            if (e) return e;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
                        }), this.text = function() {
                            var e, t, n, r = f(this);
                            if (r) return r;
                            if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = d(t), t.readAsText(e), n;
                            if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                                for (var t = new Uint8Array(e), n = Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                                return n.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, a.formData && (this.formData = function() {
                            return this.text().then(m)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }

                    function v(e, t) {
                        var n, r, o = (t = t || {}).body;
                        if (e instanceof v) {
                            if (e.bodyUsed) throw new TypeError("Already read");
                            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new l(e.headers)), this.method = e.method, this.mode = e.mode, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
                        } else this.url = e + "";
                        if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new l(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), -1 < i.indexOf(r) ? r : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(o)
                    }

                    function m(e) {
                        var o = new FormData;
                        return e.trim().split("&").forEach(function(e) {
                            if (e) {
                                var t = e.split("="),
                                    n = t.shift().replace(/\+/g, " "),
                                    r = t.join("=").replace(/\+/g, " ");
                                o.append(decodeURIComponent(n), decodeURIComponent(r))
                            }
                        }), o
                    }

                    function g(e, t) {
                        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new l(t.headers), this.url = t.url || "", this._initBody(e)
                    }
                }("undefined" != typeof self ? self : this)
            }, function(e, t) {
                var n, r, o = e.exports = {};

                function i() {
                    throw Error("setTimeout has not been defined")
                }

                function a() {
                    throw Error("clearTimeout has not been defined")
                }

                function s(t) {
                    if (n === setTimeout) return setTimeout(t, 0);
                    if ((n === i || !n) && setTimeout) return (n = setTimeout)(t, 0);
                    try {
                        return n(t, 0)
                    } catch (e) {
                        try {
                            return n.call(null, t, 0)
                        } catch (e) {
                            return n.call(this, t, 0)
                        }
                    }
                }! function() {
                    try {
                        n = "function" == typeof setTimeout ? setTimeout : i
                    } catch (e) {
                        n = i
                    }
                    try {
                        r = "function" == typeof clearTimeout ? clearTimeout : a
                    } catch (e) {
                        r = a
                    }
                }();
                var u, c = [],
                    l = !1,
                    f = -1;

                function d() {
                    l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p())
                }

                function p() {
                    if (!l) {
                        var e = s(d);
                        l = !0;
                        for (var t = c.length; t;) {
                            for (u = c, c = []; ++f < t;) u && u[f].run();
                            f = -1, t = c.length
                        }
                        u = null, l = !1,
                            function(t) {
                                if (r === clearTimeout) return clearTimeout(t);
                                if ((r === a || !r) && clearTimeout) return (r = clearTimeout)(t);
                                try {
                                    r(t)
                                } catch (e) {
                                    try {
                                        return r.call(null, t)
                                    } catch (e) {
                                        return r.call(this, t)
                                    }
                                }
                            }(e)
                    }
                }

                function h(e, t) {
                    this.fun = e, this.array = t
                }

                function y() {}
                o.nextTick = function(e) {
                    var t = Array(arguments.length - 1);
                    if (1 < arguments.length)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    c.push(new h(e, t)), 1 !== c.length || l || s(p)
                }, h.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(e) {
                    return []
                }, o.binding = function(e) {
                    throw Error("process.binding is not supported")
                }, o.cwd = function() {
                    return "/"
                }, o.chdir = function(e) {
                    throw Error("process.chdir is not supported")
                }, o.umask = function() {
                    return 0
                }
            }, function(e, t, n) {
                (function(e, h) {
                    ! function(n, r) {
                        "use strict";
                        if (!n.setImmediate) {
                            var o, i = 1,
                                a = {},
                                s = !1,
                                u = n.document,
                                e = Object.getPrototypeOf && Object.getPrototypeOf(n);
                            e = e && e.setTimeout ? e : n, o = "[object process]" === {}.toString.call(n.process) ? function(e) {
                                h.nextTick(function() {
                                    p(e)
                                })
                            } : function() {
                                if (n.postMessage && !n.importScripts) {
                                    var e = !0,
                                        t = n.onmessage;
                                    return n.onmessage = function() {
                                        e = !1
                                    }, n.postMessage("", "*"), n.onmessage = t, e
                                }
                            }() ? (l = "setImmediate$" + Math.random() + "$", f = function(e) {
                                e.source === n && "string" == typeof e.data && 0 == e.data.indexOf(l) && p(+e.data.slice(l.length))
                            }, n.addEventListener ? n.addEventListener("message", f, !1) : n.attachEvent("onmessage", f), function(e) {
                                n.postMessage(l + e, "*")
                            }) : n.MessageChannel ? ((t = new MessageChannel).port1.onmessage = function(e) {
                                p(e.data)
                            }, function(e) {
                                t.port2.postMessage(e)
                            }) : u && "onreadystatechange" in u.createElement("script") ? (c = u.documentElement, function(e) {
                                var t = u.createElement("script");
                                t.onreadystatechange = function() {
                                    p(e), t.onreadystatechange = null, c.removeChild(t), t = null
                                }, c.appendChild(t)
                            }) : function(e) {
                                setTimeout(p, 0, e)
                            }, e.setImmediate = function(e) {
                                "function" != typeof e && (e = Function("" + e));
                                for (var t = Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                                var r = {
                                    callback: e,
                                    args: t
                                };
                                return a[i] = r, o(i), i++
                            }, e.clearImmediate = d
                        }
                        var c, t, l, f;

                        function d(e) {
                            delete a[e]
                        }

                        function p(e) {
                            if (s) setTimeout(p, 0, e);
                            else {
                                var t = a[e];
                                if (t) {
                                    s = !0;
                                    try {
                                        ! function(e) {
                                            var t = e.callback,
                                                n = e.args;
                                            switch (n.length) {
                                                case 0:
                                                    t();
                                                    break;
                                                case 1:
                                                    t(n[0]);
                                                    break;
                                                case 2:
                                                    t(n[0], n[1]);
                                                    break;
                                                case 3:
                                                    t(n[0], n[1], n[2]);
                                                    break;
                                                default:
                                                    t.apply(r, n)
                                            }
                                        }(t)
                                    } finally {
                                        d(e), s = !1
                                    }
                                }
                            }
                        }
                    }("undefined" == typeof self ? void 0 === e ? this : e : self)
                }).call(this, n(0), n(7))
            }, function(e, o, i) {
                (function(e) {
                    var t = void 0 !== e && e || "undefined" != typeof self && self || window,
                        n = Function.prototype.apply;

                    function r(e, t) {
                        this._id = e, this._clearFn = t
                    }
                    o.setTimeout = function() {
                        return new r(n.call(setTimeout, t, arguments), clearTimeout)
                    }, o.setInterval = function() {
                        return new r(n.call(setInterval, t, arguments), clearInterval)
                    }, o.clearTimeout = o.clearInterval = function(e) {
                        e && e.close()
                    }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
                        this._clearFn.call(t, this._id)
                    }, o.enroll = function(e, t) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                    }, o.unenroll = function(e) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                    }, o._unrefActive = o.active = function(e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        0 <= t && (e._idleTimeoutId = setTimeout(function() {
                            e._onTimeout && e._onTimeout()
                        }, t))
                    }, i(8), o.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, o.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
                }).call(this, i(0))
            }, function(e, l, f) {
                "use strict";
                f.r(l),
                    function(t) {
                        var e = f(1),
                            n = setTimeout;

                        function r() {}

                        function i(e) {
                            if (!(this instanceof i)) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof e) throw new TypeError("not a function");
                            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
                        }

                        function o(n, r) {
                            for (; 3 === n._state;) n = n._value;
                            0 !== n._state ? (n._handled = !0, i._immediateFn(function() {
                                var e = 1 === n._state ? r.onFulfilled : r.onRejected;
                                if (null !== e) {
                                    var t;
                                    try {
                                        t = e(n._value)
                                    } catch (e) {
                                        return void s(r.promise, e)
                                    }
                                    a(r.promise, t)
                                } else(1 === n._state ? a : s)(r.promise, n._value)
                            })) : n._deferreds.push(r)
                        }

                        function a(e, t) {
                            try {
                                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                                if (t && ("object" == typeof t || "function" == typeof t)) {
                                    var n = t.then;
                                    if (t instanceof i) return e._state = 3, e._value = t, void u(e);
                                    if ("function" == typeof n) return void c((r = n, o = t, function() {
                                        r.apply(o, arguments)
                                    }), e)
                                }
                                e._state = 1, e._value = t, u(e)
                            } catch (t) {
                                s(e, t)
                            }
                            var r, o
                        }

                        function s(e, t) {
                            e._state = 2, e._value = t, u(e)
                        }

                        function u(e) {
                            2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                                e._handled || i._unhandledRejectionFn(e._value)
                            });
                            for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
                            e._deferreds = null
                        }

                        function c(e, t) {
                            var n = !1;
                            try {
                                e(function(e) {
                                    n || (n = !0, a(t, e))
                                }, function(e) {
                                    n || (n = !0, s(t, e))
                                })
                            } catch (e) {
                                if (n) return;
                                n = !0, s(t, e)
                            }
                        }
                        i.prototype.catch = function(e) {
                            return this.then(null, e)
                        }, i.prototype.then = function(e, t) {
                            var n = new this.constructor(r);
                            return o(this, new function(e, t, n) {
                                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                            }(e, t, n)), n
                        }, i.prototype.finally = e.a, i.all = function(t) {
                            return new i(function(r, o) {
                                if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
                                var i = Array.prototype.slice.call(t);
                                if (0 === i.length) return r([]);
                                var a = i.length;

                                function s(t, e) {
                                    try {
                                        if (e && ("object" == typeof e || "function" == typeof e)) {
                                            var n = e.then;
                                            if ("function" == typeof n) return void n.call(e, function(e) {
                                                s(t, e)
                                            }, o)
                                        }
                                        i[t] = e, 0 == --a && r(i)
                                    } catch (t) {
                                        o(t)
                                    }
                                }
                                for (var e = 0; e < i.length; e++) s(e, i[e])
                            })
                        }, i.resolve = function(t) {
                            return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
                                e(t)
                            })
                        }, i.reject = function(n) {
                            return new i(function(e, t) {
                                t(n)
                            })
                        }, i.race = function(o) {
                            return new i(function(e, t) {
                                for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
                            })
                        }, i._immediateFn = "function" == typeof t && function(e) {
                            t(e)
                        } || function(e) {
                            n(e, 0)
                        }, i._unhandledRejectionFn = function(e) {}, l.default = i
                    }(f(9).setImmediate)
            }, function(e, t, n) {
                /*! netent_gcc_mediator : 0.3.3 - Fri, 14 Jun 2019 13:01:18 GMT | (c) 2019  NetEnt AB (publ) | ISC | https://www.netent.com/ */
                window,
                e.exports = function(n) {
                    var r = {};

                    function o(e) {
                        if (r[e]) return r[e].exports;
                        var t = r[e] = {
                            i: e,
                            l: !1,
                            exports: {}
                        };
                        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
                    }
                    return o.m = n, o.c = r, o.d = function(e, t, n) {
                        o.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: n
                        })
                    }, o.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, o.t = function(t, e) {
                        if (1 & e && (t = o(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var n = Object.create(null);
                        if (o.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var r in t) o.d(n, r, function(e) {
                                return t[e]
                            }.bind(null, r));
                        return n
                    }, o.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return o.d(t, "a", t), t
                    }, o.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, o.p = "", o(o.s = 0)
                }([function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                        function e() {}
                        return e.prototype.fire = function(e, t) {
                            document.body.dispatchEvent(new CustomEvent(e, {
                                detail: t
                            }))
                        }, e.prototype.listen = function(e, t) {
                            document.body.addEventListener(e, t)
                        }, e.prototype.removeListener = function(e, t) {
                            document.body.removeEventListener(e, t)
                        }, e
                    }();
                    t.Mediator = r
                }])
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(11),
                    o = n(10);
                n(6);
                var i, a = n(5),
                    s = n(4),
                    u = n(3);
                n(2), window.Promise || (window.Promise = o.default), (i = t.netent_gcc_shared || (t.netent_gcc_shared = {})).AppConstants = a.Constants, i.AppEnums = s.Enums, i.ConsoleLogger = new u.Logger, i.EventsMediator = new r.Mediator
            }])
        }, function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(i, a, s, u) {
                    return new(s || (s = Promise))(function(e, t) {
                        function n(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function r(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(t) {
                            t.done ? e(t.value) : new s(function(e) {
                                e(t.value)
                            }).then(n, r)
                        }
                        o((u = u.apply(i, a || [])).next())
                    })
                },
                d = this && this.__generator || function(n, r) {
                    var o, i, a, e, s = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return e = {
                        next: t(0),
                        throw: t(1),
                        return: t(2)
                    }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (o) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
                                    switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    o = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                i = function() {
                    function e() {
                        this.logger = o.netent_gcc_shared.ConsoleLogger, this.defaultGameClientConfigServiceURI = "", this.defaultPnsURI = "", this.defaultAdventureURI = ""
                    }
                    return e.prototype.fetchClientConfigs = function(f) {
                        return r(this, void 0, void 0, function() {
                            var o, i, t, n, r, a, s, u, c, l = this;
                            return d(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                      
                                    case 1:
                                    
                                    case 2:
                                        return e.sent(), [2, {
                                            adventureURL: o,
                                            pnsURL: i,
                                            pnsEnabled: n,
                                            adventureEnabled: r
                                        }]
                                }
                            })
                        })
                    }, e
                }();
            t.GameClientConfig = i
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1);
            t.GameClientConfig = r.GameClientConfig
        }])
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function(i, a, s, u) {
                return new(s || (s = Promise))(function(e, t) {
                    function n(e) {
                        try {
                            o(u.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function r(e) {
                        try {
                            o(u.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function o(t) {
                        t.done ? e(t.value) : new s(function(e) {
                            e(t.value)
                        }).then(n, r)
                    }
                    o((u = u.apply(i, a || [])).next())
                })
            },
            m = this && this.__generator || function(n, r) {
                var o, i, a, e, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }), e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (o) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
                                switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        a = t;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, i = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                            s.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && s.label < a[1]) {
                                            s.label = a[1], a = t;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2], s.ops.push(t);
                                            break
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                t = r.call(n, s)
                            } catch (e) {
                                t = [6, e], i = 0
                            } finally {
                                o = a = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(1),
            i = n(0),
            g = i.netent_gcc_shared.EventsMediator,
            b = i.netent_gcc_shared.AppConstants,
            a = function() {
                function e() {
                    this.gameClientConfig = new o.GameClientConfig, this.resourcesFetched = !1, this.init()
                }
                return e.prototype.getGameResources = function() {
                    return r(this, void 0, void 0, function() {
                        var t, n, r, o, i;
                        return m(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return window.Resources ? (t = window.Resources, r = n = "", i = o = !1, [4, this.gameClientConfig.fetchClientConfigs(t).then(function(e) {
                                        n = e.adventureURL, r = e.pnsURL, o = e.pnsEnabled, i = e.adventureEnabled
                                    })]) : [2, {}];
                                case 1:
                                    return e.sent(), [2, {
                                        adventureEnabled: i,
                                        adventureURI: n,
                                        casinoID: t.readData("gameServerInitResponseObject").casinoID,
                                        currency: t.readData("gameServerInitResponseObject").playercurrencyiso,
                                        gameID: t.readData("queryData").gameId,
                                        gameServer: t.readData("queryData").server,
                                        game_load_started_time: t.readData("queryData").game_load_started_time,
                                        lang: t.readData("language").lang,
                                        logsId: t.readData("queryData").logsId,
                                        pnsEnabled: o,
                                        pnsURI: r,
                                        sessionID: t.readData("sessionID"),
                                        statisticEndpointURL: t.readData("queryData").statisticEndpointURL
                                    }]
                            }
                        })
                    })
                }, e.prototype.attachEventHandlers = function() {
                    var e = this;
                    window.Sys && window.Sys.Observable && (this.eventHandler = new window.Sys.Observable, this.eventHandler.on({
                        "notify.dialogWindow.showingDialog": this.handlePopupShownEvent,
                        "notify:autoPlayer.starting": this.handleAutoPlayerStartingEvent,
                        "notify:autoPlayer.stopped": this.handleAutoPlayerStoppedEvent,
                        "notify:dialogWindow.allDialogsClosed": this.handlePopupClosedEvent,
                        "notify:pluginMenu.activated": this.handlePopupShownEvent,
                        "notify:pluginMenu.deactivated": this.handlePopupClosedEvent,
                        "notify:settingsWindow.closed": this.handlePopupClosedEvent,
                        "notify:settingsWindow.open": this.handlePopupShownEvent,
                        "notify:stateHandler.enteringIdleState": this.handleEnteringIdleStateEvent,
                        "notify:userInputManager.userInputEnded": this.handleUserInputEnd,
                        "request:dialogWindow.showDialog": this.handleShowDialogEvent,
                        "request:spin.startNewRound": this.handleStartNewRoundEvent
                    }), g.listen(b.Game.GAME_RESOURCES_REQUEST, function() {
                        return r(e, void 0, void 0, function() {
                            var t, n, r, o, i, a, s, u, c, l, f, d, p, h, y, v;
                            return m(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.resourcesFetched ? (g.fire(b.Game.GAME_RESOURCES_RESPONSE, this.gameResources), [2]) : (this.resourcesFetched = !0, [4, (t = this).getGameResources()]);
                                    case 1:
                                        return t.gameResources = e.sent(), n = this.gameResources, r = n.pnsURI, o = n.pnsEnabled, i = n.sessionID, a = n.casinoID, s = n.lang, u = n.gameID, c = n.statisticEndpointURL, l = n.logsId, f = n.game_load_started_time, d = n.gameServer, o && this.connectToPNS(r, i, a, s), window.Game && window.Game.moduleLoader && "Idle" === window.Game.moduleLoader.stateHandler.currentState.name && g.fire(b.Game.IDLE, {}), g.fire(b.Game.GAME_RESOURCES_RESPONSE, this.gameResources), c && 0 < c.length && (p = {
                                            statisticEndpointURL: c
                                        }, g.fire(b.GCC.ENABLE_STATISTICS, p)), l ? (h = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage, y = -1 != i.toLowerCase().indexOf("demo-") ? "demo" : "real", v = {
                                            blang: h,
                                            casinourl: window.location.host + window.location.pathname,
                                            clientName: "GCC",
                                            gameId: u,
                                            gameLoadTime: f,
                                            gameServer: d,
                                            gameType: y,
                                            hwc: navigator.hardwareConcurrency || 1,
                                            logSeqNo: 1,
                                            logsId: l,
                                            ua: encodeURIComponent(navigator.userAgent)
                                        }, g.fire(b.STATISTICS.LOAD_STATISTICS, v), [2]) : [2]
                                }
                            })
                        })
                    }), this.attachServicesEventHandlers())
                }, e.prototype.handleAutoPlayerStartingEvent = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    g.fire(b.Game.AUTOPLAY_STARTED, e)
                }, e.prototype.handleAutoPlayerStoppedEvent = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    g.fire(b.Game.AUTOPLAY_STOPPED, e)
                }, e.prototype.handleEnteringIdleStateEvent = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    g.fire(b.Game.IDLE, e)
                }, e.prototype.handleStartNewRoundEvent = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    g.fire(b.Game.NOT_IDLE, e)
                }, e.prototype.handleShowDialogEvent = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = {
                        displayType: "DIALOG",
                        messageContent: e
                    };
                    g.fire(b.Notification.SEND_MESSAGE, n)
                }, e.prototype.handlePopupShownEvent = function() {
                    g.fire(b.Game.POPUP_SHOWN, {})
                }, e.prototype.handlePopupClosedEvent = function() {
                    g.fire(b.Game.POPUP_HIDDEN, {})
                }, e.prototype.attachServicesEventHandlers = function() {
                    window.Services.autoplay && (window.Services.autoplay.on("opened", this.handlePopupShownEvent), window.Services.autoplay.on("closed", this.handlePopupClosedEvent)), window.Services.gameSettings && (window.Services.gameSettings.on("opened", this.handlePopupShownEvent), window.Services.gameSettings.on("closed", this.handlePopupClosedEvent)), window.Services.gameRules && (window.Services.gameRules.on("opened", this.handlePopupShownEvent), window.Services.gameRules.on("closed", this.handlePopupClosedEvent)), window.Services.paytable && (window.Services.paytable.on("opened", this.handlePopupShownEvent), window.Services.paytable.on("closed", this.handlePopupClosedEvent))
                }, e.prototype.handleShowingDialogEvent = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                }, e.prototype.handleUserInputEnd = function(e, t) {
                    g.fire(b.Game.USER_INPUT_END, t)
                }, e.prototype.connectToPNS = function(e, t, n, r) {
                    g.fire(b.GCC.CONNECT_PNS, {
                        casinoId: n,
                        lang: r,
                        pnsURI: e,
                        sessionId: t
                    })
                }, e.prototype.init = function() {
                    var e = this;
                    this.gameWaitInterval = window.setInterval(function() {
                        window.Resources && window.Sys && window.Sys.Observable && window.Game && window.Game.moduleLoader && window.Game.moduleLoader.stateHandler && window.Resources.readData("gameServerInitResponseObject").casinoID && window.Resources.readData("queryData").gameId && window.Resources.readData("language").lang && window.Resources.readData("sessionID") && (clearInterval(e.gameWaitInterval), e.attachEventHandlers(), g.fire(b.Game.GAME_RESOURCES_REQUEST, {}))
                    }, 200)
                }, e
            }();
        t.default = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), new(n(2).default)
    }])
});