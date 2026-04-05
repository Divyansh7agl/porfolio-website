const pdf = require('pdf-parse');
const fs = require('fs');

async function run() {
  try {
    const data = fs.readFileSync('C:\\Users\\Divyansh_Resume.pdf');
    const parse = typeof pdf === 'function' ? pdf : pdf.default;
    const r = await parse(data);
    process.stdout.write('RESUME_CONTENT_START\n');
    process.stdout.write(r.text);
    process.stdout.write('\nRESUME_CONTENT_END');
  } catch (e) {
    process.stderr.write(e.stack);
    process.exit(1);
  }
}

run();
