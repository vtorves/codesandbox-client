import TranspiledModule from '../transpiled-module';
import { WarningStructure } from '../transpilers/utils/worker-warning-handler';

export default class ModuleWarning extends Error {
  constructor(module: TranspiledModule, warning: WarningStructure) {
    super();

    this.name = 'ModuleWarning';
    this.path = warning.fileName || module.module.path;
    this.message = warning.message;
    this.warning = warning.message;
    this.lineNumber = warning.lineNumber;
    this.columnNumber = warning.columnNumber;
    this.severity = warning.severity;
    this.source = warning.source;

    Error.captureStackTrace(this, this.constructor);
  }

  path: string;
  message: string;
  warning: string;
  message: string;
  severity: 'notice' | 'warning';
  source: ?string;
  lineNumber: ?number;
  columnNumber: ?number;
}
