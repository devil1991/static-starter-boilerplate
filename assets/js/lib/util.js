export const isMobile = () => window.innerWidth < 768

export const supportsObjectFit = () => {
  let objectFit = false
  for (let prop in document.documentElement.style) {
    if (/object(?:-f|F)it$/.test(prop)) {
      objectFit = true
      break
    }
  }
  return objectFit
}

export const isIE = () => {
  return navigator.userAgent.toLowerCase().indexOf('msie') > 0
}

export const isIEorEdge = () => {
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    return true
  } else {
    return false
  }
}

export const isFirefox = () => {
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1
}

export const write = (el, value) => {
  el.innerHTML = value
}

export const set = (item, selector) => {
  if (item instanceof Array) {
    for (let i of item) {
      i.classList.add(selector)
    }
  } else {
    item.classList.add(selector)
  }
}

export const unset = (item, selector) => {
  if (item instanceof Array) {
    for (let i of item) {
      i.classList.remove(selector)
    }
  } else {
    item.classList.remove(selector)
  }
}

export const contains = (item, selector) => {
  return item.classList.contains(selector)
}

export const toggle = (item, selector) => {
  if (item instanceof Array) {
    for (let i of item) {
      i.classList.toggle(selector)
    }
  } else {
    item.classList.toggle(selector)
  }
}

export const getHeight = (el) => {
  return `${el.offsetHeight}px`
}

export const getWidth = (el) => {
  return `${el.offsetWidth}px`
}

export const isOver = (breakpoint) => {
  return (window.innerWidth > breakpoint)
}

export const deepClone = obj => {
  return JSON.parse(JSON.stringify(obj))
}

export const getUrlParam = name => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]') // eslint-disable-line
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  let results = regex.exec(location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

export const handleize = str => str.replace(/[ /_]/g, '-').toLowerCase()

/**
 * Decodes a string that has been encode through the 'url_encode' Shopify filter
 * @param {*} str
 */
export const decode = str => decodeURIComponent(str).replace(/\+/g, ' ')

/**
 * Used by components like the product card to select
 * the current product image based on the active color.
 * If there is no active color, a fallback image
 * should be returned if it is defined.
 *
 * @param {*} color
 * @param {*} images
 * @param {*} featured
 * @param {*} fallback
 */

export const createArrayFromNumRange = (size, start) => {
  return Array.from(Array(size), (_, i) => start + i)
}

/* Element.closest() polyfill for IE11 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this

    do {
      if (el.matches(s)) return el
      el = el.parentElement || el.parentNode
    } while (el !== null && el.nodeType === 1)
    return null
  }
}
