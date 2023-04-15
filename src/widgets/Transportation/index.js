import createMobxWidget from '../../common/createMobxWidget';
import Transportation from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'transportation-widget',
    create: createMobxWidget(Transportation, Store, StoreContext),
    renderMode: 'client'
};
