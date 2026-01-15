import { STORAGE_LEVEL } from "../config.js";
import * as local from "./localStorage.js";
import * as firebase from "./firebase.js";
import * as api from "./api.js";

export function saveBilty(data) {
  if (STORAGE_LEVEL === "LEVEL1") return local.save(data);
  if (STORAGE_LEVEL === "LEVEL2") return firebase.save(data);
  if (STORAGE_LEVEL === "LEVEL3") return api.save(data);
}

export function getBilties() {
  if (STORAGE_LEVEL === "LEVEL1") return local.getAll();
  if (STORAGE_LEVEL === "LEVEL2") return firebase.getAll();
  if (STORAGE_LEVEL === "LEVEL3") return api.getAll();
}
