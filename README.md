# string-it-up

---

## npm library used to simplify your life when it comes to using strings.

## Installation (is simple)

`npm i string-it-up`

---

# Using the lib

## capitalize()

#### makes the first character of a given string uppercase.

```js
capitalize("moose is the best");
// returns 'Moose is the best'
```

## allCaps()

#### makes all characters uppercase. (this is the same as str.toUpperCase())

#### (think screaming kids)

```js
allCaps("and he loves to play fetch");
// returns 'AND HE LOVES TO PLAY FETCH'
```

## capitalizeWords()

#### makes the first character of each word uppercase. Each word is separated by a space.

```js
capitalizeWords("all day in the park");
// returns 'All Day In The Park'
```

## capitalizeHeadline()

#### capitalizes all of the words in a string

#### EXCLUDING (and will lowercase them in case you didn't)

#### 'and', 'an', 'a', 'at', 'but', 'by', 'for', 'in', 'the', and 'is'

```js
capitalizeHeadline("is What Is this is is THE IN whichery?");
// returns 'Is What is This is is the in Whichery?'
```

## removeExtraSpaces()

#### Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.

#### Removes any empty characters more than one space

```js
capitalizeWords("    my    doggo moose IS THE BOMB    jigidy     ");
// returns 'my doggo moose IS THE BOMB jigidy'
```

## kebobCase()

#### Removes extra spaces and replaces spaces with the hyphen "-"

#### makes all characters lowercase.

```js
kebobCase("This-is-test and who knows if itll WORk");
// returns 'this-is-test-and-who-knows-if-itll-work'
```

## snakeCase()

#### Removes extra spaces and replaces spaces with the underscore "\_"

#### makes all characters lowercase.

```js
snakeCase("  and - remove the other 23@@#characters!");
// returns 'and_remove_the_other_23characters'
```

## camelCase()

#### Lowercases the first character of the first word.

#### Then uppercases the first character of all other words, and removes all spaces.

```js
camelCase("This is moose BOBBY alex MAXIMUSIMUS");
// returns 'thisIsMooseBobbyAlexMaximusimus'
```

## shift()

#### this method will take the first character of a string and move to the end of a string:

#### with a second int input, specify how many character to shift

```js
shift("what is going on here?");
// hat is going on here?w'

shift("what is going on here?", 4);
// returns ' is going on here?what'
```

## makeHashTag()

#### This function converts the given string to a hashtag #Yolo

#### if string is three words or less, all words will be returned as hashtags

#### output is a list of all terms with an uppercase letter and beginning with '#'

```js
makeHashTag("this is a bambooozeled mooose MAXIMILIUS");
// returns [ '#Bambooozeled', '#MAXIMILIUS', '#Mooose' ]

makeHashTag("fun times");
// returns [ '#times', '#fun' ]
```

## isEmpty()

#### Returns true if the given string is empty or contains only whitespace

#### Return flase if the given string is not empty

```js
isEmpty("    \n\r\t     ");
// returns true

isEmpty("abc def");
// returns false
```
