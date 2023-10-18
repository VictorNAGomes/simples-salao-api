export function cnpjValidator(cnpj: string) {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj.length !== 14) {
    return false;
  }

  // Check for repeated digits
  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  // Validate first digit
  let sum = 0;
  let weight = 5;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i)) * weight;
    weight--;
    if (weight < 2) {
      weight = 9;
    }
  }
  let digit = 11 - (sum % 11);
  if (digit > 9) {
    digit = 0;
  }
  if (parseInt(cnpj.charAt(12)) !== digit) {
    return false;
  }

  // Validate second digit
  sum = 0;
  weight = 6;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i)) * weight;
    weight--;
    if (weight < 2) {
      weight = 9;
    }
  }
  digit = 11 - (sum % 11);
  if (digit > 9) {
    digit = 0;
  }
  if (parseInt(cnpj.charAt(13)) !== digit) {
    return false;
  }

  return true;
}
