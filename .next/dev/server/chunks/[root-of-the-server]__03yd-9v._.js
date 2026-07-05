module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/bakong-khqr-payment-integration (1)/src/db/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloads",
    ()=>downloads,
    "insertPaymentSchema",
    ()=>insertPaymentSchema,
    "payments",
    ()=>payments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/drizzle-zod/index.mjs [app-route] (ecmascript)");
;
;
const payments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('payments', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('id').primaryKey().defaultRandom(),
    md5: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('md5').unique().notNull(),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numeric"])('amount').notNull(),
    currency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('currency').notNull().default('USD'),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('status').notNull().default('pending'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    paidAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('paid_at'),
    downloadUnlocked: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])('download_unlocked').default(false).notNull()
});
const downloads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('downloads', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])('id').primaryKey().defaultRandom(),
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('title').notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('description').notNull(),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numeric"])('price').notNull(),
    fileUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('file_url').notNull(),
    imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('image_url'),
    category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('category')
});
const insertPaymentSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInsertSchema"])(payments);
}),
"[project]/Downloads/bakong-khqr-payment-integration (1)/src/db/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db,
    "pool",
    ()=>pool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/drizzle-orm/node-postgres/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/src/db/schema.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL is required");
}
/**
 * Cloud PostgreSQL providers (Neon, Supabase, Render, Railway, Heroku, etc.)
 * require SSL. Local databases usually don't support it.
 * Auto-detect: enable SSL for non-local hosts or when sslmode is in the URL.
 */ function needsSSL(url) {
    if (process.env.DATABASE_SSL === "false") return false;
    if (process.env.DATABASE_SSL === "true") return true;
    if (/sslmode=(require|prefer|verify)/i.test(url)) return true;
    try {
        const host = new URL(url).hostname;
        return ![
            "localhost",
            "127.0.0.1",
            "::1",
            "host.docker.internal"
        ].includes(host);
    } catch  {
        return false;
    }
}
const globalForDb = globalThis;
const pool = globalForDb.__arenaNextJsPostgresqlPool ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$pg$29$__["Pool"]({
    connectionString: databaseUrl,
    ssl: needsSSL(databaseUrl) ? {
        rejectUnauthorized: false
    } : undefined,
    connectionTimeoutMillis: 10_000
});
if ("TURBOPACK compile-time truthy", 1) {
    globalForDb.__arenaNextJsPostgresqlPool = pool;
}
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(pool, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/Downloads/bakong-khqr-payment-integration (1)/src/db/ensure.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ensureTables",
    ()=>ensureTables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
let ensured = false;
async function tryExec(query) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].execute(query);
    } catch (err) {
        // Non-fatal: log and continue (e.g. no permission for extensions)
        console.warn('ensureTables step skipped:', err instanceof Error ? err.message : err);
    }
}
/**
 * If a table exists but its `id` column is not uuid-compatible (e.g. a legacy
 * integer/serial PK), rename it aside and let the correct table be recreated.
 * Old data is preserved in <table>_legacy.
 */ async function fixIncompatibleIdColumn(table) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].execute(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
      SELECT data_type FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = ${table} AND column_name = 'id'
    `);
        const rows = result.rows;
        if (rows.length === 0) return; // table doesn't exist yet
        const type = rows[0].data_type.toLowerCase();
        if (type !== 'uuid' && type !== 'text' && type !== 'character varying') {
            console.warn(`Table "${table}" has incompatible id type "${type}" — renaming to ${table}_legacy`);
            await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`DROP TABLE IF EXISTS ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(`${table}_legacy`)}`);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].execute(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`ALTER TABLE ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(table)} RENAME TO ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"].raw(`${table}_legacy`)}`);
        }
    } catch (err) {
        console.warn(`fixIncompatibleIdColumn(${table}) skipped:`, err instanceof Error ? err.message : err);
    }
}
async function ensureTables() {
    if (ensured) return;
    // gen_random_uuid() needs pgcrypto on PostgreSQL < 13
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`CREATE EXTENSION IF NOT EXISTS pgcrypto`);
    // Migrate legacy tables whose id column can't hold UUIDs
    await fixIncompatibleIdColumn('downloads');
    await fixIncompatibleIdColumn('payments');
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
    CREATE TABLE IF NOT EXISTS downloads (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      title text NOT NULL,
      description text NOT NULL,
      price numeric NOT NULL,
      file_url text NOT NULL
    )
  `);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`ALTER TABLE downloads ADD COLUMN IF NOT EXISTS image_url text`);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`ALTER TABLE downloads ADD COLUMN IF NOT EXISTS category text`);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
    CREATE TABLE IF NOT EXISTS payments (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      md5 text,
      amount numeric,
      currency text NOT NULL DEFAULT 'USD',
      status text NOT NULL DEFAULT 'pending',
      created_at timestamp NOT NULL DEFAULT now(),
      paid_at timestamp,
      download_unlocked boolean NOT NULL DEFAULT false
    )
  `);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`ALTER TABLE payments ADD COLUMN IF NOT EXISTS md5 text`);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`ALTER TABLE payments ADD COLUMN IF NOT EXISTS amount numeric`);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`ALTER TABLE payments ADD COLUMN IF NOT EXISTS currency text NOT NULL DEFAULT 'USD'`);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`ALTER TABLE payments ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'pending'`);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`ALTER TABLE payments ADD COLUMN IF NOT EXISTS created_at timestamp NOT NULL DEFAULT now()`);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`ALTER TABLE payments ADD COLUMN IF NOT EXISTS paid_at timestamp`);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`ALTER TABLE payments ADD COLUMN IF NOT EXISTS download_unlocked boolean NOT NULL DEFAULT false`);
    await tryExec(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`CREATE UNIQUE INDEX IF NOT EXISTS payments_md5_unique ON payments (md5)`);
    ensured = true;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/bakong-khqr-payment-integration (1)/src/app/api/payments/create/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/src/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$bakong$2d$khqr$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/bakong-khqr/src/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$ensure$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/src/db/ensure.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$ensure$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$ensure$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
