$traceurRuntime.registerModule("hello.js", [], function() {
  "use strict";
  var __moduleName = "hello.js";
  document.write('Hello world ! from ES6');
  return {};
});
$traceurRuntime.getModule("hello.js" + '');
