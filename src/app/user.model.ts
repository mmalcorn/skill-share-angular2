export class User {
  constructor(
    public username: string,
    public email: string,
    public photo: string,
    public skills_held: number[],
    public skills_wanted: number[],
    public occupation: string
  ) { }
}
