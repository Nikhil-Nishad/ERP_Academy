#!/usr/bin/env node
/**
 * Automated Google PageSpeed Insights Audit Runner
 * Uses API Key: AIzaSyC92mSZMju6tGmdJc5vb1aT4j1W_VQtbX8
 * Run: node audit/scripts/run_pagespeed_audit.mjs
 */

import https from 'https';
import fs from 'fs';
import path from 'path';

const API_KEY = process.env.PAGESPEED_API_KEY || 'AIzaSyC92mSZMju6tGmdJc5vb1aT4j1W_VQtbX8';
const BASE_URL = 'https://erp-academy.vercel.app';

const targets = [
  { name: 'Homepage (Mobile)', url: `${BASE_URL}/`, strategy: 'mobile' },
  { name: 'Homepage (Desktop)', url: `${BASE_URL}/`, strategy: 'desktop' },
  { name: 'Blog: S/4HANA vs ECC (Mobile)', url: `${BASE_URL}/blog/sap-s4hana-vs-ecc-differences`, strategy: 'mobile' },
  { name: 'Course: SAP MM (Mobile)', url: `${BASE_URL}/courses/sap-mm`, strategy: 'mobile' }
];

async function fetchPageSpeed(targetUrl, strategy) {
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&strategy=${strategy}&key=${API_KEY}&category=performance&category=accessibility&category=best-practices&category=seo`;

  return new Promise((resolve, reject) => {
    https.get(endpoint, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function runAudit() {
  console.log('\n======================================================');
  console.log('   🚀 ERP Academy — Google PageSpeed Insights Audit');
  console.log('======================================================\n');

  const reportDir = path.join(process.cwd(), 'audit', 'reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const results = {};

  for (const item of targets) {
    process.stdout.write(`Analyzing ${item.name}... `);
    try {
      const response = await fetchPageSpeed(item.url, item.strategy);
      if (response.error) {
        console.log(`❌ Error: ${response.error.message}`);
        results[item.name] = { error: response.error.message };
        continue;
      }

      const { categories, audits } = response.lighthouseResult;
      const perf = Math.round((categories.performance?.score || 0) * 100);
      const acc = Math.round((categories.accessibility?.score || 0) * 100);
      const bp = Math.round((categories['best-practices']?.score || 0) * 100);
      const seo = Math.round((categories.seo?.score || 0) * 100);

      const fcp = audits['first-contentful-paint']?.displayValue;
      const lcp = audits['largest-contentful-paint']?.displayValue;
      const cls = audits['cumulative-layout-shift']?.displayValue;

      console.log(`✅ Done!`);
      console.log(`   Scores: Perf: ${perf}/100 | SEO: ${seo}/100 | Acc: ${acc}/100 | BP: ${bp}/100`);
      console.log(`   Core Vitals: FCP: ${fcp} | LCP: ${lcp} | CLS: ${cls}\n`);

      results[item.name] = {
        scores: { performance: perf, accessibility: acc, bestPractices: bp, seo },
        vitals: { fcp, lcp, cls }
      };
    } catch (err) {
      console.log(`❌ Failed: ${err.message}\n`);
      results[item.name] = { error: err.message };
    }
  }

  const outputPath = path.join(reportDir, 'latest_pagespeed_audit.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`Audit report saved to: ${outputPath}\n`);
}

runAudit();
