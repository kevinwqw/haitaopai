import createMobxWidget from '../../common/createMobxWidget';
import BrandCenter from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'brand-center-widget',
    create: createMobxWidget(BrandCenter, Store, StoreContext),
    renderMode: 'client'
};
