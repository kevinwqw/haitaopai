import React from 'react';
import { observer } from 'mobx-react-lite';

import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';

import { useStore } from '../context';

const ShoppingArticle = () => {
    const store = useStore();
    const { noteId } = store;

    return (
        <div id="article">
            {noteId === '1' && <Article1 />}
            {noteId === '2' && <Article2 />}
            {noteId === '3' && <Article3 />}
            {noteId === '4' && <Article4 />}
        </div>
    );
};

export default observer(ShoppingArticle);
