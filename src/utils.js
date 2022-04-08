const MS_PER_DAY = 1000 * 60 * 60 * 24;
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dateToUTC = (d) => {
    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
};

const getDaysAgo = (d) => {
    const tod = new Date();

    const utc1 = dateToUTC(d);
    const utc2 = dateToUTC(tod);

    return Math.floor((utc2 - utc1) / MS_PER_DAY);
};

const getFullDate = (d) => {
    const month = MONTHS[d.getMonth()];
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();

    return month + ' ' + day + ', ' + year;
}

const getTimeOfDay = (d) => {
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let suffix = 'AM';

    if (hours === 0) {
        hours = 12;
    } 
    else if (hours > 12) {
        hours = hours - 12;
        suffix = 'PM';
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return hours + ':' + minutes + ' ' + suffix;
};

export const formatDate = (d) => {
    d = new Date(d);
    const daysAgo = getDaysAgo(d);

    if (daysAgo === 0) {
        return getTimeOfDay(d);
    }
    else if (daysAgo === 1) {
        return 'Yesterday ' + getTimeOfDay(d);
    }
    else if (daysAgo <= 6) {
        return DAYS_OF_WEEK[d.getDay()] + ' ' + getTimeOfDay(d);
    }
    else {
        return getFullDate(d);
    }
}