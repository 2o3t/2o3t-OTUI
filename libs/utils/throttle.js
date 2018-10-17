export const throttle = (fun, delay, time, ctx) => {
    let timeout;
    let startTime = new Date();
    const context = ctx || {};
    fun = fun.bind(context);
    return function() {
        const args = arguments;
        const curTime = new Date();
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        // console.log(curTime - startTime);
        if (curTime - startTime >= time) {
            context.$nextTick ? context.$nextTick(() => {
                fun.call(args);
                startTime = curTime;
            }) : setTimeout(() => {
                fun.call(args);
                startTime = curTime;
            });
        } else { // 没达到触发间隔，重新设定定时器
            timeout = setTimeout(() => {
                context.$nextTick ? context.$nextTick(() => {
                    fun.call(args);
                }) : fun.call(args);
            }, delay);
        }
    };
};
