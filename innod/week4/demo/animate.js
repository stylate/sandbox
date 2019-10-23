anime({
  targets: 'path',
  duration: 2000,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  loop: true,
  direction: 'alternate',
  delay: function(el, i) {
    if (i == 1) {
      return 3000;
    }
    return i * 350;
  }
})i
