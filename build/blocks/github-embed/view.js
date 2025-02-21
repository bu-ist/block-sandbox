/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/github-embed/prism/prism.js":
/*!************************************************!*\
  !*** ./src/blocks/github-embed/prism/prism.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+css-extras+json+markdown+markup-templating+php+sass+scss&plugins=line-highlight+line-numbers+autolinker+show-language+inline-color+previewers+normalize-whitespace+data-uri-highlight+toolbar+copy-to-clipboard+match-braces+treeview */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
  Prism = function (e) {
    var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      t = 0,
      r = {},
      a = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof i ? new i(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return e.__id || Object.defineProperty(e, "__id", {
              value: ++t
            }), e.__id;
          },
          clone: function e(n, t) {
            var r, i;
            switch (t = t || {}, a.util.type(n)) {
              case "Object":
                if (i = a.util.objId(n), t[i]) return t[i];
                for (var l in r = {}, t[i] = r, n) n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                return r;
              case "Array":
                return i = a.util.objId(n), t[i] ? t[i] : (r = [], t[i] = r, n.forEach(function (n, a) {
                  r[a] = e(n, t);
                }), r);
              default:
                return n;
            }
          },
          getLanguage: function (e) {
            for (; e;) {
              var t = n.exec(e.className);
              if (t) return t[1].toLowerCase();
              e = e.parentElement;
            }
            return "none";
          },
          setLanguage: function (e, t) {
            e.className = e.className.replace(RegExp(n, "gi"), ""), e.classList.add("language-" + t);
          },
          currentScript: function () {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;
            try {
              throw new Error();
            } catch (r) {
              var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
              if (e) {
                var n = document.getElementsByTagName("script");
                for (var t in n) if (n[t].src == e) return n[t];
              }
              return null;
            }
          },
          isActive: function (e, n, t) {
            for (var r = "no-" + n; e;) {
              var a = e.classList;
              if (a.contains(n)) return !0;
              if (a.contains(r)) return !1;
              e = e.parentElement;
            }
            return !!t;
          }
        },
        languages: {
          plain: r,
          plaintext: r,
          text: r,
          txt: r,
          extend: function (e, n) {
            var t = a.util.clone(a.languages[e]);
            for (var r in n) t[r] = n[r];
            return t;
          },
          insertBefore: function (e, n, t, r) {
            var i = (r = r || a.languages)[e],
              l = {};
            for (var o in i) if (i.hasOwnProperty(o)) {
              if (o == n) for (var s in t) t.hasOwnProperty(s) && (l[s] = t[s]);
              t.hasOwnProperty(o) || (l[o] = i[o]);
            }
            var u = r[e];
            return r[e] = l, a.languages.DFS(a.languages, function (n, t) {
              t === u && n != e && (this[n] = l);
            }), l;
          },
          DFS: function e(n, t, r, i) {
            i = i || {};
            var l = a.util.objId;
            for (var o in n) if (n.hasOwnProperty(o)) {
              t.call(n, o, n[o], r || o);
              var s = n[o],
                u = a.util.type(s);
              "Object" !== u || i[l(s)] ? "Array" !== u || i[l(s)] || (i[l(s)] = !0, e(s, t, o, i)) : (i[l(s)] = !0, e(s, t, null, i));
            }
          }
        },
        plugins: {},
        highlightAll: function (e, n) {
          a.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function (e, n, t) {
          var r = {
            callback: t,
            container: e,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          a.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), a.hooks.run("before-all-elements-highlight", r);
          for (var i, l = 0; i = r.elements[l++];) a.highlightElement(i, !0 === n, r.callback);
        },
        highlightElement: function (n, t, r) {
          var i = a.util.getLanguage(n),
            l = a.languages[i];
          a.util.setLanguage(n, i);
          var o = n.parentElement;
          o && "pre" === o.nodeName.toLowerCase() && a.util.setLanguage(o, i);
          var s = {
            element: n,
            language: i,
            grammar: l,
            code: n.textContent
          };
          function u(e) {
            s.highlightedCode = e, a.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, a.hooks.run("after-highlight", s), a.hooks.run("complete", s), r && r.call(s.element);
          }
          if (a.hooks.run("before-sanity-check", s), (o = s.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), !s.code) return a.hooks.run("complete", s), void (r && r.call(s.element));
          if (a.hooks.run("before-highlight", s), s.grammar) {
            if (t && e.Worker) {
              var c = new Worker(a.filename);
              c.onmessage = function (e) {
                u(e.data);
              }, c.postMessage(JSON.stringify({
                language: s.language,
                code: s.code,
                immediateClose: !0
              }));
            } else u(a.highlight(s.code, s.grammar, s.language));
          } else u(a.util.encode(s.code));
        },
        highlight: function (e, n, t) {
          var r = {
            code: e,
            grammar: n,
            language: t
          };
          if (a.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.');
          return r.tokens = a.tokenize(r.code, r.grammar), a.hooks.run("after-tokenize", r), i.stringify(a.util.encode(r.tokens), r.language);
        },
        tokenize: function (e, n) {
          var t = n.rest;
          if (t) {
            for (var r in t) n[r] = t[r];
            delete n.rest;
          }
          var a = new s();
          return u(a, a.head, e), o(e, a, n, a.head, 0), function (e) {
            for (var n = [], t = e.head.next; t !== e.tail;) n.push(t.value), t = t.next;
            return n;
          }(a);
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var t = a.hooks.all;
            t[e] = t[e] || [], t[e].push(n);
          },
          run: function (e, n) {
            var t = a.hooks.all[e];
            if (t && t.length) for (var r, i = 0; r = t[i++];) r(n);
          }
        },
        Token: i
      };
    function i(e, n, t, r) {
      this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length;
    }
    function l(e, n, t, r) {
      e.lastIndex = n;
      var a = e.exec(t);
      if (a && r && a[1]) {
        var i = a[1].length;
        a.index += i, a[0] = a[0].slice(i);
      }
      return a;
    }
    function o(e, n, t, r, s, g) {
      for (var f in t) if (t.hasOwnProperty(f) && t[f]) {
        var h = t[f];
        h = Array.isArray(h) ? h : [h];
        for (var d = 0; d < h.length; ++d) {
          if (g && g.cause == f + "," + d) return;
          var v = h[d],
            p = v.inside,
            m = !!v.lookbehind,
            y = !!v.greedy,
            k = v.alias;
          if (y && !v.pattern.global) {
            var x = v.pattern.toString().match(/[imsuy]*$/)[0];
            v.pattern = RegExp(v.pattern.source, x + "g");
          }
          for (var b = v.pattern || v, w = r.next, A = s; w !== n.tail && !(g && A >= g.reach); A += w.value.length, w = w.next) {
            var E = w.value;
            if (n.length > e.length) return;
            if (!(E instanceof i)) {
              var P,
                L = 1;
              if (y) {
                if (!(P = l(b, A, e, m)) || P.index >= e.length) break;
                var S = P.index,
                  O = P.index + P[0].length,
                  j = A;
                for (j += w.value.length; S >= j;) j += (w = w.next).value.length;
                if (A = j -= w.value.length, w.value instanceof i) continue;
                for (var C = w; C !== n.tail && (j < O || "string" == typeof C.value); C = C.next) L++, j += C.value.length;
                L--, E = e.slice(A, j), P.index -= A;
              } else if (!(P = l(b, 0, E, m))) continue;
              S = P.index;
              var N = P[0],
                _ = E.slice(0, S),
                M = E.slice(S + N.length),
                W = A + E.length;
              g && W > g.reach && (g.reach = W);
              var z = w.prev;
              if (_ && (z = u(n, z, _), A += _.length), c(n, z, L), w = u(n, z, new i(f, p ? a.tokenize(N, p) : N, k, N)), M && u(n, w, M), L > 1) {
                var I = {
                  cause: f + "," + d,
                  reach: W
                };
                o(e, n, t, w.prev, A, I), g && I.reach > g.reach && (g.reach = I.reach);
              }
            }
          }
        }
      }
    }
    function s() {
      var e = {
          value: null,
          prev: null,
          next: null
        },
        n = {
          value: null,
          prev: e,
          next: null
        };
      e.next = n, this.head = e, this.tail = n, this.length = 0;
    }
    function u(e, n, t) {
      var r = n.next,
        a = {
          value: t,
          prev: n,
          next: r
        };
      return n.next = a, r.prev = a, e.length++, a;
    }
    function c(e, n, t) {
      for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
      n.next = r, r.prev = n, e.length -= a;
    }
    if (e.Prism = a, i.stringify = function e(n, t) {
      if ("string" == typeof n) return n;
      if (Array.isArray(n)) {
        var r = "";
        return n.forEach(function (n) {
          r += e(n, t);
        }), r;
      }
      var i = {
          type: n.type,
          content: e(n.content, t),
          tag: "span",
          classes: ["token", n.type],
          attributes: {},
          language: t
        },
        l = n.alias;
      l && (Array.isArray(l) ? Array.prototype.push.apply(i.classes, l) : i.classes.push(l)), a.hooks.run("wrap", i);
      var o = "";
      for (var s in i.attributes) o += " " + s + '="' + (i.attributes[s] || "").replace(/"/g, "&quot;") + '"';
      return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">";
    }, !e.document) return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", function (n) {
      var t = JSON.parse(n.data),
        r = t.language,
        i = t.code,
        l = t.immediateClose;
      e.postMessage(a.highlight(i, a.languages[r], r)), l && e.close();
    }, !1), a) : a;
    var g = a.util.currentScript();
    function f() {
      a.manual || a.highlightAll();
    }
    if (g && (a.filename = g.src, g.hasAttribute("data-manual") && (a.manual = !0)), !a.manual) {
      var h = document.readyState;
      "loading" === h || "interactive" === h && g && g.defer ? document.addEventListener("DOMContentLoaded", f) : window.requestAnimationFrame ? window.requestAnimationFrame(f) : window.setTimeout(f, 16);
    }
    return a;
  }(_self);
 true && module.exports && (module.exports = Prism), "undefined" != typeof __webpack_require__.g && (__webpack_require__.g.Prism = Prism);
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{
            pattern: /^=/,
            alias: "attr-equals"
          }, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: !0
          }]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function (a, e) {
    var s = {};
    s["language-" + e] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[e]
    }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var t = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: s
      }
    };
    t["language-" + e] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[e]
    };
    var n = {};
    n[a] = {
      pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {
        return a;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: t
    }, Prism.languages.insertBefore("markup", "cdata", n);
  }
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  value: function (a, e) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp("(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [e, "language-" + e],
              inside: Prism.languages[e]
            },
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        }
      }
    });
  }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
