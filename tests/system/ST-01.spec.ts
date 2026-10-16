import { test, expect } from '@playwright/test';

test('ST-01: complete purchase of two products', {
  annotation: {
    type: 'description',
    description: 'ทดสอบการซื้อ Backpack และ Bike Light ตั้งแต่ Login จนสั่งซื้อสำเร็จ'
  }
}, async ({ page }) => {
  await test.step('Login และตรวจสอบ Inventory', async () => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/.*inventory.html/);
  });
  await test.step('เพิ่มสินค้าสองรายการ', async () => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  });
  await test.step('ตรวจสอบ Cart', async () => {
    await page.click('.shopping_cart_link');
    await expect(page.locator('.inventory_item_name')).toHaveText([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light'
    ]);
  });
  await test.step('กรอก Checkout Information', async () => {
    await page.click('[data-test="checkout"]');
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '10110');
    await page.click('#continue');
  });
  await test.step('ตรวจสอบ Overview และสั่งซื้อ', async () => {
    await expect(page.locator('.inventory_item_name')).toHaveText([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light'
    ]);
    await page.click('[data-test="finish"]');
  });
  await test.step('ตรวจสอบ Order Complete', async () => {
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });
});