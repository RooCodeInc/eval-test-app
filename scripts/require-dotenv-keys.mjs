const requiredKeys = ['DOTENV_PRIVATE_KEY_DEVELOPMENT'];

const missingKeys = requiredKeys.filter((name) => {
  const value = process.env[name];
  return !value || value.trim().length === 0;
});

if (missingKeys.length > 0) {
  console.error(
    [
      'Missing required environment variables.',
      `Add ${missingKeys.join(', ')} before running this app.`,
    ].join(' '),
  );

  process.exit(1);
}
