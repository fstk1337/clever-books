export const convertDateToDDMM = (dateString: string): string => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    
    return `${date.getDate()}.${month}`;
}

export const convertDateToDDMMMMMYYYY = (dateString: string): string => {
    const date = new Date(dateString);
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const month = monthNames[date.getMonth()];
    
    return `${date.getDate()} ${month} ${date.getFullYear()}`;
}