import { WorkingData } from "./WorkingData";
import { TotalHoursCacheOperation } from "./TotalHoursCacheOperation";


// example of template method pattern
class Startup {
    public static Start(): void {
        let workingData1 : WorkingData = new WorkingData(8, 30, 12);
        let calculation : TotalHoursCacheOperation = new TotalHoursCacheOperation();

        console.log(calculation.totalHours(workingData1));
        console.log(calculation.totalHours(workingData1));

        let workingData2 : WorkingData = new WorkingData(8, 30, 24);
        console.log(calculation.totalHours(workingData2));
    }
}

Startup.Start();

