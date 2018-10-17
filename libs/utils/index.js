import * as scroll from './scroll';
import * as throttle from './throttle';
import validator from './validator/index';
import listeners from './listeners';

export default {
    ...scroll,
    ...throttle,
    $validator: validator,
    ...listeners,
};
