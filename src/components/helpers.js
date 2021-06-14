export const copyToClipboard = function (text) {
  if (!window.navigator || !navigator.clipboard) {
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus({ preventScroll: true })
    textArea.select()
    try {
      document.execCommand('copy')
    } catch (err) {
      // TODO: Add fallback for copying text
    }
    document.body.removeChild(textArea)
    return
  }
  navigator.clipboard.writeText(text)
}
