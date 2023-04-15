import createMobxWidget from '../../common/createMobxWidget';
import BestSeller from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'best-seller-widget',
    create: createMobxWidget(BestSeller, Store, StoreContext),
    renderMode: 'client'
};
