# Modal-wh

This repo contains all a package to create modal.


## 1. Depedencies

To use this package, you need to install these dependencies :
- npm install sass
- npm install react
- npm install react-dom

## 2. Exemple

Example of integration:

import Modal  from "modal-wh"

< Modal title={titleModale} message={messageModale}  type={infoModale} image={image} show={modale} onclose={closeModale} />

- title : title of modal
- message : message details of modal
- type : "success","warning" or "error" -> (The icon displayed is different depending on the type)
- image : if you want specif icon, provide it
- show : if not null, display modal
- onclose : function called to close the modal