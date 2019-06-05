import { Component, Input } from '@angular/core';

@Component({
    selector: 'email',
    template: `<a href="mailto:{{ email }}">{{ email }}</a>`
})
export class EmailComponent {
    @Input() email: string;
}