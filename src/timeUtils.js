
export const secondsToString = (seconds) => {
    let m;
    let s;
    if(seconds < 60) {
        s = seconds.toString();
        return s.toString();
    }
    if(seconds >= 60 && seconds < 3600) {
        m = Math.floor(seconds / 60);
        s = seconds - (m * 60);
        return (`${m}:${s}`);
    }
}

export const dateToFormated = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthString = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    return (`${day}-${month}-${year}`);
}