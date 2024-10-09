# Modal-wh

This repo contains all a package to create modal.

## 1. Requirement

- Node : v18.16.1
- Editor : VSCode

## 2. Depedencies

To use this package, you need to install these dependencies (sass, react, react-dom):

- to install "npm install"

## 3. Exemple

Example of integration:

import Modal  from "modal-wh"

< Modal title={titleModale} message={messageModale}  type={infoModale} image={image} show={modale} onclose={closeModale} />

- title : title of modal
- message : message details of modal
- type : "success","warning" or "error" -> (The icon displayed is different depending on the type)
- image : if you want specif icon, provide it
- show : if not null, display modal
- onclose : function called to close the modal