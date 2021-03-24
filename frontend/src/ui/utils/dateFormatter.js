export const dateFormatter = (date) => {
    //Parses date from Sanity IO in this format: 2021-03-23T16:37:20Z
    if(date === null) return;

    //Use split to separate on various delimiters
    const splitDateOnDash = date.split("-");
    const splitDateOnTime = splitDateOnDash[2].split("T");
    const splitTimeOnColon = splitDateOnTime[1].split(":");
    const isPM = splitTimeOnColon[0] > 12;

    //return an object with the date broken up into key/value pairs
    return {
        month: splitDateOnDash[1],
        year: splitDateOnDash[0],
        day: splitDateOnTime[0],
        hour: isPM ? `${splitTimeOnColon[0] - 12}` : `${splitTimeOnColon[0]}`,
        minute: isPM ? `${splitTimeOnColon[1]} PM` : `${splitTimeOnColon} AM`,
    };
}
