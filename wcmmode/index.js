require(["http://cdn.rawgit.com/ryanburnette/Qurl/master/qurl.js"], function() {
  var url = Qurl.create();
  if ("wcmmode" in url.query()) {
    // wcmmode exists, remove it
    url.query("wcmmode", false);
  } else {
    // default new wcmmode is disabled
    url.query("wcmmode", "disabled");
  }
  location.reload();
});
