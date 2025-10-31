import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { inject } from "@vercel/analytics"

import { IconsService } from './services/shared/icons.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    inject();

    this.iconsService.registerAll();
  }
}
