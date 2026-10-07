import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../services/accessoire.service';

@Component({
  selector: 'app-update-accessoire',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-accessoire.component.html',
  styles: ``
})
export class UpdateAccessoireComponent implements OnInit {
  currentAccessoire = new Accessoire();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private accessoireService: AccessoireService) { }

  ngOnInit() {
    this.currentAccessoire =
      this.accessoireService.consulterAccessoire(this.activatedRoute.snapshot.params['id']);
  }

  updateAccessoire() {
    this.accessoireService.updateAccessoire(this.currentAccessoire);
    this.router.navigate(['accessoires']);
  }
}
