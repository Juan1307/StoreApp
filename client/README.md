### Proyecto TiendaApp

Un proyecto impulsado bajo un esquema de entegracion entorno a la sostenabilidad en acuicultura y agricultura.

la verdad no se aun aaaggasda

#### Sublime Text 3 - Config : 

Provocado por nvm y el entorno de ejecucion de node.
- **Eslint** : No detectara el .eslintrc.json en el proyecto.

Para sublime text 3 abrir Ctrl + Shif + P > Preferences: SublimeLinter Settings.
cambiar la ruta a nvm con la version que estas usando en tu entorno de node

// SublimeLinter Settings - User
{ 
  //"lint_mode": "load_save",
  "paths": {
        "linux": [],
        "osx": [],
        "windows": ["C:/Users/juan_/AppData/Roaming/npm/eslint"] // before 
        "windows": ["C:/Users/juan_/AppData/Roaming/nvm/v16.13.2"] // now 
    },
    "show_marks_in_minimap": false,
    "linters": {
        "eslint": {
        "selector": "text.html.vue, source.js, source.ts, source.jsx, source.tsx - meta.attribute-with-value"
        }
    }
}
