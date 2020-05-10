import { DynamicModule, Module } from '@nestjs/common';

import { ConfigModuleOptions } from './interfaces';
import { CONFIG_OPTIONS } from './constants';

@Module({})
export class ConfigManagerModule {
  static register(options: ConfigModuleOptions): DynamicModule {
    return {
      module: ConfigManagerModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
      ],
      exports: [CONFIG_OPTIONS],
    };
  }
}
