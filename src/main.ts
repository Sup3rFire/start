import "@fontsource/fira-code/300.css";
import "@fontsource/fira-code/500.css";
import "./style.css";

document.addEventListener("DOMContentLoaded", async () => {
  const clock = document.getElementById("clock") as HTMLElement;
  const clockUpdate = () => {
    let date = new Date();
    clock.innerHTML = `${date
      .toTimeString()
      .slice(0, 8)}<span class="small">.${date
      .getMilliseconds()
      .toString()
      .padStart(3, "0")}</span>`;
    requestAnimationFrame(clockUpdate);
  };

  clockUpdate();
});
