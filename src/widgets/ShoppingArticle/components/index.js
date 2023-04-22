import React from 'react';

import { useStore } from '../context';

const ShoppingArticle = () => {
    const store = useStore();
    const { noteId } = store;
    return (
        <div id="article">
            <p>{noteId}</p>
        </div>
    );
};

export default ShoppingArticle;
