import Vue from 'vue';
import Router from 'vue-router';
import asyncImport from './asyncImport';

const SideBar = () => import('@v/SideBar');
// views
const Home = () => import('@v/Home');
const UI = () => import('@v/UI');
const UIRules = () => import('@v/UIRules');
const ColorsTable = () => import('@v/ColorsTable');

function createSideBarView(view) {
    return {
        default: () => asyncImport(view()),
        sidebar: () => asyncImport(SideBar()),
    }
}

Vue.use(Router);

import Shared from '../shared';
const { menu } = Shared.SideBar;
const routers = [
];
menu.forEach(item => {
    routers.push({
        name: item.name,
        path: item.router,
        components: createSideBarView(() => import(`../components${item.router}/Index.js`)),
    })
});

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home-page',
            components: createSideBarView(Home),
        },
        {
            path: '/UI',
            name: 'UI-page',
            // component: UI,
            // component: () => asyncImport(UI()),
            components: createSideBarView(UI),
        },
        {
            path: '/ColorsTable',
            name: 'ColorsTable-page',
            // component: UI,
            // component: () => asyncImport(ColorsTable()),
            components: createSideBarView(ColorsTable),
        },
        {
            path: '/UIRules',
            name: 'UIRules-page',
            components: createSideBarView(UIRules),
        },
        ...routers,
        {
            path: '*',
            redirect: '/',
        },
    ],
});
