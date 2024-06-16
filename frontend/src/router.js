import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/Home.vue';
import Browse from './pages/Browse.vue'
import Project from './pages/Project.vue'
import Dashboard from './pages/Dashboard.vue'
import Governance from "./pages/Governance.vue";
import Proposal from "./pages/Proposal.vue";
import About from "./pages/About.vue";

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
    },
    {
        path: '/about',
        component: About,
        name: 'about',
    },
    {
        path: '/browse',
        component: Browse,
        name: 'browse',
    },
    {
        path: '/project/:project',
        component: Project,
        name: 'project',
    },
    {
        path: '/project/:project/proposal/:proposal',
        component: Proposal,
        name: 'proposal',
    },
    {
        path: '/contribute',
        component: Governance,
        name: 'contribute',
    } 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;