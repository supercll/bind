Function.prototype.call = function (context, ...params) {
    context = context == null ? window : context;
    if (!(context instanceof Object)) {
        context = Object(context);
    }
};
