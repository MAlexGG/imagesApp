import axios from "axios";
const baseURL = "http://localhost:3000/cards";

export const cardService = {
    getAll() {
        return axios.get(baseURL);
    },

    createCard(newName, newUser) {
        axios.post(baseURL, {
            imgName: newName,
            imgUser: newUser
        });
        return this.getAll();
    },

    deleteCard(id) {
        axios.delete(baseURL + "/" + id);
        return this.getAll();
    },

    update(id, data) {
        axios.put(baseURL + "/" + id, data);
        return this.getAll();
    },

    showCard(id) {
        return axios.get(baseURL + "/show/" + id);
        /* return axios.get((baseURL + "/show/"), {
            params: {
                id: id
            }
        }); */
    }

}