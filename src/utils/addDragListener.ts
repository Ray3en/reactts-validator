export const addResizeListener = (
  target: HTMLElement,
  callback: (deltaX: number, deltaY: number, event: MouseEvent) => void,
  onResizeStart?: (event: MouseEvent) => void,
  onResizeEnd?: (event: MouseEvent) => void
) => {
  let startX = 0;
  let startY = 0;

  const cancel = (event: MouseEvent) => {
    document.onmousemove = null;
    document.onmouseup = null;
    onResizeEnd && onResizeEnd(event);
  };

  target.onmousedown = (event: MouseEvent) => {
    startX = event.clientX;
    startY = event.clientY;

    onResizeStart && onResizeStart(event);

    document.onmousemove = (event: MouseEvent) => {
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      callback(deltaX, deltaY, event);
    };

    document.onmouseup = cancel;
  };
};
