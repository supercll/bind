Function.prototype.call = function (context, ...params) {
    if (!(context instanceof Object)) {
        context = Object(context);
    }
};
