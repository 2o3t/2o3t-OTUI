import Vue from 'vue';
import Router from 'vue-router';
import asyncImport from './asyncImport';
import createRouters from './createRouters';

Vue.use(Router);

function createSideBarView(sidebar, view) {
    return {
        // sidebar: () => asyncImport(sidebar()),
        sidebar,
        default: () => asyncImport(view()),
    };
}

// views
const Uncategorized = () => import('@views/Uncategorized');

// component
const ComponentsSideBar = () => import('@views/SideBar/Components');
import componentsModules from '@components';
const componentRouters = createRouters(componentsModules, index => {
    if (!index) {
        return createSideBarView(ComponentsSideBar, Uncategorized);
    }
    return createSideBarView(ComponentsSideBar, () => import(`@components/${index}`));
});

// design
const DesignsSideBar = () => import('@views/SideBar/Designs');
import designsModules from '@designs';
const designRouters = createRouters(designsModules, index => {
    if (!index) {
        return createSideBarView(DesignsSideBar, Uncategorized);
    }
    return createSideBarView(DesignsSideBar, () => import(`@designs/${index}`));
});

// theme
const ThemesSideBar = () => import('@views/SideBar/Themes');
import themesModules from '@themes';
const themeRouters = createRouters(themesModules, index => {
    if (!index) {
        return createSideBarView(ThemesSideBar, Uncategorized);
    }
    return createSideBarView(ThemesSideBar, () => import(`@themes/${index}`));
});

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) { return savedPosition; }
    return { x: 0, y: 0 };
};

const routerMapConfig = {
    // mode: 'history',
    scrollBehavior,
    routes: [
        {
            path: '/',
            name: 'Home-page',
            redirect: '/components/Installation',
        },
        {
            path: '/components',
            name: 'Components-page',
            redirect: '/components/Installation',
        },
        ...componentRouters,
        {
            path: '/designs',
            name: 'Designs-page',
            redirect: '/designs/Disciplines',
        },
        ...designRouters,
        {
            path: '/themes',
            name: 'Themes-page',
            redirect: '/themes/Disciplines',
        },
        ...themeRouters,
        {
            path: '*',
            redirect: '/',
        },
    ],
};

export default new Router(routerMapConfig);
