// Every validation returns an object
// {result: true, message:''}

// pass: TRUE/FALSE depending if the validation rules passed
// message: in case of any warning o error this field will hold that information.
const empty = "This field is required.";

function prepareMessage(pass, message) {
  return { pass: pass, message: message };
}

export function sku(value) {
  // Alphanumeric string between 10-20 characters
  const skuRegExPatter = /^[a-z0-9]{10,20}$/i;
  const notSku = "It must be an alphanumeric value between 10-20 characters.";

  if (!isNotEmpty(value)) {
    return prepareMessage(false, empty);
  }

  if (skuRegExPatter.test(value)) {
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

  return prepareMessage(true, "");
}
