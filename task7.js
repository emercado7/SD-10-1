export function rubricPerfect(value) {
    const grade = Number(value)
    switch (grade) {
        case (grade < 5 ? grade : false):
            return "Fail"
        case (grade < 9 ? grade : false):
            return "Pass"
        case (grade < 11 ? grade : false):
            return "Excellent"
        case (grade === 11 ? grade : false):
            return "Perfect"
        default:
            return "Undefined"
    }

}