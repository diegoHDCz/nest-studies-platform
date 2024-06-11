export class CreateLessonDto {
  constructor(
    public title: string,
    public instructor: string,
    public description: string,
    public techType: string,
    public createdAt: Date,
    public watched: boolean,
  ) {}
}
