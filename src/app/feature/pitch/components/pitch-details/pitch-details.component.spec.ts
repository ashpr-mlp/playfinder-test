import { createTestComponentFactory, Spectator } from '@netbasal/spectator';
import { PitchDetailsComponent } from './pitch-details.component';

describe('PitchDetailsComponent', () => {
  let host: Spectator<PitchDetailsComponent>;
  const createHost = createTestComponentFactory( PitchDetailsComponent);

  beforeEach(async () => {
    host = createHost();

    await host.fixture.whenStable();
  });

  it('should create', () => {
    expect(host.component).toBeTruthy();
  });

  describe('when no image is available', () => {
    beforeEach(() => {
      host.setInput('pitch', {id: 1, attributes: {images: {large: undefined}}} as any);
    });

    it('should hide image container', () => {
      expect(host.queryLast('.patch-details__image-wrapper')).toBeNull();
    });
  });

  describe('when image is available', () => {
    beforeEach(() => {
      host.setInput('pitch', {id: 1, attributes: {images: {large: ['https://via.placeholder.com/150']}}} as any);
    });

    it('should show image container and house image', () => {
      expect(host.queryLast('.patch-details__image-wrapper')).not.toBeNull();
      expect(host.queryLast('.patch-details__image')).toHaveAttribute('src', 'https://via.placeholder.com/150');
    });
  });
});
