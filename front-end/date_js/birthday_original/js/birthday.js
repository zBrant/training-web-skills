function quantoFaltaPara(m, d) {
    let dateToday = new Date()
    dateToday.setHours(0)
    dateToday.setMinutes(0)
    dateToday.setSeconds(0)
    dateToday.setMilliseconds(0)
    let [day, month] = [dateToday.getDate(), dateToday.getMonth()]

    let birDay = (m < month || (m === month && d < day)) ? Date.UTC(2025, m -1, d) : Date.UTC(2024, m -1, d)
    let dayLeft = parseInt((new Date(birDay) - (Date.now())) / (1000*60*60*24))

    debugger
    return (dayLeft < 0) ? 365 + dayLeft : dayLeft
}
