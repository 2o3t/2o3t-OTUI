import Vue from 'vue';
import Router from 'vue-router';
import asyncImport from './asyncImport';

const SideBar = () => import('@v/SideBar');
// views
const Home = () => import('@v/Home');
const Uncategorized = () => import('@v/Uncategorized');

function createSideBarView(view) {
    return {
        // sidebar: () => asyncImport(SideBar()),
        sidebar: SideBar,
        default: () => asyncImport(view()),
    };
}

Vue.use(Router);

import modules from '@/components';

const routers = [];
modules.forEach(item => {
    routers.push({
        name: item.name,
        path: item.router,
        components: createSideBarView(() => import(`@c/${item.index}`)),
    });
});


const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) { return savedPosition; }
    return { x: 0, y: 0 };
};

export default new Router({
    // mode: 'history',
    scrollBehavior,
    routes: [
        {
            path: '/',
            name: 'Home-page',
            components: createSideBarView(Home),
        },
        {
            path: '/Uncategorized',
            name: 'Uncategorized-page',
            // component: Uncategorized,
            // component: () => asyncImport(Uncategorized()),
            components: createSideBarView(Uncategorized),
        },
        ...routers,
        {
            path: '*',
            redirect: '/',
        },
    ],
});
