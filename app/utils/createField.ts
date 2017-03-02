export function createField(FieldClass, labelText, internalName, fieldValues) {
  var field = new FieldClass(labelText, fieldValues[internalName]);

  field.setInternalName(internalName);
  field.internalName = internalName;

  return field;
}
