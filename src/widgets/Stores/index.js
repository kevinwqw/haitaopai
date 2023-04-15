import createMobxWidget from '../../common/createMobxWidget';
import Stores from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'stores-widget',
    create: createMobxWidget(Stores, Store, StoreContext),
    renderMode: 'client'
};
