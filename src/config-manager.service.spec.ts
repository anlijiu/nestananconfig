import { ConfigManagerService } from './config-manager.service';

describe('ConfigService', () => {
  describe('It compiles and starts', () => {
    test('should be defined', async () => {
      const configOpts = {
        folder: 'config',
      };
      const configService = new ConfigManagerService(configOpts);
      expect(configService).toBeDefined();
    });
  });
})
