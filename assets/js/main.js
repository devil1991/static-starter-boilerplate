import Global from './global'
import init from './lib/init'
// import AOS from 'aos'

document.addEventListener('DOMContentLoaded', async () => {
  init({
    module: 'modules'
  }).mount()
  const g = new Global();
  g.init();

  // AOS.init();
})
