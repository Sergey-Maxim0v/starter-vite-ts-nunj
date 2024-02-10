const elementLinkHome = document.querySelector("[data-page-link-home]")
const elementLinkVite = document.querySelector("[data-page-link-vite]")

const baseUrl = window.location.href.replace('vite', '')

elementLinkHome?.setAttribute("href", `${baseUrl}`)
elementLinkVite?.setAttribute("href", `${baseUrl}vite`)
