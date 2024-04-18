import { Component } from '@angular/core';
import { Button } from '../../../../utils/models/button.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent {

  buttons: Button[] = [
    { iconFilled: "house-fill", iconEmpty: "house", text: "Home" },
    { iconFilled: "produtos-fill", iconEmpty: "produtos", text: "Produtos" },
    { iconFilled: "bag-fill-frame", iconEmpty: "bag-frame", text: "Pedidos" },
    { iconFilled: "bookshelf-fill", iconEmpty: "bookshelf", text: "Prateleiras" },
    { iconFilled: "bar-chart-line-fill", iconEmpty: "bar-chart-line", text: "Gráficos" },
    { iconFilled: "people-fill", iconEmpty: "people", text: "Equipe" },
  ];
  buttonIcons: { [key: number]: string } = {};

  constructor ( private router: Router ) { }

  navigateTo(routerLink: string) : void {
    const rota = routerLink.toLowerCase().replace('á', 'a');
    this.router.navigate([rota]);
  }

}
