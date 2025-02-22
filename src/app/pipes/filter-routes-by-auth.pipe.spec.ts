import { FilterRoutesByAuthPipe } from './filter-routes-by-auth.pipe';

describe('FilterRoutesByAuthPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterRoutesByAuthPipe();
    expect(pipe).toBeTruthy();
  });
});
