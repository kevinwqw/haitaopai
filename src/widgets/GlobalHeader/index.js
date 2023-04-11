import createMobxWidget from '../../common/createMobxWidget';
import GlobalHeader from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'global-header-widget',
    create: createMobxWidget(GlobalHeader, Store, StoreContext),
    renderMode: 'client'
};
