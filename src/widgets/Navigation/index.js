import createMobxWidget from '../../common/createMobxWidget';
import Navigation from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'navigation-widget',
    create: createMobxWidget(Navigation, Store, StoreContext),
    renderMode: 'client'
};
