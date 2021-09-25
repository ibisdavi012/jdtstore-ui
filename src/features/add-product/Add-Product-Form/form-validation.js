// Every validation returns an object
// {result: true, message:''}

// pass: TRUE/FALSE depending if the validation rules passed
// message: in case of any warning o error this field will hold that information.
const empty = "This field is required.";

function prepareMessage(pass, message) {
  return { pass: pass, message: message };
}

function isAlphanumeric(value, minLength, maxLength) {
  const regExPattern = `^[a-z0-9]{${minLength},${maxLength}}$`;

  const reg = new RegExp(regExPattern, "i");

  return reg.test(value);
}

export function sku(value) {
  // Alphanumeric string between 10-20 characters

  const notSku = "It must be an alphanumeric value between 10-20 characters.";

  if (!isNotEmpty(value)) {
    return prepareMessage(false, empty);
  }

  if (isAlphanumeric(value, 10, 20)) {
    return prepareMessage(true, "");
  }

  return prepareMessage(false, notSku);
}

export function isNotEmpty(value) {
  return value && value.length > 0;
}

export function usd(price) {
  return true;
}

export function units(value, requiredUnit) {
  return true;
}

export function text(value) {
  if (!isNotEmpty(value)) {
    return prepareMessage(false, empty);
  }

  if (isAlphanumeric(value, 5, 15)) {
    return prepareMessage(true, "");
  }

  return prepareMessage(
    false,
    "Enter an alphanumeric value between 5 and 15 characters."
  );
}
