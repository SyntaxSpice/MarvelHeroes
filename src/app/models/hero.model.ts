import { Constants } from "../utils/constants";

export class HeroModel {
    private id: number;
    private name: string;
    private thumbnail: string;
    private description: string;
    private availableComics: number;
    private comicsNames: Array<string>;
    public isFavorite: boolean;

    constructor(hero: any) {
        this.id = hero.id;
        this.name = hero.name;
        this.thumbnail = `${hero.thumbnail.path}/${Constants.defaultXlargeImageName}.${hero.thumbnail.extension}`;
        this.description = hero.description || Constants.emptyDescriptionText;
        this.availableComics = hero.comics.available;
        this.comicsNames = hero.comics.items.slice(0, Constants.amountOfComicsNames).map(comics => comics.name)
        this.isFavorite = hero.isFavorite || false;
    }
}
