export function ageCalculator(year, month, day) {
    const today = new Date();
    const date = new Date(year, month, day)

    let age = today.getFullYear() - date.getFullYear()
    let resMonth = today.getMonth() - date.getMonth()
    let resDay = today.getDate() - date.getDate()

    return ((resMonth < 0) || (resMonth === 0 && resDay <0) ? age - 1 : age)
}