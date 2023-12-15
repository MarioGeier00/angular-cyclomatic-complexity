export type EslintReport = EslintReportItem[];
export type EslintReportItem = {
    filePath: string,
    messages:
        {
            ruleId: string,
            severity: number,
            message: string,
            line: number,
            column: number,
            nodeType: string | null,
            messageId: string,
            endLine: number,
            endColumn: number
        }[],
    errorCount: number,
    fatalErrorCount: number,
    warningCount: number,
    fixableErrorCount: number,
    fixableWarningCount: number,
    source?: string,
};