const API_URL = "PASTE_YOUR_EXEC_URL_HERE";

let CONFIG = {};

async function loadConfig() {
  const res = await fetch(API_URL + "?mode=config_all");
  CONFIG = await res.json();
}
