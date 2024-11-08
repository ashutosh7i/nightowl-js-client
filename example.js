// step1- Use the NightOwl client
import initNightOwlClient from 'night-owl-js-client';

// step2- init client with api address
const NightOwl = initNightOwlClient('http://localhost:8080');

// step3- usage-

// add log-
NightOwl.log('User', 'user registered', { userId: '12345', email: 'user@example.com' });

// get logs-
const userLogs = await NightOwl.getLogs('User');

