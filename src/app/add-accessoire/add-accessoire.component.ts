import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../services/accessoire.service';

@Component({
  selector: 'app-add-accessoire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-accessoire.component.html',
  styleUrl: './add-accessoire.component.css'
})
export class AddAccessoireComponent {
  newAccessoire = new Accessoire();

  constructor(private accessoireService: AccessoireService,
              private router: Router) { }

  addAccessoire() {
    this.accessoireService.ajouterAccessoire(this.newAccessoire);
    this.router.navigate(['accessoires']);
  }
}
