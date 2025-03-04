export type AmericanGrades = "A" | "B" | "C" | "D" | "E" | "F"
export type GermanGrades = 1 | 2 | 3 | 4 | 5 | 6
export type Grades = AmericanGrades | GermanGrades | undefined
export type ReportCard = {
    [subject: string]: Grades[]
}

export type Student = {
    firstName: string,
    lastName: string,
    age: number,
    reportCard: ReportCard
}