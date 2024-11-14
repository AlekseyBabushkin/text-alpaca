function accordion() {
  const accordionsToggle = document.querySelectorAll('[data-accordion-toggle]')

  accordionsToggle.forEach(accordionTrigger => {
    accordionTrigger.addEventListener('click', () => {
      accordionTrigger.classList.toggle('is-active')

      const accordion = accordionTrigger.closest('[data-accordion]')
      const accordionBody = accordion.querySelector(':scope > [data-accordion-body]')

      if (accordion && accordionBody) {
        if (accordionTrigger.classList.contains('is-active')) {
          accordionBody.style.maxHeight = `${accordionBody.scrollHeight}px`
          accordionBody.classList.add('is-active')
        } else {
          accordionBody.classList.remove('is-active')
          accordionBody.style.maxHeight = '0'
        }

        updateExternalAccordions(accordion, accordionBody.scrollHeight)
      }
    })
  })

  const updateExternalAccordions = (accordion, addedHeight) => {
    const externalAccordion = getExternalAccordion(accordion)

    if (externalAccordion) {
      const externalAccordionBody = externalAccordion.querySelector(':scope > [data-accordion-body]')

      if (externalAccordionBody) {
        externalAccordionBody.style.maxHeight = `${externalAccordionBody.scrollHeight + addedHeight}px`
        updateExternalAccordions(externalAccordion, addedHeight)
      }
    }
  }

  const getExternalAccordion = (accordion) => {
    return accordion.parentElement.closest('[data-accordion]')
  }
}

export default accordion;
