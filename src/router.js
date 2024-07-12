import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './views/DashboardView.vue';
import Tickets from './views/Tickets.vue';
import NewTicket from './views/NewTicketView.vue';
import Projects from './views/ProjectsView.vue';
import Users from './views/UsersView.vue';

//rutas de personal
import CrearPersonal from './components/personal.components/crear.vue'
import EditarPersonal from './components/personal.components/editar.vue'
import ListarPersonal from './views/Personal.vue'



const routes = [
  { path: '/', component: Dashboard },
  { path: '/tickets', component: Tickets },
  { path: '/new-ticket', component: NewTicket },
  { path: '/projects', component: Projects },
  { path: '/users', component: Users },
  
  //rutas de personal
  { path: '/personal/crear', component: CrearPersonal },
  { path: '/personal/editar ', component: EditarPersonal },
  { path: '/personal', component: ListarPersonal }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
