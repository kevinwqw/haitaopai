import createMobxWidget from '../../common/createMobxWidget';
import Signup from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'signup-widget',
    create: createMobxWidget(Signup, Store, StoreContext),
    renderMode: 'client'
};