!function (s) {
  var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + e.source + ")*?(?:;|(?=\\s*\\{))"),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
      }
    },
    url: {
      pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + e.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: e,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, s.languages.css.atrule.inside.rest = s.languages.css;
  var t = s.languages.markup;
  t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
}(Prism);
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0,
    greedy: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [Prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: !0
  }],
  keyword: [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: !0
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0
  }],
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
}), Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
!function (e) {
  var a,
    n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  e.languages.css.selector = {
    pattern: e.languages.css.selector.pattern,
    lookbehind: !0,
    inside: a = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword"
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: {
              punctuation: /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0
          },
          "attr-value": [n, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: !0
          }],
          operator: /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: !0,
        inside: {
          number: /[\dn]+/,
          operator: /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: !0
      }],
      combinator: />|\+|~|\|\|/,
      punctuation: /[(),]/
    }
  }, e.languages.css.atrule.inside["selector-function-argument"].inside = a, e.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: !0
    }
  });
  var r = {
      pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
      lookbehind: !0
    },
    i = {
      pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
      lookbehind: !0
    };
  e.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: !0
    },
    hexcode: {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    color: [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: !0
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        unit: r,
        number: i,
        function: /[\w-]+(?=\()/,
        punctuation: /[(),]/
      }
    }],
    entity: /\\[\da-f]{1,8}/i,
    unit: r,
    number: i
  });
}(Prism);
Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
}, Prism.languages.webmanifest = Prism.languages.json;
!function (n) {
  function e(n) {
    return n = n.replace(/<inner>/g, function () {
      return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))";
    }), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")");
  }
  var t = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
    a = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(/__/g, function () {
      return t;
    }),
    i = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
  n.languages.markdown = n.languages.extend("markup", {}), n.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: n.languages.yaml
        }
      }
    },
    blockquote: {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + a + i + "(?:" + a + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + a + i + ")(?:" + a + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(t),
              inside: n.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + a + ")" + i + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + a + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(t),
              alias: "important",
              inside: n.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [{
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: !0,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: !0,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: !0
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: !0
        },
        punctuation: /```/
      }
    }],
    title: [{
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#.+/m,
      lookbehind: !0,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    hr: {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      pattern: e("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      pattern: e("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      pattern: e("(~~?)(?:(?!~)<inner>)+\\2"),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      pattern: e('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function (e) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (t) {
      e !== t && (n.languages.markdown[e].inside.content.inside[t] = n.languages.markdown[t]);
    });
  }), n.hooks.add("after-tokenize", function (n) {
    "markdown" !== n.language && "md" !== n.language || function n(e) {
      if (e && "string" != typeof e) for (var t = 0, a = e.length; t < a; t++) {
        var i = e[t];
        if ("code" === i.type) {
          var r = i.content[1],
            o = i.content[3];
          if (r && o && "code-language" === r.type && "code-block" === o.type && "string" == typeof r.content) {
            var l = r.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
              s = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
            o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s];
          }
        } else n(i.content);
      }
    }(n.tokens);
  }), n.hooks.add("wrap", function (e) {
    if ("code-block" === e.type) {
      for (var t = "", a = 0, i = e.classes.length; a < i; a++) {
        var s = e.classes[a],
          d = /language-(.+)/.exec(s);
        if (d) {
          t = d[1];
          break;
        }
      }
      var p = n.languages[t];
      if (p) e.content = n.highlight(e.content.replace(r, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (n, e) {
        var t;
        return "#" === (e = e.toLowerCase())[0] ? (t = "x" === e[1] ? parseInt(e.slice(2), 16) : Number(e.slice(1)), l(t)) : o[e] || n;
      }), p, t);else if (t && "none" !== t && n.plugins.autoloader) {
        var u = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
        e.attributes.id = u, n.plugins.autoloader.loadLanguages(t, function () {
          var e = document.getElementById(u);
          e && (e.innerHTML = n.highlight(e.textContent, n.languages[t], t));
        });
      }
    }
  });
  var r = RegExp(n.languages.markup.tag.pattern.source, "gi"),
    o = {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"'
    },
    l = String.fromCodePoint || String.fromCharCode;
  n.languages.md = n.languages.markdown;
}(Prism);
!function (e) {
  function n(e, n) {
    return "___" + e.toUpperCase() + n + "___";
  }
  Object.defineProperties(e.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function (t, a, r, o) {
        if (t.language === a) {
          var c = t.tokenStack = [];
          t.code = t.code.replace(r, function (e) {
            if ("function" == typeof o && !o(e)) return e;
            for (var r, i = c.length; -1 !== t.code.indexOf(r = n(a, i));) ++i;
            return c[i] = e, r;
          }), t.grammar = e.languages.markup;
        }
      }
    },
    tokenizePlaceholders: {
      value: function (t, a) {
        if (t.language === a && t.tokenStack) {
          t.grammar = e.languages[a];
          var r = 0,
            o = Object.keys(t.tokenStack);
          !function c(i) {
            for (var u = 0; u < i.length && !(r >= o.length); u++) {
              var g = i[u];
              if ("string" == typeof g || g.content && "string" == typeof g.content) {
                var l = o[r],
                  s = t.tokenStack[l],
                  f = "string" == typeof g ? g : g.content,
                  p = n(a, l),
                  k = f.indexOf(p);
                if (k > -1) {
                  ++r;
                  var m = f.substring(0, k),
                    d = new e.Token(a, e.tokenize(s, t.grammar), "language-" + a, s),
                    h = f.substring(k + p.length),
                    v = [];
                  m && v.push.apply(v, c([m])), v.push(d), h && v.push.apply(v, c([h])), "string" == typeof g ? i.splice.apply(i, [u, 1].concat(v)) : g.content = v;
                }
              } else g.content && c(g.content);
            }
            return i;
          }(t.tokens);
        }
      }
    }
  });
}(Prism);
!function (e) {
  var a = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
    t = [{
      pattern: /\b(?:false|true)\b/i,
      alias: "boolean"
    }, {
      pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
      greedy: !0,
      lookbehind: !0
    }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
    i = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
    s = /[{}\[\](),:;]/;
  e.languages.php = {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: "important"
    },
    comment: a,
    variable: /\$+(?:\w+\b|(?=\{))/,
    package: {
      pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    },
    "class-name-definition": {
      pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
      lookbehind: !0,
      alias: "class-name"
    },
    "function-definition": {
      pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
      lookbehind: !0,
      alias: "function"
    },
    keyword: [{
      pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
      alias: "type-casting",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
      alias: "type-hint",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
      alias: "return-type",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
      alias: "type-declaration",
      greedy: !0
    }, {
      pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
      alias: "type-declaration",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /\b(?:parent|self|static)(?=\s*::)/i,
      alias: "static-context",
      greedy: !0
    }, {
      pattern: /(\byield\s+)from\b/i,
      lookbehind: !0
    }, /\bclass\b/i, {
      pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
      lookbehind: !0
    }],
    "argument-name": {
      pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
      lookbehind: !0
    },
    "class-name": [{
      pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
      greedy: !0
    }, {
      pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
      alias: "class-name-fully-qualified",
      greedy: !0,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
      alias: "class-name-fully-qualified",
      greedy: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      alias: "class-name-fully-qualified",
      greedy: !0,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /\b[a-z_]\w*(?=\s*\$)/i,
      alias: "type-declaration",
      greedy: !0
    }, {
      pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
      alias: ["class-name-fully-qualified", "type-declaration"],
      greedy: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /\b[a-z_]\w*(?=\s*::)/i,
      alias: "static-context",
      greedy: !0
    }, {
      pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
      alias: ["class-name-fully-qualified", "static-context"],
      greedy: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
      alias: "type-hint",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
      alias: ["class-name-fully-qualified", "type-hint"],
      greedy: !0,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
      alias: "return-type",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      alias: ["class-name-fully-qualified", "return-type"],
      greedy: !0,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }],
    constant: t,
    function: {
      pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    },
    property: {
      pattern: /(->\s*)\w+/,
      lookbehind: !0
    },
    number: i,
    operator: n,
    punctuation: s
  };
  var l = {
      pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: !0,
      inside: e.languages.php
    },
    r = [{
      pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
      alias: "nowdoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<'?|[';]$/
          }
        }
      }
    }, {
      pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<"?|[";]$/
          }
        },
        interpolation: l
      }
    }, {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      alias: "backtick-quoted-string",
      greedy: !0
    }, {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      alias: "single-quoted-string",
      greedy: !0
    }, {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      alias: "double-quoted-string",
      greedy: !0,
      inside: {
        interpolation: l
      }
    }];
  e.languages.insertBefore("php", "variable", {
    string: r,
    attribute: {
      pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
      greedy: !0,
      inside: {
        "attribute-content": {
          pattern: /^(#\[)[\s\S]+(?=\]$)/,
          lookbehind: !0,
          inside: {
            comment: a,
            string: r,
            "attribute-class-name": [{
              pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
              alias: "class-name",
              greedy: !0,
              lookbehind: !0
            }, {
              pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
              alias: ["class-name", "class-name-fully-qualified"],
              greedy: !0,
              lookbehind: !0,
              inside: {
                punctuation: /\\/
              }
            }],
            constant: t,
            number: i,
            operator: n,
            punctuation: s
          }
        },
        delimiter: {
          pattern: /^#\[|\]$/,
          alias: "punctuation"
        }
      }
    }
  }), e.hooks.add("before-tokenize", function (a) {
    /<\?/.test(a.code) && e.languages["markup-templating"].buildPlaceholders(a, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g);
  }), e.hooks.add("after-tokenize", function (a) {
    e.languages["markup-templating"].tokenizePlaceholders(a, "php");
  });
}(Prism);
!function (e) {
  e.languages.sass = e.languages.extend("css", {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: !0,
      greedy: !0
    }
  }), e.languages.insertBefore("sass", "atrule", {
    "atrule-line": {
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: !0,
      inside: {
        atrule: /(?:@[\w-]+|[+=])/
      }
    }
  }), delete e.languages.sass.atrule;
  var r = /\$[-\w]+|#\{\$[-\w]+\}/,
    t = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
      pattern: /(\s)-(?=\s)/,
      lookbehind: !0
    }];
  e.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      greedy: !0,
      inside: {
        punctuation: /:/,
        variable: r,
        operator: t
      }
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: !0,
      inside: {
        property: [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: !0
        }],
        punctuation: /:/,
        variable: r,
        operator: t,
        important: e.languages.sass.important
      }
    }
  }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
    selector: {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: !0,
      greedy: !0
    }
  });
}(Prism);
Prism.languages.scss = Prism.languages.extend("css", {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: !0
  },
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      rule: /@[\w-]+/
    }
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      parent: {
        pattern: /&/,
        alias: "important"
      },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
}), Prism.languages.insertBefore("scss", "atrule", {
  keyword: [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: !0
  }]
}), Prism.languages.insertBefore("scss", "important", {
  variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword"
  },
  placeholder: {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  statement: {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  operator: {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: !0
  }
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
!function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document && document.querySelector) {
    var e,
      t = "line-numbers",
      i = "linkable-line-numbers",
      n = /\n(?!$)/g,
      r = !0;
    Prism.plugins.lineHighlight = {
      highlightLines: function (o, u, c) {
        var h = (u = "string" == typeof u ? u : o.getAttribute("data-line") || "").replace(/\s+/g, "").split(",").filter(Boolean),
          d = +o.getAttribute("data-line-offset") || 0,
          f = (function () {
            if (void 0 === e) {
              var t = document.createElement("div");
              t.style.fontSize = "13px", t.style.lineHeight = "1.5", t.style.padding = "0", t.style.border = "0", t.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(t), e = 38 === t.offsetHeight, document.body.removeChild(t);
            }
            return e;
          }() ? parseInt : parseFloat)(getComputedStyle(o).lineHeight),
          p = Prism.util.isActive(o, t),
          g = o.querySelector("code"),
          m = p ? o : g || o,
          v = [],
          y = g.textContent.match(n),
          b = y ? y.length + 1 : 1,
          A = g && m != g ? function (e, t) {
            var i = getComputedStyle(e),
              n = getComputedStyle(t);
            function r(e) {
              return +e.substr(0, e.length - 2);
            }
            return t.offsetTop + r(n.borderTopWidth) + r(n.paddingTop) - r(i.paddingTop);
          }(o, g) : 0;
        h.forEach(function (e) {
          var t = e.split("-"),
            i = +t[0],
            n = +t[1] || i;
          if (!((n = Math.min(b + d, n)) < i)) {
            var r = o.querySelector('.line-highlight[data-range="' + e + '"]') || document.createElement("div");
            if (v.push(function () {
              r.setAttribute("aria-hidden", "true"), r.setAttribute("data-range", e), r.className = (c || "") + " line-highlight";
            }), p && Prism.plugins.lineNumbers) {
              var s = Prism.plugins.lineNumbers.getLine(o, i),
                l = Prism.plugins.lineNumbers.getLine(o, n);
              if (s) {
                var a = s.offsetTop + A + "px";
                v.push(function () {
                  r.style.top = a;
                });
              }
              if (l) {
                var u = l.offsetTop - s.offsetTop + l.offsetHeight + "px";
                v.push(function () {
                  r.style.height = u;
                });
              }
            } else v.push(function () {
              r.setAttribute("data-start", String(i)), n > i && r.setAttribute("data-end", String(n)), r.style.top = (i - d - 1) * f + A + "px", r.textContent = new Array(n - i + 2).join(" \n");
            });
            v.push(function () {
              r.style.width = o.scrollWidth + "px";
            }), v.push(function () {
              m.appendChild(r);
            });
          }
        });
        var P = o.id;
        if (p && Prism.util.isActive(o, i) && P) {
          l(o, i) || v.push(function () {
            o.classList.add(i);
          });
          var E = parseInt(o.getAttribute("data-start") || "1");
          s(".line-numbers-rows > span", o).forEach(function (e, t) {
            var i = t + E;
            e.onclick = function () {
              var e = P + "." + i;
              r = !1, location.hash = e, setTimeout(function () {
                r = !0;
              }, 1);
            };
          });
        }
        return function () {
          v.forEach(a);
        };
      }
    };
    var o = 0;
    Prism.hooks.add("before-sanity-check", function (e) {
      var t = e.element.parentElement;
      if (u(t)) {
        var i = 0;
        s(".line-highlight", t).forEach(function (e) {
          i += e.textContent.length, e.parentNode.removeChild(e);
        }), i && /^(?: \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i));
      }
    }), Prism.hooks.add("complete", function e(i) {
      var n = i.element.parentElement;
      if (u(n)) {
        clearTimeout(o);
        var r = Prism.plugins.lineNumbers,
          s = i.plugins && i.plugins.lineNumbers;
        l(n, t) && r && !s ? Prism.hooks.add("line-numbers", e) : (Prism.plugins.lineHighlight.highlightLines(n)(), o = setTimeout(c, 1));
      }
    }), window.addEventListener("hashchange", c), window.addEventListener("resize", function () {
      s("pre").filter(u).map(function (e) {
        return Prism.plugins.lineHighlight.highlightLines(e);
      }).forEach(a);
    });
  }
  function s(e, t) {
    return Array.prototype.slice.call((t || document).querySelectorAll(e));
  }
  function l(e, t) {
    return e.classList.contains(t);
  }
  function a(e) {
    e();
  }
  function u(e) {
    return !!(e && /pre/i.test(e.nodeName) && (e.hasAttribute("data-line") || e.id && Prism.util.isActive(e, i)));
  }
  function c() {
    var e = location.hash.slice(1);
    s(".temporary.line-highlight").forEach(function (e) {
      e.parentNode.removeChild(e);
    });
    var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
    if (t && !document.getElementById(e)) {
      var i = e.slice(0, e.lastIndexOf(".")),
        n = document.getElementById(i);
      n && (n.hasAttribute("data-line") || n.setAttribute("data-line", ""), Prism.plugins.lineHighlight.highlightLines(n, t, "temporary ")(), r && document.querySelector(".temporary.line-highlight").scrollIntoView());
    }
  }
}();
!function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document) {
    var e = "line-numbers",
      n = /\n(?!$)/g,
      t = Prism.plugins.lineNumbers = {
        getLine: function (n, t) {
          if ("PRE" === n.tagName && n.classList.contains(e)) {
            var i = n.querySelector(".line-numbers-rows");
            if (i) {
              var r = parseInt(n.getAttribute("data-start"), 10) || 1,
                s = r + (i.children.length - 1);
              t < r && (t = r), t > s && (t = s);
              var l = t - r;
              return i.children[l];
            }
          }
        },
        resize: function (e) {
          r([e]);
        },
        assumeViewportIndependence: !0
      },
      i = void 0;
    window.addEventListener("resize", function () {
      t.assumeViewportIndependence && i === window.innerWidth || (i = window.innerWidth, r(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))));
    }), Prism.hooks.add("complete", function (t) {
      if (t.code) {
        var i = t.element,
          s = i.parentNode;
        if (s && /pre/i.test(s.nodeName) && !i.querySelector(".line-numbers-rows") && Prism.util.isActive(i, e)) {
          i.classList.remove(e), s.classList.add(e);
          var l,
            o = t.code.match(n),
            a = o ? o.length + 1 : 1,
            u = new Array(a + 1).join("<span></span>");
          (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, s.hasAttribute("data-start") && (s.style.counterReset = "linenumber " + (parseInt(s.getAttribute("data-start"), 10) - 1)), t.element.appendChild(l), r([s]), Prism.hooks.run("line-numbers", t);
        }
      }
    }), Prism.hooks.add("line-numbers", function (e) {
      e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0;
    });
  }
  function r(e) {
    if (0 != (e = e.filter(function (e) {
      var n,
        t = (n = e, n ? window.getComputedStyle ? getComputedStyle(n) : n.currentStyle || null : null)["white-space"];
      return "pre-wrap" === t || "pre-line" === t;
    })).length) {
      var t = e.map(function (e) {
        var t = e.querySelector("code"),
          i = e.querySelector(".line-numbers-rows");
        if (t && i) {
          var r = e.querySelector(".line-numbers-sizer"),
            s = t.textContent.split(n);
          r || ((r = document.createElement("span")).className = "line-numbers-sizer", t.appendChild(r)), r.innerHTML = "0", r.style.display = "block";
          var l = r.getBoundingClientRect().height;
          return r.innerHTML = "", {
            element: e,
            lines: s,
            lineHeights: [],
            oneLinerHeight: l,
            sizer: r
          };
        }
      }).filter(Boolean);
      t.forEach(function (e) {
        var n = e.sizer,
          t = e.lines,
          i = e.lineHeights,
          r = e.oneLinerHeight;
        i[t.length - 1] = void 0, t.forEach(function (e, t) {
          if (e && e.length > 1) {
            var s = n.appendChild(document.createElement("span"));
            s.style.display = "block", s.textContent = e;
          } else i[t] = r;
        });
      }), t.forEach(function (e) {
        for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++) void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height);
      }), t.forEach(function (e) {
        var n = e.sizer,
          t = e.element.querySelector(".line-numbers-rows");
        n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach(function (e, n) {
          t.children[n].style.height = e + "px";
        });
      });
    }
  }
}();
!function () {
  if ("undefined" != typeof Prism) {
    var i = /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&!$'()*,;@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/,
      n = /\b\S+@[\w.]+[a-z]{2}/,
      t = /\[([^\]]+)\]\(([^)]+)\)/,
      e = ["comment", "url", "attr-value", "string"];
    Prism.plugins.autolinker = {
      processGrammar: function (r) {
        r && !r["url-link"] && (Prism.languages.DFS(r, function (r, a, l) {
          e.indexOf(l) > -1 && !Array.isArray(a) && (a.pattern || (a = this[r] = {
            pattern: a
          }), a.inside = a.inside || {}, "comment" == l && (a.inside["md-link"] = t), "attr-value" == l ? Prism.languages.insertBefore("inside", "punctuation", {
            "url-link": i
          }, a) : a.inside["url-link"] = i, a.inside["email-link"] = n);
        }), r["url-link"] = i, r["email-link"] = n);
      }
    }, Prism.hooks.add("before-highlight", function (i) {
      Prism.plugins.autolinker.processGrammar(i.grammar);
    }), Prism.hooks.add("wrap", function (i) {
      if (/-link$/.test(i.type)) {
        i.tag = "a";
        var n = i.content;
        if ("email-link" == i.type && 0 != n.indexOf("mailto:")) n = "mailto:" + n;else if ("md-link" == i.type) {
          var e = i.content.match(t);
          n = e[2], i.content = e[1];
        }
        i.attributes.href = n;
        try {
          i.content = decodeURIComponent(i.content);
        } catch (i) {}
      }
    });
  }
}();
!function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document) {
    var e = [],
      t = {},
      n = function () {};
    Prism.plugins.toolbar = {};
    var a = Prism.plugins.toolbar.registerButton = function (n, a) {
        var r;
        r = "function" == typeof a ? a : function (e) {
          var t;
          return "function" == typeof a.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function () {
            a.onClick.call(this, e);
          })) : "string" == typeof a.url ? (t = document.createElement("a")).href = a.url : t = document.createElement("span"), a.className && t.classList.add(a.className), t.textContent = a.text, t;
        }, n in t ? console.warn('There is a button with the key "' + n + '" registered already.') : e.push(t[n] = r);
      },
      r = Prism.plugins.toolbar.hook = function (a) {
        var r = a.element.parentNode;
        if (r && /pre/i.test(r.nodeName) && !r.parentNode.classList.contains("code-toolbar")) {
          var o = document.createElement("div");
          o.classList.add("code-toolbar"), r.parentNode.insertBefore(o, r), o.appendChild(r);
          var i = document.createElement("div");
          i.classList.add("toolbar");
          var l = e,
            d = function (e) {
              for (; e;) {
                var t = e.getAttribute("data-toolbar-order");
                if (null != t) return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                e = e.parentElement;
              }
            }(a.element);
          d && (l = d.map(function (e) {
            return t[e] || n;
          })), l.forEach(function (e) {
            var t = e(a);
            if (t) {
              var n = document.createElement("div");
              n.classList.add("toolbar-item"), n.appendChild(t), i.appendChild(n);
            }
          }), o.appendChild(i);
        }
      };
    a("label", function (e) {
      var t = e.element.parentNode;
      if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
        var n,
          a,
          r = t.getAttribute("data-label");
        try {
          a = document.querySelector("template#" + r);
        } catch (e) {}
        return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n;
      }
    }), Prism.hooks.add("complete", r);
  }
}();
!function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document) if (Prism.plugins.toolbar) {
    var e = {
      none: "Plain text",
      plain: "Plain text",
      plaintext: "Plain text",
      text: "Plain text",
      txt: "Plain text",
      html: "HTML",
      xml: "XML",
      svg: "SVG",
      mathml: "MathML",
      ssml: "SSML",
      rss: "RSS",
      css: "CSS",
      clike: "C-like",
      js: "JavaScript",
      abap: "ABAP",
      abnf: "ABNF",
      al: "AL",
      antlr4: "ANTLR4",
      g4: "ANTLR4",
      apacheconf: "Apache Configuration",
      apl: "APL",
      aql: "AQL",
      ino: "Arduino",
      arff: "ARFF",
      armasm: "ARM Assembly",
      "arm-asm": "ARM Assembly",
      art: "Arturo",
      asciidoc: "AsciiDoc",
      adoc: "AsciiDoc",
      aspnet: "ASP.NET (C#)",
      asm6502: "6502 Assembly",
      asmatmel: "Atmel AVR Assembly",
      autohotkey: "AutoHotkey",
      autoit: "AutoIt",
      avisynth: "AviSynth",
      avs: "AviSynth",
      "avro-idl": "Avro IDL",
      avdl: "Avro IDL",
      awk: "AWK",
      gawk: "GAWK",
      sh: "Shell",
      basic: "BASIC",
      bbcode: "BBcode",
      bbj: "BBj",
      bnf: "BNF",
      rbnf: "RBNF",
      bqn: "BQN",
      bsl: "BSL (1C:Enterprise)",
      oscript: "OneScript",
      csharp: "C#",
      cs: "C#",
      dotnet: "C#",
      cpp: "C++",
      cfscript: "CFScript",
      cfc: "CFScript",
      cil: "CIL",
      cilkc: "Cilk/C",
      "cilk-c": "Cilk/C",
      cilkcpp: "Cilk/C++",
      "cilk-cpp": "Cilk/C++",
      cilk: "Cilk/C++",
      cmake: "CMake",
      cobol: "COBOL",
      coffee: "CoffeeScript",
      conc: "Concurnas",
      csp: "Content-Security-Policy",
      "css-extras": "CSS Extras",
      csv: "CSV",
      cue: "CUE",
      dataweave: "DataWeave",
      dax: "DAX",
      django: "Django/Jinja2",
      jinja2: "Django/Jinja2",
      "dns-zone-file": "DNS zone file",
      "dns-zone": "DNS zone file",
      dockerfile: "Docker",
      dot: "DOT (Graphviz)",
      gv: "DOT (Graphviz)",
      ebnf: "EBNF",
      editorconfig: "EditorConfig",
      ejs: "EJS",
      etlua: "Embedded Lua templating",
      erb: "ERB",
      "excel-formula": "Excel Formula",
      xlsx: "Excel Formula",
      xls: "Excel Formula",
      fsharp: "F#",
      "firestore-security-rules": "Firestore security rules",
      ftl: "FreeMarker Template Language",
      gml: "GameMaker Language",
      gamemakerlanguage: "GameMaker Language",
      gap: "GAP (CAS)",
      gcode: "G-code",
      gdscript: "GDScript",
      gedcom: "GEDCOM",
      gettext: "gettext",
      po: "gettext",
      glsl: "GLSL",
      gn: "GN",
      gni: "GN",
      "linker-script": "GNU Linker Script",
      ld: "GNU Linker Script",
      "go-module": "Go module",
      "go-mod": "Go module",
      graphql: "GraphQL",
      hbs: "Handlebars",
      hs: "Haskell",
      hcl: "HCL",
      hlsl: "HLSL",
      http: "HTTP",
      hpkp: "HTTP Public-Key-Pins",
      hsts: "HTTP Strict-Transport-Security",
      ichigojam: "IchigoJam",
      "icu-message-format": "ICU Message Format",
      idr: "Idris",
      ignore: ".ignore",
      gitignore: ".gitignore",
      hgignore: ".hgignore",
      npmignore: ".npmignore",
      inform7: "Inform 7",
      javadoc: "JavaDoc",
      javadoclike: "JavaDoc-like",
      javastacktrace: "Java stack trace",
      jq: "JQ",
      jsdoc: "JSDoc",
      "js-extras": "JS Extras",
      json: "JSON",
      webmanifest: "Web App Manifest",
      json5: "JSON5",
      jsonp: "JSONP",
      jsstacktrace: "JS stack trace",
      "js-templates": "JS Templates",
      keepalived: "Keepalived Configure",
      kts: "Kotlin Script",
      kt: "Kotlin",
      kumir: "KuMir (КуМир)",
      kum: "KuMir (КуМир)",
      latex: "LaTeX",
      tex: "TeX",
      context: "ConTeXt",
      lilypond: "LilyPond",
      ly: "LilyPond",
      emacs: "Lisp",
      elisp: "Lisp",
      "emacs-lisp": "Lisp",
      llvm: "LLVM IR",
      log: "Log file",
      lolcode: "LOLCODE",
      magma: "Magma (CAS)",
      md: "Markdown",
      "markup-templating": "Markup templating",
      matlab: "MATLAB",
      maxscript: "MAXScript",
      mel: "MEL",
      metafont: "METAFONT",
      mongodb: "MongoDB",
      moon: "MoonScript",
      n1ql: "N1QL",
      n4js: "N4JS",
      n4jsd: "N4JS",
      "nand2tetris-hdl": "Nand To Tetris HDL",
      naniscript: "Naninovel Script",
      nani: "Naninovel Script",
      nasm: "NASM",
      neon: "NEON",
      nginx: "nginx",
      nsis: "NSIS",
      objectivec: "Objective-C",
      objc: "Objective-C",
      ocaml: "OCaml",
      opencl: "OpenCL",
      openqasm: "OpenQasm",
      qasm: "OpenQasm",
      parigp: "PARI/GP",
      objectpascal: "Object Pascal",
      psl: "PATROL Scripting Language",
      pcaxis: "PC-Axis",
      px: "PC-Axis",
      peoplecode: "PeopleCode",
      pcode: "PeopleCode",
      php: "PHP",
      phpdoc: "PHPDoc",
      "php-extras": "PHP Extras",
      "plant-uml": "PlantUML",
      plantuml: "PlantUML",
      plsql: "PL/SQL",
      powerquery: "PowerQuery",
      pq: "PowerQuery",
      mscript: "PowerQuery",
      powershell: "PowerShell",
      promql: "PromQL",
      properties: ".properties",
      protobuf: "Protocol Buffers",
      purebasic: "PureBasic",
      pbfasm: "PureBasic",
      purs: "PureScript",
      py: "Python",
      qsharp: "Q#",
      qs: "Q#",
      q: "Q (kdb+ database)",
      qml: "QML",
      rkt: "Racket",
      cshtml: "Razor C#",
      razor: "Razor C#",
      jsx: "React JSX",
      tsx: "React TSX",
      renpy: "Ren'py",
      rpy: "Ren'py",
      res: "ReScript",
      rest: "reST (reStructuredText)",
      robotframework: "Robot Framework",
      robot: "Robot Framework",
      rb: "Ruby",
      sas: "SAS",
      sass: "Sass (Sass)",
      scss: "Sass (SCSS)",
      "shell-session": "Shell session",
      "sh-session": "Shell session",
      shellsession: "Shell session",
      sml: "SML",
      smlnj: "SML/NJ",
      solidity: "Solidity (Ethereum)",
      sol: "Solidity (Ethereum)",
      "solution-file": "Solution file",
      sln: "Solution file",
      soy: "Soy (Closure Template)",
      sparql: "SPARQL",
      rq: "SPARQL",
      "splunk-spl": "Splunk SPL",
      sqf: "SQF: Status Quo Function (Arma 3)",
      sql: "SQL",
      stata: "Stata Ado",
      iecst: "Structured Text (IEC 61131-3)",
      supercollider: "SuperCollider",
      sclang: "SuperCollider",
      systemd: "Systemd configuration file",
      "t4-templating": "T4 templating",
      "t4-cs": "T4 Text Templates (C#)",
      t4: "T4 Text Templates (C#)",
      "t4-vb": "T4 Text Templates (VB)",
      tap: "TAP",
      tt2: "Template Toolkit 2",
      toml: "TOML",
      trickle: "trickle",
      troy: "troy",
      trig: "TriG",
      ts: "TypeScript",
      tsconfig: "TSConfig",
      uscript: "UnrealScript",
      uc: "UnrealScript",
      uorazor: "UO Razor Script",
      uri: "URI",
      url: "URL",
      vbnet: "VB.Net",
      vhdl: "VHDL",
      vim: "vim",
      "visual-basic": "Visual Basic",
      vba: "VBA",
      vb: "Visual Basic",
      wasm: "WebAssembly",
      "web-idl": "Web IDL",
      webidl: "Web IDL",
      wgsl: "WGSL",
      wiki: "Wiki markup",
      wolfram: "Wolfram language",
      nb: "Mathematica Notebook",
      wl: "Wolfram language",
      xeoracube: "XeoraCube",
      "xml-doc": "XML doc (.net)",
      xojo: "Xojo (REALbasic)",
      xquery: "XQuery",
      yaml: "YAML",
      yml: "YAML",
      yang: "YANG"
    };
    Prism.plugins.toolbar.registerButton("show-language", function (a) {
      var t = a.element.parentNode;
      if (t && /pre/i.test(t.nodeName)) {
        var o,
          i = t.getAttribute("data-language") || e[a.language] || ((o = a.language) ? (o.substring(0, 1).toUpperCase() + o.substring(1)).replace(/s(?=cript)/, "S") : o);
        if (i) {
          var s = document.createElement("span");
          return s.textContent = i, s;
        }
      }
    });
  } else console.warn("Show Languages plugin loaded before Toolbar plugin.");
}();
!function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document) {
    var n = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,
      r = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i,
      o = [function (n) {
        var o = r.exec(n);
        if (o) {
          for (var s = (n = o[1]).length >= 6 ? 2 : 1, e = n.length / s, t = 1 == s ? 1 / 15 : 1 / 255, i = [], a = 0; a < e; a++) {
            var c = parseInt(n.substr(a * s, s), 16);
            i.push(c * t);
          }
          return 3 == e && i.push(1), "rgba(" + i.slice(0, 3).map(function (n) {
            return String(Math.round(255 * n));
          }).join(",") + "," + String(Number(i[3].toFixed(3))) + ")";
        }
      }, function (n) {
        var r = new Option().style;
        return r.color = n, r.color ? n : void 0;
      }];
    Prism.hooks.add("wrap", function (r) {
      if ("color" === r.type || r.classes.indexOf("color") >= 0) {
        for (var s, e = r.content, t = e.split(n).join(""), i = 0, a = o.length; i < a && !s; i++) s = o[i](t);
        if (!s) return;
        var c = '<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' + s + ';"></span></span>';
        r.content = c + e;
      }
    });
  }
}();
!function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document && Function.prototype.bind) {
    var e,
      s,
      t = {
        gradient: {
          create: (e = {}, s = function (s) {
            if (e[s]) return e[s];
            var t = s.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),
              i = t && t[1],
              a = t && t[2],
              n = s.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, "").split(/\s*,\s*/);
            return a.indexOf("linear") >= 0 ? e[s] = function (e, s, t) {
              var i = "180deg";
              return /^(?:-?(?:\d+(?:\.\d+)?|\.\d+)(?:deg|rad)|to\b|top|right|bottom|left)/.test(t[0]) && (i = t.shift()).indexOf("to ") < 0 && (i.indexOf("top") >= 0 ? i = i.indexOf("left") >= 0 ? "to bottom right" : i.indexOf("right") >= 0 ? "to bottom left" : "to bottom" : i.indexOf("bottom") >= 0 ? i = i.indexOf("left") >= 0 ? "to top right" : i.indexOf("right") >= 0 ? "to top left" : "to top" : i.indexOf("left") >= 0 ? i = "to right" : i.indexOf("right") >= 0 ? i = "to left" : e && (i.indexOf("deg") >= 0 ? i = 90 - parseFloat(i) + "deg" : i.indexOf("rad") >= 0 && (i = Math.PI / 2 - parseFloat(i) + "rad"))), s + "(" + i + "," + t.join(",") + ")";
            }(i, a, n) : a.indexOf("radial") >= 0 ? e[s] = function (e, s, t) {
              if (t[0].indexOf("at") < 0) {
                var i = "center",
                  a = "ellipse",
                  n = "farthest-corner";
                if (/\b(?:bottom|center|left|right|top)\b|^\d+/.test(t[0]) && (i = t.shift().replace(/\s*-?\d+(?:deg|rad)\s*/, "")), /\b(?:circle|closest|contain|cover|ellipse|farthest)\b/.test(t[0])) {
                  var r = t.shift().split(/\s+/);
                  !r[0] || "circle" !== r[0] && "ellipse" !== r[0] || (a = r.shift()), r[0] && (n = r.shift()), "cover" === n ? n = "farthest-corner" : "contain" === n && (n = "clothest-side");
                }
                return s + "(" + a + " " + n + " at " + i + "," + t.join(",") + ")";
              }
              return s + "(" + t.join(",") + ")";
            }(0, a, n) : e[s] = a + "(" + n.join(",") + ")";
          }, function () {
            new Prism.plugins.Previewer("gradient", function (e) {
              return this.firstChild.style.backgroundImage = "", this.firstChild.style.backgroundImage = s(e), !!this.firstChild.style.backgroundImage;
            }, "*", function () {
              this._elt.innerHTML = "<div></div>";
            });
          }),
          tokens: {
            gradient: {
              pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:hsl|rgb)a?\(.+?\)|[^\)])+\)/gi,
              inside: {
                function: /[\w-]+(?=\()/,
                punctuation: /[(),]/
              }
            }
          },
          languages: {
            css: !0,
            less: !0,
            sass: [{
              lang: "sass",
              before: "punctuation",
              inside: "inside",
              root: Prism.languages.sass && Prism.languages.sass["variable-line"]
            }, {
              lang: "sass",
              before: "punctuation",
              inside: "inside",
              root: Prism.languages.sass && Prism.languages.sass["property-line"]
            }],
            scss: !0,
            stylus: [{
              lang: "stylus",
              before: "func",
              inside: "rest",
              root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
            }, {
              lang: "stylus",
              before: "func",
              inside: "rest",
              root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
            }]
          }
        },
        angle: {
          create: function () {
            new Prism.plugins.Previewer("angle", function (e) {
              var s,
                t,
                i = parseFloat(e),
                a = e.match(/[a-z]+$/i);
              if (!i || !a) return !1;
              switch (a = a[0]) {
                case "deg":
                  s = 360;
                  break;
                case "grad":
                  s = 400;
                  break;
                case "rad":
                  s = 2 * Math.PI;
                  break;
                case "turn":
                  s = 1;
              }
              return t = 100 * i / s, t %= 100, this[(i < 0 ? "set" : "remove") + "Attribute"]("data-negative", ""), this.querySelector("circle").style.strokeDasharray = Math.abs(t) + ",500", !0;
            }, "*", function () {
              this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>';
            });
          },
          tokens: {
            angle: /(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)(?:deg|g?rad|turn)\b/i
          },
          languages: {
            css: !0,
            less: !0,
            markup: {
              lang: "markup",
              before: "punctuation",
              inside: "inside",
              root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
            },
            sass: [{
              lang: "sass",
              inside: "inside",
              root: Prism.languages.sass && Prism.languages.sass["property-line"]
            }, {
              lang: "sass",
              before: "operator",
              inside: "inside",
              root: Prism.languages.sass && Prism.languages.sass["variable-line"]
            }],
            scss: !0,
            stylus: [{
              lang: "stylus",
              before: "func",
              inside: "rest",
              root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
            }, {
              lang: "stylus",
              before: "func",
              inside: "rest",
              root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
            }]
          }
        },
        color: {
          create: function () {
            new Prism.plugins.Previewer("color", function (e) {
              return this.style.backgroundColor = "", this.style.backgroundColor = e, !!this.style.backgroundColor;
            });
          },
          tokens: {
            color: [Prism.languages.css.hexcode].concat(Prism.languages.css.color)
          },
          languages: {
            css: !1,
            less: !0,
            markup: {
              lang: "markup",
              before: "punctuation",
              inside: "inside",
              root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
            },
            sass: [{
              lang: "sass",
              before: "punctuation",
              inside: "inside",
              root: Prism.languages.sass && Prism.languages.sass["variable-line"]
            }, {
              lang: "sass",
              inside: "inside",
              root: Prism.languages.sass && Prism.languages.sass["property-line"]
            }],
            scss: !1,
            stylus: [{
              lang: "stylus",
              before: "hexcode",
              inside: "rest",
              root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
            }, {
              lang: "stylus",
              before: "hexcode",
              inside: "rest",
              root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
            }]
          }
        },
        easing: {
          create: function () {
            new Prism.plugins.Previewer("easing", function (e) {
              var s = (e = {
                linear: "0,0,1,1",
                ease: ".25,.1,.25,1",
                "ease-in": ".42,0,1,1",
                "ease-out": "0,0,.58,1",
                "ease-in-out": ".42,0,.58,1"
              }[e] || e).match(/-?(?:\d+(?:\.\d+)?|\.\d+)/g);
              if (4 === s.length) {
                s = s.map(function (e, s) {
                  return 100 * (s % 2 ? 1 - e : e);
                }), this.querySelector("path").setAttribute("d", "M0,100 C" + s[0] + "," + s[1] + ", " + s[2] + "," + s[3] + ", 100,0");
                var t = this.querySelectorAll("line");
                return t[0].setAttribute("x2", s[0]), t[0].setAttribute("y2", s[1]), t[1].setAttribute("x2", s[2]), t[1].setAttribute("y2", s[3]), !0;
              }
              return !1;
            }, "*", function () {
              this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /></svg>';
            });
          },
          tokens: {
            easing: {
              pattern: /\bcubic-bezier\((?:-?(?:\d+(?:\.\d+)?|\.\d+),\s*){3}-?(?:\d+(?:\.\d+)?|\.\d+)\)\B|\b(?:ease(?:-in)?(?:-out)?|linear)(?=\s|[;}]|$)/i,
              inside: {
                function: /[\w-]+(?=\()/,
                punctuation: /[(),]/
              }
            }
          },
          languages: {
            css: !0,
            less: !0,
            sass: [{
              lang: "sass",
              inside: "inside",
              before: "punctuation",
              root: Prism.languages.sass && Prism.languages.sass["variable-line"]
            }, {
              lang: "sass",
              inside: "inside",
              root: Prism.languages.sass && Prism.languages.sass["property-line"]
            }],
            scss: !0,
            stylus: [{
              lang: "stylus",
              before: "hexcode",
              inside: "rest",
              root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
            }, {
              lang: "stylus",
              before: "hexcode",
              inside: "rest",
              root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
            }]
          }
        },
        time: {
          create: function () {
            new Prism.plugins.Previewer("time", function (e) {
              var s = parseFloat(e),
                t = e.match(/[a-z]+$/i);
              return !(!s || !t || (t = t[0], this.querySelector("circle").style.animationDuration = 2 * s + t, 0));
            }, "*", function () {
              this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>';
            });
          },
          tokens: {
            time: /(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)m?s\b/i
          },
          languages: {
            css: !0,
            less: !0,
            markup: {
              lang: "markup",
              before: "punctuation",
              inside: "inside",
              root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
            },
            sass: [{
              lang: "sass",
              inside: "inside",
              root: Prism.languages.sass && Prism.languages.sass["property-line"]
            }, {
              lang: "sass",
              before: "operator",
              inside: "inside",
              root: Prism.languages.sass && Prism.languages.sass["variable-line"]
            }],
            scss: !0,
            stylus: [{
              lang: "stylus",
              before: "hexcode",
              inside: "rest",
              root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
            }, {
              lang: "stylus",
              before: "hexcode",
              inside: "rest",
              root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
            }]
          }
        }
      },
      i = "token",
      a = "active",
      n = "flipped",
      r = function (e, s, t, i) {
        this._elt = null, this._type = e, this._token = null, this.updater = s, this._mouseout = this.mouseout.bind(this), this.initializer = i;
        var a = this;
        t || (t = ["*"]), Array.isArray(t) || (t = [t]), t.forEach(function (e) {
          "string" != typeof e && (e = e.lang), r.byLanguages[e] || (r.byLanguages[e] = []), r.byLanguages[e].indexOf(a) < 0 && r.byLanguages[e].push(a);
        }), r.byType[e] = this;
      };
    for (var o in r.prototype.init = function () {
      this._elt || (this._elt = document.createElement("div"), this._elt.className = "prism-previewer prism-previewer-" + this._type, document.body.appendChild(this._elt), this.initializer && this.initializer());
    }, r.prototype.isDisabled = function (e) {
      do {
        if (e.hasAttribute && e.hasAttribute("data-previewers")) return -1 === (e.getAttribute("data-previewers") || "").split(/\s+/).indexOf(this._type);
      } while (e = e.parentNode);
      return !1;
    }, r.prototype.check = function (e) {
      if (!e.classList.contains(i) || !this.isDisabled(e)) {
        do {
          if (e.classList && e.classList.contains(i) && e.classList.contains(this._type)) break;
        } while (e = e.parentNode);
        e && e !== this._token && (this._token = e, this.show());
      }
    }, r.prototype.mouseout = function () {
      this._token.removeEventListener("mouseout", this._mouseout, !1), this._token = null, this.hide();
    }, r.prototype.show = function () {
      var e, s, t, i;
      if (this._elt || this.init(), this._token) if (this.updater.call(this._elt, this._token.textContent)) {
        this._token.addEventListener("mouseout", this._mouseout, !1);
        var r = (s = (e = this._token.getBoundingClientRect()).left, t = e.top, s -= (i = document.documentElement.getBoundingClientRect()).left, {
          top: t -= i.top,
          right: innerWidth - s - e.width,
          bottom: innerHeight - t - e.height,
          left: s,
          width: e.width,
          height: e.height
        });
        this._elt.classList.add(a), r.top - this._elt.offsetHeight > 0 ? (this._elt.classList.remove(n), this._elt.style.top = r.top + "px", this._elt.style.bottom = "") : (this._elt.classList.add(n), this._elt.style.bottom = r.bottom + "px", this._elt.style.top = ""), this._elt.style.left = r.left + Math.min(200, r.width / 2) + "px";
      } else this.hide();
    }, r.prototype.hide = function () {
      this._elt.classList.remove(a);
    }, r.byLanguages = {}, r.byType = {}, r.initEvents = function (e, s) {
      var t = [];
      r.byLanguages[s] && (t = t.concat(r.byLanguages[s])), r.byLanguages["*"] && (t = t.concat(r.byLanguages["*"])), e.addEventListener("mouseover", function (e) {
        var s = e.target;
        t.forEach(function (e) {
          e.check(s);
        });
      }, !1);
    }, Prism.plugins.Previewer = r, Prism.hooks.add("before-highlight", function (e) {
      for (var s in t) {
        var i = t[s].languages;
        if (e.language && i[e.language] && !i[e.language].initialized) {
          var a = i[e.language];
          Array.isArray(a) || (a = [a]), a.forEach(function (a) {
            var n, r, o, l;
            !0 === a ? (n = "important", r = e.language, a = e.language) : (n = a.before || "important", r = a.inside || a.lang, o = a.root || Prism.languages, l = a.skip, a = e.language), !l && Prism.languages[a] && (Prism.languages.insertBefore(r, n, t[s].tokens, o), e.grammar = Prism.languages[a], i[e.language] = {
              initialized: !0
            });
          });
        }
      }
    }), Prism.hooks.add("after-highlight", function (e) {
      (r.byLanguages["*"] || r.byLanguages[e.language]) && r.initEvents(e.element, e.language);
    }), t) t[o].create();
  }
}();
!function () {
  if ("undefined" != typeof Prism) {
    var e = Object.assign || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      },
      t = {
        "remove-trailing": "boolean",
        "remove-indent": "boolean",
        "left-trim": "boolean",
        "right-trim": "boolean",
        "break-lines": "number",
        indent: "number",
        "remove-initial-line-feed": "boolean",
        "tabs-to-spaces": "number",
        "spaces-to-tabs": "number"
      };
    n.prototype = {
      setDefaults: function (t) {
        this.defaults = e(this.defaults, t);
      },
      normalize: function (t, n) {
        for (var r in n = e(this.defaults, n)) {
          var i = r.replace(/-(\w)/g, function (e, t) {
            return t.toUpperCase();
          });
          "normalize" !== r && "setDefaults" !== i && n[r] && this[i] && (t = this[i].call(this, t, n[r]));
        }
        return t;
      },
      leftTrim: function (e) {
        return e.replace(/^\s+/, "");
      },
      rightTrim: function (e) {
        return e.replace(/\s+$/, "");
      },
      tabsToSpaces: function (e, t) {
        return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "));
      },
      spacesToTabs: function (e, t) {
        return t = 0 | t || 4, e.replace(RegExp(" {" + t + "}", "g"), "\t");
      },
      removeTrailing: function (e) {
        return e.replace(/\s*?$/gm, "");
      },
      removeInitialLineFeed: function (e) {
        return e.replace(/^(?:\r?\n|\r)/, "");
      },
      removeIndent: function (e) {
        var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
        return t && t[0].length ? (t.sort(function (e, t) {
          return e.length - t.length;
        }), t[0].length ? e.replace(RegExp("^" + t[0], "gm"), "") : e) : e;
      },
      indent: function (e, t) {
        return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&");
      },
      breakLines: function (e, t) {
        t = !0 === t ? 80 : 0 | t || 80;
        for (var n = e.split("\n"), i = 0; i < n.length; ++i) if (!(r(n[i]) <= t)) {
          for (var o = n[i].split(/(\s+)/g), a = 0, l = 0; l < o.length; ++l) {
            var s = r(o[l]);
            (a += s) > t && (o[l] = "\n" + o[l], a = s);
          }
          n[i] = o.join("");
        }
        return n.join("\n");
      }
    },  true && module.exports && (module.exports = n), Prism.plugins.NormalizeWhitespace = new n({
      "remove-trailing": !0,
      "remove-indent": !0,
      "left-trim": !0,
      "right-trim": !0
    }), Prism.hooks.add("before-sanity-check", function (e) {
      var n = Prism.plugins.NormalizeWhitespace;
      if ((!e.settings || !1 !== e.settings["whitespace-normalization"]) && Prism.util.isActive(e.element, "whitespace-normalization", !0)) if (e.element && e.element.parentNode || !e.code) {
        var r = e.element.parentNode;
        if (e.code && r && "pre" === r.nodeName.toLowerCase()) {
          for (var i in null == e.settings && (e.settings = {}), t) if (Object.hasOwnProperty.call(t, i)) {
            var o = t[i];
            if (r.hasAttribute("data-" + i)) try {
              var a = JSON.parse(r.getAttribute("data-" + i) || "true");
              typeof a === o && (e.settings[i] = a);
            } catch (e) {}
          }
          for (var l = r.childNodes, s = "", c = "", u = !1, m = 0; m < l.length; ++m) {
            var f = l[m];
            f == e.element ? u = !0 : "#text" === f.nodeName && (u ? c += f.nodeValue : s += f.nodeValue, r.removeChild(f), --m);
          }
          if (e.element.children.length && Prism.plugins.KeepMarkup) {
            var d = s + e.element.innerHTML + c;
            e.element.innerHTML = n.normalize(d, e.settings), e.code = e.element.textContent;
          } else e.code = s + e.code + c, e.code = n.normalize(e.code, e.settings);
        }
      } else e.code = n.normalize(e.code, e.settings);
    });
  }
  function n(t) {
    this.defaults = e({}, t);
  }
  function r(e) {
    for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
    return e.length + t;
  }
}();
!function () {
  if ("undefined" != typeof Prism) {
    var i = {
        pattern: /(.)\bdata:[^\/]+\/[^,]+,(?:(?!\1)[\s\S]|\\\1)+(?=\1)/,
        lookbehind: !0,
        inside: {
          "language-css": {
            pattern: /(data:[^\/]+\/(?:[^+,]+\+)?css,)[\s\S]+/,
            lookbehind: !0
          },
          "language-javascript": {
            pattern: /(data:[^\/]+\/(?:[^+,]+\+)?javascript,)[\s\S]+/,
            lookbehind: !0
          },
          "language-json": {
            pattern: /(data:[^\/]+\/(?:[^+,]+\+)?json,)[\s\S]+/,
            lookbehind: !0
          },
          "language-markup": {
            pattern: /(data:[^\/]+\/(?:[^+,]+\+)?(?:html|xml),)[\s\S]+/,
            lookbehind: !0
          }
        }
      },
      a = ["url", "attr-value", "string"];
    Prism.plugins.dataURIHighlight = {
      processGrammar: function (n) {
        n && !n["data-uri"] && (Prism.languages.DFS(n, function (n, r, e) {
          a.indexOf(e) > -1 && !Array.isArray(r) && (r.pattern || (r = this[n] = {
            pattern: r
          }), r.inside = r.inside || {}, "attr-value" == e ? Prism.languages.insertBefore("inside", r.inside["url-link"] ? "url-link" : "punctuation", {
            "data-uri": i
          }, r) : r.inside["url-link"] ? Prism.languages.insertBefore("inside", "url-link", {
            "data-uri": i
          }, r) : r.inside["data-uri"] = i);
        }), n["data-uri"] = i);
      }
    }, Prism.hooks.add("before-highlight", function (a) {
      if (i.pattern.test(a.code)) for (var n in i.inside) if (i.inside.hasOwnProperty(n) && !i.inside[n].inside && i.inside[n].pattern.test(a.code)) {
        var r = n.match(/^language-(.+)/)[1];
        Prism.languages[r] && (i.inside[n].inside = {
          rest: (e = Prism.languages[r], Prism.plugins.autolinker && Prism.plugins.autolinker.processGrammar(e), e)
        });
      }
      var e;
      Prism.plugins.dataURIHighlight.processGrammar(a.grammar);
    });
  }
}();
!function () {
  function t(t) {
    var e = document.createElement("textarea");
    e.value = t.getText(), e.style.top = "0", e.style.left = "0", e.style.position = "fixed", document.body.appendChild(e), e.focus(), e.select();
    try {
      var o = document.execCommand("copy");
      setTimeout(function () {
        o ? t.success() : t.error();
      }, 1);
    } catch (e) {
      setTimeout(function () {
        t.error(e);
      }, 1);
    }
    document.body.removeChild(e);
  }
  "undefined" != typeof Prism && "undefined" != typeof document && (Prism.plugins.toolbar ? Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (e) {
    var o = e.element,
      n = function (t) {
        var e = {
          copy: "Copy",
          "copy-error": "Press Ctrl+C to copy",
          "copy-success": "Copied!",
          "copy-timeout": 5e3
        };
        for (var o in e) {
          for (var n = "data-prismjs-" + o, c = t; c && !c.hasAttribute(n);) c = c.parentElement;
          c && (e[o] = c.getAttribute(n));
        }
        return e;
      }(o),
      c = document.createElement("button");
    c.className = "copy-to-clipboard-button", c.setAttribute("type", "button");
    var r = document.createElement("span");
    return c.appendChild(r), u("copy"), function (e, o) {
      e.addEventListener("click", function () {
        !function (e) {
          navigator.clipboard ? navigator.clipboard.writeText(e.getText()).then(e.success, function () {
            t(e);
          }) : t(e);
        }(o);
      });
    }(c, {
      getText: function () {
        return o.textContent;
      },
      success: function () {
        u("copy-success"), i();
      },
      error: function () {
        u("copy-error"), setTimeout(function () {
          !function (t) {
            window.getSelection().selectAllChildren(t);
          }(o);
        }, 1), i();
      }
    }), c;
    function i() {
      setTimeout(function () {
        u("copy");
      }, n["copy-timeout"]);
    }
    function u(t) {
      r.textContent = n[t], c.setAttribute("data-copy-state", t);
    }
  }) : console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."));
}();
!function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document) {
    var e = {
        "(": ")",
        "[": "]",
        "{": "}"
      },
      t = {
        "(": "brace-round",
        "[": "brace-square",
        "{": "brace-curly"
      },
      n = {
        "${": "{"
      },
      r = 0,
      c = /^(pair-\d+-)(close|open)$/;
    Prism.hooks.add("complete", function (c) {
      var i = c.element,
        d = i.parentElement;
      if (d && "PRE" == d.tagName) {
        var u = [];
        if (Prism.util.isActive(i, "match-braces") && u.push("(", "[", "{"), 0 != u.length) {
          d.__listenerAdded || (d.addEventListener("mousedown", function () {
            var e = d.querySelector("code"),
              t = s("brace-selected");
            Array.prototype.slice.call(e.querySelectorAll("." + t)).forEach(function (e) {
              e.classList.remove(t);
            });
          }), Object.defineProperty(d, "__listenerAdded", {
            value: !0
          }));
          var f = Array.prototype.slice.call(i.querySelectorAll("span." + s("token") + "." + s("punctuation"))),
            h = [];
          u.forEach(function (c) {
            for (var i = e[c], d = s(t[c]), u = [], p = [], v = 0; v < f.length; v++) {
              var m = f[v];
              if (0 == m.childElementCount) {
                var b = m.textContent;
                (b = n[b] || b) === c ? (h.push({
                  index: v,
                  open: !0,
                  element: m
                }), m.classList.add(d), m.classList.add(s("brace-open")), p.push(v)) : b === i && (h.push({
                  index: v,
                  open: !1,
                  element: m
                }), m.classList.add(d), m.classList.add(s("brace-close")), p.length && u.push([v, p.pop()]));
              }
            }
            u.forEach(function (e) {
              var t = "pair-" + r++ + "-",
                n = f[e[0]],
                c = f[e[1]];
              n.id = t + "open", c.id = t + "close", [n, c].forEach(function (e) {
                e.addEventListener("mouseenter", a), e.addEventListener("mouseleave", o), e.addEventListener("click", l);
              });
            });
          });
          var p = 0;
          h.sort(function (e, t) {
            return e.index - t.index;
          }), h.forEach(function (e) {
            e.open ? (e.element.classList.add(s("brace-level-" + (p % 12 + 1))), p++) : (p = Math.max(0, p - 1), e.element.classList.add(s("brace-level-" + (p % 12 + 1))));
          });
        }
      }
    });
  }
  function s(e) {
    var t = Prism.plugins.customClass;
    return t ? t.apply(e, "none") : e;
  }
  function i(e) {
    var t = c.exec(e.id);
    return document.querySelector("#" + t[1] + ("open" == t[2] ? "close" : "open"));
  }
  function a() {
    Prism.util.isActive(this, "brace-hover", !0) && [this, i(this)].forEach(function (e) {
      e.classList.add(s("brace-hover"));
    });
  }
  function o() {
    [this, i(this)].forEach(function (e) {
      e.classList.remove(s("brace-hover"));
    });
  }
  function l() {
    Prism.util.isActive(this, "brace-select", !0) && [this, i(this)].forEach(function (e) {
      e.classList.add(s("brace-selected"));
    });
  }
}();
"undefined" != typeof Prism && (Prism.languages.treeview = {
  "treeview-part": {
    pattern: /^.+/m,
    inside: {
      "entry-line": [{
        pattern: /\|-- |├── /,
        alias: "line-h"
      }, {
        pattern: /\| {3}|│ {3}/,
        alias: "line-v"
      }, {
        pattern: /`-- |└── /,
        alias: "line-v-last"
      }, {
        pattern: / {4}/,
        alias: "line-v-gap"
      }],
      "entry-name": {
        pattern: /.*\S.*/,
        inside: {
          operator: / -> /
        }
      }
    }
  }
}, Prism.hooks.add("wrap", function (e) {
  if ("treeview" === e.language && "entry-name" === e.type) {
    var t = e.classes,
      n = /(^|[^\\])\/\s*$/;
    if (n.test(e.content)) e.content = e.content.replace(n, "$1"), t.push("dir");else {
      e.content = e.content.replace(/(^|[^\\])[=*|]\s*$/, "$1");
      for (var a = e.content.toLowerCase().replace(/\s+/g, "").split("."); a.length > 1;) a.shift(), t.push("ext-" + a.join("-"));
    }
    "." === e.content[0] && t.push("dotfile");
  }
}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*****************************************!*\
  !*** ./src/blocks/github-embed/view.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prism_prism_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prism/prism.js */ "./src/blocks/github-embed/prism/prism.js");
/* harmony import */ var _prism_prism_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prism_prism_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */


}();
/******/ })()
;
//# sourceMappingURL=view.js.map