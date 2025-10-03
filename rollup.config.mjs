import { join } from 'node:path';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import packageJson from './package.json' with { type: 'json' };
import tsBuildConfig from './tsconfig.build.json' with { type: 'json' };

const { outDir } = tsBuildConfig.compilerOptions;

export default defineConfig(
  /** @type {const} */ (['cjs', 'esm']).map(
    /**
     * Rollup options for each module format
     *
     * @param {ModuleFormat} format
     * @returns {RollupOptions}
     */
    (format) => ({
      input: 'src/index.ts',
      external: Object.keys(packageJson.peerDependencies),
      output: [
        {
          dir: join(outDir, format),
          format,
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true,
          sourcemapExcludeSources: true,
        },
      ],
      plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
          tsconfig: 'tsconfig.build.json',
          compilerOptions: {
            outDir: join(outDir, format),
          },
        }),
      ],
    }),
  ),
);

/**
 * @import { ModuleFormat, RollupOptions } from 'rollup'
 */
