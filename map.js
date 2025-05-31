export {initMap};


// async function initMap() {
//   await ymaps3.ready;
//   ymaps3.import.registerCdn('https://cdn.jsdelivr.net/npm/{package}', '@yandex/ymaps3-default-ui-theme@latest');

//   const { YMap, YMapDefaultSchemeLayer } = ymaps3;
//   const { YMapDefaultMarker, YMapZoomControl, YMapGeolocationControl } = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

//   // Инициализация карты
//   const map = new YMap(
//     document.querySelector('.map'),
//     {
//       location: {
//         center: [53.88556, 30.28070], // Координаты Челюскинцев 155
//         target: [53.88556, 30.28070],
//         zoom: 15 // Увеличенный масштаб для лучшей видимости маркера
//       }
//     }
//   );

//   // Добавляем слой карты
//   map.addChild(new YMapDefaultSchemeLayer());

//   map.YMapGeolocationControl({

//   })

//   // Добавляем элементы управления (увеличение/уменьшение масштаба)
//   map.addChild(new YMapZoomControl());

//   // Добавляем маркер на нужные координаты
//   const marker = new YMapDefaultMarker({
//     coordinates: [53.88555853854745, 30.280704395752316], // Координаты Челюскинцев 155
//     title: "Полимерснабжение" // Подпись маркера
//   });

//   map.addChild(marker);
// }
async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapControls } = ymaps3;

  // Инициализация карты
  const map = new YMap(
    document.querySelector('.map'),
    {
      location: {
        center: [53.88556, 30.28070], // Центрируем карту на нужной точке
        zoom: 15, // Оптимальный масштаб для видимости маркера
      },
      controls: ['zoomControl'] // Добавляем элементы управления масштабом
    }
  );

  // Добавляем слой карты
  map.addChild(new YMapDefaultSchemeLayer());

  // Добавляем маркер
  const marker = new YMapMarker({
    coordinates: [53.88556, 30.28070], // Координаты маркера
    draggable: false, // Маркер статичен
    icon: '<div style="width: 20px; height: 20px; background-color: red; border-radius: 50%;"></div>' // Простая стилизация маркера
  });

  map.addChild(marker);

  // Добавляем элементы управления
  const controls = new YMapControls({ position: 'right' });
  map.addChild(controls);
}