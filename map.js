export {initMap};


async function initMap() {
  ymaps3.import.registerCdn('https://cdn.jsdelivr.net/npm/{package}', '@yandex/ymaps3-default-ui-theme@latest');
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;
  const { YMapDefaultMarker, YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

  // Инициализация карты
  const map = new YMap(
    document.querySelector('.map'),
    {
      location: {
        center: [53.88555853854745, 30.280704395752316], // Координаты Челюскинцев 155
        zoom: 15 // Увеличенный масштаб для лучшей видимости маркера
      }
    }
  );

  // Добавляем слой карты
  map.addChild(new YMapDefaultSchemeLayer());

  // Добавляем элементы управления (увеличение/уменьшение масштаба)
  map.addChild(new YMapZoomControl());

  // Добавляем маркер на нужные координаты
  const marker = new YMapDefaultMarker({
    coordinates: [53.88539, 30.28085], // Координаты Челюскинцев 155
    title: "Полимерснабжение" // Подпись маркера
  });

  map.addChild(marker);
}
