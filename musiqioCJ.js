import 'dotenv/config';

async function ping() {
  try {
    const res = await fetch(`${process.env.MUSIQIO_BACK_URL}/api/albums`);
    console.log(`Ping OK: ${res.status}`);
  } catch (error) {
    console.error("Ping failed:", error.message);
  }
}

ping()