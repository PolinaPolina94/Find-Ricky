import { API_LINK } from "../links";

export const getCharacter = async (name: string) => {
    try {
        const response = await fetch(`${API_LINK}character/?name=${name}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}