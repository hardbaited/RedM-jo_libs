import { r as u, j as i, b as f, d as m } from "./index-react-BgBOD2EG.js";
import {
  u as g,
  P as h,
  T as x,
  C as y,
} from "./index-react-three-Bw4d-MPV.js";
import { M as a } from "./index-threejs-CnVPMkYW.js";
import "./index-DWFQb4A4.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) c(o);
  new MutationObserver((o) => {
    for (const n of o)
      if (n.type === "childList")
        for (const r of n.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && c(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const n = {};
    return (
      o.integrity && (n.integrity = o.integrity),
      o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function c(o) {
    if (o.ep) return;
    o.ep = !0;
    const n = s(o);
    fetch(o.href, n);
  }
})();
const l = () => !window.invokeNative,
  j = () => { },
  z = (e, t) => (e > 0 && e < 90 ? t : (e > -180 && e < -90) || e > 0 ? -t : t),
  p = (e, t) => {
    const s = u.useRef(j);
    u.useEffect(() => {
      s.current = t;
    }, [t]),
      u.useEffect(() => {
        const c = (o) => {
          const { action: n, data: r } = o.data;
          s.current && n === e && s.current(r);
        };
        return (
          window.addEventListener("message", c),
          () => window.removeEventListener("message", c)
        );
      }, [e]);
  };
async function v(e, t, s) {
  if (l()) return await new Promise((n) => n);
  const c = {
    method: "post",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(t),
  };
  return await (
    await fetch(`https://${GetParentResourceName()}/gizmo:${e}`, c)
  ).json();
}
const R = () => {
  const { camera: e } = g();
  return (
    p("SetCameraPosition", ({ position: t, rotation: s }) => {
      e.position.set(t.x, t.z, -t.y),
        (e.rotation.order = "YZX"),
        s &&
        e.rotation.set(
          a.degToRad(s.x),
          a.degToRad(z(s.x, s.z)),
          a.degToRad(s.y)
        ),
        e.updateProjectionMatrix();
    }),
    i.jsx(h, {
      position: [0, 0, 10],
      makeDefault: !0,
      onUpdate: (t) => t.updateProjectionMatrix(),
    })
  );
},
  T = () => {
    const e = u.useRef(null),
      [t, s] = u.useState(),
      [c, o] = u.useState("translate"),
      n = async () => {
        const r = {
          handle: t,
          position: {
            x: e.current.position.x,
            y: -e.current.position.z,
            z: e.current.position.y,
          },
          rotation: {
            x: a.radToDeg(e.current.rotation.x),
            y: a.radToDeg(-e.current.rotation.z),
            z: a.radToDeg(e.current.rotation.y),
          },
        },
          d = await v("UpdateEntity", r);
        (d == null ? void 0 : d.status) !== "ok" &&
          (e.current.position.set(
            d.position.x,
            d.position.z,
            -d.position.y
          ),
            (e.current.rotation.order = "YZX"),
            e.current.rotation.set(
              a.degToRad(d.rotation.x),
              a.degToRad(d.rotation.z),
              a.degToRad(d.rotation.y)
            ));
      };
    return (
      p("SetupGizmo", (r) => {
        s(r.handle),
          r.handle &&
          (e.current.position.set(
            r.position.x,
            r.position.z,
            -r.position.y
          ),
            (e.current.rotation.order = "YZX"),
            e.current.rotation.set(
              a.degToRad(r.rotation.x),
              a.degToRad(r.rotation.z),
              a.degToRad(r.rotation.y)
            ),
            r.gizmoMode && o(r.gizmoMode));
      }),
      p("SetGizmoMode", (r) => {
        o(r);
      }),
      i.jsx(i.Fragment, {
        children: i.jsxs(u.Suspense, {
          fallback: i.jsx("p", { children: "Loading..." }),
          children: [
            t != null &&
            i.jsx(x, { size: 0.5, object: e, mode: c, onObjectChange: n }),
            i.jsx("mesh", { ref: e }),
          ],
        }),
      })
    );
  },
  w = () =>
    i.jsxs(y, { style: { zIndex: 1 }, children: [i.jsx(R, {}), i.jsx(T, {})] });
function E() {
  return i.jsx("div", {
    style: { width: "100vw", height: "100vh" },
    children: i.jsx(w, {}),
  });
}
f.createRoot(document.getElementById("root")).render(
  i.jsx(m.StrictMode, { children: i.jsx(E, {}) })
);
if (l()) {
  const e = document.getElementById("root");
  (e.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")'),
    (e.style.backgroundSize = "cover"),
    (e.style.backgroundRepeat = "no-repeat"),
    (e.style.backgroundPosition = "center");
}
