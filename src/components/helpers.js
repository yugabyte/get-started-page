export const copyToClipboard = function (text) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus({ preventScroll: true })
  textArea.select()

  try {
    document.execCommand('copy')
  } catch (err) {
    console.error('Unable to copy to clipboard')
  }
  document.body.removeChild(textArea)
}
