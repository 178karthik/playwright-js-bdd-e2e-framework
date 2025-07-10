const {test, expect} = require('@playwright/test')
test('Browser Context First Playwright test',async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
console.log(await page.title())
await page.locator("#username").fill("rahulshetty");
await page.locator("#password").fill("admin123");
await page.locator("#signInBtn").click();
console.log(await page.locator("[style*='block']").textContent())
await expect(page.locator("[style*='block']")).toContainText("Incorrect")
})

test("Browser Playwright test",async ({page})=>{
await page.goto("https://google.com")
await expect(page).toHaveTitle("Google");
})