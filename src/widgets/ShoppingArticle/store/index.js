import { makeAutoObservable } from 'mobx';

class Store {
    noteId = '';

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init(params) {
        const { noteId } = params;
        this.noteId = noteId;
    }
}

export default Store;
