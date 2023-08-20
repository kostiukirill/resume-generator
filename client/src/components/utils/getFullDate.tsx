const getFullDate = (date: Date, conditionOfTime: Boolean, months: String[]) => {
    
    let day = date.getDate() < 9 ? `0${date.getDate}` : date.getDate()
    const year = date.getFullYear();
    let month = date.getMonth();
    let hour = date.getHours() % 12;
    hour = hour ? hour : 12
    const min = date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes();
    const am_Or_pm = date.getHours() < 12 ? 'AM' : 'PM'

    if(conditionOfTime === false) return `${day} ${months[month]} ${year}`;
    if(conditionOfTime === true) return `${day} ${months[month]} ${year} ${hour}.${min} ${am_Or_pm}`;
}

export default getFullDate