import { serve } from "https://deno.land/std@0.52.0/http/server.ts";

const s = serve({ port: 8008 });
console.log("http://localhost:8008/");

const main = async () => {
    for await (const req of s) {
        req.respond({ body: new TextEncoder().encode([...'node'].sort().join('')) });
    }
}

main();