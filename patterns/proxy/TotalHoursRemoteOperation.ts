import { WorkingData } from "./WorkingData";
import { ITotalHours } from "./ITotalHours";

export class TotalHoursRemoteOperation implements ITotalHours {
    totalHours(data: WorkingData): number {
        return (data.days * data.hours * data.months);
    }
}