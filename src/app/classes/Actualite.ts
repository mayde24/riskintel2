export class Actualite {

  _id: number;
  _titre: string;
  _photo: string;
  _date: string;
  _lien: string;
  _media: string;

  constructor(id: number, titre: string, photo: string, date: string, lien: string, media: string) {
    this._id = id;
    this._titre = titre;
    this._date = date;
    this._lien = lien;
    this._photo = photo;
    this._media = media;
  }
}
