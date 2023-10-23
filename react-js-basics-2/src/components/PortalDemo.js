import React, { createPortal } from 'react-dom';

function PortalDemo() {
  return createPortal(
    <div>
      <h1>Portals Demo</h1>
    </div>,
    document.getElementById('portal-demo')
  );
}

export default PortalDemo;