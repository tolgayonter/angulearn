import { initFederation } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

// initFederation(`/assets/${envirnment.manifest}`)
initFederation(`/assets/mf.manifest.prod.json`)
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
