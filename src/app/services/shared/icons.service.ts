import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

import { SKILL_ICONS } from '../../records/skill-icons';


@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  registerAll(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.iconRegistry.addSvgIcon(
      'whatsapp',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons-svg/whatsapp.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons-svg/linkedin.svg'
      )
    );

    for (const icon of Object.keys(SKILL_ICONS)) {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons-svg/${icon}-original.svg`
        )
      );
    }
  }
}
