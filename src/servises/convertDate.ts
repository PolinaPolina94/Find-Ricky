export const convertDate = (str: string) => {
    const date = new Date(str);
    const convertedDate = date.toLocaleDateString('en-GB').replace(/\//g, '.');
    return convertedDate;
}
