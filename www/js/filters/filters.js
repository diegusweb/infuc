app.filter('makeUppercase', function () {
  return function (item) {
    return item.toUpperCase();
  };
});