export class NewHero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string //必須項目ではない
  ) { }
}
