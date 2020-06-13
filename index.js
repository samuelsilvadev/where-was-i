(function () {
  'use strict';

  const KEY = 'whereWasIPosition';

  window.addEventListener('load', function () {
    const lastPositions = this.localStorage.getItem(KEY);

    if (lastPositions) {
      const { scrollX = 0, scrollY = 0 } = JSON.parse(lastPositions);

      setTimeout(() => {
        window.scrollTo({
          top: scrollY,
          left: scrollX,
          behavior: 'auto',
        });
      }, 0);
    }
  });

  window.addEventListener('beforeunload', function () {
    const { scrollY, scrollX } = this;

    this.localStorage.setItem(KEY, JSON.stringify({ scrollX, scrollY }));
  });

  window.addEventListener('mouseup', function (event) {
    console.log('event', window.getSelection());
  });
})();
