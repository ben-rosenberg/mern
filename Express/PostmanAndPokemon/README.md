# Postman + Pokemon

Querying the PokeAPI with Postman. These are the five requests I chose and their results.

## 1. "https://pokeapi.co/api/v2/pokemon/2"

```json
{
    "abilities": [
        {
            "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 142,
    "forms": [
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon-form/2/"
        }
    ],
    ...
}
```

## 2. "https://pokeapi.co/api/v2/pokemon?limit=5"

```json
{
    "count": 1126,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=10&limit=5",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon/5/"
        }
    ]
}
```

## 3. "https://pokeapi.co/api/v2/pokemon?offset=10&limit=5"

```json
{
    "count": 1126,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=15&limit=5",
    "previous": "https://pokeapi.co/api/v2/pokemon?offset=5&limit=5",
    "results": [
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        }
    ]
}
```

## 4. "https://pokeapi.co/api/v2/pokemon/pikachu"

```json
{
    "abilities": [
        {
            "ability": {
                "name": "static",
                "url": "https://pokeapi.co/api/v2/ability/9/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "lightning-rod",
                "url": "https://pokeapi.co/api/v2/ability/31/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    ...
}
```

## 5. "https://pokeapi.co/api/v2/type/electric"

```json
{
"damage_relations": {
    "double_damage_from": [
        {
            "name": "ground",
            "url": "https://pokeapi.co/api/v2/type/5/"
        }
    ],
    "double_damage_to": [
        {
            "name": "flying",
            "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
            "name": "water",
            "url": "https://pokeapi.co/api/v2/type/11/"
        }
    ],
    ...
}
```
