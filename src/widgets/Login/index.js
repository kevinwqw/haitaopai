import createMobxWidget from '../../common/createMobxWidget';
import Login from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'login-widget',
    create: createMobxWidget(Login, Store, StoreContext),
    renderMode: 'client'
};
