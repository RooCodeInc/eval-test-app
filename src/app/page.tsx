export default function Home() {
  const envVars = {
    APP_NAME: process.env.APP_NAME ?? 'eval-test-app',
    APP_ENV: process.env.APP_ENV ?? 'development',
    GREETING: process.env.GREETING ?? 'Hello from the eval test app!',
  };

  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '600px' }}>
      <h1>Eval Test App</h1>
      <p>This app exists to verify that the onboarding agent can set up a working environment.</p>
      <h2>Environment</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Variable</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(envVars).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee', fontFamily: 'monospace' }}>{key}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Health</h2>
      <p style={{ color: 'green', fontWeight: 'bold' }}>✓ App is running</p>
    </main>
  );
}
