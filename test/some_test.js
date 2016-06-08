suite('test mocha + babel', () => {
  test('sleep', async () => {
    await new Promise((accept) => {
      setTimeout(accept, 1);
    });
  });
});
