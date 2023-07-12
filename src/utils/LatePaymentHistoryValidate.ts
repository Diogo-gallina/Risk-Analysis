export class LatePaymentHistoryValidate {
  public static latePaymentHistoryValidate(criminalStatus: string): number {
    return criminalStatus === "no" ? 0 : -1;
  }
}
