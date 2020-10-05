Function.prototype.ccall = function (context, ...params) {
    context = context == null ? window : context;
    if (!(context instanceof Object)) {
        context = Object(context);
    }

    const fn = Symbol("fn");
    context[fn] = this;
    let res = context[fn](...params);
    delete context[fn];
    return res;
};

Function.prototype.cbind = function (context, ...params) {
    return function (...args) {
        this.ccall(context, ...params.concat(args));
    };
};
