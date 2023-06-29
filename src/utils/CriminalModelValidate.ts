export class CriminalModelValidate{
    public static criminalModelValidaTe(criminalStatus: string): number {
        return criminalStatus === "no" ? 0 : -1; 
    }
}