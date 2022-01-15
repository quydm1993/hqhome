// routes.js

import Overview from './views/Overview.vue';
import ModelList from './views/ModelList.vue';

const routes = [
    { path: '/', component: Overview },
    { path: '/model-listing', component: ModelList },
];

export default routes;