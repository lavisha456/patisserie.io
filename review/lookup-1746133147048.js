(function(window, undefined) {
  var dictionary = {
    "e0ac49b2-9f02-4fb0-bea1-f55f272ad52c": "About Page",
    "c7ef36e5-fe7e-4687-976e-aa50218f0434": "Shop screen (frosting)",
    "170502f8-f42c-43a0-8bea-544daa83903f": "Shop screen (packing)",
    "27c5d15a-bcf9-42ce-82d6-fbab27b21ace": "Shop screen (tiers)",
    "984943a4-4c4a-474f-9f8e-f78aff85a061": "Shop screen (egg)",
    "bed956bd-57a3-4571-9e47-22d315e576df": "Shop screen (message)",
    "6f628be0-c07e-44d6-8a6f-69e49f92064e": "Shop screen (flavours)",
    "b2767c0b-6e0e-45f1-b36c-3d733b8b884e": "Shop screen (toppings)",
    "79f7658c-0b82-460d-8d7e-dee238de187c": "Order Summary",
    "50592d7b-cd32-4793-8621-7993888fbcfa": "Shop screen (pick up)",
    "6d5b3084-96b2-4644-863b-91f8cad20345": "Shop screen (weight)",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Page",
    "0265fdb0-89c6-4e46-9e16-9880368f72e2": "Bakery Information page",
    "463b82b5-b2f2-45d9-976e-32a8b05c5def": "Post-order form",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);