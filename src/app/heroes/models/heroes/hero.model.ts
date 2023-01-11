
export interface Hero{
    id:string,
    name: string,
    ability: 'attacker' | 'defender',
    guidId: string,
    DateStartTrain: Date,
    suiteColor: string,
    startingPower: number,
    currentPower: number
}
