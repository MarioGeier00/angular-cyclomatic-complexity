import { ParseComplexityPipe } from './parse-complexity.pipe';

describe('ParseComplexityPipe', () => {
  it('parse complexity 12 of html measurement', () => {
    const pipe = new ParseComplexityPipe();
    expect(pipe.parseComplexity('The cyclomatic complexity 12 exceeds the defined limit 1')).toBe(12);
  });
  it('parse complexity 12 of ts measurement', () => {
    const pipe = new ParseComplexityPipe();
    expect(pipe.parseComplexity('Method \'shouldHaveComplexityOfThree\' has a complexity of 12. Maximum allowed is 1.')).toBe(12);
  });
});
