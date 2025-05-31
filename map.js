export {initMap};


async function initMap() {
  ymaps3.import.registerCdn('https://cdn.jsdelivr.net/npm/{package}', '@yandex/ymaps3-default-ui-theme@latest');
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer} = ymaps3;
  const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.querySelector('.map'),

    // Передаём параметры инициализации карты
    {
      location: {
          // Координаты центра карты
          center: [53.885437, 30.280879],

          // Уровень масштабирования
          zoom: 10
      }
    }
  );
  
  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultMarker(YMapGeolocationControl, YMapZoomControl));
}
