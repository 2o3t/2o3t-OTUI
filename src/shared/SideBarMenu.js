import modules from '../components';

const sides = modules.map(({ name, router }) => {
    return {
        name,
        router,
    };
});

export default [
    {
        name: 'UI',
        router: '/UI',
    },
    ...sides,
];
