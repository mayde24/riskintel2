import {Intervenant} from "./Intervenant";

export class Video {

  _id: number
  _code: string;
  _titre: string;
  _description: string;
  _date: string;
  _intervenants: Intervenant[];
  _photo: string;
  _type: string;

  constructor(id: number, code: string, titre: string, description: string, date: string, intervenants: Intervenant[], photo: string, type: string) {
    this._id = id;
    this._code = code;
    this._titre = titre;
    this._description = description;
    this._date = date;
    this._intervenants = intervenants;
    this._photo = photo;
    this._type = type;
  }

}

