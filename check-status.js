import { Rcon } from 'rcon-client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function checkStatus() {
  const timestamp = new Date().toISOString();
  let status = 'offline';
  let responseTime = null;

  console.log(`Checking server status at ${timestamp}...`);

  try {
    const startTime = Date.now();
    const rcon = await Rcon.connect({
      host: process.env.RCON_HOST,
      port: parseInt(process.env.RCON_PORT || '25575'),
      password: process.env.RCON_PASSWORD
    });
    await rcon.end();
    responseTime = Date.now() - startTime;
    status = 'online';
    console.log(`✓ Server is ONLINE (${responseTime}ms)`);
  } catch (error) {
    console.log('✗ Server is OFFLINE');
    console.log('Error:', error);
  }

  const historyPath = path.join(__dirname, 'public', 'data', 'status-history.json');
  let history = [];
  
  try {
    const data = fs.readFileSync(historyPath, 'utf8');
    history = JSON.parse(data);
  } catch (error) {
    console.log('No history file found, creating new one');
  }

  history.push({ timestamp, status, responseTime });

  if (history.length > 720) {
    history = history.slice(-720);
  }

  const dataDir = path.join(__dirname, 'public', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));

  console.log(`Status saved to ${historyPath}`);
  console.log(`Total records: ${history.length}`);
}

checkStatus().catch(console.error);
