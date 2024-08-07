# Realchill - гайд по установке (вдруг кому надо)

## Для тех кто знает что делает

[Архивы со сборкой лежат тут](https://github.com/ThatDraenGuy/realchill/releases)  
Ссылка на хостинг [packwiz](https://packwiz.infra.link/)-сборки: http://draen.ru/~noah/realchill/  
[Подготовленный PrismLauncher-инстанс](http://draen.ru/~noah/realchill/RealChill.zip)

## Для тех, кто не знает/не уверен

Есть 2 стула:

1. качать и ставить архив со сборкой "ручками"

-   Думать не нужно
-   Установка по старинке
-   Юзаете любой лаунчер какой хотите
-   Придётся так же ручками переставлять каждый раз, когда сборка будет обновляться

2. настроить packwiz, который будет автоматически подгружать изменения сборки перед стартом игры

-   Нужно чуть-чуть понастраивать
-   Для полного удобства нужен адекватный лаунчер, поддерживающий исполнение команд перед стартом игры. Я бы посоветовал [Prism Launcher](https://prismlauncher.org/) для лицензионщиков и [Ely Prism Launcher](https://github.com/Octol1ttle/ElyPrismLauncher) для людей с [Ely.by](https://ely.by)-аккаунтами

## Установка сборки ручками

1. Идём в [релизы](https://github.com/ThatDraenGuy/realchill/releases) и качаем архив со сборкой
2. Заходим в лаунчер
3. Создаём профиль с версией майнкрафта 1.20.1 и версией Fabric 0.15.11
4. Заходим в директорию майнкрафта (обычно `.minecraft`) и разархивируем туда сборку
5. Запускаем игру.

## Установка через packwiz

Тут тоже два варианта - можете настроить сами, либо взять готовый инстанс для Prism-подобных лаунчеров у меня

### Готовый инстанс

Качаем архив инстанса [здесь](http://draen.ru/~noah/realchill/RealChill.zip)  
Заходим в Prism-лаунчер, создаём новый инстанс, выбираем Import и выбираем скачанный zip-инстанс. Нажимаем ОК.
Теперь есть инстанс, при запуске игры он подгрузит сборку

### Ручная настройка инстанса

Просто следуем этому [гайду](https://packwiz.infra.link/tutorials/installing/packwiz-installer/), начиная с пункта `Creating a MultiMC instance for your modpack`:

1. Создаём в лаунчере инстанс с версиями майнкрафта 1.20.1 и версией Fabric 0.15.11
2. Запускаем игру один раз чтобы создалась директория
3. Качаем [packwiz-installer-bootstrap](https://github.com/packwiz/packwiz-installer-bootstrap/releases) и кладём его в `.minecraft` инстанса
4. В настройках профиля добавляем кастомную pre-launch команду `"$INST_JAVA" -jar packwiz-installer-bootstrap.jar http://draen.ru/~noah/realchill/pack.toml`
5. Запускаем инстанс, сборка скачивается за вас
