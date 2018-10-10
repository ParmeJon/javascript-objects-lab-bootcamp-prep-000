var recipe = {};

function updateObjectWithKeyAndValue (object, key, value) {
  return object.assign ({}, object,{ [key]:value } );
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 obj[key] = value;
 return obj;
}

function deleteFromObjectByKey(object, key)