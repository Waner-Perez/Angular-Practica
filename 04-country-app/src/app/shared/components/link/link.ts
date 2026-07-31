import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-link',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './link.html',
})
export class Link {
  pathSvg_d = input<string>()
  nameLink = input<string>()
  urlLink = input<string | null>()
}