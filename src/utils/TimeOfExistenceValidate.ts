export class TimeOfExistenceValidate {
    public static calculateDateOfExistence(timeOfExistence: number) : number{
        let scoreOfExistence = 0;
       
        if(timeOfExistence <= 2) {
            scoreOfExistence = 3;
        } else if (timeOfExistence > 2 && timeOfExistence <= 5) {
            scoreOfExistence = 5;
        }else if (timeOfExistence > 5 && timeOfExistence <= 9) {
            scoreOfExistence = 10;
        }else if (timeOfExistence > 9) {
            scoreOfExistence = 15;
        }

        return scoreOfExistence;
    }
}