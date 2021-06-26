import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Video} from '../classes/Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  ref: string = "videos";
  videos: Array<any> = [];
  videoSubject = new Subject<Array<Video>>();

  constructor() {}

  emit() {
    this.videoSubject.next(this.videos);
  }

  getAll() {
    this.videos = [ {
        "code" : "<iframe style=\"width: 90%; object-fit: cover;\" src=\"https://www.youtube.com/embed/JCZemGRC_pQ?autoplay=1&mute=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "date" : "12/08/2020",
        "description" : "Frédéric Boissart présente en quoi l’anticipation des risques de non-conformité en matière de protection des données à caractère personnel doit être une préoccupation quotidienne des entreprises et administrations. ",
        "id" : 0,
        "intervenants" : [
          21
        ],
        "photo" : "https://i.ytimg.com/vi/JCZemGRC_pQ/maxresdefault.jpg",
        "titre" : "Le risque RGPD en 2020",
        "type" : "Interview RISKINTEL"
      }, {
        "code" : "<iframe style=\"width: 90%; object-fit: cover;\" src=\"https://www.youtube.com/embed/XuGuXV12b8k?autoplay=1&mute=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "date" : "20/11/2020",
        "description" : "Quel est l'impact de la pandémie sur le processus de robotisation ? Qu'en est-il de des processus d’automatisation sur les fonctions risk management ?",
        "id" : 1,
        "intervenants" : [
          19
        ],
        "photo" : "https://i.ytimg.com/vi/XuGuXV12b8k/maxresdefault.jpg",
        "titre" : "La digitalisation du secteur banque et finance. Impact sur les métiers du Risk Management",
        "type" : "Interview RISKINTEL"
      }, {
        "code" : "<iframe style=\"width: 90%; object-fit: cover;\" src=\"https://www.youtube.com/embed/oi88uaXrHv0?autoplay=1&mute=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "date" : "16/12/2020",
        "description" : "R!SKINTEL vous propose des réponses à ces questions grâce à son interview de  Oriana Labruyère, avocate, et Justine Cabanis, consultante en management des risques",
        "id" : 2,
        "intervenants" : [
          6
        ],
        "photo" : "https://i.ytimg.com/vi/oi88uaXrHv0/maxresdefault.jpg",
        "titre" : "Droit numérique, RGPD, cybersécurité risques et opportunités ?",
        "type" : "Interview RISKINTEL"
      }, {
        "code" : "<iframe style=\"width: 90%; object-fit: cover;\" src=\"https://www.youtube.com/embed/3ty2-3Dp99c?autoplay=1&mute=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "date" : "22/02/2021",
        "description" : "Quelles seront les données qui seront partagées par WhatsApp ? Sont-elles protégées au titre du RGPD et de la loi informatique et libertés ?",
        "id" : 3,
        "intervenants" : [
          18
        ],
        "photo" : "https://i.ytimg.com/vi/3ty2-3Dp99c/maxresdefault.jpg",
        "titre" : "La politique de données utilisateurs WhatsApp2",
        "type" : "Interview RISKINTEL"
      }, {
        "code" : "<iframe style=\"width: 90%; object-fit: cover;\" src=\"https://www.youtube.com/embed/mrkRt2CMXss?autoplay=1&mute=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "date" : "02/05/2021",
        "description" : "L'année 2020 a vu les menaces Cyber augmenter de façon exponentielle. Avalanche de ransomwares, affaire SolarWinds / Sunburst, opportunisme des attaquants pendant la crise sanitaire !",
        "id" : 4,
        "intervenants" : [
          2,
          14,
          15,
          17,
          16
        ],
        "photo" : "https://i.ytimg.com/vi/mrkRt2CMXss/maxresdefault.jpg",
        "titre" : "Evolution de la menace Cyber : les leçons de 2020 et les challenges 2021",
        "type" : "Table Ronde Des Experts"
      }, {
        "code" : "<iframe style=\"width: 90%; object-fit: cover;\" src=\"https://www.youtube.com/embed/ks_T-f61SjE?autoplay=1&mute=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "date" : "14/03/2021",
        "description" : "Talk Show réalisé en partenariat avec le Pôle d'excellence cyber !",
        "id" : 5,
        "intervenants" : [
          11,
          12,
          13
        ],
        "photo" : "https://i.ytimg.com/vi/ks_T-f61SjE/maxresdefault.jpg",
        "titre" : "Avez-vous confiance en votre Cloud ?",
        "type" : "Talk Show : CyberTalk"
      }, {
        "code" : "<iframe style=\"width: 90%; object-fit: cover;\" src=\"https://www.youtube.com/embed/QReovB_tIBs?autoplay=1&mute=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "date" : "02/04/2021",
        "description" : "Qu'est ce que l' « asymétrie numérique » et sur quel type de conflictualité a-t-elle un impact ? Parle-t-on de guerre conventionnelle, secrète, économique ou militaire, de conflit de basse intensité ? Quelle typologie retenir ?",
        "id" : 6,
        "intervenants" : [
          4
        ],
        "photo" : "https://i.ytimg.com/vi/QReovB_tIBs/maxresdefault.jpg",
        "titre" : "Amiral Arnaud Coustilliére : La nouvelle conflictualité à l'heure du numérique",
        "type" : "Interview RISKINTEL"
      }, {
        "code" : "<iframe style=\"width: 90%; object-fit: cover;\" src=\"https://www.youtube.com/embed/vgJi2j9xWfs?autoplay=1&mute=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "date" : "17/05/2021",
        "description" : "Nous pensions le concept de Souveraineté désuet dans une économie désormais mondialisée. Pourtant, qui aurait pu penser que cette notion chère à Jean Bodin (XVIème siècle) reviendrait sur le devant de la scène à la faveur des révolutions technologiques les plus récentes ?",
        "id" : 7,
        "intervenants" : [
          6,
          7,
          8,
          9,
          10
        ],
        "photo" : "https://i.ytimg.com/vi/vgJi2j9xWfs/maxresdefault.jpg",
        "titre" : "Souveraineté numérique : les starts-up et acteurs de la tech témoignent",
        "type" : "Table Ronde Des Experts"
      }, {
        "code" : "<iframe style=\"width: 90%; object-fit: cover;\" src=\"https://www.youtube.com/embed/DQLr8jwQSVY?autoplay=1&mute=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "date" : "21/05/2021",
        "description" : "RSSI, Responsable de la Sécurité des Systèmes d'Information : voilà un acronyme qui revêt des réalités très variées en fonction des organisations et de leur maturité. Qu'en est-il vraiment ?",
        "id" : 8,
        "intervenants" : [
          0,
          1,
          2,
          3
        ],
        "photo" : "https://i.ytimg.com/vi/DQLr8jwQSVY/maxresdefault.jpg",
        "titre" : "Un métier en plein bouleversement - Evolution ou Révolution ?",
        "type" : "Table Ronde Des Experts"
      }, {
        "code" : "<iframe style=\"width: 90%; object-fit: cover;\" src=\"https://www.youtube.com/embed/pxVSN4QWVaE?autoplay=1&mute=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "date" : "28/05/2021",
        "description" : "Episode en partenariat avec le Pôle d'Excellence Cyber.",
        "id" : 9,
        "intervenants" : [
          22,
          23
        ],
        "photo" : "https://i.ytimg.com/vi/pxVSN4QWVaE/maxresdefault.jpg",
        "titre" : "Cyberespace, la grande déstabilisation !",
        "type" : "Talk Show : CyberTalk"
      } ];
    this.videos.reverse();
    this.emit();
    // return new Promise(
    //   (resolve, reject) => {
    //     // @ts-ignore
    //     firebase.database().ref('/' + this.ref).get((data: DataSnapshot) => {
    //       this.videos = data.val() ? data.val() : [];
    //       this.emit();
    //       resolve(true);
    //     }
    //     );
    //   }
    // );
  }

  getOneById(id: number) {
    for (let video of this.videos)
      if (video.id == id) return video;
    return null
  }

  // get(id: number) {
  //   return new Promise(
  //     (resolve, reject) => {
  //       firebase.database().ref('/' + this.ref + '/' + id).once('value').then(
  //         (data: DataSnapshot) => {
  //           resolve(data.val() as Video);
  //         }, (error) => {
  //           reject(error);
  //         }
  //       );
  //     }
  //   );
  // }
}
