import createMobxWidget from '../../common/createMobxWidget';
import About from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'about-widget',
    create: createMobxWidget(About, Store, StoreContext),
    renderMode: 'client'
};
