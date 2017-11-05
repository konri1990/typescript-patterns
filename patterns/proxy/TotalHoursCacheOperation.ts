import { WorkingData } from "./WorkingData";
import { TotalHoursRemoteOperation } from "./TotalHoursRemoteOperation";
import { ITotalHours } from "./ITotalHours";

// it's example how we can use proxy pattern for 'caching'
// specially usefull when calculate operation take too long time,
// we can proxy this calculation if it is called on the same object
export class TotalHoursCacheOperation implements ITotalHours {
    private _data : WorkingData;
    private readonly _salaryCalculationLongOperation : TotalHoursRemoteOperation;
    private lastCalculation : number;

    constructor() {
        this._salaryCalculationLongOperation = new TotalHoursRemoteOperation();
    }
    totalHours(data: WorkingData): number {
        if(this.takeFromCacheResult(data)) {
            console.log("Requested object is the same, return value from cache: ");
        } else {
            console.log("New object -> need recalculate, this can take some time...");
            this._data = data;
            this.refreshInternalCache();
        }
        return this.lastCalculation;
    }
    private takeFromCacheResult(data: WorkingData): boolean {
        return (JSON.stringify(this._data) === JSON.stringify(data));
    }
    private refreshInternalCache(): void {
        this.lastCalculation = this._salaryCalculationLongOperation.totalHours(this._data);
    }
}