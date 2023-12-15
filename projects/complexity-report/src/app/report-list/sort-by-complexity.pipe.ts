import {Pipe, PipeTransform} from '@angular/core';
import {EslintReport, EslintReportItem} from "../data/eslint-report";
import {ParseComplexityPipe} from "./parse-complexity.pipe";

@Pipe({
    name: 'sortByComplexity',
    standalone: true,
})
export class SortByComplexityPipe implements PipeTransform {

    readonly complexityPipe = new ParseComplexityPipe();

    getComplexity(reportItem: EslintReportItem) {
        const complexities = reportItem.messages.map(message => {
            try {
                return this.complexityPipe.parseComplexity(message.message);
            } catch (e) {
                return null
            }
        });
        return complexities.reduce((prev, curr) => prev == null ? curr : (curr == null ? prev : Math.max(prev, curr)), null);
    }

    appendComplexity(item: EslintReportItem) {
        return {...item, complexity: this.getComplexity(item)}
    }

    transform(report: EslintReport) {
        return report.map(item => this.appendComplexity(item)).sort((a, b) => (b.complexity ?? 0) - (a.complexity ?? 0));
    }

}
