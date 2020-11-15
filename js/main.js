import $ from 'jquery'
import 'bootstrap'

$(document).on('scroll', () => $("#navbar").toggleClass('shadow', $(document).scrollTop() > 0));