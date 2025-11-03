import { dirname, join, relative, resolve } from 'node:path';
import { DEFAULT_EXTENSIONS as extensions } from '@babel/core';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'rollup';
import packageJson from './package.json' with { type: 'json' };
import tsBuildConfig from './tsconfig.build.json' with { type: 'json' };

const { outDir } = tsBuildConfig.compilerOptions;
const external = Object.keys(packageJson.peerDependencies);

export default defineConfig(
  /** @satisfies {OutputOptions[]} */ ([
    {
      entryFileNames: '[name].cjs',
      format: 'cjs',
    },
    {
      entryFileNames: '[name].js',
      format: 'esm',
    },
  ]).map(
    /**
     * Rollup options for each module format
     *
     * @returns {RollupOptions}
     */
    (options) => ({
      input: 'src/index.ts',
      output: [
        {
          ...options,
          dir: join(outDir, options.format),
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true,
          sourcemapExcludeSources: true,

          // Fix source map relative paths to sources
          sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
            const sourcePath = resolve(sourcemapPath, relativeSourcePath);
            return relative(dirname(sourcemapPath), sourcePath);
          },
        },
      ],
      external: ['react/jsx-runtime', ...external],
      jsx: 'react-jsx',
      treeshake: false,
      plugins: [
        nodeResolve({
          browser: true,
        }),
        commonjs(),
        typescript({
          tsconfig: 'tsconfig.build.json',
          compilerOptions: {
            emitDeclarationOnly: true,
            outDir: join(outDir, options.format),
          },
        }),
        preserveDirectives(),
        babel({
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
          extensions: [...extensions, '.ts', '.tsx'],
        }),
      ],

      // Handle warnings as errors
      onwarn(warning) {
        throw new Error(warning.message, { cause: warning });
      },
    }),
  ),
);

/**
 * @import { OutputOptions, RollupOptions } from 'rollup'
 */
