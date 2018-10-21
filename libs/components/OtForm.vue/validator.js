const isEmpty = v => v === '';
const isStr = v => Object.prototype.toString.call(v) === '[object String]';

export default {
    alphabetic(value) {
        const msg = 'Must be a alphabetic value';
        const valid = !Array.isArray(value) && /^[a-zA-Z]*$/.test(value);

        return [ valid, msg ];
    },

    alpha(value) {
        const msg = 'Must only contain letters and numbers';
        const valid = !Array.isArray(value) && /^[a-zA-Z0-9]*$/.test(value);

        return [ valid, msg ];
    },

    alphaDash(value) {
        const msg = 'Must only contain letters, numbers, underscores or dashes';
        const valid = !Array.isArray(value) && /^[a-zA-Z0-9_-]*$/.test(value);

        return [ valid, msg ];
    },

    alphaSpace(value) {
        const msg = 'Must only contain letters, numbers or spaces';
        const valid = !Array.isArray(value) && /^[a-zA-Z0-9\s]*$/.test(value);

        return [ valid, msg ];
    },

    length(value, totalLength) {
        const msg = `Must be ${totalLength} character(s)`;
        const valid = !!value && value.length === Number(totalLength);

        return [ valid, msg ];
    },

    min(value, args) {
        const msg = `Must be greater than or equal to ${args}`;
        const valid = Number(args) <= value;

        return [ valid, msg ];
    },

    max(value, args) {
        const msg = `Must be less than or equal to ${args}`;
        const valid = Number(args) >= value;

        return [ valid, msg ];
    },

    between(value, args) {
        const msg = `Must be between ${args.min} and ${args.max}`;
        const valid = Number(args.min) <= value && Number(args.max) >= value;

        return [ valid, msg ];
    },

    minLength(value, args) {
        const msg = `Must have be ${args} characters`;
        const valid = Number(args) <= value.length;

        return [ valid, msg ];
    },

    maxLength(value, args) {
        const msg = `Must have be ${args} characters`;
        const valid = Number(args) >= value.length;

        return [ valid, msg ];
    },

    betweenLength(value, args) {
        const msg = `Must have between ${args.min} and ${args.max} characters`;
        const valid = Number(args.min) <= value.length && Number(args.max) >= value.length;

        return [ valid, msg ];
    },

    decimal(value, args = {}) {
        const points = args.points || (args.points = '*');
        const msg = 'Must be a decimal<% if (points && points !== "*") { %> with {{ points }} points<% } %>';

        if (value === null || value === undefined || value === '') {
            return [ false, msg ];
        }

        const regexPart = points === '*' ? '*' : `{${points},${points}}`;
        const regex = new RegExp(`^[0-9]*.?[0-9]${regexPart}$`);

        if (!regex.test(value)) {
            return [ false, msg ];
        }

        return [ !Number.isNaN(parseFloat(value)), msg ];
    },

    email(value) {
        const msg = 'Not a valid email';
        const valid = /^(([^<>()[\]\\.,;:#\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/.test(value);

        return [ valid, msg ];
    },

    includes(value, args) {
        const values = args.values;
        const msg = `${value} is not one of the following: ${values.join(', ')}`;

        return [ !!values.filter(option => option === value).length, msg ];
    },

    numeric(value) {
        const msg = 'Must be a numeric value';

        return [ !Array.isArray(value) && /^[0-9]*$/.test(value), msg ];
    },

    required(value) {
        const msg = 'Required';

        if (value !== null && value !== undefined) {
            value = value.toString();
        }

        if (isStr(value)) {
            value = value.trim();
        }

        return [ !isEmpty(value), msg ];
    },
};
