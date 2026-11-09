const { test, expect } = require('@playwright/test');

test('la página inicial carga y muestra el nombre del juego', async ({ page }) => {
  const response = await page.goto('/');

  expect(response.status()).toBe(200);
  await expect(page).toHaveTitle('flappy edem');
  await expect(page.getByRole('heading', { level: 1, name: 'flappy edem', exact: true })).toBeVisible();
});
