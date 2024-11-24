import React, { useRef } from 'react';

const ResizableSections: React.FC = () => {
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const middleSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const resizer1Ref = useRef<HTMLDivElement>(null);
  const resizer2Ref = useRef<HTMLDivElement>(null);

  const MIN_WIDTH = 100;
  const MAX_WIDTH = 900;

  // Обработчик изменения для первого ресайзера (между левой и средней секцией)
  const onMouseDownResizer1 = (e: React.MouseEvent) => {
    e.preventDefault();

    // Запоминаем начальную позицию мыши
    const startX = e.clientX;
    const leftSection = leftSectionRef.current!;
    const middleSection = middleSectionRef.current!;

    // Получаем текущие размеры секций
    const leftSectionWidth = leftSection.offsetWidth;
    const middleSectionWidth = middleSection.offsetWidth;

    // Обработчик для движения мыши
    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX; // Расстояние перемещения курсора

      // Вычисляем новые размеры секций
      const newLeftWidth = leftSectionWidth + deltaX;
      const newMiddleWidth = middleSectionWidth - deltaX;

      // Применяем ограничения для ширины
      if (newLeftWidth >= MIN_WIDTH && newLeftWidth <= MAX_WIDTH) {
        leftSection.style.width = `${newLeftWidth}px`; // Меняем ширину левой секции
      }
      if (newMiddleWidth >= MIN_WIDTH && newMiddleWidth <= MAX_WIDTH) {
        middleSection.style.width = `${newMiddleWidth}px`; // Меняем ширину средней секции
      }
    };

    // Обработчик для завершения ресайза
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    // Добавляем обработчики для движения и завершения
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  // Обработчик изменения для второго ресайзера (между средней и правой секцией)
  const onMouseDownResizer2 = (e: React.MouseEvent) => {
    e.preventDefault();

    // Запоминаем начальную позицию мыши
    const startX = e.clientX;
    const middleSection = middleSectionRef.current!;
    const rightSection = rightSectionRef.current!;

    // Получаем текущие размеры секций
    const middleSectionWidth = middleSection.offsetWidth;
    const rightSectionWidth = rightSection.offsetWidth;

    // Обработчик для движения мыши
    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX; // Расстояние перемещения курсора

      // Вычисляем новые размеры секций
      const newMiddleWidth = middleSectionWidth + deltaX;
      const newRightWidth = rightSectionWidth - deltaX;

      // Применяем ограничения для ширины
      if (newMiddleWidth >= MIN_WIDTH && newMiddleWidth <= MAX_WIDTH) {
        middleSection.style.width = `${newMiddleWidth}px`; // Меняем ширину средней секции
      }
      if (newRightWidth >= MIN_WIDTH && newRightWidth <= MAX_WIDTH) {
        rightSection.style.width = `${newRightWidth}px`; // Меняем ширину правой секции
      }
    };

    // Обработчик для завершения ресайза
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    // Добавляем обработчики для движения и завершения
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        ref={leftSectionRef}
        style={{
          backgroundColor: 'lightblue',
          width: '300px',
          minWidth: MIN_WIDTH,
          maxWidth: MAX_WIDTH,
          height: '100vh',
        }}
      >
        Left Section
      </div>
      <div
        ref={resizer1Ref}
        style={{
          width: '10px',
          backgroundColor: 'gray',
          cursor: 'ew-resize',
        }}
        onMouseDown={onMouseDownResizer1}
      />
      <div
        ref={middleSectionRef}
        style={{
          backgroundColor: 'lightgreen',
    
