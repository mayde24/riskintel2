import {Intervenant} from './Intervenant';

export class Video {

  _id: number;
  code: string;
  _titre: string;
  _description: string;
  _date: string;
  intervenants: number[];
  _photo: string;
  type: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, code: string, titre: string, description: string, date: string, intervenants: number[], photo: string, type: string) {
    this._id = id;
    this.code = code;
    this._titre = titre;
    this._description = description;
    this._date = date;
    this.intervenants = intervenants;
    this._photo = photo;
    this.type = type;
  }

}

