import pdf from 'pdf-parse';
import fs from 'fs';

async function run() {
  try {
    const data = fs.readFileSync('C:\\Users\\Divyansh_Resume.pdf');
    const r = await pdf(data);
    console.log('RESUME_CONTENT_START\n');
    console.log(r.text);
    console.log('\nRESUME_CONTENT_END');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
