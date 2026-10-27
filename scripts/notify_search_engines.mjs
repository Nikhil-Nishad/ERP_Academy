// scripts/notify_search_engines.mjs
const host = 'erp-academy.vercel.app';
const key = '4e4ad5cd4b6d4fad8f612822ec5df74e';
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/blog/sap-s4hana-vs-ecc-differences`,
  `https://${host}/blog/sap-mm-fi-integration-obyc-guide`,
  `https://${host}/blog/sap-certification-cost-in-india`,
  `https://${host}/blog/non-it-to-sap-consultant-transition`,
  `https://${host}/blog/sap-mm-s4hana-interview-questions`,
  `https://${host}/blog/sap-business-partner-cvi-s4hana`,
  `https://${host}/blog/sap-s4hana-sourcing-procurement-roadmap`,
  `https://${host}/blog/sap-fico-interview-questions-real-world`,
  `https://${host}/courses/sap-mm`,
  `https://${host}/courses/sap-fi`,
  `https://${host}/courses/sap-hana`,
  `https://${host}/blog`,
  `https://${host}/`
];

const payload = {
  host,
  key,
  keyLocation,
  urlList
};

async function pingIndexNow() {
  console.log('Sending IndexNow notification to search engines (Bing, Microsoft Copilot, Yandex)...');
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });
      console.log(`Pinging ${endpoint} -> Status: ${res.status} ${res.statusText}`);
    } catch (err) {
      console.error(`Error pinging ${endpoint}:`, err.message);
    }
  }
}

pingIndexNow();
