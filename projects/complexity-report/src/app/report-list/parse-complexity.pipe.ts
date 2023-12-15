import {Pipe, PipeTransform} from '@angular/core';
import {EslintReportItem} from "../data/eslint-report";

@Pipe({
    name: 'parseComplexity',
    standalone: true
})
export class ParseComplexityPipe implements PipeTransform {

    transform(message: EslintReportItem['messages'][0]) {
        return this.parseComplexity(message.message);
    }

    parseComplexity(message: string) {
        let complexityMatches = message.match(/(?<=The cyclomatic complexity )\d+(?= exceeds)/);
        if (!complexityMatches || complexityMatches.length <= 0) {
            complexityMatches = message.match(/(?<=has a complexity of )\d+(?=\.)/);

            if (!complexityMatches || complexityMatches.length <= 0) {
                throw new Error('complexity could not be parsed')
            }
        }

        return +complexityMatches[0]
    }

}
