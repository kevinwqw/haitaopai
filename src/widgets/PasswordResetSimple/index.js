import createMobxWidget from '../../common/createMobxWidget';
import PasswordResetSimple from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'password-reset-widget',
    create: createMobxWidget(PasswordResetSimple, Store, StoreContext),
    renderMode: 'client'
};
