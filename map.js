export async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer, YMapZoomControl } = ymaps3;

  // Инициализация карты
  const map = new YMap(
    document.querySelector('.map'),
    {
      location: {
        center: [30.28070, 53.88556], // Центрируем карту на нужной точке
        zoom: 17, // Оптимальный масштаб для видимости маркера
      },
      controls: ['zoomControl'], // Добавляем элементы управления масштабом
      showScaleInCopyrights: true,
    }
  );

  // Добавляем слой карты
  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());
}