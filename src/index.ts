import config from "./config";
import { init as initCore } from "./core";
import { init as initCanvas } from "./render";
import "./style.css";

const world = initCore(config);
initCanvas("canvasContainer", world, config);
