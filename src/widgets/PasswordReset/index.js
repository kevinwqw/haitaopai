import createMobxWidget from '../../common/createMobxWidget';
import PasswordReset from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'password-reset-widget',
    create: createMobxWidget(PasswordReset, Store, StoreContext),
    renderMode: 'client'
};
