import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@judi/test-vue3-parcel-localhost",
  app: () => System.import("@judi/test-vue3-parcel"),
  activeWhen: ["/vue","/mix"]
});
registerApplication({
  name: "@judi/test-vue3-parcel-tomcatb",
  app: () => System.import("@judi/test-vue3-parcel-tomcatb"),
  activeWhen: ["/vue2","/mix"]
});

registerApplication({
  name: "@judi/test-react-parcel-localhost",
  app: () => System.import("@judi/test-react-parcel"),
  activeWhen: ["/react","/mix"]
});
registerApplication({
  name: "@judi/test-react-parcel-tomcata",
  app: () => System.import("@judi/test-react-parcel-tomcata"),
  activeWhen: ["/react","/mix"]
});
registerApplication({
  name: "@judi/test-react-parcel-tomcatb",
  app: () => System.import("@judi/test-react-parcel-tomcatb"),
  activeWhen: ["/react","/mix"]
});
registerApplication({
  name: "@judi/test-react-parcel-tomcatc",
  app: () => System.import("@judi/test-react-parcel-tomcatc"),
  activeWhen: ["/react","/mix"]
});
registerApplication({
  name: "@judi/test-react4-parcel-wildflya",
  app: () => System.import("@judi/test-react4-parcel-wildflya"),
  activeWhen: ["/react","/mix"]
});

registerApplication({
  name: "test-angular-parcel-localhost",
  app: () => System.import("test-angular-parcel"),
  activeWhen: ["/angular","/mix"]
});
registerApplication({
  name: "test-angular-parcel-tomcatc",
  app: () => System.import("test-angular-parcel-tomcatc"),
  activeWhen: ["/angular","/mix"]
});

/*
//--------------------------- REACT
registerApplication({
  name: "@judi/test-react-parcel",
  app: () => System.import("@judi/test-react-parcel"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@judi/test-react-parcel-localhost",
  app: () => System.import("@judi/test-react-parcel"),
  activeWhen: ["/react","/mix"]
});
registerApplication({
  name: "@judi/test-react-parcel-tomcata",
  app: () => System.import("@judi/test-react-parcel-tomcata"),
  activeWhen: ["/react","/mix"]
});
registerApplication({
  name: "@judi/test-react-parcel-tomcatb",
  app: () => System.import("@judi/test-react-parcel-tomcatb"),
  activeWhen: ["/react","/mix"]
});
registerApplication({
  name: "@judi/test-react-parcel-tomcatc",
  app: () => System.import("@judi/test-react-parcel-tomcatc"),
  activeWhen: ["/react","/mix"]
});
registerApplication({
  name: "@judi/test-react4-parcel-wildflya",
  app: () => System.import("@judi/test-react4-parcel-wildflya"),
  activeWhen: ["/react","/mix"]
});

//--------------------------- VUE
registerApplication({
  name: "@judi/test-vue2-parcel",
  app: () => System.import("@judi/test-vue2-parcel"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@judi/test-vue3-parcel",
  app: () => System.import("@judi/test-vue3-parcel"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@judi/test-vue3-parcel-localhost",
  app: () => System.import("@judi/test-vue3-parcel"),
  activeWhen: ["/vue","/mix"]
});
registerApplication({
  name: "@judi/test-vue3-parcel-tomcatb",
  app: () => System.import("@judi/test-vue3-parcel-tomcatb"),
  activeWhen: ["/vue2","/mix"]
});

//--------------------------- ANGULAR
registerApplication({
  name: "test-angular-parcel",
  app: () => System.import("test-angular-parcel"),
  activeWhen: ["/"]
});
registerApplication({
  name: "test-angular-parcel-localhost",
  app: () => System.import("test-angular-parcel"),
  activeWhen: ["/angular","/mix"]
});
registerApplication({
  name: "test-angular-parcel-tomcatc",
  app: () => System.import("test-angular-parcel-tomcatc"),
  activeWhen: ["/angular","/mix"]
});

//--------------------------- DEFAULT
registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@judi/navbar",
  app: () => System.import("@judi/navbar"),
  activeWhen: ["/"]
});
*/

start({
  urlRerouteOnly: true,
});
