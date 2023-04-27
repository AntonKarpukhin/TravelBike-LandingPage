export function changePageColor(arrayDarkElements) {
  arrayDarkElements.forEach(item => {
    if (item.classList.contains('dark_title')) {
      item.classList.toggle('dark_type_title')
    } else if (item.classList.contains('dark_subtitle')) {
      item.classList.toggle('dark_type_subtitle')
    } else if (item.classList.contains('dark_body')) {
      item.classList.toggle('dark_type_body')
    } else if (item.classList.contains('dark_footer')) {
      item.classList.toggle('dark_type_footer')
    } else if (item.classList.contains('dark_button')) {
      item.classList.toggle('dark_type_button')
    } else if (item.classList.contains('dark_input')) {
      item.classList.toggle('dark_type_input')
    } else if (item.classList.contains('dark_line')) {
      item.classList.toggle('dark_type_line')
    }
  })
}
