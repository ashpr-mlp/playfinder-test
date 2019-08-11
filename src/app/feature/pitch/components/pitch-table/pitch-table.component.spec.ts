import { createTestComponentFactory, Spectator } from '@netbasal/spectator';

import { PitchTableComponent } from './pitch-table.component';

describe('PitchTableComponent', () => {
  let host: Spectator<PitchTableComponent>;
  const createHost = createTestComponentFactory(PitchTableComponent);

  beforeEach(() => {
    host = createHost();
  });

  it('should create', () => {
    expect(host.component).toBeTruthy();
  });

  describe('when no pitches', () => {
    beforeEach(() => {
      host.setInput('pitches', []);
    });

    it('should show a message', () => {
      expect(host.queryLast('.pitch-table__noresults')).not.toBeUndefined();
    });

    it('should not show any results', () => {
      expect(host.queryLast('.pitch-table__results')).toBeNull();
    });
  });

  describe('when has pitches', () => {
    const mockPitches = [{
      id: 0,
      attributes: {
        name: 'foo',
        sport: 'football',
        format: 'outside'
      }
    }] as any;

    beforeEach(() => {
      host.setInput('pitches', mockPitches);
    });

    it('should show a pitch with the provided fields', () => {
      expect(host.queryLast('.pitch-table__result-name').textContent).toEqual('foo');
      expect(host.queryLast('.pitch-table__result-sport').textContent).toEqual('football');
      expect(host.queryLast('.pitch-table__result-format').textContent).toEqual('outside');
    });
  });
});
