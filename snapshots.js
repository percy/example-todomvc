const PercyScript = require('@percy/script');

  PercyScript.run(async (page, percySnapshot) => {
    await page.goto('http://localhost:8000', { widths: [375, 768, 1440] });
    await percySnapshot('Homepage');
    await page.type('.new-todo', 'A really important todo');
    await page.keyboard.press('Enter');
    await percySnapshot('New Todo', { widths: [375, 768, 1440] });
  });