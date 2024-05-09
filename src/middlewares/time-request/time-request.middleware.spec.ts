import { TimeRequestMiddleware } from './time-request.middleware';

describe('TimeRequestMiddleware', () => {
  it('should be defined', () => {
    expect(new TimeRequestMiddleware()).toBeDefined();
  });
});
