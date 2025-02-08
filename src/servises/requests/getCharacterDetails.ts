import { API_LINK } from "../links";

export const getCharacterDetails = async (id?: string) => {
    try {
        const response = await fetch(`${API_LINK}character/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}