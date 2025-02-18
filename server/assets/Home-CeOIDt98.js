import { r as _, j as m, L as st, y as ye } from './index-D54KHz3u.js';
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ot = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Fe = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== '' && r.indexOf(t) === n)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var it = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const at = _.forwardRef(
  (
    {
      color: e = 'currentColor',
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = '',
      children: o,
      iconNode: i,
      ...c
    },
    f
  ) =>
    _.createElement(
      'svg',
      {
        ref: f,
        ...it,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Fe('lucide', s),
        ...c,
      },
      [
        ...i.map(([l, u]) => _.createElement(l, u)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fe = (e, t) => {
  const n = _.forwardRef(({ className: r, ...s }, o) =>
    _.createElement(at, {
      ref: o,
      iconNode: t,
      className: Fe(`lucide-${ot(e)}`, r),
      ...s,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ct = [
    ['path', { d: 'M14.4 14.4 9.6 9.6', key: 'ic80wn' }],
    [
      'path',
      {
        d: 'M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z',
        key: 'nnl7wr',
      },
    ],
    ['path', { d: 'm21.5 21.5-1.4-1.4', key: '1f1ice' }],
    ['path', { d: 'M3.9 3.9 2.5 2.5', key: '1evmna' }],
    [
      'path',
      {
        d: 'M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z',
        key: 'yhosts',
      },
    ],
  ],
  lt = fe('Dumbbell', ct);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ut = [
    [
      'path',
      {
        d: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z',
        key: '96xj49',
      },
    ],
  ],
  _e = fe('Flame', ut);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ft = [
    [
      'rect',
      { width: '20', height: '16', x: '2', y: '4', rx: '2', key: '18n3k1' },
    ],
    ['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7', key: '1ocrg3' }],
  ],
  dt = fe('Mail', ft);
function Le(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: pt } = Object.prototype,
  { getPrototypeOf: de } = Object,
  G = ((e) => (t) => {
    const n = pt.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  C = (e) => ((e = e.toLowerCase()), (t) => G(t) === e),
  X = (e) => (t) => typeof t === e,
  { isArray: U } = Array,
  I = X('undefined');
function ht(e) {
  return (
    e !== null &&
    !I(e) &&
    e.constructor !== null &&
    !I(e.constructor) &&
    N(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ke = C('ArrayBuffer');
function mt(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ke(e.buffer)),
    t
  );
}
const yt = X('string'),
  N = X('function'),
  De = X('number'),
  Z = (e) => e !== null && typeof e == 'object',
  gt = (e) => e === !0 || e === !1,
  z = (e) => {
    if (G(e) !== 'object') return !1;
    const t = de(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  bt = C('Date'),
  wt = C('File'),
  xt = C('Blob'),
  Et = C('FileList'),
  St = (e) => Z(e) && N(e.pipe),
  Rt = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (N(e.append) &&
          ((t = G(e)) === 'formdata' ||
            (t === 'object' &&
              N(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  Tt = C('URLSearchParams'),
  [Ot, At, Nt, Ct] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    C
  ),
  jt = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function H(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, s;
  if ((typeof e != 'object' && (e = [e]), U(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let c;
    for (r = 0; r < i; r++) (c = o[r]), t.call(null, e[c], c, e);
  }
}
function Be(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const k =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  Ue = (e) => !I(e) && e !== k;
function oe() {
  const { caseless: e } = (Ue(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Be(t, s)) || s;
      z(t[o]) && z(r)
        ? (t[o] = oe(t[o], r))
        : z(r)
        ? (t[o] = oe({}, r))
        : U(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && H(arguments[r], n);
  return t;
}
const Pt = (e, t, n, { allOwnKeys: r } = {}) => (
    H(
      t,
      (s, o) => {
        n && N(s) ? (e[o] = Le(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Ft = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  _t = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Lt = (e, t, n, r) => {
    let s, o, i;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = n !== !1 && de(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  kt = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Dt = (e) => {
    if (!e) return null;
    if (U(e)) return e;
    let t = e.length;
    if (!De(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Bt = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && de(Uint8Array)),
  Ut = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  qt = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Mt = C('HTMLFormElement'),
  It = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  ge = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Ht = C('RegExp'),
  qe = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    H(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  vt = (e) => {
    qe(e, (t, n) => {
      if (N(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (N(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  $t = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return U(e) ? r(e) : r(String(e).split(t)), n;
  },
  zt = () => {},
  Jt = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  te = 'abcdefghijklmnopqrstuvwxyz',
  be = '0123456789',
  Me = { DIGIT: be, ALPHA: te, ALPHA_DIGIT: te + te.toUpperCase() + be },
  Wt = (e = 16, t = Me.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Vt(e) {
  return !!(
    e &&
    N(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const Kt = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Z(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[s] = r;
            const o = U(r) ? [] : {};
            return (
              H(r, (i, c) => {
                const f = n(i, s + 1);
                !I(f) && (o[c] = f);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Gt = C('AsyncFunction'),
  Xt = (e) => e && (Z(e) || N(e)) && N(e.then) && N(e.catch),
  Ie = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          k.addEventListener(
            'message',
            ({ source: s, data: o }) => {
              s === k && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), k.postMessage(n, '*');
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == 'function',
    N(k.postMessage)
  ),
  Zt =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(k)
      : (typeof process < 'u' && process.nextTick) || Ie,
  a = {
    isArray: U,
    isArrayBuffer: ke,
    isBuffer: ht,
    isFormData: Rt,
    isArrayBufferView: mt,
    isString: yt,
    isNumber: De,
    isBoolean: gt,
    isObject: Z,
    isPlainObject: z,
    isReadableStream: Ot,
    isRequest: At,
    isResponse: Nt,
    isHeaders: Ct,
    isUndefined: I,
    isDate: bt,
    isFile: wt,
    isBlob: xt,
    isRegExp: Ht,
    isFunction: N,
    isStream: St,
    isURLSearchParams: Tt,
    isTypedArray: Bt,
    isFileList: Et,
    forEach: H,
    merge: oe,
    extend: Pt,
    trim: jt,
    stripBOM: Ft,
    inherits: _t,
    toFlatObject: Lt,
    kindOf: G,
    kindOfTest: C,
    endsWith: kt,
    toArray: Dt,
    forEachEntry: Ut,
    matchAll: qt,
    isHTMLForm: Mt,
    hasOwnProperty: ge,
    hasOwnProp: ge,
    reduceDescriptors: qe,
    freezeMethods: vt,
    toObjectSet: $t,
    toCamelCase: It,
    noop: zt,
    toFiniteNumber: Jt,
    findKey: Be,
    global: k,
    isContextDefined: Ue,
    ALPHABET: Me,
    generateString: Wt,
    isSpecCompliantForm: Vt,
    toJSONObject: Kt,
    isAsyncFn: Gt,
    isThenable: Xt,
    setImmediate: Ie,
    asap: Zt,
  };
function y(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
a.inherits(y, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const He = y.prototype,
  ve = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  ve[e] = { value: e };
});
Object.defineProperties(y, ve);
Object.defineProperty(He, 'isAxiosError', { value: !0 });
y.from = (e, t, n, r, s, o) => {
  const i = Object.create(He);
  return (
    a.toFlatObject(
      e,
      i,
      function (f) {
        return f !== Error.prototype;
      },
      (c) => c !== 'isAxiosError'
    ),
    y.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Qt = null;
function ie(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function $e(e) {
  return a.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function we(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = $e(s)), !n && o ? '[' + s + ']' : s;
        })
        .join(n ? '.' : '')
    : t;
}
function Yt(e) {
  return a.isArray(e) && !e.some(ie);
}
const en = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Q(e, t, n) {
  if (!a.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = a.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, h) {
        return !a.isUndefined(h[g]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || u,
    o = n.dots,
    i = n.indexes,
    f = (n.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError('visitor must be a function');
  function l(p) {
    if (p === null) return '';
    if (a.isDate(p)) return p.toISOString();
    if (!f && a.isBlob(p))
      throw new y('Blob is not supported. Use a Buffer instead.');
    return a.isArrayBuffer(p) || a.isTypedArray(p)
      ? f && typeof Blob == 'function'
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function u(p, g, h) {
    let w = p;
    if (p && !h && typeof p == 'object') {
      if (a.endsWith(g, '{}'))
        (g = r ? g : g.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (a.isArray(p) && Yt(p)) ||
        ((a.isFileList(p) || a.endsWith(g, '[]')) && (w = a.toArray(p)))
      )
        return (
          (g = $e(g)),
          w.forEach(function (R, P) {
            !(a.isUndefined(R) || R === null) &&
              t.append(
                i === !0 ? we([g], P, o) : i === null ? g : g + '[]',
                l(R)
              );
          }),
          !1
        );
    }
    return ie(p) ? !0 : (t.append(we(h, g, o), l(p)), !1);
  }
  const d = [],
    b = Object.assign(en, {
      defaultVisitor: u,
      convertValue: l,
      isVisitable: ie,
    });
  function E(p, g) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error('Circular reference detected in ' + g.join('.'));
      d.push(p),
        a.forEach(p, function (w, S) {
          (!(a.isUndefined(w) || w === null) &&
            s.call(t, w, a.isString(S) ? S.trim() : S, g, b)) === !0 &&
            E(w, g ? g.concat(S) : [S]);
        }),
        d.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError('data must be an object');
  return E(e), t;
}
function xe(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function pe(e, t) {
  (this._pairs = []), e && Q(e, this, t);
}
const ze = pe.prototype;
ze.append = function (t, n) {
  this._pairs.push([t, n]);
};
ze.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, xe);
      }
    : xe;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + '=' + n(s[1]);
    }, '')
    .join('&');
};
function tn(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Je(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || tn;
  a.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = a.isURLSearchParams(t) ? t.toString() : new pe(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf('#');
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class Ee {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const We = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  nn = typeof URLSearchParams < 'u' ? URLSearchParams : pe,
  rn = typeof FormData < 'u' ? FormData : null,
  sn = typeof Blob < 'u' ? Blob : null,
  on = {
    isBrowser: !0,
    classes: { URLSearchParams: nn, FormData: rn, Blob: sn },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  he = typeof window < 'u' && typeof document < 'u',
  ae = (typeof navigator == 'object' && navigator) || void 0,
  an =
    he &&
    (!ae || ['ReactNative', 'NativeScript', 'NS'].indexOf(ae.product) < 0),
  cn =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  ln = (he && window.location.href) || 'http://localhost',
  un = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: he,
        hasStandardBrowserEnv: an,
        hasStandardBrowserWebWorkerEnv: cn,
        navigator: ae,
        origin: ln,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  T = { ...un, ...on };
function fn(e, t) {
  return Q(
    e,
    new T.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return T.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function dn(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function pn(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Ve(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === '__proto__') return !0;
    const c = Number.isFinite(+i),
      f = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      f
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = pn(s[i])),
          !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(dn(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function hn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const v = {
  transitional: We,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        s = r.indexOf('application/json') > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return s ? JSON.stringify(Ve(t)) : t;
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t) ||
        a.isReadableStream(t)
      )
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let c;
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return fn(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const f = this.env && this.env.FormData;
          return Q(c ? { 'files[]': t } : t, f && new f(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType('application/json', !1), hn(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || v.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === 'json';
      if (a.isResponse(t) || a.isReadableStream(t)) return t;
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (i)
            throw c.name === 'SyntaxError'
              ? y.from(c, y.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: T.classes.FormData, Blob: T.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  v.headers[e] = {};
});
const mn = a.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  yn = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(':')),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && mn[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Se = Symbol('internals');
function M(e) {
  return e && String(e).trim().toLowerCase();
}
function J(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(J) : String(e);
}
function gn(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const bn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ne(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function wn(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function xn(e, t) {
  const n = a.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
let A = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, l) {
      const u = M(f);
      if (!u) throw new Error('header name must be a non-empty string');
      const d = a.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || (l === void 0 && s[d] !== !1)) &&
        (s[d || f] = J(c));
    }
    const i = (c, f) => a.forEach(c, (l, u) => o(l, u, f));
    if (a.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !bn(t)) i(yn(t), n);
    else if (a.isHeaders(t)) for (const [c, f] of t.entries()) o(f, c, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = M(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return gn(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = M(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ne(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = M(i)), i)) {
        const c = a.findKey(r, i);
        c && (!n || ne(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ne(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (s, o) => {
        const i = a.findKey(r, o);
        if (i) {
          (n[i] = J(s)), delete n[o];
          return;
        }
        const c = t ? wn(o) : String(o).trim();
        c !== o && delete n[o], (n[c] = J(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Se] = this[Se] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const c = M(i);
      r[c] || (xn(s, i), (r[c] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
A.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(A);
function re(e, t) {
  const n = this || v,
    r = t || n,
    s = A.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function Ke(e) {
  return !!(e && e.__CANCEL__);
}
function q(e, t, n) {
  y.call(this, e ?? 'canceled', y.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
a.inherits(q, y, { __CANCEL__: !0 });
function Ge(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new y(
          'Request failed with status code ' + n.status,
          [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function En(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Sn(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const l = Date.now(),
        u = r[o];
      i || (i = l), (n[s] = f), (r[s] = l);
      let d = o,
        b = 0;
      for (; d !== s; ) (b += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), l - i < t)) return;
      const E = u && l - u;
      return E ? Math.round((b * 1e3) / E) : void 0;
    }
  );
}
function Rn(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const i = (l, u = Date.now()) => {
    (n = u), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, l);
  };
  return [
    (...l) => {
      const u = Date.now(),
        d = u - n;
      d >= r
        ? i(l, u)
        : ((s = l),
          o ||
            (o = setTimeout(() => {
              (o = null), i(s);
            }, r - d)));
    },
    () => s && i(s),
  ];
}
const V = (e, t, n = 3) => {
    let r = 0;
    const s = Sn(50, 250);
    return Rn((o) => {
      const i = o.loaded,
        c = o.lengthComputable ? o.total : void 0,
        f = i - r,
        l = s(f),
        u = i <= c;
      r = i;
      const d = {
        loaded: i,
        total: c,
        progress: c ? i / c : void 0,
        bytes: f,
        rate: l || void 0,
        estimated: l && c && u ? (c - i) / l : void 0,
        event: o,
        lengthComputable: c != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(d);
    }, n);
  },
  Re = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Te =
    (e) =>
    (...t) =>
      a.asap(() => e(...t)),
  Tn = T.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, T.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(T.origin),
        T.navigator && /(msie|trident)/i.test(T.navigator.userAgent)
      )
    : () => !0,
  On = T.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const i = [e + '=' + encodeURIComponent(t)];
          a.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
            a.isString(r) && i.push('path=' + r),
            a.isString(s) && i.push('domain=' + s),
            o === !0 && i.push('secure'),
            (document.cookie = i.join('; '));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function An(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Nn(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Xe(e, t) {
  return e && !An(t) ? Nn(e, t) : t;
}
const Oe = (e) => (e instanceof A ? { ...e } : e);
function B(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, b) {
    return a.isPlainObject(l) && a.isPlainObject(u)
      ? a.merge.call({ caseless: b }, l, u)
      : a.isPlainObject(u)
      ? a.merge({}, u)
      : a.isArray(u)
      ? u.slice()
      : u;
  }
  function s(l, u, d, b) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l, d, b);
    } else return r(l, u, d, b);
  }
  function o(l, u) {
    if (!a.isUndefined(u)) return r(void 0, u);
  }
  function i(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, d) {
    if (d in t) return r(l, u);
    if (d in e) return r(void 0, l);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (l, u, d) => s(Oe(l), Oe(u), d, !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = f[u] || s,
        b = d(e[u], t[u], u);
      (a.isUndefined(b) && d !== c) || (n[u] = b);
    }),
    n
  );
}
const Ze = (e) => {
    const t = B({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: i,
      auth: c,
    } = t;
    (t.headers = i = A.from(i)),
      (t.url = Je(Xe(t.baseURL, t.url), e.params, e.paramsSerializer)),
      c &&
        i.set(
          'Authorization',
          'Basic ' +
            btoa(
              (c.username || '') +
                ':' +
                (c.password ? unescape(encodeURIComponent(c.password)) : '')
            )
        );
    let f;
    if (a.isFormData(n)) {
      if (T.hasStandardBrowserEnv || T.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((f = i.getContentType()) !== !1) {
        const [l, ...u] = f
          ? f
              .split(';')
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        i.setContentType([l || 'multipart/form-data', ...u].join('; '));
      }
    }
    if (
      T.hasStandardBrowserEnv &&
      (r && a.isFunction(r) && (r = r(t)), r || (r !== !1 && Tn(t.url)))
    ) {
      const l = s && o && On.read(o);
      l && i.set(s, l);
    }
    return t;
  },
  Cn = typeof XMLHttpRequest < 'u',
  jn =
    Cn &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Ze(e);
        let o = s.data;
        const i = A.from(s.headers).normalize();
        let { responseType: c, onUploadProgress: f, onDownloadProgress: l } = s,
          u,
          d,
          b,
          E,
          p;
        function g() {
          E && E(),
            p && p(),
            s.cancelToken && s.cancelToken.unsubscribe(u),
            s.signal && s.signal.removeEventListener('abort', u);
        }
        let h = new XMLHttpRequest();
        h.open(s.method.toUpperCase(), s.url, !0), (h.timeout = s.timeout);
        function w() {
          if (!h) return;
          const R = A.from(
              'getAllResponseHeaders' in h && h.getAllResponseHeaders()
            ),
            O = {
              data:
                !c || c === 'text' || c === 'json'
                  ? h.responseText
                  : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: R,
              config: e,
              request: h,
            };
          Ge(
            function (L) {
              n(L), g();
            },
            function (L) {
              r(L), g();
            },
            O
          ),
            (h = null);
        }
        'onloadend' in h
          ? (h.onloadend = w)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 &&
                  !(h.responseURL && h.responseURL.indexOf('file:') === 0)) ||
                setTimeout(w);
            }),
          (h.onabort = function () {
            h &&
              (r(new y('Request aborted', y.ECONNABORTED, e, h)), (h = null));
          }),
          (h.onerror = function () {
            r(new y('Network Error', y.ERR_NETWORK, e, h)), (h = null);
          }),
          (h.ontimeout = function () {
            let P = s.timeout
              ? 'timeout of ' + s.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const O = s.transitional || We;
            s.timeoutErrorMessage && (P = s.timeoutErrorMessage),
              r(
                new y(
                  P,
                  O.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
                  e,
                  h
                )
              ),
              (h = null);
          }),
          o === void 0 && i.setContentType(null),
          'setRequestHeader' in h &&
            a.forEach(i.toJSON(), function (P, O) {
              h.setRequestHeader(O, P);
            }),
          a.isUndefined(s.withCredentials) ||
            (h.withCredentials = !!s.withCredentials),
          c && c !== 'json' && (h.responseType = s.responseType),
          l && (([b, p] = V(l, !0)), h.addEventListener('progress', b)),
          f &&
            h.upload &&
            (([d, E] = V(f)),
            h.upload.addEventListener('progress', d),
            h.upload.addEventListener('loadend', E)),
          (s.cancelToken || s.signal) &&
            ((u = (R) => {
              h &&
                (r(!R || R.type ? new q(null, e, h) : R),
                h.abort(),
                (h = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal &&
              (s.signal.aborted ? u() : s.signal.addEventListener('abort', u)));
        const S = En(s.url);
        if (S && T.protocols.indexOf(S) === -1) {
          r(new y('Unsupported protocol ' + S + ':', y.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(o || null);
      });
    },
  Pn = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (l) {
        if (!s) {
          (s = !0), c();
          const u = l instanceof Error ? l : this.reason;
          r.abort(
            u instanceof y ? u : new q(u instanceof Error ? u.message : u)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
        }, t);
      const c = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((l) => {
            l.unsubscribe
              ? l.unsubscribe(o)
              : l.removeEventListener('abort', o);
          }),
          (e = null));
      };
      e.forEach((l) => l.addEventListener('abort', o));
      const { signal: f } = r;
      return (f.unsubscribe = () => a.asap(c)), f;
    }
  },
  Fn = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  _n = async function* (e, t) {
    for await (const n of Ln(e)) yield* Fn(n, t);
  },
  Ln = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Ae = (e, t, n, r) => {
    const s = _n(e, t);
    let o = 0,
      i,
      c = (f) => {
        i || ((i = !0), r && r(f));
      };
    return new ReadableStream(
      {
        async pull(f) {
          try {
            const { done: l, value: u } = await s.next();
            if (l) {
              c(), f.close();
              return;
            }
            let d = u.byteLength;
            if (n) {
              let b = (o += d);
              n(b);
            }
            f.enqueue(new Uint8Array(u));
          } catch (l) {
            throw (c(l), l);
          }
        },
        cancel(f) {
          return c(f), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Y =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  Qe = Y && typeof ReadableStream == 'function',
  kn =
    Y &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Ye = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Dn =
    Qe &&
    Ye(() => {
      let e = !1;
      const t = new Request(T.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  Ne = 64 * 1024,
  ce = Qe && Ye(() => a.isReadableStream(new Response('').body)),
  K = { stream: ce && ((e) => e.body) };
Y &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !K[t] &&
        (K[t] = a.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new y(
                `Response type '${t}' is not supported`,
                y.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Bn = async (e) => {
    if (e == null) return 0;
    if (a.isBlob(e)) return e.size;
    if (a.isSpecCompliantForm(e))
      return (
        await new Request(T.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (a.isArrayBufferView(e) || a.isArrayBuffer(e)) return e.byteLength;
    if ((a.isURLSearchParams(e) && (e = e + ''), a.isString(e)))
      return (await kn(e)).byteLength;
  },
  Un = async (e, t) => {
    const n = a.toFiniteNumber(e.getContentLength());
    return n ?? Bn(t);
  },
  qn =
    Y &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: c,
        onUploadProgress: f,
        responseType: l,
        headers: u,
        withCredentials: d = 'same-origin',
        fetchOptions: b,
      } = Ze(e);
      l = l ? (l + '').toLowerCase() : 'text';
      let E = Pn([s, o && o.toAbortSignal()], i),
        p;
      const g =
        E &&
        E.unsubscribe &&
        (() => {
          E.unsubscribe();
        });
      let h;
      try {
        if (
          f &&
          Dn &&
          n !== 'get' &&
          n !== 'head' &&
          (h = await Un(u, r)) !== 0
        ) {
          let O = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            F;
          if (
            (a.isFormData(r) &&
              (F = O.headers.get('content-type')) &&
              u.setContentType(F),
            O.body)
          ) {
            const [L, $] = Re(h, V(Te(f)));
            r = Ae(O.body, Ne, L, $);
          }
        }
        a.isString(d) || (d = d ? 'include' : 'omit');
        const w = 'credentials' in Request.prototype;
        p = new Request(t, {
          ...b,
          signal: E,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: w ? d : void 0,
        });
        let S = await fetch(p);
        const R = ce && (l === 'stream' || l === 'response');
        if (ce && (c || (R && g))) {
          const O = {};
          ['status', 'statusText', 'headers'].forEach((me) => {
            O[me] = S[me];
          });
          const F = a.toFiniteNumber(S.headers.get('content-length')),
            [L, $] = (c && Re(F, V(Te(c), !0))) || [];
          S = new Response(
            Ae(S.body, Ne, L, () => {
              $ && $(), g && g();
            }),
            O
          );
        }
        l = l || 'text';
        let P = await K[a.findKey(K, l) || 'text'](S, e);
        return (
          !R && g && g(),
          await new Promise((O, F) => {
            Ge(O, F, {
              data: P,
              headers: A.from(S.headers),
              status: S.status,
              statusText: S.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (w) {
        throw (
          (g && g(),
          w && w.name === 'TypeError' && /fetch/i.test(w.message)
            ? Object.assign(new y('Network Error', y.ERR_NETWORK, e, p), {
                cause: w.cause || w,
              })
            : y.from(w, w && w.code, e, p))
        );
      }
    }),
  le = { http: Qt, xhr: jn, fetch: qn };
a.forEach(le, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Ce = (e) => `- ${e}`,
  Mn = (e) => a.isFunction(e) || e === null || e === !1,
  et = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !Mn(n) && ((r = le[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new y(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || '#' + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([c, f]) =>
            `adapter ${c} ` +
            (f === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Ce).join(`
`)
            : ' ' + Ce(o[0])
          : 'as no adapter specified';
        throw new y(
          'There is no suitable adapter to dispatch the request ' + i,
          'ERR_NOT_SUPPORT'
        );
      }
      return r;
    },
    adapters: le,
  };
function se(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new q(null, e);
}
function je(e) {
  return (
    se(e),
    (e.headers = A.from(e.headers)),
    (e.data = re.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    et
      .getAdapter(e.adapter || v.adapter)(e)
      .then(
        function (r) {
          return (
            se(e),
            (r.data = re.call(e, e.transformResponse, r)),
            (r.headers = A.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Ke(r) ||
              (se(e),
              r &&
                r.response &&
                ((r.response.data = re.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = A.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const tt = '1.7.9',
  ee = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    ee[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const Pe = {};
ee.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      '[Axios v' +
      tt +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? '. ' + r : '')
    );
  }
  return (o, i, c) => {
    if (t === !1)
      throw new y(
        s(i, ' has been removed' + (n ? ' in ' + n : '')),
        y.ERR_DEPRECATED
      );
    return (
      n &&
        !Pe[i] &&
        ((Pe[i] = !0),
        console.warn(
          s(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(o, i, c) : !0
    );
  };
};
ee.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function In(e, t, n) {
  if (typeof e != 'object')
    throw new y('options must be an object', y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const c = e[o],
        f = c === void 0 || i(c, o, e);
      if (f !== !0)
        throw new y('option ' + o + ' must be ' + f, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new y('Unknown option ' + o, y.ERR_BAD_OPTION);
  }
}
const W = { assertOptions: In, validators: ee },
  j = W.validators;
let D = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Ee(), response: new Ee() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, '') : '';
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = B(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      W.assertOptions(
        r,
        {
          silentJSONParsing: j.transitional(j.boolean),
          forcedJSONParsing: j.transitional(j.boolean),
          clarifyTimeoutError: j.transitional(j.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : W.assertOptions(
              s,
              { encode: j.function, serialize: j.function },
              !0
            )),
      W.assertOptions(
        n,
        {
          baseUrl: j.spelling('baseURL'),
          withXsrfToken: j.spelling('withXSRFToken'),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (p) => {
          delete o[p];
        }
      ),
      (n.headers = A.concat(i, o));
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == 'function' && g.runWhen(n) === !1) ||
        ((f = f && g.synchronous), c.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u,
      d = 0,
      b;
    if (!f) {
      const p = [je.bind(this), void 0];
      for (
        p.unshift.apply(p, c),
          p.push.apply(p, l),
          b = p.length,
          u = Promise.resolve(n);
        d < b;

      )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    b = c.length;
    let E = n;
    for (d = 0; d < b; ) {
      const p = c[d++],
        g = c[d++];
      try {
        E = p(E);
      } catch (h) {
        g.call(this, h);
        break;
      }
    }
    try {
      u = je.call(this, E);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, b = l.length; d < b; ) u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = B(this.defaults, t);
    const n = Xe(t.baseURL, t.url);
    return Je(n, t.params, t.paramsSerializer);
  }
};
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
  D.prototype[t] = function (n, r) {
    return this.request(
      B(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
a.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, i, c) {
      return this.request(
        B(c || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (D.prototype[t] = n()), (D.prototype[t + 'Form'] = n(!0));
});
let Hn = class nt {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((c) => {
          r.subscribe(c), (o = c);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, c) {
        r.reason || ((r.reason = new q(o, i, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new nt(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function vn(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function $n(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ue = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ue).forEach(([e, t]) => {
  ue[t] = e;
});
function rt(e) {
  const t = new D(e),
    n = Le(D.prototype.request, t);
  return (
    a.extend(n, D.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return rt(B(e, s));
    }),
    n
  );
}
const x = rt(v);
x.Axios = D;
x.CanceledError = q;
x.CancelToken = Hn;
x.isCancel = Ke;
x.VERSION = tt;
x.toFormData = Q;
x.AxiosError = y;
x.Cancel = x.CanceledError;
x.all = function (t) {
  return Promise.all(t);
};
x.spread = vn;
x.isAxiosError = $n;
x.mergeConfig = B;
x.AxiosHeaders = A;
x.formToJSON = (e) => Ve(a.isHTMLForm(e) ? new FormData(e) : e);
x.getAdapter = et.getAdapter;
x.HttpStatusCode = ue;
x.default = x;
const {
    Axios: Gn,
    AxiosError: Xn,
    CanceledError: Zn,
    isCancel: Qn,
    CancelToken: Yn,
    VERSION: er,
    all: tr,
    Cancel: nr,
    isAxiosError: rr,
    spread: sr,
    toFormData: or,
    AxiosHeaders: ir,
    HttpStatusCode: ar,
    formToJSON: cr,
    getAdapter: lr,
    mergeConfig: ur,
  } = x,
  zn = () => {
    const [e, t] = _.useState({
        email: '',
        gender: '',
        age: '',
        weight: '',
        workoutPlan: '',
        budgetStyle: '',
      }),
      [n, r] = _.useState(!1),
      [s, o] = _.useState(''),
      i = (f) => {
        t({ ...e, [f.target.name]: f.target.value });
      },
      c = async (f) => {
        f.preventDefault(), r(!0), o('');
        try {
          const l = await x.post('http://localhost:3301/ai/workout-plan', e);
          o(l.data.message),
            ye.success('Workout plan successfully sent to your email!');
        } catch {
          o('Error processing request.'),
            ye.error('Error processing the request.');
        }
        r(!1);
      };
    return m.jsxs(m.Fragment, {
      children: [
        m.jsxs('form', {
          onSubmit: c,
          className:
            'space-y-6 max-w-xl mx-auto p-6 bg-slate-700 rounded-lg shadow-lg',
          children: [
            m.jsxs('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
              children: [
                m.jsx('input', {
                  type: 'email',
                  name: 'email',
                  placeholder: 'Email',
                  required: !0,
                  onChange: i,
                  className:
                    'input text-gray-700 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 rounded-lg p-3 transition-all duration-300',
                }),
                m.jsxs('select', {
                  name: 'gender',
                  onChange: i,
                  required: !0,
                  className:
                    'input text-gray-700 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 rounded-lg p-3 transition-all duration-300',
                  children: [
                    m.jsx('option', {
                      value: '',
                      className: 'text-gray-500',
                      children: 'Select Gender',
                    }),
                    m.jsx('option', {
                      value: 'male',
                      className: 'text-gray-700',
                      children: 'Male',
                    }),
                    m.jsx('option', {
                      value: 'female',
                      className: 'text-gray-700',
                      children: 'Female',
                    }),
                  ],
                }),
              ],
            }),
            m.jsxs('div', {
              className: 'grid grid-cols-1 md:grid-cols-3 gap-4',
              children: [
                m.jsx('input', {
                  type: 'number',
                  name: 'age',
                  placeholder: 'Age',
                  required: !0,
                  onChange: i,
                  className:
                    'input text-gray-700 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 rounded-lg p-3 transition-all duration-300',
                }),
                m.jsx('input', {
                  type: 'number',
                  name: 'weight',
                  placeholder: 'Weight (kg)',
                  required: !0,
                  onChange: i,
                  className:
                    'input text-gray-700 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 rounded-lg p-3 transition-all duration-300',
                }),
                m.jsxs('select', {
                  name: 'workoutPlan',
                  onChange: i,
                  required: !0,
                  className:
                    'input text-gray-700 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 rounded-lg p-3 transition-all duration-300',
                  children: [
                    m.jsx('option', {
                      value: '',
                      className: 'text-gray-500',
                      children: 'Select Workout Plan',
                    }),
                    m.jsx('option', {
                      value: 'fat_loss',
                      className: 'text-gray-700',
                      children: 'Fat Loss',
                    }),
                    m.jsx('option', {
                      value: 'muscle_gain',
                      className: 'text-gray-700',
                      children: 'Muscle Gain',
                    }),
                    m.jsx('option', {
                      value: 'strength_training',
                      className: 'text-gray-700',
                      children: 'Strength Training',
                    }),
                    m.jsx('option', {
                      value: 'endurance_training',
                      className: 'text-gray-700',
                      children: 'Endurance Training',
                    }),
                    m.jsx('option', {
                      value: 'flexibility',
                      className: 'text-gray-700',
                      children: 'Flexibility',
                    }),
                    m.jsx('option', {
                      value: 'full_body',
                      className: 'text-gray-700',
                      children: 'Full Body',
                    }),
                  ],
                }),
              ],
            }),
            m.jsxs('select', {
              name: 'budgetStyle',
              onChange: i,
              required: !0,
              className:
                'input text-gray-700 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 rounded-lg p-3 transition-all duration-300',
              children: [
                m.jsx('option', {
                  value: '',
                  className: 'text-gray-500',
                  children: 'Select Budget',
                }),
                m.jsx('option', {
                  value: 'low',
                  className: 'text-gray-700',
                  children: 'Budget-Friendly',
                }),
                m.jsx('option', {
                  value: 'standard',
                  className: 'text-gray-700',
                  children: 'Standard',
                }),
                m.jsx('option', {
                  value: 'rich',
                  className: 'text-gray-700',
                  children: 'Rich',
                }),
              ],
            }),
            m.jsx('button', {
              type: 'submit',
              disabled: n,
              className: `w-full ${
                n
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              } transition font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2`,
              children: n
                ? 'Generating...'
                : m.jsxs(m.Fragment, {
                    children: ['Generate Plan ', m.jsx(lt, {})],
                  }),
            }),
            s &&
              m.jsx('p', {
                className: 'text-center text-green-400',
                children: s,
              }),
          ],
        }),
        m.jsx(st, { position: 'top-right', autoClose: 5e3 }),
      ],
    });
  },
  Jn = () =>
    m.jsx('footer', {
      className: 'bg-gray-800 text-white py-6 mt-15 w-full',
      children: m.jsxs('div', {
        className:
          'max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center',
        children: [
          m.jsxs('div', {
            className:
              'text-xl font-semibold flex items-center gap-2 mb-4 md:mb-0',
            children: [
              m.jsx(_e, { className: 'text-red-500', size: 24 }),
              'Grind Ai',
            ],
          }),
          m.jsxs('div', {
            className: 'flex items-center gap-3 mb-4 md:mb-0',
            children: [
              m.jsx(dt, { className: 'text-white', size: 20 }),
              m.jsx('a', {
                href: 'mailto:manom8193@gmail.com',
                className: 'text-sm hover:text-blue-400 transition-colors',
                children: 'manom8193@gmail.com',
              }),
            ],
          }),
          m.jsx('div', {
            className: 'text-sm text-gray-400',
            children: 'Developed by Manoj',
          }),
        ],
      }),
    }),
  fr = () =>
    m.jsxs('div', {
      className:
        'min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white ',
      children: [
        m.jsxs('div', {
          className: 'max-w-3xl w-full bg-gray-800 shadow-lg rounded-2xl p-8',
          children: [
            m.jsxs('div', {
              className: 'text-center mb-6',
              children: [
                m.jsxs('h1', {
                  className:
                    'text-4xl font-bold flex items-center justify-center gap-3',
                  children: [
                    m.jsx(_e, { className: 'text-red-500', size: 40 }),
                    ' Grind AI',
                  ],
                }),
                m.jsx('p', {
                  className: 'text-gray-400 mt-2',
                  children: 'AI-Powered Fitness & Nutrition Planner',
                }),
              ],
            }),
            m.jsx(zn, {}),
          ],
        }),
        m.jsx(Jn, {}),
      ],
    });
export { fr as default };
