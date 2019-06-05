import { Component, Input } from '@angular/core';

@Component({
    selector: 'phone',
    template: `<a href="tel:{{ phone }}">{{ phone | phone }}</a>`
})
export class PhoneComponent {
    @Input() phone: string;
}