import page from "//unpkg.com/page/page.mjs";
import { addCatalog } from "./change.js";
import { addAbout } from "./change.js";
import { addContact } from "./change.js";
import { addDetails } from "./change.js";
page('/about',addAbout)
page('/contact',addContact);
page('/details',addDetails);
page('/catalog',addCatalog);
page.start();