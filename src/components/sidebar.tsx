import React from "react";
import { scaleDown as Menu } from "react-burger-menu";

export default (props: any) => {
  return (
    <Menu disableAutoFocus {...props}>
      <h2 className="side-title">Tetra</h2>
      <a className="bm-item" href="/gallery">
        Gallery
      </a>
    </Menu>
  );
};
