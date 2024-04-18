import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import icons from '../utils/layout/icons.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Stock';

  iconsArray = icons.icons;

  constructor( private readonly iconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer ){
      this.iconsArray.forEach((icon: any) => {
        this.iconRegistry.addSvgIcon(icon.icon,
          this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon.path}`));
      });
  }
}
