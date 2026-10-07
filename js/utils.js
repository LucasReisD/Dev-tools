const alphabets = { upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', lower: 'abcdefghijklmnopqrstuvwxyz', number: '0123456789', symbol: '!@#$%^&*_-+=?' };

export function randomInt(min, max) {
  if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max) || max < min) throw Error('Intervalo inválido.');
  const range = max - min + 1;
  const limit = Math.floor(0x100000000 / range) * range;
  const bytes = new Uint32Array(1);
  do crypto.getRandomValues(bytes); while (bytes[0] >= limit);
  return min + (bytes[0] % range);
}
export function secureString(length, groups) { const chars = groups.map(g => alphabets[g]).join(''); return Array.from({ length }, () => chars[randomInt(0, chars.length - 1)]).join(''); }
export function uuidV4() { if (crypto.randomUUID) return crypto.randomUUID(); const bytes = crypto.getRandomValues(new Uint8Array(16)); bytes[6] = (bytes[6] & 15) | 64; bytes[8] = (bytes[8] & 63) | 128; return [...bytes].map((byte, i) => `${[4, 6, 8, 10].includes(i) ? '-' : ''}${byte.toString(16).padStart(2, '0')}`).join(''); }
export async function digest(input, algorithm) { const buffer = await crypto.subtle.digest(algorithm, new TextEncoder().encode(input)); return [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, '0')).join(''); }
export async function copyText(text) { if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text); const input = document.createElement('textarea'); input.value = text; document.body.append(input); input.select(); document.execCommand('copy'); input.remove(); }
export function makeTestData(type, quantity) { if (!Number.isInteger(quantity) || quantity < 1 || quantity > 50) throw Error('Escolha uma quantidade entre 1 e 50.'); const first = ['Lucas', 'Marina', 'Rafael', 'Camila', 'Diego', 'Ana'], last = ['Almeida', 'Costa', 'Souza', 'Pereira', 'Lima', 'Ramos']; return Array.from({ length: quantity }, (_, i) => { const name = `${first[i % first.length]} ${last[(i * 3) % last.length]}`; const key = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(' ', '.'); return { name, email: `${key}${i + 1}@example.com`, phone: `+55 85 9${String(10000000 + i).slice(1)}`, date: `202${i % 6}-0${(i % 9) + 1}-${String((i % 27) + 1).padStart(2, '0')}`, address: `Rua Exemplo, ${100 + i} — Centro`, username: `${key}${i + 1}`, number: String(randomInt(1000, 9999)) }[type]; }); }
