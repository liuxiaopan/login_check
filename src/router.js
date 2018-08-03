/**
 * Created by Linda on 2018/8/3.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = r => require.ensure([], () => r(require('./pages/home.vue')));
const A = r => require.ensure([], () => r(require('./pages/a.vue')));
const B = r => require.ensure([], () => r(require('./pages/b.vue')));
const Login = r => require.ensure([], () => r(require('./pages/login.vue')));
const Logout = r => require.ensure([], () => r(require('./pages/logout.vue')));
const NotFound = r => require.ensure([], () => r(require('./pages/not_found.vue')));
const routes = [{
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/a',
        component: A,
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/b',
        component: B,
        meta: {
            requiresAuth: true
        }
    },{
        path: '/login',
        component: Login
    }, {
        path: '/logout',
        component: Logout
    },  {
        path: '*',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    let token = window.localStorage.getItem('token')

    if ((to.matched.some(record => record.meta.requiresAuth)) && (!token)) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        });
    } else {
        next()
    }
});
export default router;