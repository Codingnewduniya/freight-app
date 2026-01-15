import { saveBilty } from "./storage/index.js";

window.save = async function () {
  const data = {
    biltyNo: biltyNo.value,
    from: from.value,
    to: to.value,
    amount: amount.value
  };

  await saveBilty(data);
  alert("Bilty Saved");
};
