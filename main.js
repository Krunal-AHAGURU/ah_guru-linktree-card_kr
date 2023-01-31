const shareButtons = document.querySelectorAll('.tile__share-button,.share__button');

async function copyText(e) {
  e.preventDefault()
  const link = this.getAttribute('link')
  console.log(link)
  try {
    await navigator.clipboard.writeText(link)
    alert("Copied the text: " + link)
  }
  catch (err) {
    console.erroe(err)
  }
}
shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))