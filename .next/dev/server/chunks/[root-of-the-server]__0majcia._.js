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
"[project]/Downloads/bakong-khqr-payment-integration (1)/src/app/api/downloads/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bakong-khqr-payment-integration (1)/src/db/schema.ts [app-route] (ecmascript)");
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
const PRODUCTS = [
    {
        title: "Coffee Web Store",
        description: "Complete coffee shop website template. Fully responsive, modern design with menu, ordering system and admin dashboard. Ready to deploy.",
        price: "29.99",
        fileUrl: "https://drive.google.com/file/d/1gZ8M-Y82i5hG_IIde_dP3xd6Dn-g2eST/view?usp=sharing",
        imageUrl: "/products/coffee-web-store.png",
        category: "Web Template"
    }
];
async function GET() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$ensure$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureTables"])();
        const allDownloads = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["downloads"]);
        if (allDownloads.length === 0) {
            // Generate IDs in JS so seeding works even without gen_random_uuid()
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["downloads"]).values(PRODUCTS.map((p)=>({
                    ...p,
                    id: crypto.randomUUID()
                })));
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["downloads"]));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(allDownloads);
    } catch (error) {
        console.error('Downloads API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bakong$2d$khqr$2d$payment$2d$integration__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'database_unavailable',
            message: error instanceof Error ? error.message : 'Unknown database error',
            hint: 'Make sure PostgreSQL is running and DATABASE_URL in .env points to it (e.g. postgresql://postgres:postgres@127.0.0.1:5432/app_db).'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0majcia._.js.map