import React from 'react';
import NoteCard from './NoteCard';
import { observer } from 'mobx-react-lite';
import { useStore } from '../context';

const Notes = () => {
    const store = useStore();
    const { noteList } = store;

    return (
        <div id="notes-widget">
            <div className="section-title">
                <h1>海淘攻略</h1>
            </div>
            <ul>
                {noteList.map((note) => {
                    const { imgSrc, title, description, href } = note;
                    return (
                        <li>
                            <a href={href}>
                                <NoteCard imgSrc={imgSrc} title={title} description={description} />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default observer(Notes);
