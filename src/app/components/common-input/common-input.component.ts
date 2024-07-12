import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss'],
})
export class CommonInputComponent {
  @Input({ required: true }) type!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) placeholder!: string;
}