// Configure via env vars, falls back to demo values
const BAKONG_ACCOUNT = process.env.BAKONG_ACCOUNT_ID || 'demo@aba'; // e.g. yourname@wing / yourname@aba
const MERCHANT_NAME = process.env.MERCHANT_NAME || process.env.BAKONG_MERCHANT_NAME || 'Premium Downloads KH';
const MERCHANT_CITY = process.env.MERCHANT_CITY || process.env.BAKONG_MERCHANT_CITY || 'Phnom Penh';
const QR_EXPIRE_MINUTES = 15;
async function POST(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$ensure$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureTables"])();
        const { downloadId } = await request.json();
        if (!downloadId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Download ID is required'
            }, {
                status: 400
            });
        }
        // Get download details
        const downloadResult = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["downloads"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["downloads"].id, downloadId)).limit(1);
        if (downloadResult.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Download not found'
            }, {
                status: 404
            });
        }
        const download = downloadResult[0];
        const amount = parseFloat(download.price);
        // Generate unique bill number
        const billNumber = `DL-${Date.now().toString(36).toUpperCase()}`;
        // Create IndividualInfo for a dynamic KHQR.
        // NOTE: expirationTimestamp is REQUIRED for dynamic KHQR (QR with an amount).
        const optionalData = {
            currency: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$bakong$2d$khqr$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["khqrData"].currency.usd,
            amount: amount,
            billNumber: billNumber,
            storeLabel: download.title.substring(0, 25),
            terminalLabel: 'WEB',
            expirationTimestamp: Date.now() + QR_EXPIRE_MINUTES * 60 * 1000
        };
        const individualInfo = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$bakong$2d$khqr$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IndividualInfo"](BAKONG_ACCOUNT, MERCHANT_NAME, MERCHANT_CITY, optionalData);
        const khqr = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$bakong$2d$khqr$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BakongKHQR"]();
        const qrResponse = khqr.generateIndividual(individualInfo);
        // Response shape: { status: { code, errorCode, message }, data: { qr, md5 } }
        if (!qrResponse || qrResponse.status?.code !== 0 || !qrResponse.data?.qr) {
            console.error('KHQR generation failed:', JSON.stringify(qrResponse?.status));
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: qrResponse?.status?.message || 'Failed to generate KHQR code',
                details: qrResponse?.status
            }, {
                status: 500
            });
        }
        const qrString = qrResponse.data.qr;
        const md5 = qrResponse.data.md5;
        // Store payment record. Generate the UUID in JS so we never depend on
        // gen_random_uuid() being available in the hosted database.
        const paymentRow = {
            id: crypto.randomUUID(),
            md5,
            amount: amount.toFixed(2),
            currency: 'USD',
            status: 'pending'
        };
        let payment;
        try {
            [payment] = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payments"]).values(paymentRow).onConflictDoNothing({
                target: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payments"].md5
            }).returning();
        } catch  {
            // Fallback for databases where the unique index on md5 couldn't be
            // created (e.g. legacy tables) — insert without conflict handling.
            const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payments"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payments"].md5, md5)).limit(1);
            if (existing.length > 0) {
                payment = existing[0];
            } else {
                [payment] = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payments"]).values(paymentRow).returning();
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            paymentId: payment?.id ?? null,
            md5,
            qrString,
            amount: amount.toFixed(2),
            downloadTitle: download.title,
            billNumber,
            expiresAt: optionalData.expirationTimestamp,
            demoMode: !process.env.BAKONG_TOKEN
        });
    } catch (error) {
        console.error('Payment creation error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03yd-9v._.js.map