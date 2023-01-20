import esbuild from 'esbuild';
import alias from 'esbuild-plugin-alias';

let ctx = await esbuild.context({
    plugins: [
        alias({
            //'imported-paths': '/home/user/lib/src/resolved-path' <--- Make sure this is an absolute path
            //After telling esbuild how to resolve, tell tsconfig too.
        })
    ],
    entryPoints: ["src/index.tsx"],
    target: ['es2020',
        'chrome58',
        'edge18',
        'firefox57',
        'safari11',],
    bundle: true,
    outfile: "", //If there is only a single entry file
    outdir: "./public/dist", //If there are multiple entry files.
    jsx: 'automatic',
    loader: { '.png': 'file' }

});

console.log('serving on localhost:3000');
await ctx.watch();

let { host, port } = await ctx.serve({
    servedir: 'public',
    port: 3000
});

