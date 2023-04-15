import createMobxWidget from '../../common/createMobxWidget';
import BestDiscount from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'best-discount-widget',
    create: createMobxWidget(BestDiscount, Store, StoreContext),
    renderMode: 'client'
};
