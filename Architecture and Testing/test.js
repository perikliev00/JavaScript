const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
let browser, page; // Declare reusable variables
describe('E2E tests', async function() {
  before(async () => { browser = await chromium.launch(); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); }); 
  it('loads static page', async function() {
    await page.goto('https://www.youtube.com/');
    await page.screenshot({ path: `index.png` });
    await browser.close();
  });
  
});

