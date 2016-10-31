import { upgradeAdapter } from './app.module';
import './app.routes';

// Use upgradeAdapter to manual bootstrap Angular1+2
upgradeAdapter.bootstrap(document.body, ['flight-app']);