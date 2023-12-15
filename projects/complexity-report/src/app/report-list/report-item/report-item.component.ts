import {Component, Input} from '@angular/core';

import {EslintReportItem} from "../../data/eslint-report";
import {RelativePathPipe} from "./relative-path.pipe";


@Component({
  selector: 'app-report-item',
  standalone: true,
  imports: [
    RelativePathPipe
  ],
  templateUrl: './report-item.component.html',
  styleUrl: './report-item.component.css'
})
export class ReportItemComponent {
  @Input({required: true}) report!: EslintReportItem & {complexity: number | null};
}
