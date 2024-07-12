import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './views/DashboardView.vue';
import Tickets from './views/Tickets.vue';
import NewTicket from './views/NewTicketView.vue';
import Projects from './views/ProjectsView.vue';
import Users from './views/UsersView.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/tickets', component: Tickets },
  { path: '/new-ticket', component: NewTicket },
  { path: '/projects', component: Projects },
  { path: '/users', component: Users }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
