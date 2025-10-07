import { test, expect } from '@playwright/test';

test('Basic Form submit', async ({ page }) => {
  // 2.3
  await page.goto('http://localhost:8080/'); // เปิดเว็บ
  await page.fill('input[label="Name"]', 'Aod');  // ใส่ค่า Name
  await page.fill('input[label="Email"]', 'aod@example.com'); // ใส่ค่า Email
  await page.click('button[type="submit"]'); // กด Submit

  // ตรวจสอบผลลัพธ์ที่แสดง
  await expect(page.locator('text=Aod')).toBeVisible();
  await expect(page.locator('text=aod@example.com')).toBeVisible();

  // 2.4
  // ตรวจสอบ input values หลังกรอก
  await expect(page.locator('input[label="Name"]')).toHaveValue('Aod');
  await expect(page.locator('input[label="Email"]')).toHaveValue('aod@example.com');

  // ตรวจสอบปุ่ม Submit
  await expect(page.locator('button[type="submit"]')).toBeEnabled();
});
