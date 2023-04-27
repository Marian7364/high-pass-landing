"use strict";

window.onload = function () {
  var topSearchIcon = document.querySelector('.header__top__search__icon');
  var topInput = document.querySelector('.header__top__input--unactive');
  var topButton = document.querySelector('.header__top__button--unactive');
  var bottom = document.querySelector('.header__bottom--unactive');
  var bottomBurger = document.querySelector('.header__bottom__burger--unactive');
  var bottomButton = document.querySelector('.header__bottom__button--unactive');
  var bottomList = document.querySelector('.header__bottom__list--unactive');
  var bottomPhone = document.querySelector('.header__bottom__phone--unactive');
  var leftWrapper = document.querySelector('.contacts__left-wrapper');
  var leftButton = document.querySelector('.contacts__left__button');
  topSearchIcon.addEventListener('click', function () {
    topSearchIcon.style.position = 'absolute';
    topButton.style.position = 'relative';
    topInput.style.position = 'relative';
    topSearchIcon.style.opacity = '0';
    topButton.style.opacity = '1';
    topInput.style.opacity = '1';
    topInput.style.right = '17px';
  });
  topButton.addEventListener('click', function () {
    topInput.style.position = 'absolute';
    topButton.style.position = 'absolute';
    topSearchIcon.style.position = 'relative';
    topInput.style.opacity = '0';
    topButton.style.opacity = '0';
    topSearchIcon.style.opacity = '1';
    topInput.style.right = '40px';
  });
  bottomBurger.addEventListener('click', function () {
    bottom.style.paddingTop = '13px';
    bottom.style.paddingBottom = '36px';
    bottom.style.borderTop = '1px solid #808080';
    bottom.style.background = '#202020';
    bottomButton.style.marginBottom = '14px';
    bottomButton.style.position = 'relative';
    bottomBurger.style.position = 'absolute';
    bottomList.style.position = 'relative';
    bottomPhone.style.position = 'relative';
    bottomButton.style.opacity = '1';
    bottomBurger.style.opacity = '0';
    bottomList.style.opacity = '1';
    bottomPhone.style.opacity = '1';
    bottomList.style.top = '0';
  });
  bottomButton.addEventListener('click', function () {
    bottom.style.paddingTop = '14px';
    bottom.style.paddingBottom = '13px';
    bottom.style.borderTop = 'none';
    bottom.style.background = '#4A4A4A';
    bottomButton.style.marginBottom = '0';
    bottomButton.style.position = 'absolute';
    bottomBurger.style.position = 'relative';
    bottomList.style.position = 'absolute';
    bottomPhone.style.position = 'absolute';
    bottomButton.style.opacity = '0';
    bottomBurger.style.opacity = '1';
    bottomList.style.opacity = '0';
    bottomPhone.style.opacity = '0';
    bottomList.style.top = '150px';
  });
  leftButton.addEventListener('click', function () {
    leftButton.style.opacity = '0';
    leftWrapper.style.opacity = '0';
  });
  new window.JustValidate('.about-us__wrapper__email', {
    rules: {
      email: {
        required: true,
        email: true
      }
    }
  });
  new window.JustValidate('.contacts__right__wrapper', {
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      comment: {
        required: true
      }
    }
  });
};