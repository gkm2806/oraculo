export default (string) => {
    string = string.toLocaleLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1);
}