import * as scroll from './scroll';
import * as throttle from './throttle';
import listeners from './listeners';
import extend from './extendEx';

export default {
    ...scroll,
    ...throttle,
    ...listeners,
    extend,
};
