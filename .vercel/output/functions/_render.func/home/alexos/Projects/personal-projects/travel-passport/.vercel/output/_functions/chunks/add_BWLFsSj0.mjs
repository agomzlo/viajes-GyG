export { renderers } from '../renderers.mjs';

const page = () => import('./pages/add_D2JP_Emh.mjs').then(n => n.c);

export { page };
