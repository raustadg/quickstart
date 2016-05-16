import {Component} from '@angular/core';

import { HighlightDirective } from 'app/attribute-directives/highlight-directive';

@Component({
    selector: 'my-app',
    // template: '<h1>My First Angular 2 App</h1>'
    templateUrl: 'app/app-component.html',
    directives: [HighlightDirective]
})
export class AppComponent { }
