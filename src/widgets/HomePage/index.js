import createMobxWidget from '../../common/createMobxWidget';
import HomePage from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'home-page-widget',
    create: createMobxWidget(HomePage, Store, StoreContext),
    renderMode: 'client'
};
