import createMobxWidget from '../../common/createMobxWidget';
import HelpCenter from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'help-center-widget',
    create: createMobxWidget(HelpCenter, Store, StoreContext),
    renderMode: 'client'
};
