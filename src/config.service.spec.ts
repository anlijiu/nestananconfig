import { ConfigService } from './config.service';

describe('ConfigService', () => {
  describe('It compiles and starts', () => {
    test('should be defined', async () => {
      const configOpts = {
        folder: 'config',
      };
      const configService = new ConfigService(configOpts);
      expect(configService).toBeDefined();
    });
  });
})
