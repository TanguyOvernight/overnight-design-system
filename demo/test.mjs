// Test de fumée : flow home -> party -> joueurs -> catalogue -> un jeu. Échoue si erreur JS.
// Prérequis : npm i -D playwright && npx playwright install chromium
import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const b = await chromium.launch();
const page = await b.newPage({ viewport:{width:430,height:900} });
const errs = [];
page.on('pageerror', e=>errs.push(e.message));
page.on('console', m=>{ if(m.type()==='error' && !/CERT|Failed to load resource/.test(m.text())) errs.push(m.text()); });
page.on('dialog', d=>d.accept());
await page.goto('file://'+path.resolve('demo/index.html'));
await page.waitForTimeout(400);
await page.getByRole('button',{name:/Party mode/i}).click();            // Home -> Party
await page.waitForTimeout(200);
for (const nm of ['Léa','Maxime']) { await page.fill('#nm', nm); await page.getByRole('button',{name:'+',exact:true}).click(); }
await page.getByRole('button',{name:/PARTI/i}).click();                 // -> catalogue
await page.waitForTimeout(200);
const row = t=>page.locator('.gamerow',{hasText:t}).click();
await row('Le Bus'); await page.waitForTimeout(150);
await page.getByRole('button',{name:/La Pyramide/}).click(); await page.waitForTimeout(150);
await page.getByRole('button',{name:'Rouge',exact:true}).click(); await page.waitForTimeout(200);
console.log('ERREURS JS:', errs.length ? JSON.stringify(errs) : 'AUCUNE');
await b.close();
process.exit(errs.length ? 1 : 0);
