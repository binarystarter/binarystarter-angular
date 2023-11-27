import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthPaths } from '@binarystarter-angular/shared-constants';

@Component({
  selector: 'web-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if (this.router.url === `/${AuthPaths.base}`) {
      this.router.navigate(['login'], { relativeTo: this.route });
    }
  }
}
