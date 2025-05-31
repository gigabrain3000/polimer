export async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer } = ymaps3;

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

  // Добавляем маркер
  // const marker = new YMapMarker({
  //   coordinates: [30.28070, 53.88556], // Координаты маркера
  //   draggable: false, // Маркер статичен
  //   icon: '<div style="width: 20px; height: 20px; background-color: red; border-radius: 50%;"></div>' // Простая стилизация маркера
  // });

  // map.addChild(marker);
  ymaps3.import.registerCdn('https://cdn.jsdelivr.net/npm/@yandex/ymaps3-default-ui-theme', [
  '@yandex/ymaps3-default-ui-theme@0.0.19'
]);

// после этого можем импортировать компоненты из пакета в проект
const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-default-ui-theme');
map.addChild(
  new YMapDefaultMarker({
    coordinates: [30.28070, 53.88556],
    title: 'Полимерснабжение'
  })
);

const controls = new YMapControls();
controls.addChild(
  new YMapZoomControl({
    easing: 'linear'
  })
);

map.addChild(controls);
}