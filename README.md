# Регистрација за гласање из иностранства

Ово је алатка за _боље повезивање дијаспоре са процесима у Србији._
Ова алатка је блага дорада одличног кодирања од стране Богдана Ђукића 2017-те године. Оригинални код можете нађи [овде](https://github.com/bdjukic/glasajDijasporo)

Годинама је процес регистрације за гласање из иностранства био доста лош:
1. Иди на сајт министартва спољних послова да нађеш страницу амбасаде
2. На страници амбасаде нађи упутства за скидање формулара за регистровање за гласање
3. На страници амбасаде нађи мејл за слање попуњеног формулара
3. Скини и одштампај формулар (и надај се да је ОК квалитета)
4. Попуни формулар
5. Скенирај или фотографиши формулар
6. Пошаљи слику пасоша и попуњеног формулара на мејл адресу коју си нашао/ла


Искрено, ово нема смисла од 2015-те наовамо. Нови процес са овом алатком је
1. Иди до алатке на [hocudaglasam.com](https://hocu-da-glasam.web.app)
2. Попуни све податке и потпиши на на телефону
3. Добијени ПДФ документ и слику пасоша пошаљи на адресу амбасаде која ти је дата када си одабрао/ла државу где сада пребиваш


## Одговори на очекивана питања
### Како ово ради а да не скупља податке?
Сајт просто додаје ваше унете податке на празан формулар за пријаву за гласање у инострантсву [(овде)](https://github.com/lvazic/glasanje/blob/master/src/assets/VotingRequestDocument.pdf). **Подаци су код вас, у вашем уређају и нестају чим затворите сајт или када направите попуњен захтев.**

Оригинални приступ је одлична идеја од претходног пројекта који можете наћи [овде](https://github.com/bdjukic/glasajDijasporo).

### _Јесте_, како да знам да не скупљате податке?
Програмски код сајта је овде доступан свима да га анализирате. Сајт је направљен на принципима [отвореног кода](https://sr.wikipedia.org/wiki/%D0%9E%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD_%D0%BA%D0%BE%D0%B4). Детаљније објашњење принципа отвореног кода на енглеском је [овде](https://en.wikipedia.org/wiki/Open_source)

### Зашто ово радите?
Зато што нас смара да не можемо ништа да средимо пошто наша дипломатија нема адектавне ресурсе. Људи по амбасада и конзулатима су супер и хоће да помогну, али немају добре процесе ни алате. Овако желимо да помогнемо.

### Ма нема шансе да ово ради за мене. Код мене нема амбасаде...
По Закон о избору народних посланика [члан 52.](http://www.pravno-informacioni-sistem.rs/SlGlasnikPortal/eli/rep/sgrs/skupstina/zakon/2000/35/1/reg), отварање бирачког места захтева барем 100 гласача. У складу са тим, ако 100 грађана захтева исту локацију , нпр. Сингапур, амбасада/конзулат има обавезу да размотри опције са РИК-ом и види како да организује гласање.


##Технички детаљи ако хоћете да тестирате апликацију
### Glasanje

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
