import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'web-empty-wrapper',
  template: ` <div></div> `,
})
export class EmptyComponent {}

export default EmptyComponent;
