# Catalogos CONACYT VueJS
Un componente de VueJs para mostrar los distintos catálogos comunes de CONACYT

## Getting started
Check this [link](https://conacyt-arquitectura.github.io/npm/configuracion-cliente-npm) for configuring your npm client for private repository.

To install with npm use `npm i @conacyt/catalogos`  
To install with yarn use `yarn add @conacyt/catalogos`

## Usage
```
<div id="app">
    <catalogo
        :host="
          'https://my-json-server.typicode.com/robertovillarejo/catalogos-conacyt-vuejs/'
        "
        :name="'tipoInstitucion'"
        :lang="lang"
        :required="true"
        v-model="myModel"
      ></catalogo>
</div>
```

## Development
For development with Hot Replace Module use `npm run serve` for serving the `example` folder.

### Building
Use `npm run build` to produce the distribution files in `dist` folder.