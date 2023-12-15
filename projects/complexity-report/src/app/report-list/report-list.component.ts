import { Component } from '@angular/core';
import complexityReport from '../../../../../measurement.json';
import {ReportItemComponent} from "./report-item/report-item.component";
import {SortByComplexityPipe} from "./sort-by-complexity.pipe";
import {EslintReport} from "../data/eslint-report";
@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [
    ReportItemComponent,
    SortByComplexityPipe
  ],
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.css'
})
export class ReportListComponent {

  readonly reports: EslintReport = complexityReport;

}
