var CON_VERSION = {
    release: '2016.06.22_004952',
    dir: 'nt6.8.1',
    script: '2016.05.23',
    ntid: '2015.11.05',
    im: '2015.11.17',
    chat: '2015.11.17',
    publish: '2016.01.04_000000'
};
var CON_RULE = {};
var CON_SERVER = {
    flashserver: 'http://downt.ntalker.com/t2d/'
};

/* @file nt1.js
 * @date 2016.05.25 14:25:00 
 */
!
function(window, underfined) {
    var root, readyList = [],
    loadList = {},
    core_strUndefined = "undefined",
    location = window.location,
    document = window.document,
    navigator = window.navigator,
    core_deletedIds = [],
    class2type = {},
    core_push = core_deletedIds.push,
    core_slice = core_deletedIds.slice,
    core_hasOwn = class2type.hasOwnProperty,
    core_version = "2015.09.23",
    rQuickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    rSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    cssValueExp = /[\-\+0-9\.]/gi,
    rCamelCase = /-([a-z])/gi,
    clearHtmlExp = /(<.*?>)/gi,
    nTalk = function(a, b) {
        return new nTalk.fn.init(a, b, root)
    },
    readyComplete = !1,
    emptyFunc = function() {};
    nTalk.fn = nTalk.prototype = {
        talkVersion: core_version,
        constructor: nTalk,
        init: function(a, b, c) {
            var d, e;
            if (!a) return this;
            if ("string" == typeof a) return d = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : rQuickExpr.exec(a),
            !d || !d[1] && b ? !b || b.talkVersion ? (b || c).find(a) : this.constructor(b).find(a) : d[1] ? (b = b instanceof nTalk ? b[0] : b, nTalk.merge(this, nTalk.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b: document, !0)), this) : (e = document.getElementById(d[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = document, this.selector = a, this);
            if (a.nodeType || nTalk.isWindow(a)) return this.context = this[0] = a,
            this.length = 1,
            this;
            if (nTalk.isObject(a) && a.talkVersion) return a.length && (this.context = this[0] = a[0], this.length = 1),
            this;
            if (nTalk.isPlainObject(a)) {
                var f = a.tag || "div";
                return delete a.tag,
                this.context = this[0] = nTalk.Element(f, a),
                this.length = 1,
                this
            }
            return nTalk.isFunction(a) ? nTalk.ready(a) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), nTalk.merge(this, [a]))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return core_slice.call(this)
        },
        get: function(a) {
            return null === a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            var b = nTalk.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        slice: function() {
            return this.pushStack(core_slice.apply(this, arguments))
        },
        eq: function(a) {
            var b = this.length,
            c = +a + (0 > a ? b: 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(this.length - 1)
        },
        each: function(a, b) {
            return nTalk.each(this, a, b)
        },
        find: function(a) {
            var b = this.constructor.selector.query(a, this);
            return this.pushStack(b)
        },
        push: core_push,
        sort: [].sort,
        splice: [].splice
    },
    nTalk.fn.init.prototype = nTalk.fn,
    nTalk.extend = nTalk.fn.extend = function() {
        var a, b, c, d, e, f = arguments[0] || {},
        g = 1,
        h = arguments.length,
        i = !1;
        for ("boolean" == typeof f && (i = f, f = arguments[1] || {},
        g = 2), "object" == typeof f || nTalk.isFunction(f) || (f = {}), h === g && (f = this, --g); h > g; g++) if (a = arguments[g]) for (var j in a) a.hasOwnProperty(j) && (b = f[j], c = a[j], f !== c && (i && c && (nTalk.isPlainObject(c) || (d = nTalk.isArray(c))) ? (d ? (d = !1, e = b && nTalk.isArray(b) ? b: []) : e = b && nTalk.isPlainObject(b) ? b: {},
        f[j] = nTalk.extend(i, e, c)) : void 0 !== c && (f[j] = c)));
        return f
    },
    nTalk.extend({
        CON_CACHE_COOKIE: "nTalk_CACHE_DATA",
        CON_MANAGE_COOKIE: "nTalk_PAGE_MANAGE",
        CON_PCID_KEY: "NTKF_T2D_CLIENTID",
        CON_CONNECT_FLASH: "FLASH",
        CON_CONNECT_COMET: "COMET",
        STYLE_BODY: "margin:0;padding:0;border:none;float:none;width:auto;height:auto;min-width:none;min-height:none;max-width:none;max-height:none;clear:none;position:static;left:auto;top:auto;right:auto;bottom:auto;text-align:left;box-sizing:content-box;color:#000;background-color:transparent;font:normal normal normal 12px/160% Arial,Microsoft YaHei;",
        STYLE_NBODY: "margin:0;padding:0;border:none;float:none;width:auto;height:auto;min-width:none;min-height:none;max-width:none;max-height:none;clear:none;position:static;left:auto;top:auto;right:auto;bottom:auto;text-align:left;box-sizing:content-box;color:#000;background-color:transparent;font:normal normal normal 0px/0px Arial,Microsoft YaHei;",
        isReady: !1,
        Log: emptyFunc,
        charset: document.charset || document.characterSet,
        language: navigator.language || navigator.systemLanguage,
        protocol: location.protocol,
        url: location.href,
        title: document.title,
        referrer: document.referrer,
        source: "",
        domain: "",
        baseProtocol: "",
        baseURI: "",
        sourceURI: "",
        baseName: "",
        baseExt: "",
        extParmas: {},
        pageURI: "",
        pageName: "",
        params: null,
        hashParams: null,
        user: {},
        lang: null,
        server: null,
        global: {},
        IMPRESENCE: null,
        version: {
            pub: core_version
        },
        elementParent: null,
        elementBefore: null,
        themesURI: "",
        isNumeric: function(a) {
            return ! isNaN(parseFloat(a)) && isFinite(a)
        },
        isBoolean: function(a) {
            return "boolean" == typeof a
        },
        isDefined: function(a) {
            return "undefined" != typeof a
        },
        isWindow: function(a) {
            return a && a == a.window
        },
        isFunction: function(a) {
            return "[object Function]" === Object.prototype.toString.call(a)
        },
        isArray: function(a) {
            return nTalk.isFunction(Array.isArray) ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
        },
        isObject: function(a) {
            return "[object Object]" === Object.prototype.toString.call(a) && a && !this.isDefined(a.nodeType)
        },
        isEmptyObject: function(a) {
            for (var b in a) if (a.hasOwnProperty(b)) return ! 1;
            return ! 0
        },
        isPlainObject: function(a) {
            if ("object" != typeof a || a.nodeType || this.isWindow(a)) return ! 1;
            try {
                if (a.constructor && !core_hasOwn.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(b) {
                return ! 1
            }
            return ! 0
        },
        getWindow: function(a) {
            return nTalk.isWindow(a) ? a: 9 === a.nodeType && a.defaultView
        },
        bind: function(a, b) {
            var c = Array.prototype.slice.call(arguments).slice(2);
            return function(d) {
                return b.apply(a, [d || window.event].concat(c))
            }
        },
        parseHTML: function(a, b) {
            if (!a || "string" != typeof a) return null;
            b = b || document;
            var c = rSingleTag.exec(a);
            if (c) return [b.createElement(c[1])];
            if (/<|&#?\w+;/.test(a)) {
                var d = b.createElement("div");
                return d.innerHTML = a,
                nTalk.merge([], d.childNodes)
            }
            return [b.createTextNode(a)]
        },
        merge: function() {
            var a, b, c, d = arguments[0] || {},
            e = arguments;
            if (e.length <= 1) return d;
            for (a = 1; a < e.length; a++) if (e[a] && null !== e[a]) if (void 0 === e[a].length) for (b in e[a]) e[a].hasOwnProperty(b) && (d[b] = e[a][b]);
            else for (b = 0, c = e[a].length; c > b; b++) void 0 !== d.length ? d.push(e[a][b]) : d[b] = e[a][b];
            return d
        },
        each: function(a, b, c) {
            if (nTalk.isArray(c) || (c = []), nTalk.isArray(a) || nTalk.isObject(a) && a.talkVersion) for (var d = 0; d < a.length && b.apply(a[d], [d, a[d++]].concat(c)) !== !1;);
            else if (nTalk.isObject(a)) for (var e in a) a.hasOwnProperty(e) && b.apply(a[e], [e, a[e]].concat(c));
            else b.apply(a, [0, a].concat(c));
            return a
        },
        access: function(a, b, c, d, e) {
            var f = 0,
            g = a.length;
            if (nTalk.isPlainObject(c)) {
                e = !0;
                for (var h in c) c.hasOwnProperty(h) && nTalk.access(a, b, h, c[h], !0)
            } else if (void 0 !== d) for (e = !0; g > f; f++) b(a[f], c, d);
            return e ? a: g ? b(a[0], c) : null
        },
        strFormat: function(a, b) {
            for (var c = "",
            d = 1,
            e = b || 2; e >= d; d++) c += "0";
            return c += a || "",
            c.substr(c.length - e)
        },
        getTime: function(a) {
            var b = (new Date).getTime(),
            c = 1e3 * Math.random();
            switch (c = this.strFormat(Math.floor(c), 3), a) {
            case 2:
                return b.toString() + c;
            case 1:
                return b + c;
            default:
                return b
            }
        },
        secondsToMinutes: function(a) {
            var b = "",
            c = a,
            d = this.strFormat;
            return c >= 60 ? (b += d(Math.floor(c / 60)), c %= 60) : b += "00",
            b + ":" + d(c)
        },
        formatDate: function(a, b) {
            var c, d;
            this.isNumeric(a) ? c = new Date(a) : "string" == typeof a ? (c = new Date, b = a) : c = new Date,
            b = b || "HH:mm:ss",
            d = {
                "M+": c.getMonth() + 1,
                "d+": c.getDate(),
                "h+": c.getHours() % 12 === 0 ? 12 : c.getHours() % 12,
                "H+": c.getHours(),
                "m+": c.getMinutes(),
                "s+": c.getSeconds(),
                "q+": Math.floor((c.getMonth() + 3) / 3),
                "S+": c.getMilliseconds()
            },
            /(y+)/i.test(b) && (b = b.replace(RegExp.$1, (c.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var e in d) d.hasOwnProperty(e) && new RegExp("(" + e + ")").test(b) && (b = "S" == RegExp.$1 ? b.replace(RegExp.$1, ("00" + d[e]).substr(3)) : b.replace(RegExp.$1, 1 == RegExp.$1.length ? d[e] : ("00" + d[e]).substr(("" + d[e]).length)));
            return b
        },
        randomChar: function(a, b) {
            for (var c = "",
            d = a || 8,
            e = 10 == b ? "0123456789": "0123456789ABCDEF", f = 0; d > f; f++) c += e.charAt(Math.round(Math.random() * (e.length - 1)));
            return c
        }
    }),
    nTalk.selector = {
        tagGuid: 1,
        attrMap: {
            "class": "className",
            "for": "htmlFor"
        },
        rex: {
            R_RULE: /[ +>~]/g,
            NR_RULE: /[^ +>~]+/g,
            TRIM_LR: /^ +| +$/g,
            TRIM_ALL: / *([ +>~,]) */g,
            PSEU_PARAM: /\([^()]+\)/g,
            ATTR_PARAM: /[^\[]+(?=])/g,
            ATTR: /=|!=|\^=|\$=|\*=|~=|\|=/,
            CLS: /\./g,
            PSEU: /[^:]+/g,
            NUM: /\d+/,
            NTH: /(-?\d*)n([+-]?\d*)/,
            RULES: /((?:#.+)*)([a-zA-Z1-6*]*)([^\[:]*)((?:\[.+])*)((?::.+)*)/
        },
        query: function(a, b) {
            if ("undefined" == typeof a || !a) return [];
            var c, d, e, f, g, h, i, j = [];
            switch (typeof b) {
            case "undefined":
                d = [document];
                break;
            case "string":
                a = b + " " + a,
                d = [document];
                break;
            case "object":
                d = b.nodeType ? [b] : b
            }
            for (c = this.format(a), b = d, f = 0, g = c.length; g > f; f++) {
                for (a = c[f], e = (" " + a).match(this.rex.R_RULE), a = a.match(this.rex.NR_RULE), d = b, h = 0, i = e.length; i > h; h++) d = this.parse(a[h], d, e[h]);
                j = j.concat(d)
            }
            return g > 1 ? this.makeDiff(j) : j
        },
        format: function(a) {
            var b = [],
            c = [];
            this.pseuParams = b,
            this.attrParams = c,
            a = a.replace(this.rex.TRIM_LR, "").replace(this.rex.TRIM_ALL, "$1").replace(this.rex.ATTR_PARAM,
            function(a) {
                return c.push(a) - 1
            });
            for (var d = function(a) {
                return b.push(a.substring(1, a.length - 1)) - 1
            }; - 1 !== a.indexOf("(");) a = a.replace(this.rex.PSEU_PARAM, d);
            return a.split(",")
        },
        parse: function(a, b, c) {
            var d, e, f, g, h, i;
            return e = this.rex.RULES.exec(a),
            (f = e[1]) ? (f = document.getElementById(f.substring(1))) ? [f] : [] : (d = nTalk.selector.queryRelative[c](b, e[2] || "*", this), (g = e[3]) && (d = this.filterClass(d, g.replace(this.rex.CLS, ""))), (h = e[4]) && (d = this.filterAttr(d, this.getAttrRules(h.match(this.rex.ATTR_PARAM), this.attrParams))), (i = e[5]) && (d = this.filterPseudo(d, this.getPseudoRules(i.match(this.rex.PSEU), this.pseuParams))), d)
        },
        getRules: function(a) {
            var b, c, d;
            return b = this.rex.RULES.exec(a),
            b[2] || (b[2] = "*"),
            b[3] = b[3].replace(this.rex.CLS, ""),
            (c = b[4]) && (b[4] = this.getAttrRules(c.match(this.rex.ATTR_PARAM), this.attrParams)),
            (d = b[5]) && (b[5] = this.getPseudoRules(d.match(this.rex.PSEU), this.pseuParams)),
            b
        },
        getAttrRules: function(a, b) {
            for (var c, d, e = [], f = a.length, g = this.rex.ATTR, h = 0; f > h; h++) c = b[a[h]],
            d = c.match(g) || " ",
            c = c.split(g),
            e.push(nTalk.selector.queryAttrs[d]),
            e.push(c);
            return e
        },
        getPseudoRules: function(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length, i = this.tagGuid++; h > g; g++) {
                if (c = a[g], this.rex.NUM.test(c)) switch (d = b[RegExp["$&"]], c = RegExp["$`"]) {
                case "nth-child":
                    if (this.rex.NTH.test("odd" === d && "2n+1" || "even" === d && "2n" || d)) {
                        if (d = RegExp.$1, d = "" === d ? 1 : "-" === d ? -1 : d, d = [i, !0, d, RegExp.$2], 1 === d[2] && 0 === d[3]) continue
                    } else d = [i, !1, d];
                    break;
                case "not":
                    for (e = d.split(","), d = []; e.length;) d.push(this.getRules(e.pop()));
                    break;
                case "contains":
                }
                f.push(nTalk.selector.queryPseudos[c]),
                f.push(d)
            }
            return f
        },
        filterPseudo: function(a, b) {
            for (var c, d, e, f, g = a.length,
            h = 0,
            i = b.length,
            j = []; g > h; h++) {
                for (d = a[h], c = 0; i > c && (e = b[c], f = b[c + 1], e && e(d, f, this)); c += 2);
                c === i && j.push(d)
            }
            return j
        },
        filterAttr: function(a, b) {
            for (var c, d, e, f, g, h, i = a.length,
            j = 0,
            k = b.length,
            l = []; i > j; j++) {
                for (d = a[j], c = 0; k > c && (f = b[c], e = b[c + 1], h = e[0], (g = "href" === h ? d.getAttribute(h) : d.getAttribute(h)) || (g = d[this.attrMap[h] || h])) && f(g + "", e[1]); c += 2);
                c === k && l.push(d)
            }
            return l
        },
        filterClass: function(a, b) {
            for (var c, d, e, f = 0,
            g = a.length,
            h = []; g > f; f++) e = a[f],
            "string" == typeof e.className && (c = e.className, d = new RegExp(c.replace(" ", "|"), "g"), b.replace(d, "") || h.push(e));
            return h
        },
        filterEl: function(a, b, c, d, e) {
            return "*" !== b && a.nodeName.toLowerCase() !== b ? !1 : c && !this.filterClass([a], c).length ? !1 : d && !this.filterAttr([a], d).length ? !1 : !(e && !this.filterPseudo([a], e).length)
        },
        makeDiff: function(a) {
            for (var b, c, d = this.tagGuid++,
            e = a.length,
            f = [], g = 0; e > g; g++) b = a[g],
            c = this.getElData(b),
            c.tagGuid !== d && (f.push(b), c.tagGuid = d);
            return f
        },
        getElData: function(a) {
            var b = a.mojoExpando;
            return b || (b = a.mojoExpando = {
                mQuery: {
                    tagGuid: 0
                }
            }),
            (b = b.mQuery) || (b = {
                tagGuid: 0
            }),
            b
        },
        queryRelative: {
            " ": function(a, b, c) {
                for (var d, e, f, g, h, i = c.tagGuid++,
                j = a.length,
                k = [], l = 0; j > l; l++) {
                    if (g = a[l], h = g.parentNode) {
                        if (c.getElData(h).tagGuid === i) continue;
                        c.getElData(g).tagGuid = i
                    }
                    for (f = g.getElementsByTagName(b) || null, d = 0, e = f.length; e > d; d++) k.push(f[d])
                }
                return k
            },
            ">": function(a, b) {
                for (var c, d = [], e = a.length, f = 0; e > f; f++) for (c = a[f].firstChild; c;) 1 === c.nodeType && (c.nodeName.toLowerCase() !== b && "*" !== b || d.push(c)),
                c = c.nextSibling;
                return d
            },
            "+": function(a, b) {
                for (var c, d = [], e = a.length, f = 0; e > f; f++) for (c = a[f]; c = c.nextSibling;) if (1 === c.nodeType) {
                    c.nodeName.toLowerCase() !== b && "*" !== b || d.push(c);
                    break
                }
                return d
            },
            "~": function(a, b, c) {
                for (var d, e, f, g = c.tagGuid++,
                h = a.length,
                i = [], j = 0; h > j; j++) {
                    if (d = a[j], e = d.parentNode) {
                        if ((f = c.getElData(e)).tagGuid === g) continue;
                        f.tagGuid = g
                    }
                    for (; d = d.nextSibling;) 1 === d.nodeType && (d.nodeName.toLowerCase() !== b && "*" !== b || i.push(d))
                }
                return i
            }
        },
        queryAttrs: {
            " ": function() {
                return ! 0
            },
            "=": function(a, b) {
                return a === b
            },
            "!=": function(a, b) {
                return a !== b
            },
            "^=": function(a, b) {
                return 0 === a.indexOf(b)
            },
            "$=": function(a, b) {
                return a.substring(a.length - b.length) === b
            },
            "*=": function(a, b) {
                return - 1 !== a.indexOf(b)
            },
            "~=": function(a, b) {
                return - 1 !== (" " + a + " ").indexOf(" " + b + " ")
            },
            "|=": function(a, b) {
                return a === b || a.substring(0, b.length + 1) === b + "-"
            }
        },
        queryPseudos: {
            eq: function(a, b, c) {
                var d, e, f, g, h;
                if ((d = a.parentNode) && (h = c.getElData(d)).tagGuid !== b) {
                    for (f = d.firstChild, g = 1; f;) 1 === f.nodeType && (c.getElData(f).nodeIndex = g++),
                    f = f.nextSibling;
                    h.tagGuid = b
                }
                return e = c.getElData(a).nodeIndex,
                e == b
            },
            lt: function(a, b, c) {
                var d, e, f, g, h;
                if ((d = a.parentNode) && (h = c.getElData(d)).tagGuid !== b) {
                    for (f = d.firstChild, g = 1; f;) 1 === f.nodeType && (c.getElData(f).nodeIndex = g++),
                    f = f.nextSibling;
                    h.tagGuid = b
                }
                return e = c.getElData(a).nodeIndex,
                b > e
            },
            gt: function(a, b, c) {
                var d, e, f, g, h;
                if ((d = a.parentNode) && (h = c.getElData(d)).tagGuid !== b) {
                    for (f = d.firstChild, g = 1; f;) 1 === f.nodeType && (c.getElData(f).nodeIndex = g++),
                    f = f.nextSibling;
                    h.tagGuid = b
                }
                return e = c.getElData(a).nodeIndex,
                e > b
            },
            "first-child": function(a) {
                for (; a = a.previousSibling;) if (1 === a.nodeType) return ! 1;
                return ! 0
            },
            "last-child": function(a) {
                for (; a = a.nextSibling;) if (1 === a.nodeType) return ! 1;
                return ! 0
            },
            "only-child": function(a) {
                for (var b = a.nextSibling,
                c = a.previousSibling; b;) {
                    if (1 === b.nodeType) return ! 1;
                    b = b.nextSibling
                }
                for (; c;) {
                    if (1 === c.nodeType) return ! 1;
                    c = c.previousSibling
                }
                return ! 0
            },
            "nth-child": function(a, b, c) {
                var d, e, f, g, h;
                if ((d = a.parentNode) && (h = c.getElData(d)).tagGuid !== b[0]) {
                    for (f = d.firstChild, g = 1; f;) 1 === f.nodeType && (c.getElData(f).nodeIndex = g++),
                    f = f.nextSibling;
                    h.tagGuid = b[0]
                }
                return e = c.getElData(a).nodeIndex,
                b[1] ? (e -= b[3], b = b[2], e * b >= 0 && e % b === 0) : e === b[2]
            },
            not: function(a, b, c) {
                for (var d, e = 0,
                f = b.length; f > e; e++) {
                    if (d = b[e], d[1]) {
                        if ("#" + a.id !== d[1]) continue;
                        return ! 1
                    }
                    if (c.filterEl(a, d[2], d[3], d[4], d[5])) return ! 1
                }
                return ! 0
            },
            contains: function(a, b) {
                return (a.textContent || a.innerText || "").indexOf(b) > -1
            },
            enabled: function(a) {
                return a.disabled === !1
            },
            disabled: function(a) {
                return a.disabled === !0
            },
            checked: function(a) {
                return a.checked === !0
            },
            empty: function(a) {
                return ! a.firstChild
            }
        }
    },
    nTalk.Class = {
        create: function() {
            return function() {
                this.initialize.apply(this, arguments)
            }
        }
    },
    nTalk.extend({
        initializeCore: function() {
            var a = /([^\.]+(\.com(\.cn)?|\.net(\.cn)?|\.org(\.cn)?|\.gov(\.cn)?|\.cn|\.mobi|\.tel|\.asia|\.me|\.info|\.hk|\.cc|\.biz|\.tv))$/i.exec(document.domain),
            b = /(.*\/)(.*?\.\w+)?([\?#].*)?$/gi.exec(location.protocol + "//" + document.domain + location.pathname),
            c = "";
            if (root = nTalk(document), nTalk("script[src*=ntkf],script[src*=base.out]").each(function(a, b) {
                if (b.src) {
                    var d = /^((https?:).*\/)?(.*?\.js)?(\?.*)?/gi.exec(b.src);
                    d && d[1] && d[3] && /^((ntkfstat|ntkf|base\.out).*?)\.js/gi.test(d[3]) && d[4] && d[4].indexOf("siteid") > -1 && (nTalk.baseProtocol = d[2] || nTalk.protocol, nTalk.baseURI = d[1] || nTalk.pageURI, nTalk.baseName = d[3], c = d[4] ? d[4] : "", nTalk.elementParent = b.parentNode, nTalk.elementBefore = b)
                }
            }), !nTalk.baseURI) throw "get script url failure";
            if (nTalk.domain = a && a[0] || document.domain, nTalk.pageURI = b && b[1] ? b[1] : "", nTalk.pageName = b && b[2] ? b[2] : "", nTalk.params = nTalk.uriToJSON(location.search.substr(1)), nTalk.hash = location.hash ? location.href.substr(location.href.indexOf("#") + 1) : "", nTalk.hashParams = nTalk.uriToJSON(nTalk.hash), nTalk.loadList = loadList, nTalk.flash.support && !nTalk.browser.mobile ? nTalk.global.connect = nTalk.CON_CONNECT_FLASH: nTalk.global.connect = nTalk.CON_CONNECT_COMET, nTalk.browser.msie6) try {
                document.execCommand("BackgroundImageCache", !1, !0)
            } catch(d) {}
            for (var e, f = c.length ? c.substr(1).split("&") : ["lan=zh_cn", ""], g = 0; g < f.length; g++) e = f[g].split("="),
            nTalk.extParmas[e[0]] = "lan" == e[0] ? e[1] || "zh_cn": e[1];
            nTalk.cache.init()
        }
    }),
    nTalk.browser = function(a) {
        var b = {
            "360ee": !1,
            lbbrowser: !1,
            se: !1,
            chrome: !1,
            safari: !1,
            msie: !1,
            firefox: !1,
            oupeng: !1,
            opera: !1,
            webkit: !1,
            iPod: !1,
            iPad: !1,
            iPhone: !1,
            android: !1,
            gecko: !1,
            windows: !1,
            "windows ce": !1,
            edge: !1
        },
        c = ["applewebkit/([^\\s]*)", "presto\\/([\\d.]*)", "trident([^;]*)", "gecko\\/([\\d.]*)", "msie ([\\d.]*)"];
        nTalk.each(b,
        function(c) {
            b[c] = a.indexOf(c.toLowerCase()) > -1
        }),
        b.ua = a,
        b.ieversion = 0,
        b.coreversion = 0,
        b.mac = !!a.match(/cpu.+mac\s+os\s+x/g);
        for (var d = 0; d < c.length; d++) new RegExp(c[d], "i").test(a) && (d == c.length - 1 ? b.ieversion = RegExp.$1 || RegExp.$2: b.coreversion = RegExp.$1);
        return b.ieversion = document.documentMode || b.ieversion || b.ieversion,
        b.msie = b.msie || b.ieversion > 0,
        b.gecko = b.gecko && !b.webkit && !b.msie,
        b.msie6 = b.msie && 6 == b.ieversion,
        b.msie7 = b.msie && 7 == b.ieversion,
        b.msie8 = b.msie && 8 == b.ieversion,
        b.msie9 = b.msie && 9 == b.ieversion,
        b.msie10 = b.msie && 10 == b.ieversion,
        b.msie11 = b.msie && 11 == b.ieversion,
        b.edge = b.edge,
        b.oldmsie = b.ieversion && b.ieversion <= 9,
        b.safari = b.safari && !b.chrome,
        b.safari2 = b.safari && !/adobeair/i.test(a),
        b.Quirks = "BackCompat" === document.compatMode,
        b.mobile = /mobile|android|linux/i.test(a),
        b.android = /android (\d.*?);/g.exec(a),
        b.oldAndroid = b.android && b.android.pop().substr(0, 3) < 4.5,
        b.iPhone6 = b.iPhone && 375 == document.body.offsetWidth,
        b.iPhone6Plus = b.iPhone && 414 == document.body.offsetWidth,
        b.iOS = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || a.indexOf("mac") > -1,
        b.is = function(b) {
            return new RegExp(b, "ig").test(a)
        },
        b.html5 = !!window.applicationCache,
        b.supportMqtt = "WebSocket" in window && null !== window.WebSocket && "localStorage" in window && null !== window.localStorage && "ArrayBuffer" in window && null !== window.ArrayBuffer,
        b
    } (navigator.userAgent.toLowerCase()),
    nTalk.extend({
        ready: function(a) {
            var b = this,
            c = document.readyState,
            d = nTalk.browser.webkit && nTalk.browser.version < 525,
            e = function() {
                if (!readyComplete) { ! d && window.removeEventListener && (document.removeEventListener("DOMContentLoaded", e, !1), window.removeEventListener("load", e, !1)),
                    nTalk.isReady = readyComplete = !0;
                    for (var a = 0; a < readyList.length; a++) readyList[a].apply(document);
                    readyList = []
                }
            };
            if (readyComplete || /loaded|complete/gi.test(c) ? (nTalk.isReady = readyComplete = !0, a.call(b)) : readyList[readyList.length] = function() {
                return a.call(b)
            },
            d) !
            function() { / ^loaded | complete$ / i.test(c) ? e() :setTimeout(arguments.callee(), 50)
            } ();
            else if (document.addEventListener)"interactive" == c ? e() : (document.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1));
            else {
                var f = document.createElement("div"); !
                function() { (function() {
                        try {
                            f.doScroll("left"),
                            document.body.insertBefore(f, document.body.lastChild).setAttribute("html", "temp")
                        } catch(a) {}
                        return f
                    }) ? e() : setTimeout(arguments.callee(), 50)
                } ()
            }
        },
        require: function(a, b, c) {
            var d, e, f, g = [],
            h = [],
            i = null;
            a && (a = "string" == typeof a ? [a] : a, b = b || emptyFunc, c = c || document.head || nTalk("head")[0] || document.documentElement, e = nTalk._getObjectNumber(a), 0 === g.length && 0 === e && b.apply(i, h), nTalk.each(a,
            function(a, j) {
                if (j) {
                    var k, l = nTalk.getTime(),
                    m = -1 == j.indexOf("?") ? "?": "&",
                    n = j.replace(/(.*\/)?(.*?)[\?$](.*)?/i, "$2"),
                    o = nTalk.isNumeric(a) ? "": a,
                    p = function() {
                        g.splice(nTalk.inArray(j, g), 1),
                        e--,
                        0 === g.length && 0 === e && b.apply(i, h)
                    },
                    q = function(a) {
                        a = nTalk.Event.fixEvent(a);
                        var b = a.currentTarget || a.srcElement,
                        c = /loaded|complete/gi,
                        d = b.readyState;
                        "load" === a.type || c.test(d) ? setTimeout(function() {
                            o ? (loadList[n] = nTalk[o], h.push(nTalk[o])) : (loadList[n] = b, h.push(b)),
                            p()
                        },
                        nTalk.browser.msie6 ? 500 : 0) : "error" === a.type && (a.error = !0, h.push(o ? !1 : a), p())
                    };
                    g.push(j),
                    n += j.indexOf("#rnd") > -1 ? String(l).substring(5, 11) : j.indexOf("#image") > -1 ? j.replace(/(.*?)\?(.*?)(#.*?)?$/gi, "-$2") : "",
                    k = /\.((gif)|(png)|(jpg)|(bmp)|(jpeg))$/i.test(j) || /#image$/gi.test(j),
                    j = j.replace(/#rnd/i, m + "ts=" + l).replace(/#image/i, ""),
                    f = (/^(https?:\/\/)/i.test(j) ? "": nTalk.baseURI) + j,
                    o && nTalk[o] ? (h.push(nTalk[o]), p()) : !o && loadList[n] ? (h.push(loadList[n]), p()) : k ? i = nTalk.preloadImage(f,
                    function(a) {
                        a.error = !1,
                        loadList[n] = a,
                        h.push(a),
                        p()
                    },
                    function(a) {
                        a.error = !0,
                        h.push(a),
                        p()
                    }) : (d = /\.css[^\.]*$/gi.test(j) ? {
                        tag: "link",
                        type: "text/css",
                        rel: "stylesheet",
                        href: f
                    }: {
                        tag: "script",
                        type: "text/javascript",
                        async: "async",
                        charset: "utf-8",
                        src: f
                    },
                    "script" == d.tag && o && (d["data-requiremodule"] = o), i = nTalk(d).appendTo(c), "undefined" == typeof i.get(0).onreadystatechange ? i.bind("load", q).bind("error", q) : i.bind("readystatechange", q).bind("error", q))
                }
            }))
        },
        jsonp: function(a, b) {
            var c, d = "call_" + nTalk.randomChar(16);
            a = a + (/\?/gi.test(a) ? "&": "?") + "callback=" + d,
            window[d] = function() {
                c = arguments,
                setTimeout(function() {
                    nTalk.isFunction(b) && b.apply(self, c)
                },
                0);
                try {
                    delete window[d]
                } catch(a) {}
            },
            nTalk.require(a,
            function(a) {
                nTalk(a.error ? a.target: this).remove()
            })
        },
        preloadImage: function(a, b, c) {
            var d = this;
            b = b || emptyFunc,
            c = c || emptyFunc;
            var e, f = new Image;
            return f.src = a,
            f.setAttribute("loadTime", 0),
            f.complete ? (b.call(nTalk, f), f) : (f.onload = function() {
                clearInterval(e),
                b.call(nTalk, this)
            },
            f.onError = function() {
                clearInterval(e),
                c.call(nTalk, this)
            },
            e = setInterval(function() {
                f.setAttribute("loadTime", parseInt(f.getAttribute("loadTime")) + 1),
                parseInt(f.getAttribute("loadTime"), 10) >= 6 && (clearInterval(e), c.call(nTalk, d)),
                ("complete" == f.readyState || nTalk.browser.msie7) && (clearInterval(e), f.onLoad = f.onError = null, b.call(nTalk, f))
            },
            500), f)
        },
        _getObjectNumber: function(a) {
            if (a) {
                if (nTalk.isArray(a)) return a.length;
                var b = 0;
                for (var c in a) a.hasOwnProperty(c) && b++;
                return b
            }
            return ! 1
        }
    }),
    nTalk.cookie = {
        enable: function() {
            var a = !1,
            b = "testcookie";
            return navigator.cookieEnabled ? !0 : (this.set(b, "yes", 0), "yes" == this.get(b) && (a = !0), this.del(b), a)
        },
        set: function(a, b, c, d) {
            var e, f, g, h;
            return b = b || "",
            d = d ? d: nTalk.domain,
            "number" != typeof c && (c = 0),
            0 === c ? f = nTalk.browser.msie || nTalk.browser.mobile ? " ": "expires=0; ": (e = new Date, e.setTime(e.getTime() + c), f = e ? "expires=" + e.toGMTString() + "; ": ""),
            d = "domain=" + d + "; ",
            g = a + "=" + ("" + b).replace(/\"|\'/gi, "|") + "; ",
            h = "path=/; ",
            document.cookie = g + f + d + h,
            b
        },
        get: function(a) {
            var b, c = document.cookie;
            return c.length && (b = new RegExp("(?:^|;)\\s*" + a + "=(.*?)(?:;|$)").exec(c), b && b.length) ? decodeURIComponent(b[1].replace(/\|/gi, '"')) : null
        },
        del: function(a, b) {
            return this.set(a, "", 1, b)
        }
    },
    nTalk.flash = function() {
        function gt(a) {
            var b = version,
            c = (a || "0.0.0").split(".").slice(0, 3);
            return b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] > c[2]
        }
        var axo, counter, hasFlash = !1,
        version = [0, 0, 0, 0],
        fnRemove = function(selector) {
            nTalk(selector).each(function(i, element) {
                var tElement;
                if (nTalk.browser.msie || !element.parentNode) {
                    for (var k in element) try {
                        eval("element." + k + "=null")
                    } catch(e) {}
                    tElement = document.createElement("DIV");
                    try {
                        tElement.appendChild(element),
                        tElement.innerHTML = "",
                        tElement.parentNode && tElement.parentNode.removeChild(tElement)
                    } catch(e) {}
                } else try {
                    element.parentNode.removeChild(element)
                } catch(e) {
                    nTalk.Log("remove flash node failure", 3)
                }
            })
        };
        if (navigator.plugins && navigator.mimeTypes.length) {
            var x = navigator.plugins["Shockwave Flash"];
            x && x.version ? (hasFlash = !0, version = x.version.split(".")) : x && x.description && (hasFlash = !0, version = x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."), 3 == version.length && (version[version.length] = 0))
        } else if (nTalk.browser["windows ce"]) for (axo = 1, counter = 3; axo;) try {
            counter++,
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + counter),
            hasFlash = !0,
            version = [counter, 0, 0]
        } catch(e) {
            axo = null
        } else try {
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
            null !== axo && (hasFlash = !0, version = axo.GetVariable("$version").split(" ")[1].toString().replace(/,/g, ".").split("."))
        } catch(e) {
            hasFlash = !1
        }
        return {
            remove: fnRemove,
            GT: gt,
            support: (0 === version.join(".").indexOf("11.6.602") || 0 === version.join(".").indexOf("11.3.300") || !gt("10.3")) && nTalk.browser.firefox || nTalk.browser.mac ? !1 : hasFlash,
            version: version.join(".")
        }
    } (),
    nTalk.Event = function() {
        function a(a) {
            return a === window ? "theWindow": a === document ? "theDocument": a.uniqueID
        }
        function b(a) {
            return function(b) {
                var d = b.relatedTarget;
                this == d || c(this, d) || a.call(this, b)
            }
        }
        function c(a, b) {
            if (a == b) return ! 1;
            for (; b && b != a;) b = b.parentNode;
            return b == a
        }
        function d(a) {
            if (a && a.target) return a;
            switch (a = a || window.event, a.pageX = a.clientX + nTalk(window).scrollLeft(), a.pageY = a.clientY + nTalk(window).scrollTop(), a.target = a.srcElement, a.stopPropagation = e, a.preventDefault = f, a.type) {
            case "mouseout":
                a.relatedTarget = a.toElement;
                break;
            case "mouseover":
                a.relatedTarget = a.fromElement
            }
            return a
        }
        function e() {
            this.cancelBubble = !0
        }
        function f() {
            this.returnValue = !1
        }
        function g(a, b) {
            if (nTalk.browser.msie) try {
                a.fireEvent("on" + b)
            } catch(c) {
                return ! 1
            } else {
                var d = document.createEvent("HTMLEvents");
                d.initEvent(b, !0, !0);
                try {
                    a && a.dispatchEvent(d)
                } catch(c) {}
            }
            return ! 0
        }
        var h, i, j = [];
        return window.addEventListener ? (h = function(a, c, d, e) {
            "mouseenter" == c ? a.addEventListener("mouseover", b(d), e) : "mouseleave" == c ? a.addEventListener("mouseout", b(d), e) : a.addEventListener(c, d, e)
        },
        i = function(a, b, c, d) {
            a.removeEventListener(b, c, d)
        }) : (h = function(b, c, d) {
            var e = "{FNKEY::obj_" + a(b) + "::evt_" + c + "::fn_" + d + "}",
            f = j[e];
            "undefined" == typeof f && (f = function(a) {
                d.call(b, a)
            },
            j[e] = f, b.attachEvent("on" + c, f), window.attachEvent("onunload",
            function() {
                try {
                    b.detachEvent("on" + c, f)
                } catch(a) {}
            }), e = null)
        },
        i = function(b, c, d) {
            var e = "{FNKEY::obj_" + a(b) + "::evt_" + c + "::fn_" + d + "}",
            f = j[e];
            "undefined" != typeof f && (b.detachEvent("on" + c, f), delete j[e]),
            e = null
        }),
        {
            __evtHash: j,
            addEvent: h,
            removeEvent: i,
            fixEvent: d,
            fireEvent: g
        }
    } (),
    nTalk.JSON = function() {
        function quote(a) {
            return reg.lastIndex = 0,
            reg.test(a) ? '"' + a.replace(reg,
            function(a) {
                var b = meta[a];
                return "string" == typeof b ? b: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"': '"' + a + '"'
        }
        function str(a, b) {
            var c, d, e, f, g, h = gap,
            i = b[a];
            switch ("function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
            case "string":
                return quote(i);
            case "number":
                return isFinite(i) ? String(i) : "null";
            case "boolean":
            case "null":
                return String(i);
            case "object":
                if (!i) return "null";
                if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                    for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                    return e = 0 === g.length ? "[]": gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]": "[" + g.join(",") + "]",
                    gap = h,
                    e
                }
                if (rep && "object" == typeof rep) for (f = rep.length, c = 0; f > c; c += 1) d = rep[c],
                "string" == typeof d && (e = str(d, i), e && g.push(quote(d) + (gap ? ": ": ":") + e));
                else for (d in i) i.hasOwnProperty(d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": ": ":") + e));
                return e = 0 === g.length ? "{}": gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}": "{" + g.join(",") + "}",
                gap = h,
                e
            }
        }
        var toJSONString, parseJSON, gap, indent, rep, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        reg = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return toJSONString = function(a, b) {
            if (b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.toString");
            return str("", {
                "": a
            })
        },
        parseJSON = function(text, reviver) {
            function walk(a, b) {
                var c, d = a[b];
                if (d && "object" == typeof d) for (var e in d) d.hasOwnProperty(e) && (c = walk(d, e), void 0 !== c ? d[e] = c: delete d[e]);
                return reviver.call(a, b, d)
            }
            var j;
            if (text = String(text).replace(/\r|\n/gi, "")) try {
                text = nTalk.hexToDec(text)
            } catch(e) {}
            if (cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx,
            function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            },
            "") : j;
            throw new SyntaxError("JSON.toJSON")
        },
        {
            toJSONString: toJSONString,
            parseJSON: parseJSON
        }
    } (),
    nTalk.HASH = nTalk.Class.create(),
    nTalk.HASH.prototype = {
        hashTable: null,
        hashIndex: null,
        initialize: function() {
            this.hashTable = {},
            this.hashIndex = []
        },
        add: function(a, b) {
            return typeof a === core_strUndefined ? !1 : this.contains(a) ? !1 : (this.hashTable[a] = typeof b !== core_strUndefined ? b: null, this.hashIndex.push(a), !0)
        },
        remove: function(a) {
            var b = this.next(a),
            c = this.index(a);
            return delete this.hashTable[a],
            c !== !1 && this.hashIndex.splice(c, 1),
            this.hashTable[b]
        },
        first: function() {
            for (var a in this.hashTable) if (this.hashTable.hasOwnProperty(a)) return this.hashTable[a]
        },
        last: function() {
            var a = null;
            for (var b in this.hashTable) this.hashTable.hasOwnProperty(b) && (a = this.hashTable[b]);
            return a
        },
        previous: function(a) {
            var b = null;
            for (var c in this.hashTable) if (this.hashTable.hasOwnProperty(c)) {
                if (c == a) return b;
                b = c
            }
            return b
        },
        next: function(a) {
            var b = null,
            c = !1;
            for (var d in this.hashTable) if (this.hashTable.hasOwnProperty(d)) if (b || (b = d), d != a) {
                if (c) return d
            } else c = !0;
            return b
        },
        count: function() {
            var a = 0;
            for (var b in this.hashTable) this.hashTable.hasOwnProperty(b) && a++;
            return a
        },
        items: function(a, b) {
            return b ? (this.hashTable[a] = b, this.hashTable[a]) : this.hashTable[a]
        },
        index: function(a) {
            for (var b = 0; b < this.hashIndex.length; b++) if (this.hashIndex[b] == a) return b;
            return ! 1
        },
        contains: function(a) {
            return "undefined" != typeof this.hashTable[a]
        },
        clear: function() {
            for (var a in this.hashTable) this.hashTable.hasOwnProperty(a) && delete this.hashTable[a];
            this.hashIndex = []
        },
        each: function(a) {
            for (var b in this.hashTable) b && this.hashTable.hasOwnProperty(b) && a.call(self, b, this.hashTable[b])
        }
    },
    nTalk.POST = nTalk.Class.create(),
    nTalk.POST.prototype = {
        iframeName: "",
        iframeElement: null,
        formName: "",
        formElement: null,
        hiddenElement: null,
        target: "",
        CON_TARGET: ["_blank", "_self", "_parent", "_top"],
        _stopCall: !1,
        onComplete: null,
        onFailure: null,
        _loaded: !1,
        initialize: function(a, b, c, d) {
            var e = nTalk.merge({},
            b),
            f = nTalk.randomChar(16);
            nTalk.isArray(c) ? (this.onComplete = c[0] || emptyFunc, this.onFailure = c[1] || emptyFunc) : (this.onComplete = c || emptyFunc, this.onFailure = emptyFunc),
            this.target = d || "POST_IFRAME_" + f,
            nTalk(".nTalk_post_hiddenElement").length > 0 ? this.hiddenElement = nTalk("#nTalk_post_hiddenElement") : this.hiddenElement = nTalk({
                tag: "div",
                id: "nTalk_post_hiddenElement",
                style: "left:-10px;top:-10px;visibility:hidden;display:none;width:1px;height:1px;"
            }).appendTo(!0),
            nTalk.inArray(this.target, this.CON_TARGET) < 0 && (this.iframeName = this.target, this.iframeElement = this.createIFrame(this.iframeName, "about:blank")),
            this.formName = "POST_FORM_" + f,
            this.formElement = this.form(a, e);
            try {
                this.formElement.submit()
            } catch(g) {}
        },
        stopCall: function() {
            this._stopCall = !0
        },
        createIFrame: function(a, b) {
            var c, d = this,
            e = function(b) {
                var c = this,
                g = c.readyState;
                /^(?:loaded|complete|undefined)$/.test(g) && !d._loaded && (nTalk(c).removeEvent("readystatechange", e), nTalk(c).removeEvent("load", e), nTalk(c).removeEvent("error", f), d._loaded = !0, d._stopCall || d.onComplete.call(d, b, a), window.frames[a] = window[a] = null, setTimeout(function() {
                    nTalk(c).remove(),
                    nTalk(d.formElement).remove()
                },
                800))
            },
            f = function(b) {
                var c = this;
                nTalk(c).removeEvent("readystatechange", e),
                nTalk(c).removeEvent("load", e),
                nTalk(c).removeEvent("error", f),
                d._stopCall || d.onFailure.call(d, b, a),
                window.frames[a] = window[a] = null,
                setTimeout(function() {
                    nTalk(c).remove(),
                    nTalk(d.formElement).remove()
                },
                50)
            };
            return window[a] ? window[a] : window.frames[a] ? window.frames[a] : (c = nTalk({
                tag: "IFRAME",
                name: a,
                id: a,
                src: b,
                style: "left:-10px;top:-10px;visibility:hidden;width:1px;height:1px;"
            }).appendTo(this.hiddenElement), nTalk.browser.safari || c.css("position", "absolute"), c.bind("readystatechange", e).bind("load", e).bind("error", f), window[a] = c.get(0), window[a])
        },
        form: function(a, b) {
            var c;
            if (c = nTalk({
                tag: "FORM",
                name: this.formName,
                "accept-charset": "utf-8",
                enctype: "application/x-www-form-urlencoded",
                method: "POST",
                style: "display:none;",
                target: this.target,
                action: a
            }).appendTo(this.hiddenElement), nTalk.isArray(b)) for (var d = 0; d < b.length; d++) for (var e in b[d]) b[d].hasOwnProperty(e) && this.input(e + "[]", b[d][e], c);
            else for (var f in b) if (b.hasOwnProperty(f)) if (nTalk.isArray(b[f])) for (var g = 0; g < b[f].length; g++) this.input(f + "[]", b[f][g], c);
            else this.input(f, b[f], c);
            return c.get(0)
        },
        input: function(a, b, c) {
            return nTalk({
                tag: "INPUT",
                type: "hidden",
                name: a,
                value: encodeURIComponent(/number|string/.test(typeof b) ? b: nTalk.JSON.toJSONString(b))
            }).appendTo(c)
        }
    },
    nTalk.extend({
        inArray: function(a, b) {
            if (b.length == core_strUndefined) {
                for (var c in b) if (b.hasOwnProperty(c) && b[c] == a) return c
            } else for (var d = 0,
            e = b.length; e > d; d++) if (b[d] == a) return d;
            return - 1
        },
        toURI: function(a, b, c) {
            var d = [],
            e = void 0 === c ? "&": c,
            f = function(c, d) {
                var f = "&" == e ? c + "=": "",
                h = typeof a[g];
                switch (h) {
                case "object":
                    return d ? f + encodeURIComponent(nTalk.JSON.toJSONString(d)) : b ? "": f;
                case "function":
                case "undefined":
                    return "";
                case "boolean":
                case "number":
                    return f + d;
                default:
                    return d ? f + encodeURIComponent(d.replace(/\+/gi, "%2B")) : b ? "": f
                }
            };
            if (!nTalk.isPlainObject(a)) return "";
            for (var g in a) if (a.hasOwnProperty(g)) {
                var h = f(g, a[g]);
                h && d.push(h)
            }
            return d.join(e).replace(/%20/g, "+")
        },
        uriToJSON: function(a) {
            for (var b, c = {},
            d = a.toString().split("&"), e = 0; e < d.length; e++) if (b = d[e].split("="), !(b.length < 2)) try {
                c[b[0]] = decodeURIComponent(b[1] || "")
            } catch(f) {
                c[b[0]] = b[1]
            }
            return c
        },
        whereGetTo: function(a, b, c, d) {
            return nTalk.merge(a, this.whereGet(b, c, d))
        },
        whereGet: function(a, b, c, d) {
            var e = {};
            if (b && nTalk.isArray(b)) for (var f = 0,
            g = b.length; g > f; f++) c && c[f] && c[f] !== b[f] ? e[c[f]] = nTalk.isDefined(a[b[f]]) ? a[b[f]] : "": e[b[f]] = nTalk.isDefined(a[b[f]]) ? a[b[f]] : "";
            else e = a;
            if (!nTalk.isFunction(d)) return e;
            for (var h in e) e.hasOwnProperty(h) && d.call(this, e[h])
        },
        enLength: function(a) {
            a = a || "";
            try {
                return a.toString().replace(/[^\x00-\xFF]/g, "**").length
            } catch(b) {
                nTalk.Log(b, 3)
            }
        },
        enCut: function(a, b, c) {
            var d = nTalk.enLength(a);
            if (b = b || 0, b > d) return "" + (a || "");
            for (var e = 0,
            f = 0; f < a.length; f++) {
                if (e += a.charCodeAt(f) > 255 ? 2 : 1, e == b || c && e == b - 2) return a.substring(0, f + 1) + (c ? "..": "");
                if (e > b || c && e > b - 2) return a.substring(0, f) + (c ? "..": "")
            }
            return a || ""
        },
        camelize: function(a) {
            return a.replace("-ms-", "ms-").replace(rCamelCase,
            function(a, b) {
                return (b + "").toUpperCase()
            })
        },
        clearHtml: function(a) {
            return a = a || "",
            a.replace(clearHtmlExp, "")
        },
        protocolFilter: function(a, b) {
            if (b = b || nTalk.protocol, "file:" == b && (b = "http:"), nTalk.isObject(a)) {
                for (var c in a) a.hasOwnProperty(c) && (a[c] = this.protocolFilter(a[c], b));
                return a
            }
            if (nTalk.isArray(a)) {
                for (var d = 0; d < a.length; d++) a[d] = this.protocolFilter(a[d], b);
                return a
            }
            return nTalk.isNumeric(a) || nTalk.isBoolean(a) || nTalk.isFunction(a) ? a: "undefined" != typeof a ? a ? a.toString().replace(/^https?:/gi, b).replace(/^rtmps?:/gi, "https:" == b ? "rtmps:": "rtmp:").replace(/^wss?:/gi, "https:" == b ? "wss:": "ws:") : a: void 0
        },
//        decToHex: function(a) {
//            for (var b = [], c = 0;c < a.length;c++) / [\u4e00 - \u9fa5] / i.test(a.charAt(c)) ? b[c] = "\\u" + ("00" + a.charCodeAt(c).toString(16)).slice( - 4);b[c] = a.charAt(c);
//            return b.join("")
//        },
        hexToDec: function(a) {
            if (!a) return "";
            var b = /\\u([0-9a-zA-Z]{2,4})|&#(\d+);/gi,
            c = a.match(b),
            d = a;
            if (!c) return d;
            for (var e = 0; e <= c.length; e++) if (c[e]) {
                var f, g, h = !1;
                f = c[e].replace("\\u", "");
                for (var i = 0; i < f.length; i++) - 1 == "0123456789abcdef".indexOf(f.charAt(i)) && (h = !0);
                h || (g = String.fromCharCode(parseInt(f, 16)), d = d.replace(c[e], g))
            }
            return d
        }
    }),
    nTalk.extend({
        Element: function(a, b) {
            var c, d, e = "";
            if (a = a.toLocaleUpperCase(), nTalk.inArray(a, ["IFRAME", "FORM", "INPUT", "SELECT", "TEXTAREA"]) > -1) try {
                "FORM" == a && (e = (b.method ? ' method="' + b.method + '"': "") + (b.enctype ? ' enctype="' + b.enctype + '"': "")),
                d = "<" + a + ' name="' + (b.name || nTalk.randomChar(16)) + '"' + e + "></" + a + ">",
                c = document.createElement(d),
                delete b.name
            } catch(f) {
                c = document.createElement(a)
            } else c = "comment" === a ? document.createComment(b.text || "") : document.createElement(a);
            return b && nTalk.each(b,
            function(a, b) {
                try {
                    switch (a) {
                    case "css":
                    case "style":
                        c.style.cssText = b;
                        break;
                    case "innerHTML":
                    case "html":
                        c.innerHTML = b;
                        break;
                    case "className":
                    case "class":
                        c.className = b;
                        break;
                    case "text":
                        c.textContent = b;
                        break;
                    default:
                        c.setAttribute(a, b)
                    }
                } catch(d) {}
            }),
            c
        },
        insert: function(a, b, c) {
            var d, e;
            if (a = a || document.body, c = c ? c.toLowerCase() : "afterbegin", a.insertAdjacentHTML) switch (c.toLowerCase()) {
            case "beforebegin":
                return a.insertAdjacentHTML("BeforeBegin", b),
                a.previousSibling;
            case "afterbegin":
                return a.insertAdjacentHTML("AfterBegin", b),
                a.firstChild;
            case "afterend":
                return a.insertAdjacentHTML("AfterEnd", b),
                a.nextSibling;
            default:
                return a.insertAdjacentHTML("BeforeEnd", b),
                a.lastChild
            }
            switch (d = a.ownerDocument.createRange(), c) {
            case "beforebegin":
                return d.setStartBefore(a),
                e = d.createContextualFragment(b),
                a.parentNode.insertBefore(e, a),
                a.previousSibling;
            case "afterbegin":
                return a.firstChild ? (d.setStartBefore(a.firstChild), e = d.createContextualFragment(b), a.insertBefore(e, a.firstChild)) : a.innerHTML = b,
                a.firstChild;
            case "beforeend":
                return a.lastChild ? (d.setStartAfter(a.lastChild), e = d.createContextualFragment(b), a.appendChild(e)) : a.innerHTML = b,
                a.lastChild;
            case "afterend":
                return d.setStartAfter(a),
                e = d.createContextualFragment(b),
                a.parentNode.insertBefore(e, a.nextSibling),
                a.nextSibling
            }
            throw 'Illegal insertion point -> "' + c + '"'
        },
        flashHtml: function(a, b, c, d) {
            if (d = nTalk.extend({
                width: 1,
                height: 1,
                style: "",
                wmode: "opaque"
            },
            d), nTalk.browser.oldmsie) {
                var e = b.indexOf("?") > -1 ? "&": "?";
                b += e + "rnd=" + Math.floor(1e3 * Math.random())
            }
            return nTalk.browser.msie && nTalk.browser.ieversion < 11 ? ['<object id="', a, '" name="', a, '" width="', d.width, '" height="', d.height, '" style="', d.style, '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28">', '<param name="wmode" value="', d.wmode, '" />', '<param name="movie" value="', b, '" />', '<param name="allowscriptaccess" value="always" />', '<param name="flashvars" value="', nTalk.toURI(c, !0), '" />', "</object>"].join("") : nTalk.browser.msie && nTalk.browser.ieversion >= 11 ? ['<object id="', a, '"  name="', a, '" data="', b, '" width="', d.width, '" height="', d.height, '" style="', d.style, '" type="application/x-shockwave-flash">', '<param name="wmode" value="', d.wmode, '"/>', '<param name="movie" value="', b, '"/>', '<param name="quality" value="high"/>', '<param name="allowscriptaccess" value="always"/>', '<param name="flashvars" value="', nTalk.toURI(c, !0), '"/>', "</object>"].join("") : ['<embed id="', a, '" name="', a, '" src="' + b + '" width="', d.width, '" height="', d.height, '" style="', d.style, '" flashvars="', nTalk.toURI(c, !0), '" wmode="', d.wmode, '" allowscriptaccess="always" pluginspage="https://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" >', "</embed>"].join("")
        },
        _vendorPropName: function(a, b) {
            if (b in a) return b;
            for (var c = ["Webkit", "O", "Moz", "ms"], d = b.charAt(0).toUpperCase() + b.slice(1), e = b, f = c.length; f--;) if (b = c[f] + d, b in a) return b;
            return e
        },
        css: function(a, b, c) {
            var d, e = /\s*alpha\(opacity=([^)]*)\)\s*/gi;
            if (!a) return ! 1;
            if (void 0 === c) return d = nTalk.camelize(b),
            document.defaultView && document.defaultView.getComputedStyle ? (c = document.defaultView.getComputedStyle(a, null).getPropertyValue(b), "auto" === c || "" === c ? 0 : c) : (b = nTalk.cssProps[d] || nTalk._vendorPropName(a.style, d), c = "opacity" === b ? /opacity=([^)]*)/.test(a.currentStyle.filter) ? .01 * parseFloat(RegExp.$1) + "": 1 : a.style[b] || (a.currentStyle ? a.currentStyle[b] : null), "backgroundPosition" === b && nTalk.browser.msie && nTalk.browser.ieversion <= 8 && (c = a.style[b + "X"] || (a.currentStyle ? a.currentStyle[b + "X"] : null), c = c + " " + a.style[b + "Y"] || (a.currentStyle ? a.currentStyle[b + "Y"] : null)), "auto" === c ? 0 : c);
            if (void 0 !== document.documentElement.style.opacity) {
                try {
                    a.style[nTalk.camelize(b)] = c
                } catch(f) {
                    return ! 1
                }
                return ! 0
            }
            if (a.currentStyle && a.currentStyle.hasLayout || (a.style.zoom = 1), "opacity" === b) {
                try {
                    a.style.filter = 1 == c ? "none": (a.currentStyle || a.style).filter.replace(e, "") + " alpha(opacity=" + 100 * c + ")"
                } catch(g) {}
                a.style.zoom = 1
            } else try {
                a.style[nTalk.camelize(b)] = c
            } catch(f) {
                return ! 1
            }
            return ! 0
        },
        attr: function(a, b, c) {
            return a ? "undefined" != typeof c ? ("" === c ? a.removeAttribute(b) : a.setAttribute(b, c), c) : a.getAttribute ? a.getAttribute(b) : a[b] || "": void 0
        },
        addClass: function(a, b) {
            if (!a) return ! 1;
            if (this.indexOfClass(a, b)) return ! 1;
            var c = a.className.split(/\s+/).join(" ");
            return a.className = (c ? c + " ": "") + b,
            !0
        },
        removeClass: function(a, b) {
            return a && a.className ? (a.className = a.className.replace(new RegExp("(^|\\s+)" + b + "(\\s+|$)", "i"), " "), !0) : !1
        },
        indexOfClass: function(a, b) {
            return a && a.className ? new RegExp("(^|\\b)" + b + "(\\s|$)", "gi").test(a.className) : !1
        },
        contains: function(a, b) {
            if (b) for (; b = b.parentNode;) if (b === a) return ! 0;
            return ! 1
        }
    }),
    nTalk.position = nTalk.Class.create(),
    nTalk.position.prototype = {
        defaultOptions: {
            left: null,
            top: null,
            width: null,
            height: null,
            right: null,
            bottom: null,
            fixed: !0,
            resize: !1
        },
        timer: 0,
        repwidth: "",
        repheight: "",
        inited: !1,
        direction: "left",
        initialize: function(a, b) {
            var c;
            nTalk.extend(this, this.defaultOptions, b),
            this.element = a.talkVersion ? a: nTalk(a),
            this.width ? "auto" == this.width && (this.repwidth = "auto", this.width = this.element.width()) : this.width = this.element.width(),
            this.height ? "auto" == this.height && (this.repheight = "auto", this.height = this.element.height()) : this.height = this.element.height(),
            this.offset = nTalk(window).offset(),
            this.quirks = nTalk.browser.msie6 || nTalk.browser.Quirks && nTalk.browser.oldmsie,
            null === this.left && (this.direction = "right"),
            null === this.left && null === this.right && (c = this.element.offset(), this.left = c.left, this.top = c.top),
            this.right = null === this.right ? nTalk(window).width() - this.left - this.width: this.right,
            this.bottom = null === this.bottom ? nTalk(window).height() - this.top - this.height: this.bottom,
            this.left = null === this.left ? nTalk(window).width() - this.right - this.width: this.left,
            this.top = null === this.top ? nTalk(window).height() - this.bottom - this.height: this.top,
            this.fixed ? this.fixedPosition({
                left: this.left,
                top: this.top,
                right: this.right,
                bottom: this.bottom
            }) : this.animationPosition()
        },
        fixedPosition: function(a) {
            var b, c, d = this;
            if (this.quirks) {
                b = nTalk(window).offset(),
                c = nTalk(window).scrollTop(),
                this.element.css({
                    position: "absolute",
                    width: this.repwidth ? this.repwidth: this.width + "px",
                    height: this.repheight ? this.repheight: this.height + "px",
                    left: a.left + b.left + "px",
                    top: a.top + b.top + "px"
                });
                var e = ["expression(eval(Math.max((document.documentElement.scrollLeft || document.body.scrollLeft), (document.documentElement.scrollLeft || document.body.scrollLeft) + " + a.left + ")))", "expression(eval(Math.max((document.documentElement.scrollLeft || document.body.scrollLeft), (document.documentElement.scrollLeft || document.body.scrollLeft) + (document.documentElement.clientWidth  || document.body.clientWidth ) - this.offsetWidth  - " + a.right + ")))"],
                f = ["expression(eval(Math.max((document.documentElement.scrollTop  || document.body.scrollTop ), (document.documentElement.scrollTop  || document.body.scrollTop ) + " + a.top + ")))", "expression(eval(Math.max((document.documentElement.scrollTop  || document.body.scrollTop ), (document.documentElement.scrollTop  || document.body.scrollTop ) + (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight - " + a.bottom + ")))"];
                nTalk.isFunction(this.element.get(0).style.getExpression) ? "left" == this.direction ? (this.element.Expression("left", e[0]), this.element.Expression("top", f[0])) : (this.element.Expression("left", e[1]), this.element.Expression("top", f[1])) : (nTalk(window).scrollTop(c + 1), "left" == this.direction ? this.element.replaceIEcssText({
                    left: e[0],
                    top: f[0]
                }) : this.element.replaceIEcssText({
                    left: e[1],
                    top: f[1]
                }), nTalk(window).scrollTop(c))
            } else b = {
                position: "fixed",
                width: this.repwidth ? this.repwidth: this.width + "px",
                height: this.repheight ? this.repheight: this.height + "px"
            },
            "left" == this.direction ? (b.left = a.left + "px", b.top = a.top + "px") : (b.right = a.right + "px", b.bottom = a.bottom + "px"),
            this.element.css(b);
            this.resize && !this.inited && nTalk.Event.addEvent(window, "resize",
            function(a) {
                d.resizeFixed(a)
            }),
            this.inited = !0
        },
        resizeFixed: function() {
            var a = [];
            "left" == this.direction ? (a.left = Math.max(0, Math.min(this.left, nTalk(window).width() - this.width)), a.top = Math.max(0, Math.min(this.top, nTalk(window).height() - this.height)), a.right = nTalk(window).width() - a.left - this.width, a.bottom = nTalk(window).height() - a.top - this.height) : (a.right = Math.min(this.right, nTalk(window).width() - this.width), a.bottom = Math.min(this.bottom, nTalk(window).height() - this.height), a.left = nTalk(window).width() - a.right - this.width, a.top = nTalk(window).height() - a.bottom - this.height, (a.left < 0 || a.top < 0) && (a.left = Math.max(0, a.left), a.top = Math.max(0, a.top), a.right = nTalk(window).width() - a.left - this.width, a.bottom = nTalk(window).height() - a.top - this.height)),
            this.fixedPosition(a)
        },
        clearExpression: function() {
            if (this.quirks) {
                var a = nTalk(window).offset();
                this.element.Expression("left", ""),
                this.element.Expression("top", ""),
                this.element.css({
                    left: this.left + a.left + "px",
                    top: this.top + a.top + "px"
                })
            }
        },
        animationPosition: function() {}
    },
    nTalk.extend({
        myString: function(a) {
            return str = new String(a || ""),
            str.trim = function() {
                return this.replace(/(^\s*)|(\s*$)/g, "")
            },
            str.linkFilter = function(a) {
                return this.toString().replace(/((\w+):\/\/)?([\w-]+\.)([\w-]+\.)([a-zA-Z\-_\.]+)([^$\s,\"\u4E00-\u9FA5]*)?/gi,
                function(b, c, d, e, f, g, h) {
                    var i = (c || "http://") + (e || "") + f + g + (h || "");
                    return '<a href="' + i.replace(/(^\s+)|(\s+$)/gi, "") + '" target="_blank" style="' + (a || "") + '">' + (c || "") + (e || "") + f + g + (h || "") + "</a>"
                })
            },
            str.linkFilter1 = function(a) {
                return this.toString().replace(/((\w+):\/\/)?([\w-]+\.)([\w-]+\.)([a-zA-Z\-_\.]+)([^$\s,\uFF0C\u3002\"\u4E00-\u9FA5]*)?/gi,
                function(b, c, d, e, f, g, h) {
                    var i = ((c || "http://") + (e || "") + f + g + (h || "")).replace(/(^\s+)|(\s+$)/gi, ""),
                    j = "" + nTalk.randomChar(16);
                    return ['<div style="', nTalk.STYLE_BODY, '"><a href="', i, '" target="_blank" style="', a || "", '">', c || "", e || "", f, g, h || "", '</a></div><div class="ntalk-link-contains ', j, '" data-source="', i, '" style="', a, '"></div>'].join("")
                })
            },
            str.sprintf = function() {
                var a = arguments.length,
                b = this;
                if (1 > a || !RegExp) return b.toString();
                for (var c = 0; a > c; c++) b = b.replace(new RegExp("%" + (c + 1), "g"), (arguments[c] + "").replace(/%\d/g, "").toString());
                return b
            },
            str
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        unit: function(a, b) {
            if (this.cssNumber[a]) return "";
            var c = (b + "").replace(cssValueExp, "");
            return "" === c ? "px": c
        },
        valHooks: {
            option: {
                get: function(a) {
                    return a.value || a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, f = a.selectedIndex,
                    g = [],
                    h = a.options,
                    i = "select-one" === a.type;
                    if (0 > f) return null;
                    for (c = i ? f: 0, d = i ? f + 1 : h.length; d > c; c++) if (e = h[c], e.selected && null === e.getAttribute("disabled") && !e.parentNode.disabled && "OPTGROUP" !== e.parentNode.tagName.toUpperCase()) {
                        if (b = nTalk(e).val(), i) return b;
                        g.push(b)
                    }
                    return i && !g.length && h.length ? nTalk(h[f]).val() : g
                },
                set: function(a, b) {
                    var c = nTalk.isArray(b) ? b: [b];
                    return nTalk(a).find("option").each(function() {
                        this.selected = nTalk.inArray(nTalk(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1),
                    c
                }
            }
        }
    }),
    nTalk.each(["radio", "checkbox"],
    function(a, b) {
        nTalk.valHooks[b] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on": a.value
            }
        }
    }),
    nTalk.each(["radio", "checkbox"],
    function(a, b) {
        nTalk.valHooks[b] = nTalk.extend(nTalk.valHooks[b], {
            set: function(a, b) {
                return a.checked = nTalk.inArray(nTalk(a).val(), b) >= 0,
                a.checked
            }
        })
    }),
    nTalk.fn.extend({
        bind: function(a, b) {
            return nTalk.access(this,
            function(a, b, c) {
                nTalk.Event.addEvent(a, b, c)
            },
            a, b, 1)
        },
        addEvent: function(a, b) {
            return this.bind(a, b)
        },
        click: function(a) {
            return this.bind("click", a)
        },
        hover: function(a, b) {
            return nTalk.access(this,
            function(a, b, c) {
                return nTalk.Event.addEvent(a, "mouseover", b),
                nTalk.Event.addEvent(a, "mouseout", c),
                nTalk(a)
            },
            a, b || emptyFunc)
        },
        removeEvent: function(a, b) {
            return nTalk.access(this,
            function(a, b, c) {
                void 0 === c ? a.onclick = null: nTalk.Event.removeEvent(a, b, c)
            },
            a, b, 1)
        },
        fire: function(a) {
            return nTalk.access(this,
            function(a, b, c) {
                nTalk.Event.fireEvent(a, b)
            },
            a, "", 1)
        },
        insert: function(a, b) {
            return nTalk(nTalk.insert(this[0], a, b))
        },
        html: function(a, b) {
            return void 0 !== a ? nTalk.each(this,
            function(b, c) {
                c.innerHTML = a
            }) : nTalk.isBoolean(b) && b ? (this.length ? this.get(0).innerHTML: "").replace(/(^\s+)|(\s+$)/gi, "") : this.length ? this.get(0).innerHTML: ""
        },
        append: function(a) {
            return nTalk.each(this,
            function(b, c) {
                nTalk.insert(c, a, "beforeend")
            })
        },
        appendTo: function(a, b) {
            var c, d = document.body || nTalk("body")[0] || document.documentElement;
            return "boolean" == typeof a && (b = a, a = null),
            c = a && "string" != typeof a ? a.talkVersion ? a.length ? a[0] : nTalk(d)[0] : a: nTalk(a || d)[0],
            nTalk.each(this,
            function(a, d) {
                var e = c.tagName.toLocaleUpperCase();
                if (b && b.talkVersion && b.length) return c.insertBefore(d, b.get(0));
                if (b && 1 == b.nodeType) return c.insertBefore(d, b);
                if (b === !0) return c.insertBefore(d, c.firstChild);
                if (!readyComplete && "BODY" == e) return nTalk.insert(c, d.outerHTML, "beforeend");
                try {
                    return c.appendChild(d)
                } catch(f) {}
            })
        },
        replace: function(a) {
            return nTalk.each(this,
            function(b, c) {
                if (c.replaceNode) c.replaceNode(a);
                else try {
                    c.parentNode.appendChild(a),
                    c.parentNode.removeChild(c)
                } catch(d) {}
            }),
            nTalk(a)
        },
        find: function(a) {
            var b = this.constructor.selector.query(a, this);
            return this.pushStack(b)
        },
        parent: function(a) {
            var b = this.get(0);
            if (a = a || 1, !b || !b.parentNode || !this.length) return null;
            for (; a > 0 && b.parentNode && 11 !== b.parentNode.nodeType;) b = b.parentNode,
            a--;
            return b ? nTalk(b) : null
        },
        child: function() {
            return this.find("*")
        },
        remove: function() {
            return nTalk.each(this,
            function(a, b) {
                var c = !1;
                for (var d in b) if ("IFRAME" != b.tagName.toUpperCase()) try {
                    "function" == typeof b[d] && (b[d] = null)
                } catch(e) {
                    nTalk.Log("remove(" + b.tagName + "):" + e.message, 3)
                }
                if (b.parentNode) try {
                    b.parentNode.removeChild(b),
                    c = !0
                } catch(e) {}
                if (!c) {
                    var f = document.createElement("DIV");
                    try {
                        f.appendChild(b),
                        f.innerHTML = "",
                        f.parentNode && f.parentNode.removeChild(f)
                    } catch(g) {}
                }
            })
        },
        css: function(a, b) {
            return nTalk.access(this,
            function(a, b, c) {
                return void 0 !== c ? nTalk.css(a, b, c) : nTalk.css(a, b)
            },
            a, b, arguments.length > 1)
        },
        cssText: function(a) {
            return nTalk.access(this,
            function(a, b, c) {
                return void 0 !== c ? a.style.cssText = c: a.style.cssText
            },
            "", a, arguments.length > 1)
        },
        attr: function(a, b) {
            return nTalk.access(this,
            function(a, b, c) {
                return void 0 !== c ? nTalk.attr(a, b, c) : nTalk.attr(a, b)
            },
            a, b, arguments.length > 1)
        },
        display: function(a) {
            return nTalk.each(this,
            function(b, c) {
                nTalk.css(c, "display", a ? "block": "none")
            })
        },
        replaceIEcssText: function(a, b) {
            return nTalk.access(this,
            function(a, b, c) {
                c = c || "";
                var d = ";" + a.style.cssText,
                e = new RegExp(";\\s*" + b + ":\\s*(.*?);", "ig"),
                f = ";" + b + ":" + c + ";",
                g = e.test(d);
                g ? a.style.cssText = d.replace(e, f) : a.style.cssText = d + f
            },
            a, b, arguments.length > 1)
        },
        Expression: function(a, b) {
            return nTalk.access(this,
            function(a, b, c) {
                return "getExpression" in a.style ? void 0 === c ? a.style.getExpression(b) : "" === c ? a.style.removeExpression(b) : a.style.setExpression(b, c) : void 0
            },
            a, b, arguments.length > 1)
        },
        curClass: function() {
            return this.length ? this.get(0).className: ""
        },
        addClass: function(a) {
            return nTalk.each(this,
            function(b, c) {
                nTalk.addClass(c, a)
            })
        },
        removeClass: function(a) {
            return nTalk.each(this,
            function(b, c) {
                nTalk.removeClass(c, a)
            })
        },
        indexOfClass: function(a) {
            return nTalk.indexOfClass(this[0], a)
        },
        replaceClass: function(a, b) {
            return nTalk.each(this,
            function(c, d) {
                nTalk.addClass(d, a),
                nTalk.removeClass(d, b)
            })
        },
        val: function(a) {
            if (!this.length) return "";
            var b, c, d, e = this[0];
            if (arguments.length) return nTalk.each(this,
            function(c, d) {
                null === a && (a = ""),
                b = nTalk.valHooks[d.type] || nTalk.valHooks[d.nodeName.toLowerCase()],
                b && "set" in b && void 0 !== b.set(this, a, "value") || (d.value = a)
            });
            if (b = nTalk.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value"))) return c;
            if (b = nTalk.valHooks[e.type], b && "get" in b) {
                d = "radio" == this[0].type;
                for (var f = [], g = 0; g < this.length; g++) if (void 0 !== (c = b.get(this[g], "value")) && this[g].checked) {
                    if (d) return c;
                    f.push(c)
                }
                return d ? "": f
            }
            return c = this[0].value,
            "string" == typeof c ? c: null === c ? "": c
        },
        width: function(a) {
            var b;
            return this.length > 0 ? (b = this[0], nTalk.isWindow(b) ? nTalk.browser.Quirks && !nTalk.browser.msie ? document.documentElement.clientWidth: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth: void 0 === a ? b.offsetWidth: b.offsetWidth = a) : 0
        },
        height: function(a) {
            var b;
            return this.length ? (b = this[0], nTalk.isWindow(b) ? nTalk.browser.Quirks && !nTalk.browser.msie ? window.innerHeight: document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight: void 0 === a ? b.offsetHeight: b.offsetHeight = a) : 0
        },
        scrollHeight: function(a) {
            var b;
            if (!this.length) return 0;
            if (b = this[0], nTalk.isWindow(b)) return window.innerHeight || document.documentElement.scrollHeight || document.body.scrollHeight;
            try {
                return void 0 === a ? b.scrollHeight: b.scrollHeight = a
            } catch(c) {
                return 0
            }
        },
        scrollLeft: function(a) {
            var b;
            if (!this.length) return 0;
            if (b = this[0], !nTalk.isWindow(b)) return void 0 === a ? b.scrollLeft: b.scrollLeft = a;
            if (void 0 === a) try {
                var c = document.documentElement.scrollLeft || window.pageXOffset;
                return Math.max(c, document.body ? document.body.scrollLeft: 0) || 0
            } catch(d) {
                return 0
            } else document.documentElement.scrollLeft = a,
            document.body.scrollLeft = a
        },
        scrollTop: function(a) {
            var b;
            return this.length ? (b = this[0], nTalk.isWindow(b) ? void 0 === a ? document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop: (document.documentElement.scrollTop = a, void(document.documentElement.scrollTop != a && (document.body.scrollTop = a))) : void 0 === a ? b.scrollTop: b.scrollTop = a) : 0
        },
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this: this.each(function(b, c) {
                nTalk.offset.setOffset(c, a, b)
            });
            var b, c = this[0],
            d = {
                top: 0,
                left: 0
            },
            e = c && c.ownerDocument;
            return nTalk.isWindow(c) ? {
                top: nTalk(c).scrollTop(),
                left: nTalk(c).scrollLeft()
            }: e ? (b = e.documentElement, nTalk.contains(b, c) ? (typeof c.getBoundingClientRect !== core_strUndefined && (d = c.getBoundingClientRect()), {
                top: d.top + nTalk(window).scrollTop() - b.clientTop,
                left: d.left + nTalk(window).scrollLeft() - b.clientLeft
            }) : d) : d
        },
        fixed: function(a) {
            return nTalk.each(this,
            function(b, c) {
                new nTalk.position(c, a)
            })
        }
    }),
    nTalk.offset = {
        setOffset: function(a, b) {
            var c, d, e, f = nTalk.css(a, "position"),
            g = nTalk(a),
            h = {};
            "static" === f && (a.style.position = "relative"),
            d = g.offset(),
            c = nTalk.css(a, "top"),
            e = nTalk.css(a, "left"),
            null !== b.top && (h.top = b.top - d.top + (c || 0)),
            null !== b.left && (h.left = b.left - d.left + (e || 0)),
            g.css(h)
        }
    },
    nTalk.cache = {
        data: null,
        init: function() {
            nTalk.cache.data = nTalk.extend({},
            nTalk.cache.deserialize(nTalk.cookie.get(nTalk.CON_CACHE_COOKIE)))
        },
        get: function(a, b) {
            return b === !0 && (nTalk.cache.data = nTalk.merge(nTalk.cache.data, nTalk.cache.deserialize(nTalk.cookie.get(nTalk.CON_CACHE_COOKIE)))),
            this.formatData(a)
        },
        set: function(a, b) {
            return this.formatData(a, b),
            nTalk.cookie.set(nTalk.CON_CACHE_COOKIE, nTalk.cache.serialize(nTalk.cache.data), 0)
        },
        serialize: function(a) {
            var b = this,
            c = [];
            if (nTalk.isArray(a)) {
                for (var d = 0; d < a.length; d++) c.push(this.serialize(a[d]));
                return "[" + c.join("|") + "]"
            }
            return nTalk.isObject(a) ? (nTalk.each(a,
            function(a, d) {
                c.push(a + ":" + b.serialize(d))
            }), c.length ? "{" + c.join(",") + "}": "{}") : a
        },
        deserialize: function(a) {
            if (!a) return {};
            var b, c = /"/.test(a) ? a: a.replace(/(\{|\[)/g, '$1"').replace(/(}|])/g, '"$1').replace(/(:|,)/g, '"$1"');
            try {
                b = nTalk.JSON.parseJSON(c)
            } catch(d) {
                return null
            }
            for (var e in b) b.hasOwnProperty(e) && (b[e] = nTalk.isNumeric(b[e]) ? +b[e] : b[e]);
            return b
        },
        formatData: function(a, b) {
            for (var c, d = a.split("."), e = nTalk.cache.data; c = d.shift();) if (d.length > 0) e[c] || (e[c] = {}),
            e = e[c];
            else {
                if (void 0 === b) return e[c] || null;
                if (!nTalk.isArray(b)) return e[c] = b,
                nTalk.cache.data;
                var f = [];
                e[c] && (f = f.concat(e[c])),
                e[c] = f.concat(b)
            }
        }
    },
    nTalk.promptwindow = function() {
        function a() {
            f = !0;
            var a = nTalk.getTime();
            100 > a - h || (h = nTalk.getTime(), n && e(), nTalk.isFunction(nTalk.promptwindow.callbackFocus) && nTalk.promptwindow.callbackFocus())
        }
        function b() {
            f = !1,
            nTalk.isFunction(nTalk.promptwindow.callbackBlur) && nTalk.promptwindow.callbackBlur()
        }
        function c(a, b, c) {
            if (!g && !f) {
                if (b && b.length > 0) {
                    j = nTalk.myString(o).sprintf(b, "", l),
                    k = "";
                    for (var e = 0,
                    h = Math.ceil(nTalk.enLength(b) / 2); h > e; e++) k += "　";
                    k = nTalk.myString(o).sprintf(k, a, l)
                }
                return n = c || n,
                i = setInterval(d, 800),
                g = !0
            }
        }
        function d() {
            m++,
            document.title = m % 2 === 0 ? k: j;
            try {
                top != self && (top.document.title = m % 2 === 0 ? k: j)
            } catch(a) {}
        }
        function e() {
            if (g && (clearInterval(i), i = null, m = 0, setTimeout(function() {
                document.title = l
            },
            500), g = !1, window.top != window.self)) try {
                window.top.document.title = l
            } catch(a) {}
        }
        var f = !1,
        g = !1,
        h = nTalk.getTime(),
        i = null,
        j = null,
        k = null,
        l = document.title,
        m = 0,
        n = !0,
        o = "【%1】%2 - %3";
        return window.addEvent && (nTalk(document).bind("focusin", a), nTalk(document).bind("focusout", b)),
        nTalk(window).bind("focus", a),
        nTalk(window).bind("blur", b),
        {
            callbackFocus: emptyFunc,
            callbackBlur: emptyFunc,
            originTitle: l,
            startPrompt: c,
            stopPrompt: e
        }
    } (),
    window.nTalk || (window.nTalk = window.NTKF = nTalk, nTalk.initializeCore())
} (window);
/* @file flashserver
 * @date 2016.06.22 00:49:52
 */
(function($) {
    $.flashserver = {
        'trailserver': 'http://trail.ntalker.com:443/trail/trail',
        'presenceserver': 'rtmp://bim1.ntalker.com:8000/flashIM;rtmps://bim1.ntalker.com:443/flashIM',
        'presencegoserver': 'http://bim1.ntalker.com/flashIM/wdkstatus',
        'crmcenter': '',
        'mcenter': 'http://bmct6.ntalker.com/',
        'coopserver': '',
        'roboturl': 'http://xn.faqrobot.org/servlet/XNAQ',
        't2dstatus': 'http://bt2d11.ntalker.com/t2d/t2dstatus',
        'chatview_in': '',
        'chatview_out': '',
        'chatview_wap': '',
        'queryurl': 'http://spider.ntalker.com:8080/spider/',
        'tchatmqttserver': 'tcp://bmqtt11.ntalker.com:443/TCHAT;ws://bmqtt11.ntalker.com:80/TCHAT',
        'isnoim': 2,
        'notrail': 0,
        'preload': 2000,
        'sessioncarry': '1',
        'enable_entrance': '0',
        'enable_invite': '1',
        'close_tchat_flash': '1',
        'close_im_flash': '0',
        'robot': '2',
        'connect_type': 'mqtt',
        'entranceConfig': {},
        'tchatConnectType': '0',
        'siteid': 'kf_9654'
    };
    $.sourceURI = $.baseURI + "siteid/respack_nt6.8.1/";
})(nTalk);

/* @file trail.js
 * @date 2016.05.25 14:25:00 
 */
!
function(a, b) {
    a.trail || (a.trail = {
        _trailServer: {
            kf_9988: "http://trailsvc.ntalker.com/trailsvc/count/trail.php?"
        },
        islogin: !1,
        called: !1,
        etype: "pv",
        edata: "",
        start: function(b, c) {
            var d, e, f = this,
            g = a.referrer && a.referrer.indexOf(a.domain) > -1;
            this.called && !c || (a.Log("nTalk.trail.start()", 1), this.etype = c ? "update": this.etype, b || "" === a.global.trailid || !g ? this.islogin = 1 : this.islogin = 0, d = this.formartData(), !a.isEmptyObject(a.global.ntalkerparam) && a.global.ntalkerparam && (e = a.extend({},
            {
                ntalkerparam: a.global.ntalkerparam
            })), a.each(d,
            function(b, c) {
                f.request(f.formatURI() + a.toURI(c), e,
                function(b) {
                    a.Log(b, 1)
                },
                b)
            }), this.called = !0)
        },
        request: function(b, c, d, e) {
            c && c.hasOwnProperty("ntalkerparam") && !a.isEmptyObject(c.ntalkerparam) ? (a.Log("nTalk.trail.request():etype:" + this.etype + ";POST request URI:" + b), new a.POST(b, c,
            function(a, b) {
                d.call(nTalk, "nTalk.trail: iframe[" + b + "] post complete.", 1)
            },
            "POST_IFRAME_" + e)) : (a.Log("nTalk.trail.request():etype:" + this.etype + ";POST request URI:" + b), a.require(b + "#rnd",
            function() {
                d.call(nTalk, "nTalk.trail: script get complete.", 1)
            }))
        },
        formatURI: function() {
            return this._trailServer[a.global.siteid] ? a.protocolFilter(this._trailServer[a.global.siteid]) : a.protocolFilter(a.server.trailserver + "/userinfo.php?")
        },
        formartData: function() {
            var b, c = [],
            d = {
                action: "save",
                url: a.url,
                siteid: a.global.siteid,
                uid: a.user.id,
                uname: a.user.name,
                device: a.browser.mobile ? "WAP": "PC",
                isvip: a.global.isvip,
                userlevel: a.global.userlevel,
                cid: a.global.pcid,
                sid: a.global.trailid,
                log: this.islogin,
                pageid: a.base.pageid,
                etype: this.etype,
                edata: this.edata
            };
            return a.global.pagetype && ( - 1 == a.url.indexOf("#") ? d.url += "#ntalker-pagetype=" + a.global.pagetype: -1 == a.url.indexOf("?") ? d.url = a.enCut(a.url.replace(/#/i, "?ntalker-pagetype=" + a.global.pagetype + "#"), 255) : d.url = a.enCut(a.url.replace(/#/i, "&ntalker-pagetype=" + a.global.pagetype + "#"), 255)),
            1 == this.islogin && (a.cache.set("tid", a.global.trailid), d = a.merge(d, {
                lan: a.language,
                scr: screen.width + "*" + screen.height,
                cookie: a.cookie.enable() ? 1 : 0,
                flash: a.flash.version
            })),
            a.Log("nTalk.trail: " + (this.islogin ? "LOGIN": "LINK") + " trailid:" + a.global.trailid + ", uid:" + a.user.id + ", pcid:" + a.global.pcid, this.islogin ? 1 : 0),
            a.global.orderid.length ? a.each(a.global.orderid,
            function(e, f) {
                b = e > a.global.orderprice.length - 1 ? "": a.global.orderprice[e],
                c.push(a.merge({},
                d, {
                    orderid: f,
                    orderprice: b,
                    sellerid: a.global.sellerid[e] || "",
                    ttl: a.global.title,
                    ref: a.referrer
                }))
            }) : c.push(a.merge({},
            d, {
                sellerid: a.global.sellerid.length ? a.global.sellerid[0] : "",
                ttl: a.global.title,
                ref: a.referrer
            })),
            c
        }
    })
} (nTalk);
/* @file nt2.js
 * @date 2016.05.25 14:25:00 
 */
!
function(a, b) {
    function c() {}
    return a.animate ? void a.Log("nt2.js loaded") : (a.animate = function() {
        var a = document.documentElement.style;
        return a.webkitTransition !== b || a.MozTransition !== b || a.OTransition !== b || a.msTransition !== b || a.transition !== b
    } () ?
    function() {
        var c = document.documentElement.style,
        d = c.webkitTransition !== b ? "Webkit": c.MozTransition !== b ? "Moz": c.OTransition !== b ? "O": c.msTransition !== b ? "ms": "",
        e = d + "Transition";
        return function(b, c, d, f) {
            var g = [],
            h = [],
            i = [],
            j = [],
            k = b.style;
            return d = d || 300,
            a.each(c,
            function(c, d) {
                h[c] = a.camelize(c),
                a.isObject(d) ? (d.to = d.to || 0, g[c] = a.cssNumber[c] ? d.to: parseInt(d.to, 10), i[c] = a.unit(c, d.to), a.isDefined(d.from) && a.css(b, h[c], parseInt(d.from, 10) + i[c])) : (g[c] = a.cssNumber[c] ? parseInt(d, 10) : d, i[c] = a.unit(c, d), a.css(b, h[c], g[c])),
                j.push(c)
            }),
            setTimeout(function() {
                k[e] = "all " + d + "ms",
                a.each(j,
                function(a, b) {
                    k[h[b]] = g[b] + i[b]
                })
            },
            15),
            setTimeout(function() {
                k[e] = "",
                f && f.call(b)
            },
            d),
            b
        }
    } () : function(b, c, d, e) {
        var f, g, h, i = 0,
        j = 0,
        k = 0,
        l = 30,
        m = [],
        n = [],
        o = [],
        p = [],
        q = [];
        for (d = d || 300, a.each(c,
        function(c, d) {
            o.push(a.camelize(c)),
            a.isObject(d) ? (g = d.to, a.isDefined(d.from) ? n.push(a.cssNumber[c] ? d.from: parseInt(d.from, 10)) : n.push(a.cssNumber[c] ? a(b).css(c) : parseInt(a(b).css(c), 10)), a.css(b, o[j], n[j] + a.unit(c, g))) : (g = d, n.push(a(b).css(c))),
            m.push(a.cssNumber[c] ? g: isNaN(parseInt(g, 10)) ? "": parseInt(g, 10)),
            p.push(a.unit(c, g)),
            j++,
            k++
        }), f = 0; l > f; f++) for (q[f] = [], j = 0; k > j; j++) q[f][o[j]] = a.cssNumber[o[j]] || a.isNumeric(parseInt(n[j])) ? n[j] + (m[j] - n[j]) / l * f + ("opacity" === o[j] ? "": p[j]) : "";
        for (var r = function() {
            for (j = 0; k > j; j++) a.css(b, o[j], q[i][o[j]]);
            i++
        }; l > j; j++) h = setTimeout(r, d / l * j);
        return setTimeout(function() {
            for (j = 0; k > j; j++) a.css(b, o[j], m[j] + p[j]);
            e && e.call(b)
        },
        d),
        b
    },
    a.extend({
        listenerFunctions: [],
        listenerMessage: function(b) {
            function c(b) {
                a.each(a.listenerFunctions,
                function(c, d) {
                    d.apply(a, [b.data])
                })
            }
            a.listenerFunctions.push(b),
            window.addEventListener && this.__listenerMessage !== !0 && (window.addEventListener("message", c), this.__listenerMessage = !0)
        },
        postMessage: function(a, b, c) {
            if (a.postMessage) {
                c = c || "*";
                try {
                    a.postMessage(b, c)
                } catch(d) {}
            }
        }
    }), a.Window = a.Class.create(), a.Window.prototype = {
        defaultOptions: {
            dropHeight: 30,
            width: 520,
            height: 410,
            left: 100,
            top: 100,
            minWidth: 520,
            minHeight: 410,
            resize: !1,
            drag: !1,
            fixed: !1,
            zIndex: 1e6,
            rightNode: !0,
            onChanage: c,
            onClose: c,
            onMinimize: c,
            onMaximize: c,
            onMaxResize: c
        },
        _tmpMove: null,
        _tmpStop: null,
        containter: null,
        header: null,
        body: null,
        chatBody: null,
        rightElement: null,
        buttonResize: null,
        buttonClose: null,
        buttonMax: null,
        buttonMin: null,
        _x: 0,
        _y: 0,
        _isdrag: null,
        _Style: null,
        parent: null,
        initialize: function(b, c) {
            a.extend(this, this.defaultOptions, b),
            this.parent = c || null,
            this.quirks = a.browser.msie6 || a.browser.Quirks && a.browser.oldmsie,
            this.right = a(window).width() - this.left - this.width,
            this.bottom = a(window).height() - this.top - this.height,
            a.Log("$.Window:: left:" + this.left + ", top:" + this.top),
            this._create(),
            this._bind()
        },
        close: function(b) {
            this.cancelBubble(b),
            this.onClose.toString().indexOf("anonymous") <= -1 ? this.onClose() : this.containter.hide(function() {
                a(this).remove()
            })
        },
        change: function(a) {
            a && this.onChanage.call(this, {
                width: this.width,
                height: this.height
            }),
            this._isdrag || (this.chatBody.css({
                height: this.height - this.dropHeight + "px"
            }), this.rightNode && this.rightElement.css("height", this.height - this.dropHeight + "px"))
        },
        maxresize: function() {
            this.onMaxResize()
        },
        minimize: function(a, b) {
            b !== !0 && this.cancelBubble(a),
            this.containter.css({
                height: "0px",
                width: "0px"
            }),
            b !== !0 && this.onMinimize()
        },
        maximize: function(a, b) {
            this.containter.css({
                height: this.height + "px",
                width: this.width + "px"
            }),
            b !== !0 && this.onMaximize()
        },
        cancelBubble: function(b) {
            this.containter.css("z-index", this.zIndex),
            a.Event.fixEvent(b).stopPropagation()
        },
        changeAttr: function(b, c) {
            this.quirks && this.clearExpression(),
            a.extend(this, {
                width: b,
                height: c,
                left: Math.max(0, a(window).width() - this.right - b),
                top: Math.max(0, a(window).height() - this.bottom - c)
            }),
            this.containter.css({
                width: this.width + "px",
                height: this.height + "px",
                left: this.left + "px",
                top: this.top + "px"
            }),
            this.quirks && this.fixedPosition(),
            this.change(!0)
        },
        start: function(b, c) {
            c || this.cancelBubble(b),
            this._Style = c ? {
                x: "left",
                y: "top"
            }: {
                x: "width",
                y: "height"
            },
            this.right = a(window).width() - this.left - this.width,
            this.bottom = a(window).height() - this.top - this.height,
            this.quirks && !c && this.clearExpression(),
            b = a.Event.fixEvent(b),
            this.containter.css(c ? {
                "z-index": ++this.zIndex
            }: {
                "z-index": ++this.zIndex
            }),
            this._isdrag = c,
            this._x = c ? b.clientX - this.containter.get(0).offsetLeft || 0 : this.containter.get(0).offsetLeft || 0,
            this._y = c ? b.clientY - this.containter.get(0).offsetTop || 0 : this.containter.get(0).offsetTop || 0,
            a.browser.msie ? this.containter.bind("losecapture", this._tmpStop).get(0).setCapture() : (a.Event.fixEvent(b).preventDefault(), a(window).bind("blur", this._tmpStop)),
            a(document).bind("mousemove", this._tmpMove),
            a(document).bind("mouseup", this._tmpStop)
        },
        move: function(b) {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(),
            b = a.Event.fixEvent(b);
            var c = b.clientX - this._x,
            d = b.clientY - this._y,
            e = a(window).offset();
            this._isdrag ? (this.quirks ? (this[this._Style.x] = Math.min(Math.max(c, e.left), e.left + a(window).width() - this.width) - e.left, this[this._Style.y] = Math.min(Math.max(d, e.top), e.top + a(window).height() - this.height) - e.top) : (this[this._Style.x] = Math.min(Math.max(c, 0), a(window).width() - this.width), this[this._Style.y] = Math.min(Math.max(d, 0), a(window).height() - this.height)), this.containter.css(this._Style.x, (this.quirks ? e.left: 0) + Math.max(0, this[this._Style.x]) + "px"), this.containter.css(this._Style.y, (this.quirks ? e.top: 0) + Math.max(0, this[this._Style.y]) + "px")) : (this.quirks ? (this[this._Style.x] = Math.min(Math.max(c + (this.quirks ? e.left: 0), this.minWidth), a(window).width() - this.left), this[this._Style.y] = Math.min(Math.max(d + (this.quirks ? e.top: 0), this.minHeight), a(window).height() - this.top)) : (this[this._Style.x] = Math.min(Math.max(c, this.minWidth), a(window).width() - this.left), this[this._Style.y] = Math.min(Math.max(d, this.minHeight), a(window).height() - this.top)), this.containter.css(this._Style.x, this[this._Style.x] + "px"), this.containter.css(this._Style.y, this[this._Style.y] + "px")),
            this.right = a(window).width() - this.left - this.width,
            this.bottom = a(window).height() - this.top - this.height,
            this.change(!0)
        },
        stop: function() {
            this.quirks && this.fixedPosition(),
            this.containter.css({
                "z-index": --this.zIndex
            }),
            a(document).removeEvent("mousemove", this._tmpMove),
            a(document).removeEvent("mouseup", this._tmpStop),
            a.browser.msie ? this.containter.removeEvent("losecapture", this._tmpStop).get(0).releaseCapture() : a(window).removeEvent("blur", this._tmpStop)
        },
        fixedPosition: function() {
            if (this.quirks) {
                var b = a(window).scrollTop();
                a(window).scrollTop(b + 1),
                this.containter.replaceIEcssText({
                    left: "expression(eval(Math.max((document.documentElement.scrollLeft || document.body.scrollLeft), (document.documentElement.scrollLeft || document.body.scrollLeft) + (document.documentElement.clientWidth  || document.body.clientWidth ) - this.offsetWidth  - " + this.right + ")))",
                    top: "expression(eval(Math.max((document.documentElement.scrollTop  || document.body.scrollTop ), (document.documentElement.scrollTop  || document.body.scrollTop ) + (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight - " + this.bottom + ")))"
                }),
                a(window).scrollTop(b),
                a(window).scrollLeft(1)
            } else this.containter.css({
                left: this.left + "px",
                top: this.top + "px"
            })
        },
        clearExpression: function() {
            var b = a(window).offset();
            this.containter.Expression("left", ""),
            this.containter.Expression("top", ""),
            this.containter.Expression("left", ""),
            this.containter.replaceIEcssText({
                left: b.left + this.left + "px",
                top: b.top + this.top + "px"
            })
        },
        _for_resize: function() {
            this.left = Math.max(0, a(window).width() - this.right - this.width),
            this.top = Math.max(0, a(window).height() - this.bottom - this.height),
            this.quirks || this.containter.css({
                left: this.left + "px",
                top: this.top + "px"
            })
        },
        _create: function() {
            return this.containter = a({
                className: this.className || "ntalk-window-containter",
                style: a.STYLE_BODY + "box-sizing:content-box;overflow:hidden;"
            }).appendTo(this.parent, !0).css({
                position: this.fixed ? this.quirks ? "absolute": "fixed": "absolute",
                border: "none",
                width: this.width + "px",
                height: this.height + "px",
                zIndex: this.zIndex
            }),
            this.fixedPosition(),
            this.header = a({
                className: "ntalk-window-head",
                style: a.STYLE_BODY + "cursor:move;position:relative;left:0;top:0;"
            }).appendTo(this.containter).css({
                width: "100%",
                height: this.dropHeight + "px"
            }),
            this.buttonClose = a({
                className: "ntalk-button-close",
                style: a.STYLE_BODY + "width:20px;height:20px;cursor:pointer;position:static;float:right;position:relative;margin:2px 3px 0 0;line-height:20px;vertical-align:middle;background:none;"
            }).appendTo(this.header),
            this.buttonMax = a({
                className: "ntalk-button-maxresize",
                style: a.STYLE_BODY + "width:20px;height:20px;cursor:pointer;position:static;float:right;position:relative;margin:2px 3px 0 0;line-height:20px;vertical-align:middle;background:none;"
            }).appendTo(this.header),
            this.buttonMin = a({
                className: "ntalk-button-min",
                style: a.STYLE_BODY + "width:20px;height:20px;cursor:pointer;position:static;float:right;position:relative;margin:2px 3px 0 0;line-height:20px;vertical-align:middle;background:none;"
            }).appendTo(this.header),
            this.body = a({
                className: "ntalk-window-body",
                style: a.STYLE_BODY + "float:left;width:100%;"
            }).appendTo(this.containter),
            this.chatBody = a({
                className: "ntalk-chat-body",
                style: a.STYLE_BODY + "width:100%;position:relative;left:0;top:0;"
            }).appendTo(this.body),
            this.rightNode && (this.rightElement = a({
                className: "ntalk-window-right",
                style: a.STYLE_BODY + "float:left;display:none;width:100%;"
            }).appendTo(this.containter)),
            this.resize && (this.buttonResize = a({
                className: "window-resize",
                style: a.STYLE_BODY + "width:10px;height:10px;cursor:nw-resize;position:absolute;right:1px;bottom:1px;font-size:0;background:none;z-index:99;"
            }).appendTo(this.containter)),
            a({
                style: a.STYLE_BODY + "clear:both;"
            }).appendTo(this.containter),
            this.change(),
            this.containter
        },
        _bind: function() {
            var b = this;
            this.containter.bind("mousedown",
            function(a) {
                b.drag && b.start.call(b, a, !0)
            }),
            this.buttonClose.bind("mousedown",
            function(c) {
                a.Event.fixEvent(c).stopPropagation(),
                b.close.call(b, c)
            }),
            this.buttonMax.bind("mousedown",
            function(c) {
                a.Event.fixEvent(c).stopPropagation(),
                b.maxresize.call(b, c)
            }),
            this.buttonMin.bind("mousedown",
            function(c) {
                a.Event.fixEvent(c).stopPropagation(),
                b.minimize.call(b, c)
            }),
            this.chatBody.bind("mousedown",
            function(a) {
                b.cancelBubble.call(b, a)
            }),
            this.rightNode && this.rightElement.bind("mousedown",
            function(a) {
                b.cancelBubble.call(b, a)
            }),
            this.resize && this.buttonResize.bind("mousedown",
            function(a) {
                b.start.call(b, a, !1)
            }),
            this.fixed && a(window).bind("resize",
            function() {
                b._for_resize()
            }),
            this._tmpStop = function(a) {
                b.stop.call(b, a)
            },
            this._tmpMove = function(a) {
                b.move.call(b, a)
            }
        }
    },
    a.Queue = a.Class.create(), a.Queue.prototype = {
        list: null,
        length: 0,
        initialize: function() {
            this.list = [],
            this.length = this.list.length
        },
        isEmpty: function() {
            return 0 === this.list.length
        },
        enQueue: function(a) {
            return this.list.push(a),
            this.length = this.list.length,
            this.list[this.length - 1]
        },
        deQueue: function() {
            var a;
            return this.isEmpty() ? null: (a = this.list.shift(), this.length = this.list.length, a)
        },
        queueFront: function() {
            return this.isEmpty() ? null: this.list[0]
        }
    },
    a.pageManage = a.Class.create(), a.pageManage.prototype = {
        identid: "",
        keyid: "",
        data: null,
        interID: null,
        options: null,
        debug: !1,
        inter: .8,
        count: 0,
        chanageCall: !0,
        CON_MANAGE_PAGE_LIST: "IM_EXIST_PAGEARR",
        pageStore: null,
        initialize: function(b, d) {
            var e, f, g = this,
            h = 3;
            this.debug && a.Log("pageManage.initialize():"),
            this.options = a.extend(this.options, {
                onChanage: c,
                onInterval: c,
                pageNum: 3,
                timeout: 2.5,
                inter: .8
            },
            b),
            this.keyid = a.CON_MANAGE_COOKIE + (d ? "_" + d.toUpperCase() : ""),
            this.identid = this._2shortTime(0, 8, 13),
            a.browser.chrome && (this.options.timeout = 5),
            this.options.timeout *= 10,
            this.options.inter *= 1e3,
            this.inter = this.options.inter,
            this.pageStore = a.store;
            try {
                for (; h--&&(e = this.pageStore.get(this.CON_MANAGE_PAGE_LIST) || "", "" === e););
                if (f = this._get().m, e = "" === e || 0 === f.length ? [] : e.split(","), e.length != f.length && e.length <= this.options.pageNum) {
                    e = [];
                    for (var i = 0; i < f.length; i++) for (var j in f[i]) e.push(j)
                }
                e.push(this.identid),
                this.pageStore.set(this.CON_MANAGE_PAGE_LIST, e.join(","))
            } catch(k) {}
            var l = a.getTime();
            this.interID = setInterval(function() {
                setTimeout(function() {
                    now = a.getTime();
                    var b = now - l;
                    g._update(b),
                    g.options.onInterval(g.options.timeout, g.data.m),
                    l = a.getTime()
                },
                0)
            },
            this.options.inter),
            a.Event.addEvent(window, "unload",
            function() {
                g._remove(),
                setTimeout(function() {},
                500)
            })
        },
        getIsLastPage: function() {
            return this.data.m.length
        },
        _get: function() {
            var b = a.cookie.get(this.keyid) || "{}";
            return a.extend({
                m: []
            },
            a.JSON.parseJSON(b))
        },
        _save: function() {
            var b = a.JSON.toJSONString(this.data);
            return a.cookie.set(this.keyid, b, 0),
            b
        },
        _remove: function() {
            var a = this._getIndex();
            this.data.m.splice(a, 1),
            this._save();
            var b = this.pageStore.get(this.CON_MANAGE_PAGE_LIST);
            if (b && "" !== b) {
                for (var c = b.split(","), d = 0; d < c.length; d++) if (c[d] == this.identid) {
                    c.splice(d, 1);
                    break
                }
                b = c.join(","),
                "" !== b ? this.pageStore.set(this.CON_MANAGE_PAGE_LIST, b) : this.pageStore.whereClear(this.CON_MANAGE_PAGE_LIST)
            }
        },
        _update: function(b) {
            this.data = this._get(),
            this._clear(b);
            var c = "update",
            d = this._getIndex();
            if (this.data.t = a.formatDate(), !this.data.m[d]) {
                if (! (this.data.m.length < this.options.pageNum)) return;
                c = "add",
                this.data.m[d] = {}
            }
            this.data.m[d][this.identid] = this._2shortTime(),
            this._save(),
            this.debug && a.Log(this.identid + ",pageCount:" + this.data.m.length + "," + c + " data:" + a.JSON.toJSONString(this.data.m)),
            "add" != c && this.chanageCall === !0 || this.count == this.data.m.length || (this.options.onChanage.call(this, this.data.m.length, this.data.m), this.count = this.data.m.length),
            this.chanageCall = !1
        },
        _clear: function(a) {
            var b = this._2shortTime();
            if (this.data.m.length) for (var c, d = 0; d < this.data.m.length; d++) if (this.data.m[d]) for (var e in this.data.m[d]) if ("function" != typeof this.data.m[d][e] && (c = b - this.data.m[d][e], Math.abs(c) > this.options.timeout + a / 100)) {
                this.data.m.splice(d, 1),
                this.chanageCall = !0;
                var f = this.pageStore.get(this.CON_MANAGE_PAGE_LIST);
                if (!f || "" === f) return;
                for (var g = f.split(","), h = 0; h < g.length; h++) if (g[h] == e) {
                    g.splice(h, 1);
                    break
                }
                f = g.join(","),
                "" !== f ? this.pageStore.set(this.CON_MANAGE_PAGE_LIST, f) : this.pageStore.whereClear(this.CON_MANAGE_PAGE_LIST)
            }
        },
        _getIndex: function() {
            if (!this.data.m.length) return 0;
            for (var b = 0; b < this.data.m.length; b++) if (this.data.m[b]) for (var c in this.data.m[b]) if (this.data.m[b] && !a.isFunction(this.data.m[b][c]) && c === this.identid) return b;
            return b
        },
        _2shortTime: function(b, c, d) {
            var e = (b ? b: a.getTime()).toString();
            return c = c || 5,
            d = d || 11,
            e.substring(c, d)
        }
    },
    a.store = function() {
        var d, e = "__cometd__",
        f = {
            disabled: !1
        },
        g = function() {
            var b = null;
            try {
                b = window.localStorage
            } catch(c) {
                return a.Log("localStorage:" + c.message, 3),
                !1
            }
            if (b) {
                var d = "test";
                try {
                    return null !== localStorage.getItem(d) && localStorage.removeItem(d),
                    localStorage.setItem(d, d),
                    localStorage.getItem(d) == d ? (localStorage.removeItem(d), !0) : !1
                } catch(c) {
                    return a.Log("The browser localStorage is unavailable. " + c.message, 3),
                    !1
                }
            }
        },
        h = a.browser.msie;
        if (f.toJSONString = function(b) {
            return null === b ? "": a.JSON.toJSONString(b)
        },
        f.parseJSON = function(c) {
            if ("object" == typeof c) return c || b;
            try {
                return a.JSON.parseJSON(c)
            } catch(d) {
                return c || b
            }
        },
        g()) d = window.localStorage,
        f.set = function(c, e) {
            if (!e || e === b || null === e) return f.remove(c);
            try {
                "function" == typeof d.setItem ? d.setItem(c, f.toJSONString(e)) : d[c] = f.toJSONString(e)
            } catch(g) {
                if ("QUOTA_EXCEEDED_ERR" == g.name.toUpperCase()) {
                    f.remove(c);
                    try {
                        d.setItem(c, f.toJSONString(e))
                    } catch(h) {
                        a.Log("store.set:" + h.message, 3)
                    }
                }
            }
            return e
        },
        f.get = function(a) {
            return f.parseJSON(d.getItem(a))
        },
        f.remove = function(b) {
            try {
                d.removeItem(b)
            } catch(c) {
                a.Log("store.remove:" + c.message, 3)
            }
        },
        f.clear = function() {
            try {
                d.clear()
            } catch(b) {
                a.Log("store.clear:" + b.message, 3)
            }
        },
        f.getAll = function() {
            for (var a = {},
            b = 0; b < d.length; ++b) {
                var c = d.key(b);
                a[c] = f.get(c)
            }
            return a
        };
        else if (h) {
            var i, j, k = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
            l = function(a) {
                return function() {
                    var b, c = Array.prototype.slice.call(arguments, 0);
                    c.unshift(d);
                    try {
                        i.appendChild(d)
                    } catch(e) {
                        i.insertBefore(d, i.firstChild)
                    }
                    d.addBehavior && d.addBehavior("#default#userData");
                    for (var g = 20; g > 0;) {
                        g--;
                        try {
                            d.load("nTK-LS");
                            break
                        } catch(e) {}
                    }
                    return b = a.apply(f, c),
                    i.removeChild(d),
                    b
                }
            },
            m = function(a) {
                return a.replace(k, "___")
            };
            try {
                j = new ActiveXObject("htmlfile"),
                j.open(),
                j.write('<script type="text/javascript">document.w=window;</script><iframe src="/favicon.ico"></iframe>'),
                j.close(),
                i = j.w.frames[0].document,
                d = i.createElement("div")
            } catch(n) {
                d = document.createElement("div"),
                i = document.body || document.getElementsByTagName("head")[0] || document.documentElement
            }
            f.set = l(function(a, c, d) {
                if (c = m(c), !d || d === b || null === d) return f.remove(c);
                a.setAttribute(c, f.toJSONString(d));
                try {
                    a.save("nTK-LS")
                } catch(e) {}
                return d
            }),
            f.get = l(function(a, b) {
                return b = m(b),
                f.parseJSON(a.getAttribute(b))
            }),
            f.remove = l(function(a, b) {
                b = m(b),
                a.removeAttribute(b),
                a.save("nTK-LS")
            }),
            f.clear = l(function(a) {
                var b;
                try {
                    b = a.XMLDocument.documentElement.attributes
                } catch(c) {
                    return
                }
                a.load("nTK-LS");
                for (var d = 0,
                e = b.length; e > d; d++) {
                    var f = b[d];
                    a.removeAttribute(f.name)
                }
                a.save("nTK-LS")
            }),
            f.getAll = l(function(a) {
                var b;
                try {
                    b = a.XMLDocument.documentElement.attributes
                } catch(c) {
                    return
                }
                for (var d = {},
                e = 0,
                g = b.length; g > e; ++e) {
                    var h = b[e],
                    i = m(h.name);
                    d[h.name] = f.parseJSON(a.getAttribute(i))
                }
                return d
            })
        } else f.set = function() {
            a.Log("The browser localStorage is unavailable.", 3)
        },
        f.get = c,
        f.remove = c,
        f.clear = c,
        f.getAll = c;
        try {
            f.set(e, e),
            f.get(e) != e && (f.disabled = !0),
            f.remove(e)
        } catch(n) {
            f.disabled = !0
        }
        return f.whereClear = function(b) {
            var c = this,
            d = this.getAll();
            a.each(d,
            function(a) {
                a.indexOf(b) > -1 && c.remove(a)
            })
        },
        f.enabled = !f.disabled,
        f
    } (), a.comet = a.Class.create(), a.comet.prototype = {
        name: "public.comet",
        version: "2014.05.17",
        connType: "login",
        options: null,
        fix: "",
        id: "",
        count: 0,
        sendIntervalID: null,
        _ipExpr: /^https?:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/(.*?)$/gi,
        _cacheElement: {},
        _connectTimeID: {},
        defaultOption: {
            muDomain: 3,
            timeout: 20,
            onCallback: c,
            onComplete: c,
            onAbnormal: c,
            onTimeout: c
        },
        initialize: function(b, c) {
            var d = this;
            this.uri = b,
            this.fix = a.randomChar(),
            this.uri || a.Log("comet uri is null", 3),
            this.callMethod = window,
            this.callbackName = "callback_" + this.fix,
            this.callMethod[this.callbackName] = function() {
                d._connectCallback.call(d, d.id, arguments)
            },
            this.options = a.extend({},
            this.defaultOption, c),
            this.initConnectionPooling()
        },
        initMessageQueue: function() {
            this.messageQueue || (this.messageQueue = new a.Queue, this.messageQueue.addMessage = function(a) {
                for (var b = 0; b < this.length; b++) if (this.list[b].msgid == a.msgid && this.list[b].index == a.index) return ! 1;
                return this.enQueue(a),
                !0
            },
            this.messageQueue.nextMessage = function(a, b) {
                if (this.isEmpty()) return null;
                if (!a) return this.queueFront();
                for (var c = 0; c < this.length; c++) if (this.list[c].msgid == a && this.list[c].body.sendpacket == b) return this.list[c + 1]
            },
            this.messageQueue.removeMessage = function(a, b) {
                for (var c, d = 0; d < this.length; d++) this.list[d].msgid != a || this.list[d].index != b && -1 != b || (c = d);
                this.list.splice(d, 1),
                this.length = this.list.length
            })
        },
        initConnectionPooling: function() {
            if (!this.connectionPooling) {
                this._ipExpr.test(this.uri) && (this.options.muDomain = 1),
                this.connectionPooling = new a.Queue,
                this.connectionPooling.get = function() {
                    for (var a, b, c, d = 0; d < this.list.length; d++) this.list[d].lock === !1 && (!b || b.rTimesample > this.list[d].rTimesample) && (b = this.list[d]),
                    (!c || this.list[d].sTimesample < c.sTimesample) && (c = this.list[d]);
                    return a = b || c,
                    this.recover(a.uri, !0),
                    a
                },
                this.connectionPooling.getConnect = function() {
                    var a = this.get();
                    return {
                        uri: a.uri,
                        url: a.uri + (/\?$/gi.test(a.uri) ? "&": "?")
                    }
                },
                this.connectionPooling.recover = function(b, c, d, e) {
                    for (var f = 0; f < this.list.length; f++) if (this.list[f].uri == b) return this.list[f].lock = c,
                    c ? (this.list[f].sTimesample = d || a.getTime(), this.list[f].rTimesample = 0) : this.list[f].rTimesample = e || a.getTime(),
                    !0;
                    return ! 1
                };
                for (var b = 0; b <= this.options.muDomain; b++) this.connectionPooling.enQueue({
                    uri: 0 === b ? this.uri.toString().replace(/(https?:\/\/)(.*?)(\-\d+)?\./gi, "$1$2.") : this.uri.toString().replace(/(https?:\/\/)(.*?)(\-\d+)?\./gi, "$1$2-" + ( + b - 1) + "."),
                    lock: !1,
                    sTimesample: 0,
                    rTimesample: 0
                })
            }
        },
        connect: function(b, c) {
            var d, e, f = this.count++;
            this.connType = "login",
            this.id = this.fix + "_" + f,
            b[c || "callbackname"] = this.callbackName,
            this.connectOptions = a.extend(b, {
                ts: a.getTime()
            }),
            d = this.connectionPooling.getConnect(),
            e = d.url + a.toURI(this.connectOptions),
            this._cacheElement[this.id] = this._createConnect(e, this.id, f, d)
        },
        kalive: function(b, c) {
            var d, e, f = this.count++;
            this.connType = "kalive",
            this.id = this.fix + "_" + f,
            b[c || "callbackname"] = this.callbackName,
            this.kaliveOptions = a.extend(this.kaliveOptions, b, {
                ts: a.getTime()
            }),
            d = this.connectionPooling.getConnect(),
            e = d.url + a.toURI(this.kaliveOptions),
            this._cacheElement[this.id] = this._createConnect(e, this.id, f, d)
        },
        disconnectServer: function(b, c) {
            var d = this.connectionPooling.getConnect();
            return this.flashGoServer = d.url + a.toURI(c === !1 ? b: a.extend(b, {
                ts: a.getTime()
            })),
            this.flashGoServer
        },
        disconnect: function() {
            a.require(this.flashGoServer,
            function(b) {
                a(b.error ? b.target: b).remove()
            }),
            window[this.callbackName] = c
        },
        reconnect: function() {
            this.connect(this.connectOptions)
        },
        send: function(b, c) {
            var d = this,
            e = this.connectionPooling.getConnect(),
            f = this.mdyServerAddr(e.url) + a.toURI(b);
            return a.require(f + "#rnd",
            function(b) {
                d.connectionPooling.recover(e.uri, !1),
                c && c.call(d, b.error),
                a(b.error ? b.target: b).remove()
            }),
            !0
        },
        mdyServerAddr: function(a) {
            return a.replace(/\/flashgo/i, "/httpgo")
        },
        post: function(b, c) {
            var d = this,
            e = this.connectionPooling.getConnect();
            new a.POST(this.mdyServerAddr(e.url), b,
            function() {
                d.connectionPooling.recover(e.uri, !1),
                c && c.call(d, !0)
            })
        },
        _createConnect: function(b, c, d, e) {
            var f, g, h = this,
            i = document.head || nTalk("head")[0] || document.documentElement;
            return f = a({
                className: c,
                tag: "script",
                type: "text/javascript",
                async: "async",
                src: b,
                charset: "utf-8"
            }).appendTo(i),
            g = f.get(0).readyState ? "onreadystatechange": "onload",
            f.get(0)[g] = f.get(0).onerror = function(b) {
                var d = /^(loaded|complete|undefined)$/,
                g = f.get(0).readyState;
                b = a.Event.fixEvent(b),
                d.test(g) && (h.connectionPooling.recover(e.uri, !1), "error" !== b.type ? setTimeout(function() {
                    h._connectComplete(b, c),
                    f.remove()
                },
                a.browser.msie ? 800 : 50) : (h._connectAbnormal(b, c), f.remove()))
            },
            this._connectTimeID[c] = setTimeout(function() {
                f.first().remove(),
                h._connectTimeout("timeout", c)
            },
            1e3 * +this.options.timeout + 1e4),
            f.get(0)
        },
        _connectCallback: function(b, c) {
            c = Array.prototype.slice.call(c),
            a("." + b).remove(),
            this._cacheElement[b] ? (this._stopCallComplete(b, "callback"), this.options.onCallback.apply(self, [!0, c])) : this.options.onCallback.apply(self, [!1, c])
        },
        _connectComplete: function(a, b) {
            var c = Array.prototype.slice.call(arguments);
            this._cacheElement[b] && (this._stopCallComplete(b, "complete"), this.options.onComplete.apply(self, [this.connType].concat(c)))
        },
        _connectAbnormal: function(a, b) {
            var c = Array.prototype.slice.call(arguments);
            this._cacheElement[b] && (this._stopCallComplete(b, "abnormal"), this.options.onAbnormal.apply(self, [this.connType].concat(c)))
        },
        _connectTimeout: function(a, b) {
            var c = Array.prototype.slice.call(arguments);
            this._cacheElement[b] && (this._stopCallComplete(b, "timeout"), this.options.onTimeout.apply(self, [this.connType].concat(c)))
        },
        _stopCallComplete: function(b) {
            var d = this._cacheElement[b];
            d ? d.onload = d.onreadystatechange = d.onerror = c: a.Log("stop error id:" + b, 3),
            delete this._cacheElement[b],
            clearTimeout(this._connectTimeID[b]),
            delete this._connectTimeID[b]
        },
        _createScriptPCID: function(b) {
            return "guest" + [b ? "TEMP" + a.randomChar(4) : a.randomChar(8), a.randomChar(4), a.randomChar(4), a.randomChar(4), a.randomChar(12)].join("-")
        }
    },
    a.mqttws = a.Class.create(), a.mqttws.prototype = {
        name: "public.mqttws",
        version: "2015.04.10",
        connect: null,
        subscriptions: [],
        messages: [],
        connected: !1,
        recCount: 0,
        waitTime: 500,
        _wsKeepaliveId: null,
        _options: {
            url: null,
            siteid: null,
            pcid: null,
            onCallback: null,
            loginMsg: null,
            timeout: 3,
            keepAliveInterval: 90
        },
        initialize: function(b) {
            var c = this;
            this.options = a.extend({},
            c._options, b),
            this.options.pcid = (this.options.siteid + "_" + this.options.pcid.substring(5)).substring(0, 23),
            a.require({
                mqtt: "mosquitto.js?siteid=" + a.extParmas.siteid
            },
            function(b) {
                c.connect = new a.Mosquitto,
                c.connect.onmessage = function(b, d, e, f) {
                    var g = a.JSON.parseJSON(d);
                    c.options.onCallback.apply(this, [!0, [g.method].concat(g.params)])
                },
                c.connect.ondisconnect = function(a) {
                    null !== this._wsKeepaliveId && (clearInterval(this._wsKeepaliveId), this._wsKeepaliveId = null)
                },
                c.connect.onconnect = function(a) {
                    0 === a ? (c.connect.subscribe("foo", 0), c.connect.publish("foo", c.options.loginMsg, 0, 0)) : c.reconnect()
                },
                c.connect.onreconnect = function() {
                    c.reconnect()
                },
                c.connect.connect(c.options.url, c.options.keepAliveInterval, c.options.pcid)
            })
        },
        reconnect: function() {
            var a = this; ++this.recCount < 3 ? this._waitTime = 500 : this._waitTime = 1e3 * +"034567890".charAt(Math.ceil(5 * Math.random())),
            setTimeout(function() {
                a.connect.connect(a.options.url, a.options.keepAliveInterval, a.options.pcid)
            },
            this._waitTime)
        },
        disconnect: function() {
            this.connect.closeFlag = !0,
            this.connect.disconnect()
        },
        kalive: function(a) {
            var b = this;
            this._wsKeepaliveId || (this._wsKeepaliveId = setInterval(function() {
                b.connect.publish("foo", a, 0, !1)
            },
            1e3 * this.options.keepAliveInterval))
        }
    },
    a.extend({
        htmlToElement: function(b) {
            var c, d;
            if (a.browser.msie) try {
                c = new ActiveXObject("MSXml.DOMDocument"),
                c.loadXML(b),
                d = c.childNodes
            } catch(e) {
                c = document.createElement("DIV"),
                c.innerHTML = b,
                d = c.childNodes
            } else c = document.createElement("DIV"),
            c.innerHTML = b,
            d = c.childNodes;
            return d
        },
        elementToObject: function(b) {
            var c, d, e = {};
            if (d = a.isArray(b) || b.talkVersion ? b[0] : b, e[d.tagName.toLowerCase()] = d.innerHTML || d.text, d.attributes) for (var f = 0; f < d.attributes.length; f++) c = d.attributes[f].name,
            c && (e[c] = d.attributes[f].value);
            else e.msg = d.textContent;
            return e
        },
        jsonToxml: function(b) {
            var c, d = this,
            e = "";
            return "object" != typeof b ? b: (a.each(b,
            function(f, g) {
                if ("string" == typeof g && "text" == f) e = g;
                else if (a.isArray(b)) e += d.jsonToxml(g);
                else {
                    if (e += "<" + f, "object" == typeof g.attributes) {
                        for (var h in g.attributes) g.attributes.hasOwnProperty(h) && (e += " " + h + '="' + g.attributes[h] + '"');
                        delete g.attributes
                    }
                    c = d.jsonToxml(g),
                    e += g && c ? ">" + c + "</" + f + ">": "></" + f + ">"
                }
            }), e)
        },
        utils: {
            options: {},
            handleLinks: function(b, c) {
                this.options = a.extend({},
                this.options, c),
                b = b || "";
                for (var d = 0; d < this.linkPatterns.length; d++) b = b.replace(this.linkPatterns[d][0], this.linkPatterns[d][1]);
                return b
            },
            linkPatterns: [[/\[link\s+reconnect=([^\s\[\]'"]+)\s*[^\[\]]*]([^\[\]]+)\[\/\s*link]/gi, '<a style="' + a.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').reconnect(this);return false;" >$2</a>'], [/\[link\s+message=([^\s\[\]'"]+)\s*[^\[\]]\s*source=([^\s\[\]'"]+)\s*[^\[\]]*]([^\[\]]+)\[\/\s*link]/gi, '<a style="' + a.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').switchUI(\'message\', $2);return false;" >$3</a>'], [/\[link\s+cancel=([^\s\[\]'"]+)\s+action=([^\s\[\]'"]+)\s*[^\[\]]*]([^\[\]]+)\[\/\s*link]/gi, '<a style="' + a.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').cancelUpload(\'$2\');return false;" >$3</a>'], [/\[link\s+resend=([^\s\[\]'"]+)\s+msgid=([^\s\[\]'"]+)\s*[^\[\]]*]([^\[\]]+)\[\/\s*link]/gi, '<a style="' + a.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').resend(\'$2\', this);return false;" >$3</a>'], [/\[link\s*manual=([^\s\[\]'"]+)](.*?)\[\/link]/gi, '<a style="' + a.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').switchServerType(true);return false;" >$2</a>'], [/\[link\s*artificial=([^\s\[\]'"]+)](.*?)\[\/link]/gi, '<a style="' + a.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').switchServerType(true);return false;" >$2</a>'], [/\[link\s*robot](.*?)\[\/link]/gi, '<a style="' + a.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get().switchServerType(false, 2);return false;" >$1</a>'], [/\[link\s*robotindex=([^\s\[\]'"]+)](.*?)\[\/link]/gi, '<a style="' + a.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'{$settingid}\').send(\'$1\');return false;">$2</a>'], [/\[link\s*href=(.*?)](.*?)\[\/link]/gi, '<a style="' + a.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;cursor:pointer;" href="$1">$2</a>'], [/\[link\s*(.*?)?](.*?)\[\/link]/gi, '<a style="' + a.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;cursor:pointer;" href="javascript:void(0);"' + (a.browser.iOS ? ' href="$1" target="_blank"': " onclick=\"window.open('$1')\"") + ">$2</a>"], [/\{\$(\w+)}/gi,
            function(b, c) {
                return a.utils.options[c] || ""
            }]]
        },
        toHSL: function(b) {
            return a.isHex(b) ? a.rgb2HSL(a.hex2RGB(b)) : a.isRGB(b) ? a.rgb2HSL(b) : b
        },
        isHex: function(a) {
            return "string" == typeof a && /^#?([0-9a-f]{3}|[0-9a-f]{6})$/gi.test(a)
        },
        isRGB: function(b) {
            return a.isObject(b) && a.isDefined(b.r) && a.isDefined(b.g) && a.isDefined(b.b)
        },
        isHSL: function(b) {
            return a.isObject(b) && a.isDefined(b.h) && a.isDefined(b.s) && a.isDefined(b.l)
        },
        hex2RGB: function(a) {
            var b = a.toString().replace("#", ""),
            c = b.split(""),
            d = {};
            return d = 3 == b.length ? {
                r: parseInt(c[0] + c[0], 16),
                g: parseInt(c[1] + c[1], 16),
                b: parseInt(c[2] + c[2], 16)
            }: 6 == b.length ? {
                r: parseInt(c[0] + c[1], 16),
                g: parseInt(c[2] + c[3], 16),
                b: parseInt(c[4] + c[5], 16)
            }: {
                r: 0,
                g: 0,
                b: 0
            }
        },
        rgb2HSL: function(a) {
            var b, c, d, e, f, g, h, i, j, k = {};
            return b = a.r / 255,
            c = a.g / 255,
            d = a.b / 255,
            h = Math.min(b, c, d),
            i = Math.max(b, c, d),
            j = i - h,
            k.l = (i + h) / 2,
            0 === j ? (k.h = 0, k.s = 0) : (k.l < .5 ? k.s = j / (i + h) : k.s = j / (2 - i - h), e = ((i - b) / 6 + j / 2) / j, f = ((i - c) / 6 + j / 2) / j, g = ((i - d) / 6 + j / 2) / j, b == i ? k.h = g - f: c == i ? k.h = 1 / 3 - g + e: d == i && (k.h = 2 / 3 - e + f), k.h < 0 && (k.h += 1), k.h > 1 && (k.h -= 1)),
            k
        }
    }), a.fn.extend({
        animate: function(b, c, d) {
            return a.each(this,
            function(e, f) {
                a.animate(f, b, c, d)
            })
        },
        show: function(b, c) {
            return a.isFunction(b) && (c = b, b = 500),
            this.animate({
                visibility: "visible",
                opacity: {
                    from: 0,
                    to: 1
                }
            },
            b || 500, c)
        },
        hide: function(b, c) {
            return a.isFunction(b) && (c = b, b = 500),
            this.animate({
                opacity: {
                    to: 0
                }
            },
            b || 500, c)
        },
        gradient: function(b, c, d) {
            var e, f;
            return b ? a.each(this,
            function(g, h) {
                if (a.browser.oldmsie && (e = /top|bottom/.test(b) ? 0 : 1, /right|bottom/.test(b) && (f = c, c = d, d = f)), a.browser.webkit) {
                    switch (b) {
                    case "top":
                        e = "0% 100%,0% 0%";
                        break;
                    case "right":
                        e = "0% 0%,100% 0%";
                        break;
                    case "bottom":
                        e = "0% 0%,0% 100%";
                        break;
                    case "left":
                        e = "100% 0%,0% 0%"
                    }
                    a(h).css("background-image", b ? "-webkit-gradient(linear," + e + ",color-stop(1, " + c + "),color-stop(0, " + d + "))": "none")
                } else if (a.browser.gecko) a(h).css("background-image", b ? "-moz-linear-gradient(" + b + ", " + c + ", " + d + ")": "none");
                else if (a.browser.oldmsie) {
                    var i = /progid:DXImageTransform\.Microsoft\.gradient\((.*?)\)\s*/gi;
                    h.style.filter = h.currentStyle.filter.replace(i, "") + (b ? " progid:DXImageTransform.Microsoft.gradient(GradientType=" + e + ",startColorstr='" + c + "', endColorstr='" + d + "')": "")
                } else a.browser.msie ? a(h).css("background-image", b ? "-ms-linear-gradient(" + b + ", " + c + ", " + d + ")": "none") : a(h).css("background-image", b ? "linear-gradient(" + b + ", " + c + ", " + d + ")": "none")
            }) : a.each(this,
            function(b, c) {
                a.browser.oldmsie ? a(c).css("filter", "none") : a(c).css("background-image", "none")
            })
        }
    }), a.extend({
        base64: {
            _strKey: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(b) {
                var c, d, e, f, g, h, i, j = a.base64,
                k = "",
                l = 0;
                for (b = j._utf8_encode(b || ""); l < b.length;) c = b.charCodeAt(l++),
                d = b.charCodeAt(l++),
                e = b.charCodeAt(l++),
                f = c >> 2,
                g = (3 & c) << 4 | d >> 4,
                h = (15 & d) << 2 | e >> 6,
                i = 63 & e,
                isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64),
                k = k + j._strKey.charAt(f) + j._strKey.charAt(g) + j._strKey.charAt(h) + j._strKey.charAt(i);
                return k
            },
            decode: function(b) {
                var c, d, e, f, g, h, i, j = a.base64,
                k = "",
                l = 0;
                for (b = (b || "").replace(/[^A-Za-z0-9\+\/=]/g, ""); l < b.length;) f = j._strKey.indexOf(b.charAt(l++)),
                g = j._strKey.indexOf(b.charAt(l++)),
                h = j._strKey.indexOf(b.charAt(l++)),
                i = j._strKey.indexOf(b.charAt(l++)),
                c = f << 2 | g >> 4,
                d = (15 & g) << 4 | h >> 2,
                e = (3 & h) << 6 | i,
                k += String.fromCharCode(c),
                64 != h && (k += String.fromCharCode(d)),
                64 != i && (k += String.fromCharCode(e));
                return k = j._utf8_decode(k)
            },
            _utf8_encode: function(a) {
                a = a.replace(/\r\n/g, "\n");
                for (var b = "",
                c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
                }
                return b
            },
            _utf8_decode: function(a) {
                for (var b, c, d, e = "",
                f = 0; f < a.length;) b = a.charCodeAt(f),
                128 > b ? (e += String.fromCharCode(b), f++) : b > 191 && 224 > b ? (c = a.charCodeAt(f + 1), e += String.fromCharCode((31 & b) << 6 | 63 & c), f += 2) : (c = a.charCodeAt(f + 1), d = a.charCodeAt(f + 2), e += String.fromCharCode((15 & b) << 12 | (63 & c) << 6 | 63 & d), f += 3);
                return e
            }
        },
        FORM: {
            createInput: function(b, c, d) {
                for (var e, f, g, h, i = [], j = a.browser.mobile, k = a.extend({
                    id: "",
                    rowspan: 0,
                    style: ""
                },
                c), l = '<span class="ntkf-text-red" style="' + a.STYLE_BODY + 'padding:2px 5px 2px 0;color:#f00;">' + (d || "") + "</span>", m = 0; m < b.length; m++) {
                    switch (e = a.extend({
                        titlewidth: "80px",
                        inputwidth: "auto",
                        input: {
                            width: "90%",
                            height: "auto"
                        }
                    },
                    b[m]), h = j ? e.title: e.title + (e.title.length == a.enLength(e.title) ? ":": "："), /zh_cn|zh_tw/.test(a.lang.language) && a.enLength(e.title) > 16 || e.multipart || /radio|checkbox/.test(e.type) && e.options.length > 2 ? (e.multipart = !0, i.push(j ? '<tr style="' + a.STYLE_BODY + '"><td style="' + a.STYLE_BODY + 'width:100%;"><div style="' + a.STYLE_BODY + 'width:100%; line-height:14px; font-size:14px; font-weight:bold; text-align:center; color:#333333; margin: 15px 0px 20px 0px">' + h + "</div>": ['<tr style="', a.STYLE_BODY, '">', '<td style="', a.STYLE_BODY, 'vertical-align:top;line-height:28px;color:#333;" colspan="2">', '<div style="', a.STYLE_BODY, 'margin:5px 10px 5px 10px;color:#5a5a5a;">', h, e.required === !0 ? l: "", "</div>", "</td>", "</tr>", '<tr style="' + a.STYLE_BODY + '"><td style="', a.STYLE_BODY, 'padding:0 5px 0 0;text-align:right;vertical-align:top;line-height:28px;color:#333;"></td>', '<td style="' + a.STYLE_BODY + "line-height:28px;width:" + e.inputwidth + ';">'].join(""))) : i.push('<tr style="' + a.STYLE_BODY + '">' + (j ? "": '<td style="' + a.STYLE_BODY + "padding:0 5px 0 0;text-align:right;vertical-align:top;line-height:28px;color:#333;width:" + e.titlewidth + ';"><div style="' + a.STYLE_BODY + 'margin:4px 0 0 0;text-align:right;color:#5a5a5a;">' + (e.required === !0 ? l: "") + h + "</div></td>") + '<td style="' + a.STYLE_BODY + "line-height:28px;width:" + (j ? "100%": e.inputwidth) + ';">'), e.type) {
                    case "select":
                        i.push('<select data-index="' + m + '" name="' + e.name + '" style="' + a.STYLE_BODY + "border:1px solid #ccc;height:24px;color:#333;margin:0 0 4px;line-height:20px;width:" + (j ? "99%": e.input.width) + ';">'),
                        i.push('<option value="" style="' + a.STYLE_BODY + 'color:#ccc;">' + e.defaultText + "</option>");
                        for (var n = 0; n < e.options.length; n++) f = e.options[n],
                        f = "string" == typeof f ? {
                            text: f,
                            value: f
                        }: f,
                        i.push('<option value="' + f.value + '" style="' + a.STYLE_BODY + 'color:#333;">' + f.text + "</option>");
                        i.push("</select>");
                        break;
                    case "radio":
                        i.push('<ul style="' + a.STYLE_BODY + 'list-style:none;">');
                        for (var o, p = 0; p < e.options.length; p++) f = e.options[p],
                        f = "string" == typeof f ? {
                            text: f,
                            value: f
                        }: f,
                        o = e.name + "_" + p,
                        g = e.defaultText == f.value ? " checked": "",
                        i.push('<li class="form-item" style="' + a.STYLE_BODY + 'list-style:none;padding:0 2px 0 0;color:#000;float:left;"><input type="radio" name="' + e.name + '"id="' + o + '" value="' + f.value + '" _custom_text="' + f.text + '" style="' + a.STYLE_BODY + 'color:#333;"' + g + ' /><label for="' + o + '" style="' + a.STYLE_BODY + 'display:inline;color:#000;">' + f.text + "</label></li>");
                        i.push('<li style="' + a.STYLE_BODY + 'list-style:none;clear:both;width:0;height:0;"></li>'),
                        i.push("</ul>");
                        break;
                    case "checkbox":
                        i.push('<ul style="' + a.STYLE_BODY + 'list-style:none;">');
                        for (var q, r = 0; r < e.options.length; r++) f = e.options[r],
                        f = "string" == typeof f ? {
                            text: f,
                            value: f
                        }: f,
                        q = e.name + "_" + r,
                        g = e.defaultText == f.value ? " checked": "",
                        i.push('<li class="form-item" style="' + a.STYLE_BODY + 'list-style:none;padding:0 2px 0 0;float:left;"><input type="checkbox" name="' + e.name + '" id="' + q + '" value="' + f.value + '" _custom_text="' + f.text + '" style="' + a.STYLE_BODY + 'color:#333;"' + g + ' /><label for="' + q + '" style="' + a.STYLE_BODY + 'display:inline;color:#000;">' + f.text + "</label></li>");
                        i.push('<li style="' + a.STYLE_BODY + 'list-style:none;clear:both;width:0;height:0;"></li>'),
                        i.push("</ul>");
                        break;
                    case "textarea":
                        i.push('<textarea data-index="' + m + '" name="' + e.name + '" style="' + a.STYLE_BODY + "border:1px solid #ccc;color:#ccc;width:" + (j ? "99%": e.input.width) + ";height:" + e.input.height + ';"' + (a.browser.html5 ? ' placeholder="' + e.defaultText + '">': ">" + e.defaultText) + "</textarea>");
                        break;
                    default:
                        i.push('<input data-index="' + m + '" type="text" name="' + e.name + '"' + (a.browser.html5 ? ' placeholder="' + e.defaultText + '" value=""': ' value="' + e.defaultText + '"') + ' maxlength="32" style="' + a.STYLE_BODY + "border:1px solid #ccc;height:24px;width:" + (j ? "99%": e.input.width) + ';margin:0 0 4px;color:#ccc;"'),
                        "phone" == e.verification && i.push(" onblur=\"this.value=this.value.replace(/[^0-9-]+/, '');\" onkeyup=\"var keyCode=(event || window.event).keyCode; if( !/16|17|35|36|37|38|39|40/i.test(keyCode) ){this.value=this.value.replace(/[^0-9-]+/, '');}\""),
                        i.push(" />")
                    }
                    e.messageid && (i.push('<div style="' + a.STYLE_BODY + 'display:none;color:#EF7208;" class="form-info ' + e.messageid + '">'), i.push('<div style="' + a.STYLE_BODY + "margin:2px;width:15px;height:15px;float:left;background:transparent url(" + a.sourceURI + '/images/chaticon.png) no-repeat -160px -39px;"></div>'), i.push('<div style="' + a.STYLE_BODY + 'color:#EF7208;float:left;" class="chat-view-info"></div>'), i.push('<div style="' + a.STYLE_BODY + 'clear:both;width:0;height:0;"></div>'), i.push("</div>")),
                    i.push("</td>"),
                    k.style && 0 === m && i.push('<td style="' + a.STYLE_BODY + k.style + '" id="' + k.id + '" rowspan="' + k.rowspan + '"></td></tr>')
                }
                return i.join("")
            },
            bindFormEvent: function(b, c) {
                a(c).find("input[type=text], textarea").bind("focus",
                function() {
                    var c = a(this).css({
                        color: "#333",
                        "border-color": a.browser.mobile ? "#0079fe": "#666"
                    }),
                    d = c.attr("data-index") || 0,
                    e = b[d].defaultText;
                    e == c.val() && c.val("")
                }).bind("blur",
                function() {
                    var c = a(this).css("border-color", "#ccc"),
                    d = c.attr("data-index") || 0,
                    e = b[d].defaultText;
                    "" === c.val() && c.val(e),
                    "" !== c.val() && c.val() != e || c.css("color", "#ccc")
                })
            },
            verificationForm: function(b, c, d, e) {
                for (var f, g, h, i, j, k = [], l = !1, m = new RegExp("\\d{6,}", "i"), n = new RegExp("^[a-zA-Z0-9\\._-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$", "i"), o = this, p = function(b, c) {
                    c.checked && (j = {
                        value: a(c).val() || "",
                        text: a(c).attr("_custom_text")
                    })
                },
                q = function() {
                    a(this).display()
                },
                r = 0; r < b.length; r++) {
                    switch (b[r].type) {
                    case "checkbox":
                        j = [],
                        f = a(d).find("input[name=" + b[r].name + "]"),
                        g = a(d).find("input[name=" + b[r].name + "][checked]");
                        for (var s = 0; s < g.length; s++) j.push({
                            value: g.get(s).value,
                            text: a(g.get(s)).attr("_custom_text")
                        });
                        break;
                    case "radio":
                        j = {
                            value: "",
                            text: ""
                        },
                        f = a(d).find("input[name=" + b[r].name + "]"),
                        a(d).find("input[name=" + b[r].name + "][checked]").each(p);
                        break;
                    case "select":
                        f = a(d).find("select[name=" + b[r].name + "]"),
                        j = a("option[selected]", f).val() || "",
                        j = b[r].defaultText && j == b[r].defaultText ? "": j;
                        break;
                    case "textarea":
                        f = a(d).find("textarea[name=" + b[r].name + "]"),
                        b[r].defaultText && b[r].defaultText == f.val() ? (j = "", f.val("")) : j = f.val().replace(/(^\s*)|(\s*$)/g, "");
                        break;
                    default:
                        f = a(d).find("input[name=" + b[r].name + "]"),
                        b[r].defaultText && b[r].defaultText == f.val() ? (j = "", f.val("")) : j = f.val().replace(/(^\s*)|(\s*$)/g, "")
                    }
                    h = "string" == typeof j ? "" === j || !j.length: a.isArray(j) ? 0 === j.length: "" === j.value,
                    i = !(!b[r].messageid || !b[r].message);
                    var t = a(d).find("." + b[r].messageid),
                    u = a(d).find("." + b[r].messageid + " .chat-view-info");
                    b[r].required && h ? (o.showError(i, b[r].message[0], u, t, f, b[r].type), l = !0) : ("phone" != b[r].verification || h || m.test(j)) && ("email" != b[r].verification || h || n.test(j)) ? b[r].min && !h && a.enLength(j) < b[r].min ? (o.showError(i, b[r].message[1], u, t, f), l = !0) : b[r].max && !h && a.enLength(j) > b[r].max ? (o.showError(i, b[r].message[2], u, t, f), l = !0) : (i ? t.hide(q) : /radio|checkbox/.test(b[r].type) ? f.parent().css("color", "#333") : f.css("border-color", "#DBD8D1"), h || k.push({
                        name: b[r].name,
                        title: b[r].title,
                        value: j
                    })) : (o.showError(i, b[r].message[1], u, t, f), l = !0)
                }
                return l ? void("function" == typeof e && e()) : (a.Log("form submit complete, failCallback is null", 3), void("function" == typeof c ? c(k) : a.Log("form submit complete, callback is null", 3)))
            },
            showError: function(b, c, d, e, f, g) {
                var h = this;
                if (b && c) if (a.browser.mobile) {
                    this.messageErrorToast && (this.messageErrorToast.remove(), this.messageErrorToast = null, this.messageErrorTimeout && clearTimeout(this.messageErrorTimeout));
                    var i = c.length > 10 ? 300 : 250;
                    this.messageErrorToast = new a.Toast('<div id="#message_error" style="position: relative;width: ' + (i - 50) + 'px; height:30px; line-height: 30px;z-index:100; color: #FFF; top: 30px; left: 25px; text-align:center;font-weight:bold">' + c + "</div>", {
                        width: i,
                        height: 90
                    }),
                    this.messageErrorTimeout = setTimeout(function() {
                        h.messageErrorToast.remove(),
                        h.messageErrorToast = null,
                        f.get(0).focus()
                    },
                    2e3)
                } else d.html(c),
                e.display(1).show(),
                f.get(0).focus();
                else / radio | checkbox / .test(g) ? f.parent().css("color", "#f00") : f.css("border-color", "#f00").get(0).focus()
            }
        }
    }), a.Transfer = a.Class.create(), a.Transfer.prototype = {
        name: "Transfer",
        button: null,
        element: null,
        form: null,
        iframe: null,
        proxy: null,
        options: null,
        debug: !0,
        fkey: "",
        initialize: function(b, d) {
            this.button = d;
            var e = a.randomChar(16);
            if (this.options = a.extend({
                onError: c,
                onChange: c,
                callback: c,
                name: e,
                curName: "",
                compSize: 512e3,
                params: {},
                target: "iframe-transfer-" + e
            },
            b), !this.options.server) return void a.Log("server is null", 3);
            this.proxy = a({
                tag: "IFRAME",
                name: "proxy-" + e,
                src: this.options.server.substring(0, this.options.server.lastIndexOf("/")) + "/proxy.html?t=" + a.getTime(),
                style: a.STYLE_NBODY + "width:0px;height:0px;display:none;"
            }).appendTo(a(this.button)).get(0).contentWindow;
            var f = this,
            g = Math.max(20, this.button.width(), parseFloat(this.button.css("width"))),
            h = Math.max(20, this.button.height(), parseFloat(this.button.css("height"))),
            i = a.STYLE_BODY + "width:" + g + "px;height:" + h + "px;overflow:hidden;";
            this.completed = function(a) {
                var b = /^(?:loaded|complete|undefined)$/,
                c = this.readyState;
                b.test(c) && (f.iframe.removeEvent("readystatechange", f.completed).removeEvent("load", f.completed), f.transferComplete(a, f.fkey))
            },
            this.form = a({
                tag: "FORM",
                action: "",
                method: "POST",
                target: this.options.target,
                enctype: "multipart/form-data",
                style: i
            }).appendTo(this.button, !0),
            this.iframe = a({
                tag: "IFRAME",
                name: this.options.target,
                src: "about:blank",
                style: i + "width:0;height:0;display:none;"
            }).appendTo(this.button, !0),
            this.element = a({
                tag: "INPUT",
                type: "file",
                name: this.options.name,
                accept: this.options.accept || "*",
                style: i,
                title: this.button.attr("title") || ""
            }).appendTo(this.form, !0).css("opacity", 0),
            this.element.click(function() {
                "" !== this.value && f.form.get(0).reset(),
                f.iframe.bind("readystatechange", f.completed).bind("load", f.completed),
                f.fkey = a.randomChar(16)
            }).bind("change",
            function(a) {
                var b = {};
                this.files ? (b.name = this.files[0].name, b.size = this.files[0].size) : (b.name = this.value.substring(this.value.lastIndexOf("\\") + 1), b.size = ""),
                b.name && (f.options.onChange(b), f.fileChange(a, this.files || this.value))
            })
        },
        transferComplete: function(b, c) {
            var d = this;
            c && (this.debug && a.Log("$.upload.transferComplete(event, " + c + ")"), a.jsonp(this.options.server + "?" + a.toURI(a.extend({
                getaction: 1,
                fkey: c
            },
            this.options.params)) + "#rnd",
            function(b) {
                d.debug && a.Log("get transfer file info:" + a.JSON.toJSONString(b), 1),
                b.name = d.options.curName || d.options.name || "",
                d.options.callback(b)
            }))
        },
        fileChange: function(b, c) {
            var d = this;
            this.isMobileCompTransf(c,
            function(e) {
                e ? a.browser.oldAndroid ? a.require("jpeg_encoder_basic.js?siteid=" + d.options.params.siteid,
                function(a) {
                    d.mobileCompTransf(b, c)
                }) : d.mobileCompTransf(b, c) : d.commonTransf(b, c)
            })
        },
        isMobileCompTransf: function(b, c) {
            if (a.browser.mobile && (window.URL || window.webkitURL) && document.createElement("canvas")) if (b[0].name.toLowerCase().indexOf("jpg") > -1) c(!0);
            else if (window.FileReader && window.DataView) {
                var d = new FileReader;
                d.onload = function(a) {
                    var b = new DataView(a.target.result);
                    c(255 == b.getUint8(0) && 216 == b.getUint8(1))
                },
                d.readAsArrayBuffer(b[0])
            } else c(!1);
            else c(!1)
        },
        commonTransf: function(b, c) {
            var d, e, f = "uploadfile" == this.options.params.action;
            try {
                d = f ? this.proxy.fileOptions.fileMaxSize: this.proxy.fileOptions.imageMaxSize,
                e = f ? this.proxy.fileOptions.fileExt: this.proxy.fileOptions.imageExt
            } catch(g) {
                d = null,
                e = null
            }
            if ("string" == typeof c) this.debug && a.Log("Name: " + c, 2);
            else for (var h, i = 0; i < c.length; i++) {
                var j, k = c[i];
                if (j = k.name.indexOf(".") > -1 ? k.name.match(/\.[^\.]+$/)[0].replace(".", "").toLowerCase() : "", this.options.maxSize && k.size > this.options.maxSize || d && k.size > d) return void this.options.onError({
                    type: 9,
                    name: k.name,
                    size: k.size,
                    etype: "SIZE",
                    maxSize: this.options.maxSize || d
                });
                if ("*" != this.options.accept && this.options.accept || e) {
                    if (this.options.accept && this.options.accept.indexOf("/*") > -1) {
                        if (h = new RegExp(this.options.accept.replace(/\//, "\\/"), "gi"), !h.test(k.type)) return a.Log("accept:" + this.options.accept + ", type:" + k.type, 2),
                        void this.options.onError({
                            type: 9,
                            name: k.name,
                            size: k.size,
                            etype: "TYPE"
                        })
                    } else {
                        if (this.options.accept && this.options.accept.indexOf(k.type) <= -1) return a.Log("accept:" + this.options.accept + ", type:" + k.type, 2),
                        void this.options.onError({
                            type: 9,
                            name: k.name,
                            size: k.size,
                            etype: "TYPE"
                        });
                        if (e && e.indexOf(j) > -1) continue;
                        if (e && -1 == e.indexOf(j)) return void this.options.onError({
                            type: 9,
                            name: k.name,
                            size: k.size,
                            ext: e,
                            etype: "TYPE"
                        })
                    }
                    this.options.curName = k.name,
                    this.debug && a.Log("Name: " + this.options.curName)
                }
            }
            this.debug && a.Log("$.upload.fileChange()"),
            this.form.attr("action", this.options.server + "?" + a.toURI(a.extend({
                fkey: this.fkey,
                rnd: a.getTime()
            },
            this.options.params))),
            a.browser.mobile && this.options.callback({
                status: "startUpload",
                oldfile: c[0].name
            }),
            this.form.get(0).submit()
        },
        mobileCompTransf: function(b, c) {
            var d = this;
            this.options.callback({
                status: "startCompress",
                oldfile: c[0].name
            });
            new a.ImageOrientation(c[0],
            function(b, e) {
                new a.CompressImg(c[0], {
                    orientation: e
                },
                function(b, e) {
                    d.formData = new FormData,
                    d.formData.append("base64", e),
                    d.formData.append("fname", a.getTime() + ".jpg"),
                    d.options.action = "uploadimage",
                    d.options.siteid = d.options.params.siteid,
                    a.each(d.options,
                    function(a, b) {
                        d.formData.append(a, b)
                    }),
                    d.uploadCallBack = function(b) {
                        "success" == b.status ? (b = b.event.target.responseText, d.options.callback(a.JSON.parseJSON(b))) : "error" == b.status && d.options.callback("error")
                    },
                    d.options.callback({
                        status: "startUpload",
                        oldfile: c[0].name,
                        compress: !0
                    });
                    try {
                        d.proxy.uploadFile(d.options.server, d.formData, d.uploadCallBack)
                    } catch(f) {
                        a.Log("base64 upload" + f.message, 3)
                    }
                })
            })
        },
        base64Transf: function(b) {
            var c = this;
            this.fkey = a.getTime(),
            new a.POST(this.options.server + "?action=uploadimage", a.extend({
                base64: b,
                fname: a.getTime() + ".png",
                fkey: this.fkey,
                rnd: a.getTime()
            },
            this.options.params),
            function(a) {
                c.transferComplete(a, c.fkey)
            })
        }
    },
    a.CompressImg = a.Class.create(), a.CompressImg.prototype = {
        ctx: null,
        canvas: null,
        url: null,
        image: null,
        blob: null,
        compBlob: null,
        dataurl: null,
        resize: {
            width: null,
            height: null
        },
        options: {
            width: null,
            height: null,
            quality: .7
        },
        initialize: function(b, c, d) {
            var e = this;
            this.url = window.URL || window.webkitURL,
            this.canvas = document.createElement("canvas"),
            this.blob = "string" == typeof b ? b: this.url.createObjectURL(b),
            this.options = a.extend(c, this.options),
            this.image = new Image,
            this.image.onerror = function() {
                a.Log("加载图片失败！")
            },
            this.image.onload = function(a) {
                e.getCompImage(),
                d(a, e.dataurl);
                for (var b in e) e.hasOwnProperty(b) && (e[b] = null)
            },
            this.image.crossOrigin = "*",
            this.image.src = e.blob
        },
        getCompImage: function() {
            var b = this;
            switch (this.ctx = this.canvas.getContext("2d"), this.resize = this._getResize(), this.canvas.width = this.resize.width, this.canvas.height = this.resize.height, this.ctx.fillStyle = "#fff", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), b.options.orientation) {
            case 3:
                this.ctx.rotate(180 * Math.PI / 180),
                this.ctx.drawImage(this.image, -this.resize.width, -this.resize.height, this.resize.width, this.resize.height);
                break;
            case 6:
                this.ctx.rotate(90 * Math.PI / 180),
                this.ctx.drawImage(this.image, 0, -this.resize.width, this.resize.height, this.resize.width);
                break;
            case 8:
                this.ctx.rotate(270 * Math.PI / 180),
                this.ctx.drawImage(this.image, -this.resize.height, 0, this.resize.height, this.resize.width);
                break;
            case 2:
                this.ctx.translate(resize.width, 0),
                this.ctx.scale( - 1, 1),
                this.ctx.drawImage(this.image, 0, 0, this.resize.width, this.resize.height);
                break;
            case 4:
                this.ctx.translate(resize.width, 0),
                this.ctx.scale( - 1, 1),
                this.ctx.rotate(180 * Math.PI / 180),
                this.ctx.drawImage(this.image, -this.resize.width, -this.resize.height, this.resize.width, this.resize.height);
                break;
            case 5:
                this.ctx.translate(resize.width, 0),
                this.ctx.scale( - 1, 1),
                this.ctx.rotate(90 * Math.PI / 180),
                this.ctx.drawImage(this.image, 0, -this.resize.width, this.resize.height, this.resize.width);
                break;
            case 7:
                this.ctx.translate(resize.width, 0),
                this.ctx.scale( - 1, 1),
                this.ctx.rotate(270 * Math.PI / 180),
                this.ctx.drawImage(this.image, -this.resize.height, 0, this.resize.height, this.resize.width);
                break;
            default:
                this.ctx.drawImage(this.image, 0, 0, this.resize.width, this.resize.height)
            }
            if (a.browser.oldAndroid) {
                var c = new JPEGEncoder,
                d = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
                this.dataurl = c.encode(d, 100 * this.options.quality)
            } else this.dataurl = this.canvas.toDataURL("image/jpeg", this.options.quality);
            this.url.revokeObjectURL(b.blob)
        },
        _getResize: function() {
            var a = this,
            b = this.image,
            c = this.options.width,
            d = this.options.height,
            e = {
                width: b.width,
                height: b.height
            };
            "5678".indexOf(a.options.orientation) > -1 && (e.width = b.height, e.height = b.width);
            var f = e.width / e.height;
            for (c && d ? f >= c / d ? e.width > c && (e.width = c, e.height = Math.ceil(c / f)) : e.height > d && (e.height = d, e.width = Math.ceil(d * f)) : c ? c < e.width && (e.width = c, e.height = Math.ceil(c / f)) : d && d < e.height && (e.width = Math.ceil(d * f), e.height = d); e.width >= 3264 || e.height >= 2448;) e.width *= .8,
            e.height *= .8;
            return e
        }
    },
    a.ImageOrientation = a.Class.create(), a.ImageOrientation.prototype = {
        initialize: function(b, c) {
            if (!window.FileReader || !window.DataView) return 1;
            var d = this,
            e = new FileReader;
            e.onload = function(b) {
                c(a.Event.fixEvent(b), d._readImageOrientation(b.target.result))
            },
            e.readAsArrayBuffer(b)
        },
        _readImageOrientation: function(a) {
            var b = new DataView(a);
            if (255 != b.getUint8(0) || 216 != b.getUint8(1)) return 1;
            for (var c, d = 2,
            e = a.byteLength; e > d;) {
                if (255 != b.getUint8(d)) return 1;
                if (c = b.getUint8(d + 1), 225 == c) return this._getOrientationFromExif(b, d + 4, b.getUint16(d + 2) - 2);
                d += 2 + b.getUint16(d + 2)
            }
        },
        _getOrientationFromExif: function(a, b) {
            if ("Exif" != this._getStringFromDB(a, b, 4)) return 1;
            var c, d = b + 6;
            if (18761 == a.getUint16(d)) c = !1;
            else {
                if (19789 != a.getUint16(d)) return 1;
                c = !0
            }
            if (42 != a.getUint16(d + 2, !c)) return 1;
            var e = a.getUint32(d + 4, !c);
            return 8 > e ? 1 : this._getOrientationFromTag(a, d, d + e, c)
        },
        _getOrientationFromTag: function(a, b, c, d) {
            var e, f, g, h = a.getUint16(c, !d);
            for (g = 0; h > g; g++) if (e = c + 12 * g + 2, f = a.getUint16(e, !d), 274 == f) return this._getOrientationValue(a, e, b, c, d);
            return 1
        },
        _getOrientationValue: function(a, b, c, d, e) {
            var f, g, h, i = a.getUint16(b + 2, !e),
            j = a.getUint32(b + 4, !e),
            k = a.getUint32(b + 8, !e) + c;
            switch (i) {
            case 3:
                if (1 == j) return a.getUint16(b + 8, !e);
                for (f = j > 2 ? k: b + 8, g = [], h = 0; j > h; h++) g[h] = a.getUint16(f + 2 * h, !e);
                return g
            }
        },
        _getStringFromDB: function(a, b, c) {
            var d = "";
            for (n = b; n < b + c; n++) d += String.fromCharCode(a.getUint8(n));
            return d
        }
    },
    a.DialogChat = new a.Class.create, a.DialogChat.prototype = {
        contains: null,
        background: null,
        iframe: null,
        display: !1,
        selector: "",
        def: {
            close: !1,
            parent: window,
            margin: 10,
            border: 0,
            style: {
                height: "auto"
            },
            resizeFunc: null
        },
        options: null,
        _funcResize: c,
        initialize: function(b, c) {
            var d = this;
            this.options = a.extend({},
            this.def, c),
            this.id = a.randomChar(),
            this.selector = ".dialog-container-" + this.id,
            this._create(),
            this._style(this.options.style),
            this.display = !0,
            this.options.close && (b += '<div class="dialog-button-close" style="' + a.STYLE_NBODY + 'font-size:14px;position:absolute;right:10px;top:10px;width:20px;height:20px;line-height:20px;text-align:center;cursor:pointer;">x</div>'),
            this.container.html(b),
            setTimeout(function() {
                d.container.css({
                    top: Math.max(0, (a(d.options.parent).height() - Math.max(d.container.height(), 200)) / 2) + "px"
                })
            },
            5),
            this._funcResize = function() {
                d.resize()
            },
            this.options.parent == window && a(window).addEvent("resize", this._funcResize),
            this.container.find(".dialog-button-close").click(function() {
                d.close()
            })
        },
        close: function() {
            var b = this;
            this.options.parent == window && a(window).removeEvent("resize", this._funcResize),
            a(this.selector).hide(function() {
                a(".dialog-iframe-" + b.id + ",.dialog-background-" + b.id).remove(),
                a(b.selector).remove(),
                b.display = !1
            })
        },
        resize: function(b, c) {
            b = b || a(this.options.parent).width(),
            c = c || a(this.options.parent).height(),
            a(".dialog-iframe-" + this.id + ",.dialog-background-" + this.id).css({
                width: b + "px",
                height: c + "px"
            });
            var d = "auto" === this.options.style.height ? "auto": c - 2 * this.options.margin - 2 * this.options.border;
            this.container.css({
                width: b - 2 * this.options.margin - 2 * this.options.border + "px",
                height: "auto" == d ? "auto": d + "px",
                "max-width": b + "px",
                "max-height": c - 40 + "px"
            }),
            this.container.css("top", Math.max(0, (c - Math.max("auto" == d ? this.container.height() : d, 200)) / 2) + "px"),
            this.options.resizeFunc && this.options.resizeFunc.call()
        },
        _create: function() {
            var b = this.options.parent == window ? document.body: this.options.parent,
            c = this.options.parent == window ? "fixed": "absolute";
            this.iframe = a({
                tag: "IFRAME",
                className: "dialog-iframe-" + this.id,
                style: a.STYLE_NBODY + "position:" + c + ";display:none;left:0;top:0;margin:0;padding:0;border:0;width:100%;z-index:8888;"
            }).appendTo(b),
            this.background = a({
                tag: "div",
                className: "dialog-background-" + this.id,
                style: a.STYLE_NBODY + "position:" + c + ";left:0;top:0;margin:0;padding:0;border:0;width:100%;background-color:#000;z-index:8888;"
            }).appendTo(b);
            var d = a.browser.mobile ? 9e3: 2147483647;
            this.container = a({
                tag: "div",
                className: "dialog-container-" + this.id,
                style: a.STYLE_BODY + "position:" + c + ";left:0;top:0;margin:0;min-height:" + (this.options.minHeight ? this.options.minHeight: 200) + "px;border-radius:0px;z-index:" + d + ";background:#fff;overflow-x:hidden;overflow-y:auto;"
            }).appendTo(b)
        },
        _style: function(b) {
            var c = a(this.options.parent).width(),
            d = a(this.options.parent).height();
            a(".dialog-iframe-" + this.id + ",.dialog-background-" + this.id).css({
                width: c + "px",
                height: a(this.options.parent).height() + "px"
            }),
            this.background.css({
                opacity: .6
            });
            var e = (this.options.margin + "").split(" ");
            1 == e.length && e.push(this.options.margin),
            this.container.css(b).css({
                left: e[0] + "px",
                top: e[1] + "px",
                width: c - 2 * e[0] - 2 * this.options.border + "px",
                height: "auto" === this.options.style.height ? "auto": d - 2 * e[1] - 2 * this.options.border + "px"
            })
        }
    },
    a.Toast = new a.Class.create, a.Toast.prototype = {
        id: null,
        container: null,
        toast: null,
        options: {},
        initialize: function(b, c) {
            var d = this;
            this.id = a.randomChar(),
            this.options = a.extend(this.options, c),
            this.toastOpacity = a({
                tag: "div",
                className: "toast-opacity-" + this.id,
                style: a.STYLE_BODY + "position:relative;z-index:9000;width:" + this.options.width + "px;height:" + this.options.height + "px;margin-left:" + (a(window).width() - this.options.width) / 2 + "px;margin-top:" + (a(window).scrollTop() + (a(window).height() - this.options.height - 100) / 2) + "px;background-color:#000;opacity:0.5;border-radius:5px;font-size:16px;color:white;text-align:center;line-height:" + this.options.height + "px"
            }),
            this.toast = a({
                tag: "div",
                className: "toast-" + this.id,
                style: a.STYLE_BODY + "position:relative;z-index:10000;width:" + this.options.width + "px;height:" + this.options.height + "px;margin-left:" + (a(window).width() - this.options.width) / 2 + "px;margin-top:" + -this.options.height + "px;background-color:none;border-radius:5px;font-size:16px;color:white;text-align:center;line-height:" + this.options.height + "px"
            }),
            this.toast.html(b),
            this._create(),
            this._funcResize = function() {
                d.resize()
            },
            this._funRemove = function() {
                d.remove()
            },
            a(window).addEvent("resize", this._funcResize)
        },
        _create: function() {
            this.toastOpacity.appendTo(document.body),
            this.toast.appendTo(document.body)
        },
        change: function(b) {
            a(".toast-" + this.id).html(b)
        },
        resize: function() {
            var b = a(window).width(),
            c = a(window).height(),
            d = (b - this.options.width) / 2 > 0 ? (b - this.options.width) / 2 : 0,
            e = (c - this.options.height - 100) / 2 > 0 ? a(window).scrollTop() + (c - this.options.height - 100) / 2 : a(window).scrollTop();
            a(".toast-opacity-" + this.id).css({
                "margin-left": d + "px",
                "margin-top": e + "px",
                "max-width": b + "px",
                "max-height": c + "px"
            }),
            a(".toast-" + this.id).css({
                "margin-left": d + "px",
                "margin-top": -this.options.height + "px",
                "max-width": b + "px",
                "max-height": c + "px"
            })
        },
        remove: function() {
            a(".toast-opacity-" + this.id).remove(),
            a(".toast-" + this.id).remove()
        }
    },
    a.GifTimer = a.Class.create(), a.GifTimer.prototype = {
        id: null,
        inter: null,
        timeout: null,
        options: {
            inTimeFunc: null,
            outTimeFunc: null,
            doTime: null,
            allTime: null
        },
        initialize: function(b) {
            var c = this;
            this.options = a.extend(this.options, b),
            this.inter = setInterval(function() {
                c.options.inTimeFunc.call(c)
            },
            this.options.doTime),
            this.timeout = setTimeout(function() {
                clearInterval(c.inter),
                c.options.outTimeFunc.call(c)
            },
            this.options.allTime)
        },
        remove: function() {
            a.Log("giftimer remove"),
            clearInterval(this.inter),
            clearTimeout(this.timeout),
            this.inter = null,
            this.timeout = null
        }
    },
    a.Music = a.Class.create(), a.Music.prototype = {
        msgid: null,
        url: null,
        type: null,
        duration: null,
        audioFlag: !0,
        musicEl: null,
        viewCallback: null,
        eventCallback: null,
        container: null,
        debugStr: "[nTalk Music]: ",
        initialize: function(a, b, c, d, e, f, g) {
            this.msgid = a,
            this.url = b,
            this.type = c,
            this.duration = d,
            this.viewCallback = e,
            this.eventCallback = f,
            this.container = g,
            this.audioFlag = this.canPlayAudioMP3(),
            this.audioFlag ? this.createAudioPlayer() : this.createSwfPlayer(),
            this.viewCallback.call(this, "init"),
            this.eventCallback.call(this, "init")
        },
        createAudioPlayer: function() {
            var b = this;
            this.musicEl = document.createElement("audio"),
            this.musicEl.src = this.url,
            this.musicEl.type = this.type,
            this.musicEl.stop = function() {
                this.pause(),
                this.currentTime = 0
            },
            a.Event.addEvent(this.musicEl, "ended",
            function() {
                a.Log(b.debugStr + " trigger ended stop mp3"),
                b.viewCallback.call(b, "stop")
            }),
            this.musicEl.getPaused = function() {
                return this.paused
            }
        },
        createSwfPlayer: function() {
            var b = this,
            c = "ntalker_swf_mp3Player_container_" + this.msgid,
            d = "ntalker_swf_mp3player_" + this.msgid,
            e = a.sourceURI + "fs/music.swf",
            f = a.flashHtml(d, e, "id=" + d);
            this.musicEl = document.createElement("div"),
            this.musicEl.innerHTML += f,
            this.musicEl.id = c,
            this.container.append(this.musicEl.outerHTML);
            var g = a.browser.msie && a.browser.ieversion <= 7 ? window[d] : document[d];
            setTimeout(function() {
                g.emit("load", b.url),
                g.emit("stop"),
                b.musicEl.play = function() {
                    g.emit("play")
                },
                b.musicEl.stop = function() {
                    g.emit("stop")
                },
                b.musicEl.getPaused = function() {
                    return 0 === g.getPaused()
                }
            },
            1e3)
        },
        emit: function() {
            this.musicEl.getPaused() ? this.play() : this.stop()
        },
        play: function() {
            a.Log(this.debugStr + "play mp3"),
            this.musicEl.play(),
            this.viewCallback.call(this, "play")
        },
        stop: function() {
            a.Log(this.debugStr + "stop mp3"),
            this.musicEl.stop(),
            this.viewCallback.call(this, "stop")
        },
        canPlayAudioMP3: function() {
            try {
                var a = document.createElement("audio");
                return ! (!a.canPlayType || !a.canPlayType("audio/mpeg;").replace(/no/, ""))
            } catch(b) {
                return ! 1
            }
        }
    },
    a.paste = a.Class.create(), void(a.paste.prototype = {
        data: null,
        callback: null,
        debugStr: "[nTalk pasteDate]: ",
        initialize: function(a, b) {
            this.data = a.clipboardData || window.clipboardData,
            this.callback = b
        },
        getImgBase64Str: function() {
            var b = this,
            c = this.data;
            if (!c) return null;
            if ("function" == typeof webInfoChanged) this.callback(c.getData("image/x-vnd.adobe.air.bitmap").toDataURL());
            else if (a.browser.chrome || a.browser.opera) {
                var d, e, f = c.items;
                if (f) {
                    d = f[0],
                    e = c.types || [];
                    for (var g = 0,
                    h = e.length; h > g; g++) if ("Files" === e[g]) {
                        d = f[g];
                        break
                    }
                    if (d && "file" === d.kind && d.type.match(/^image\//i)) {
                        var i = d.getAsFile(),
                        j = new FileReader;
                        j.onload = function(a) {
                            b.callback(a.target.result)
                        },
                        j.readAsDataURL(i)
                    } else this.callback()
                }
            } else this.callback()
        }
    }))
} (nTalk);
/* @file base.js
 * @date 2016.05.25 14:25:00 
 */
!
function(a, b) {
    var c = ["kf_9933", "kf_9949", "kf_9954"],
    d = "nt-flash-div",
    e = "ntkf_flash_ntid",
    f = 2,
    g = {
        trailserver: "",
        presenceserver: "",
        presencegoserver: "",
        crmcenter: "",
        mcenter: "",
        coopserver: "",
        roboturl: "",
        t2dstatus: "",
        isnoim: 0,
        notrail: 0,
        preload: 2e3,
        sessioncarry: "1",
        enable_entrance: "0",
        enable_invite: "0",
        close_tchat_flash: "1",
        close_im_flash: "0",
        robot: "0",
        siteid: ""
    },
    h = function() {},
    i = /[a-z]{2}\_\d+/gi;
    if (a.baseURI && !a.base) {
        if (a.extend({
            CON_LOAD_MODE_NID: 1,
            CON_CUSTOMER_ID: 0,
            CON_GROUP_ID: 1,
            CON_VISITOR_ID: 2,
            CON_SHORT_ID: 3
        }), a.base = {
            _startBase: !1,
            _identityIDReady: !1,
            _connectTimeID: null,
            chatLoading: !1,
            clearChatCache: !1,
            timeOut: 2e3,
            entityList: {
                "<": "&lt;",
                ">": "&gt;"
            },
            fieldList: ["shortid", "uid", "uname", "isvip", "userlevel", "itemid", "itemparam", "erpparam", "exparams"],
            CON_LOCAL_FIX: "NOWAIT_",
            call_trail_status: !1,
            userIdFix: "",
            _reload_trail: !1,
            _get_page_data: null,
            config: null,
            _islogin: !0,
            start: function() {
                var b = this;
                return a.server ? (a.Log("nTalk.base.start()", 1), a.cookie.enable() || a.Log("Does not support cookies!", 3), a.global.pageinchat = !0, a.global.statictis = f, a.source = a.url, this._identityIDReady = !1, void(this._startBase || (this.pageid = a.getTime(), this._startBase = !0, this._loadFlashServer(), a.isEmptyObject(CON_RULE) ? (this.getPageData(), this._loadIdentityID(function(c, d) {
                    a.Log("PCID:" + d, 1),
                    b.startOtherMode(c, d)
                })) : this.startData(function() {
                    this._loadIdentityID(function(c, d) {
                        a.Log("PCID:" + d, 1),
                        b.startOtherMode(c, d)
                    })
                })))) : void a.Log("Loaded $server mode failed", 3)
            },
            chanageUserID: function() {
                return "undefined" == typeof NTKF_PARAM ? !1 : NTKF_PARAM.uid && this.toLongID(NTKF_PARAM.uid) && this.toLongID(NTKF_PARAM.uid) != a.user.id ? !(a.inArray(a.global.siteid, c) > -1 && a.global.siteid + "_ISME9754_" + NTKF_PARAM.uname == a.user.id) : !1
            },
            overloadedData: function(b, c) {
                a.isFunction(b) && (c = b, b = null),
                a.Log("nTalk.base.overloadedData()"),
                a.isEmptyObject(CON_RULE) ? (this.getPageData(b), a.user.id = a.global.uid || a.user.id, a.user.name = a.global.uname || "", a.cache.set("uid", a.user.id), a.isFunction(c) && c(), a.base.startTrail(a.base._islogin, !0)) : this.startData(function() {
                    a.user.id = a.global.uid || a.user.id,
                    a.user.name = a.global.uname || "",
                    a.cache.set("uid", a.user.id),
                    a.isFunction(c) && c(),
                    a.base.startTrail(a.base._islogin, !0)
                },
                b)
            },
            startData: function(b, c) {
                var d = this;
                a.Log("nTalk.base.startData()"),
                a.require({
                    data: "data.js" + a.baseExt
                },
                function(e) {
                    if (!e) return void a.Log("Loaded $data mode failed", 3);
                    var f = a.data.start(CON_RULE);
                    d._get_page_data = a.extend({},
                    f, c),
                    d.getPageData(d._get_page_data),
                    b.call(d)
                })
            },
            _execMode: function() {
                this._startBase = !0,
                this._loadFlashServer()
            },
            startTrail: function(b, c) {
                a.require({
                    trail: "trail.js" + a.baseExt
                },
                function(d) {
                    return d ? void a.trail.start(b, c) : void a.Log("Loaded $trail mode failed", 3)
                })
            },
            startIM: function() {
                a.im && a.im.connect || a.require({
                    im: "im.js" + a.baseExt
                },
                function(b) {
                    return b ? void a.im.start() : void a.Log("Loaded $im mode failed", 3)
                })
            },
            startLCrm: function(b, c, d) {
                var e = b && a.isArray(b) ? b: [b];
                a.require({
                    lcrm: "lcrm.js" + a.baseExt
                },
                function(b) {
                    a.each(e,
                    function(b, e) {
                        a.Log("start lcrm mode", 1),
                        a.lcrm.start(e, c, d)
                    })
                })
            },
            startChat: function(b, c, d, e, f, g, h, i) {
                var j;
                return b = b || "",
                c = c || "",
                d = d || "",
                e = e || "",
                f = f || "",
                a.im && a.im.hideTips(),
                a.base.chatLoading === !0 ? void a.Log("loading......", 2) : (a.Log("$.base.startChat(" + a.JSON.toJSONString(arguments) + ")", 1), a.base.showLoading(), j = {
                    lang: (a.extParmas.lan || "zh_cn") + ".js" + a.baseExt
                },
                a.browser.supportMqtt && a.server.tchatmqttserver && 1 == a.server.tchatConnectType ? (j.MQTT = "mqtt31.js" + a.baseExt, j.Connection = "mqtt.chat.js" + a.baseExt) : a.flash.support && a.server.tchatmqttserver && 1 == a.server.tchatConnectType ? (j.MQTT = "flashsock.js" + a.baseExt, j.Connection = "mqtt.chat.js" + a.baseExt) : j.TChat = "comet.chat.js" + a.baseExt, a.global.themes ? (j.chatManage = "chat.js" + a.baseExt, j.chatManageView = a.global.themes + "/chat.view.in.js" + a.baseExt, a.themesURI = a.global.themes + "/images/") : j.chatManage = "chat.in.js" + a.baseExt, j.Window = "nt2.js" + a.baseExt, 1 == a.server.robot && (j.Robot = "robot.js" + a.baseExt), void a.require(j,
                function() {
                    return a.base.hiddenLoading(),
                    a.chatManage ? (a.Log("load $chatManage mode complete"), void(a.chatManage.open(b, c, d, e, f, g, h, i) && a.cache.set("opd", 1))) : void a.Log("Load $chatManage mode failed", 3)
                }))
            },
            startEntrance: function() {
                var b = a.server.entranceConfig[a.global.settingid] || "";
                a.Log("$.base.startEntrance()"),
                b && a.server.entranceConfig && !a.isEmptyObject(a.server.entranceConfig) && a.require({
                    entrance: b + a.baseExt
                },
                function(b) {
                    return b ? ("1" == a.server.enable_entrance && a.options.entrance && a.entrance.start("entrance"), void("1" == a.server.enable_entrance && a.options.invite && a.entrance.start("invite"))) : void a.Log("Load $.entrance mode failed", 3)
                })
            },
            showLoading: function() {
                return a.base.chatLoading = !0,
                a.base.startTime = a.getTime(),
                this.loadingElement && this.loadingElement.length ? this.loadingElement.display(1) : this.loadingElement = a({
                    id: "ntalk-chat-loading",
                    style: a.STYLE_NBODY + "width:100%;height:33px;position:fixed:right:0;bottom:0;z-index:9999;"
                }).appendTo(!0).fixed({
                    right: 0,
                    bottom: 0
                }).html('<div style="' + a.STYLE_BODY + "margin:0 auto;width:99px;height:33px;background:url(" + a.imageloading + ') no-repeat 0 0;"></div>'),
                this.loadingElement
            },
            hiddenLoading: function() {
                this.loadingElement.display(),
                a.base.endTime = a.getTime(),
                a.base.chatLoading = !1,
                a.Log("$.base.showLoading-hiddenLoading execute time:" + (a.base.endTime - a.base.startTime) + " ms", 1)
            },
            toLongID: function(b) {
                var c = this.checkID(b);
                return c === a.CON_SHORT_ID ? a.global.siteid + "_ISME9754_" + b: c == a.CON_VISITOR_ID ? b: ""
            },
            toShortID: function(b) {
                var c = this.checkID(b);
                return c === a.CON_SHORT_ID ? b: c === a.CON_VISITOR_ID ? b.replace(this.userIdFix, "") : ""
            },
            checkID: function(b) {
                return b = b ? b.toString() : "",
                b && "0" !== b ? b.indexOf("_ISME9754_T2D") > -1 ? a.CON_CUSTOMER_ID: b.indexOf("_ISME9754_GT2D") > -1 ? a.CON_GROUP_ID: b.indexOf(a.global.siteid + "_ISME9754_") > -1 ? a.CON_VISITOR_ID: a.CON_SHORT_ID: !1
            },
            startOtherMode: function(b, c) {
                var d, e, f = a.cache.get("uid") || "";
                clearTimeout(this._connectTimeID),
                this._connectTimeID = null,
                this._identityIDReady = !0,
                a.Log("cache uid:" + f + ", site uid:" + b + ", return uid:" + b, 1),
                f ? this._islogin = f != b: this._islogin = !0,
                a.global.pcid = c,
                a.user.id = b,
                a.isDefined(a.global.uname) && (a.user.name = a.global.uname),
                a.cache.set("uid", b),
                a.cookie.set(a.CON_PCID_KEY, c, 63072e6),
                0 === a.server.notrail ? this.startTrail(this._islogin, !1) : a.Log("no load trail"),
                !a.server.entranceConfig || "1" != a.server.enable_entrance && "1" != a.server.enable_invite || this.startEntrance(),
                !a.server.isnoim || 3 == a.server.isnoim || 2 == a.server.isnoim && "1" == a.cache.get("opd") ? (a.Log("nTalk.base.startIM()::" + a.im, 1), this.startIM()) : a.Log("no load im, isnoim:" + a.server.isnoim + ", opd:" + a.cache.get("opd"), 1),
                1 == a.browser.mobile && a.addMobileStyle(),
                e = {
                    settingid: a.cache.get("carry_sid"),
                    destid: a.cache.get("carry_did")
                },
                "0" != a.server.sessioncarry && e.settingid && !a.browser.mobile ? (a.Log("sessioncarry:" + a.JSON.toJSONString(e)), a.cache.set("carry_sid", ""), a.cache.set("carry_did", ""), e.settingid && (a.browser.mobile || !a.global.pageinchat ? (d = {
                    single: -1
                },
                a.im_openOutPageChat(e.settingid, "", e.destid, d, "")) : (d = {
                    autoconnect: !0,
                    single: -1
                },
                a.im_openInPageChat(e.settingid, "", e.destid, d, "")))) : a.server.preload > 0 && !a.global.themes && this.preloadChat()
            },
            preloadChat: function() {
                var b;
                a.Log("$.base.preloadChat()", 1),
                setTimeout(function() {
                    a.base.chatLoading !== !0 && (b = {
                        lang: (a.extParmas.lan || "zh_cn") + ".js" + a.baseExt
                    },
                    a.global.themes ? (b.chatManage = "chat.js" + a.baseExt, b.chatManageView = a.global.themes + "/chat.view.in.js" + a.baseExt, a.themesURI = a.global.themes + "/images/") : b.chatManage = "chat.in.js" + a.baseExt, b.Window = "nt2.js" + a.baseExt, a.browser.supportMqtt && a.server.tchatmqttserver && 1 == a.server.tchatConnectType ? (b.MQTT = "mqtt31.js" + a.baseExt, b.Connection = "mqtt.chat.js" + a.baseExt) : a.flash.support && 1 == a.server.tchatConnectType ? (b.MQTT = "flashsock.js" + a.baseExt, b.Connection = "mqtt.chat.js" + a.baseExt) : b.TChat = "comet.chat.js" + a.baseExt, 1 == a.server.robot && (b.Robot = "robot.js" + a.baseExt), a.require(b,
                    function(b, c) {
                        c ? a.Log("preload $chatManage mode complete") : a.Log("preload $chatManage mode failed", 3)
                    }))
                },
                a.server.preload)
            },
            getPageData: function(b) {
                var d;
                return a.Log("nTalk.base.getPageData()"),
                d = a.extend({},
                "undefined" != typeof NTKF_PARAM ? NTKF_PARAM: {},
                b),
                a.whereGetTo(a.global, d, ["siteid", "sellerid", "settingid", "uid", "uname", "exparams", "themes", "isvip", "userlevel", "itemid", "itemparam", "orderid", "orderprice", "erpparam", "ntalkerparam", "pagetype", "title", "lang", "iconid"], [null, null, null, "shortid", "uname", "exparams", "themes"]),
                a.global.siteid = (a.global.siteid + "").replace(/^\s+|\s+$/, ""),
                a.global.settingid = (a.global.settingid + "").replace(/^\s+|\s+$/, ""),
                a.global.siteid = a.global.siteid && i.test(a.global.siteid) ? a.global.siteid: a.extParmas.siteid || "",
                "" === a.global.siteid ? !1 : (a.global.pagetype = a.params.source || "", a.global.sellerid = a.isArray(a.global.sellerid) ? a.global.sellerid: a.global.sellerid.toString().indexOf(",") > -1 ? a.global.sellerid.split(",") : a.global.sellerid ? [a.global.sellerid] : [], a.global.orderid = a.isArray(a.global.orderid) ? a.global.orderid: a.global.orderid.toString().indexOf(",") > -1 ? a.global.orderid.split(",") : a.global.orderid ? [a.global.orderid] : [], a.global.orderprice = a.isArray(a.global.orderprice) ? a.global.orderprice: a.global.orderprice.toString().indexOf(",") > -1 ? a.global.orderprice.split(",") : a.global.orderprice ? [a.global.orderprice] : [], a.inArray(a.global.siteid, c) > -1 && (a.global.shortid = a.global.uname || ""), !a.global.itemid && a.global.ntalkerparam && (a.isObject(a.global.ntalkerparam) || a.Log("ntalkerparam param abnormal", 2), a.global.ntalkerparam.item && (a.global.itemid = a.global.ntalkerparam.item.id)), /number|string/i.test(typeof a.global.shortid) && /string/i.test(typeof a.global.uname) || (a.Log("userid or username type error"), a.global.shortid = "", a.global.uname = ""), a.referrer = a.enCut(a.referrer, 255), a.global.settingid = a.global.settingid && /[a-z]{2}\_\d+\_\d+/gi.test(a.global.settingid) ? a.global.settingid: "", a.global.iconid = a.isNumeric(a.global.iconid) ? a.global.iconid: 0, a.global.title = a.enCut(a.title, 255), a.global.shortid = a.global.shortid && "0" != a.global.shortid ? a.enCut(a.global.shortid, 64 - a.enLength(a.global.siteid) - 10) : "", a.global.uname = !a.global.shortid || "0" == a.global.shortid || /^(undefined|null|0)$/gi.test(a.global.uname) ? "": a.global.uname ? a.enCut(a.global.uname, 32) : a.enCut(a.global.shortid, 32), a.global.uid = this.toLongID(a.global.shortid), a.global.isvip = a.isNumeric(a.global.isvip) ? a.global.isvip: a.isNumeric(a.global.userlevel) ? a.global.userlevel: 0, a.global.userlevel = a.isNumeric(a.global.userlevel) ? a.global.userlevel: 0, a.inArray(a.global.siteid, c) > -1 && (a.global.shortid = a.global.uname || ""), a.global = this.filterJSONChar(a.global, ""), a.Log("global: " + a.JSON.toJSONString(a.global), 1), a.global)
            },
            _filterChar: function(b, c) {
                var d, e, f = [];
                c && a.each(this.entityList,
                function(a, c) {
                    try {
                        d = new RegExp(a, "gi"),
                        b = b.replace(d, c)
                    } catch(e) {}
                });
                for (var g = 0,
                h = b.length; h > g; g++) try {
                    e = encodeURIComponent(b.charAt(g)),
                    f.push(b.charAt(g))
                } catch(i) {
                    try {
                        e = encodeURIComponent(b.charAt(g) + b.charAt(g + 1)),
                        f.push((f.length ? " ": "") + e.replace(/%/gi, "") + (g + 2 >= h ? "": " ")),
                        ++g
                    } catch(i) {
                        f.push(b.charAt(g))
                    }
                }
                return f.join("")
            },
            filterJSONChar: function(b, c) {
                var d, e = this;
                if (a.isObject(b)) d = {},
                a.each(b,
                function(a, b) {
                    d[a] = e.filterJSONChar(b, a)
                });
                else if (a.isArray(b)) {
                    d = [];
                    for (var f = 0; f < b.length; f++) d[f] = this.filterJSONChar(b[f], f)
                } else d = "string" == typeof b ? this._filterChar(b, -1 !== a.inArray(c, this.fieldList)) : b;
                return d
            },
            _loadIdentityID: function(b) {
                var c, d, e = this,
                f = "";
                "undefined" != typeof ntalker && ntalker.getIdentityID && (a.Log("get sdk pcid"), f = ntalker.getIdentityID()),
                a.Log("ntalker type : " + typeof ntalker),
                "" === f && (f = a.cookie.get(a.CON_PCID_KEY)),
                a.global.trailid = a.cache.get("tid"),
                this.userIdFix = a.global.siteid + "_ISME9754_",
                a.global.trailid && (d = Math.round((a.getTime() - +a.global.trailid.toString().substr(0, 13)) / 36e5), d >= 4 && (a.global.trailid = "")),
                (!a.global.trailid || a.url.indexOf("livecrmtest") > -1) && (a.global.trailid = a.getTime(2), a.base.clearChatCache = !0, a.flashData && a.flashData.clearAll()),
                f && f.length > 10 ? (c = a.global.uid && a.global.uid.indexOf(a.global.siteid) > -1 ? a.global.uid: this.userIdFix + f.substr(0, 21), a.Log("load PCID:" + f + ", uid:" + c), b.call(this, c, f)) : a.flash.support && !a.browser.mobile ? (this._createNTID({
                    u: a.global.uid,
                    siteid: a.global.siteid,
                    loadnid: a.CON_LOAD_MODE_NID
                }), f = this._createScriptPCID(!0), a.Log("create flash PCID, tmp pcid:" + f), c = a.global.uid || this.userIdFix + f.substr(0, 21), a.global.pcid = f, a.user.id = c, this._connectTimeID = setTimeout(function() {
                    a.global.connect = a.CON_CONNECT_COMET,
                    a.Log("timeout:" + e.timeOut + " no create pcid", 2),
                    b.call(e, c, f)
                },
                this.timeOut)) : a.cookie.enable() ? (f = this._createScriptPCID(!1), a.Log("create script PCID"), c = a.global.uid || this.userIdFix + f.substr(0, 21), b.call(this, c, f)) : a.require({
                    Fingerprint2: "fingerprint2.js" + a.baseExt
                },
                function(d) {
                    return a.Fingerprint2 ? (fingerprint2 = new a.Fingerprint2, void fingerprint2.get(function(d) {
                        f = "guest-Fin" + d,
                        c = a.global.uid || e.userIdFix + f.substr(20, 41),
                        b(c, f)
                    })) : void a.Log("load Fingerprint2 failure")
                })
            },
            _createNTID: function(b) {
                var c = a("#" + d),
                f = a.flashHtml(e, a.sourceURI + "fs/NTID.swf?" + a.version.ntid, b);
                c.length || (c = a(document.body).insert('<div id="' + d + '" style="position: absolute; z-index: 9996; top: -200px;"></div>')),
                c.insert(f)
            },
            _createScriptPCID: function(b) {
                return "guest" + [b ? "TEMP" + a.randomChar(4) : a.randomChar(8), a.randomChar(4), a.randomChar(4), a.randomChar(4), a.getTime().toString(16).toUpperCase().substr( - 8) + a.randomChar(4)].join("-")
            },
            _loadFlashServer: function() {
                a.Log("start load flashserver."),
                a.require({
                    flashserver: a.server.flashserver + "/func/getflashserver.php?" + a.toURI({
                        resulttype: 1,
                        siteid: a.global.siteid,
                        callbackname: "nTalk._callFlashServer"
                    }) + "#rnd"
                },
                function(b) {
                    b = a.extend({},
                    g, b),
                    a.server = a.protocolFilter(a.extend(a.server, b))
                })
            }
        },
        a.extend({
            _callFlashServer: function(b, c) {
                a.flashserver = b,
                a.server = a.protocolFilter(a.extend(a.server, a.flashserver)),
                a.Log("$flashserver loading is complete. resultType:" + c)
            },
            fIM_presenceFlashReady: function(b, c) {
                return setTimeout(function() {
                    a.base._identityIDReady ? (a.Log("$.fIM_presenceFlashReady()"), a.Event.fireEvent(document, "focus") || a.Event.fireEvent(document, "click"), a.im && a.im.connect && a.im.connect.stopSwitchConnect()) : (a.Log(">RETURN flash PCID, uid:" + b + ", pcid:" + c, 1), b && c && a.base.startOtherMode(b, c))
                },
                0),
                !0
            },
            isJsReady: function() {
                return ! 0
            },
            _createMobileIframeWindow: function(b) {
                var c, d = a(".ntalk-mobile-iframe-window"),
                e = a("IFRAME[name=" + b + "]");
                return d.length ? {
                    created: !1,
                    element: d
                }: (d = a({
                    className: "ntalk-mobile-iframe-window",
                    "data-status": "visible",
                    style: a.STYLE_BODY + "background:#fff;width:100% !important;height:100% !important;position:fixed;left:0;top:0px;-webkit-overflow-scrolling: touch;overflow-y:scroll"
                }).appendTo(!0), e = a({
                    tag: "IFRAME",
                    name: b,
                    style: a.STYLE_BODY + "width:100% !important;height:100% !important;display:block !important;",
                    src: "about:blank"
                }).appendTo(".ntalk-mobile-iframe-window"), a(window).bind("resize",
                function() {
                    a(e).css({
                        width: "100%",
                        height: a(window).height() + "px"
                    }),
                    "hidden" == d.attr("data-status") ? d.css("top", a(window).height() + "px") : d.css("top", "0px")
                }), c = e[0].contentWindow, a.listenerMessage(function(b) {
                    switch (a.Log("listenerMessage:" + b), b) {
                    case "hideMobileIframeWindow":
                        a._hideMobileIframeWindow(d, !1);
                        break;
                    case "closeMobileIframeWindow":
                        a._hideMobileIframeWindow(d, !0)
                    }
                    if (b && b.indexOf("destInfo") > -1 && "function" == typeof im_destUserInfo && 3 == b.split(",").length) {
                        var c = b.split(",")[1],
                        e = b.split(",")[2];
                        im_destUserInfo({
                            id: c,
                            name: e
                        })
                    }
                }), {
                    created: !0,
                    element: d
                })
            },
            _showMobileIframeWindow: function(b) {
                nTalk.isObject(b) && b.talkVersion && (a("html").addClass("full-html"), a("body").addClass("full-body"), b.addClass("full-iframe"), b.css("z-index", "999999999"))
            },
            _hideMobileIframeWindow: function(b, c) {
                return nTalk.isObject(b) && b.talkVersion ? (a("html").removeClass("full-html"), a("body").removeClass("full-body"), b.removeClass("full-iframe"), b.css({
                    "z-index": -1,
                    display: "none"
                }), void(c && (b.remove(), a.listenerFunctions = []))) : b
            },
            addMobileStyle: function() {
                var a = [".full-html,.full-body{", "width: 100% !important;", "height: 100% !important;", "margin: 0 !important;", "overflow: hidden !important;", "}", ".full-body *{", "display: none !important;", "}", ".full-iframe {", "display: block !important;", "}"].join(""),
                b = document.head || document.getElementsByTagName("head")[0],
                c = document.createElement("style");
                c.type = "text/css",
                c.styleSheet ? c.styleSheet.cssText = a: c.appendChild(document.createTextNode(a)),
                b.appendChild(c)
            }
        }), a.extend({
            im_openInPageChat: function(b, c, d, e, f) {
                var g, h, i, j;
                if (!a.base._startBase) return a.base.start(),
                void
                function() {
                    i = arguments,
                    a.base._startBase ? a.im_openInPageChat(b, c, d, e, f) : setTimeout(function() {
                        i.callee()
                    },
                    50)
                } ();
                if (a.base.chanageUserID()) return void a.base.overloadedData(function() {
                    a.im_openInPageChat(b, c, d, e, f)
                });
                if (a.invite && a.invite._close(), a.Log("nTalk.im_openInPageChat()", 1), b = b || a.global.settingid || "", g = a.global.settingid ? a.global.settingid.split("_").splice(0, 2).join("_") : "", h = b ? b.split("_").splice(0, 2).join("_") : "", j = a.global.sellerid && a.global.sellerid.length ? a.global.sellerid[0] : "", e = a.extend({},
                e), c || (h && ("" === h || h != j && h != g) ? (c = "", f = "") : (c = a.global.itemid, f = a.global.itemparam)), j = h != a.global.siteid ? h: "", a.Log("settingId:" + b + ", itemId:" + c + ", itemparam:" + f), a.browser.mobile || a.global.pageinchat !== !0) return this.im_openOutPageChat(b, c, d, e, f);
                2 != a.server.notrail || a.base.call_trail_status || (a.base.call_trail_status = !0, a.base.startTrail());
                var k = e && e.single ? e.single: "",
                l = e && e.manual ? 1 : 0,
                m = e && a.isDefined(e.autoconnect) ? e.autoconnect: !1;
                this.base.startChat(b, d, c, f, j, m, k, l)
            },
            im_openOutPageChat: function(b, c, d, e, f) {
                var g, h, i, j;
                if (!a.base._startBase) return a.base.start(),
                void
                function() {
                    i = arguments,
                    a.base._startBase ? a.im_openInPageChat(b, c, d, e, f) : setTimeout(function() {
                        i.callee()
                    },
                    50)
                } ();
                if (a.base.chanageUserID()) return void a.base.overloadedData(function() {
                    a.im_openInPageChat(b, c, d, e, f)
                });
                a.Log("nTalk.im_openOutPageChat()", 1),
                b = b || a.global.settingid || "",
                g = a.global.settingid ? a.global.settingid.split("_").splice(0, 2).join("_") : "",
                h = b ? b.split("_").splice(0, 2).join("_") : "",
                j = a.global.sellerid && a.global.sellerid.length ? a.global.sellerid[0] : "",
                e = a.extend({},
                e),
                c || (h && ("" === h || h != j && h != g) ? (c = "", f = "") : (c = a.global.itemid, f = a.global.itemparam)),
                j = h != a.global.siteid ? h: "",
                a.Log("settingId:" + b + ", itemId:" + c + ", itemparam:" + f);
                var k, l = a.browser.mobile ? "_self": "_blank",
                m = e && e.single ? e.single: "",
                n = (e && e.manual ? 1 : 0, {
                    v: a.version.script,
                    siteid: a.global.siteid,
                    sellerid: j,
                    settingid: b,
                    baseuri: a.baseURI,
                    mobile: a.browser.mobile ? 1 : 0,
                    lan: a.extParmas.lan || "",
                    iframechat: e.iframechat || "0",
                    header: a.isDefined(e.header) ? e.header: "1",
                    rnd: a.getTime()
                }),
                o = {
                    uid: a.user.id,
                    uname: a.user.name,
                    pcid: a.global.pcid,
                    vip: a.global.isvip,
                    ulevel: a.global.userlevel,
                    destid: d || "",
                    single: m ? m: d ? d.indexOf("GT2D") > -1 ? 0 : 1 : -1,
                    chattype: "",
                    chatvalue: "",
                    itemid: c,
                    itemparam: f,
                    erpparam: a.global.erpparam,
                    ref: a.enCut(a.url, 255),
                    tit: a.global.title,
                    "ntalker-debug": a.params["ntalker-debug"] || a.cache.get("debug"),
                    exparams: a.global.exparams
                };
                if ("undefined" != typeof ntalker && ntalker.openChatWindow) {
                    sdkQuery = a.extend({},
                    n, o),
                    sdkQuery.uid = a.base.toShortID(sdkQuery.uid),
                    sdkQuery.flashserver = a.server.flashserver,
                    a.Log("call ntalker.openChatWindow()", 2);
                    var p = ntalker.openChatWindow(a.JSON.toJSONString(sdkQuery));
                    if (a.Log("call ntalker.openChatWindow()>>" + p, 3), 0 === p) return;
                    a.Log("call ntalker.openChatWindow()>>" + p, 3)
                }
                return a.global.themes && (n.themes = a.global.themes),
                e.iframechat ? (l = "ntalk-mobile-chat", a.require({
                    animate: "nt2.js" + a.baseExt
                },
                function(b) {
                    return a.animate ? (k = a._createMobileIframeWindow(l), (!k || k && k.created === !0) && (a.objectPost = new a.POST(a.server.flashserver + "chat.php?" + a.toURI(n, !0, "&"), o,
                    function() {
                        a.Log("open chat window complete", 1)
                    },
                    l)), void a._showMobileIframeWindow(k.element)) : void a.Log("Loaded $nt2 mode failed", 3)
                }), null) : ((!k || k && k.created === !0) && (a.objectPost = new a.POST(a.server.flashserver + "chat.php?" + a.toURI(n, !0, "&"), o,
                function() {
                    a.Log("open chat window complete", 1)
                },
                l)), k ? k.element: a.objectPost.iframeElement)
            },
            im_getAppChatWindowURL: function(b, c) {
                var d, e, f, g, h, i, j, k, l;
                if (!a.base._startBase) return a.base.start(),
                void
                function() {
                    f = arguments,
                    a.base._startBase ? a.im_getAppChatWindowURL(b, c) : setTimeout(function() {
                        f.callee()
                    },
                    50)
                } ();
                if (a.base.chanageUserID()) return void a.base.overloadedData(function() {
                    a.im_getAppChatWindowURL(b, c)
                });
                a.Log("nTalk.im_getAppChatWindowURL()", 1),
                "function" == typeof b ? (c = b, b = {}) : b = a.extend({},
                b),
                h = b.destid || "",
                i = b.settingId || a.global.settingid || "",
                d = a.global.settingid ? a.global.settingid.split("_").splice(0, 2).join("_") : "",
                e = b.settingid ? b.settingid.split("_").splice(0, 2).join("_") : "",
                g = a.global.sellerid && a.global.sellerid.length ? a.global.sellerid[0] : "",
                l = a.extend({},
                b.options),
                b.itemid ? (j = b.itemid, k = b.itemparam) : e && ("" === e || e !== g && e !== d) ? (j = "", k = "") : (j = a.global.itemid, k = a.global.itemparam),
                g = e != a.global.siteid ? e: "",
                a.Log("settingId:" + i + ", itemId:" + j + ", itemparam:" + k);
                var m = l && l.single ? l.single: "",
                n = (l && l.manual ? 1 : 0, {
                    v: a.version.script,
                    siteid: a.global.siteid,
                    sellerid: g,
                    settingid: i,
                    baseuri: a.baseURI,
                    mobile: a.browser.mobile ? 1 : 0,
                    lan: a.extParmas.lan || "",
                    header: a.isDefined(l.header) ? l.header: "1",
                    uid: a.user.id,
                    uname: a.user.name,
                    pcid: a.global.pcid,
                    vip: a.global.isvip,
                    ulevel: a.global.userlevel,
                    destid: h || "",
                    single: m ? m: h ? h.indexOf("GT2D") > -1 ? 0 : 1 : -1,
                    chattype: "",
                    chatvalue: "",
                    itemid: j,
                    itemparam: k,
                    erpparam: a.global.erpparam,
                    ref: a.enCut(a.url, 255),
                    tit: a.global.title,
                    "ntalker-debug": a.params["ntalker-debug"] || a.cache.get("debug") || "",
                    exparams: a.global.exparams
                });
                a.isFunction(c) && c.call(self, a.server.flashserver + "recieve.php?" + a.toURI(n, !0, "&"))
            },
            im_updatePageInfo: function(b) {
                a.base.overloadedData(b)
            },
            im_addTrailInfo: function(b, c, d) {
                a.referrer = a.url,
                a.title = b || document.title,
                a.url = c || document.location.href,
                a.base.overloadedData(d)
            },
            t2d: {
                openChatWindow: function(b, c, d) {
                    a.im_openOutPageChat(d, "", b, null, "")
                }
            },
            enableDebug: function() {
                return a.cache.get("debug") || a.cache.set("debug", 2),
                a.mDebug || a.require({
                    mDebug: "debug.js" + a.baseExt,
                    Window: "nt2.js" + a.baseExt
                },
                function(b) {
                    b && !b.error && (a.mDebug.initialize(), a.Log = a.mDebug.Log, a.debug = a.mDebug)
                }),
                a.cache.get("debug")
            }
        }), !a.isDefined(CON_SERVER)) throw "CON_SERVER is not defined";
        a.imageloading = a.sourceURI + "images/loading.gif",
        a.server = a.extend({},
        a.protocolFilter(CON_SERVER)),
        a.version = a.extend({},
        a.version, CON_VERSION),
        a.baseExt = "?siteid=" + (a.extParmas.siteid || "") + "&v=" + a.version.dir + "&t=" + a.version.release,
        parseFloat(a.params["ntalker-debug"]) > 0 || +a.cache.get("debug") > 0 ? a.require({
            mDebug: "debug.js" + a.baseExt,
            Window: "nt2.js" + a.baseExt
        },
        function(b) {
            b && !b.error && (a.mDebug.initialize(), a.Log = a.mDebug.Log, a.debug = a.mDebug, a.base.start())
        }) : (a.Log = h, a.debug = {
            Log: a.Log
        },
        a.base.start()),
        a.require(a.imageloading)
    }
} (nTalk);