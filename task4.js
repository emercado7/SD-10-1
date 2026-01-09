export class FriendAge {

    name;
    year;
    month;
    day;

    constructor(name, year, month, day){
        this.name = name
        this.year = Number(year)
        this.month = Number(month)
        this.day = Number(day)
    }

    returnAge() {
        const today = new Date();
        const date = new Date(this.year, this.month, this.day)

        let age = today.getFullYear() - date.getFullYear()
        let resMonth = today.getMonth() - date.getMonth()
        let resDay = today.getDate() - date.getDate()
        if((resMonth < 0) || (resMonth === 0 && resDay < 0))
            age -= 1

        return `${this.name} is ${age} today!`
    }
}
