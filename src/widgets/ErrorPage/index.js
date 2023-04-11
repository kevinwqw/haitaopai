import createMobxWidget from '../../common/createMobxWidget';
import ErrorPage from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'error-page-widget',
    create: createMobxWidget(ErrorPage, Store, StoreContext),
    renderMode: 'client'
};
