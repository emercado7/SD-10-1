export function rubricExcellent(grade) {
    return grade >= 5 ? (grade >= 9 ? "Excellent" : "Pass") : "Fail"
}