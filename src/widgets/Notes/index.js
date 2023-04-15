import createMobxWidget from '../../common/createMobxWidget';
import Notes from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'notes-widget',
    create: createMobxWidget(Notes, Store, StoreContext),
    renderMode: 'client'
};
