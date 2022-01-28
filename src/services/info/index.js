import { getDatabase, ref } from "firebase/database";

export class data {
    constructor() {
        this.db = getDatabase();
    }
    async getUserName(uid){
        // eslint-disable-next-line no-unused-vars
        const userName = ref(this.db, `user/${uid}/info`);
    }
}