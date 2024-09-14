Little Moon
===========

An interpretation of the [Selenized][selenized] color scheme, focusing on simplicity and readability.

The name of this theme is a few puns layered on top of each other; Ethan Schoonover's [Solarized][solarized] is obviously named for the sun (solar), and was shifted toward the moon (Selene (the Greek goddess)) by Jan Warchoł to make [Selenized][seleized-improvements]. I'm trying to pull elements (specifically the simplicity) from the [Gatito theme][gatito-theme] (Spanish for "small cat") into a new interpretation of the Selenized palette. So I put "small" and "moon" together.

Hence, Little Moon.

This repository is properly a fork of Mr EdHeltzel's [Better Solarized + Selenized][vscode-better-solarized] theme. It draws from the prior work of the aforementioned themes, Better Selenized, the Dmytro Voronianski's [Oceanic Next][oceanic-next] theme for Sublime Text, and Pawel Grzybek's [Gatito Theme][gatito-theme]. At this point, it's really just the scaffolding that edheltzel set up for modifying themes and building extension packs that remains from the fork, so the history has been severed for the sake of conceptual purity.

[selenized]: https://github.com/jan-warchol/selenized
[vscode-better-solarized]: https://github.com/edheltzel/vscode-better-solarized
[oceanic-next]: https://github.com/voronianski/oceanic-next-color-scheme
[gatito-theme]: https://github.com/pawelgrzybek/gatito-theme
[solarized]: https://ethanschoonover.com/solarized/
[selenized-improvements]: https://github.com/jan-warchol/selenized/blob/master/whats-wrong-with-solarized.md


Development
-----------

This theme uses the [Eleventy](https://11ty.dev) static site generator to feed JS data definitions into Nunjucks templates to produce JSON themes. All credit to edheltzel for the structure.

### Building via Extension Host

1. Run `pnpm install`
2. Execute the **run without debugging**: `Run > Run without debugging` OR `ctrl + F5` (see: [VSCode Debugging](https://code.visualstudio.com/Docs/editor/debugging#_run-mode)).

   This will launch a new window with this extension available in a hot-loadable state.
3. Execute `pnpm run watch`. Either

   - Open `Tasks: Run Task` from the Command Palette and select `npm: watch`, or
   - Open a terminal, and run `pnpm run watch`.
4. Edit `src/data/themes.js` and/or any of the `src/*.njk` files.

### Building via VSCE Jankery

Because the extension host only runs the one VS Code window with the theme, I decided to jump through some self-imposed hoops to let myself view changes across multiple windows as I iterated. That process was as follows

1. Run `pnmp install`
2. Add this dumb function to your shell (after editing `/{path/to}/vscode-little-moon` as needed),

   ```sh
   function reup_little_moon {
       local __RULM_IN_DIR=0
       if [ `pwd` = "${HOME}/{path/to}/vscode-little-moon" ]; then
           __RULM_IN_DIR=1
       fi
       if [ ${__RULM_IN_DIR} -eq 0 ]; then pushd /{path/to}/vscode-little-moon; fi
       pnpm dlx @11ty/eleventy && \
           vsce package && \
           code --uninstall-extension pyrrho-little-moon-themes-0.0.1.vsix && \
           code --install-extension pyrrho-little-moon-themes-0.0.1.vsix
       if [ ${__RULM_IN_DIR} -eq 0 ]; then popd; fi
   }
   ```
3. Edit `src/data/themes.js` and/or any of the `src/*.njk` files.
4. Execute `reup_little_moon` from any terminal as often as you'd like.

### Tips in Either Case

- Because it can be annoying to wait for changes to propagate through the extension host or through the the package-uninstall-reinstall dance, it will sometimes speed up experimentation to copy rules into your setting.json's `"workbench.colorCustomizations"` or `"editor.tokenColorCustomizations"` override object, and get immediate feedback on changes. Once you've found what you want, you can copy those values back into the .njk/.js files.
- The `Developer: Toggle Developer Tools` (`workbench.action.toggleDevTools`) and `Developer: Inspect Editor Tokens and Scopes` (`editor.action.inspectTMScopes`) commands are very useful for figuring out what's what.
- Check the extract_off_theme_rules.md for a way to look at what isn't being touched by your theme.

Pending TODOs:
==============
- Themes:
   - Merge editor
   - Diff viewer
   - Welcome Page
- Move off of the Solarized icon.png
