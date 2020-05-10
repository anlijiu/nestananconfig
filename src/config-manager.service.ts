import { Injectable, Inject } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

import { EnvConfig } from './interfaces';

@Injectable()
export class ConfigManagerService {
  private readonly envConfig: EnvConfig;
  private index: number;

  constructor(@Inject('CONFIG_OPTIONS') private options) {
    this.envConfig = {};
    this.index = 0;
    this.walkDir(options.folder, this.envConfig);
  }

  get(key: string): string|number|boolean|EnvConfig {
    return this.envConfig[key];
  }

  private walkDir = (pathStr, pNode) => {
    const files = fs.readdirSync(pathStr);
    files.forEach((file) => {
      if(fs.statSync(pathStr + '/' + file).isDirectory()) {
        pNode[file] = {};
        this.walkDir(pathStr + '/' + file, pNode[file]);
      } else {
        if (/.env$/.test(file)){
          const fullPath = pathStr + '/' + file;
          const pkey = file.slice(0, -4);
          pNode[pkey] = {};
          const content = dotenv.parse(fs.readFileSync(fullPath, {encoding:'utf8'}))
          pNode[pkey] = content;
        }
      }
    });
  }
}
