export const capitalize = str => {
    if (!str) {
        return "";
    }
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
};

