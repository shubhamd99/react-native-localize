# React Native Localize Example

* When we change the language in the system settings, it will change the text that we specified automatically.

```
import * as RNLocalize from "react-native-localize";
 
console.log(RNLocalize.getLocales());
console.log(RNLocalize.getCurrencies());
 
RNLocalize.addEventListener("change", () => {
  // do localization related stuff…
});
```

* Returns the user preferred locales, in order.
```
console.log(RNLocalize.getLocales());
```

* Returns the user current country code (based on its device locale, not on its position).
```
console.log(RNLocalize.getCountry()); // "FR"
```

* Returns the user preferred calendar format.
```
console.log(RNLocalize.getCalendar()); // -> "gregorian"
```

* findBestAvailableLanguage() - Returns the best language tag possible and its reading direction (⚠️ it respects the user preferred languages list order, see explanations). Useful to pick the best translation available.

```
console.log(RNLocalize.findBestAvailableLanguage(["en-US", "en", "fr"]));
// -> { languageTag: "en-US", isRTL: false }
```

