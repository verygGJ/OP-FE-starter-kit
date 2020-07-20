import  "./markup-menu"

import Popups from './components/popups'
import Select from './components/select'

document.addEventListener("DOMContentLoaded", () => {
  global.customPopups = new Popups()
  global.customSelect = new Select()
});