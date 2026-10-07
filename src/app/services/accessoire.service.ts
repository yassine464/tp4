import { Injectable } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';

@Injectable({
  providedIn: 'root'
})
export class AccessoireService {
  accessoires: Accessoire[]; // un tableau d'Accessoire
  accessoire!: Accessoire;

  constructor() {
    this.accessoires = [
      { idAccessoire: 1, nomAccessoire: "Casque Bluetooth", prixAccessoire: 120.500, dateCreation: new Date("01/14/2011") },
      { idAccessoire: 2, nomAccessoire: "Coque iPhone", prixAccessoire: 25, dateCreation: new Date("12/17/2010") },
      { idAccessoire: 3, nomAccessoire: "Chargeur USB-C", prixAccessoire: 45.123, dateCreation: new Date("02/20/2020") }
    ];
  }

  listeAccessoires(): Accessoire[] {
    return this.accessoires;
  }

  ajouterAccessoire(acc: Accessoire) {
    this.accessoires.push(acc);
  }

  supprimerAccessoire(acc: Accessoire) {
    // supprimer l'accessoire acc du tableau accessoires
    const index = this.accessoires.indexOf(acc, 0);
    if (index > -1) {
      this.accessoires.splice(index, 1);
    }
  }

  consulterAccessoire(id: number): Accessoire {
    this.accessoire = this.accessoires.find(a => a.idAccessoire == id)!;
    return this.accessoire;
  }

  updateAccessoire(acc: Accessoire) {
    // chercher l'accessoire acc dans le tableau accessoires
    const index = this.accessoires.indexOf(acc, 0);
    if (index > -1) {
      this.accessoires.splice(index, 1);      // supprimer l'ancien élément
      this.accessoires.splice(index, 0, acc); // insérer le nouvel élément
    }
  }
}
