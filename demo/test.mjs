// Test de fumée de la démo : ouvre chaque jeu, échoue s'il y a une erreur JS.
// Prérequis : npm i -D playwright && npx playwright install chromium
// Usage : node demo/test.mjs
import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const R = (p,n,e=true)=>p.getByRole('button',{name:n,exact:e});
const b = await chromium.launch();
const page = await b.newPage({ viewport:{width:430,height:900} });
const errs = [];
page.on('pageerror', e=>errs.push(e.message));
page.on('console', m=>{ if(m.type()==='error' && !/CERT|Failed to load resource/.test(m.text())) errs.push(m.text()); });
page.on('dialog', d=>d.accept());
await page.goto('file://'+path.resolve('demo/index.html'));
await page.waitForTimeout(400);
for (const nm of ['Léa','Maxime']) { await page.fill('#nm', nm); await R(page,'+').click(); }
await R(page,'Commencer la soirée').click(); await page.waitForTimeout(200);
const back = ()=>page.locator('button.iconbtn').first().click();
const row = t=>page.locator('.gamerow',{hasText:t}).click();
await row('Tape la carte'); await page.waitForTimeout(150);
await R(page,'Commencer').click(); await page.waitForTimeout(300);
await R(page,'TAPER').click(); await page.waitForTimeout(150);
await R(page,'Au joueur suivant').click(); await page.waitForTimeout(100); await back();
console.log('ERREURS JS:', errs.length ? JSON.stringify(errs) : 'AUCUNE');
await b.close();
process.exit(errs.length ? 1 : 0);
