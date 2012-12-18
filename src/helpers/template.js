Handlebars.registerHelper('template', function(name, options) {
  var context = _.extend({fn: options && options.fn}, this, options ? options.hash : {});
  var output = Thorax.View.prototype.renderTemplate.call(ensureOptionsData(options).data.view, name, context);
  return new Handlebars.SafeString(output);
});

Handlebars.registerHelper('yield', function(options) {
  return ensureOptionsData(options).data.yield && options.data.yield();
});
