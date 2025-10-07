import { join } from 'node:path';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import { defineConfig } from 'rollup';
import packageJson from './package.json' with { type: 'json' };
import tsBuildConfig from './tsconfig.build.json' with { type: 'json' };

const { outDir } = tsBuildConfig.compilerOptions;
const external = Object.keys(packageJson.peerDependencies);

export default defineConfig(
  /** @type {const} */ (['cjs', 'esm']).map(
    /**
     * Rollup options for each module format
     */
    (format) => ({
      input: 'src/index.ts',
      output: [
        {
          dir: join(outDir, format),
          format,
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true,
        },
      ],
      external,
      treeshake: false,
      plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
          tsconfig: 'tsconfig.build.json',
          compilerOptions: {
            outDir: join(outDir, format),
          },
        }),
        preserveDirectives(),
      ],

      // Handle warnings as errors
      onwarn(warning) {
        const { code, message } = warning;

        // Skip warnings about "use client" directives
        if (code === 'MODULE_LEVEL_DIRECTIVE' && message.includes(`"use client"`)) {
          return;
        }

        throw new Error(warning.message, { cause: warning });
      },
    }),
  ),
);
