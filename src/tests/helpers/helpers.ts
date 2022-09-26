import {
  DisplayProcessor,
  SpecReporter,
  StacktraceOption
} from 'jasmine-spec-reporter';

class ImageProject extends DisplayProcessor {
  public displayJasmineStarted = (info: any, event: string): string => {
    return `${event}`;
  };
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE
    },
    customProcessors: [ImageProject]
  })
);
