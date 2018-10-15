const Listeners = {};
const EventMap = {};

const handleEvent = type => {
    return function(e) {
        const listeners = Listeners[type];
        listeners.forEach(listener => {
            listener(e);
        });
    };
};

export default {
    addEventListener(name, fn) {
        if (!Listeners[name]) {
            Listeners[name] = [];
            EventMap[name] = new handleEvent(name);
            document.addEventListener(name, EventMap[name]);
            console.log('document.addEventListener: ', name);
        }
        Listeners[name].push(fn);
    },
    removeEventListener(name, fn) {
        if (Listeners[name]) {
            const index = Array.prototype.indexOf.call(Listeners[name], fn);
            if (index >= 0) {
                Array.prototype.splice.call(Listeners[name], index, 1);
            }
            if (Listeners[name].length <= 0) {
                delete Listeners[name];
                document.removeEventListener(name, EventMap[name]);
                console.log('document.removeEventListener: ', name);
                delete EventMap[name];
            }
        }
    },
};
