const requiredKeys = ['DOTENV_PRIVATE_KEY_DEVELOPMENT'];

const missingKeys = requiredKeys.filter((name) => {
  const value = process.env[name];
  return !value || value.trim().length === 0;
});

if (missingKeys.length > 0) {
  console.error(
    [
      'Missing required environment variables for dotenvx decryption.',
      `Add ${missingKeys.join(', ')} before running this app.`,
      'This repository keeps its runtime env values in .env.vault.',
    ].join(' '),
  );

  process.exit(1);
}
