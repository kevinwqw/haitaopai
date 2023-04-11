import createMobxWidget from '../../common/createMobxWidget';
import UserCenter from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'user-center-widget',
    create: createMobxWidget(UserCenter, Store, StoreContext),
    renderMode: 'client'
};
