import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'angular-cyclomatic-complexity';

    value!: number;

    shouldHaveComplexityOfThree() {
        if (this.value == 0) {
            /* empty */
        } else if (this.value == 1) {
            /* empty */
        }
        if (this.value == 1) console.log()
    }

    shouldEnableRulesByComment() {
        /* eslint curly: "warn" */
        if (this.value === 1) console.log()
    }
}
