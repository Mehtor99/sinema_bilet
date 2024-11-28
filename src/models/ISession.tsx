import { ISeat } from "./ISeat";

export interface ISession{
    id: number,
    saat: string,
    seatList: ISeat[]
}