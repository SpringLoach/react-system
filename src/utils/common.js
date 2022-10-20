export const getEnumLabel = function (list, value) {
  const target = list.find(item => item.value === value)
  if (target) {
    return target.label
  }
  return null
}