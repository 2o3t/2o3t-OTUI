import Vue from 'vue';
import Router from 'vue-router';
import asyncImport from './asyncImport';

const ComponentsSideBar = () => import('@views/SideBar/Components');
const DesignsSideBar = () => import('@views/SideBar/Designs');
// views
// const Home = () => import('@views/Home');
const Uncategorized = () => import('@views/Uncategorized');

function createSideBarView(sidebar, view) {
    return {
        // sidebar: () => asyncImport(sidebar()),
        sidebar,
        default: () => asyncImport(view()),
    };
}

function createComponentsView(view) {
    return createSideBarView(ComponentsSideBar, view);
}
function createDesignsView(view) {
    return createSideBarView(DesignsSideBar, view);
}

Vue.use(Router);

import componentsModules from '@/components';
const componentRouters = [];
componentsModules.forEach(item => {
    componentRouters.push({
        name: item.name,
        path: item.router,
        components: createComponentsView(() => import(`@comps/${item.index}`)),
    });
});

import designsModules from '@/designs';
const designRouters = [];
designsModules.forEach(item => {
    designRouters.push({
        name: item.name,
        path: item.router,
        components: createDesignsView(() => import(`@designs/${item.index}`)),
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
            // components: createSideBarView(ComponentsSideBar, Home),
            redirect: '/components/Installation',
        },
        {
            path: '/Uncategorized',
            name: 'Uncategorized-page',
            // component: Uncategorized,
            // component: () => asyncImport(Uncategorized()),
            components: createSideBarView(ComponentsSideBar, Uncategorized),
        },
        {
            path: '/components',
            redirect: '/components/Installation',
        },
        // ...componentRouters,
        ...componentRouters.map(item => {
            item.path = `/components${item.path}`;
            return item;
        }),
        {
            path: '/designs',
            redirect: '/designs/Disciplines',
        },
        ...designRouters.map(item => {
            item.name = `Designs_${item.name}`;
            item.path = `/designs${item.path}`;
            return item;
        }),
        {
            path: '*',
            redirect: '/',
        },
    ],
});
