import createMobxWidget from '../../common/createMobxWidget';
import ShoppingArticle from './components';
import Store from './store';
import { StoreContext } from './context';

export default {
    id: 'shopping-article-widget',
    create: createMobxWidget(ShoppingArticle, Store, StoreContext),
    renderMode: 'client'
};
