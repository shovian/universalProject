export const StringtoInt = (str: string) => {
    if (Number.isNaN(parseInt(str))){return 0}
	return parseInt(str);
};