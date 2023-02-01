const settingsAnimation = (open, setOpen) => {
  const settings = document.querySelector(".settings");
  const switcher = document.querySelector(".switcher");

  setOpen(!open);

  setTimeout(() => {
    switcher.classList.remove("animate-slide-in-left");
    settings.classList.remove("animate-settings-rotate-right");
  }, 300);
  switcher.classList.remove("sr-only");
  switcher.classList.add("animate-slide-in-left");
  settings.classList.add("animate-settings-rotate-right");

  if (open === true) {
    setTimeout(() => {
      switcher.classList.add("sr-only");
      switcher.classList.remove("animate-slide-in-right");
      settings.classList.remove("animate-settings-rotate-left");
    }, 280);
    switcher.classList.add("animate-slide-in-right");
    settings.classList.add("animate-settings-rotate-left");
  }
};

export default settingsAnimation;