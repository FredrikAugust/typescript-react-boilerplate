/**
 * This is used for testing. Since testing uses shadowDOM, we can't
 * actually have animations. So we will instead instantly trigger the
 * callback of the animation.
 * 
 * This is also required to avoid React complaining.
 * 
 * @returns void
 * @param {function} callback 
 */
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};