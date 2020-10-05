Function.prototype.call = function (context, ...params) {
    context = context == null ? window : context;
    if (!(context instanceof Object)) {
        context = Object(context);
    }

    const fn = Symbol("fn");
    context[fn] = this;

};
