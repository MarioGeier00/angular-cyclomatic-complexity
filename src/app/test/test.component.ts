import {Component} from '@angular/core';

@Component({
    selector: 'app-test',
    standalone: true,
    template: `
        <p>
            test works!
        </p>
    `,
})
export class TestComponent {
    value!: number;

    /* eslint quotes: ["error", "single", {"allowTemplateLiterals": true}] */

    shouldEnableRulesByComment() {
        if (this.value === 1) console.log()
    }
}
