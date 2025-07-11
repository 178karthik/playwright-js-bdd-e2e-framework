const {test, expect} = require('@playwright/test')
test('Browser Context First Playwright test',async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
const userName = page.locator("#username")
const passWord = page.locator("#password")
const signInButton = page.locator("#signInBtn")
const cardTitles = page.locator(".card-body .card-title a")

await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
console.log(await page.title())
await userName.fill("rahulshetty");
await passWord.fill("learning");
await signInButton.click();
console.log(await page.locator("[style*='block']").textContent())
await expect(page.locator("[style*='block']")).toContainText("Incorrect")

await userName.clear()
await userName.fill("rahulshettyacademy")
await signInButton.click();

// console.log(await page.locator(".card-body .card-title a").first().textContent());
// console.log(await page.locator(".card-body .card-title a").nth(1).textContent());
await page.waitForSelector(".card-body .card-title")
const cardTitlesText = await cardTitles.allTextContents();
console.log(cardTitlesText)
})

test("Browser Playwright test",async ({page})=>{
await page.goto("https://google.com")
await expect(page).toHaveTitle("Google");
})